// @ts-nocheck
import { test, expect } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

test.describe('TrainingFunctional', () => {
  test('CreateCertificationManualEntry_203667', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '203667', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickAddNew();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.enterAtPFCode();
      await training.certificationManualEntry.selectAtCertification();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.VerifyEarnedCEUFieldMandatory();
      await training.certificationManualEntry.VerifyEarnedHoursFieldMandatory();
      await training.certificationManualEntry.verifyRecertificaitonByAsOneMonthFromCurrentDate();
      await training.certificationManualEntry.verifyRecertificationByFieldDisabled();
      await training.certificationManualEntry.EnterAtEarnedCEU();
      await training.certificationManualEntry.EnterAtEarnedHours();
      await training.certificationManualEntry.TabOutEnteredDate();
      await training.certificationManualEntry.InternalSave();
      await training.certificationManualEntry.VerifyUpdateSuccessfulAcknowledgeMessage();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.enterAtEmployeePF();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.verifyAtPF(0);
      await training.certificationSearch.verifyAtCertification(0);
      await training.certificationSearch.verifyAtCEUsEarned(0);
      await training.certificationSearch.verifyAtHoursEarned(0);
    });
  });

  test('verifyAbleToCreateActivityLogFromTrainingModule_261421', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '261421', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickAddNewLink();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.verifyAtJurisComboBox();
      await training.trainingClassEntry.selectAtTrainingCategoryComboBox();
      await training.trainingClassEntry.selectAtTrainingTypeComboBox();
      await training.trainingClassEntry.enterAtNoOfStudents();
      await training.trainingClassEntry.enterAtCourseNo();
      await training.trainingClassEntry.clickMultiScheduleButton();
      await training.module.switchToTrainingScheduleEntry();
      await training.trainingScheduleEntry.tabOutTrainingStartAndEndDate();
      await training.trainingScheduleEntry.enterClassHoursFromAndToFields();
      await training.trainingScheduleEntry.clickAddButton();
      await training.trainingScheduleEntry.saveNClose();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.clickAddMultipleEmployees();
      await training.module.switchToMultiPFWindow();
      await training.multiPFWindow.clickselectAllCheckBox();
      await training.multiPFWindow.clickAddSelectedPFToList();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtInstructorPF();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtCertificationComboBox();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtpositionComboBox();
      await training.trainingClassEntry.classEntryInstructorsTab.clickAddButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.verifyActivityLogButtonIsDisabled();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.selectAtPFCodeCheckBoxInGrid();
      await training.trainingClassEntry.classEntryStudentsTab.selectResultAsPass();
      await training.trainingClassEntry.classEntryStudentsTab.enterAtScore();
      await training.trainingClassEntry.classEntryStudentsTab.enterNotes();
      await training.trainingClassEntry.classEntryStudentsTab.clickApplyButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.selectAtPFCode1CheckBoxInGrid();
      await training.trainingClassEntry.classEntryStudentsTab.selectResultAsPass();
      await training.trainingClassEntry.classEntryStudentsTab.enterAtScore();
      await training.trainingClassEntry.classEntryStudentsTab.enterNotes();
      await training.trainingClassEntry.classEntryStudentsTab.clickApplyButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.save();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.verifyActivityLogButtonIsEnabled();
      await training.trainingClassEntry.clickActivityLogButton();
    });
  });

  test('ErrorsOccurringWhenMakingEntriesInTheTrainingEntryScreen_147383', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '147383', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickAddNewLink();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectEmployeePf();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectTrainingCategory();
      await training.trainingEntry.selectTrainingType();
      await training.trainingEntry.enterCourseTitle();
      await training.trainingEntry.clickMultiScheduleButton();
      await training.module.switchToTrainingScheduleEntry();
      await training.trainingScheduleEntry.tabOutTrainingStartAndEndDate();
      await training.trainingScheduleEntry.enterClassHoursFromAndToFields();
      await training.trainingScheduleEntry.clickAddButton();
      await training.trainingScheduleEntry.save();
      await training.module.switchToTrainingScheduleEntry();
      await training.trainingScheduleEntry.verifyAdditionSuccesfulStatusMessage();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyCourseDate();
      await training.trainingEntry.verifyCourseHours();
    });
  });
});

test.describe('TrainningEntrySmoke', () => {
  test('CertificationEntry_CertEntry', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'CertEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickAddNew();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.enterPFCodeAndSelectRandom();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.selectCertification();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('TrainningClassEntry_trainClsEnt', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'trainClsEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickAddNewLink();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickourseLookUpIconAndSelectRandom();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.enterFromDateAndToDateAsCurrentDate();
      await training.trainingClassEntry.EnterCourseHoursAs2();
      await training.trainingClassEntry.enterNoOfStudentsAs1();
      await training.trainingClassEntry.save();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.verifyClassIDIsNotNull();
      await training.trainingClassEntry.verifyAdditionalSuccessFullMessage();
    });
  });

  test('CourseEntry_CurseEnt', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'CurseEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickAddNewLink();
      await training.module.switchToCourseEntry();
      await training.courseEntry.selectTrainingCategory();
      await training.courseEntry.selectTrainingType();
      await training.courseEntry.enterCourseTitle();
      await training.courseEntry.entercourse();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyAdditionalSuccessFullMessage();
      await training.courseEntry.verifyCouseSystemID();
    });
  });

  test('FacilityCodeEntry_FcltyCdeEnt', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'FcltyCdeEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Facility Code');
      await training.module.switchToFacilityCode();
      await training.facilityCode.clickAddNewLink();
      await training.module.switchToFacilityEntry();
      await training.facilityEntry.enterFacilityId();
      await training.facilityEntry.enterName();
      await training.facilityEntry.clickSave();
      await training.facilityEntry.verifyAdditionSuccesFullMessage();
    });
  });

  test('GuestEntry_GustEnt', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'GustEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.clickAddNewLink();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterLastNameAndFirstName();
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
      await training.guestEntry.verifyAdditionalSuccessfullMessage();
      await training.guestEntry.verifyGuestIDIsNotNull();
    });
  });

  test('InstructorEntry_InstrEntry', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'InstrEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickAddNewLink();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.selectRandomEmployeePF();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.selectCertification();
      await training.instructorEntry.enterExpireDateAsCurrentDate();
      await training.instructorEntry.clickAdd();
      await training.instructorEntry.saveScreen();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.verifyAdditionalSuccessFullMessage();
    });
  });

  test('TrainingEntry_TrnEnt', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, 'TrnEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickAddNewLink();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectEmployeePf();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectTrainingCategory();
      await training.trainingEntry.selectTrainingType();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterCourseTitle();
      await training.trainingEntry.enterCourse();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAdditionSuccessFullMessage();
      await training.trainingEntry.verifyTrainingNoINotNull();
    });
  });
});

