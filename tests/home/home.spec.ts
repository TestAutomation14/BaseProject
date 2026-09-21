// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

// ===================== Part 1 (15 tests) - My Reminders =====================

test.describe('HomeMyReminders', () => {
  test('HomeMyReminders_105471', async ({ personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105471', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Personnel');
      await loaderPage.navigateToScreen('Personnel Search');
      await personnel.module.switchToPersonnelSearch();
      await personnel.personnelSearch.enterAtPF();
      await personnel.personnelSearch.clickSearchButton();
      await personnel.personnelSearch.verifyAtPFCodeInGrid(0);
      await personnel.personnelSearch.selectRowAtPFCode();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.clickAssignmentTab();
      await personnel.personnelEntry.personnelEntryAssignmentTab.enterAssignmentDateAs30DaysPastFromCurrentDate();
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectNextReviewDueInAsOneMonth();
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectJobGradeAsJobGrade1();
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtTitleRank();
      await personnel.personnelEntry.personnelEntryAssignmentTab.enterAtBadge();
      await personnel.personnelEntry.save();
      await personnel.personnelEntry.verifyUpdateSuccessfulMessage();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('HomeMyReminders_105497', async ({ home, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105497', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickJobGradeReviewAccordion();
      await home.myHome.myRemindersTab.VerifyPFCodeAtPFCode();
      await home.myHome.myRemindersTab.VerifyRankAsDetectiveByAtPFCode();
      await home.myHome.myRemindersTab.VerifyAtbadgeNoInPfCode();
      await home.myHome.myRemindersTab.VerifyJobGradeAsJobGrade1ByAtPFCode();
      await home.myHome.myRemindersTab.VerifyNextReviewDateAsCurrentDateByAtPFCode();
      await home.myHome.myRemindersTab.SelectRowAtPFCode();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.save();
      await personnel.personnelEntry.verifyUpdateSuccessfulMessage();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('HomeMyReminders_105506', async ({ personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105506', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Personnel');
      await loaderPage.navigateToScreen('Performance Review');
      await personnel.module.switchToPerformanceReview();
      await personnel.performanceReview.enterAtPFCode();
      await personnel.performanceReview.clickSearchButton();
      await personnel.performanceReview.selectRowAtPFCode();
      await personnel.module.switchToPerformanceReviewEntry();
      await personnel.performanceReviewEntry.clickApprovalTab();
      await personnel.performanceReviewEntry.enterNextReviewDueAs2DaysFutureFromCurrentDate();
      await personnel.performanceReviewEntry.save();
      await personnel.performanceReviewEntry.VerifyUpdateSuccessfulMessage();
      await personnel.performanceReviewEntry.closeTheScreen();
      await personnel.module.switchToPerformanceReview();
    });
  });

  test('HomeMyReminders_105509', async ({ home, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105509', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickPerformanceReviewAccordation();
      await home.myHome.myRemindersTab.VerifyPFCodeAtPFCodeInPerformanceRev(0);
      await home.myHome.myRemindersTab.VerifyNextReviewDateAs2DaysFutureFromCurrentDayByAtPFCode();
      await home.myHome.myRemindersTab.SelectRowAtPFCodeInPerformanceRev();
      await personnel.module.switchToPerformanceReviewEntry();
      await personnel.performanceReviewEntry.closeTheScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('MyReminders_105511', async ({ vehicle, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105511', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Inventory & Fleet');
      await loaderPage.navigateToScreen('Fleet Search');
      await vehicle.module.switchToFleetSearch();
      await vehicle.fleetSearch.selectAtFleetId();
      await vehicle.fleetSearch.clickSearchButton();
      await vehicle.fleetSearch.selectRowByAtFleetId();
      await vehicle.module.switchToFleetEntry();
      await vehicle.fleetEntry.clickMainTab();
      await vehicle.fleetEntry.selectAtStorageLocation();
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton();
      await vehicle.module.switchToFleetEntry();
      await vehicle.fleetEntry.clickMaintainenceScheduleTab();
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType();
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month();
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton();
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyServiceTypeInGrid();
      await vehicle.module.switchToFleetEntry();
      await vehicle.fleetEntry.save();
      await vehicle.fleetEntry.verify1003UpdateSuccessfulFooterMessage();
      await vehicle.fleetEntry.close();
      await vehicle.module.switchToFleetSearch();
    });
  });

  test('MyReminders_105517', async ({ home, vehicle, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '105517', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickFleetAccordation();
      await home.myHome.myRemindersTab.VerifyAtFleetId();
      await home.myHome.myRemindersTab.VerifyDueOneMonthFutureDateFromCurrentDate();
      await home.myHome.myRemindersTab.SelectRowByAtFleetId();
      await vehicle.module.switchToFleetEntry();
      await vehicle.fleetEntry.close();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106639', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106639', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickExpandAllCheckBox();
      await home.myHome.myRemindersTab.VerifyFleetNoDataDisplay();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106640', async ({ inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106640', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule(' Inventory & Fleet');
      await loaderPage.navigateToScreen('Inventory Search');
      await inventory.module.SwitchToInventorySearch();
      await inventory.inventorySearch.enterAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.clickMainTab();
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAs1DayFutureDateFromCurrentDate();
      await inventory.inventoryEntry.save();
      await inventory.inventoryEntry.VerifyUpdteSuccessfullMessage();
    });
  });

  test('MyReminders_106641', async ({ home, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106641', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.VerifyAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyItemTypeAsDesktopComputerByAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyItemDescriptionAsComputerPartsByAtInventoryNo();
      await home.myHome.myRemindersTab.SelectRowAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.close();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('MyReminders_106642', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106642', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.VerifyAtInventoryNoNotAppearInGrid();
    });
  });

  test('MyReminders_106645', async ({ inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106645', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule(' Inventory & Fleet');
      await loaderPage.navigateToScreen('Inventory Search');
      await inventory.module.SwitchToInventorySearch();
      await inventory.inventorySearch.enterAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.clickMainTab();
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAsCurrentDate();
      await inventory.inventoryEntry.save();
      await inventory.inventoryEntry.VerifyUpdteSuccessfullMessage();
    });
  });

  test('MyReminders_106646', async ({ home, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106646', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.VerifyAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyItemTypeAsDesktopComputerByAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyItemDescriptionAsComputerPartsByAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyLastDateInRedColor();
      await home.myHome.myRemindersTab.SelectRowAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.close();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_134085', async ({ inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '134085', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Inventory');
      await loaderPage.navigateToScreen('Inventory Search');
      await inventory.module.SwitchToInventorySearch();
      await inventory.inventorySearch.enterAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.clickPurchaseHistoryTab();
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterByPF();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost();
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton();
      await inventory.inventoryEntry.purchaseHistoryTab.SelectRandomRowInGrid();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterExpirationDateAsOneDayFutureFromCurrentDate();
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyExpirationDateAsOneDayFutureFromCurrentDate();
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton();
      await inventory.inventoryEntry.save();
      await inventory.module.SwitchToInventoryEntry();
    });
  });

  test('MyReminders_134087', async ({ home, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '134087', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.VerifyAtInventoryNo();
      await home.myHome.myRemindersTab.VerifyExpirationDateAsOneDayFutureFromCurrentDateByAtInventoryNo();
      await home.myHome.myRemindersTab.SelectRowAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
    });
  });

  test('MyReminders_134088', async ({ home, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '134088', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.VerifyAtInventoryNo();
      await home.myHome.myRemindersTab.SelectRowAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.clickPurchaseHistoryTab();
      await inventory.inventoryEntry.purchaseHistoryTab.SelectRandomRowInGrid();
      await inventory.inventoryEntry.purchaseHistoryTab.ClearExpirationDate();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterExpirationDateAsCurrentDate();
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyExpirationDateAsCurrentDate();
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton();
      await inventory.inventoryEntry.saveNClose();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickRefreshButton();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.VerifyAtInventoryNoNotAppearInGrid();
    });
  });
});

// ===================== Part 2 (12 tests) - Certification/Training/Activity Reminders =====================

test.describe('HomeRemindersAndTraining', () => {
  test('MyReminders_106665', async ({ training, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106665', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickAddNew();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.enterAtPFCode();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.selectAsCertification();
      await training.certificationManualEntry.save();
      await training.certificationManualEntry.verifyAdditionSuccessFullMessage();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.ClickMainTab();
      await training.certificationManualEntry.enterEarnedCEUsAsFive();
      await training.certificationManualEntry.enterEarnedHoursAsOneHour();
      await training.certificationManualEntry.enterEffectiveFromAsCurrentDate();
      await training.certificationManualEntry.enterReason();
      await training.certificationManualEntry.enterAtEnteredBy();
      await training.certificationManualEntry.InternalSave();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.VerifyUpdateSuccessfulAcknowledgeMessage();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.certificationManualEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.closeCertificationManualEntryScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('MyReminders_106668', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106668', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickCertificationAccordion();
      await home.myHome.myRemindersTab.VerifyCertificationAsSeleniumCertification(0);
      await home.myHome.myRemindersTab.VerifyRecertifyByAsFutureDate(0);
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106705', async ({ training, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106705', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickAddNewLink();
      await training.module.switchToClassEntry();
      await training.classEntry.selectTrainingCategoryAsPolice();
      await training.classEntry.selectTrainingTypeAsSeleniumTraining();
      await training.classEntry.enterEntryDate();
      await training.classEntry.enterNoOfStudentsAs1();
      await training.classEntry.enterCourseNoAs1000();
      await training.classEntry.enterTrainingScheduleDate();
      await training.classEntry.enterTrainingScheduleTime();
      await training.classEntry.enterToDate();
      await training.classEntry.enterToTime();
      await training.classEntry.switchToTrainingDetailTab();
      await training.classEntry.classEntryTrainingDetailTab.selectQualificationPeriodAsNone();
      await training.classEntry.classEntryTrainingDetailTab.enterRequalifyByAsTomorrowDate();
      await training.classEntry.save();
      await training.classEntry.VerifyAddtionSucessfullMessage();
      const readClassNo = await training.classEntry.readClassNo();
      await training.module.switchToClassEntry();
      await training.classEntry.closeTrainingClassEntryScreen();
      await training.module.switchToClassSearch();
      await training.classSearch.verifyClassNoInGrid(readClassNo);
    });
  });

  test('MyReminders_106706', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106706', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyTrainingTab();
      await home.myHome.myTrainingTab.ClickUpcommingTrainingclassesAccordion();
      await home.myHome.myTrainingTab.VerifyTrainingTypeAsSeleniumTraining(0);
      await home.myHome.myTrainingTab.VerifyCurrentDate(0);
    });
  });

  test('MyReminders_106707', async ({ home, training, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106707', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyTrainingTab();
      await home.myHome.myTrainingTab.ClickUpcommingTrainingclassesAccordion();
      await home.myHome.myTrainingTab.VerifyTrainingTypeAsSeleniumTraining(0);
      await home.myHome.myTrainingTab.VerifyCurrentDate(0);
      await home.myHome.myTrainingTab.ClickRowInUpcomingTrainingClassesGrid(0);
      await training.module.switchToClassEntry();
      await training.classEntry.clickSignUpButton();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await training.module.switchToClassEntry();
      await training.classEntry.closeTrainingClassEntryScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyTrainingTab();
      await home.myHome.myTrainingTab.ClickUpcommingTrainingclassesAccordion();
      await home.myHome.myTrainingTab.verifyTrainningTypeColorAsBlueColor(0);
    });
  });

  test('MyReminders_106708', async ({ home, training, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106708', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyApprovalTab();
      await home.myHome.myApprovalTab.SelectStatusAsSubmitted();
      await home.myHome.myApprovalTab.SelectItemTypeAsTrainingClass();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.VerifyRefAsSeleniumTraining(0);
      await home.myHome.myApprovalTab.VerifyCurrentDate(0);
      await home.myHome.myApprovalTab.ClickRowInApprovalTabGrid(0);
      await training.module.switchToClassEntry();
      await training.classEntry.switchToRequestTab();
      await training.classEntry.requestTab.clickAcceptCheckBox();
      await training.classEntry.save();
      await training.module.switchToClassEntry();
      await training.classEntry.VerifyUpdateSucessfullMessage();
      await training.module.switchToClassEntry();
    });
  });

  test('MyReminders_106709', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106709', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickTrainingAccordion();
      await home.myHome.myRemindersTab.VerifyPFNameAsPatrolOfficer(0);
      await home.myHome.myRemindersTab.VerifyTitleAsSeleniumAutomationTraining(0);
      await home.myHome.myRemindersTab.VerifyRequalifyByAsFutureDate(0);
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106710', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106710', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectCategoryGroupAsPIPolice();
      await activity.activityEntry.SelectCategoryAsDamage();
      await activity.activityEntry.SelectActivityTypeAsDamage();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.EnterSubjectAsTesting();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.EnterPFAtPFCode();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.clickAddButton();
      await activity.activityEntry.activityEntryOtherTab.verifyAtPFInGrid('Patrol, Officer');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.Close();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('MyReminders_106711', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106711', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.VerifyDateTimeAsCurrentDate();
      await home.myHome.myRemindersTab.VerifyStatusAsRequestToDo();
      await home.myHome.myRemindersTab.VerifySubjectAsTesting();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106712', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106712', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.VerifyDateTimeAsCurrentDate();
      await home.myHome.myRemindersTab.VerifyStatusAsRequestToDo();
      await home.myHome.myRemindersTab.VerifySubjectAsTesting();
      await home.myHome.myRemindersTab.ClickActivityRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectActivityStatusAsCompletedActivity();
      await activity.activityEntry.Save();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.activityEntry.Close();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_106713', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '106713', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.verifyCountInMyActivitiesGrid(3);
      await home.module.switchToMyHomeScreen();
    });
  });

  test('MyReminders_250173', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '250173', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.VerifyRecordsRequestsISEnabled();
      await home.myHome.myRemindersTab.ClickRecordsRequestsAccordion();
      await home.myHome.myRemindersTab.VerifyRecordsRequestsCount();
      await home.myHome.myRemindersTab.VerifyAtRequestNoFromGrid();
      await home.myHome.myRemindersTab.VerifyAtRequestedByFromGrid();
      await home.myHome.myRemindersTab.VerifyAtRequestTypeFromGrid();
      await home.myHome.myRemindersTab.VerifyAtCallAndCaseFromGrid();
      await home.myHome.myRemindersTab.VerifyAtAssignedToFromGrid();
      await home.module.switchToMyHomeScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });
});

// ===================== Part 3 (14 tests) - Activity Search Functional 1 =====================

test.describe('HomeActivitySearchFunctional1', () => {
  test('ActivitySearch_166232', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166232', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterActivityPeriod();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166243', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166243', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtCategoryGroup();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166265', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166265', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtCategory();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
    });
  });

  test('ActivitySearch_166796', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166796', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtActivityType();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166840', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166840', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtActivityBy();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166905', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166905', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtUnit();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166910', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166910', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtActivityStatus();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166956', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166956', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtPriority();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.verifyAtPriority();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166959', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166959', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtFleet();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtFleet();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166960', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166960', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectCategoryGroup();
      await activity.activityEntry.selectCategory();
      await activity.activityEntry.SelectActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.EnterDueByDateAsCurrentDate();
      await activity.activityEntry.ClickSaveNCloseButton();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickBackButton();
      await activity.activitySearch.SelectAtFollowUpBy();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyAtSubject();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166961', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166961', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtActivityStatus();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.VerifyAtActivityStatusColumn();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166962', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166962', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtDivision();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtDivisionInGrid(0);
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166986', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166986', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtSection();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifAtSectionInGrid();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_166990', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166990', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtTeam();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifAtTeamsInGrid();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });
});

// ===================== Part 4 (13 tests) - Activity Search Functional 2-3 =====================

