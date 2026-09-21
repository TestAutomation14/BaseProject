  test.describe('DefectTestCases1', () => {

    test('DefectTestCases1_9153', async ({ personnel, loginPage, loaderPage, testData, qA, admission }) => {
      await withTestContext(testData, '9153', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtLastName();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtFormNameInGrid();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.verifyAtFirstName();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab();
        await qA.questionnarie.ClickRefreshButton();
        await qA.questionnarie.clickEmailIconByFormName('Canditate Form');
        await qA.sendEmailPopUp.enterAtTo();
        await qA.sendEmailPopUp.enterAtMessage();
        await qA.sendEmailPopUp.clickSend();
        await qA.sendEmailPopUp.verifyEmailHasBeenSentAlertPopup();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.close();

        await loaderPage.navigateToModule('Admission / Booking');
        await loaderPage.navigateToScreen('Inmate Search');
        await admission.module.switchToInmateSearch();
        await admission.inmateSearchScreen.Search();
        await admission.inmateSearchScreen.clickAtCMSBookingNo();
        await admission.module.switchToAdmissionEntry();
        await admission.admissionEntry.navigateToQAFormsTab();
        await qA.questionnarie.selectAtForm();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtLastName();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();
        await admission.module.switchToAdmissionEntry();
        await admission.admissionEntry.navigateToQAFormsTab();
        await qA.questionnarie.ClickRefreshButton();
        await qA.questionnarie.clickEmailIconByFormName('Form 441');
        await qA.sendEmailPopUp.enterAtTo();
        await qA.sendEmailPopUp.enterAtMessage();
        await qA.sendEmailPopUp.clickSend();
        await qA.sendEmailPopUp.verifyEmailHasBeenSentAlertPopup();
        await admission.module.switchToAdmissionEntry();
      });
    });

    test('DefectTestCases1_13190', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '13190', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRandomRow();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickCustomizeIcon();
        await personnel.personnelEntry.clickManageCustomFields();
        await settings.module.switchToCustomFields();
        await settings.customFieldsScreen.enterAtCustomTable();
        await settings.customFieldsScreen.enterAtTabName();
        await settings.customFieldsScreen.saveScreen();
        // objectIdentification.manualIdentify.verifyUpdateSuccessful();
        await settings.customFieldsScreen.clickAddNewFieldButton();
        await settings.customFieldsScreen.enterDisplayName();
        await settings.customFieldsScreen.enterColumnName();
        await settings.customFieldsScreen.enterDescription();
        await settings.customFieldsScreen.selectAtDataType();
        await settings.customFieldsScreen.enterAtMaximumLength();
        await settings.customFieldsScreen.enterGroupName();
        await settings.customFieldsScreen.enterLineNumberWithinGroup();
        await settings.customFieldsScreen.clickTwoColumnRadioButton();
        await settings.customFieldsScreen.clickAddButton();
        await settings.module.switchToCustomFields();
        await settings.customFieldsScreen.clickRepublishButton();
      });
    });

    test('DefectTestCases1_9150', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '9150', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Supervisor Personnel');
        await personnel.module.switchToSupervisorSearch();
        await personnel.supervisorSearch.clickSearch();
        await personnel.supervisorSearch.verifyColumnDisplayIconIsNotDisplayed();
        await personnel.module.switchToSupervisorSearch();
      });
    });

  });

  test.describe('PersonnelFunctional1', () => {

    test('PersonnelFunctional1_10224', async ({ personnel, loginPage, loaderPage, testData, training }) => {
      await withTestContext(testData, '10224', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTrainingTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.clickEnterTrainingButton();
        await training.module.switchToTrainingEntry();
        await training.trainingEntry.selectAtTrainingCategory();
        await training.trainingEntry.enterCourseTitle();
        await training.trainingEntry.selectAtTrainingType();
        await training.trainingEntry.tabFromDate();
        await training.trainingEntry.enterFromTimeAsCurrentTime();
        await training.trainingEntry.enterToDateAsCurrentDate();
        await training.trainingEntry.enterToTimeAs3HoursFromCurrentTime();
        await training.trainingEntry.verifyCourseHours('3:0');
        await training.trainingEntry.saveScreen();
        await training.module.switchToTrainingEntry();
        await training.trainingEntry.verifyAdditionSuccessFullMessage();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.save();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTrainingTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.verifyAtTrainingTypeInGrid();
      });
    });

    test('PersonnelFunctional1_11007', async ({ personnel, loginPage, loaderPage, testData, home, activity }) => {
      await withTestContext(testData, '11007', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowInGrid(0);
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickPrintIcon();
        await home.module.switchToSelectReport();
        await home.selectReport.selectIDCardCheckBoxBasedOnType();
        await home.selectReport.clickRecurrenceReportButton();
        await home.module.switchToPrintScheduleScreen();
        await activity.activityEntry.recurrencePopUp.clickMonthlyRadioButton();
        await activity.activityEntry.recurrencePopUp.enterEveryDayOf();
        await activity.activityEntry.recurrencePopUp.enterEveryDayOfMonth();
        await activity.activityEntry.recurrencePopUp.clickSaveButton();
        await activity.activityEntry.recurrencePopUp.verifyStartDateMandatoryAcknMessage();
        await home.module.switchToPrintScheduleScreen();
        await home.recurrenceSchedule.enterAtStartDateAndTime();
        await home.recurrenceSchedule.enterAtEndDateAndTime();
        await home.recurrenceSchedule.clicksave();
        await home.module.switchToPrintScheduleScreen();
        // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      });
    });

    test('PersonnelFunctional1_10878', async ({ personnel, loginPage, loaderPage, testData, home }) => {
      await withTestContext(testData, '10878', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickPrintButton();
        await home.module.switchToSelectReport();
        await home.selectReport.VerifySelectReportScreenOpened();
        await home.selectReport.verifyMultipleSelectReportScreenIsNotOpened();
        // home.selectReport.minimizeTheScreen();
      });
    });

    test('PersonnelFunctional1_10944', async ({ personnel, loginPage, loaderPage, testData, home }) => {
      await withTestContext(testData, '10944', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Meaningful Review Search');
        await personnel.module.switchToMeaningfulReviewSearch();
        await personnel.meaningfulReviewSearch.clickAddNewButton();
        await personnel.module.switchToMeaningfulReviewEntry();
        await personnel.meaningfulReviewEntry.EnterAtPF();
        await personnel.meaningfulReviewEntry.EnterAtCaseNo();
        await personnel.meaningfulReviewEntry.saveScreen();
        await personnel.module.switchToMeaningfulReviewEntry();
        await personnel.meaningfulReviewEntry.clickMainTab();
        await personnel.meaningfulReviewEntry.mainTab.EnterComments();
        await personnel.module.switchToMeaningfulReviewEntry();
        await personnel.meaningfulReviewEntry.saveScreen();
        await personnel.meaningfulReviewEntry.verifyUpdateSuccessfulStatusMessage();
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickPrintButton();
        await home.selectReport.verifyMultipleSelectReportScreenIsNotOpened();
      });
    });

    test('PersonnelFunctional1_13855', async ({ personnel, loginPage, loaderPage, testData, home, employmentApplicants }) => {
      await withTestContext(testData, '13855', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Work History Search');
        await personnel.module.switchToWorkHistorySearch();
        await personnel.workHistorySearch.enterAtReference();
        await personnel.workHistorySearch.verifyAtReferenceField();
        await personnel.workHistorySearch.enterAtReference1();
        await personnel.workHistorySearch.verifyAtReferenceField1();
        await personnel.workHistorySearch.clickPrintIcon();
        await home.module.switchToSelectReport();
        await home.selectReport.CloseTheScreen();
        await personnel.module.switchToWorkHistorySearch();
        // 2nd
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtBadge();
        await personnel.personnelSearch.verifyAtBadgefield();
        // 3rd
        await loaderPage.navigateToScreen('Supervisor Personnel');
        await personnel.module.switchToSupervisorSearch();
        await personnel.supervisorSearch.enterAtBadge();
        await personnel.supervisorSearch.verifyAtBadgefield();
        // 4th
        await loaderPage.navigateToModule('Employment Applicant');
        await loaderPage.navigateToScreen('Job Listings');
        await employmentApplicants.module.switchToJobListings();
        await employmentApplicants.jobListings.clickAddNewButton();
        await employmentApplicants.module.switchToJobEntry();
        await employmentApplicants.jobEntry.enterAtJobName();
        await employmentApplicants.jobEntry.enterAtJOBNoEdit();
        await employmentApplicants.jobEntry.saveScreen();
        await employmentApplicants.jobEntry.verifyRequiredEntriesAreMissingAcknowledgeMessage();
        await employmentApplicants.module.switchToJobEntry();
        await employmentApplicants.jobEntry.enterAtJOBNoEdit1();
        await employmentApplicants.jobEntry.saveScreen();
        await employmentApplicants.module.switchToJobEntry();
        await employmentApplicants.jobEntry.verifyAdditionSuccessfulBottomMessage();
        await employmentApplicants.module.switchToJobEntry();
      });
    });

    test('PersonnelFunctional1_13880', async ({ personnel, loginPage, loaderPage, testData, qA }) => {
      await withTestContext(testData, '13880', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRandomRow();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab(); // Before add the form in the grid
        await qA.questionnarie.selectAtForm();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.EnterAtName();
        await qA.questionDataEntry.clickSaveInQAForm();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab1(); // After added the form in the grid
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtFormNameInGrid();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtFirstName();
        await qA.questionDataEntry.clickSaveInQAForm();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab1();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtFormNameInGrid();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtLastName();
        await qA.questionDataEntry.clickSaveInQAForm();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab1();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtFormNameInGrid();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtFirstName();
        await qA.questionDataEntry.clickSaveInQAForm();
        await qA.questionDataEntry.clickReportSaveNExitWithConfirm();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab1();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtFormNameInGrid();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.enterAtLastName();
        await qA.questionDataEntry.clickSaveInQAForm();
      });
    });

  });

  test.describe('SysParameter231', () => {

    test('SysParameter231_10245', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '10245', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter231AsDataBase();
        await settings.module.switchToSystemParamter();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowInGrid(0);
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // objectIdentification.attachmentsTab.verifyFileStorageLocationAsDatabase();
        await personnel.personnelEntry.close();

        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter231AsAzureCloud();
        await settings.module.switchToSystemParamter();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.selectRowInGrid(0);
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // objectIdentification.attachmentsTab.verifyFileStorageLocationAsAzureCloud();
      });
    });

  });

  test.describe('SysParameter4322', () => {

    test('SysParameter4322_11717', async ({ personnel, loginPage, loaderPage, testData, settings, home }) => {
      await withTestContext(testData, '11717', async () => {
        await loginPage.loginScreen.logon();

        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsFalse();

        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickPFInfoIcon();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword();
        await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.save();
        await personnel.personnelEntry.verifyUpdateSuccessfulMessage();
        await personnel.personnelEntry.saveNClose();

        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsTrue();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.logout();

        await loginPage.loginScreen.logonUsingTestContext();
        await home.module.switchToMyHomeScreen();
        await home.myHome.clickMyInfoTab();
        await settings.module.switchToPhoenixAuthenticatorWindow();
        await settings.phoenixAuthenticatorWindow.enterAtPassword();
        await settings.phoenixAuthenticatorWindow.clickAcceptButton();
        await home.module.switchToMyHomeScreen();
        await home.myHome.SwitchToMyInfoTab();
        await home.myHome.myInfoTab.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword2();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword2();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickInternalSave();
        await personnel.personnelEntry.verifyUpdateSuccessfulStatusMessage();
      });
    });

  });

  test.describe('PersonnelChecklistSystemParameter', () => {

    test('PersonnelChecklistSystemParameter_13874', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '13874', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsFalse();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Entry');
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode();
        await personnel.personnelEntry.enterAtLastName();
        await personnel.personnelEntry.enterAtFirstName();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword();
        await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton();
        await personnel.personnelEntry.saveNClose();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.logout();
        await loginPage.loginScreen.logonUsingTestContext();
        await loaderPage.logout();
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('Access Log');
        await settings.module.switchToAcessLog();
        await settings.accessLog.tabTheFromDateAndTime();
        await settings.accessLog.tabTheToDateAndTime();
        await settings.accessLog.selectAccessLogAsLogInOut();
        await settings.accessLog.clickSearch();
        await settings.accessLog.verifyAtPFCode(2);
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsTrue();
        await settings.module.switchToSystemParamter();
      });
    });

  });

  test.describe('PersonnelDefects', () => {

    test('PersonnelDefects_14912', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '14912', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsTrue();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Entry');
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode();
        await personnel.personnelEntry.enterAtLastName();
        await personnel.personnelEntry.enterAtFirstName();
        await personnel.personnelEntry.clickSaveButton();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickSaveButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickResetPassword();
        const TrimmedPassword = await personnel.personnelEntry.personnelEntrySecurityTab.GetTemporaryPassword();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.close();
        await loaderPage.logout();
        await loginPage.loginScreen.LogOnForNewPFByCreateNewPassword(TrimmedPassword);
      });
    });

    test('PersonnelDefects_15915', async ({ personnel, loginPage, loaderPage, testData, settings, qA, home }) => {
      await withTestContext(testData, '15915', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('QA Forms');
        await settings.module.switchToQAForms();
        await settings.qaForms.clickAddNew();
        await qA.SwitchToQAFormEntry();
        await qA.qAFormEntry.EnterAtFormName();
        await qA.qAFormEntry.EnterAtVersion();
        await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate();
        await qA.qAFormEntry.clickPhoenixFormRadioButton();
        await qA.qAFormEntry.ClickSaveNCloseButton();
        await settings.module.switchToQAForms();
        await settings.qaForms.enterAtFormNameEdit();
        await settings.qaForms.clickOnSearch();
        await settings.qaForms.selectCheckBoxOfTheRowByFormName();
        await settings.qaForms.clickManageSections();
        await qA.SwitchToQAFormSectionEntry();
        await qA.qAFormSection.EnterAtSectionName();
        await qA.qAFormSection.EnterAtSort();
        await qA.qAFormSection.ClickAddButton();
        await qA.qAFormSection.EnterAtSectionName1();
        await qA.qAFormSection.EnterAtSort1();
        await qA.qAFormSection.ClickAddButton();
        await qA.qAFormSection.ClickSaveNCloseButton();
        await settings.module.switchToQAForms();
        await settings.qaForms.selectCheckBoxOfTheRowByFormName();
        await settings.qaForms.clickManageQuestions();
        await qA.SwitchToManageQuestionsEntry();
        await qA.mManageQuestions.ClickAddNewQuestionButton();
        await qA.SwitchToQuestionMasterEntry();
        await qA.questionMaster.SelectAtSection();
        await qA.questionMaster.EnterAtQuestion();
        await qA.questionMaster.SelectAtAnswerType();
        await qA.questionMaster.ClickSaveNCloseButton();
        await qA.SwitchToManageQuestionsEntry();
        await qA.mManageQuestions.ClickAddNewQuestionButton();
        await qA.SwitchToQuestionMasterEntry();
        await qA.questionMaster.SelectAtSection(1);
        await qA.questionMaster.EnterAtQuestion1();
        await qA.questionMaster.SelectAtAnswerType1();
        await qA.questionMaster.ClickSaveNCloseButton();
        await qA.SwitchToManageQuestionsEntry();
        await qA.mManageQuestions.ClickSaveNCloseButton();
        await settings.module.switchToQAForms();
        await settings.qaForms.clickManageRepository();
        await qA.switchToQuestionnaireRepository();
        await qA.questionnarieRepository.EnterAtRepositoryID();
        await qA.questionnarieRepository.clickAddButton();
        await qA.questionnarieRepository.clickSharedCheckBox();
        await qA.questionnarieRepository.saveNClose();
        await settings.module.switchToQAForms();
        await settings.qaForms.clickOnGridrow();
        await qA.SwitchToQAFormEntry();
        await qA.qAFormEntry.SelectReadyForUseCheckBox();
        await qA.qAFormEntry.ClickSaveNCloseButton();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Entry');
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode();
        await personnel.personnelEntry.enterAtLastName();
        await personnel.personnelEntry.enterAtFirstName();
        await personnel.personnelEntry.save();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.NavigateToQAFormsTab();
        await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.clickSignatureField();
        await home.module.switchToSignatureScreen();
        await home.signatureScreen.clickTypeButton();
        await home.signatureScreen.enterAtName();
        await home.signatureScreen.enterAtSignTextArea('Chandru');
        await home.signatureScreen.clickApplyButton();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.verifySignatureFieldIsNotNull();
        await qA.questionDataEntry.enterAtForm2();
        await qA.SwitchToQuestionDataEntry();
        await qA.questionDataEntry.TabOutPF();
        await qA.questionDataEntry.clickSave();
        await qA.questionDataEntry.verifyForm2value();
      });
    });

    test('PersonnelDefects_16352', async ({ personnel, loginPage, loaderPage, testData, home }) => {
      await withTestContext(testData, '16352', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickPrintIcon();
        await home.module.switchToSelectReport();
        await home.selectReport.selectIDCardCheckBoxBasedOnReport();
        await home.selectReport.clickRecurrenceReportButton();
        await home.module.switchToPrintScheduleScreen();
        await home.recurrenceSchedule.enterAtStartDateAndTime();
        await home.recurrenceSchedule.enterAtEndDateAndTime();
        await home.recurrenceSchedule.selectAtYearlyRadioButton();
        await home.recurrenceSchedule.enterAtEveryDay();
        await home.recurrenceSchedule.selectAtMonth();
        await home.recurrenceSchedule.clicksave();
        await home.module.switchToPrintScheduleScreen();
        await home.recurrenceSchedule.verifyAdditionSuccessfulBottomMessage();
        await home.module.switchToPrintScheduleScreen();
      });
    });

    test('PersonnelDefects_16342', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '16342', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyAtPFCode();
        await personnel.personnelEntry.clickAssignmentTab();
        await personnel.personnelEntry.personnelEntryAssignmentTab.tabOutEffectiveDateTime();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyNextReviewDate();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyToolTipOnEffectiveDateLabel();
      });
    });

    test('PersonnelDefects_16367', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '16367', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Work History Search');
        await personnel.module.switchToWorkHistorySearch();
        await personnel.workHistorySearch.clickSearchButton();
        await personnel.workHistorySearch.selectAtPFNameInGrid();
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.clickApprovalTab();
        await personnel.workHistoryEntry.approvalTab.selectAtAction();
        await personnel.workHistoryEntry.approvalTab.tabDateAndTime();
        await personnel.workHistoryEntry.approvalTab.EnterAtSupervisor();
        await personnel.workHistoryEntry.approvalTab.clickSupervisorInfoIcon();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyAtPFCode();
        // boolean windowExist = objectIdentification.windowHandle.windowExist('Acknowledge');
        // personnel.personnelEntry.verifyValidationPopUpIsArised(windowExist);
        await personnel.personnelEntry.save();
        await personnel.personnelEntry.verifyUpdateSuccessfulMessage();
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.clickApprovalTab();
        await personnel.workHistoryEntry.approvalTab.SaveScreen();
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.saveScreen();
        await personnel.workHistoryEntry.verifUpdateSuccessfulMessage();
        await personnel.workHistoryEntry.verifyAtStatus();
      });
    });

    test('PersonnelDefects_16366', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '16366', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRandomRow();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.close();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.RandomdoubleClickOnAllColumn();
        await personnel.module.switchToPersonnelSearch();
      });
    });

    test('PersonnelDefects_16627', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '16627', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await loaderPage.navigateToScreen('Med History Search');
        await personnel.module.switchToMedHistorySearch();
        await personnel.medHistorySearch.clickSearchButton();
        await personnel.medHistorySearch.selectRandomRowInGrid();
        await personnel.module.switchToMedicalHistoryEntry();
        await personnel.medicalHistoryEntry.clearPFNo();
        await personnel.medicalHistoryEntry.tabOutPFNo();
        await personnel.medicalHistoryEntry.verifyPFInfoIconIsNotDisplayed();
        await personnel.medicalHistoryEntry.closeTheScreen();
        await personnel.module.switchToMedHistorySearch();
        await personnel.medHistorySearch.clickAddNew();
        await personnel.module.switchToMedicalHistoryEntry();
        await personnel.medicalHistoryEntry.tabOutEnteredByField();
        await personnel.medicalHistoryEntry.verifyEnteredByInfoIconIsNotDisplayed();
      });
    });

    test('PersonnelDefects_18756', async ({ personnel, loginPage, loaderPage, testData, admission }) => {
      await withTestContext(testData, '18756', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Admission');
        await loaderPage.navigateToScreen('Inmate Search');
        await admission.module.switchToInmateSearch();
        // List<String> OldWindowHandles = objectIdentification.windowHandle.getEnabledScreenTabs();
        await admission.inmateSearchScreen.EnterAtSPNNO();
        await admission.inmateSearchScreen.Search();
        await admission.inmateSearchScreen.SelectAtCMSBooking();
        await admission.module.switchToAdmissionEntry();
        await admission.admissionEntry.verifyInmateBookingStatusAsInprogress();
        await admission.admissionEntry.SaveScreen();
        await admission.admissionEntry.verifyUpdateSucessfullMessage();
        await admission.admissionEntry.CloseAdmissionEntry();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtName();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyAtPFCode();
        await personnel.personnelEntry.save();
        await personnel.personnelEntry.verifyUpdateSuccessfulMessage();
        await personnel.personnelEntry.close();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.CloseScreen('Inmate Search');
        await loaderPage.CloseScreen('Personnel Search');
        // objectIdentification.windowHandle.verifyClosedScreenTabsAreNotOpenedAgainInList(OldWindowHandles);
        // objectIdentification.windowHandle.verifyClosedScreenTabsAreNotOpenedAgain('Personnel Search');
        // objectIdentification.windowHandle.verifyClosedScreenTabsAreNotOpenedAgain('Inmate Search');
      });
    });

  });