test.describe('Q4DefectTestCases2024', () => {
  test('ToVerifyTheWhenSelectingTheExistingCourseEntryUnderTheCEUTabAddingDataToTheGrid_26487', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '26487', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.enterAtCourseSystemID();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.selectGridExpandRowByAt();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCEUsTab();
      await training.courseEntry.courseCEUsTab.selectAtCertification();
      await training.courseEntry.courseCEUsTab.enterAtCEUsEarned();
      await training.courseEntry.courseCEUsTab.enterAtHoursCredited();
      await training.courseEntry.courseCEUsTab.clickAdd();
      await training.courseEntry.courseCEUsTab.verifyGridRowByAtCertificate();
      await training.module.switchToCourseEntry();
      await training.courseEntry.clickPrintIcon();
      await training.courseEntry.verifySelectReportWindowExists();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCEUsTab();
      await training.courseEntry.courseCEUsTab.verifyGridRowByAtCertificate();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
      await training.courseEntry.switchToInstructorNotesTab();
      await training.courseEntry.instructorNotesTab.taboutUpdatedDateAndTime();
      await training.courseEntry.instructorNotesTab.taboutUpdatedByPF();
      await training.courseEntry.instructorNotesTab.enterAtComments();
      await training.module.switchToCourseEntry();
      await training.courseEntry.clickSave();
      await training.courseEntry.verifyUpdatedDataExistAckMsg();
      await training.module.switchToCourseEntry();
      await training.courseEntry.switchToInstructorNotesTab();
      await training.courseEntry.instructorNotesTab.clickSave();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
    });
  });

  test('ToVerifyTheTrainingInstructorSearchAddNewAfterAddingTheDataInTheGrid_26752', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '26752', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickAddNewLink();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.enterAtEmployeePFNo();
      await training.instructorEntry.clickPrintIcon();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.verifyAtEmployeePF();
      await training.instructorEntry.selectAtCertification();
      await training.instructorEntry.enterAtCostPerHour();
      await training.instructorEntry.clickAdd();
      await training.instructorEntry.verifyAtCertificationInTheGrid();
      await training.instructorEntry.clickPrintIcon();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.verifyAtCertificationInTheGrid();
      await training.instructorEntry.verifyRowByAtCost();
    });
  });

  test('verifyTrainingEntryWhileEnteringCourseFieldRemainingFieldAutopopulate_26521', async ({ loginPage, loaderPage, training, popupPage, testData }) => {
    await withTestContext(testData, '26521', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickAddNewLink();
      await training.module.switchToCourseEntry();
      await training.courseEntry.selectAtTrainingCategory();
      await training.courseEntry.selectAtTrainingType();
      await training.courseEntry.enterAtCourseTitle();
      await training.courseEntry.enterAtCourse();
      await training.courseEntry.saveScreen();
      await training.courseEntry.verifyAdditionalSuccessFullMessage();
      await training.courseEntry.saveNdCloseScreen();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectEmployeePf();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.clickLocalCourseLookupIcon();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAtTrainingCategory();
      await training.trainingEntry.verifyAtTrainingType();
      await training.trainingEntry.verifyAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterFromTimeAsCurrentTime();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterToTimeAs3HoursFromCurrentTime();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAdditionSuccessFullMessage();
      await training.trainingEntry.verifyAtTrainingCategory();
      await training.trainingEntry.verifyAtTrainingType();
      await training.trainingEntry.verifyAtCourseTitle();
      await training.module.switchToTrainingEntry();
    });
  });

  test('ToVerifyTheOfficerDoesNotAppearInTheCertificationSearchResult_29399', async ({ loginPage, loaderPage, training, personnel, testData }) => {
    await withTestContext(testData, '29399', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.enterAtEmployeePF();
      await training.certificationSearch.clickAddNew();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.selectAtCertification(0);
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('CRM158708ToVerifyTheTrainingModuleIssueWithCertification_29397', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '29397', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickAddNewLink();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectAtEmployeePf();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.selectAtTrainingCategory(0);
      await training.trainingEntry.selectTrainingType();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.enterCourse();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAdditionSuccessFullMessage();
      await training.trainingEntry.navigatetoTrainingDetailTab();
      await training.trainingEntry.trainingDetailTab.selectAtResult();
      await training.trainingEntry.trainingDetailTab.enterAtScore();
      await training.trainingEntry.navigatetoCEUsTab();
      await training.trainingEntry.cEUsTab.selectAtCertification(0);
      await training.trainingEntry.cEUsTab.enterAtEarnedCEUs();
      await training.trainingEntry.cEUsTab.enterAtCreditedHours();
      await training.trainingEntry.cEUsTab.clickAddButton();
      await training.trainingEntry.cEUsTab.verifyAtCertificationInGrid(0);
      await training.trainingEntry.saveScreen();
      await training.trainingEntry.verifyUpdateSuccessFullMessage();
    });
  });

  test('CRM180195TrainingInstructorSearchAddInstructor_48820', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '48820', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickSearchLink();
      await training.instructorSearch.selectAtNameInGrid();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.selectCertification();
      await training.instructorEntry.enterAtCostPerHour();
      await training.instructorEntry.enterExpireDateAsFutureDate();
      await training.instructorEntry.clickSave();
      await training.instructorEntry.verify6071UpdatedDataExistAcknowledgeMessage();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.clickClear();
      await training.instructorEntry.selectAtCertificationInGrid();
      await training.instructorEntry.clickSave();
      await training.instructorEntry.verify6071UpdatedDataExistAcknowledgeMessage();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.clickAdd();
      await training.instructorEntry.saveScreen();
      await training.instructorEntry.VerifyUpdateSucessfullMessage();
      await training.module.switchToInstructorEntry();
    });
  });

  test('CRM180661TrainingClassEntryScreenInstructorTab_50816', async ({ loginPage, loaderPage, training, popupPage, testData }) => {
    await withTestContext(testData, '50816', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtInstructorPF();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtCertificationComboBox();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtpositionComboBox();
      await training.trainingClassEntry.clickSave();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.clickAddButton();
      await training.trainingClassEntry.classEntryInstructorNotesTab.verifyInstructorFieldIsBlank();
      await training.trainingClassEntry.save();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.verifyAtCertificationInGrid();
    });
  });

  test('CRM187793_CertificationEntryClickDeleteGridData_57993', async ({ loginPage, loaderPage, training, popupPage, testData }) => {
    await withTestContext(testData, '57993', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.selectAtPFInGrid();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.deleteAtCellByColumnName();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.clickGridHeaderByColumnName();
      await training.certificationEntry.verifyPopUpDoesNotArise();
      await training.module.switchToCertificationEntry();
    });
  });

  test('CRM187300_ClassEntryScreenUnderStudentsTabDeleteTheRecord_58011', async ({ loginPage, loaderPage, training, popupPage, testData }) => {
    await withTestContext(testData, '58011', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.deleteAtRowByPFCode();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.clickGridHeaderByColumnName();
      await training.trainingClassEntry.verifyPopUpDoesNotArise();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.deleteAtRowByName();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.clickGridHeaderByColumnName();
      await training.trainingClassEntry.verifyPopUpDoesNotArise();
      await training.module.switchToTrainingClassEntry();
    });
  });

  test('CRM186924_TrainingEntryCEUsTabClickDeleteRecordInGrid_58158', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58158', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectAtNameInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoCEUsTab();
      await training.trainingEntry.cEUsTab.deleteAtRecordByCertification();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoCEUsTab();
      await training.trainingEntry.cEUsTab.selectAtCertificationInGrid();
      await training.trainingEntry.cEUsTab.verifyRecordMarkedAcknowledge();
      await training.module.switchToTrainingEntry();
    });
  });
});