test.describe('HomeActivitySearchFunctional2', () => {
  test('ActivitySearch_166996', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '166996', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.ClickAssignedToButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.module.switchToActivitySearch();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167011', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167011', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtPFNo();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.activitySearch.verifyAtEnteredByInGrid();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167032', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167032', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtPFActivity();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167079', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167079', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.selectPFStatusAsCheckAll();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167528', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167528', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtcredits();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.module.switchToActivitySearch();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtCreditsInGrid();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167572', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167572', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtPayScale();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPayScaleInGrid();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_167599', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '167599', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtAssingedShift();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.verifyAtEnteredByInGrid();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168038', async ({ activity, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168038', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtType();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.SelectPFRecordFromGrid();
      await activity.activityEntry.activityEntryPFTab.clickPFLookUpIcon();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.clickPFInfoIcon();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.clickAssignmentTab();
      await personnel.personnelEntry.personnelEntryAssignmentTab.verifyAtType();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168046', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168046', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await home.module.switchToActivitySearch();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168059', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168059', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtEnteredBy();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.activitySearch.verifyAtEnteredByInGrid();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168064', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168064', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtSubject();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.activitySearch.verifyAtSubjectInGrid();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168065', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168065', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtRefType();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.verifyAtRefType();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivitySearch_168067', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168067', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Search');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtCustom();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('Activity Search');
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });
});

// ===================== Part 5 (12 tests) - PhoneBook, Messages, Bulletin =====================

test.describe('HomePhoneBookAndMessages', () => {
  test('CRM62466_51421Home149116', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '149116', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewContactButton();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.EnterAtBookName();
      await home.phoneBookContactEntry.EnterAtLastName();
      await home.phoneBookContactEntry.EnterAtFirstName();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.SelectPhoneAsHome();
      await home.phoneBookContactEntry.phoneNumberTab.EnterPhoneNumber();
      await home.phoneBookContactEntry.phoneNumberTab.ClickPrimaryCheckbox();
      await home.phoneBookContactEntry.phoneNumberTab.ClickAddButton();
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPhoneTypeAsHomeAppearsInGrid(0);
      await home.phoneBookContactEntry.SaveNClose();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewContactButton();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.EnterAtBookName();
      await home.phoneBookContactEntry.EnterAtLastName1();
      await home.phoneBookContactEntry.EnterAtFirstName1();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.SelectPhoneAsCell();
      await home.phoneBookContactEntry.phoneNumberTab.EnterPhoneNumber();
      await home.phoneBookContactEntry.phoneNumberTab.EnterAtExtension();
      await home.phoneBookContactEntry.phoneNumberTab.ClickPrimaryCheckbox();
      await home.phoneBookContactEntry.phoneNumberTab.ClickAddButton();
      await home.phoneBookContactEntry.Save();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPhoneTypeAsCellAppearsInGrid(0);
      await home.phoneBookContactEntry.phoneNumberTab.VerifyAtExtension(0);
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPrimaryCheckboxChecked(0);
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.SeletRowByAsCell();
      await home.phoneBookContactEntry.phoneNumberTab.SelectPhoneAsWork();
      await home.phoneBookContactEntry.phoneNumberTab.ClickAddButton();
      await home.phoneBookContactEntry.Save();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPhoneTypeAsWorkAppearsInGrid(0);
      await home.phoneBookContactEntry.phoneNumberTab.VerifyAtExtension(0);
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPrimaryCheckboxChecked(0);
      await home.phoneBookContactEntry.SaveNClose();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickBackButton();
      await home.phoneBookSearch.EnterAtBookName();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.VerifyAtLastAndFirstNameAppearsRowInGrid(1);
      await home.phoneBookSearch.VerifyAtLastAndFirstNameAppearsRowInGrid(2);
    });
  });

  test('CRM_61235Home149462', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '149462', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyApprovalTab();
      await home.myHome.myApprovalTab.SelectStatusAsOnHold();
      await home.myHome.myApprovalTab.SelectItemTypeAsCrashEntry();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.VerifyAtRefNo();
      await home.myHome.myApprovalTab.VerifyAtPFCodeByAtRefNoInOfficerColumn();
      await home.myHome.myApprovalTab.VerifyStatusAsOnHoldByAtRefNo();
      await home.myHome.myApprovalTab.VerifyItemTypeAsCrashByAtRefNo();
    });
  });

  test('Police2017SprintHomeModule_155210', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '155210', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickBulletinAddNew();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.ClickSaveButton();
      await home.bulletinEntry.VerifyMessageIDAcknowledgeMessage();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.EnterAtMessageID();
      await home.bulletinEntry.ClickSaveButton();
      await home.bulletinEntry.VerifySubjectAcknowledgeMessage();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.EnterAtSubject();
      await home.bulletinEntry.ClickSaveButton();
      await home.bulletinEntry.VerifyDistributionAcknowledgeMessage();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.ClickTextTab();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.EnterRichText();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.EnterPostFromDateAndTime();
      await home.bulletinEntry.EnterPostToDateAndTimeAsFuture();
      await home.bulletinEntry.SelectPriority();
      await home.bulletinEntry.ClickAddressToAllCheckbox();
      await home.bulletinEntry.ClickDivisionSectionSquadAccordion();
      await home.bulletinEntry.VerifyDivisionSectionSquadDisabled();
      await home.bulletinEntry.ClickMultiplePFAccordion();
      await home.bulletinEntry.VerifyPFCodeDisabled();
      await home.bulletinEntry.ClickAddressToAllCheckbox();
      await home.bulletinEntry.ClickDivisionSectionSquadAccordion();
      await home.bulletinEntry.SelectAtDivision();
      await home.bulletinEntry.SelectAtSection();
      await home.bulletinEntry.ClickAddButton();
      await home.bulletinEntry.VerifyAtDivisionInGrid(0);
      await home.bulletinEntry.VerifyAtSectionInGrid(0);
      await home.bulletinEntry.ClickMultiplePFAccordion();
      await home.bulletinEntry.EnterAtPFCode();
      await home.bulletinEntry.ClickMultiplePFAddButton();
      await home.bulletinEntry.EnterAtPFCode1();
      await home.bulletinEntry.ClickMultiplePFAddButton();
      await home.bulletinEntry.SaveScreen();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.VerifyUnviewedLabelDisplayed();
      await home.bulletinEntry.VerifySendEmailReminderButtonDisplayed();
      await home.bulletinEntry.SwitchToAttachmentTab();
      await home.bulletinEntry.VerifyAddFilesButtonDisplayed();
      await home.bulletinEntry.ClickFolderViewRadioButton();
    });
  });

  test('CRM_69025Home_162477', async ({ home, activity, geo, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '162477', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.SelectUnit();
      await activity.activityEntry.SelectFleetNo();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickLocationInfoIcon();
      await geo.module.switchToAddressSearchHelpWindow();
      await geo.addressSearch.VerifyAtAddress();
      await geo.addressSearch.SwitchToActivitiesTab();
      await geo.addressSearch.addressSearchActivitiesTab.verifyAtActivityType();
      await geo.addressSearch.addressSearchActivitiesTab.VerifyAtSubject();
      await geo.addressSearch.addressSearchActivitiesTab.VerifyAtStatus();
      await geo.addressSearch.addressSearchActivitiesTab.VerifyAtBy();
      await geo.addressSearch.addressSearchActivitiesTab.VerifyDateAsCurrentDateByAtActivityType();
      await geo.addressSearch.addressSearchActivitiesTab.SelectRowByAtActivityType();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyAtActivityType();
      await activity.activityEntry.VerifyAtSubject();
    });
  });

  test('Police2018SprintHomeModule_184915', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '184915', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.VerifyAtTo();
      await home.messageSendScreen.SelectPF();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.ClickAddMultiplePFButton();
      await home.module.switchToAddMultiplePFScreen();
      await home.addMultiplePF.ClickSelectAll();
      await home.addMultiplePF.ClickAddTheSelectPFToList();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterMessage();
      await home.messageSendScreen.ClickSendAsTextMessageCheckbox();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.VerifySentArrowinGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToMessageReceivedScreen();
      await home.messageReceivedScreen.VerifyReplyTextDisabled();
      await home.messageReceivedScreen.VerifyReplybuttonDisabled();
      await home.messageReceivedScreen.CloseScreen();
      await home.module.switchToMessageSearch();
    });
  });

  test('CRM_78386_Home_186986', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '186986', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.VerifyAtTo();
      await home.messageSendScreen.SelectPF();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.ClickAddMultiplePFButton();
      await home.module.switchToAddMultiplePFScreen();
      await home.addMultiplePF.ClickSelectAll();
      await home.addMultiplePF.ClickAddTheSelectPFToList();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterMessage();
      await home.messageSendScreen.ClickSendAsTextMessageCheckbox();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.VerifySentArrowinGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToMessageReceivedScreen();
      await home.messageReceivedScreen.VerifyReplyTextDisabled();
      await home.messageReceivedScreen.VerifyReplybuttonDisabled();
      await home.messageReceivedScreen.CloseScreen();
      await home.module.switchToMessageSearch();
    });
  });

  test('CRM_78386_Home_186987', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '186987', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickSendAsBolo();
      await home.messageSendScreen.VerifyPFAndAddMultiplePFButtonDisabled();
      await home.messageSendScreen.EnterMessage();
      await home.messageSendScreen.SelectBoloType();
      await home.messageSendScreen.SelectAtBoloStatus();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyBoloMessageConfirmMessage();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.ClickBoloRadioButton();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.VerifyAtBoloStatus();
      await home.bOLOMessageReceivedScreen.EnterMessage();
      await home.bOLOMessageReceivedScreen.ClickUpdateButton();
      await home.bOLOMessageReceivedScreen.VerifySuccessfulBottomMessage();
      await home.bOLOMessageReceivedScreen.CloseScreen();
      await home.module.switchToMessageSearch();
    });
  });

  test('CRM_76095_Home_186989', async ({ home, activity, names, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '186989', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtActivityBy();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.VerifyAtActivityType(0);
      await activity.activitySearch.VerifyAtBy(0);
      await activity.activitySearch.ClickAtActivityTypeInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToVisitorsTab();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtLastName();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtFirstName();
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToVisitorsTab();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtNotes();
      await activity.activityEntry.activityEntryVisitorsTab.TabTimeIn();
      await activity.activityEntry.activityEntryVisitorsTab.EnterTimeOutAsFutureTime();
      await activity.activityEntry.activityEntryVisitorsTab.ClickAddButton();
      await activity.activityEntry.activityEntryVisitorsTab.VerifyAtNotesInGrid(0);
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToVisitorsTab();
      await activity.activityEntry.activityEntryVisitorsTab.VerifyAtNameInGrid(0);
      await activity.activityEntry.activityEntryVisitorsTab.ClickAtNameInGrid();
      await activity.activityEntry.activityEntryVisitorsTab.ClickNameInfoIcon();
      await names.module.switchToNameEntry();
      await names.nameEntry.switchToActivityTab();
      await names.nameEntry.activityTab.VerifyAtActivityNumber();
      await names.module.switchToNameEntry();
      await names.nameEntry.closeTheScreen();
      await home.module.switchToActivityEntry();
    });
  });

  test('Police2018HomeModule_199132', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '199132', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.SelectPF();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.CloseScreen();
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageRefresh();
      await home.myHome.messageTab.VerifyAtMessageInFirstMessageGrid();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
    });
  });

  test('Police2020HomeModule_242537', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '242537', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.SelectAtPF();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.ClickSendButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageRefresh();
      await home.myHome.messageTab.VerifyAtMessageInFirstMessageGrid();
      await home.myHome.messageTab.ClickFirstMessageRow();
      await home.module.switchToMessageReceivedScreen();
      await home.messageReceivedScreen.verifyFromPF();
      await home.messageReceivedScreen.ClickReadPreviousButton();
      await home.messageReceivedScreen.verifyFromPF();
      await home.messageReceivedScreen.ClickReadNextButton();
      await home.messageReceivedScreen.verifyFromPF();
      await home.messageReceivedScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('VerifyTheMessage_bulletinScreenDoesNotShowBlueScreenError_60601', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60601', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.enterAtUnit();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.VerifyAtTo();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.verifySendAsBOLOCheckboxIsDisplayed();
      await home.messageSendScreen.verifyClearButtonIsDisplayed();
    });
  });

  test('verifyBoloFunctionalityInMyHomeScreen_145030', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '145030', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.myHome.SwitchToMessageSearch();
      await home.messageSearch.VerifyBoloRadioButtonIsEnabled();
      await home.messageSearch.VerifyToFromPFIsDisabled();
      await home.messageSearch.VerifyUnitIsDisabled();
      await home.messageSearch.VerifyPFInboxIsBlank();
      await home.messageSearch.clickAddNewButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickSendAsBolo();
      await home.messageSendScreen.VerifyPFAndAddMultiplePFButtonDisabled();
      await home.messageSendScreen.VerifyAddAndClearButtonDisabled();
      await home.messageSendScreen.VerifySendAsTxtMessageDisabled();
      await home.messageSendScreen.VerifySendAsEmailDisabled();
      await home.messageSendScreen.enterAtUnit();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.SelectAtBoloType();
      await home.messageSendScreen.SelectAtBoloStatus();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyBoloMessageConfirmMessage();
      // objectIdentification.smokeTest.checkAckExist();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.myHome.SwitchToMessageSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.enterAtPFInboxCode();
      await home.messageSearch.clickReceiveCheckBox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtSenderInGrid(0);
      await home.messageSearch.clearPFInbox();
      await home.messageSearch.EnterAtMessage();
      await home.messageSearch.clickReceiveCheckBox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
      await home.messageSearch.clearMessage();
      await home.messageSearch.EnterFromDateAsPreviousDate();
      await home.messageSearch.EnterToDateAsCurrentDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
      await home.messageSearch.clearFromAndToDate();
      await home.messageSearch.EnterFromDateAsFutureDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyNoRecordFoundAcknowledge();
      await home.myHome.SwitchToMessageSearch();
      await home.messageSearch.clearFromDate();
      await home.messageSearch.SelectAtBoloType();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
      await home.messageSearch.SelectAtBoloType1();
      await home.messageSearch.SelectAtBoloStatus();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.verifyCurrentDate();
      await home.messageSendScreen.verifyFromName();
      await home.messageSendScreen.verifyAtBoloType();
      await home.messageSendScreen.verifyAtBoloStatus();
      await home.messageSendScreen.verifyAtMessage();
      await home.messageSendScreen.SelectAtBoloStatus1();
      await home.messageSendScreen.clickUpdate();
      await home.myHome.SwitchToMessageSearch();
      await home.messageSearch.SelectAtBoloStatus2();
      await home.messageSearch.clickIncludeWithdrawnMessageCheckbox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtMessageInGrid(0);
      await home.messageSearch.verifyGridInGreyColor();
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.clickCancel();
      await home.myHome.SwitchToMessageSearch();
    });
  });
});

// ===================== Part 6 (12 tests) - Activity Entry, Reports, Approval =====================

test.describe('HomeActivityEntryAndReports', () => {
  test('CreateManualActivitywithStatus_170632', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '170632', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectAtCategoryGroupforActivityFromHome();
      await activity.activityEntry.SelectAtCategoryforActivityFromHome();
      await activity.activityEntry.SelectAtActivityTypeforActivityFromHome();
      await activity.activityEntry.SelectAtActivityStatusforActivityFromHome();
      await activity.activityEntry.SelectShowOnWhiteBoardCheckBox();
      const actDate = await activity.activityEntry.TabOutActivtyDate();
      const actTime = await activity.activityEntry.TabOutActivityTime();
      await activity.activityEntry.SelectAtUnit();
      await activity.activityEntry.SelectAtFleet();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtEndDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.EnterAtCredits();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.Save();
      await activity.activityEntry.NavigateToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.SelectAtTemplate();
      await activity.activityEntry.activityEntryLogEntryTab.ClickLoadButton();
      await activity.activityEntry.activityEntryLogEntryTab.EnterLog();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.SelectAtRefTypeNo();
      await activity.activityEntry.activityEntryOtherTab.EnterDueByDate();
      await activity.activityEntry.activityEntryOtherTab.SelectAtPriority();
      await activity.activityEntry.activityEntryOtherTab.EnterCompletedDateTime();
      await activity.activityEntry.activityEntryOtherTab.EnterAtCustom();
      await activity.activityEntry.activityEntryOtherTab.SelectSendnoticeonChangescheckbox();
      await activity.activityEntry.activityEntryOtherTab.ClickAssingedPFArrow();
      await activity.activityEntry.activityEntryOtherTab.EnterAtPF();
      await activity.activityEntry.activityEntryOtherTab.ClickAdd1Button();
      await activity.activityEntry.NavigateToLogHistoryTab();
      await activity.activityEntry.logHistoryTab.EnterUpdateDateTime();
      await activity.activityEntry.logHistoryTab.EnterUpdateBy();
      await activity.activityEntry.logHistoryTab.EnterDuration();
      await activity.activityEntry.logHistoryTab.EnterAtComments();
      await activity.activityEntry.logHistoryTab.ClickSaveButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
      await loaderPage.logout();
      await loginPage.loginScreen.EnterAtUserName();
      await loginPage.loginScreen.EnterAtPassword();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.ClickLoginButton();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.ClickDateTimeCloumnName();
      await home.myHome.myRemindersTab.VerifyActivityDateTime(actDate, actTime);
      await home.myHome.myRemindersTab.VerifyStatusAsRequestToDo();
      await home.myHome.myRemindersTab.VerifySubjectAsMaintenanceActivity();
      await home.myHome.myRemindersTab.ClickActivityRow();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      await loaderPage.logout();
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtSubject();
      await activity.activitySearch.ClickSearchLink();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectActivityStatusAsScheduledItem();
      await activity.activityEntry.activityEntryPFTab.EnterAtScheduleDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtScheduledPF();
      await activity.activityEntry.activityEntryPFTab.TaboutfromEndTime();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickSaveForConflictSchedule();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
      await loaderPage.logout();
      await loginPage.loginScreen.EnterAtUserName();
      await loginPage.loginScreen.EnterAtPassword();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.ClickLoginButton();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.ClickDateTimeCloumnName();
      await home.myHome.myRemindersTab.VerifyDateTimeAsCurrentDateinFirstRow();
      await home.myHome.myRemindersTab.VerifyStatusAsScheduledItem();
      await home.myHome.myRemindersTab.VerifySubjectAsMaintenanceActivity();
      await home.myHome.myRemindersTab.ClickActivityRow(1);
      await home.module.switchToActivityEntry();
      await activity.activityEntry.VerifySaveNCloseButtonEnabled();
      await activity.activityEntry.Close();
      await loaderPage.logout();
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtSubject();
      await activity.activitySearch.ClickSearchLink();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectActivityStatusAsInprogressActivity();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectActivityStatusAsCompletedActivity();
      await activity.activityEntry.ClickSaveNCloseButton();
    });
  });

  test('ActivityEntry_ScheduleActivitydisplayinCalendar_27461', async ({ activity, scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '27461', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectAtCategoryGroupforActivityFromHome();
      await activity.activityEntry.SelectAtCategoryforActivityFromHome();
      await activity.activityEntry.SelectAtActivityTypeforActivityFromHome();
      await activity.activityEntry.SelectAtActivityStatusforActivityFromHome();
      await activity.activityEntry.SelectShowOnWhiteBoardCheckBox();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.SelectAtUnit();
      await activity.activityEntry.SelectAtFleet();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.enterAtSubject();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtEndDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.EnterAtCredits();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.ClickSaveNCloseButton();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Calendar');
      await scheduling.module.switchToCalendarScreen();
      await scheduling.calendar.selectShowMyCalendarCheckbox();
      await scheduling.calendar.selectActivityEntryFromCalendar();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
    });
  });

  test('ActivityEntry_CompletedActivitydisplayinActivityCalendar_45208', async ({ activity, scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '45208', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectAtCategoryGroupforActivityFromHome();
      await activity.activityEntry.SelectAtCategoryforActivityFromHome();
      await activity.activityEntry.SelectAtActivityTypeforActivityFromHome();
      await activity.activityEntry.SelectAtActivityStatusforActivityFromHome();
      await activity.activityEntry.SelectShowOnWhiteBoardCheckBox();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.SelectAtUnit();
      await activity.activityEntry.SelectAtFleet();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.enterAtSubject();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtEndDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.ClickSaveNCloseButton();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Calendar');
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.SelectAtFilter();
      await scheduling.calendar.selectActivityEntryFromCalendar();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
    });
  });

  test('VerifyReportFromActivityEntry_203757', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '203757', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectCategoryGroupAsPIPolice();
      await activity.activityEntry.SelectCategoryAsDamage();
      await activity.activityEntry.SelectActivityTypeAsDamage();
      await activity.activityEntry.SelectActivityStatusAsCompletedActivity();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.EnterSubjectAsTesting();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.ClickReportLink();
      await home.module.switchToSelectReport();
      await home.selectReport.SelectReport();
      await home.selectReport.ClickRunReportButton();
      await home.module.switchToPnxCustomReportPDFScreen();
      await home.pnxCustomReportPDFScreen.VerifyReportGenerated();
      await home.pnxCustomReportPDFScreen.CloseScreen();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
    });
  });

  test('VerifyCustomFieldFunctionality_205106', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '205106', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectCategoryGroupAsPIPolice();
      await activity.activityEntry.SelectCategoryAsDamage();
      await activity.activityEntry.SelectActivityTypeAsDamage();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.EnterSubjectAsTesting();
      await activity.activityEntry.EnterCustomField1();
      await activity.activityEntry.EnterCustomField2();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.VerifyCustomField1();
      await activity.activityEntry.VerifyCustomField2();
      await activity.activityEntry.Close();
    });
  });

  test('Police2019HomeModule_207318', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '207318', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewPhoneBookButton();
      await home.module.switchToPhoneBookEntry();
      await home.phoneBookEntry.EnterAtBookName();
      await home.phoneBookEntry.EnterAtDescription();
      await home.phoneBookEntry.ClickGlobalCheckbox();
      await home.phoneBookEntry.ClickDetailBillingCheckbox();
      await home.phoneBookEntry.ClickAdd();
      await home.phoneBookEntry.VerifyGlobalCheckboxcheckedUsingBookName();
      await home.phoneBookEntry.VerifyDetailBillingCheckboxcheckedUsingBookName();
      await home.phoneBookEntry.Save();
      await home.module.switchToPhoneBookEntry();
      await home.phoneBookEntry.VerifyGlobalCheckboxcheckedUsingBookName();
      await home.phoneBookEntry.VerifyDetailBillingCheckboxcheckedUsingBookName();
      await home.phoneBookEntry.Close();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewContactButton();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.EnterAtBookName();
      await home.phoneBookContactEntry.EnterAtLastName();
      await home.phoneBookContactEntry.EnterAtFirstName();
      await home.phoneBookContactEntry.EnterAtMiddleName();
      await home.phoneBookContactEntry.EnterAtAddress();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.SelectPhoneAsWork();
      await home.phoneBookContactEntry.phoneNumberTab.EnterAtPhoneNumber();
      await home.phoneBookContactEntry.phoneNumberTab.EnterExtension();
      await home.phoneBookContactEntry.phoneNumberTab.ClickPrimaryCheckbox();
      await home.phoneBookContactEntry.phoneNumberTab.ClickAddButton();
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPhoneTypeAsWorkAppearsInGrid(0);
      await home.phoneBookContactEntry.phoneNumberTab.VerifyPrimaryCheckboxChecked(0);
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.Save();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickAllTabs();
      await home.phoneBookContactEntry.ClickCallBackTab();
      await home.phoneBookContactEntry.callBackTab.SelectAtRoster();
      await home.phoneBookContactEntry.callBackTab.EnterPeriodFromDateAsPreviousDate();
      await home.phoneBookContactEntry.callBackTab.EnterPeriodToDateAsFutureDate();
      await home.phoneBookContactEntry.callBackTab.EnterComments();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickHistoryTab();
      await home.phoneBookContactEntry.contactEntryHistoryTab.TabDateTime();
      await home.phoneBookContactEntry.contactEntryHistoryTab.EnterAtLog();
      await home.phoneBookContactEntry.contactEntryHistoryTab.ClickAdd();
      await home.phoneBookContactEntry.contactEntryHistoryTab.VerifyAtLogInGrid(0);
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.Save();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.verifyPhoneNumberTabIsBlueColor();
      await home.phoneBookContactEntry.verifyCallBackTabIsBlueColor();
      await home.phoneBookContactEntry.verifyHistoryTabIsBlueColor();
      await home.phoneBookContactEntry.Close();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickBackButton();
      await home.phoneBookSearch.ClickPhoneBookLookup();
      await home.phoneBookSearch.SelectAtPhoneBook();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.VerifyAtNameInGrid(0);
      await home.module.switchToPhoneBookSearchScreen();
    });
  });

  test('Police2020HomeModule_240637', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '240637', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportsTab();
      await home.myHome.myReportsTab.ClickShowMyItemsOnly();
      await home.myHome.myReportsTab.SelectAtItemType();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.ClickRefreshButton();
      await home.myHome.myReportsTab.SelectAtItemType1();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.ClickRefreshButton();
    });
  });

  test('Police2020HomeModule_248772', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '248772', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickPoliceOfficeRoleTabsEnabled();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.ClickShowMyItemsOnly();
      await home.myHome.myReportsTab.SelectAtStatus();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyStatusAsReportDue();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.SelectStatusAsSubmitted();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyGridRowStatusAsSubmitted();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
    });
  });

  test('VerifyreportsabletosearchfromMyReports', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '253691', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportsTab();
      await home.myHome.myReportsTab.SelectAtStatus();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyGridRowStatusAsOnHold();
      await home.myHome.myReportsTab.selectStatusAsNull();
      await home.myHome.myReportsTab.ClickShowMyItemsOnly();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.selectAtStatus1();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyGridRowStatusAsReportDue();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.selectAtStatus2();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
      await home.myHome.myReportsTab.VerifyStatusAsRejected();
    });
  });

  test('VerifyExpenseRecordsareshowinginMyReportsApprovalTab_273924', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '273924', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.SelectAtItemType();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.selectRowByAtRefNo();
      await home.module.switchToExpenseEntry();
      await home.expenseEntry.switchToApprovalTab();
      await home.expenseEntry.expenseEntryApprovalTab.selectNewActionAsSendForApproval();
      await home.expenseEntry.expenseEntryApprovalTab.tabOutDateAndTime();
      await home.expenseEntry.expenseEntryApprovalTab.internalSave();
      await home.module.switchToExpenseEntry();
      await home.expenseEntry.closeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.SelectStatusAsSubmitted();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtRefNo();
      await home.module.switchToMyHomeScreen();
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.clickGridHeader('Date Time');
      await home.myHome.myReportsTab.verifyDateAndTimeColumnAsDescendingOrder();
      await home.myHome.myReportsTab.clickGridHeader('Date Time');
      await home.myHome.myReportsTab.verifyDateAndTimeColumnAsAscendingOrder();
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Item Type');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Item Type');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Ref#');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Ref#');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Location');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Location');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Officer');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Officer');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('CAD-CFS');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('CAD-CFS');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Unit');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Unit');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Charge Code');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Charge Code');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Status');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Status');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Submitted To');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Submitted To');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Rej. Cnt');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Rej. Cnt');
      await home.myHome.myReportsTab.verifyGridColumnAsAscendingOrder('Dispo');
      await home.myHome.myReportsTab.verifyGridColumnAsDescendingOrder('Dispo');
    });
  });

  test('VerifySupervisorFieldIsDisplayedInMyReportsApprovalTab_276768', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '276768', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportsTab();
      await home.myHome.myApprovalTab.verifySupervisorFieldDisplayed();
      await home.myHome.myApprovalTab.enterAtSupervisorPF();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.verifySubmittedToColumnDisplayed();
      await home.myHome.myApprovalTab.verifySubmittedToOfficerRecordsOnlyListed();
      await home.myHome.myApprovalTab.verifyAtSubmittedToSupervisorName();
    });
  });

  test('Fire2020HomeModuleDefect_250437', async ({ home, activity, names, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '250437', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtActivityTypeRadControl();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.ClickAtActivityTypeInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.EnterAtLastName();
      await activity.activityEntry.namesTab.EnterAtFirstName();
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.selectAtActivity();
      await activity.activityEntry.namesTab.clickAddbutton();
      await activity.activityEntry.namesTab.VerifyAtActivityInGrid(0);
      await activity.activityEntry.namesTab.saveInternalTab();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.VerifyAtActivityInGrid(0);
      await activity.activityEntry.namesTab.VerifyAtNameInGrid(0);
      await activity.activityEntry.namesTab.DeleteAtName();
      await activity.activityEntry.namesTab.VerifyConfirmationDeleteMessage();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.saveInternalTab();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
      await home.module.switchToActivitySearch();
    });
  });
});

