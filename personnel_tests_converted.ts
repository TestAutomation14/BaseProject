  test.describe('SysParameter6600', () => {

    test('SysParameter6600_231336', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '231336', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter6600AsFalse();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickAddNewButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode();
//		personnel.personnelEntry.enterAtLastName();							// commented by Abi
//		personnel.personnelEntry.enterAtFirstName();
//		personnel.personnelEntry.clickSaveButton();
        await personnel.personnelEntry.verifyPFCodeExistAcknowledgeMessage();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.close();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter6600AsTrue();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickAddNewButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode();
        await personnel.personnelEntry.verifyConfirmationReusePFCodeMessage(); // Make changes in the method by Abi //
																			// popup.confirm.yes();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtLastName(); // Added by Abi
        await personnel.personnelEntry.enterAtFirstName();
        await personnel.personnelEntry.clickSaveButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyBottomStatusMessage(); // Added by abi
        await personnel.module.switchToPersonnelEntry();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter6600AsFalse();
        await settings.module.switchToSystemParamter();
      });
    });

  });

  test.describe('2020DefectTestCases', () => {

    test('2020DefectTestCases_232493', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, '232493', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickAssignmentTab();
        await personnel.personnelEntry.personnelEntryAssignmentTab.enterAtSupervisor();
        await personnel.personnelEntry.verifyInactiveCodeAcknowledgeMessage(); // Added by Abi
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.personnelEntryAssignmentTab.clickSupervisorLookUpIcon();
        await popupPage.switchToCodedSearchII();
        await popupPage.kPICodedLookup.clickIncludeInactiveCheckBox();
        await popupPage.kPICodedLookup.enterAtCode();
        await popupPage.kPICodedLookup.clickSearchIcon();
        await popupPage.kPICodedLookup.selectCodeValueInGrid();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyInactiveCodeAcknowledgeMessage();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyAtSupervisorwithInActive(); // Added a method
        await personnel.personnelEntry.clickRefreshIcon();
        await personnel.personnelEntry.personnelEntryAssignmentTab.enterAtSupervisor1();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyAtSupervisor1(); // Added by Abi
      });
    });

    test('2020DefectTestCases_248769', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '248769', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.verifyServiceYearsDisabled();
        await personnel.personnelEntry.personnelEntryMainTab.verifyAdditionalYearsEnabled();
        await personnel.personnelEntry.personnelEntryMainTab.enterHiredDateAsPreviousYear();
        // personnel.personnelEntry.personnelEntryMainTab.enterAtHiredDate();
        await personnel.personnelEntry.personnelEntryMainTab.enterAdditionalYearsAs4();
        await personnel.personnelEntry.personnelEntryMainTab.enterAdditionalMonthsAs3();
        await personnel.personnelEntry.personnelEntryMainTab.enterAdditionalDateAs25();
        await personnel.personnelEntry.save();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.personnelEntryMainTab.veifySearviceYearAs2();
      });
    });

    test('2020DefectTestCases_258919', async ({ personnel, loginPage, loaderPage, testData, activity }) => {
      await withTestContext(testData, '258919', async () => {
        await loginPage.loginScreen.logonUsingTestContext();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtLoginUserName();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtName();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToPreferenceTab();
        await personnel.personnelEntry.personnelEntryPreferencesTab.setDefaultQuickActivityModeForPoliceRMS();
        await personnel.personnelEntry.saveNClose();

        await activity.module.pressF4keyToOpenQuickActivityEntry();
        await activity.module.switchToActivityQuickEntry();
        await activity.activityQuickEntry.clickCategoryGroupOperations();
        await activity.activityQuickEntry.clickCategoryPatrol();
        await activity.activityQuickEntry.clickActivityLogTypeParkPatrol();
        await activity.activityQuickEntry.enterAtUnit();
        await activity.module.switchToActivityQuickEntry();
        await activity.activityQuickEntry.enterAtLocation();
        await activity.activityQuickEntry.verifyAddressValidated();
        await activity.activityQuickEntry.enterAtNotes();
        await activity.activityQuickEntry.tabAtStartDateAndTime();
        await activity.activityQuickEntry.tabAtEndDateAndTime();
        await activity.activityQuickEntry.save();

        await activity.module.switchToActivityQuickEntry();
        await activity.activityQuickEntry.clickViewTodaysLog();
        await activity.module.SwitchToQuickActivityLog();
        await activity.activityQuickEntry.verifyAtActivityLocationFromQuickLog(0);
      });
    });

    test('2020DefectTestCases_260160', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '260160', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.clickApprovalParameterButton();
        await settings.module.switchToApprovalParameterWindowFor2024R2();
        await settings.approvalParameter.selectAtModuleInGrid(0);
        await settings.module.switchToApprovalParameterWindow();

        await settings.approvalParameter.setEnableApprovalProcessAsTrue();
        await settings.approvalParameter.saveScreen();
        await settings.approvalParameter.closeScreen();
        await settings.module.switchToApprovalParameterWindowFor2024R2();
        await settings.approvalParameter.selectAtModuleInGrid(1);
        await settings.module.switchToApprovalParameterWindow();
        await settings.approvalParameter.setEnableApprovalProcessAsTrue();
        await settings.approvalParameter.saveScreen();
        await settings.module.switchToApprovalParameterWindow();
        await settings.approvalParameter.closeScreen();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickPFInfoIcon();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToWorkRecordTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.selectRowByIndex(0);
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.verifyStatusAsApproved();
        // personnel.workHistoryEntry.verifyDeleteIconIsDisabled();
        await personnel.workHistoryEntry.clickDeleteIcon();
        await personnel.workHistoryEntry.verifyConfirmationDeleteMessageAsNo();
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.clickDeleteIcon();
        await personnel.workHistoryEntry.verifyConfirmationDeleteMessage();// Changed
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToWorkRecordTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.verifyRowCountAsZero();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickInjuryReportTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.selectRowByIndex(0);
        await personnel.module.switchToInjuryReportEntry();
        await personnel.injuryReportEntry.verifyStatusAsApproved();/////////
        // personnel.injuryReportEntry.verifyDeleteIconIsDisabled();
        await personnel.injuryReportEntry.clickDeleteIcon();
        await personnel.injuryReportEntry.verifyConfirmationDeleteMessageAsNo();
        await personnel.module.switchToInjuryReportEntry();
        await personnel.injuryReportEntry.clickDeleteIcon();
        await personnel.injuryReportEntry.verifyConfirmationDeleteMessageAsYes();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToWorkRecordTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickInjuryReportTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.verifyRowCountAsZero();
      });
    });

    test('2020DefectTestCases_260821', async ({ personnel, loginPage, loaderPage, testData, scheduling }) => {
      await withTestContext(testData, '260821', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.verifyPFValidateInfoIconDisplayed();
        await personnel.personnelSearch.clickPFInfoIcon();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickInactiveCheckBox();
        await personnel.personnelEntry.saveNClose();
        await personnel.personnelSearch.verifyNoRecordFoundAcknowledgeMessage();
        // TC - 46116
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickResetButton();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.verifyNoRecordFoundAcknowledgeMessage();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickIncludeInactiveCheckbox();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.verifyAtGridRowAsGrayColorByPFCode();
        // - TC - 46116 -
        await loaderPage.navigateToModule('Scheduling');
        await loaderPage.navigateToScreen('Calendar');
        await scheduling.module.switchToCalendarScreen();
        await scheduling.calendar.doubleClickInCalendarByCurrentDate();
        await scheduling.calendar.appointmentsPopup.enterAtSubject();
        await scheduling.calendar.appointmentsPopup.enterStartTime();
        await scheduling.calendar.appointmentsPopup.verifyStartTimeasCurrentDate();
        await scheduling.calendar.appointmentsPopup.selectAtEventType();
        await scheduling.calendar.appointmentsPopup.verifyAtInactivatedNameNotAvailableInResource();
        await scheduling.calendar.appointmentsPopup.selectAtResource();
        await scheduling.calendar.appointmentsPopup.save();
        await scheduling.calendar.appointmentsPopup.verifyAppointmentSavedSuccessfully();
        await scheduling.module.switchToCalendarScreen();
        //TC-62654
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickBackButton();
        await personnel.personnelSearch.clickResetButton();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.enterAtFirstName();
        await personnel.personnelSearch.enterAtLastName();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.verifyNoRecordFoundAcknowledgeMessage();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickIncludeInactiveCheckbox();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.verifyAtGridRowAsGrayColorByPFCode();
      });
    });

  });

  test.describe('SysParameter67And68', () => {

    test('SysParameter67And68_259709', async ({ personnel, loginPage, loaderPage, testData, settings, activity }) => {
      await withTestContext(testData, '259709', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter67AsTrue();
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter68AsHomeNo();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFName();

        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.selectAtPhoneType();
        await personnel.personnelEntry.personnelEntryMainTab.enterAtPhoneNumber();
        await personnel.personnelEntry.personnelEntryMainTab.clickPhoneNoAddButton();
        await personnel.personnelEntry.personnelEntryMainTab.verifyAtPhoneNoInGrid(0);
        await personnel.personnelEntry.saveNClose();

        await loaderPage.navigateToModule('Home');
        await loaderPage.navigateToScreenByScreenID('1383 - Activity Search');
        await activity.module.switchToActivitySearch();
        await activity.activitySearch.clickAddMultiplePFButton();
        await activity.module.switchToActivitySearchHelpWindow();
        await activity.activitySearchHelpWindow.verifyHomeNoColumnDisplayed();
        await activity.activitySearchHelpWindow.verifyAtHomePhoneNo();
        await activity.activitySearchHelpWindow.verifyAtPFName();
        await activity.activitySearchHelpWindow.clickAtPhoneNo();

        await activity.activitySearchHelpWindow.verifyPFNameAtDetailsPopup();
        await activity.activitySearchHelpWindow.verifyPhoneNoAtDetailsPopup();
      });
    });

  });

  test.describe('SysParameter4338', () => {

    test('SysParameter4338_256106', async ({ personnel, loginPage, loaderPage, testData, settings }) => {
      await withTestContext(testData, '256106', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4338AsNull();
        await settings.module.switchToSystemParamter();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.logout();
        await loginPage.loginScreen.logonUsingTestContext();
        // objectIdentification.windowHandle.switchToMainWindow();
      });
    });

  });

  test.describe('DefectTestCases1', () => {

    test('DefectTestCases1_278646', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '278646', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.verifyFromHiredDateIsDisplayed();
        await personnel.personnelSearch.verifyToHiredDateIsDisplayed();
        await personnel.personnelSearch.enterAtFromHiredDate();
        await personnel.personnelSearch.enterToHiredDateAsCurrentDate();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.verifyAtPFNameInGrid();
        await personnel.module.switchToPersonnelSearch();
      });
    });

    test('DefectTestCases1_282075', async ({ personnel, loginPage, loaderPage, testData }) => {
      await withTestContext(testData, '282075', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToInventoryTab();
        await personnel.personnelEntry.personnelEntryInventoryTab.verifyAddNewButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.verifyServiceYearsDisabled();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickAssignmentTab();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyPromotionSeniorityDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToEmergencyDataTab();
        await personnel.personnelEntry.personnelEntryEmergencyDataTab.verifyOrderNoFieldIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.verifyUserNameFieldDisplayed();
        await personnel.personnelEntry.personnelEntrySecurityTab.verifyAtUserName();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTrainingTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.switchToSpecialSkillsTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.verifySkillsFieldIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToWorkRecordTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.verifyAddNewButtonIsDisplayed(); // changed
																												// by
																												// Abi
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // objectIdentification.attachmentsTab.verifyAddFilesButtonEnabled();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAllowanceTab();
        await personnel.personnelEntry.personnelEntryAllowanceTab.verifyAddButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTimeTab();
        await personnel.personnelEntry.personnelEntryTimeTab.verifyAddButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToPreferenceTab();
        await personnel.personnelEntry.personnelEntryPreferencesTab.verifyDefaultJurisIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.close();
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickAddNewButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode1();
        await personnel.personnelEntry.enterAtLastName();
        await personnel.personnelEntry.enterAtFirstName();
        await personnel.personnelEntry.save();
        await personnel.module.switchToPersonnelEntry();
        // objectIdentification.manualIdentify.verifyAdditionSuccessful();
        await personnel.personnelEntry.switchToInventoryTab();
        await personnel.personnelEntry.personnelEntryInventoryTab.verifyAddNewButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.verifyServiceYearsDisabled();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickAssignmentTab();
        await personnel.personnelEntry.personnelEntryAssignmentTab.verifyPromotionSeniorityDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToEmergencyDataTab();
        await personnel.personnelEntry.personnelEntryEmergencyDataTab.verifyOrderNoFieldIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.verifyUserNameFieldDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTrainingTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.switchToSpecialSkillsTab();
        await personnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.verifySkillsFieldIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToWorkRecordTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab();
        await personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.verifyAddNewButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // objectIdentification.attachmentsTab.verifyAddFilesButtonEnabled();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAllowanceTab();
        await personnel.personnelEntry.personnelEntryAllowanceTab.verifyAddButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToTimeTab();
        await personnel.personnelEntry.personnelEntryTimeTab.verifyAddButtonIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToPreferenceTab();
        await personnel.personnelEntry.personnelEntryPreferencesTab.verifyDefaultJurisIsDisplayed();
        await personnel.module.switchToPersonnelEntry();
      });
    });

  });

  test.describe('SysParameter299', () => {

    test('SysParameter299_292513', async ({ personnel, loginPage, loaderPage, testData, settings, home }) => {
      await withTestContext(testData, '292513', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter299AsTrue();
        await settings.module.switchToSystemParamter();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.verifyPFValidateInfoIconDisplayed();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // TC - 46166
        // objectIdentification.attachmentsTab.clickALCIcon();
        // objectIdentification.windowHandle.verifyWindowNotExists('Access List Control (ALC)');
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToAttachmentTab();
        // - TC - 46166 -
        await home.attachment.clickAttachmentUsingMobileDeviceButton();
        await home.module.switchToMobileDeviceOTPScreen();
        await home.mobileDeviceOTPScreen.enterAtMobileNo();
        await home.mobileDeviceOTPScreen.clickSendLinkToMobileButton();
        await home.mobileDeviceOTPScreen.VerifyAtAuthenticaionCodeGeneratedAs6Digit();
      });
    });

    test('SysParameter299_292510', async ({ personnel, loginPage, loaderPage, testData, settings, home }) => {
      await withTestContext(testData, '292510', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter299AsTrue();
        await settings.module.switchToSystemParamter();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.enterAtPF();
        await personnel.personnelSearch.verifyPFValidateInfoIconDisplayed();
        await personnel.personnelSearch.clickSearchButton();
        await personnel.personnelSearch.selectRowAtPFCode();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickPictureIcon();
        await home.module.switchToAllImageScreen();
        await home.allImagesScreen.clickMobileDeviceCameraButton();
        await home.module.switchToMobileDeviceOTPScreen();
        await home.mobileDeviceOTPScreen.enterAtMobileNo();
        await home.mobileDeviceOTPScreen.clickSendLinkToMobileButton();
        await home.mobileDeviceOTPScreen.VerifyAtAuthenticaionCodeGeneratedAs6Digit();
        await home.mobileDeviceOTPScreen.closeMobileDeviceOTPScreen();
        await home.module.switchToMobileDeviceOTPScreen();
        await home.allImagesScreen.CloseScreen();
        await personnel.module.switchToPersonnelEntry();
        // Below lines added by Absar for TC - 21727 & 46134
        await personnel.personnelEntry.verifyScrollBarNotPresent();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.enterAtHeight();
        await personnel.personnelEntry.clickPictureIcon();
        await home.module.switchToAllImageScreen();
        await home.allImagesScreen.CloseScreen();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.clickMainTab();
        await personnel.personnelEntry.personnelEntryMainTab.verifyAtHeight();
      });
    });

  });

  test.describe('SysParameter4322', () => {

    test('SysParameter4322_261083', async ({ personnel, loginPage, loaderPage, testData, activity }) => {
      await withTestContext(testData, '261083', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Home');
        await loaderPage.navigateToScreen('Activity Entry');
        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.verifyPrivateCheckBoxIsDisplayed();
        await activity.activityEntry.selectAtCategoryGroup();
        await activity.activityEntry.selectAtCategory();
        await activity.activityEntry.selectAtActivityType();
        await activity.activityEntry.selectAtActivityStatus();
        await activity.activityEntry.tabActivityDateTime();
        await activity.activityEntry.TabOutActivityToDateAndTime();
        await activity.activityEntry.clickPrivateCheckBox();
        await activity.activityEntry.enterAtSubject();
        await activity.activityEntry.NavigateToPFTab();
        await activity.activityEntry.activityEntryPFTab.enterAtPFNo();
        await activity.activityEntry.activityEntryPFTab.clickAddButton();
        await activity.activityEntry.activityEntryPFTab.verifyAtPFInGrid();
        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.SwitchToOtherTab();
        await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
        await activity.activityEntry.activityEntryOtherTab.SelectAtDivision();
        await activity.activityEntry.activityEntryOtherTab.SelectAtSection();
        await activity.activityEntry.activityEntryOtherTab.SelectAtTeam();
        await activity.activityEntry.activityEntryOtherTab.clickSquadLookUpButton();
        await activity.module.SwitchToActivityEntry();
        await activity.popup.switchToCodedSearch();
        await activity.popup.kPICodedLookup.selectAtDescription();
        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.SwitchToOtherTab();
        await activity.activityEntry.activityEntryOtherTab.ClickAddButton();
        await activity.activityEntry.activityEntryOtherTab.verifyAtDivisionInGrid(0);
        await activity.activityEntry.activityEntryOtherTab.verifAtSquadInGrid();
        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.Save();

        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.verifyAdditionSuccessfulBottomMessage();
        await activity.activityEntry.SwitchToOtherTab();
        await activity.activityEntry.activityEntryOtherTab.ClickDivisionSectionSquadArrow();
        await activity.activityEntry.activityEntryOtherTab.verifyAtDivisionInGrid(0);
        await activity.activityEntry.activityEntryOtherTab.verifAtSquadInGrid();
        await activity.module.SwitchToActivityEntry();
        await activity.activityEntry.Close();
        // objectIdentification.windowHandle.switchToMainWindow();
        await loaderPage.navigateToScreenByScreenID('1383 - Activity Search');
        await activity.module.switchToActivitySearch();
        await activity.activitySearch.SelectAtCategory();
        await activity.activitySearch.clickActivityTypeDropdownArrow();
        await activity.activitySearch.SelectAtActivityType();
        await activity.activitySearch.ClickSearchLink();
        await activity.activitySearch.verifyAtSubjectInGridByActivityStatus();
        await activity.module.switchToActivitySearch();
      });
    });

    test('SysParameter4322_261083A', async ({ personnel, loginPage, loaderPage, testData, settings, activity }) => {
      await withTestContext(testData, '261083A', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsTrue();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickAddNewButton();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode1(); // updated
        await personnel.personnelEntry.enterAtLastName(); // updated
        await personnel.personnelEntry.enterAtFirstName(); // updated
        await personnel.personnelEntry.clickAssignmentTab();
        await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtDivision();
        await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtSection();
        await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtSquad();
        await personnel.personnelEntry.personnelEntryAssignmentTab.tabOutEffectiveDateTime();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName();
        await personnel.personnelEntry.personnelEntrySecurityTab.selectRoleAsLocalAdmin();
        await personnel.personnelEntry.personnelEntrySecurityTab.verifyResetButtonIsEnabled();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton();
        await personnel.personnelEntry.personnelEntrySecurityTab.verifyRoleNameInGrid(0);
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.save();
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.verifyBottomStatusMessage();
        await personnel.personnelEntry.switchToSecurityTab();
        await personnel.personnelEntry.personnelEntrySecurityTab.clickResetPassword();
        const TrimmedPassword = await personnel.personnelEntry.personnelEntrySecurityTab.GetTemporaryPassword();
        await loaderPage.logout();
        await loginPage.loginScreen.LogOnForNewPFByCreateNewPassword(TrimmedPassword);
        await loaderPage.navigateToModule('Home');
        await loaderPage.navigateToScreen('Activity Search');
        await activity.module.switchToActivitySearch();
        await activity.activitySearch.SelectAtActivityTypeRadControl();
        await activity.activitySearch.enterDateAsCurrentDate();
        await activity.activitySearch.ClickSearchLink();
        await activity.activitySearch.verifyAtsubjectInGridwithActivityType();
        await activity.activitySearch.verifydateInGridWithEnteredBy();
        await activity.module.switchToActivitySearch();
        await loaderPage.navigateToModule('Settings');
        await loaderPage.navigateToScreen('System Parameter');
        await settings.module.switchToSystemParamter();
        await settings.sysParameter.setSystemparameter4322AsFalse();
      });
    });

  });

  test.describe('EntryScreenSmokeScriptPersonnel', () => {

    test('EntryScreenSmokeScriptPersonnel_PersonnelEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'PersonnelEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Personnel Search');
        await personnel.module.switchToPersonnelSearch();
        await personnel.personnelSearch.clickAddNewButton();
        await popupPage.acknowledge.okIfWindowExist('After Click Addnew');
        await personnel.module.switchToPersonnelEntry();
        await personnel.personnelEntry.enterAtPFCode(); // updated
        await personnel.personnelEntry.enterAtLastName(); // updated
        await personnel.personnelEntry.enterAtFirstName(); //
        await personnel.personnelEntry.save();
        await popupPage.acknowledge.okIfWindowExist('After Save');
        await personnel.module.switchToPersonnelEntry();
        // objectIdentification.manualIdentify.verifyAdditionSuccessful();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Personnel Entry');
      });
    });

    test('EntryScreenSmokeScriptPersonnel_AllowanceCodeEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'AllowanceCodeEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Allowance Code');
        await personnel.module.switchToAllowanceCode();
        await personnel.allowanceCode.clickAddNew();
        await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
        await personnel.module.switchToAllowanceCodeEntry();
        await personnel.allowanceCodeEntry.selectCode();
        await personnel.allowanceCodeEntry.selectAtYear();
        await personnel.allowanceCodeEntry.enterAmount();
        await personnel.allowanceCodeEntry.enterAtFromDate();
        await personnel.allowanceCodeEntry.tabToDate();
        await personnel.allowanceCodeEntry.clickAddButton();
        await personnel.allowanceCodeEntry.saveScreen();
        await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
        await personnel.module.switchToAllowanceCodeEntry();
        await personnel.allowanceCodeEntry.verifyAdditionSuccessfulMessage();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Allowance Code Entry');
      });
    });

    test('EntryScreenSmokeScriptPersonnel_InjuryRptEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'InjuryRptEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Injury Rpt Search');
        await personnel.module.switchToInjuryRptSearch();
        await personnel.injuryRptSearch.clickAddNew(); // Method and UI Incomplete
        await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
        await personnel.module.switchToInjuryReportEntry();
        await personnel.injuryReportEntry.tabOutPFNo();
        await personnel.injuryReportEntry.tabOutDateOfInjury();
        await personnel.injuryReportEntry.tabOutTimeOfInjury();
        await personnel.injuryReportEntry.selectTypeOfInjury();
        await personnel.injuryReportEntry.save();
        await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
        await personnel.module.switchToInjuryReportEntry();
        await personnel.injuryReportEntry.verifyAdditionSuccessfulMessage();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Injury Rpt Entry');
      });
    });

    test('EntryScreenSmokeScriptPersonnel_MedicalHistoryEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'MedicalHistoryEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Med History Search');
        await personnel.module.switchToMedHistorySearch();
        await personnel.medHistorySearch.clickAddNew();
        await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
        await personnel.module.switchToMedicalHistoryEntry();
        await personnel.medicalHistoryEntry.tabOutPFNo();
        await personnel.medicalHistoryEntry.tabOutDateOfEvent();
        await personnel.medicalHistoryEntry.tabOutTimeOfEvent();
        await personnel.medicalHistoryEntry.enteredByAsAUTPOL();
        await personnel.medicalHistoryEntry.tabOutEnteredByDate();
        await personnel.medicalHistoryEntry.tabOutEnteredByTime();
        await personnel.medicalHistoryEntry.selectMediCode();
        await personnel.medicalHistoryEntry.enterNotes();
        await personnel.medicalHistoryEntry.save();
        await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
        await personnel.module.switchToMedicalHistoryEntry();
        await personnel.medicalHistoryEntry.verifyAdditionSuccessfulMessage();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Medical History Entry');
      });
    });

    test('EntryScreenSmokeScriptPersonnel_PerformanceReviewEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'PerformanceReviewEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Performance Review');
        await personnel.module.switchToPerformanceReview();
        await personnel.performanceReview.clickAddNew();
        await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
        await personnel.module.switchToPerformanceReviewEntry();
        await personnel.performanceReviewEntry.tabOutForPFNo();
        await personnel.performanceReviewEntry.enterEvaluationDateFromAndTo();
        await personnel.performanceReviewEntry.enterPurpose();
        await personnel.performanceReviewEntry.save();
        await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
        await personnel.module.switchToPerformanceReviewEntry();
        // personnel.performanceReviewEntry.verifyAdditionSuccessfulMessage();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Performance Review Entry');
      });
    });

    test('EntryScreenSmokeScriptPersonnel_WorkHistoryEntry', async ({ personnel, loginPage, loaderPage, testData, popupPage }) => {
      await withTestContext(testData, 'WorkHistoryEntry', async () => {
        await loginPage.loginScreen.logon();
        await loaderPage.navigateToModule('Personnel');
        await loaderPage.navigateToScreen('Work History Search');
        await personnel.module.switchToWorkHistorySearch();
        await personnel.workHistorySearch.clickAddNew();
        await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.tabOutPFNo();
        await personnel.workHistoryEntry.tabOutForPeriodFromDateAndTime();
        await personnel.workHistoryEntry.tabOutForPeriodToDateAndTime();
        await personnel.workHistoryEntry.tabOutEnteredBy();
        await personnel.workHistoryEntry.tabOutEnteredDateAndTime();
        await personnel.workHistoryEntry.selectAtCategory();
        await personnel.workHistoryEntry.selectASubtCategory();
        await personnel.workHistoryEntry.enterSubject();
        await personnel.workHistoryEntry.saveScreen();
        await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
        await personnel.module.switchToWorkHistoryEntry();
        await personnel.workHistoryEntry.verifyAdditionSuccessfulMessage();
        // objectIdentification.smokeTest.clickOnEntryScreensTabs('Work History Entry');
      });
    });

  });