test.describe('Q2S5DefectTestCases2025', () => {
  test('CRM181391_TrainingCertificationSearch_1_118AutomationIssues_58186', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58186', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.selectAtTwoCertificationValues();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.verifyAtCertificationInGridByRow(1);
      await training.certificationSearch.verifyAtCertificationInGridByRow(2);
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickResetButton();
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.verifyAtCertificationInGridByRow(1);
      await training.certificationSearch.verifyAtCertificationInGridByRow(2);
      await training.certificationSearch.clickCertificationRadioButton();
      await training.module.switchToCertificationSearch();
    });
  });

  test('CRM187217_TrainingEntryInstructorsTab_58103', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58103', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.selectAtTrainingCategory();
      await training.trainingEntry.selectAtTrainingType();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterFromTimeAsCurrentTime();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.trainingEntry.navigatetoInstructorsTab();
      await training.trainingEntry.instructorsTab.enterAtInstructor(1);
      await training.trainingEntry.instructorsTab.verifyCertificationLabelIsNonMandatory();
      await training.trainingEntry.instructorsTab.verifyPositionLabelIsNonMandatory();
      await training.trainingEntry.instructorsTab.clearInstructor();
      await training.trainingEntry.instructorsTab.enterAtInstructor(2);
      await training.trainingEntry.instructorsTab.verifyCertificationLabelIsMandatory();
      await training.trainingEntry.instructorsTab.verifyPositionLabelIsMandatory();
      await training.module.switchToTrainingEntry();
    });
  });

  test('CRM187004_TrainingCertificationManualEntryMainTabColor_58090', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58090', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickAddNew();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.enterAtPFNo();
      await training.certificationEntry.selectAtCertification();
      await training.certificationEntry.save();
      await training.certificationEntry.saveNClose();
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.selectAtPFInGrid();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.selectAtEarnedViaInGrid();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.certificationManualEntry.ClickMainTab();
      await training.certificationManualEntry.EnterAtEarnedCEU();
      await training.certificationManualEntry.EnterAtEarnedHours();
      await training.certificationManualEntry.InternalSave();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyTabColor('Main', 1);
      await training.module.switchToCertificationManualEntry();
    });
  });

  test('CRM188165_TrainingEntryInstructorTabAfterFillingData_58081', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58081', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.selectAtTrainingCategory();
      await training.trainingEntry.selectAtTrainingType();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterFromTimeAsCurrentTime();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.trainingEntry.navigatetoInstructorsTab();
      await training.trainingEntry.instructorsTab.enterAtTrainingDateFrom();
      await training.trainingEntry.instructorsTab.enterAtTrainingDateTo();
      await training.trainingEntry.instructorsTab.enterAtInstructor();
      await training.trainingEntry.instructorsTab.selectAtCertification();
      await training.trainingEntry.instructorsTab.selectAtPosition();
      await training.trainingEntry.instructorsTab.enterAtTrainingHours();
      await training.trainingEntry.instructorsTab.clickAddButton();
      await training.trainingEntry.instructorsTab.verifyAtFromDateInGrid();
      await training.trainingEntry.instructorsTab.verifyAtToDateInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.trainingEntry.navigatetoInstructorsTab();
      await training.trainingEntry.instructorsTab.clickClearButton();
      await training.trainingEntry.instructorsTab.verifyTrainingDateFromIsEmpty();
      await training.trainingEntry.instructorsTab.verifyTrainingDateToIsEmpty();
      await training.module.switchToTrainingEntry();
    });
  });

  test('CRM187078_BuildIssueInInstructorEntryScreen_58083', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '58083', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickAddNewLink();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.enterAtEmployeePFNo();
      await training.instructorEntry.selectAtCertification();
      await training.instructorEntry.clickAdd();
      await training.instructorEntry.saveScreen();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.clickSignatureField();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.verifySignatureFieldIsEnabled();
      await training.instructorEntry.verifyAtCretificationInGrid();
    });
  });

  test('verifyTrainingClassSearchSelectedNameDisappearsWhenClickingSearch_63311', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63311', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.selectAtName();
      await training.classSearch.clickSearchLink();
      await training.classSearch.verifyNoRecordFoundAckMsg();
      await training.module.switchToClassSearch();
      await training.classSearch.verifyAtName();
      await training.module.switchToClassSearch();
    });
  });

  test('verifyTrainingCourseEntryWhenClickingConvertToUppercaseButton_62519', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '62519', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.selectAtTrainingType();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCourseDescriptionTab();
      await training.courseEntry.courseDescriptionTab.selectAllText();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCourseDescriptionTab();
      await training.courseEntry.courseDescriptionTab.clickConvertToUppercaseIcon();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyJurisAsPX();
    });
  });

  test('GuestEntryScreenInPhoneFieldEnterTheInvalidNumber_69717', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69717', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.clickAddNewLink();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterLastNameAndFirstName();
      await training.guestEntry.enterAtAddress();
      await training.guestEntry.enterAtCSZ();
      await training.guestEntry.enterAtCounty();
      await training.guestEntry.selectAtPhoneType1();
      await training.guestEntry.enterAtPhoneNumber(1);
      await training.guestEntry.clickSave();
      await training.guestEntry.verify6071InvalidPhoneNumberAcknowledgePopAppears();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterAtPhoneNumber(2);
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
      await training.guestEntry.verifyAdditionalSuccessfullMessage();
    });
  });
});