// ===================== Part 7 (12 tests) - Whiteboard, ManageLinks, Notifications =====================

test.describe('HomeWhiteboardAndLinks', () => {
  test('VerifyRecordsRequestEntryIsShowingInMyRemindersTabForSupervisor_250174', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '250174', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.VerifyRecordsRequestsISEnabled();
      await home.myHome.myRemindersTab.ClickRecordsRequestsAccordion();
      await home.myHome.myRemindersTab.VerifyRecordsRequestsCount();
      await home.myHome.myRemindersTab.VerifyAtRequestNoFromGrid();
      await home.myHome.myRemindersTab.VerifyAtRequestedByFromGrid();
      await home.myHome.myRemindersTab.VerifyAtRequestTypeFromGrid();
      await home.myHome.myRemindersTab.VerifyAtDueClosedDateFromGrid(0);
      await home.myHome.myRemindersTab.VerifyAtCallAndCaseFromGrid();
      await home.myHome.myRemindersTab.VerifyAtAssignedToFromGrid();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('VerifyManageLinkScreenFunctionalitiesFromMyHomeScreen_248844', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '248844', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.EnterAtLinkName();
      await home.myHome.manageLinks.EnterAtScreenID();
      await home.myHome.manageLinks.EnterAtURL();
      await home.myHome.manageLinks.EnterAtFilePath(0);
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.verifyAcceptLinkorURLAcknowledgeMessage();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.clickClearButton();
      await home.myHome.manageLinks.EnterAtLinkName();
      await home.myHome.manageLinks.EnterAtScreenID();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.verifyAdditionSuccessFullMessage();
      await home.myHome.manageLinks.SelectAtLinkNameInGrid();
      await home.myHome.manageLinks.verifyUpdateButton();
      await home.myHome.manageLinks.ClickShowAllCheckbox();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.verifyAtLinkNameIsGreenInGrid();
      await home.myHome.manageLinks.SelectAtLinkNameInGrid();
      await home.myHome.manageLinks.verifyShowAllCheckboxIsSelected();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.CloseTheScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickAtlink();
      await home.myHome.verifyFieldInCallEntry();
    });
  });

  test('Fire2020DefectHomeModule_252266', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '252266', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyApprovalTab();
      await home.myHome.myApprovalTab.SelectAtItemType();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.verifyAtItemTypeInColumnValues();
      await home.myHome.myApprovalTab.selectAtStatus1();
      await home.myHome.myApprovalTab.selectAtItemType2();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.verifyAtItemType1InColumnValues();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyApprovalTab();
      await home.myHome.myApprovalTab.SelectAtStatus();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.verifyAtStatusInColumnValues();
      await home.myHome.myApprovalTab.selectAtStatus1();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.verifyAtStatus1InColumnValues();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('Police2020DefectHomeModule_254469', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '254469', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter917AsFalse();
      await settings.module.switchToSystemParamter();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.clickOpenCaseFolderAccordion();
      await home.myHome.myCMTab.VerifyInvestColumnDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter917AsTrue();
      await settings.module.switchToSystemParamter();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifyInvestColumnNotDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter918AsFalse();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifySupervisorPFColumnDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter918AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifySupervisorPFColumnNotDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter919AsFalse();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifyPrimePFColumnDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter919AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifyPrimePFColumnNotDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter920AsFalse();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifyHighestCATColumnDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter920AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.VerifyChargeOrCFSColumnDisplayed();
    });
  });

  test('Fire2020DefectHomeModule_255738', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '255738', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Coded');
      await settings.module.switchToCodedScreen();
      await settings.coded.enterAtCodeID();
      await settings.coded.clickSearchButton();
      await settings.coded.clickRowByAtCodeID();
      await settings.module.switchToMaintainCodeValue();
      await settings.maintainCodeValue.enterAtCodeValue();
      await settings.maintainCodeValue.clickSearchButton();
      await settings.maintainCodeValue.clickRowByCodeValue(1);
      await settings.maintainCodeValue.clickEnableFeesTabCheckbox();
      await settings.maintainCodeValue.clickAddButton();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.SelectActivityTypeAsMaintenance();
      await activity.activityEntry.SelectActivityStatusAsInprogressActivity();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.enterSubject();
      await activity.activityEntry.Save();
      await activity.activityEntry.clickFeesTab();
      await activity.activityEntry.activityEntryFeesTab.selectInvoiceType();
      await activity.activityEntry.activityEntryFeesTab.enterAtBillToAccountNameID();
      await activity.activityEntry.activityEntryFeesTab.selectItemCode();
      await activity.activityEntry.activityEntryFeesTab.clickAddButton();
      await activity.activityEntry.activityEntryFeesTab.Save();
    });
  });

  test('VerifyingInactivePFcontactshowsInNotificationScreen_258293', async ({ home, personnel, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '258293', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Notification Search');
      await home.module.switchToNotificationSearch();
      await home.notificationSearch.clickSearch();
      await home.notificationSearch.selectCheckBoxInGridByUsingRequestedPF();
      await home.notificationSearch.clickUpdateButton();
      await home.module.switchToNotificationScreen();
      await home.notification.clickRequestedByPFInfoButton();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.clickInactiveCheckBox();
      await personnel.personnelEntry.save();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.close();
      await home.module.switchToNotificationScreen();
      await home.notification.enterAtRequestedbyPF();
      await home.notification.verifyInactiveCodeSelectedAwckMsg();
      await home.module.switchToNotificationScreen();
      await home.notification.enterAtRequestedbyPF1();
      await home.module.switchToNotificationScreen();
      await popupPage.switchToCodedSearchII();
      await popupPage.kPICodedLookup.clickIncludeInactiveCheckBox();
      await popupPage.kPICodedLookup.verifyAtDescription();
      await popupPage.kPICodedLookup.selectAtPFCode();
      await popupPage.acknowledge.verifyInactiveCodeSelectedAwckMsg();
      await home.module.switchToNotificationScreen();
      await home.notification.selectAtDistributionList();
      await home.notification.selectAtReportingPeriod();
      await home.notification.selectAtNotifyEvent();
      await home.notification.clickAddButton();
      await home.notification.verifyAtRequestedByInGrid();
      await home.notification.clickEMailRadioButton();
      await home.notification.enterAtEmail();
      await home.notification.enterAtName();
      await home.notification.selectAtReportingPeriod();
      await home.notification.selectAtNotifyEvent();
      await home.notification.clickAddButton();
      await home.notification.verifyAtRequestedByInGrid();
      await home.notification.SaveScreen();
    });
  });

  test('VerifyThatNoRecordFoundPopupShouldBeDisplayedOnlyOneTimeInReportLogScreen_258923', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '258923', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.clickOnPNXLogo();
      await loaderPage.mouseHoverOnPnxLogoAction('Tools');
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Report Log');
      await home.module.switchToReportLog();
      await home.reportLog.selectAtProduct();
      await home.reportLog.unCheckIncludeErrorCheckBox();
      await home.reportLog.enterAtReportName();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyNoRecordFoundAcknowledge();
      await home.module.switchToReportLog();
      await home.reportLog.enterFromDateAsLastYear();
      await home.reportLog.selectAtProduct();
      await home.reportLog.clearReportName();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyTableListOutResults();
      await home.reportLog.selectAtjuris();
      await home.reportLog.enterFromDateAsLastYear();
      await home.reportLog.selectAtProduct();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyNoRecordFoundAcknowledge();
      await home.module.switchToReportLog();
    });
  });

  test('AddParameterToRemovePasswordResetFromLoginScreen_60390', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60390', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ClickSystemParameterIcon();
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter282AsFalse();
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.closeTheScreen();
      await loaderPage.navigateToModule('Home');
      await loaderPage.logout();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.verifyForgotPasswordDisabled();
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.ClickSystemParameterIcon();
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter282AsTrue();
      await loaderPage.logout();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.verifyForgotPasswordEnabled();
    });
  });

  test('verifyOthersTabScheduledCallInCADFunctionality_259721', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '259721', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.selectScheduleCallInCADCheckBox();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyEnterLocationAcknowldge();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyEnterDateAcknowledge();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.enterAtScheduledDate();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyEnterCFSAcknowledge();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.enterAtCFS();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyEnterSRCAcknowledge();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.selectAtSRC();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.NavigateToLogHistoryTab();
      await activity.activityEntry.logHistoryTab.verifyAthistoryGrid();
      await activity.module.SwitchToActivityEntry();
    });
  });

  test('verifyKeyPunchStatusReports_252295', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '252295', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.changeParameterById('736', 'select', 'param_736_Dyn_DropDown', 'DIV+SEC');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.clickRefreshButton();
      await settings.sysParameter.changeParameterById('745', 'select', 'param_745_Dyn_DropDown', 'False');
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.SelectStatusAsKeypunch();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyGridRowStatusAsTranscriber();
      await home.myHome.myReportsTab.SelectStatusAsSubmitted();
      await home.myHome.myReportsTab.ClickShowMyItemsOnly();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues();
    });
  });

  test('ActivityEntry_Recurrencefunctionality_258917', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '258917', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid(0);
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.selectAtActivityStatus1();
      await activity.activityEntry.enterAtFutureScheduledFromDateAndTime();
      await activity.activityEntry.enterAtFutureScheduledToDateAndTime();
      await activity.activityEntry.clickRecurrenceCheckBox();
      await activity.activityEntry.recurrencePopUp.clickHourlyRadioButton();
      await activity.activityEntry.recurrencePopUp.enterAtEndAfter();
      await activity.activityEntry.recurrencePopUp.clickCloseButton();
      await activity.activityEntry.Save();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickSchedulesTab();
      const GridCount = await activity.activityEntry.schedulesTab.verifyScheduleCountInScheduleGrid();
      await activity.activityEntry.schedulesTab.verifyTimeInGridafterrecurrenceSetAsHourly(GridCount);
      await activity.activityEntry.schedulesTab.clickPFNotesIconInGrid(0);
      await activity.activityEntry.schedulesTab.verifyAtPFNotesToolTip();
      await activity.activityEntry.schedulesTab.clickCloseInPFNotesToolTip();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickOpenRecurrenceButton();
      await activity.activityEntry.recurrencePopUp.clickDailyRadioButton();
      await activity.activityEntry.recurrencePopUp.enterAtEndAfter();
      await activity.activityEntry.recurrencePopUp.clickCloseButton();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyChangeScheduleFutureInstanceConfirmMessage();
      await activity.activityEntry.verifysaveConfirmmessageAndClickOk();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickSchedulesTab();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.verifyAtSubjectInGrid();
    });
  });

  test('verifyErrorNotOccuringWhileCreatingNewActivityEntry_261412', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261412', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.close();
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.verifyAtSubjectInGrid();
      await home.myHome.myRemindersTab.verifyAtStatusBySubjectInGrid();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.selectAtSubjectInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectActivityStatusAsCompletedActivity();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.close();
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.VerifySubjectNotAppearInGrid();
      await home.module.switchToMyHomeScreen();
    });
  });
});

// ===================== Part 8 (12 tests) - Activity PF/Maintenance/Visitors, Quick Entry =====================

test.describe('HomeActivityFunctional', () => {
  test('verifyTheWhiteboardSpellingInRespectiveScreens_261413', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261413', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.verifyAtTitle();
      await home.myHome.whiteBoard.clickMaximizeButton();
      await home.myHome.switchToWhiteBoardWindow();
      await home.myHome.whiteBoard.verifyAtTitle();
      await home.myHome.whiteBoard.close();
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtWhiteBoardLabel();
      await activity.activityEntry.close();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.verifyAtShowWhiteboardItemsOnlyCheckboxLabel();
      await activity.pressF4keyToOpenQuickActivityEntry();
      await activity.module.switchToActivityQuickEntry();
      await activity.activityQuickEntry.verifyAtShowOnWhiteboardLabel();
      await activity.module.switchToActivityQuickEntry();
      await activity.activityQuickEntry.close();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Coded');
      await settings.module.switchToCodedScreen();
      await settings.coded.enterAtCodeID();
      await settings.coded.clickSearchButton();
      await settings.coded.clickRowByAtCodeID();
      await settings.module.switchToMaintainCodeValue();
      await settings.maintainCodeValue.enterAtCodeValue();
      await settings.maintainCodeValue.clickSearchButton();
      await settings.maintainCodeValue.clickRowByAtCodeValue();
      await settings.maintainCodeValue.verifyAtShowOnWhiteboardCheckboxLabel();
    });
  });

  test('F4ActivityQuickEntry_And_WhiteBoardFunctionality', async ({ activity, home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261084', async () => {
      await loginPage.loginScreen.logon();
      await activity.pressF4keyToOpenQuickActivityEntry();
      await activity.module.switchToActivityQuickEntry();
      await activity.activityQuickEntry.clickCategoryGroupFleet();
      await activity.activityQuickEntry.verifyCategoryGroupFleetButtonAsGreenColor();
      await activity.activityQuickEntry.clickCategoryVehicleMaintenance();
      await activity.activityQuickEntry.verifyCategoryVehicleMaintenanceButtonAsGreenColor();
      await activity.activityQuickEntry.clickActivityLogTypeCarWash();
      await activity.activityQuickEntry.verifyActivityLogTypeCarWashButtonAsGreenColor();
      await activity.activityQuickEntry.enterAtNotes();
      await activity.activityQuickEntry.clickShowOnWhiteBoard();
      await activity.module.switchToActivityQuickEntry();
      await activity.activityQuickEntry.save();
      await activity.activityQuickEntry.verifyAdditionSuccessFullMessage();
      await activity.module.switchToActivityQuickEntry();
      await activity.activityQuickEntry.clickViewTodaysLog();
      await activity.module.SwitchToQuickActivityLog();
      await activity.activityQuickEntry.verifyAtActivityTypeFromQuickActivityLog(0);
      await activity.activityQuickEntry.clickAtActivityTypeFromQuickActivityLogGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.activityEntry.VerifyAtActivityType();
      await activity.activityEntry.verifyAtActivityCategoryGroup();
      await activity.activityEntry.verifyAtCategory();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.verifyAtEnteredByPFcode();
      await activity.activityEntry.NavigateToLogHistoryTab();
      await activity.activityEntry.logHistoryTab.verifyAthistoryGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(0);
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.activityEntry.VerifyAtActivityType();
      await activity.activityEntry.verifyAtActivityCategoryGroup();
      await activity.activityEntry.verifyAtCategory();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.NavigateToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.verifyAtEnteredByPFcode();
      await activity.activityEntry.NavigateToLogHistoryTab();
      await activity.activityEntry.logHistoryTab.verifyAthistoryGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickMaximizeButton();
      await home.myHome.switchToWhiteBoardWindow();
      await home.myHome.whiteBoard.verifyAtTitle();
    });
  });

  test('ActivityEntryPFTabAndActivitySearchFunctionality_261086', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261086', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.verifyUnitIsDisplayed();
      await activity.activitySearch.verifyFleetIsDisplayed();
      await activity.activitySearch.verifyPFActivityIsDisplayed();
      await activity.activitySearch.verifyPFStatusIsDisplayed();
      await activity.activitySearch.verifyHoursWorkedIsDisplayed();
      await activity.activitySearch.verifyCreditsIsDisplayed();
      await activity.activitySearch.verifyPayScaleIsDisplayed();
      await activity.activitySearch.verifyAssignedShiftIsDisplayed();
      await activity.activitySearch.verifyAddMultiplePFButtonISDisplayed();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutEnteredDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.verifyAttachmentTabIsDisplayed();
      await activity.activityEntry.verifyOtherTabIsDisplayed();
      await activity.activityEntry.verifyLogHistoryTbIsDisplayed();
      await activity.activityEntry.Close();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickBackButton();
      await activity.activitySearch.EnterAtPFNo();
      await activity.activitySearch.SelectAtPFActivity();
      await activity.activitySearch.SelectAtPFStatus();
      await activity.activitySearch.SelectAtHoursWorked();
      await activity.activitySearch.SelectAtcredits();
      await activity.activitySearch.SelectAtPayScale();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtSubjectInGridByActivityStatus();
      await activity.module.switchToActivitySearch();
    });
  });

  test('ActivtySearchFunctionalityUsingPFStatusPayScale_261409', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261409', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtPFStatus();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtStatusInGrid();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.SelectAtPayScale();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifycountAs1InGrid();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.selectPFStatusAsCheckAll();
      await activity.activitySearch.selectPayScaleAsCheckAll();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifycountAsMoreThan1inGrid();
      await activity.activitySearch.ClickBackLink();
      await activity.module.switchToActivitySearch();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('ActivityEntry_MaintenanceTabFunctionality_261422', async ({ activity, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261422', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyPFTabIsDisplayed();
      await activity.activityEntry.verifyLogEntryTabIsDisplayed();
      await activity.activityEntry.verifyAttachmentTabIsDisplayed();
      await activity.activityEntry.verifyMaintenanceTabIsDisplayed();
      await activity.activityEntry.verifyOtherTabIsDisplayed();
      await activity.activityEntry.verifyLogHistoryTbIsDisplayed();
      await activity.activityEntry.NavigateToMaintenanaceTab();
      await activity.activityEntry.maintenanceTab.EnterAtCurrentMileage();
      await activity.activityEntry.maintenanceTab.EnterAtCurrentHours();
      await activity.activityEntry.maintenanceTab.EnterAtVendor();
      await activity.activityEntry.maintenanceTab.EnterAtCost();
      await activity.activityEntry.maintenanceTab.clickUseItemsFromInventoryCheckBox();
      await activity.activityEntry.maintenanceTab.clickInventoryLookUpButton();
      await inventory.module.SwitchToInventorySearchEntryWindow();
      await inventory.inventorySearch.clickSearchButton();
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo();
      await inventory.inventorySearch.clickAssignButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToMaintenanaceTab();
      await activity.activityEntry.maintenanceTab.ClickSaveButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToMaintenanaceTab();
      await activity.activityEntry.maintenanceTab.verifyAtInvOrPartNo();
      await activity.module.SwitchToActivityEntry();
    });
  });

  test('ActivityEntryVistiorsTabFunctionality_261423', async ({ activity, names, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261423', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyPFTabIsDisplayed();
      await activity.activityEntry.verifyLogEntryTabIsDisplayed();
      await activity.activityEntry.verifyOtherTabIsDisplayed();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyVistiorsTabIsDisplayed();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.NavigateToVisitorsTab();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtLastName();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtFirstName();
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToVisitorsTab();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtNotes();
      await activity.activityEntry.activityEntryVisitorsTab.EnterAtTime();
      await activity.activityEntry.activityEntryVisitorsTab.ClickAddButton();
      await activity.activityEntry.activityEntryVisitorsTab.VerifyAtNameInGrid(0);
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtEndDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.VerifyupdatesuccessfulMessage();
    });
  });

  test('AssignedActivityShowinginAnotherPFMyHome_261424', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261424', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyPFTabIsDisplayed();
      await activity.activityEntry.verifyLogEntryTabIsDisplayed();
      await activity.activityEntry.verifyOtherTabIsDisplayed();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtEndDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.activityEntryPFTab.EnterAtScheduleDateTime();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickAssingedPFArrow();
      await activity.activityEntry.activityEntryOtherTab.EnterAtPF();
      await activity.activityEntry.activityEntryOtherTab.ClickAdd1Button();
      await activity.activityEntry.activityEntryOtherTab.verifyAtPFInGrid('Supervisor, Officer');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      const Activity = await activity.activityEntry.GetActivityNo();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
      await activity.module.switchToActivitySearch();
      await loaderPage.logout();
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickMyActivitiesAccordion();
      await home.myHome.myRemindersTab.verifyAtSubjectInGrid();
      await home.myHome.myRemindersTab.SelectRowByAtSubject();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyactivityno(Activity);
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickAssingedPFArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtPFInGrid('Supervisor, Officer');
      await activity.activityEntry.Close();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('ActivitySupervisorabletoDeletefromActivityEntry_261419', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '261419', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectCategoryGroupAsPIPolice();
      await activity.activityEntry.SelectCategoryAsDamage();
      await activity.activityEntry.SelectActivityTypeAsDamage();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.EnterSubjectAsTesting();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.ClickDeleteButton();
      await activity.activityEntry.VerifyDeleteConfirmMessage();
      await activity.activityEntry.ConfirmDelete();
      await activity.activityEntry.VerifyDeleteSuccessfulMessage();
    });
  });

  test('verifyWhetherTheActivityEntryIsGettingDuplicateWhileWeAddingTheQAFormToTheScreen_277263', async ({ activity, qA, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '277263', async () => {
      await loginPage.loginScreen.LogonForFire();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Search');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.TabOutActivityToDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      // objectIdentification.windowHandle.switchToMainWindow();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtSubjectInGridWithNoDuplications();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickQAFormsTab();
      await qA.SwitchToQuestionDataEntry();
      await qA.questionDataEntry.TabOutPF();
      await qA.questionDataEntry.clickBatteryOperatedButtons();
      await qA.questionDataEntry.clickSave();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtSubjectInGridWithNoDuplications();
    });
  });

  test('ToVerifyWhetherThErrorMessageIsShowingWhileWeClickTheAAddMultiplePFbuttonFromActivityEntryScreenFromHomeModule_281417', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '281417', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Search');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.ClickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow1();
      await activity.activitySearchHelpWindow.verifyAtPFName1();
      await activity.activitySearchHelpWindow.clickSearch();
      await activity.activitySearchHelpWindow.clickAtPFByName();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.activityEntry.close();
      await home.module.switchToActivitySearch();
      await activity.activitySearch.clickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearchHelpWindow.verifyAtPFName();
      await activity.activitySearchHelpWindow.clickSearch();
      await activity.activitySearchHelpWindow.clickAtPFByName();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await home.module.switchToActivitySearch();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.VerifyAtActivityType(0);
      await activity.activitySearch.SelectAtActivityType();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.ClickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearchHelpWindow.verifyAtPFName();
      await activity.activitySearchHelpWindow.clickSearch();
      await activity.activitySearchHelpWindow.clickAtPFByName1();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
    });
  });

  test('AllowedToAddRemoveFavoriteScreenFromFavoriteModule_289832', async ({ loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '289832', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Names');
      await loaderPage.navigateToScreen('Arrest Search');
      await loaderPage.mouseHoverOnScreenName('Arrest Search');
      await loaderPage.verifyFavoriteIConStatus('Arrest Search', 'Mark as Favorite');
      await loaderPage.clickFavoriteIconUsingScreenName('Arrest Search');
      await loaderPage.navigateToModule('Favorite');
      await loaderPage.verifyAtScreenInFavorite('Arrest Search');
      await loaderPage.navigateToModule('Names');
      await loaderPage.navigateToScreen('Arrest Search');
      await loaderPage.mouseHoverOnScreenName('Arrest Search');
      await loaderPage.verifyFavoriteIConStatus('Arrest Search', 'Remove from Favorite');
      await loaderPage.clickFavoriteIconUsingScreenName('Arrest Search');
      await loaderPage.navigateToModule('Favorite');
      await loaderPage.verifyAtScreenNotInFavorite('Arrest Search');
    });
  });

  test('ActivityEntry_ActEntSmoke', async ({ activity, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'ActEntSmoke', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await popupPage.acknowledge.okIfWindowExist('AfterClick ActvityEntry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectCategoryGroup();
      await activity.activityEntry.selectCategory();
      await activity.activityEntry.SelectActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterSubject();
      await activity.activityEntry.Save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Activity Entry');
    });
  });
});

// ===================== Part 9 (12 tests) - Smoke Tests & Help Links =====================