test.describe('Q2S6PBTestCases2025', () => {
  test('SearchFunctionalityInCourseSearchScreen_58109', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '58109', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.selectAtJuris();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyAtJuris();
      await training.courseEntry.saveNdCloseScreen();
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickBackLink();
      await training.courseSearch.clickResetLink();
      await training.courseSearch.enterAtCourseSystemID();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyCouseSystemID();
      await training.courseEntry.saveNdCloseScreen();
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickBackLink();
      await training.courseSearch.clickResetLink();
      await training.courseSearch.selectAtTrainingCategory();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyAtTrainingCategory();
      await training.courseEntry.saveNdCloseScreen();
      await training.module.switchToCourseSearch();
    });
  });

  test('verifyFacilityCodeEntryFunctionality_60336', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '60336', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Facility Code');
      await training.module.switchToFacilityCode();
      await training.facilityCode.clickAddNewLink();
      await training.module.switchToFacilityEntry();
      await training.facilityEntry.enterAtFacilityID();
      await training.facilityEntry.enterAtName();
      await training.facilityEntry.enterAtAddress();
      await training.facilityEntry.enterAtCSZ();
      await training.facilityEntry.selectAtPhoneType1();
      await training.facilityEntry.enterAtPhoneNo1();
      await training.facilityEntry.selectAtPhoneType2();
      await training.facilityEntry.enterAtPhoneNo2();
      await training.facilityEntry.enterAtEmail();
      await training.facilityEntry.enterAtNotes();
      await training.facilityEntry.clickSave();
      await training.module.switchToFacilityEntry();
      await training.facilityEntry.verifyAdditionSuccesFullMessage();
      await training.facilityEntry.verifyAtFacilityID();
      await training.facilityEntry.verifyAtName();
      await training.facilityEntry.clickInactiveCheckbox();
      await training.facilityEntry.verifyInactiveDateAsCurrentDate();
      await training.facilityEntry.clickSave();
      await training.module.switchToFacilityEntry();
      await training.facilityEntry.clickInactiveCheckbox();
      await training.facilityEntry.verifyInactiveDateAsNull();
      await training.facilityEntry.clickSave();
      await training.module.switchToFacilityEntry();
    });
  });
});