test.describe('HomeSmokeTestsAndHelp', () => {
  test('ExpenseEntry_ExpEntSmoke', async ({ accounting, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'ExpEntSmoke', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Expense Search');
      await accounting.module.switchToExpenseSearch();
      await accounting.expenseSearch.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await accounting.module.switchToExpenseEntry();
      await accounting.expenseEntry.selectExpenseClass();
      await accounting.expenseEntry.selectCategory();
      await accounting.expenseEntry.taboutPFAndVerifyBubbleIconIsDisplayed();
      await accounting.expenseEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await accounting.expenseEntry.verifyAdditionSuccessFullMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Expense Entry');
    });
  });

  test('PhoenBookEntry_PhnBokEnt', async ({ home, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'PhnBokEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewPhoneBookButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.module.switchToPhoneBookEntry();
      await home.phoneBookEntry.enterBookName();
      await home.phoneBookEntry.EnterDescription();
      await home.phoneBookEntry.ClickGlobalCheckbox();
      await home.phoneBookEntry.ClickDetailBillingCheckbox();
      await home.phoneBookEntry.ClickAdd();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddButton');
      await home.phoneBookEntry.Save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await home.module.switchToPhoneBookEntry();
      await home.phoneBookEntry.verifyUpdateSuccessFullMessage();
    });
  });

  test('ContactEntry_cntctEnt', async ({ home, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'cntctEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickNewContactButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.clickBookNameLookUpIcon();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.enterLastName();
      await home.phoneBookContactEntry.enterFirstName();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.SelectPhone();
      await home.phoneBookContactEntry.phoneNumberTab.EnterPhoneNumber();
      await home.phoneBookContactEntry.phoneNumberTab.EnterExtension();
      await home.phoneBookContactEntry.phoneNumberTab.ClickPrimaryCheckbox();
      await home.phoneBookContactEntry.phoneNumberTab.ClickAddButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddButton');
      await home.phoneBookContactEntry.Save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.verifyAdditionSuccessfullMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Contact Entry');
    });
  });

  test('BOLOScreen_BOLO', async ({ home, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'BOLO', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.module.switchToMessageSend();
      await home.messageSendScreen.SelectPF();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.selectunit();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterMessage();
      await home.messageSendScreen.ClickSendAsTextMessageCheckbox();
      await home.messageSendScreen.ClickSendButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Send');
      await home.module.switchToMessageSend();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
    });
  });

  test('ManageLinks_MangeLink', async ({ home, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'MangeLink', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.verifySearchButtonDisplayed();
      await home.myHome.manageLinks.EnterLinkName();
      await home.myHome.manageLinks.ClickSearchButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Search');
      await home.myHome.manageLinks.clickClearButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Clear');
      await home.myHome.manageLinks.EnterLinkName();
      await home.myHome.manageLinks.enterURL();
      await home.myHome.manageLinks.ClickShowAllCheckbox();
      await home.myHome.manageLinks.verifyShowAllCheckboxIsSelected();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.verifyAdditionSuccessFullMessage();
    });
  });

  test('BulletEntry_BultEnt', async ({ home, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'BultEnt', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.messageTab.ClickBulletinAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.EnterMessage();
      await home.bulletinEntry.EnterSubject();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.EnterPostFromDateAndTime();
      await home.bulletinEntry.EnterPostToDateAndTimeAsFuture();
      await home.bulletinEntry.ClickAddressToAllCheckbox();
      await home.bulletinEntry.SelectPriority();
      await home.bulletinEntry.VerifyDivisionSectionSquadDisabled();
      await home.bulletinEntry.ClickAddressToAllCheckbox();
      await home.bulletinEntry.SelectDivision();
      await home.bulletinEntry.SelectSection();
      await home.bulletinEntry.clicksquadLookUpIconAndSelectRandom();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.ClickAddButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Addbutton');
      await home.bulletinEntry.SaveScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.verifyAdditionSuccessFullMessage();
      await home.bulletinEntry.ClickSendEmailReminderButton();
      await home.bulletinEntry.VerifyEmailSentAcknowledgeMessage();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SendEmailButton');
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.SaveScreen();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.VerifyUpdatesuccesssFullMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('BulletIn Entry');
    });
  });

  test('myHomeScreen_MyHome', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'MyHome', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.VerifyMyHomeScreenDisplayed();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.VerifyMyRemindersTabDisplayed();
      await home.myHome.SwitchToMyTrainingTab();
      await home.myHome.myTrainingTab.VerifyMyTrainingTabDisplayed();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.VerifyMessageTabDisplayed();
      await home.myHome.SwitchToWhiteBoardTab();
      await home.myHome.whiteBoard.VerifyWhiteBoardGridDisplayed();
    });
  });

  test('verifyHelpLinkFunctionalitiesInRMSApplicationA_145176A', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '145176A', async () => {
      await loginPage.loginScreen.logon();
      await home.help.clickHelp();
      await home.help.clickDocumentationF1();
      await home.module.switchToPoliceRMSAndCMSHelpDoc();
      await home.help.clickPoliceHelpRadioButton();
      await home.module.switchToPhoenixPoliceRms();
      await home.phoenixPoliceRMSWindow.verifyPhoenixPoliceRMSTitle();
      await home.phoenixPoliceRMSWindow.clickAllTabs();
      await home.module.switchToPhoenixPoliceRms();
      await home.phoenixPoliceRMSWindow.close();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickDocumentationF1();
      await home.module.switchToPoliceRMSAndCMSHelpDoc();
      await home.help.clickCMSHelpRadioButton();
      await home.module.switchToPhoenixCMS();
      await home.phoenixCMSWindow.verifyPhoenixCMSTitle();
      await home.phoenixCMSWindow.clickAllTabs();
      await home.phoenixCMSWindow.close();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickWhatsNew();
      await home.help.verifyWhatsNewText();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickHowToVideos();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickPlayBackWebinar();
      await home.howToVideosWindow.verifyTitleWebinarName();
      await home.howToVideosWindow.clickHowToVideosButton();
      await home.howToVideosWindow.verifyTitleCAD();
      await home.howToVideosWindow.verifyTitleCRM();
      await home.howToVideosWindow.verifyTitlePoliceCSP();
      await home.howToVideosWindow.verifyTitlePoliceRMS();
      await home.howToVideosWindow.close();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('verifyHelpLinkFunctionalitiesInRMSApplicationB_145176B', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '145176B', async () => {
      await loginPage.loginScreen.logon();
      await home.help.clickHelp();
      await home.help.clickAccessCRM();
      await home.help.switchToPhoenixCRMWindow();
      await home.help.verifyLoginButtonInCRMWindow();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickHelpDesk();
      await home.help.switchToInternalTicketEntry();
      await home.help.verifyTicketLabel();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickAbout();
      await home.help.switchToAboutWindow();
      await home.help.verifyPhoenixCMSTitleInAboutWindow();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.help.clickHelp();
      await home.help.clickQuickStartGuides();
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('verifySearchPrefixLettersFieldFunctionalityInRMSApplication_144887', async ({ home, geo, names, vehicle, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '144887', async () => {
      await loginPage.loginScreen.logon();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.verifyTooltipMsg();
      await home.searchPrefixLetters.verifySearchIconIsDisplayed();
      await home.searchPrefixLetters.enterTextWithSymbols(1);
      await home.searchPrefixLetters.closeTheRespectedScreen('Text Search - 1034');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(2);
      await home.searchPrefixLetters.closeTheRespectedScreen('Address Search - 2094 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(3);
      await geo.module.switchToCommonNameHelp();
      await geo.commonNameHelp.VerifyAtCommonName(0);
      await geo.commonNameHelp.SelectCommonName();
      await home.searchPrefixLetters.closeTheRespectedScreen('Address Search - 2094 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(4);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Search - 2211');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(5);
      await names.module.switchToNameEntry();
      await names.nameEntry.VerifyAtLastName();
      await names.nameEntry.verifyAtFirstName();
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(6);
      await names.module.switchToNameEntry();
      await names.nameEntry.VerifyAtLastName();
      await names.nameEntry.verifyAtFirstName();
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(7);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(8);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(9);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(10);
      await vehicle.module.switchToVehicleBoatEntry();
      await vehicle.vehicleBoatEntry.clickMainTab();
      await vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtRegistrationAndState();
      await home.searchPrefixLetters.closeTheRespectedScreen('Vehicle/Boat Entry - 3230');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(11);
      await home.searchPrefixLetters.closeTheRespectedScreen('Vehicle/Boat Entry - 3230');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(12);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Search - 2211');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(13);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(14);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(15);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(16);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(17);
      await home.searchPrefixLetters.closeTheRespectedScreen('Vehicle/Boat Search - 3231');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(18);
      await names.module.switchToNameSearchHelpWindow();
      const columnvalues = await names.nameSearchHelpWindow.getColumnvalues(0);
      await names.nameSearchHelpWindow.VerifyAtName(columnvalues, 0);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Search - 2211');
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('verifyTheTextSearchToolbarFunctionalitiesInBasedOnSearchWordField_9149', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '9149', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.verifyTextbarIsDisplayedInToolbar();
      await loaderPage.ClickTextMsgSrchImageIcon();
      await loaderPage.verifyTextbarIsNotDisplayedInToolbar();
      await loaderPage.ClickTextMsgSrchImageIcon();
      await loaderPage.EnterAutomationinTextMsgSrchTextBox();
      await loaderPage.pressEnterInTextMsgSrchTextBox();
      await home.module.switchToTextSearchScreen();
      await home.textSearch.readAndVerifyTextByTextColumn('automation');
      await home.textSearch.clearSearchWordsField();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.readAndVerifyTextByTextTypeColumn();
      await home.textSearch.selectTextTypeComboBoxAsNull();
      await home.textSearch.enterDateFromAsOneYearFromCurrentDate();
      await home.textSearch.enterDateToAsCurrentDate();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyRowCountNotEqualsToZero();
    });
  });

  test('verifySearchPrefixLettersFieldFunctionalityInRMSApplication_9113', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '9113', async () => {
      await loginPage.loginScreen.logon();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(1);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Search - 2411 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(2);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(3);
      await home.searchPrefixLetters.closeTheRespectedScreen('Inmate Search - 8111 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(4);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(5);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(6);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(7);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(8);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(9);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(10);
      await home.searchPrefixLetters.closeTheRespectedScreen('Address Search - 2094 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(11);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(12);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(13);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });
});

// ===================== Part 10 (12 tests) - QA Forms, Inventory, Track, CRM Fixes =====================

test.describe('HomeQAFormsAndCRMFixes', () => {
  test('TestCasesforBoloMessage_8997', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '8997', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickAddNewButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickSendAsBolo();
      await home.messageSendScreen.verifyPFisDisabled();
      await home.messageSendScreen.VerifyAddAndClearButtonDisabled();
      await home.messageSendScreen.verifyAddMultiplePFisDisabled();
      await home.messageSendScreen.verifyToIsDisabled();
      await home.messageSendScreen.VerifySendAsEmailDisabled();
      await home.messageSendScreen.VerifySendAsTxtMessageDisabled();
      await home.messageSendScreen.enterAtUnit();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.SelectAtBoloType();
      await home.messageSendScreen.SelectAtBoloStatus();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyBoloMessageConfirmMessage();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.verifyBoloRadioButtonIsSelected();
      await home.messageSearch.VerifyToFromPFIsDisabled();
      await home.messageSearch.VerifyUnitIsDisabled();
      await home.messageSearch.VerifyPFInboxIsBlank();
      await home.messageSearch.SelectAtBoloType();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.selectAtMessageInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.verifyAtBoloType();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.SelectAtBoloStatus();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.selectAtMessageInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.VerifyAtBoloStatus();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.EnterFromDateAsPreviousDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.selectAtMessageInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.verifyDateAsCurrentDate();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.EnterToDateAsCurrentDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.selectAtMessageInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.verifyDateAsCurrentDate();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.EnterFromDateAsPreviousDate();
      await home.messageSearch.EnterToDateAsCurrentDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.selectAtMessageInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.verifyDateAsCurrentDate();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.enterAtPFInboxCode();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtSenderInGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.verifyAtFrom();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.verifyReceivedCheckboxIsSelected();
      await home.messageSearch.clickSentCheckbox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.enterAtPFInboxCode();
      await home.messageSearch.verifySentCheckboxIsSelected();
      await home.messageSearch.clickReceiveCheckBox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.verifyReceivedCheckboxIsSelected();
      await home.messageSearch.verifySentCheckboxIsSelected();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.EnterAtMessage();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.Close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickIncludeWithdrawnMessageCheckbox();
      await home.messageSearch.clickSearch();
      // await home.messageSearch.verifyInactiveRowGraycolorAtMessage();
      await home.module.switchToMessageSearch();
    });
  });

  test('verifyQaFormOpenUsingAdobeCheckBox_10310', async ({ home, settings, personnel, qA, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '10310', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('QA Forms');
      await settings.module.switchToQAForms();
      await qA.qAForms.EnterAtFormName();
      await qA.qAForms.clickSearch();
      await qA.qAForms.SelectAtFormName();
      await qA.SwitchToQAFormEntry();
      // qA.qAFormEntry.verifyOpenUsingAdobeCheckBoxIsNotDisplayed();
      await qA.qAFormEntry.CloseScreen();
      await loaderPage.logout();
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await loaderPage.ClickLogginUserLink();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await personnel.module.switchToUserParamScreen();
      await personnel.personnelEntry.switchToPreferenceTab();
      await personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.saveNClose();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('QA Forms');
      await settings.module.switchToQAForms();
      await qA.qAForms.EnterAtFormName();
      await qA.qAForms.clickSearch();
      await qA.qAForms.SelectAtFormName();
      await qA.SwitchToQAFormEntry();
      await qA.qAFormEntry.verifyOpenUsingAdobeCheckBoxIsDisplayed();
      await qA.SwitchToQAFormEntry();
    });
  });

  test('verifyMessageScreenOpeningWithoutAnyError_14706', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '14706', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.VerifyAddAndClearButtonEnabled();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('ToVerifyTheInventoryEntryScreenFunctionalitiesInMyRemainderTab_16200', async ({ home, inventory, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '16200', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickInventoryAccordation();
      await home.myHome.myRemindersTab.SelectRowAtInventoryNo();
      await inventory.module.SwitchToInventoryEntry();
      await inventory.inventoryEntry.VerifyInventoryEntryScreenDisplayed();
      await inventory.inventoryEntry.close();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('TextSearchNOtWorking_16370', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '16370', async () => {
      await loginPage.loginScreen.logon();
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.clickOnPNXLogo();
      await loaderPage.mouseHoverOnTools();
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Text Search');
      await home.module.switchToTextSearch();
      await home.textSearch.SelectAtJuris();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.EnterAtTextInSearchWordsField();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyAtTextByTextType();
      await home.textSearch.CloseScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.mouseHoverOnTools();
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Text Search');
      await home.module.switchToTextSearch();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyAtTextByTextType();
    });
  });

  test('ViewFormDataInFormsLink_9019', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '9109', async () => {
      // Verify Enter by PF is greyed out for non supervisor login
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.verifyEnteredByFieldGreyedOut();
      await loaderPage.logout();
      // Verify Enter by PF is not greyed out for Supervisor login
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await loaderPage.navigateToModule('Personnel');
      await loaderPage.navigateToScreen('Personnel Search');
      await personnel.module.switchToPersonnelSearch();
      await personnel.personnelSearch.enterAtPFNo();
      await personnel.personnelSearch.clickSearchButton();
      await personnel.personnelSearch.selectRowAtPFCode();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.switchToSecurityTab();
      await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment();
      await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton();
      await personnel.module.switchToPersonnelEntry();
      await personnel.personnelEntry.saveNClose();
      await loaderPage.logout();
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.verifyEnteredByFieldNotGreyedOut();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify the Search Criteria Enter by PF is working
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtEnteredByInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify the Search Criteria with Date From
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.enterAtDateFrom();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtDateFromInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify the Search Criteria with Date To
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.enterAtDateTo();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtDateToInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify with Form Ref#
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.enterAtFormRef();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtEnteredByInGrid();
      await settings.qaForms.verifyAtFormRefNoInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify with Form Name
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.enterAtFormNameEdit();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtEnteredByInGrid();
      await settings.qaForms.verifyAtFormNameInGrid();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify with all criteria combined
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtEnteredBy();
      await settings.qaForms.enterAtDateFrom();
      await settings.qaForms.enterAtDateTo();
      await settings.qaForms.enterAtFormRef();
      await settings.qaForms.enterAtFormNameEdit();
      await settings.qaForms.verifyAtEnteredByInGrid();
      await settings.qaForms.verifyAtDateFromInGrid();
      await settings.qaForms.verifyAtDateToInGrid();
      await settings.qaForms.verifyAtFormRefNoInGrid();
      await settings.qaForms.verifyAtFormNameInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify Search Criteria working with Date From
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtDateFrom();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtDateFromInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify Search Criteria working with Date To
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtDateTo();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtDateToInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
      // Verify Search Criteria working with Date From & Date To
      await loginPage.loginScreen.logonUsingTestContextOtherDB();
      await home.forms.clickFormsButton();
      await home.forms.clickViewFormData();
      await settings.module.switchToQAFormsHelpWindow();
      await settings.qaForms.enterAtDateFrom();
      await settings.qaForms.enterAtDateTo();
      await settings.qaForms.clickOnSearch();
      await settings.qaForms.verifyAtDateFromInGrid();
      await settings.qaForms.verifyAtDateToInGrid();
      await settings.qaForms.closeScreen();
      await loaderPage.logout();
    });
  });

  test('IssuesInPolice1_68Version2022_192023CRM151214_20241', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '20241', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickAddNewButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.verifyBrowseImageButtonIsDisplayed();
      await home.messageSendScreen.verifyPictureBoxIsDisplayed();
      await home.messageSendScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSendScreen.verifyMessageSendScreenClosed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Distribution List');
      await settings.module.switchToDistributionList();
      await settings.distributionList.clickAddNew();
      await settings.module.switchToDistributionEntry();
      await settings.distributionEntry.enterAtDistributionListName();
      await settings.distributionEntry.enterAtPFNo(0);
      await settings.distributionEntry.clickAddButton();
      await settings.distributionEntry.saveScreen();
      await settings.module.switchToDistributionEntry();
      await settings.distributionEntry.clickPrintIcon();
      await settings.distributionEntry.verifySelectReportWindowIsPresent();
      await home.module.switchToSelectReport();
    });
  });

  test('MyHomeDashboardScreenOpensBlankPageCRM154296_21771', async ({ home, settings, personnel, bI, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '21771', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.verifyBoloButtonIsDisplayed();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.ClickRefreshButton();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.myRemindersTab.ClickExpandAllCheckBox();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportApprovalTab();
      await home.myHome.myReportsTab.ClickRefreshButton();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.myReportsTab.SelectStatusAsOnHold();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.VerifyGridRowStatusAsOnHold();
      await home.module.switchToMyHomeScreen();
      await home.myHome.switchToMyDocumentsTab();
      await home.myHome.myDocumentsTab.clickRefreshButton();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.myDocumentsTab.clickShowAllRadioButton();
      await home.myHome.myDocumentsTab.clickSearchButton();
      await home.myHome.myDocumentsTab.verifyPrintButtonIsDisplayed();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyTrainingTab();
      await home.myHome.myTrainingTab.clickRefreshButton();
      await home.myHome.myTrainingTab.verifyExpandAllCheckboxIsNotSelected();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.myTrainingTab.verifyJurisDropdownIsDisplayed();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await personnel.personnelEntry.verifyAtPFCode();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyCMTab();
      await home.myHome.myCMTab.ClickRefreshButton();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await home.myHome.myCMTab.clickExpandAllCheckBox();
      await home.myHome.verify404FileNotFoundErrorNotArise();
      await loaderPage.navigateToScreen('My DashBoard');
      await home.module.switchToMyDashBoard();
      await home.myDashBoard.clickRealTimeDashBoardTab();
      await home.myDashBoard.realTimeDashboardTab.clickInnerRealTimeDashboardTab();
      await home.myDashBoard.realTimeDashboardTab.clickEditText();
      await home.myDashBoard.verify404FileNotFoundErrorNotArise();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.saveNClose();
      await home.module.switchToMyDashBoard();
      await home.myDashBoard.clickRealTimeDashBoardTab();
      await home.myDashBoard.realTimeDashboardTab.clickInnerRealTimeDashboardTab();
      await home.myDashBoard.realTimeDashboardTab.clickViewText();
      await home.myDashBoard.realTimeDashboardTab.switchToRTDashboard();
      await home.myDashBoard.realTimeDashboardTab.rTDashboard.clickPlayButton();
      await home.myDashBoard.realTimeDashboardTab.rTDashboard.closeScreen();
      await home.module.switchToMyDashBoard();
      await home.myDashBoard.clickExcelFileTab();
      await home.myDashBoard.excelFileTab.clickInternalExcelFileTab();
      await home.myDashBoard.excelFileTab.clickEditText();
      await home.myDashBoard.verify404FileNotFoundErrorNotArise();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.saveNClose();
      await home.module.switchToMyDashBoard();
      await home.myDashBoard.clickExcelFileTab();
      await home.myDashBoard.excelFileTab.clickInternalExcelFileTab();
      await home.myDashBoard.excelFileTab.clickDownloadText();
      await home.myDashBoard.verify404FileNotFoundErrorNotArise();
      await home.module.switchToMyDashBoard();
      await bI.myDashboard.clickPowerBI();
      await bI.myDashboard.clickInnerPowerBITab();
      await bI.myDashboard.powerBI.verifyDownloadPowerBILinkTextIsDisplayed();
      await home.myDashBoard.verify404FileNotFoundErrorNotArise();
      await home.module.switchToMyDashBoard();
      await home.myDashBoard.clickStatisticsTab();
      await home.myDashBoard.verify404FileNotFoundErrorNotArise();
      await home.myDashBoard.statisticsTab.clickAllTabsAndVerify404Error();
    });
  });

  test('verifyQAFormsViewFormDataSearchFunctionality_23260', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '23260', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Search');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtCategoryGroup();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToQAFormsTab();
      await activity.activityEntry.activityEntryQAFormsTab.SelectAtQAForm();
      await activity.activityEntry.activityEntryQAFormsTab.ClickAddButton();
      await activity.activityEntry.activityEntryQAFormsTab.VerifyAtQAFormInGrid(0);
      await activity.activityEntry.activityEntryQAFormsTab.ClickViewFormDataButton();
      await activity.activityEntry.activityEntryQAFormsTab.VerifyViewFormDataSearchResults();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Close();
    });
  });

  test('CRM161613ToVerifyTheWhiteBoardEndDateDoesNotRemoveEntryFromDisplay_29364', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '29364', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToWhiteBoardTab();
      await home.myHome.whiteBoard.ClickAddNewButton();
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.EnterAtSubject();
      await home.myHome.whiteBoard.whiteboardEntry.EnterFromDate();
      await home.myHome.whiteBoard.whiteboardEntry.EnterToDate();
      await home.myHome.whiteBoard.whiteboardEntry.EnterAtNotes();
      await home.myHome.whiteBoard.whiteboardEntry.Save();
      await home.myHome.whiteBoard.whiteboardEntry.VerifyAdditionSuccessfulMessage();
      await home.myHome.whiteBoard.whiteboardEntry.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToWhiteBoardTab();
      await home.myHome.whiteBoard.VerifyAtSubjectInGrid();
      await home.myHome.whiteBoard.ClickAtSubjectInGrid();
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.EnterToDateAsPast();
      await home.myHome.whiteBoard.whiteboardEntry.Save();
      await home.myHome.whiteBoard.whiteboardEntry.VerifyUpdateSuccessfulMessage();
      await home.myHome.whiteBoard.whiteboardEntry.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToWhiteBoardTab();
      await home.myHome.whiteBoard.VerifyAtSubjectNotInGrid();
      await home.myHome.whiteBoard.clickShowExpiredCheckBox();
      await home.myHome.whiteBoard.VerifyAtSubjectInGrid();
      await home.myHome.whiteBoard.ClickAtSubjectInGrid();
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.Delete();
      await home.myHome.whiteBoard.whiteboardEntry.VerifyDeleteSuccessfulMessage();
      await home.myHome.whiteBoard.whiteboardEntry.CloseScreen();
    });
  });

  test('CRM_167523_TabColorNotSeemsToBeChangedEvenTheDataAvailableInContactEntryPhonebookSearch_32676', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '32676', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.selectAtNameInGrid();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.notesTab.switchToNotesTab();
      await home.phoneBookContactEntry.notesTab.enterRichText();
      await home.phoneBookContactEntry.notesTab.internalSave();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.clickCustomTab();
      await home.phoneBookContactEntry.customTab.enterAtCustom1();
      await home.phoneBookContactEntry.customTab.enterAtCustom2();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.Save();
      await home.phoneBookContactEntry.verifyNotesTabIsBlueColor();
      await home.phoneBookContactEntry.verifyCustomTabIsBlueColor();
    });
  });

  test('verifyAddedTemplateIsShowingInActivityEntry_9151', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '9151', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Text');
      await settings.module.switchToText();
      await settings.textScreen.clickAddNew();
      await settings.module.switchToTextMgmt();
      await settings.textMgmt.selectAtTemplate();
      await home.textMgmt.EnterAtTextName();
      await settings.module.switchToTextMgmt();
      await home.textMgmt.clickDetailTab();
      await home.textMgmt.detailsTab.EnterSummaryRichTextAsTestAutomation();
      await settings.module.switchToTextMgmt();
      await settings.textMgmt.save();
      await settings.module.switchToTextMgmt();
      await settings.textMgmt.close();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtActivityStatus();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.ClickAtActivityTypeInGrid();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.ClickLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.SelectAtTemplate();
      await activity.activityEntry.activityEntryLogEntryTab.ClickLoadButton();
      await activity.activityEntry.activityEntryLogEntryTab.verifyAtText();
      await activity.activityEntry.close();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.ClickAtActivityTypeInGrid();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.ClickLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.SelectAtTemplate1();
      await activity.activityEntry.activityEntryLogEntryTab.ClickLoadButton();
      await activity.activityEntry.activityEntryLogEntryTab.verifyAtText1();
      await activity.activityEntry.close();
      await home.module.switchToActivitySearch();
    });
  });
});

// ===================== Part 11 (12 tests) - CRM Defects & Functional =====================

test.describe('HomeCRMDefects1', () => {
  test('BulletinsNotShowingAgain_44136', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '44136', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter209AsBoth();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickBulletinAddNew();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.EnterAtMessageID();
      await home.bulletinEntry.EnterAtSubject();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.EnterPostFromDateAndTime();
      await home.bulletinEntry.distributionTab.enterPostToDate();
      await home.bulletinEntry.SelectAtDivision();
      await home.bulletinEntry.SelectSection();
      await home.bulletinEntry.clicksquadLookUpIconAndSelectRandom();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.ClickAddButton();
      await home.bulletinEntry.VerifyAtDivisionInGrid(0);
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.SaveScreen();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.ClickDistributionTab();
      await home.bulletinEntry.distributionTab.verifyPostToTimeAsEODTime();
      await home.module.switchToBulletinEntryScreen();
      await home.bulletinEntry.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.verifyAtSubjectInBulletinGrid();
      await home.myHome.messageTab.VerifyAtMessageBulletinPrimeInvestigator();
    });
  });

  test('CRM_179701_MyHomeMyInfoThrowsJSError_47793', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '47793', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await home.myHome.myInfoTab.saveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('briefDescriptionThatCanBeUsedForTheNewRMSLoginPageItemsCRM176170_44117', async ({ loginPage, testData }) => {
    await withTestContext(testData, '44117', async () => {
      await loginPage.loginScreen.clickAtFeatureName(1);
      await loginPage.loginScreen.verifyAtFeatureDescription(1);
      await loginPage.loginScreen.clickAtFeatureName(2);
      await loginPage.loginScreen.verifyAtFeatureDescription(2);
      await loginPage.loginScreen.clickAtFeatureName(3);
      await loginPage.loginScreen.verifyAtFeatureDescription(3);
      await loginPage.loginScreen.verifyAtFeatureIconByFeatureName(4);
    });
  });

  test('ToolOptionHiddenAfterTabbingOutInChrome_51864', async ({ loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '51864', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.clickAndTaboutSearchMenuItem();
      await loaderPage.verifyTextSearchIconIsDisplayed();
      await loaderPage.verifyAIMugmatchIconIsDisplayed();
      await loaderPage.verifyPhoenixBOTCallCenterAgentIconIsDisplayed();
      await loaderPage.verifyAITranscriptionIconIsDisplayed();
      await loaderPage.verifySysParameterIconIsDisplayed();
      await loaderPage.verifyJobStatusIconIsDisplayed();
      await loaderPage.verifyKGISQueryIconIsDisplayed();
      await loaderPage.verifyMessageIconIsDisplayed();
      await loaderPage.verifySchedulerIconIsDisplayed();
      await loaderPage.verifyActivityIconIsDisplayed();
      await loaderPage.verifyPnxLogoIsDisplayed();
      // objectIdentification.windowHandle.phoenixMainWindow();
    });
  });

  test('CRM183224_53029', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '53029', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHiredDateIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySeniorityIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyAdditionalYearsIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyTerminatedDateIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyProbationEndedIsDisabled();
      await home.module.switchToMyHomeScreen();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsFalse();
      await settings.module.switchToSystemParamter();
    });
  });

  test('LOSAPReportNeedsToBreakOutTimesForCrews_55225', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55225', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.enterAtActivityPeriodFromDateAndTime();
      await activity.activitySearch.enterActivityPeriodToDateAndTimeAsCurrentDateAndTime();
      await activity.activitySearch.enterAtFilterByTimeRangeFromTime(1);
      await activity.activitySearch.enterAtFilterByTimeRangeToTime(1);
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtSubjectInGrid(1);
      await activity.activitySearch.clickBackButton();
      await activity.activitySearch.clickTimeRangeResetButton();
      await activity.activitySearch.enterAtFilterByTimeRangeFromTime(2);
      await activity.activitySearch.enterAtFilterByTimeRangeToTime(2);
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAtSubjectInGrid(2);
    });
  });

  test('UpdateTheRMSLoginHomeWithPhoenixDrawingToolCRM185013_55385', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55385', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.VerifyPhoenixDrawingToolDisplayed();
    });
  });

  test('PoliceIALoginScreenChanges_55546', async ({ loginPage, testData }) => {
    await withTestContext(testData, '55546', async () => {
      await loginPage.loginScreen.verifyResetButtonIsDisplayed();
      await loginPage.loginScreen.verifyForgotPasswordEnabled();
      await loginPage.loginScreen.verifyCopyRightsTextIsDisplayed();
      await loginPage.loginScreen.verifyAtCopyRightsText();
      await loginPage.loginScreen.verifyWhatsNewHeaderIsDisplayed();
      await loginPage.loginScreen.verifyAtWhatsNewHeaderText();
      await loginPage.loginScreen.verifyRMSTitleAndRlsVersionIsDisplayed();
      await loginPage.loginScreen.verifyAtRMSTitleAndRlsVersionText();
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(1);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(2);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(3);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(4);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(5);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(6);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(7);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(8);
      await loginPage.loginScreen.verifyAtFeatureNameIsAvailable(9);
      await loginPage.loginScreen.clickAtFeatureName(1);
      await loginPage.loginScreen.verifyAtFeatureDescription(1);
      await loginPage.loginScreen.clickAtFeatureName(2);
      await loginPage.loginScreen.verifyAtFeatureDescription(2);
      await loginPage.loginScreen.clickAtFeatureName(3);
      await loginPage.loginScreen.verifyAtFeatureDescription(3);
      await loginPage.loginScreen.clickAtFeatureName(4);
      await loginPage.loginScreen.verifyAtFeatureDescription(4);
      await loginPage.loginScreen.clickAtFeatureName(5);
      await loginPage.loginScreen.verifyAtFeatureDescription(5);
      await loginPage.loginScreen.clickAtFeatureName(6);
      await loginPage.loginScreen.verifyAtFeatureDescription(6);
      await loginPage.loginScreen.clickAtFeatureName(7);
      await loginPage.loginScreen.verifyAtFeatureDescription(7);
      await loginPage.loginScreen.clickAtFeatureName(8);
      await loginPage.loginScreen.verifyAtFeatureDescription(8);
      await loginPage.loginScreen.clickAtFeatureName(9);
      await loginPage.loginScreen.verifyAtFeatureDescription(9);
      await loginPage.loginScreen.verifyAtWhatsNewContentText();
      await loginPage.loginScreen.verifyHideWhatsNewCheckboxIsDisplayed();
      await loginPage.loginScreen.clickHideWhatsNewCheckbox();
      await loginPage.loginScreen.verifyWhatsNewFeaturesAreNotDisplayed();
      await loginPage.loginScreen.clickViewRMSFeatures();
      await loginPage.loginScreen.verifyFeaturesWindowIsOpened();
      await loginPage.loginScreen.verifyShowWhatsNewCheckboxIsDisplayed();
      await loginPage.loginScreen.clickShowWhatsNewCheckbox();
      await loginPage.loginScreen.verifyWhatsNewFeaturesAreDisplayed();
      await loginPage.loginScreen.clickViewRMSFeaturesInWhatsNewFooter();
      await loginPage.loginScreen.verifyFeaturesWindowIsOpened();
    });
  });

  test('MyHomeMyApprovalThrowsErrorCRM173931_55743', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55743', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyApprovalTab();
      await home.myHome.myApprovalTab.ClickSearchButton();
      await home.myHome.myApprovalTab.VerifyNoErrorThrown();
      await home.myHome.myApprovalTab.VerifyApprovalTabDisplayed();
    });
  });

  test('ExportToExcelNotDownloadsTheDataWhenIClickAtSecondTimeCRM185246_58360', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '58360', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyReportsTab();
      await home.myHome.myReportsTab.ClickSearchButton();
      await home.myHome.myReportsTab.ClickExportToExcel();
      await home.myHome.myReportsTab.VerifyExcelDownloaded();
      await home.myHome.myReportsTab.ClickExportToExcel();
      await home.myHome.myReportsTab.VerifyExcelDownloadedSecondTime();
    });
  });

  test('VerifyThatFunctionalityOfTheMessageSearchScreen_55885', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55885', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.ClickMessageSearchImageButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.verifyJurisDropdownIsDiplayed();
      await home.messageSearch.verifyPFInboxIsDislayed();
      await home.messageSearch.verifyToFromPFIsDisplayed();
      await home.messageSearch.verifyReceivedCheckboxIsDisplayed();
      await home.messageSearch.verifySentCheckboxIsDisplayed();
      await home.messageSearch.verifyUnitIsDisplayed();
      await home.messageSearch.verifyMessageIsDisplayed();
      await home.messageSearch.verifyMessageRadioButtonIsDisplayed();
      await home.messageSearch.verifyBOLORadioButtonIsDisplayed();
      await home.messageSearch.verifyIncludeViewedMessagesCheckboxIsDisplayed();
      await home.messageSearch.verifyFromDateIsDisplayed();
      await home.messageSearch.verifyToDateIsDisplayed();
      await home.messageSearch.verifySearchButtonIsDisplayed();
      await home.messageSearch.verifyAddNewButtonIsDisplayed();
      await home.messageSearch.verifyAtGridHeadersAreDisplayed(7);
      await home.messageSearch.enterAtUnit();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtUnitInGrid();
      await home.messageSearch.verifyUnitAsNull();
      await home.messageSearch.enterAtToFromPF();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtSenderInGrid();
      await home.messageSearch.verifyAtReceiverInGrid();
      await home.messageSearch.verifyToFromAsNull();
      await home.messageSearch.enterAtMessage(1);
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtMessageInGrid();
      await home.messageSearch.verifyMessageAsNull();
      await home.messageSearch.clickSentCheckbox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtReceiverInGrid(0);
      await home.messageSearch.clickSentCheckbox();
      await home.messageSearch.clickReceiveCheckBox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.VerifyAtSenderInGrid(0);
      await home.messageSearch.enterAtFromDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyAtDateGreaterThanFromDateInGrid();
      await home.messageSearch.verifyFromDateAsNull();
      await home.messageSearch.EnterToDateAsCurrentDate();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyDateLessThanToDateInGrid();
      await home.messageSearch.verifyToDateAsNull();
      await home.messageSearch.ClickBoloRadioButton();
      await home.messageSearch.VerifyToFromPFIsDisabled();
      await home.messageSearch.VerifyUnitIsDisabled();
      await home.messageSearch.verifyAtGridHeaderIsNotDisplayed(4);
      await home.messageSearch.verifyAtGridHeaderIsNotDisplayed(6);
      await home.messageSearch.clickSearch();
      await home.messageSearch.selectRandomGridRow();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSearch.verifyBoloRadioButtonIsNotSelected();
      await home.messageSearch.enterAtMessage(2);
      await home.messageSearch.clickIncludeViewedMessagesCheckbox();
      await home.messageSearch.clickSearch();
      await home.messageSearch.verifyGridRowInGreyColorByMessage(2);
      await home.messageSearch.verifyIncludeViewedMessagesChechboxIsUnselected();
      await home.messageSearch.clickPrintIcon();
      await home.module.switchToSelectReport();
      await home.selectReport.CloseTheScreen();
      await home.module.switchToMessageSearch();
    });
  });

  test('ToVerifyTheAddMuldtiplePFInScheduleSearch_55969', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55969', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await home.module.switchToActivitySearch();
      await activity.activitySearch.VerifyMultiplePFAdded();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });
});

// ===================== Part 12 (12 tests) - CRM Defects & Activity Calendar =====================

test.describe('HomeCRMDefects2', () => {
  test('ActivityEntryWhileClickRefreshButton_60326', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60326', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await home.module.switchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.SelectActivityTypeAsMaintenance();
      await activity.activityEntry.SelectActivityStatusAsCompletedActivity();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.verifyMaintenanceTabIsDisplayed();
      await activity.activityEntry.switchToActivityEntryAttachmentTab();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyTabColorAsBlue(1);
      await activity.activityEntry.NavigateToMaintenanaceTab();
      await activity.activityEntry.maintenanceTab.EnterAtPartNo();
      await activity.activityEntry.maintenanceTab.EnterAtdescription();
      await activity.activityEntry.maintenanceTab.EnterAtQty();
      await activity.activityEntry.maintenanceTab.ClickAddButton();
      await activity.activityEntry.maintenanceTab.verifyAtInvOrPartNo();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verifyUpdatedDataExistsMaintenanceTabAcknowledgePopup();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.NavigateToMaintenanaceTab();
      await activity.activityEntry.maintenanceTab.internalSave();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyTabColorAsBlue(2);
      await activity.activityEntry.clickReset();
      await activity.activityEntry.verifyTabColorAsBlue(1);
      await activity.activityEntry.verifyTabColorAsBlue(2);
    });
  });

  test('VerifyOnlyRestrictedFieldsAreEnabledInMyInfoTabIf4323IsFalse_60285', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60285', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsFalse();
      await loaderPage.logout();
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await personnel.personnelEntry.verifySaveIconIsDisabled();
      await personnel.personnelEntry.clickMainTab();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail1IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail2IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail3IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyPhoneFieldsAreDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyExtnIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySortIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySexDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHeightIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyRaceDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEthnicityDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyWeightIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyBirthDateIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEyesDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyBirthPlaceIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHairDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyMaritialStatusDropdownIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom1IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom2IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom3IsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom4IsDisabled();
    });
  });

  test('VerifyOnlyRestrictedFieldsAreEnabledInMyInfoTabIf4323IsTrue_60281', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60281', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsTrue();
      await loaderPage.logout();
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await personnel.personnelEntry.verifySaveIconIsEnabled();
      await personnel.personnelEntry.clickMainTab();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail1IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail2IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEmail3IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyPhoneFieldsAreEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyExtnIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySortIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySexDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHeightIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyRaceDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEthnicityDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyWeightIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyBirthDateIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyEyesDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyBirthPlaceIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHairDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyMaritialStatusDropdownIsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom1IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom2IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom3IsEnabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyCustom4IsEnabled();
    });
  });

  test('HomePhonebookSearchContactEntry_60235', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60235', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.EnterAtBookName();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.VerifyAtLastNameAppearsInGrid();
      await home.phoneBookSearch.SelectRowByAtLastName();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.VerifyAtLastName();
      await home.phoneBookContactEntry.VerifyAtFirstName();
      await home.phoneBookContactEntry.SaveNClose();
      await home.module.switchToPhoneBookSearchScreen();
    });
  });

  test('MyRemindersClickOnMyRemindersTab_60237A', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60237A', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.ClickUserName();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await personnel.module.switchToPersonnelEntryURL();
      await personnel.personnelEntry.switchToPreferenceTab();
      await personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox();
      await personnel.personnelEntry.personnelEntryPreferencesTab.verifyDebugCheckBoxIsCheked();
      await personnel.module.switchToPersonnelEntryURL();
      await personnel.personnelEntry.saveNClose();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter1126AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.verifyRefreshButtonIsDisplayed();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter1126AsTrue();
      await settings.module.switchToSystemParamter();
    });
  });

  test('VerifyThatFunctionalityOfTheMessageEntryScreen_55896', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55896', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.ClickMessageSearchImageButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickAddNewButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.verifySendAsBOLOCheckboxIsDisplayed();
      await home.messageSendScreen.verifySendToJurisDropdownIsDisplayed();
      await home.messageSendScreen.verifyPFFieldsAreDisplayed();
      await home.messageSendScreen.verifyUnitFieldsAreDisplayed();
      await home.messageSendScreen.verifyToIsDisplayed();
      await home.messageSendScreen.verifyMessageIsDisplayed();
      await home.messageSendScreen.verifyAddButtonIsDisplayed();
      await home.messageSendScreen.verifyClearButtonIsDisplayed();
      await home.messageSendScreen.verifyAddMultiplePFButtonIsDisplayed();
      await home.messageSendScreen.verifyBrowseImageButtonIsDisplayed();
      await home.messageSendScreen.verifyPictureBoxIsDisplayed();
      await home.messageSendScreen.verifySendAsTxtMessageCheckboxIsDisplayed();
      await home.messageSendScreen.verifySendAsEmailCheckboxIsDisplayed();
      await home.messageSendScreen.verifyShiftNotedButtonIsDisplayed();
      await home.messageSendScreen.verifySendButtonIsDisplayed();
      await home.messageSendScreen.verifyCancelButtonIsDisplayed();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.VerifyAtTo();
      await home.messageSendScreen.ClickAddMultiplePFButton();
      await home.module.switchToAddMultiplePFScreen();
      await home.addMultiplePF.verifyDivisionDrodpdownIsDisplayed();
      await home.addMultiplePF.verifySectionDrodpdownIsDisplayed();
      await home.addMultiplePF.verifySquadDrodpdownIsDisplayed();
      await home.addMultiplePF.verifyLastNameIsDisplayed();
      await home.addMultiplePF.verifyFirstNameIsDisplayed();
      await home.addMultiplePF.verifyTeamDrodpdownIsDisplayed();
      await home.addMultiplePF.verifySortOrderDrodpdownIsDisplayed();
      await home.addMultiplePF.verifySelectAllCheckboxIsDisplayed();
      await home.addMultiplePF.verifyExpandAllCheckboxIsDisplayed();
      await home.addMultiplePF.verifyDivisionCheckboxIsDisplayed();
      await home.addMultiplePF.verifySectionCheckboxIsDisplayed();
      await home.addMultiplePF.verifySquadCheckboxIsDisplayed();
      await home.addMultiplePF.verifyTeamCheckboxIsDisplayed();
      await home.addMultiplePF.verifyOnDutyCheckboxIsDisplayed();
      await home.addMultiplePF.verifySearchButtonIsDisplayed();
      await home.addMultiplePF.verifyClearButtonIsDisplayed();
      await home.addMultiplePF.verifyAddTheSelectPFToTheListButtonIsDisplayed();
      await home.addMultiplePF.selectAtDivision();
      await home.addMultiplePF.clickSearch();
      const pFNames = await home.addMultiplePF.getListedPFNamesWithoutPFCode();
      await home.addMultiplePF.ClickSelectAll();
      await home.addMultiplePF.ClickAddTheSelectPFToList();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.verifyAtTo(pFNames);
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.ClickSendAsTextMessageCheckbox();
      await home.messageSendScreen.ClickSendAsEmailCheckbox();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.EnterAtPF();
      await home.messageSendScreen.ClickAddButton();
      await home.messageSendScreen.VerifyAtTo();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.verifyMessageShouldNotBeEmptyAcknowledgePopup();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickShiftNotes();
      await home.messageSendScreen.verifyMessageShouldNotBeEmptyAcknowledgePopup();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.EnterAtMessage();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.clickCancel();
      await home.module.switchToMessageSearch();
    });
  });

  test('verifyAllowAlphaNumericAllowsInPointsFieldActivityScreen_62502', async ({ activity, home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '62502', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      const getActivityNo = await activity.activityEntry.GetActivityNo();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.saveNClose();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtcredits();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.ClickActivityTypeInGrid();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.verifyactivityno(getActivityNo);
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtCreditsInGrid();
      await home.module.switchToActivityEntry();
    });
  });

  test('ActivityEntryScreenFunctionality_62926', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '62926', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtJuris();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.verifyAtActivityStatus(1);
      await activity.activityEntry.verifyAtActivityStatus(2);
      await activity.activityEntry.verifyAtActivityStatus(3);
      await activity.activityEntry.verifyAtActivityStatus(4);
      await activity.activityEntry.verifyAtActivityStatus(5);
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.clickCADEventCheckBox();
      await activity.activityEntry.SelectShowOnWhiteBoardCheckBox();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.TabOutActivityToDateAndTime();
      await activity.activityEntry.clickAllDayCheckbox();
      await activity.activityEntry.selectAtUnit();
      await activity.activityEntry.SelectAtFleet();
      await activity.activityEntry.enterAtLocation();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFDropdownOptions(1);
      await activity.activityEntry.activityEntryPFTab.verifyAtPFDropdownOptions(2);
      await activity.activityEntry.activityEntryPFTab.verifyAtPFDropdownOptions(3);
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.TaboutfromEndTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.ClickAddMultiplePFButton();
      await activity.module.switchToActivitySearchHelpWindow1();
      await activity.activitySearchHelpWindow.clickAtPFByName();
      await activity.activitySearchHelpWindow.clickAddTheSelectedPFToTheList();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.SelectAtTemplate();
      await activity.activityEntry.activityEntryLogEntryTab.ClickLoadButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.verifyAtText1();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToLogHistoryTab();
      await activity.activityEntry.logHistoryTab.EnterUpdateDateTime();
      await activity.activityEntry.logHistoryTab.EnterUpdateBy();
      await activity.activityEntry.logHistoryTab.EnterDuration();
      await activity.activityEntry.logHistoryTab.EnterAtComments();
      await activity.activityEntry.logHistoryTab.ClickSaveButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.enterAtNameID();
      await activity.activityEntry.namesTab.selectAtActivity();
      await activity.activityEntry.namesTab.clickAddbutton();
      await activity.activityEntry.namesTab.saveInternalTab();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToNamesTab();
      await activity.activityEntry.namesTab.verifyAtNameInGrid(1);
      await activity.module.SwitchToActivityEntry();
    });
  });

  test('CRM194367LinksDoNotShowWhenUsingFilePath_66042', async ({ home, names, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '66042', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.enterAtLinkName(1);
      await home.myHome.manageLinks.EnterAtURL();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.enterAtLinkName(2);
      await home.myHome.manageLinks.EnterAtFilePath(0);
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(1);
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(2);
      await home.myHome.manageLinks.CloseTheScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickAtlink(1);
      await names.module.switchToNameEntry();
      await names.nameEntry.closeTheScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickAtlink(2);
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.enterAtLinkName(3);
      await home.myHome.manageLinks.enterAtURL(1);
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.manageLinks.CloseTheScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickAtlink(3);
      await home.myHome.manageLinks.verifyExternalUserLoginButtonIsDisplayed();
    });
  });

  test('CRM189768Home_62506', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '62506', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.enterAtLastName();
      await home.phoneBookSearch.enterAtFirstName();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.selectAtNameInGrid();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.notesTab.switchToNotesTab();
      await home.phoneBookContactEntry.notesTab.enterAtRichText();
      await home.phoneBookContactEntry.notesTab.internalSave();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.clickCustomTab();
      await home.phoneBookContactEntry.customTab.enterAtCustom1();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickHistoryTab();
      await home.phoneBookContactEntry.contactEntryHistoryTab.TabDateTime();
      await home.phoneBookContactEntry.contactEntryHistoryTab.EnterAtLog();
      await home.phoneBookContactEntry.contactEntryHistoryTab.ClickAdd();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.Save();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickPhoneNumberTab();
      await home.phoneBookContactEntry.phoneNumberTab.verifyAtPhoneTypeInGrid();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.notesTab.switchToNotesTab();
      await home.phoneBookContactEntry.notesTab.verifyAtRichText();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickCallBackTab();
      await home.phoneBookContactEntry.callBackTab.verifyAtPosition();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.clickCustomTab();
      await home.phoneBookContactEntry.customTab.verifyAtCustom1();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickHistoryTab();
      await home.phoneBookContactEntry.contactEntryHistoryTab.verifyAtLogInGrid();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.verifyPhoneNumberTabIsBlueColor();
      await home.phoneBookContactEntry.verifyNotesTabIsBlueColor();
      await home.phoneBookContactEntry.verifyCallBackTabIsBlueColor();
      await home.phoneBookContactEntry.verifyCustomTabIsBlueColor();
      await home.phoneBookContactEntry.clickCustomTab();
      await home.phoneBookContactEntry.verifyHistoryTabIsBlueColor();
      await home.module.switchToPhoneBookContactEntry();
    });
  });

  test('CRM187311ActivityEntry_62533', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '62533', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SelectCategoryGroupAsPIPolice();
      await activity.activityEntry.SelectCategoryAsDamage();
      await activity.activityEntry.SelectActivityTypeAsDamage();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.EnterSubjectAsTesting();
      await activity.activityEntry.SwitchToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.EnterAtLogEntry();
      await activity.activityEntry.activityEntryLogEntryTab.ClickAddButton();
      await activity.activityEntry.activityEntryLogEntryTab.VerifyAtLogEntryInGrid(0);
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.SwitchToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.VerifyAtLogEntryInGrid(0);
      await activity.activityEntry.Close();
    });
  });

  test('CRM151789_68398', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '68398', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemparameter102('ParamValue0');
      await settings.module.switchToSystemParamter();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickAddButton();
      // objectIdentification.windowHandle.windowExistsWithURL('frmWhiteboardEntry');
      await home.myHome.SwitchToQucikEntryUsinURL();
      await home.myHome.quickActivityEntry.closeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(0);
      await home.myHome.SwitchToQucikEntryUsinURL();
      await home.myHome.quickActivityEntry.verifyAtSubject(0);
      await home.myHome.quickActivityEntry.verifyAtDetails(0);
      await home.myHome.quickActivityEntry.closeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(1);
      await home.myHome.SwitchToQucikEntryUsinURL();
      await home.myHome.quickActivityEntry.verifyAtSubject(1);
      await home.myHome.quickActivityEntry.closeScreen();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemparameter102('ParamValue1');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickAddButton();
      // objectIdentification.windowHandle.windowExistsWithURL('frmPnxActivityLog');
      await home.module.switchToActivityEntry();
      await activity.activityEntry.close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(2);
      // objectIdentification.windowHandle.windowExistsWithURL('frmPnxActivityLog');
      await home.module.switchToActivityEntry();
      await activity.activityEntry.VerifyAtSubject();
      await activity.activityEntry.verifyactivityno();
      await activity.activityEntry.close();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(3);
      // objectIdentification.windowHandle.windowExistsWithURL('frmPnxActivityLog');
      await home.module.switchToActivityEntry();
      await activity.activityEntry.VerifyAtSubject(3);
      await activity.activityEntry.verifyactivityno();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemparameter102('ParamValue0');
      await settings.module.switchToSystemParamter();
    });
  });
});