test.describe('Q3S8DefectTestCases2025', () => {
  test('verifyBuildIssueOccurInFacilitySearchScreen_62751', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '62751', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Facility Code');
      await training.module.switchToFacilityCode();
      await training.facilityCode.clickSearchLink();
      await training.facilityCode.clickResetLink();
      await training.facilityCode.clickExcelIcon();
      await training.facilityCode.verifyExcelFileIsDownloaded();
      await training.module.switchToFacilityCode();
      await training.facilityCode.verifyJurisAsPx();
    });
  });

  test('verifyFacilityCodeSearchFieldsGetsDisappearWhenClickingPrintIcon_63019', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63019', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Facility Code');
      await training.module.switchToFacilityCode();
      await training.facilityCode.enterAtCodeNo();
      await training.facilityCode.enterAtCSZ();
      await training.facilityCode.enterAtName();
      await training.facilityCode.clickPrintIcon();
      await training.facilityCode.verifySelectReportScreenOpens();
      await training.module.switchToFacilityCode();
      await training.facilityCode.verifyAtCodeNo();
      await training.facilityCode.verifyAtCSZ();
      await training.facilityCode.verifyAtName();
    });
  });

  test('verifyFacilityCodeWhenClickingExcelIcon_63459', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63459', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Facility Code');
      await training.module.switchToFacilityCode();
      await training.facilityCode.enterAtCSZ();
      await training.facilityCode.clickExcelIcon();
      await training.facilityCode.verifyNoDataPresentAckMsg();
      await training.module.switchToFacilityCode();
      await training.facilityCode.clickSearchLink();
      await training.facilityCode.verifyNoRecordFoundAckMsg();
      await training.module.switchToFacilityCode();
    });
  });

  test('verifyTrainingClassEntryWhenClickingConvertToUppercaseButton_63020', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63020', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.selectAtTrainingType();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToCourseDescriptionTab();
      await training.classEntry.classEntryCourseDescriptionTab.selectAllText();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToCourseDescriptionTab();
      await training.classEntry.classEntryCourseDescriptionTab.clickConvertToUppercaseIcon();
      await training.module.switchToClassEntry();
      await training.classEntry.verifyJurisAsPX();
    });
  });

  test('verifyTrainingClassEntryWhenClickingConvertToLowercaseButton_63020A', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63020A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.selectAtTrainingType();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToCourseDescriptionTab();
      await training.classEntry.classEntryCourseDescriptionTab.selectAllText();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToCourseDescriptionTab();
      await training.classEntry.classEntryCourseDescriptionTab.clickConvertToLowercaseIcon();
      await training.module.switchToClassEntry();
      await training.classEntry.verifyJurisAsPX();
    });
  });

  test('verifyCertificationSearchSaveManualEntry_63527', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63527', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.selectAtPFInGrid();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.selectAtEarnedViaInGrid();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.verifyGridCountIsNotZero();
    });
  });

  test('verifyGuestSearchFillAllDetailsAndClickPrintIcon_63010', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63010', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.enterAtSSNo();
      await training.guestSearch.enterAtAgency();
      await training.guestSearch.enterAtLastName();
      await training.guestSearch.enterAtFirstName();
      await training.guestSearch.clickPrintIcon();
      await training.module.switchToGuestSearch();
      await training.guestSearch.verifyAtSSNo();
      await training.guestSearch.verifyAtAgency();
      await training.guestSearch.verifyAtLastName();
      await training.guestSearch.verifyAtFirstName();
      await training.module.switchToGuestSearch();
    });
  });

  test('CRM174038ToVerifyTheCourseSearchClickOnSearchSelectAnExistingEntry_68371', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '68371', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.selectAtTrainingType();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.clickDeleteButtonWithConfirmPopup();
      await training.courseEntry.verify18DeletedSuccessfullyPopup();
      await training.module.switchToCourseSearch();
      await training.courseSearch.verifyGridCountAsZero();
      await training.module.switchToCourseSearch();
    });
  });

  test('CRM171594ToVerifyTheTrainingInstructorSearchInactiveNameIsNotGreyedOut_68621', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '68621', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickSearchLink();
      await training.instructorSearch.selectAtNameInGrid();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.clickInactiveCheckbox();
      await training.instructorEntry.verifyInactiveDateAsCurrentDate();
      await training.instructorEntry.saveScreen();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.close();
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickBackLink();
      await training.instructorSearch.clickIncludeInactiveCheckbox();
      await training.instructorSearch.clickSearchLink();
      await training.instructorSearch.verifyAtRowAsGreyOut();
    });
  });

  test('verifyTrainingEntryTabColorTurnsBlueAfterAddingData_62523', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '62523', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.selectAtTrainingCategory();
      await training.trainingEntry.selectAtTrainingType();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterFromTimeAsCurrentTime();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyTabColorAsBlue(1);
      await training.trainingEntry.verifyTabColorAsBlue(2);
      await training.trainingEntry.verifyTabColorAsBlue(3);
      await training.trainingEntry.verifyTabColorAsBlue(4);
      await training.trainingEntry.verifyTabColorAsBlue(5);
      await training.trainingEntry.verifyTabColorAsBlue(6);
      await training.module.switchToTrainingEntry();
    });
  });
});

test.describe('TrainingLegacyTestCases', () => {
  test('verifySearchFunctionalityInClassSearch_63369', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '63369', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.selectJurisAsBC();
      await training.classSearch.clickSearchLink();
      await training.classSearch.verifyAtJurisColumnAsBC();
      await training.classSearch.clickBackLink();
    });
  });

  test('verifyAddFunctionalityForGuestEntryScreen_62707', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '62707', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.clickAddNewLink();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterLastNameAndFirstName();
      await training.guestEntry.enterAtAddress();
      await training.guestEntry.enterAtCSZ();
      await training.guestEntry.enterAtCounty();
      await training.guestEntry.selectAtPhoneType1();
      await training.guestEntry.enterAtPhoneNumber1();
      await training.guestEntry.selectAtPhoneType2();
      await training.guestEntry.enterAtPhoneNumber2();
      await training.guestEntry.enterAtEmail();
      await training.guestEntry.enterAtNotes();
      await training.guestEntry.enterAtStudentSSNo();
      await training.guestEntry.enterAtAgencyORI();
      await training.guestEntry.verifyAgencyAddressIsAutoPopulated();
      await training.guestEntry.verifyAgencyPhoneNoIsAutoPopulated();
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
      await training.guestEntry.verifyAdditionalSuccessfullMessage();
    });
  });

  test('VerifyTheInstructorSearchScreenFunctionality_69634', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69634', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Instructor Search');
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.selectAtJuris();
      await training.instructorSearch.clickSearchLink();
      await training.instructorSearch.selectRandomGridRow();
      await training.module.switchToInstructorEntry();
      await training.instructorEntry.verifyAtJuris();
      await training.instructorEntry.close();
      await training.module.switchToInstructorSearch();
      await training.instructorSearch.clickBackLink();
      await training.instructorSearch.clickResetLink();
      await training.instructorSearch.enterAtEmployeePFNo();
      await training.instructorSearch.clickSearchLink();
      await training.instructorSearch.verifyAtPFGuestInGrid(1);
    });
  });
});