// ===================== Part 13 (12 tests) - CRM Defects 3 & ManageLinks =====================

test.describe('HomeCRMDefects3', () => {
  test('CRM18007_69491', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '69491', async () => {
      await loginPage.loginScreen.logon();
      await home.help.clickHelp();
      await home.help.clickHowToVideos();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickHowToVideosButton();
      await home.howToVideosWindow.verifyTitleCAD();
      await home.howToVideosWindow.enterAtSearch(0);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyAtHowToVideosName();
      await home.howToVideosWindow.clickAtHowToVideosName();
      await home.module.switchToPlayVideoWindow();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickPlayBackWebinar();
      await home.howToVideosWindow.verifyTitleWebinarName();
      await home.howToVideosWindow.enterAtSearch(1);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyAtWebinarName();
      await home.howToVideosWindow.clickAtWebinarName();
      await home.module.switchToPlayVideoWindow();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickuPComingWebinarButton();
      await home.howToVideosWindow.enterAtSearch(2);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyWebinarColumnNameInUpComingWebinar();
    });
  });

  test('CRM189539_60526', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60526', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Phone Book Search');
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickPhoneBookLookup();
      await home.phoneBookSearch.SelectAtPhoneBook();
      await home.module.switchToPhoneBookSearchScreen();
      await home.phoneBookSearch.ClickSearchButton();
      await home.phoneBookSearch.selectAtNameInGrid();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.ClickCallBackTab();
      await home.module.switchToPhoneBookContactEntry();
      await home.phoneBookContactEntry.clickPrintIcon();
      await home.phoneBookContactEntry.verifyPhoneNumberTabIsBlueColor();
      // objectIdentification.manualIdentify.verifyJSErrorNotAppear();
      await home.module.switchToSelectReport();
      await home.selectReport.verifyAtReportName(0);
      await home.selectReport.CloseTheScreen();
      await home.module.switchToPhoneBookContactEntry();
    });
  });

  test('CRM181764_69694', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '69694', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickWhiteBoardHideButton();
      await home.myHome.whiteBoard.verifyWhiteBoardFieldIsHided();
      await home.myHome.whiteBoard.verifyWhiteBoardOnlyScreenIsLoaded();
      await home.myHome.whiteBoard.verifyWhiteBoardHidedLabel();
      await home.myHome.whiteBoard.clickWhiteBoardUnHideButton();
      await home.myHome.whiteBoard.verifyWhiteBoardFieldIsUnHided();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.verifyWhiteBoardAndLinkScreenIsLoaded();
    });
  });

  test('VerifyWHiteBoardFucntioanlityInMyHomeScreen_69858', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '69858', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemparameter102('ParamValue1');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickAddButton();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutActivityDateAndTime();
      await activity.activityEntry.SelectShowOnWhiteBoardCheckBox();
      await activity.activityEntry.enterFutureDateInWhiteBoardFromDate(2);
      await activity.activityEntry.enterFutureDateInWhiteBoardToDate(2);
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      const getActivityNo = await activity.activityEntry.GetActivityNo();
      await activity.activityEntry.saveNClose();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.verifyAtSubjectInGrid(0);
      await home.myHome.whiteBoard.clickSearchButton();
      await activity.module.switchToActivitySearchHelpWindow();
      await activity.activitySearchHelpWindow.enterAtActivityNumber(getActivityNo);
      await activity.activitySearchHelpWindow.clickSearch();
      await activity.activitySearchHelpWindow.verifyAtSubjectInGrid();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemparameter102('ParamValue2');
      await settings.module.switchToSystemParamter();
    });
  });

  test('CRM149216_70549', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70549', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.enterAtActivityNo();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.selectAtSubjectInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.ClickAddNewButton();
      await settings.module.switchToTextMgmt();
      await home.textMgmt.EnterAtTextName();
      await home.textMgmt.enterAtDescription();
      await home.textMgmt.SaveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await home.textMgmt.SaveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await home.textMgmt.Close();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickReset();
      await activity.activityEntry.NavigateToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.verifyValueIsNotDuplicatedInTemplate();
    });
  });

  test('CRM172427_71860', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '71860', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.enterSpaceAtSubject(3);
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verify2008SubjectIsRequiredAcknowledgePopUp();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      // objectIdentification.manualIdentify.verifyTabIsEnabledByAtTabName('TabName0');
      await activity.activityEntry.NavigateToPublicEducationTab();
      await activity.activityEntry.publicEducationTab.verifyAtContactNameResetIconPosition();
      // objectIdentification.smokeTest.checkAckExist();
      await activity.module.SwitchToActivityEntry();
    });
  });

  test('CRM_198408_72133', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '72133', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.clickSchedulerIcon();
      // objectIdentification.smokeTest.checkAckExist();
      await home.module.switchToCalendarScreen();
      await home.calendar.verifySearchAppointmentsIsDisplayed();
      await home.calendar.closeScreen();
      // objectIdentification.windowHandle.windowExist('Calendar');
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('VerifyTheScreenIDFucntioanlityOnTheManageLinksScreen_72703', async ({ home, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '72703', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.enterAtLinkName(1);
      await home.myHome.manageLinks.EnterAtScreenID();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.manageLinks.VerifyAtLinkName();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await home.myHome.manageLinks.saveAndClose();
      // objectIdentification.windowHandle.verifyWindowNotExists('Manage Links');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickAtlink(1);
      // objectIdentification.windowHandle.verifyWindowExists('Personnel Search');
      // objectIdentification.windowHandle.switchToWindow('Personnel Search');
      await personnel.personnelSearch.enterAtPF();
      await personnel.personnelSearch.clickSearchButton();
      await personnel.personnelSearch.verifyAtPFNameInGrid();
      // objectIdentification.windowHandle.closeTheScreen();
      // objectIdentification.windowHandle.verifyWindowNotExists('Personnel Search');
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('CRM197988_72719', async ({ home, names, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '72719', async () => {
      await loginPage.loginScreen.logonForOtherPF(0, 0);
      await loaderPage.navigateToModule('Names');
      await loaderPage.navigateToScreen('Name Search');
      await names.module.switchToNameSearch();
      await names.nameSearch.selectAtNameType();
      await names.nameSearch.EnterAtLastName();
      await names.nameSearch.clickSearchButton();
      const nameSearchValues = await names.nameSearch.getColumnValues(testData.home('columnValue'));
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(1);
      await names.module.switchToNameSearchHelpWindow();
      const nameSearchHelpWindowValues = await names.nameSearchHelpWindow.getColumnvalues(0);
      await names.nameSearchHelpWindow.verifyjurisColumnNullValueIndexPosition(nameSearchValues, nameSearchHelpWindowValues);
    });
  });

  test('VerifyTheFucnitionalitiesOfTheManageLinksScreen_73257', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '73257', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.enterAtLinkName(0);
      await home.myHome.manageLinks.verifyAtLinkName(0);
      await home.myHome.manageLinks.verifyShowAllCheckBoxIsDisplayed();
      await home.myHome.manageLinks.verifyAtGridHeaderColumnValue(0);
      await home.myHome.manageLinks.verifyAtGridHeaderColumnValue(1);
      await home.myHome.manageLinks.verifyAtGridHeaderColumnValue(2);
      const randomString = 'a'.repeat(60);
      await home.myHome.manageLinks.enterAtLinkName(randomString);
      await home.myHome.manageLinks.verifyLinkNameLength();
      await home.myHome.manageLinks.enterAtLinkName(1);
      await home.myHome.manageLinks.EnterAtScreenID();
      await home.myHome.manageLinks.verifyAtScreenID();
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.VerifyAtScreenName();
      await home.myHome.manageLinks.Save();
      await home.myHome.manageLinks.verifyAdditionSuccessFullMessage();
      await home.myHome.manageLinks.enterAtLinkName(2);
      await home.myHome.manageLinks.verifyAtLinkName(2);
      const urlRandomString = 'a'.repeat(210);
      await home.myHome.manageLinks.enterAtURL(urlRandomString);
      await home.myHome.manageLinks.verifyUrlLength();
      await home.myHome.manageLinks.enterAtURL(1);
      await home.myHome.manageLinks.verifyAtUrl(1);
      await home.myHome.manageLinks.enterAtURL(3);
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.verifyAtUrlInGridByLinkName(3);
      await home.myHome.manageLinks.Save();
      await home.myHome.manageLinks.verifyAdditionSuccessFullMessage();
      await home.myHome.manageLinks.enterAtLinkName(4);
      const filePathRandomString = 'a'.repeat(210);
      await home.myHome.manageLinks.EnterAtFilePath(filePathRandomString);
      await home.myHome.manageLinks.verifyFilePathLength();
      await home.myHome.manageLinks.EnterAtFilePath(1);
      await home.myHome.manageLinks.verifyAtFilePath(1);
      await home.myHome.manageLinks.enterAtLinkName(4);
      await home.myHome.manageLinks.EnterAtFilePath(2);
      await home.myHome.manageLinks.ClickAddButton();
      await home.myHome.manageLinks.Save();
      await home.myHome.manageLinks.verifyAdditionSuccessFullMessage();
      await home.myHome.manageLinks.verifyAtFilePathByLinkNameInGrid(4);
    });
  });

  test('VerifyTheSearchFucntionalityOnTheManageLinksScreen_74249', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '74249', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ClickAddLinkButton();
      await home.myHome.SwitchToManageLinks();
      await home.myHome.manageLinks.EnterAtLinkName();
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(0);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyLinkNameIsBlank();
      await home.myHome.manageLinks.EnterAtScreenID();
      await home.myHome.manageLinks.verifyAtScreenIdDescription();
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(0);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyScreenIDIsBlank();
      await home.myHome.manageLinks.verifyScreenIdDescriptionIsBlank();
      await home.myHome.manageLinks.EnterAtURL();
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtUrlInGridByLinkName(1);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyUrlIsBlank();
      await home.myHome.manageLinks.EnterAtFilePath(0);
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtFilePathByLinkNameInGrid(2);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyFilePathIsBlank();
      await home.myHome.manageLinks.enterAtViewOrder(0);
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(0);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyViewOrderIsBlank();
      await home.myHome.manageLinks.ClickShowAllCheckbox();
      await home.myHome.manageLinks.ClickSearchButton();
      await home.myHome.manageLinks.verifyAtLinkNameInGrid(0);
      await home.myHome.manageLinks.clickRefreshIcon();
      await home.myHome.manageLinks.verifyShowAllCheckBoxIsNotSelected();
    });
  });

  test('Home_MyHomeRefreshButtonIsNotWorking_74266', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '74266', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.ReloadMyHomeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.VerifyMyHomeScreenDisplayed();
      await home.myHome.VerifyNoError();
    });
  });
});

// ===================== Part 14 (8 tests) - Final Missing Tests =====================

test.describe('HomeCRMDefects4', () => {
  test('CRM200125_74295', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '74295', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.verifyActivityPeriodDateButtonCoordinates();
      await activity.activitySearch.verifyActivityPeriodTimeButtonCoordinates();
      await activity.scheduleSearch.clickAddNewButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.selectAtActivityStatus();
      await activity.activityEntry.TabOutEnteredDateAndTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.SelectAtPFActivity();
      await activity.activityEntry.activityEntryPFTab.SelectAtStatus();
      await activity.activityEntry.activityEntryPFTab.EnterAtStartDateTime();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.SelectAtUnit();
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.SelectAtPayScale();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.SelectPFRecordFromGrid();
      await activity.activityEntry.activityEntryPFTab.verifyAtCreditsInGrid();
      await activity.activityEntry.activityEntryPFTab.verifyAtPayScaleInGrid();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFCode();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFCodeDescription();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFIconIsDisplayed();
      await activity.activityEntry.activityEntryPFTab.verifyAtStartDate();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFActivity(1);
      await activity.activityEntry.activityEntryPFTab.verifyAtStatus(1);
      await activity.activityEntry.activityEntryPFTab.verifyAtUnit();
      await activity.activityEntry.activityEntryPFTab.verifyAtHoursWorked();
      await activity.activityEntry.activityEntryPFTab.verifyAtCredits();
      await activity.activityEntry.activityEntryPFTab.verifyAtHoursPaid();
      await activity.activityEntry.activityEntryPFTab.verifyAtPayScale(1);
      await activity.activityEntry.activityEntryPFTab.verifyAtHoursByPFInGrid(0);
      await activity.activityEntry.activityEntryPFTab.verifyAtHoursByPFInGrid(0);
      await activity.activityEntry.activityEntryPFTab.verifyAtHoursPaidByPFInGrid(0);
      await activity.activityEntry.activityEntryPFTab.verifyAtPayScaleInGrid();
      await activity.activityEntry.activityEntryPFTab.verifyAtPFActivityByPFInGrid(0);
      await activity.activityEntry.activityEntryPFTab.verifyAtPFStatusByPFInGrid(0);
    });
  });

  test('HomeActivityCalenderChangeTheJuris_75098', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '75098', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Calendar');
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(1);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(1);
      await activity.activityEntry.close();
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(2);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(2);
      await activity.activityEntry.close();
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(3);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(3);
      await activity.activityEntry.close();
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(4);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(4);
      await activity.activityEntry.close();
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(5);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(5);
      await activity.activityEntry.close();
      await activity.module.SwitchToActivityCalendarEntry();
      await activity.activityCalendarEntry.selectAtJuris(6);
      await activity.activityCalendarEntry.clickAddNew();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.verifyAtJurisDropdownIsEnabled();
      await activity.activityEntry.verifyAtJuris(6);
    });
  });

  test('ActivitySearch_168068', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '168068', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Search');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.EnterAtVisitorName();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.verifyAnyAcknowlegeExist();
      // objectIdentification.randomIdentify.selectRandomGridRow();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.ClickSaveNCloseButton();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.ClickBackLink();
      await activity.activitySearch.ClickResetLink();
      await activity.module.switchToActivitySearch();
    });
  });

  test('Police2018HomeModule_187814', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '187814', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.VerifyAtReceiverInGrid(0);
      await home.messageSearch.VerifyAtSenderInGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToMessageReceivedScreen();
      await home.messageReceivedScreen.VerifyReplybuttonEnabled();
      await home.messageReceivedScreen.VerifyReplyTextEnabled();
      await home.messageReceivedScreen.EnterReply();
      await home.messageReceivedScreen.ClickReplyButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.Click2ndRowInGrid();
      await home.module.switchToMessageReceivedScreen();
      await home.messageReceivedScreen.EnterReply();
      await home.messageReceivedScreen.ClickReplyAllButton();
    });
  });

  test('TrackEntryScreenFunctionality_258918', async ({ home, names, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '258918', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Track Search');
      await home.module.switchToTrackSearchScreenTab();
      await home.trackSearch.verifyAtOwner();
      await home.trackSearch.clickAddNew();
      await home.module.switchToTrackEntry();
      await home.trackEntry.clickVendorSearchButton();
      await popupPage.switchToCodedSearch();
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid();
      await home.module.switchToTrackEntry();
      await home.trackEntry.clickVendorInfoIcon();
      await names.module.switchToNameEntry();
      await names.nameEntry.switchToBusinessTab();
      await names.nameEntry.businessTab.verifyHelpDeskVendoxCheckBoxIsSelected();
      await names.module.switchToNameEntry();
      await names.nameEntry.Save();
      await names.module.switchToNameEntry();
      await names.nameEntry.VerifyUpdateSuccessfulStatusMessage();
      await names.nameEntry.SaveNCloseScreen();
      await home.module.switchToTrackEntry();
      await home.trackEntry.enterAtSummary();
      await home.trackEntry.selectAtStatus();
      await home.trackEntry.clickOwnerSearchButton();
      await popupPage.switchToCodedSearchII();
      await popupPage.kPICodedLookup.enterAtCode();
      await popupPage.kPICodedLookup.clickSearchIcon();
      await popupPage.kPICodedLookup.selectAtPFCode();
      await home.module.switchToTrackEntry();
      await home.trackEntry.verifyAtOwner1();
      await home.trackEntry.saveScreen();
      await home.trackEntry.verifyAdditionSuccessFullMesage();
      await home.trackEntry.SaveNClose();
      await home.module.switchToTrackSearchScreenTab();
      await home.trackSearch.clickReset();
      await home.trackSearch.enterAtVendor();
      await home.trackSearch.clickSearch();
      await home.trackSearch.verifyAtSummaryInGrid();
    });
  });

  test('TrackEntryy_TrckEnt', async ({ home, names, popupPage, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'TrckEnt', async () => {
      await loginPage.loginScreen.logon();
      await popupPage.acknowledge.okIfWindowExist('AfterLogin');
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Track Search');
      await home.module.switchToTrackSearchScreenTab();
      await home.trackSearch.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await home.module.switchToTrackEntry();
      await home.trackEntry.clickVendorSearchButton();
      await popupPage.switchToCodedSearch();
      await popupPage.kPICodedLookup.randomKPIHelpSelect();
      await home.module.switchToTrackEntry();
      await home.trackEntry.selectStatus();
      await home.trackEntry.enterSummary();
      await home.trackEntry.clickOwnerSearchButton();
      await popupPage.switchToCodedSearch();
      await popupPage.kPICodedLookup.randomKPIHelpSelect();
      await home.module.switchToTrackEntry();
      await home.trackEntry.saveScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await home.module.switchToTrackEntry();
      await home.trackEntry.verifyAdditionSuccessFullMesage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Track Entry');
      await home.trackEntry.clickVendorInfoIcon();
      await names.module.switchToNameEntry();
      await names.nameEntry.ClickAddressInfoButton();
    });
  });

  test('CRM202478_ActivityEntryUpdatedCustomFieldNameNotReflectedInTableHeader_77687', async ({ activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '77687', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenID('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.enterAtActivityNo();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.selectRowByAtSubjectInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.clickDivisionCustomLabel();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.enterAtCustomName(0);
      await settings.repositoryEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await settings.repositoryEntry.saveNClose();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(0);
      await activity.activityEntry.activityEntryOtherTab.clickSectionCustomLabel();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.enterAtCustomName(1);
      await settings.repositoryEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await settings.repositoryEntry.saveNClose();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(1);
      await activity.activityEntry.activityEntryOtherTab.clickTeamCustomLabel();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.enterAtCustomName(2);
      await settings.repositoryEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await settings.repositoryEntry.saveNClose();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(2);
      await activity.activityEntry.activityEntryOtherTab.clickSquadCustomLabel();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.enterAtCustomName(3);
      await settings.repositoryEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await settings.repositoryEntry.saveNClose();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(3);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(2);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(1);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(0);
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.Save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.SwitchToOtherTab();
      await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(3);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(2);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(1);
      await activity.activityEntry.activityEntryOtherTab.verifyAtHeaderColumnName(0);
      await activity.activityEntry.activityEntryOtherTab.verifyAtDivisionCustomLabel();
      await activity.activityEntry.activityEntryOtherTab.verifyAtSectionCustomLabel();
      await activity.activityEntry.activityEntryOtherTab.verifyAtSquadCustomLabel();
      await activity.activityEntry.activityEntryOtherTab.verifyAtTeamCustomLabel();
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickBackButton();
      await activity.activitySearch.clickDivisionSectionSquadAccordionArrow();
      await activity.activitySearch.verifyAtDivisionCustomLabel();
      await activity.activitySearch.verifyAtSectionCustomLabel();
      await activity.activitySearch.verifyAtSquadCustomLabel();
      await activity.activitySearch.verifyAtTeamCustomLabel();
    });
  });

  test('CRM196757_77794', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '77794', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenID('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.clickPrintIcon();
      await home.module.switchToSelectReport();
      await home.selectReport.selectAtCheckBoxByReportName();
      await home.selectReport.clickEmailReportButton();
      await home.selectReport.clickIndividualReportButton();
      await home.module.switchToPrintEmailScreen();
      await home.printEmailScreen.enterAtTo();
      await home.printEmailScreen.switchToMessageFrame();
      await home.printEmailScreen.enterAtMessage();
      await home.module.switchToPrintEmailScreen();
      await home.printEmailScreen.enterAtSubject();
      await home.printEmailScreen.ClickSendEmail();
      await home.printEmailScreen.verifyEmailHasBeenSentAcknowledgePopup();
      await home.module.switchToPrintEmailScreen();
      await home.printEmailScreen.verifySendEmailButtonDisplay();
    });
  });
});