test.describe('DailyDefectCRMTraining', () => {
  test('verifyTrainingClassEntryRequestTabSaveAndCloseNotWorking_65795', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '65795', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.enterAtCourseTitle();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToRequestTab();
      await training.classEntry.requestTab.clickAcceptCheckBox();
      await training.module.switchToClassEntry();
      await training.classEntry.saveNdClose();
    });
  });

  test('verifyTrainingClassEntryWhileClickingOnEmailIcon_62471', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '62471', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.enterAtCourseTitle();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.classEntryStudentsTab.selectAtPFCodeCheckBoxInGrid();
      await training.classEntry.classEntryStudentsTab.clickAtEmailIconByNameInGrid();
    });
  });

  test('CRM196409RMSSearchedNamesAreNotShowingInSystematicOrder_69571', async ({ loginPage, loaderPage, training, popupPage, testData }) => {
    await withTestContext(testData, '69571', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoAdditionalPFTab();
      await training.trainingEntry.additionalPFTab.clickEmployeePFLookupIcon();
    });
  });

  test('Issue2TrainingModuleClassEntryTryingToAddTheInstructor_69208', async ({ loginPage, loaderPage, training, settings, testData }) => {
    await withTestContext(testData, '69208', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickSignUpButton();
      await training.module.switchToTrainingClassEntry();
      await training.classEntry.switchToRequestTab();
      await training.classEntry.requestTab.clickAcceptCheckBox();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtInstructorPF();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtCertificationComboBox();
      await training.trainingClassEntry.classEntryInstructorsTab.selectAtpositionComboBox();
      await training.trainingClassEntry.classEntryInstructorsTab.enterAtTrainingHours();
      await training.trainingClassEntry.classEntryInstructorsTab.clickAddButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickInstructorsTab();
      await training.trainingClassEntry.classEntryInstructorsTab.verifyAtCertificationInGrid();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.save();
    });
  });

  test('UnableToSearchForAndAccessTheCourseTitledWhenUseAnApostrophe_69978', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69978', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.enterAtCourseTitle();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.verifyAtTitleInGrid();
    });
  });

  test('CRM193510TrainingModuleIssues_69985', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69985', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickAddNewLink();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.selectAtTrainingCategoryComboBox();
      await training.trainingClassEntry.selectAtTrainingTypeComboBox();
      await training.trainingClassEntry.enterAtNoOfStudents();
      await training.trainingClassEntry.enterAtCourseNo();
      await training.trainingClassEntry.tabScheduleFromDate();
      await training.trainingClassEntry.enterAtScheduleToDate();
      await training.trainingClassEntry.EnterCourseHoursAs2();
      await training.trainingClassEntry.clickStudentTab();
      await training.trainingClassEntry.classEntryStudentsTab.enterAtEmployeePF();
      await training.trainingClassEntry.classEntryStudentsTab.clickAddButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.save();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.clickPublishToButton();
      await training.module.switchToMultiPFWindow();
      await training.multiPFWindow.clickAtPFByName();
      await training.multiPFWindow.clickPublishButton();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.save();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.verifyDoNotPublishCheckBoxIsDisabled();
      await training.trainingClassEntry.verifyPublishToTextInGreenColor();
    });
  });
});

test.describe('Q4S10EnhancementTraining2025', () => {
  test('TrainingSearchScreenDefaultSearchWithoutAnyEntries_69774', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69774', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickAddNewLink();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.selectAtTrainingCategory(0);
      await training.trainingEntry.selectTrainingType();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterCourse();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAdditionSuccessFullMessage();
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.verifyCurrentDateByNameInGrid();
    });
  });

  test('ORINbrColumnOfORICRMTeamCRM195949_77860', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '77860', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.clickAddNewLink();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterAtAgencyORI();
      await training.guestEntry.verifyAtAgencyORIDescription();
      await training.guestEntry.enterLastNameAndFirstName();
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
    });
  });
});

test.describe('Q4S10DefectTraining2025', () => {
  test('ToVerifyTheCourseSearchAfterSelectingTheExistingEntry_69859', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '69859', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.enterAtCourseSystemID();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.selectGridExpandRowByAt();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCEUsTab();
      await training.courseEntry.courseCEUsTab.selectAtCertification();
      await training.courseEntry.courseCEUsTab.enterAtCEUsEarned();
      await training.courseEntry.courseCEUsTab.enterAtHoursCredited();
      await training.courseEntry.courseCEUsTab.clickAdd();
      await training.courseEntry.courseCEUsTab.verifyGridRowByAtCertificate();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoCEUsTab();
      await training.courseEntry.courseCEUsTab.deleteAtRecordByCertification();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
    });
  });

  test('CRM200728TrainingTrainingEntryFillMandatoryClickSave_74401', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74401', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.selectAtTrainingCategory();
      await training.trainingEntry.selectAtTrainingType();
      await training.trainingEntry.enterAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterFromTimeAsCurrentTime();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoCEUsTab();
      await training.trainingEntry.cEUsTab.selectAtCertification(1);
      await training.trainingEntry.cEUsTab.enterAtEarnedCEUs();
      await training.trainingEntry.cEUsTab.enterAtCreditedHours();
      await training.trainingEntry.cEUsTab.clickAddButton();
      await training.trainingEntry.cEUsTab.verifyAtCertificationInGrid(1);
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
    });
  });

  test('CRM200726TrainingModuleTrainingSearchScreenExistingTrainingEntry_74408', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74408', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectRandomGridRow();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
    });
  });

  test('CRM68252UnableToSearchForAndAccessTheCourseTitled_74601', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74601', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.enterAtCourseTitle();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.verifyAtCategoryInGrid();
    });
  });

  test('CRM195168Issue2TrainingModuleClassEntry_74404', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74404', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectRandomGridRow();
      await training.module.switchToTrainingClassEntry();
    });
  });

  test('CourseEntryScreenAfterGetDeletedButStillRecordShowing_74778', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74778', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickAddNewLink();
      await training.module.switchToCourseEntry();
      await training.courseEntry.selectAtTrainingCategory();
      await training.courseEntry.selectAtTrainingType();
      await training.courseEntry.enterAtCourseTitle();
      await training.courseEntry.enterAtCourse();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveNdCloseScreen();
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickBackLink();
      await training.courseSearch.selectAtTrainingCategory();
      await training.courseSearch.clickSearchLink();
      await training.courseSearch.clickExpandRowArrow();
      await training.courseSearch.selectAtCourseIDInGrid();
      await training.module.switchToCourseEntry();
      await training.courseEntry.verifyAtTrainingCategory();
      await training.courseEntry.verifyAtTrainingType();
      await training.courseEntry.verifyAtCourseTitle();
      await training.courseEntry.verifyAtCourse();
      await training.courseEntry.clickDeleteButtonWithConfirmPopup();
      await training.module.switchToCourseSearch();
    });
  });

  test('CRM196032IssueInCourseEntryScreen_74585', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74585', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Course Search');
      await training.module.switchToCourseSearch();
      await training.courseSearch.clickAddNewLink();
      await training.module.switchToCourseEntry();
      await training.courseEntry.selectAtTrainingCategory();
      await training.courseEntry.selectAtTrainingType();
      await training.courseEntry.enterAtCourseTitle();
      await training.courseEntry.enterAtCourse();
      await training.courseEntry.navigatetoCourseDescriptionTab();
      await training.courseEntry.courseDescriptionTab.selectAtTemplate();
      await training.courseEntry.courseDescriptionTab.clickLoadButton();
      await training.courseEntry.courseDescriptionTab.verifyAtEnteredText();
      await training.module.switchToCourseEntry();
      await training.courseEntry.navigatetoNotesForStudentsTab();
      await training.courseEntry.notesForStudentsTab.selectAtTemplate();
      await training.courseEntry.notesForStudentsTab.clickLoadButton();
      await training.courseEntry.notesForStudentsTab.verifyAtEnteredText();
      await training.module.switchToCourseEntry();
      await training.courseEntry.saveScreen();
      await training.module.switchToCourseEntry();
    });
  });

  test('CRM152652TrainingClassStudentNotesDisappearAfterEnteringTrainingResults_72017', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '72017', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToStudentsTab();
      await training.classEntry.classEntryStudentsTab.clickAddMultipleEmployees();
      await training.module.switchToMultiPFWindow();
      await training.multiPFWindow.clickAtPFByName();
      await training.multiPFWindow.clickAddSelectedPFToList();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.classEntryStudentsTab.clickSelectAllCheckbox();
      await training.trainingClassEntry.classEntryStudentsTab.selectAtResult(1);
      await training.trainingClassEntry.classEntryStudentsTab.enterAtScore(1);
      await training.trainingClassEntry.classEntryStudentsTab.clickApplyButton();
    });
  });

  test('TrainingGuestSearchclickAddNewEnterMaxCharacters_77529', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '77529', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Guest Search');
      await training.module.switchToGuestSearch();
      await training.guestSearch.clickAddNewLink();
      await training.module.switchToGuestEntry();
      await training.guestEntry.enterLastNameAndFirstName();
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
      await training.guestEntry.verifyAtLastName(1);
      await training.guestEntry.verifyAtFirstName(1);
      await training.guestEntry.saveScreen();
      await training.module.switchToGuestEntry();
    });
  });
});