// ===================== Part 15 - Mixed CRM Defects & Legacy =====================

test.describe('HomeMixedCRMDefectsLegacy', () => {
  test('IssuesInPolice1_68Version2022_192023CRM151214_20241', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '20241', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageBoloButton();
      await home.module.switchToMessageSearch();
      await home.messageSearch.clickAddNewButton();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.verifyBrowseImageButtonIsDisplayed();
      await home.messageSendScreen.verifyPictureBoxIsDisplayed();
      await home.messageSendScreen.clickCancel();
      await home.module.switchToMessageSearch();
      await home.messageSendScreen.verifyMessageSendScreenClosed();

      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Distribution List');
      await settings.module.switchToDistributionList();
      await settings.distributionList.clickAddNew();
      await settings.module.switchToDistributionEntry();
      await settings.distributionEntry.enterAtDistributionListName();
      await settings.distributionEntry.enterAtPFNo(0);
      await settings.distributionEntry.clickAddButton();
      await settings.distributionEntry.saveScreen();
      await settings.module.switchToDistributionEntry();
      await settings.distributionEntry.clickPrintIcon();
      await settings.distributionEntry.verifySelectReportWindowIsPresent();
      await home.module.switchToSelectReport();
    });
  });

  test('VerifyThatNoRecordFoundPopupShouldBeDisplayedOnlyOneTimeInReportLogScreen_258923', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '258923', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.clickOnPNXLogo();
      await loaderPage.mouseHoverOnPnxLogoAction('Tools');
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Report Log');
      await home.module.switchToReportLog();
      await home.reportLog.selectAtProduct();
      await home.reportLog.unCheckIncludeErrorCheckBox();
      await home.reportLog.enterAtReportName();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyNoRecordFoundAcknowledge();
      await home.module.switchToReportLog();
      await home.reportLog.enterFromDateAsLastYear();
      await home.reportLog.selectAtProduct();
      await home.reportLog.clearReportName();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyTableListOutResults();
      await home.reportLog.selectAtjuris();
      await home.reportLog.enterFromDateAsLastYear();
      await home.reportLog.selectAtProduct();
      await home.reportLog.clickSearchButton();
      await home.reportLog.verifyNoRecordFoundAcknowledge();
      await home.module.switchToReportLog();
    });
  });

  test('verifySearchPrefixLettersFieldFunctionalityInRMSApplication_9113', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '9113', async () => {
      await loginPage.loginScreen.logon();
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(1);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Search - 2411 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(2);
      await home.searchPrefixLetters.closeTheRespectedScreen('Case Update - 2414 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(3);
      await home.searchPrefixLetters.closeTheRespectedScreen('Inmate Search - 8111 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(4);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(5);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(6);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(7);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(8);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(9);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(10);
      await home.searchPrefixLetters.closeTheRespectedScreen('Address Search - 2094 -');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(11);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(12);
      await home.searchPrefixLetters.closeTheRespectedScreen('Name Entry - 2210');
      // objectIdentification.windowHandle.switchToMainWindow();
      await home.searchPrefixLetters.enterTextWithSymbols(13);
      await home.searchPrefixLetters.closeTheRespectedScreen('Admission - 8110 -');
      // objectIdentification.windowHandle.switchToMainWindow();
    });
  });

  test('CRM18007_ToVerifyTheHowToVediosScreenFucntioanlitiesInRMSAndCRMApplication_69491', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '69491', async () => {
      await loginPage.loginScreen.logon();
      await home.help.clickHelp();
      await home.help.clickHowToVideos();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickHowToVideosButton();
      await home.howToVideosWindow.verifyTitleCAD();
      await home.howToVideosWindow.enterAtSearch(0);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyAtHowToVideosName();
      await home.howToVideosWindow.clickAtHowToVideosName();
      await home.module.switchToPlayVideoWindow();
      // objectIdentification.windowHandle.closeTheScreen();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickPlayBackWebinar();
      await home.howToVideosWindow.verifyTitleWebinarName();
      await home.howToVideosWindow.enterAtSearch(1);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyAtWebinarName();
      await home.howToVideosWindow.clickAtWebinarName();
      await home.module.switchToPlayVideoWindow();
      // objectIdentification.windowHandle.closeTheScreen();
      await home.module.switchToHowToVideosWindow();
      await home.howToVideosWindow.clickuPComingWebinarButton();
      await home.howToVideosWindow.enterAtSearch(2);
      await home.howToVideosWindow.clickSearch();
      await home.howToVideosWindow.verifyWebinarColumnNameInUpComingWebinar();
    });
  });

  test('MyRemindersClickOnMyRemindersTabObjectReferenceNotSetToAnInstanceOfAnObjectErrorOccursCRM188029_60237A', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60237A', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.ClickUserName();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await personnel.module.switchToPersonnelEntryURL();
      await personnel.personnelEntry.switchToPreferenceTab();
      await personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox();
      await personnel.personnelEntry.personnelEntryPreferencesTab.verifyDebugCheckBoxIsCheked();
      await personnel.module.switchToPersonnelEntryURL();
      await personnel.personnelEntry.saveNClose();
      // objectIdentification.windowHandle.verifyWindowNotExistsByURL('frmPersonnel.aspx');
      // objectIdentification.smokeTest.checkAckExist();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter1126AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyRemindersTab();
      await home.myHome.myRemindersTab.verifyRefreshButtonIsDisplayed();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('My Home My Reminders tab');
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter1126AsTrue();
      await settings.module.switchToSystemParamter();
    });
  });

  test('AddParameterToRemovePasswordResetFromLoginScreen_60390', async ({ settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '60390', async () => {
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ClickSystemParameterIcon();
      await settings.module.switchToSystemParamterScreen();
      await settings.sysParameter.setSystemparameter282AsFalse();
      await settings.module.switchToSystemParamterScreen();
      await settings.sysParameter.closeTheScreen();
      await loaderPage.navigateToModule('Home');
      await loaderPage.logout();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.verifyForgotPasswordDisabled();
      await loginPage.loginScreen.logonUsingTestContext();
      await loaderPage.navigateToModule('Home');
      await loaderPage.ClickSystemParameterIcon();
      await settings.module.switchToSystemParamterScreen();
      await settings.sysParameter.setSystemparameter282AsTrue();
      await loaderPage.logout();
      await loginPage.loginScreen.SelectAtDatabase();
      await loginPage.loginScreen.verifyForgotPasswordEnabled();
    });
  });

  test('CRM183224_FireRMSMyInfowhengivenpermissiontothisforchangingthentheuserisabletoenterchangeHireDatetheyshouldnot_53029', async ({ home, settings, personnel, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '53029', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsTrue();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.clickMyInfoTab();
      await settings.module.switchToPhoenixAuthenticatorWindow();
      await settings.phoenixAuthenticatorWindow.enterAtPassword();
      await settings.phoenixAuthenticatorWindow.clickAcceptButton();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMyInfoTab();
      await personnel.personnelEntry.personnelEntryMainTab.verifyHiredDateIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifySeniorityIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyAdditionalYearsIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyTerminatedDateIsDisabled();
      await personnel.personnelEntry.personnelEntryMainTab.verifyProbationEndedIsDisabled();
      await home.module.switchToMyHomeScreen();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4323AsFalse();
      await settings.module.switchToSystemParamter();
    });
  });

  test('verifyAllowAlphaNumericAllowsInPointsFieldActivityScreen_62502', async ({ home, activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '62502', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.tabActivityDateTime();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      await activity.module.SwitchToActivityEntry();
      const getActivityNo = await activity.activityEntry.GetActivityNo();
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
      await activity.activityEntry.activityEntryPFTab.enterAtPoints();
      await activity.activityEntry.activityEntryPFTab.clickAddButton();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.saveNClose();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await activity.module.switchToActivitySearch();
      await activity.activitySearch.SelectAtcredits();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.ClickActivityTypeInGrid();
      await home.module.switchToActivityEntry();
      await activity.activityEntry.verifyactivityno(getActivityNo);
      await activity.activityEntry.NavigateToPFTab();
      await activity.activityEntry.activityEntryPFTab.verifyAtCreditsInGrid();
      await home.module.switchToActivityEntry();
    });
  });

  test('CRM181764TheArrowHeadDisappearsWhenTheFullWhiteBoardIsSetTiDisplayOnTheRightSideOfTheScreen_69694', async ({ home, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '69694', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter64();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.clickWhiteBoardHideButton();
      await home.myHome.whiteBoard.verifyWhiteBoardFieldIsHided();
      await home.myHome.whiteBoard.verifyWhiteBoardOnlyScreenIsLoaded();
      await home.myHome.whiteBoard.verifyWhiteBoardHidedLabel();
      await home.myHome.whiteBoard.clickWhiteBoardUnHideButton();
      await home.myHome.whiteBoard.verifyWhiteBoardFieldIsUnHided();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemParameter64();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.ReLoadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.verifyWhiteBoardAndLinkScreenIsLoaded();
    });
  });

  test('CRM161613ToVerifyTheWhiteBoardEndDateDoesNotRemoveEntryFromDisplay_29364', async ({ home, loginPage, testData }) => {
    await withTestContext(testData, '29364', async () => {
      await loginPage.loginScreen.logon();
      await home.module.switchToMyHomeScreen();
      // objectIdentification.manualIdentify.setTimeStampForScreen();
      await home.myHome.whiteBoard.clickAddButton();
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.enterAtSubject();
      await home.myHome.whiteBoard.whiteboardEntry.enterAtStartDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.enterAtEndDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await home.myHome.whiteBoard.whiteboardEntry.closeScreen();
      await home.module.switchToMyHomeScreen();
      // objectIdentification.manualIdentify.verifyScreenIsRefreshed('My Home Screen');
      await home.myHome.whiteBoard.verifyAtSubjectInGrid(0);
      // objectIdentification.manualIdentify.reloadScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(0);
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.clearStartDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.clearAtEndDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await home.myHome.whiteBoard.whiteboardEntry.verifyStartDateAndTimeIsNull();
      await home.myHome.whiteBoard.whiteboardEntry.verifyEndDateAndTimeIsNull();
      await home.myHome.whiteBoard.whiteboardEntry.closeScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.selectRowByAtSubject(1);
      await home.module.switchToWhiteboardEntry();
      await home.myHome.whiteBoard.whiteboardEntry.clearStartDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.clearAtEndDateAndTime();
      await home.myHome.whiteBoard.whiteboardEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await home.myHome.whiteBoard.whiteboardEntry.verifyStartDateAndTimeIsNull();
      await home.myHome.whiteBoard.whiteboardEntry.verifyEndDateAndTimeIsNull();
      await home.module.switchToMyHomeScreen();
      await home.myHome.whiteBoard.verifyAtSubjectNotInGrid(2);
      await home.module.switchToMyHomeScreen();
    });
  });

  test('CRM149216ToVerifyTheDuplicateTemplateDropDownFucntioanlityUnderLogEntryTabInActivityScreen_70549', async ({ home, activity, settings, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70549', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreenByScreenIDWithContains('1383');
      await home.module.switchToActivitySearch();
      await activity.activitySearch.enterAtActivityNo();
      await activity.activitySearch.ClickSearchLink();
      await activity.activitySearch.selectAtSubjectInGrid();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.NavigateToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.ClickAddNewButton();
      await settings.module.switchToTextMgmt();
      await home.textMgmt.EnterAtTextName();
      await home.textMgmt.enterAtDescription();
      await home.textMgmt.SaveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await home.textMgmt.SaveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await home.textMgmt.Close();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.clickReset();
      await activity.activityEntry.NavigateToLogEntryTab();
      await activity.activityEntry.activityEntryLogEntryTab.verifyValueIsNotDuplicatedInTemplate();
    });
  });

  test('CRM172427TOVerifyHomeActivityEntry_PublicEducationTab_ContactNameResetIConUiIssue_71860', async ({ activity, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '71860', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('Activity Entry');
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.selectAtCategoryGroup();
      await activity.activityEntry.selectAtCategory();
      await activity.activityEntry.selectAtActivityType();
      await activity.activityEntry.SelectActivityStatusAsRequestToDo();
      await activity.activityEntry.TabOutActivityFromDateAndTime();
      await activity.activityEntry.enterSpaceAtSubject(3);
      await activity.activityEntry.clickSave();
      await activity.activityEntry.verify2008SubjectIsRequiredAcknowledgePopUp();
      await activity.module.SwitchToActivityEntry();
      await activity.activityEntry.enterAtSubject();
      await activity.activityEntry.Save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      // objectIdentification.manualIdentify.verifyTabIsEnabledByAtTabName(BaseData.getHomeModuleValue('TabName0'));
      await activity.activityEntry.NavigateToPublicEducationTab();
      await activity.activityEntry.publicEducationTab.verifyAtContactNameResetIconPosition();
      // objectIdentification.smokeTest.checkAckExist();
      await activity.module.SwitchToActivityEntry();
    });
  });

  test('CRM_78386_Home_186987', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '186987', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.ClickSendAsBolo();
      await home.messageSendScreen.VerifyPFAndAddMultiplePFButtonDisabled();
      await home.messageSendScreen.EnterMessage();
      await home.messageSendScreen.SelectBoloType();
      await home.messageSendScreen.SelectAtBoloStatus();
      await home.messageSendScreen.ClickSendButton();
      await home.messageSendScreen.VerifyBoloMessageConfirmMessage();
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage();
      await home.messageSendScreen.CloseScreen();
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageBulletinTab();
      await home.myHome.messageTab.ClickMessageSearch();
      await home.module.switchToMessageSearch();
      await home.messageSearch.ClickBoloRadioButton();
      await home.messageSearch.VerifyDateAsCurrentDateInGrid(0);
      await home.messageSearch.ClickAtSenderInGrid();
      await home.module.switchToBoloMessageReceivedScreen();
      await home.bOLOMessageReceivedScreen.VerifyAtBoloStatus();
      await home.bOLOMessageReceivedScreen.EnterMessage();
      await home.bOLOMessageReceivedScreen.ClickUpdateButton();
      await home.bOLOMessageReceivedScreen.VerifySuccessfulBottomMessage();
      await home.bOLOMessageReceivedScreen.CloseScreen();
      await home.module.switchToMessageSearch();
    });
  });

  test('verifyTheTextSearchToolbarFunctionalitiesInBasedOnSearchWordField_9149', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '9149', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await loaderPage.verifyTextbarIsDisplayedInToolbar();
      await loaderPage.ClickTextMsgSrchImageIcon();
      await loaderPage.verifyTextbarIsNotDisplayedInToolbar();
      await loaderPage.ClickTextMsgSrchImageIcon();
      await loaderPage.EnterAutomationinTextMsgSrchTextBox();
      await loaderPage.pressEnterInTextMsgSrchTextBox();
      await home.module.switchToTextSearchScreen();
      await home.textSearch.readAndVerifyTextByTextColumn('automation');
      await home.textSearch.clearSearchWordsField();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.readAndVerifyTextByTextTypeColumn();
      await home.textSearch.selectTextTypeComboBoxAsNull();
      await home.textSearch.enterDateFromAsOneYearFromCurrentDate();
      await home.textSearch.enterDateToAsCurrentDate();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyRowCountNotEqualsToZero();
    });
  });

  test('verifyMessageScreenOpeningWithoutAnyError_14706', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '14706', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Home');
      await loaderPage.navigateToScreen('My Home');
      await home.module.switchToMyHomeScreen();
      await home.myHome.SwitchToMessageTab();
      await home.myHome.messageTab.ClickMessageAddNew();
      await home.module.switchToMessageSend();
      await home.messageSendScreen.VerifyAddAndClearButtonEnabled();
      await home.module.switchToMyHomeScreen();
    });
  });

  test('TextSearchNOtWorking_16370', async ({ home, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '16370', async () => {
      await loginPage.loginScreen.logon();
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.clickOnPNXLogo();
      await loaderPage.mouseHoverOnTools();
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Text Search');
      await home.module.switchToTextSearch();
      await home.textSearch.SelectAtJuris();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.EnterAtTextInSearchWordsField();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyAtTextByTextType();
      await home.textSearch.CloseScreen();
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.mouseHoverOnTools();
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Text Search');
      await home.module.switchToTextSearch();
      await home.textSearch.selectAtTextTypeComboBox();
      await home.textSearch.ClickSearchButton();
      await home.textSearch.verifyAtTextByTextType();
    });
  });

  test('ToolOptionHiddenAfterTabbingOutInChrome_51864', async ({ loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '51864', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.clickAndTaboutSearchMenuItem();
      await loaderPage.verifyTextSearchIconIsDisplayed();
      await loaderPage.verifyAIMugmatchIconIsDisplayed();
      await loaderPage.verifyPhoenixBOTCallCenterAgentIconIsDisplayed();
      await loaderPage.verifyAITranscriptionIconIsDisplayed();
      await loaderPage.verifySysParameterIconIsDisplayed();
      await loaderPage.verifyJobStatusIconIsDisplayed();
      await loaderPage.verifyKGISQueryIconIsDisplayed();
      await loaderPage.verifyMessageIconIsDisplayed();
      await loaderPage.verifySchedulerIconIsDisplayed();
      await loaderPage.verifyActivityIconIsDisplayed();
      await loaderPage.verifyPnxLogoIsDisplayed();
      // objectIdentification.windowHandle.phoenixMainWindow();
    });
  });
});