test.describe('TrainingEntryFunctionalityLegacyTestCases', () => {
  test('ToVerifyTheTrainingEntryScreenFunctionlity_72068', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '72068', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Entry');
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAtJuris();
      await training.trainingEntry.enterAtAgency();
      await training.trainingEntry.verifyAtAgency();
      await training.trainingEntry.clickResetIcon();
      await training.trainingEntry.enterAtEmployeePf();
      await training.trainingEntry.verifyAtEmployeePF();
      await training.trainingEntry.verifyAtStatus(1);
      await training.trainingEntry.selectAtTrainingCategory();
      await training.trainingEntry.verifyAtTrainingCategory();
      await training.trainingEntry.selectAtTrainingType();
      await training.trainingEntry.verifyAtTrainingType();
      await training.trainingEntry.enterAtLocalCourse();
      await training.trainingEntry.verifyAtLocalCourse();
      await training.trainingEntry.verifyAtCourseTitle();
      await training.trainingEntry.tabFromDate();
      await training.trainingEntry.enterToDateAsFutureDate();
      await training.trainingEntry.enterAtCourseHours();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
    });
  });

  test('ToVerifyTheTrainingEntryTrainingDetailTabFunctionlity_72068A', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '72068A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.enterAtEmployeePFNo();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectAtTrainingCategoryInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoTrainingDetailTab();
      await training.trainingEntry.trainingDetailTab.selectAtMethodOfInstruction();
      await training.trainingEntry.trainingDetailTab.enterAtTrainingFacility();
      await training.trainingEntry.trainingDetailTab.enterAtCost();
      await training.trainingEntry.trainingDetailTab.enterAtAddress();
      await training.trainingEntry.trainingDetailTab.enterAtMealsAndOtherCosts();
      await training.trainingEntry.trainingDetailTab.selectAtMethodOfPayment();
      await training.trainingEntry.trainingDetailTab.selectAtCostCenter();
      await training.trainingEntry.trainingDetailTab.selectAtResult();
      await training.trainingEntry.trainingDetailTab.enterAtScore();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToTrainingEntry();
    });
  });

  test('ToVerifyTheTrainingEntryAdditionalPFTabFunctionlity_72068B', async ({ loginPage, loaderPage, training, homePage, testData }) => {
    await withTestContext(testData, '72068B', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.enterAtEmployeePFNo();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectAtTrainingCategoryInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoAdditionalPFTab();
      await training.trainingEntry.additionalPFTab.enterAtPF();
      await training.trainingEntry.additionalPFTab.clickAddButton();
      await training.trainingEntry.additionalPFTab.clickAddMultipleEmployeesButton();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToTrainingEntry();
    });
  });

  test('ToVerifyTheTrainingEntryIntructorsTabFunctionlity_72068C', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '72068C', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.enterAtEmployeePFNo();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectAtTrainingCategoryInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoInstructorsTab();
      await training.trainingEntry.instructorsTab.enterAtInstructor(1);
      await training.trainingEntry.instructorsTab.selectAtCertification();
      await training.trainingEntry.instructorsTab.selectAtPosition();
      await training.trainingEntry.instructorsTab.enterAtTrainingHours();
      await training.trainingEntry.instructorsTab.clickAddButton();
      await training.trainingEntry.instructorsTab.clickClearButton();
      await training.trainingEntry.instructorsTab.verifyTrainingDateFromIsEmpty();
      await training.trainingEntry.instructorsTab.verifyTrainingDateToIsEmpty();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToTrainingEntry();
    });
  });

  test('ToVerifyTheTrainingEntryCEUsTabFunctionlity_72068D', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '72068D', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.enterAtEmployeePFNo();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectAtTrainingCategoryInGrid();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.navigatetoCEUsTab();
      await training.trainingEntry.cEUsTab.selectAtCertification(1);
      await training.trainingEntry.cEUsTab.enterAtEarnedCEUs();
      await training.trainingEntry.cEUsTab.enterAtCreditedHours();
      await training.trainingEntry.cEUsTab.clickAddButton();
      await training.trainingEntry.cEUsTab.verifyAtCertificationInGrid(1);
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.saveScreen();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyUpdateSuccessFullMessage();
      await training.module.switchToTrainingEntry();
    });
  });
});

test.describe('TrainingSearchFunctionalityLegacyTestCases', () => {
  test('ToVerifyTheSearchFunctionalityForTrainingSearchScreen_74420', async ({ loginPage, loaderPage, training, personnel, testData }) => {
    await withTestContext(testData, '74420', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.selectAtJuris();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.verifyAtJurisInGrid(1);
      await training.trainingSearch.clickBackLink();
      await training.trainingSearch.clickResetLink();
      await training.trainingSearch.enterAtEmployeePFNo();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectRandomGridRow();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAtEmployeePF();
      await training.trainingEntry.saveAndCloseScreen();
      await training.module.switchToTrainingSearch();
    });
  });

  test('ToVerifyTheSearchFunctionalityForTrainingSearchScreen_74420A', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '74420A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Training Search');
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.selectAtTrainingCategory();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectRandomGridRow();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAtTrainingCategory();
      await training.trainingEntry.saveAndCloseScreen();
      await training.module.switchToTrainingSearch();
      await training.trainingSearch.clickBackLink();
      await training.trainingSearch.clickResetLink();
      await training.trainingSearch.selectAtTrainingType();
      await training.trainingSearch.clickSearchLink();
      await training.trainingSearch.selectRandomGridRow();
      await training.module.switchToTrainingEntry();
      await training.trainingEntry.verifyAtTrainingType();
      await training.trainingEntry.saveAndCloseScreen();
      await training.module.switchToTrainingSearch();
    });
  });
});

test.describe('CRM152652Training', () => {
  test('CRM152652TrainingClassStudentNotesDisappear_44931', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '44931', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Class Search');
      await training.module.switchToClassSearch();
      await training.classSearch.enterAtCourseTitle();
      await training.classSearch.clickSearchLink();
      await training.classSearch.selectAtClassNoInGrid();
      await training.module.switchToClassEntry();
      await training.classEntry.switchToStudentsTab();
      await training.classEntry.classEntryStudentsTab.clickAddMultipleEmployees();
      await training.module.switchToMultiPFWindow();
      await training.multiPFWindow.clickAtCheckedPFByName();
      await training.multiPFWindow.clickAddSelectedPFToList();
      await training.module.switchToTrainingClassEntry();
      await training.trainingClassEntry.classEntryStudentsTab.clickSelectAllCheckbox();
      await training.trainingClassEntry.classEntryStudentsTab.selectResultAsPass();
      await training.trainingClassEntry.classEntryStudentsTab.enterAtScore();
      await training.trainingClassEntry.classEntryStudentsTab.clickApplyButton();
    });
  });

  test('IssueInCertificationManualEntryScreenCRM201080_77645', async ({ loginPage, loaderPage, training, testData }) => {
    await withTestContext(testData, '77645', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Training');
      await loaderPage.navigateToScreen('Certification Search');
      await training.module.switchToCertificationSearch();
      await training.certificationSearch.clickSearch();
      await training.certificationSearch.selectAtPFInGrid();
      await training.module.switchToCertificationEntry();
      await training.certificationEntry.clickAddAManualEntry();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyMainTabIsNotEnabled();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.verifyMainTabIsEnabled();
      await training.certificationManualEntry.EnterAtEarnedCEU();
      await training.certificationManualEntry.EnterAtEarnedHours();
      await training.certificationManualEntry.clicksave();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.InternalSave();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.VerifyUpdateSuccessfulAcknowledgeMessage();
      await training.module.switchToCertificationManualEntry();
      await training.certificationManualEntry.save();
      await training.module.switchToCertificationManualEntry();
    });
  });
});
