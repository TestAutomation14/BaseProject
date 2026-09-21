// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

// ===================== Part 1 (12 tests) =====================

test.describe('EntryScreenSmokeScriptCitizenServices', () => {
  test('AnonymousTipsEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'AnonymousTipsEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Anonymous Tips');
      await citizenServices.module.switchToAnonymousTipsScreen();
      await citizenServices.anonymousTips.clickAddNewTip();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.selectIssueType();
      await citizenServices.anonymousTipsEntry.clickComplaintDetailsTab();
      await citizenServices.anonymousTipsEntry.enterDetails();
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Anonymous Tips Entry');
    });
  });

  test('RegistrationDetailsEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'RegistrationDetailsEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtLastName();
      await citizenServices.registrationDetails.enterAtFirstName();
      await citizenServices.registrationDetails.enterAtAddress();
      await citizenServices.registrationDetails.save();
      await popupPage.acknowledge.okWithExpectedMessage('1002 - Addition Successful');
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToRegistrationDetails();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Registration Details Entry');
    });
  });

  test('CitizenFlagEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'CitizenFlagEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtLastName();
      await citizenServices.citizenFlagEntry.enterAtFirstName();
      await citizenServices.citizenFlagEntry.enterAtAddress();
      await citizenServices.citizenFlagEntry.enterAtEmail();
      await citizenServices.citizenFlagEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Citizen Falg Entry');
    });
  });

  test('ComplaintsEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'Complaints', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickNewComplaint();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.selectAtComplaintType();
      await citizenServices.complaintsEntry.tabDateAndTime();
      await citizenServices.complaintsEntry.clickYesRadioButton();
      await citizenServices.complaintsEntry.enterAtLastName();
      await citizenServices.complaintsEntry.enterAtFirstName();
      await citizenServices.complaintsEntry.enterAtAddress();
      await citizenServices.complaintsEntry.switchToComplaintDetailsTab();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterAtAddress();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterComplaintDetails();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Complaints');
    });
  });

  test('CSPawnDealerEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'CSPawnDealerEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('CS Pawn Dealer Entry');
    });
  });

  test('CSPawnEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'CSPawnEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Entry');
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.selectType();
      await citizenServices.cSPawnEntry.enterEnteredBy();
      await citizenServices.cSPawnEntry.clickMainTab();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.selectPropertyType();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.enterDescription();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.clickDealerTab();
      await citizenServices.cSPawnEntry.cSPawnEntrydealerTab.selectDealerIDNo();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('CS Pawn Entry');
    });
  });

  test('CitizenIpCameraEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'CitizenIPCameraEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickManageIPCamera();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.enterAtLastName();
      await citizenServices.citizenIPCamera.enterAtFirstName();
      await citizenServices.citizenIPCamera.enterAtAddress();
      await citizenServices.citizenIPCamera.enterEmail();
      await citizenServices.citizenIPCamera.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Citizen IPCamera');
      await citizenServices.citizenIPCamera.clickAddIPCameraLink();
      await citizenServices.module.switchToCameraDetails();
      await citizenServices.cameraDetails.enterAtCameraName();
      await citizenServices.cameraDetails.enterURL();
      await citizenServices.cameraDetails.save();
      await popupPage.acknowledge.okWithExpectedMessage('1002 - Addition Successful');
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToCameraDetails();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Camera Details');
    });
  });

  test('LocationCheckEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'LocationCheckEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.clickNewLocationCheck();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.enterAtLocation();
      await citizenServices.locationCheckEntry.switchToDetailsTab();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.selectAtReason();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.tabOutFromDateNTime();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterToDateNTimeAsFuture();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterRemarks();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Location Check Entry');
    });
  });

  test('ServiceRequestsEntrySmoke', async ({ loginPage, loaderPage, citizenServices, popupPage, testData }) => {
    await withTestContext(testData, 'ServiceRequestsEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.clickAddNewService();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.selectAtServiceType();
      await citizenServices.serviceRequestsEntry.enterAtLastName();
      await citizenServices.serviceRequestsEntry.enterAtFirstName();
      await citizenServices.serviceRequestsEntry.enterAtAddress();
      await citizenServices.serviceRequestsEntry.switchToServiceDetailsTab();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterAtEnterLocation();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterServiceDetails();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Service Requests Entry');
    });
  });
});

test.describe('Q2Defect2024', () => {
  test('CsPawnDealerEntryScreenAuthorizedUserDetailsDisappearWhenClickOnPrintIcon_26376', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '26376', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.selectAtDealerCodeInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickResetIcon();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.verifyAtNameInGrid();
    });
  });

  test('CRM_159378_CspPermitRequestEntryWrongMessagepopUpsWhenSavedWithOutMandatoryData_26822', async ({ loginPage, loaderPage, citizenServices, names, testData }) => {
    await withTestContext(testData, '26822', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request');
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.clickaddnew();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.clickApproveButton();
      await citizenServices.cSPPermitRequestEntry.verify30033EnterAddressAck();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.enterAtAddress();
      await citizenServices.cSPPermitRequestEntry.clickEnterNewNameCheckBox();
      await citizenServices.cSPPermitRequestEntry.enterAtLastName();
      await citizenServices.cSPPermitRequestEntry.enterAtFirstName();
      await names.nameSearchHelpWindow.SelectName();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.enterAtType();
      await citizenServices.cSPPermitRequestEntry.tabOutTheEffectiveFromDateAndTime();
      await citizenServices.cSPPermitRequestEntry.tabOutTheExpirationDateAndTime();
      await citizenServices.cSPPermitRequestEntry.clickApproveButton();
      await citizenServices.cSPPermitRequestEntry.verify6040ApproveSucessFullyAck();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      const PermitRequestno = await citizenServices.cSPPermitRequestEntry.getPermitRequestNo();
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.selectAtStatus();
      await citizenServices.cSPPermitRequest.clicksearch();
      await citizenServices.cSPPermitRequest.verifyAtPermitRequestNoByName(PermitRequestno);
    });
  });

  test('IncorrectCommonPlaceNameIsPulledIntoTheLocationCheckScreen_32671', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '32671', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.enterAtServiceNo();
      await citizenServices.locationCheckSearch.clickSearch();
      await citizenServices.locationCheckSearch.selectAtServiceInGrid();
      await citizenServices.module.switchToLocationCheckEntry();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Location check Entry');
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.verifyCommonNamelabelIsDisplayed();
      await citizenServices.locationCheckEntry.verifyAtCommonName();
      await citizenServices.locationCheckEntry.save();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Location check Entry');
      await citizenServices.module.switchToLocationCheckEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });
});

// ===================== Part 2 (12 tests) =====================

test.describe('Q2Defect2024 continued', () => {
  test('CRM_168778_CitizenServicesCitizenAccountSearchCSPawnEntryTabColorNotTurnsBlueEvenAfterAddingData_32674', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '32674A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.selectAtCitizenNoInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.clickAddNewAddressButton();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.enterAtAddress();
      await citizenServices.addressDetails.save();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.verifyAtAddressInGrid();
      await citizenServices.registrationDetails.save();
      await citizenServices.registrationDetails.verifyAddressTabDisplayedInBlueColor();
      await citizenServices.module.switchToRegistrationDetails();
    });
  });

  test('CitizenServicesWhileClickingOnCSCFSMapUpdateScreenOpensWithJSErrorCRM180121_48614', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48614', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS CFS Map Update');
      await citizenServices.module.switchToCSCFSMapUpdate();
      await citizenServices.cSCFSMapUpdate.selectAtIncidentTypeCode();
      await citizenServices.cSCFSMapUpdate.enterAtIncidentTypeDefinition();
      await citizenServices.cSCFSMapUpdate.enterAtCFSCode();
      await citizenServices.cSCFSMapUpdate.save();
      await citizenServices.module.switchToCSCFSMapUpdate();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CitizenFlagSearchAddNewAfterCreatedNewEntryCitizenFlagEntryScreenIsNotChangedToChangeModeScreenCRM180659_48569', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48569', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickAddNew();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtLastName();
      await citizenServices.citizenFlagEntry.enterAtFirstName();
      await citizenServices.citizenFlagEntry.enterAtAddress();
      await citizenServices.citizenFlagEntry.enterAtEmail();
      await citizenServices.citizenFlagEntry.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.citizenFlagEntry.verifyCitizenFlagRichTextIsDisplayed();
      await citizenServices.citizenFlagEntry.enterAtRichText();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.save();
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('ComplaintsClickOnNewComplaintComplaintsCreateAddNewEntryClickOnSaveAndCloseIcon1stTimeScreenNotClosedCRM180124_47785', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '47785', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickNewComplaint();
      // objectIdentification.windowHandle.windowExist('Complaints');
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.selectAtComplaintType();
      await citizenServices.complaintsEntry.tabDateAndTime();
      await citizenServices.complaintsEntry.clickComplaintByAnonymousCheckBox();
      await citizenServices.complaintsEntry.switchToComplaintDetailsTab();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterAtAddress();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterComplaintDetails();
      await citizenServices.complaintsEntry.complaintDetailsTab.selectComplaintReason();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.saveNClose();
      await citizenServices.module.switchToComplaintScreen();
      // objectIdentification.windowHandle.verifyWindowNotExists('Complaints');
      await citizenServices.module.switchToComplaintScreen();
    });
  });

  test('CitizenServicesWhileClickingOnCSPawnDealerEntryScreenOpensWithJSErrorCRM180122_47794', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '47794', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer Entry');
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.verifyJurisDropdownIsDisplayed();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtAuthorizeRef();
      await citizenServices.userActivation.verifyAuthorizeRefAcceptsOnlyNum();
    });
  });

  test('WhenClickingOnAnExistingRecordInTheCSPPermitRequestAblueScreenAppearsCRM180765_48566', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48566', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request');
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.selectAtStatus();
      await citizenServices.cSPPermitRequest.clicksearch();
      await citizenServices.cSPPermitRequest.selectRandomGridRow();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.verifyApproveButtonIsDisplayed();
    });
  });
});

test.describe('Q1CSDefect2025', () => {
  test('AuthorizedUsersTabAfterAddedTheUserInCSPawnDealerEntryScreenClickOnSaveResetIconAddedUserNotListedCRM180127_48580', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48580', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickAddNew();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.module.switchToCSPawnDealerEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(1);
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.closeScreen();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.verifyAtNameInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.saveNClose();
      // scenario2
      await loaderPage.navigateToScreen('CS Pawn Dealer Entry');
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID1();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(2);
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.closeScreen();
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.verifyAtNameInGrid();
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.enterAtDealerCode();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.selectAtDealerCodeInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(3);
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.closeScreen();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.verifyAtNameInGrid();
    });
  });

  test('LocationCheckEntryUnderDetailsTabKeyLeftWithContactAllowsMoreThan10DigitsCRM178288_46336', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '46336', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Entry');
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.enterAtLocation();
      await citizenServices.locationCheckEntry.switchToDetailsTab();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.selectAtReason();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.tabOutFromDateNTime();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterToDateNTimeAsFuture();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterKeyLeftContactAsMoreThan10Digits();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterRemarks();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      await citizenServices.module.switchToLocationCheckEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.locationCheckEntry.switchToDetailsTab();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.verifyKeyLeftWithContactAs10Digits();
    });
  });

  test('CitizenAccountSearchInAddressAuthorizationPopupFillDetailsAndClickOnUpdateButtonGetting1008PageErrorPopupCRM178409_46332', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '46332', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtCitizenNo();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.clickAddNewAddressButton();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.enterAtAddress();
      await citizenServices.addressDetails.enterAtNotes();
      await citizenServices.addressDetails.enterExpiresDate();
      await citizenServices.addressDetails.clickPrimaryAddressCheckbox();
      await citizenServices.addressDetails.enterAtBusinessName();
      await citizenServices.addressDetails.clickOwnerRadioButton();
      await citizenServices.addressDetails.enterAtRegistrationNumber();
      await citizenServices.addressDetails.enterAtAlarmNumber();
      await citizenServices.addressDetails.enterAtPawnDealerCode();
      await citizenServices.addressDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.clickAddressAuthorizationButton();
      await citizenServices.addressAuthorization.selectAtAddressAuthorizationStatus();
      await citizenServices.addressAuthorization.enterAddressConfirmDateAndTimeAsCurrentDate();
      await citizenServices.addressAuthorization.tabOutAuthorizedPF();
      await citizenServices.addressAuthorization.enterAuthorizedDateAsCurrentDate();
      await citizenServices.addressAuthorization.clickUpdateWithConfirmPopup();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Address Details - Authorization popup');
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.enterAtCitizenFlagsRichText();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.scrollIntoSaveIcon();
      await citizenServices.addressDetails.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.verifyAtCitizenFlagsRichText();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.scrollIntoSaveIcon();
      await citizenServices.addressDetails.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Address Details');
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.saveAndClose();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      // objectIdentification.windowHandle.verifyWindowNotExists('Address Details');
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.verifyAtAddressInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.saveNClose();
      // objectIdentification.windowHandle.verifyWindowNotExists('Registration Details');
      await citizenServices.module.switchToCitizenAccountSearch();
    });
  });

  test('CSPawnDealerCSPawnDealerEntryAfterCreatedNewEntryWhileClickingOnSaveGettingRecordAlreadyExistsPopupCRM178258_46351', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '46351', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickAddNew();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.module.switchToCSPawnDealerEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.cSPawnDealerEntry.verifyAtDealerID(1);
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.cSPawnDealerEntry.verify1046RecordAlreadyExistAcknowledgePopupNotExist();
      await citizenServices.module.switchToCSPawnDealerEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await citizenServices.cSPawnDealerEntry.verifyAtDealerID(2);
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(1);
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verify5037InvalidPhoneNoAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtPhoneNo1();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verify22505SelectPhoneTypeAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
    });
  });

  test('cSPawnDealerEntryScreenWhileCreatingEntryWithExistingDealerIDThe1005ErrorAcknowledgePopupAppearsCRM181044_48611', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48611', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.verifySpecialCharactersNotAllowedInDealerCode();
      await citizenServices.cSPawnDealer.clickAddNew();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.verifySpecialCharactersNotAllowedInDealerID();
      await citizenServices.cSPawnDealerEntry.verifyAlphaNumericAllowedInDealerID();
      await citizenServices.cSPawnDealerEntry.clearDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.cSPawnDealerEntry.verify1046RecordAlreadyExistAcknowledgePopup();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('CS Pawn Dealer Entry');
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID1();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.module.switchToCSPawnDealerEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.module.switchToCSPawnDealerEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('InRegistrationDetailsScreenClickOnSaveAddedAddressNotListedUnderTheAddressTabGridCRM180128_48801', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48801', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyGridIsNotNull();
      await citizenServices.citizenAccountSearch.enterAtCitizenNo();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.clickAddNewAddressButton();
      // objectIdentification.windowHandle.verifyWindowExists('Address Details');
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.enterAtAddress();
    });
  });
});

// ===================== Part 3 (12 tests) =====================

test.describe('Q1CSDefect2025 continued', () => {
  test('InTheCSPawnSearchScreenWhenEnteringTheFromDateAndToDateAndSearchingForARecordA1008PageErrorAppearsOnTheScreenCRM181112_48630', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48630', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Search');
      await citizenServices.module.switchToCSPawnSearch();
      await citizenServices.cSPawnSearch.enterAtPawnFromDateAndTimeAsCurrentTime();
      await citizenServices.cSPawnSearch.enterPawnToDateAndTimeAsCurrentDateAndTime();
      await citizenServices.cSPawnSearch.clickSearchButton();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('CS Pawn Search');
      await citizenServices.module.switchToCSPawnSearch();
      await citizenServices.cSPawnSearch.verifyGridIsNotNull();
    });
  });

  test('LiveVideoLinkAddNewAfterCreatedNewEntryWithValidEmailIDGetting1014NotAValidEmailAddressCRM181048_48416', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '48416', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickManageIPCamera();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.enterAtLastName();
      await citizenServices.citizenIPCamera.enterAtFirstName();
      await citizenServices.citizenIPCamera.enterAtAddress();
      await citizenServices.citizenIPCamera.enterAtEmail();
      await citizenServices.citizenIPCamera.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAdditionSuccessfulBottomMessage();
    });
  });

  test('CRM_183515CSPawnEntryAfterCreatedNewEntryNavigateToAttachmentTabClickOnResetIconTabAndDataGettingVanished_53037', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '53037', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Entry');
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.selectAtType();
      await citizenServices.cSPawnEntry.enterEnteredBy();
      await citizenServices.cSPawnEntry.clickMainTab();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.selectAtPropertyType();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.enterAtDescription();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.clickDealerTab();
      await citizenServices.cSPawnEntry.cSPawnEntrydealerTab.selecAtDealerIDNo();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.save();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.verifyAdditionSuccessfulBottomMessage();
      await citizenServices.cSPawnEntry.clickReset();
      await citizenServices.cSPawnEntry.verifyAttachmentTabIsDisplayedAndEnabled();
      await citizenServices.cSPawnEntry.verifyAtEnteredBy();
      await citizenServices.cSPawnEntry.verifyAtType();
      await citizenServices.cSPawnEntry.verifyTabColor('Attachment', 0);
      await citizenServices.cSPawnEntry.verifyTabColor('Main', 1);
      await citizenServices.cSPawnEntry.verifyTabColor('Dealer', 2);
      await citizenServices.cSPawnEntry.clickMainTab();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.verifyAtPropertyType();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.verifyAtDescription();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.clickDealerTab();
      await citizenServices.cSPawnEntry.cSPawnEntrydealerTab.verifyAtDealerIDNo();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.closeScreen();
      await loaderPage.navigateToScreen('CS Pawn Entry');
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.verifyBrokenImageIsNotDisplayed();
    });
  });

  test('CRM184135RegisterationDetailClickOnUserActivationButtonInUserActivationScreenAuthorizedDateAndTimeNameIsThereButDateFieldOnlyThere_53041', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '53041', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.selectAtCitizenNoInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.verifySpacebetweenIcons();
      await citizenServices.registrationDetails.maximizeScreen();
      await citizenServices.registrationDetails.verifySpacebetweenIcons();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickUserActivationButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.verifyAuthorizedTimeFieldIsEnabledAndDisplayed();
      await citizenServices.userActivation.selectAtRegisterationStatus();
      await citizenServices.userActivation.enterRegisterationDateAsCurrentDate();
      await citizenServices.userActivation.enterRegisterationTimeAsCurrentTime();
      await citizenServices.userActivation.enterAuthorizedDateAsCurrentdate();
      await citizenServices.userActivation.enterAuthorizedDateAsCurrentTime();
      await citizenServices.userActivation.save();
      await citizenServices.module.switchToUserActivation();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await citizenServices.userActivation.closeScreen();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.save();
      await citizenServices.registrationDetails.verifyUpdateSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickUserActivationButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.verifyAuthorizedTimeFieldIsEnabledAndDisplayed();
    });
  });
});

test.describe('SysParameter203', () => {
  test('UserActivationScreenAfterEnteredMandatoryDatasWhileClickingOnSaveGetting1008PageErrorPopupWithoutConfigureTheSP203CRM181333_48723', async ({ loginPage, loaderPage, citizenServices, settings, testData }) => {
    await withTestContext(testData, '48723', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setAtSystemParameter203();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.enterAtDealerCode();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.selectAtDealerCodeInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(1);
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('User Activation');
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.verifyAtNameInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter203AsSMTPserver();
      await settings.module.switchToSystemParamter();
    });
  });
});

test.describe('Q2CSDefect2025', () => {
  test('CitizenServicesCSPawnDealerEntryInAuthorizedUsersTabClickAddButtonUserActivationWindowEnterSpaceInLastNameFieldClickSaveCRM186917_58275', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58275', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.enterAtDealerCode();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.selectAtDealerCodeInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(1);
      await citizenServices.userActivation.enterSpaceInLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyPleaseEnterLastNameAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterSpaceInFirstName();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyPleaseEnterFirstNameAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyAddressIsMandatoryAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('OnTheComplaintsScreenWhenInvalidEmailAreEnteredAndTheSearchIsClickedARecordStillAppearsOnTheScreenCRM186253_58096', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58096', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.enterAtEmail();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyNoRecordFoundAcknowledgePopup();
      await citizenServices.module.switchToComplaintScreen();
    });
  });

  test('WhileCreatingANewEntryThePhoneNumberFieldDisappearsFromTheScreenAfterCreatingTheEntryThePhoneTypeCanStillBeChangedCRM186178_58088', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58088', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickNewComplaint();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.selectAtComplaintType();
      await citizenServices.complaintsEntry.tabDateAndTime();
      await citizenServices.complaintsEntry.clickYesRadioButton();
      await citizenServices.complaintsEntry.enterAtLastName();
      await citizenServices.complaintsEntry.enterAtFirstName();
      await citizenServices.complaintsEntry.enterAtAddress();
      await citizenServices.complaintsEntry.selectAtPrimaryPhoneType();
      await citizenServices.complaintsEntry.enterAtPrimaryPhoneNo();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterAtAddress();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterComplaintDetails();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.save();
      await citizenServices.module.switchToComplaintsEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.complaintsEntry.verifyAtPrimaryPhoneType();
      await citizenServices.complaintsEntry.verifyAtPrimaryPhoneNo();
      await citizenServices.complaintsEntry.verifyPrimaryPhoneTypeIsDisabled();
    });
  });

  test('CitizenServicesCitizenAccountSearchRegistrationDetailsClickRefreshALCIconAppearsEmailPasswordButtonVanishedCRM187613_58093', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58093', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickResetIcon();
      await citizenServices.registrationDetails.verifyALCIconIsNotDisplayed();
      await citizenServices.registrationDetails.verifyUserActivationButtonIsDisplayed();
      await citizenServices.registrationDetails.verifyEmailPasswordButtonIsDisplayed();
    });
  });

  test('CSFormEntryScreenOpenWithErrorCRM164913_58101', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58101', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Form Search');
      await citizenServices.module.switchToCSFormSearch();
      await citizenServices.cSFormSearch.selectAtStatus();
      await citizenServices.cSFormSearch.clickSearch();
      await citizenServices.cSFormSearch.verifyAtStatusInGrid();
      await citizenServices.cSFormSearch.selectAtStatusInGrid();
      // objectIdentification.windowHandle.verifyWindowExists('CS Form Entry');
      await citizenServices.cSFormEntry.verifySaveIconIsDisplayed();
    });
  });

  test('CitizenServicesOnlineReportsSelectTheDataFromTheGridCORSEntryWindowProcessTabCheckRejectRadioButtonEnterReasonForRejectionCRM186910_58198', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '58198', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Online Reports');
      await citizenServices.module.switchToOnlineReports();
      await citizenServices.onlineReports.verifyIncidentTypeContainsDescription();
      await citizenServices.onlineReports.enterAtCORS();
      await citizenServices.onlineReports.clickSearch();
      await citizenServices.onlineReports.selectAtCORSInGrid();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.clickProcessTab();
      await citizenServices.cORSEntry.processTab.selectAtActivityType();
      await citizenServices.cORSEntry.processTab.clickRejectRadioButton();
      await citizenServices.cORSEntry.processTab.enterAtReasonForRejection();
      await citizenServices.cORSEntry.processTab.selectAtIncidentTypeCode();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.save();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.verifyAtStatusLabel();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('CORS Entry');
      await citizenServices.module.switchToCORSEntry();
    });
  });

  test('CSFormEntry_VerifyPhoneNoFieldIsEnabledInPendingStatus_63427', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63427', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Form Search');
      await citizenServices.module.switchToCSFormSearch();
      await citizenServices.cSFormSearch.selectAtStatus();
      await citizenServices.cSFormSearch.clickSearch();
      await citizenServices.cSFormSearch.selectRandomRecord();
      await citizenServices.module.switchToCSFormEntry();
      await citizenServices.cSFormEntry.statusTab.verifyPhone1TypeIsDisabled();
      await citizenServices.cSFormEntry.statusTab.verifyPhoneNo1IsDisabled();
      await citizenServices.cSFormEntry.statusTab.verifyPhone2TypeIsDisabled();
      await citizenServices.cSFormEntry.statusTab.verifyPhoneNo2IsDisabled();
    });
  });
});

// ===================== Part 4 (12 tests) =====================

test.describe('Q2CSDefect2025 continued', () => {
  test('ComplaintsBottomMessageVerificationWhileUpdating_63436', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63436', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.enterAtService();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.selectAtServiceNoInGrid();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.switchToDispositionTab();
      await citizenServices.complaintsEntry.complaintDispositionTab.selectAtComplaintDisposition();
      await citizenServices.complaintsEntry.complaintDispositionTab.TaboutDateTime();
      await citizenServices.complaintsEntry.complaintDispositionTab.TaboutOfficerPF();
      await citizenServices.complaintsEntry.complaintDispositionTab.enterAtNotes();
      await citizenServices.complaintsEntry.complaintDispositionTab.save();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.verifyStatusLabel();
      await citizenServices.complaintsEntry.save();
      await citizenServices.module.switchToComplaintsEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('VerifyingBottomMessageAfterCancelingSaveConfirmation_63561', async ({ loginPage, loaderPage, citizenServices, names, testData }) => {
    await withTestContext(testData, '63561', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request');
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.clickaddnew();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.enterAtAddress();
      await citizenServices.cSPPermitRequestEntry.clickEnterNewNameCheckBox();
      await citizenServices.cSPPermitRequestEntry.enterAtLastName();
      await citizenServices.cSPPermitRequestEntry.enterAtFirstName();
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.SelectName();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.enterAtType();
      await citizenServices.cSPPermitRequestEntry.tabOutTheEffectiveFromDateAndTime();
      await citizenServices.cSPPermitRequestEntry.tabOutTheExpirationDateAndTime();
      await citizenServices.cSPPermitRequestEntry.cancelSave();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.verifyAdditionSuccessfulNotAppears();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.save();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CitizenAccountSearch_VerifyNoRecordFoundWhenEnteringInvalidPhoneNo_63592', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63592', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.selectAtPhoneType();
      await citizenServices.citizenAccountSearch.enterAtPhoneNo(0);
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verify1011NoRecordFoundAckMsg();
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.refresh();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.selectAtPhoneType();
      await citizenServices.citizenAccountSearch.enterAtPhoneNo(1);
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyPhoneNoInGrid(2);
    });
  });
});

test.describe('Q3CSDefect2025', () => {
  test('VerifyWhetherToSaveScreenWhileEnteringInvalidPhoneNo_RegistrationDetails_63620', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63620', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtNameID();
      await citizenServices.registrationDetails.enterAtAddress();
      await citizenServices.registrationDetails.selectAtPhoneType();
      await citizenServices.registrationDetails.enterAtPhoneNo(0);
      await citizenServices.registrationDetails.clickSave();
      await citizenServices.registrationDetails.verify5037InvalidPhoneNoPopup();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtPhoneNo(1);
      await citizenServices.registrationDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToRegistrationDetails();
    });
  });

  test('CSP_PermitRequest_BuildErrorAppearsInExistingData_63617', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63617', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request');
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.clicksearch();
      await citizenServices.cSPPermitRequest.selectRandomGridRow();
      await citizenServices.module.switchToCSPPermitRequestsEntry();
      await citizenServices.cSPPermitRequestEntry.verifyAddressIsnotBlank();
      await citizenServices.cSPPermitRequestEntry.verifySelectANameIsnotBlank();
      await citizenServices.cSPPermitRequestEntry.verifyTypeIsnotBlank();
      await citizenServices.cSPPermitRequestEntry.verifyEffectiveFromIsnotBlank();
    });
  });

  test('VerifyWhetherToSaveRegistrationDetailsWithoutMandatoryData_63611', async ({ loginPage, loaderPage, citizenServices, names, testData }) => {
    await withTestContext(testData, '63611', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtAddress();
      await citizenServices.registrationDetails.clickSave();
      await citizenServices.registrationDetails.verify30033EnterLastNamePopupArise();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtLastName();
      await citizenServices.registrationDetails.clickSave();
      await citizenServices.registrationDetails.verify30033EnterFirstNamePopupArise();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtFirstName();
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.selectAtNameInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.verifyCitizenIdIsGenerated();
    });
  });

  test('CitizenAccountSearch_VerifyWhetherTosaveAddressDetailsScreenWithoutMandatoryField_63571', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63571', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtCitizenNo();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.selectAtCitizenNoInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickAddressTab();
      await citizenServices.registrationDetails.addressTab.clickAddNewAddressButton();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.clickSave();
      await citizenServices.addressDetails.verify6013AddressIsMandatoryAckPopup();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.enterAtAddress();
      await citizenServices.addressDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToAddressDetails();
      await citizenServices.addressDetails.verifyAssociatedNamesLabelIsDisplayed();
      await citizenServices.addressDetails.verifyCitizenFlagsLabelIsDisplayed();
      await citizenServices.addressDetails.verifyIPCameraDetailsLabelIsDisplayed();
      await citizenServices.addressDetails.verifyPhoneNumbersLabelIsDisplayed();
      await citizenServices.addressDetails.clickPrimaryAddressCheckbox();
      await citizenServices.addressDetails.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      await citizenServices.module.switchToAddressDetails();
    });
  });

  test('VerifySpellingOf30033PopupInServiceRequest_63533', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63533', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.enterAtServiceNo();
      await citizenServices.serviceRequests.clickSearch();
      await citizenServices.serviceRequests.selectAtServiceNo();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.switchToServiceDetailsTab();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.clearServiceDetails();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.verify30033EnterServiceDetailsAcknowledgePopup();
      await citizenServices.module.switchToServiceRequestsEntry();
    });
  });

  test('CSPawnDealerEntry_NameSearchScreenOpensTwice_63595', async ({ loginPage, loaderPage, citizenServices, names, testData }) => {
    await withTestContext(testData, '63595', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer Entry');
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.enterAtLastName();
      await names.module.switchToNameSearchHelpWindow();
      // objectIdentification.windowHandle.verifySameScreenNotOpenedTwice('Name Search');
      await names.module.switchToNameSearchHelpWindow();
      await names.nameSearchHelpWindow.SelectNameByLastName();
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToCSPawnDealerEntryScreenTab();
    });
  });

  test('CitizenIPCamera_AbleToAddEntryWithoutEnteringMandatoryField_63477', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63477', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickManageIPCamera();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.clickSave();
      await citizenServices.citizenIPCamera.verify30033EnterLastNamePopupArise();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.enterAtAddress();
      await citizenServices.citizenIPCamera.enterAtEmail(0);
      await citizenServices.citizenIPCamera.clickSave();
      await citizenServices.citizenIPCamera.verify30033EnterLastNamePopupArise();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.enterAtLastName();
      await citizenServices.citizenIPCamera.enterAtFirstName();
      await citizenServices.citizenIPCamera.clearEmail();
      await citizenServices.citizenIPCamera.enterAtEmail(1);
      await citizenServices.citizenIPCamera.clickSave();
      await citizenServices.citizenIPCamera.verify1014NotAValidEmailAddressPopupArise();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.clearEmail();
      await citizenServices.citizenIPCamera.enterAtEmail(0);
      await citizenServices.citizenIPCamera.enterAtPrimaryPhonetype();
      await citizenServices.citizenIPCamera.enterAtPrimaryPhoneNo();
      await citizenServices.citizenIPCamera.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAdditionSuccessfulBottomMessage();
    });
  });

  test('CitizenFlagEntry_AbleToAddNewEntryWithoutEnteringMandatoryField_63577', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63577', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickAddNew();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtAddress();
      await citizenServices.citizenFlagEntry.enterAtEmail();
      await citizenServices.citizenFlagEntry.clickSave();
      await citizenServices.citizenFlagEntry.verify30033EnterLastNamePopupArise();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtLastName();
      await citizenServices.citizenFlagEntry.clickSave();
      await citizenServices.citizenFlagEntry.verify30033EnterFirstNamePopupArise();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtFirstName();
      await citizenServices.citizenFlagEntry.enterAtPhoneNumber();
      await citizenServices.citizenFlagEntry.clickSave();
      await citizenServices.citizenFlagEntry.verify22505SelectPhoneTypePopupArise();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.clearPhoneNo();
      await citizenServices.citizenFlagEntry.selectAtPhoneType();
      await citizenServices.citizenFlagEntry.clickSave();
      await citizenServices.citizenFlagEntry.verify2018EnterPhoneNoPopupArise();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtPhoneNumber();
      await citizenServices.citizenFlagEntry.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CitizenAccountSearch_NameAndEmailFileterNotWorkingProperly_63616', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63616', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtLastName();
      await citizenServices.citizenAccountSearch.enterAtFirstName();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyAtLastAndFirstNameStartsWithLetterInGrid();
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.refresh();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtEmail();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyAtEmailStartsWith();
    });
  });
});

// ===================== Part 5 (12 tests) =====================

test.describe('Q3CSDefect2025 continued', () => {
  test('CitizenFlagSearch_FirstNameLastNameAndEmailFiltersNotWorking_63600', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63600', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.enterAtLastName();
      await citizenServices.citizenFlagSearch.enterAtFirstName();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.verifyAtLastAndFirstNameStartsWithLetterInGrid();
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.refresh();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.enterAtEmail();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.verifyAtEmailStartsWithALetterInGrid();
      await citizenServices.citizenFlagSearch.refresh();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.selectPhoneType();
      await citizenServices.citizenFlagSearch.enterPhoneNo();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.verify1011NorecordFoundAckPopup();
      await citizenServices.module.switchToCitizenFlagSearch();
    });
  });
});

test.describe('Q3Defect2025', () => {
  test('ServiceRequestEntry_UpdateStatusNViewHistoryTabPopupShowsIncorrectly_63701', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63701', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.enterAtServiceNo();
      await citizenServices.serviceRequests.clickSearch();
      await citizenServices.serviceRequests.selectAtServiceNo();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.switchToUpdateStatusAndViewHistoryTab();
      await citizenServices.serviceRequestsEntry.updateStatusAndViewHistoryTab.taboutDateNTime();
      await citizenServices.serviceRequestsEntry.updateStatusAndViewHistoryTab.taboutUpdatedBy();
      await citizenServices.serviceRequestsEntry.updateStatusAndViewHistoryTab.selectAtStatus();
      await citizenServices.serviceRequestsEntry.updateStatusAndViewHistoryTab.enterAtComments();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verifyUpdatedDataExistsPopUpArise();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.switchToUpdateStatusAndViewHistoryTab();
      await citizenServices.serviceRequestsEntry.updateStatusAndViewHistoryTab.clickAdd();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.save();
      await citizenServices.module.switchToServiceRequestsEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('OnlineReports_NarrativeTab_Getting1005ErrorWhileClickingLoadButton_63524', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63524', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Online Reports');
      await citizenServices.module.switchToOnlineReports();
      await citizenServices.onlineReports.enterAtCORS();
      await citizenServices.onlineReports.clickSearch();
      await citizenServices.onlineReports.selectAtCORSInGrid();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.switchToNarrativeTab();
      await citizenServices.cORSEntry.narrativeTab.verifyLoadButtonIsDisabled();
      await citizenServices.cORSEntry.narrativeTab.selectAtTemplate();
      await citizenServices.cORSEntry.narrativeTab.verifyLoadButtonIsEnabled();
      await citizenServices.cORSEntry.narrativeTab.clickLoadButton();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('CORS Entry');
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.switchToNarrativeTab();
      await citizenServices.cORSEntry.narrativeTab.verifyAtRichText();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.switchToNarrativeTab();
      await citizenServices.cORSEntry.narrativeTab.save();
      await citizenServices.module.switchToCORSEntry();
      await citizenServices.cORSEntry.switchToNarrativeTab();
      await citizenServices.cORSEntry.narrativeTab.verifyAtRichText();
    });
  });

  test('IssueWithEditableFunctionalityOfCitizenServiceModuleInGrid_63455', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63455', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Anonymous Tips');
      await citizenServices.module.switchToAnonymousTipsScreen();
      await citizenServices.anonymousTips.clickSearch();
      await citizenServices.anonymousTips.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('CS Form Search');
      await citizenServices.module.switchToCSFormSearch();
      await citizenServices.cSFormSearch.clickSearch();
      await citizenServices.cSFormSearch.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('CS Pawn Search');
      await citizenServices.module.switchToCSPawnSearch();
      await citizenServices.cSPawnSearch.clickSearchButton();
      await citizenServices.cSPawnSearch.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickSearch();
      await citizenServices.liveVideoLink.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.clickSearch();
      await citizenServices.locationCheckSearch.doubleClickOnCellsAndVerifyNotEditable();
      await loaderPage.navigateToScreen('Online Reports');
      await citizenServices.module.switchToOnlineReports();
      await citizenServices.onlineReports.clickSearch();
      await citizenServices.onlineReports.doubleClickOnCellsAndVerifyNotEditable();
    });
  });

  test('ComplaintsEntry_AbleToAddNewEntryWithoutEnteringMandatoryFieldCitizenName_63579', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63579', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickNewComplaint();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.selectAtComplaintType();
      await citizenServices.complaintsEntry.tabDateAndTime();
      await citizenServices.complaintsEntry.clickYesRadioButton();
      await citizenServices.complaintsEntry.enterAtAddress();
      await citizenServices.complaintsEntry.switchToComplaintDetailsTab();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterAtAddress();
      await citizenServices.complaintsEntry.complaintDetailsTab.enterComplaintDetails();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.clickSave();
      await citizenServices.complaintsEntry.verify30033EnterLastNameAckPopup();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.enterAtLastName();
      await citizenServices.complaintsEntry.clickSave();
      await citizenServices.complaintsEntry.verify30033EnterFirstNameAckPopup();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.enterAtFirstName();
      await citizenServices.complaintsEntry.save();
      await citizenServices.module.switchToComplaintsEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CSPawnDealerAndUserActivation_AbleToAddNewEntryWithoutEnteringMandatoryFieldCitizenName_63579A', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63579A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.clickAddNew();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickSave();
      await citizenServices.cSPawnDealerEntry.verify1018RequiredEntriesMissingAckPopup();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.enterAtDealerID();
      await citizenServices.cSPawnDealerEntry.enterAtNameID();
      await citizenServices.cSPawnDealerEntry.save();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.verifyAdditionSuccessfulBottomMessage();
      await citizenServices.cSPawnDealerEntry.Close();
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.enterAtDealerCode();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.selectAtDealerCodeInGrid();
      await citizenServices.module.switchToCSPawnDealerEntry();
      await citizenServices.cSPawnDealerEntry.clickAuthorizedUsersTab();
      await citizenServices.cSPawnDealerEntry.authorizedUsersTab.clickAddButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyPleaseEnterFirstNameAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtAddress();
      await citizenServices.userActivation.selectAtPhoneType();
      await citizenServices.userActivation.enterAtPhoneNo();
      await citizenServices.userActivation.entertAtEmail(0);
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyPleaseEnterFirstNameAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtFirstName();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verifyPleaseEnterLastNameAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.enterAtLastName();
      await citizenServices.userActivation.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToUserActivation();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CSPPermitRequestEntryAndAlarmRequestsScreensAreMissing_63018', async ({ loginPage, loaderPage, citizenServices, settings, testData }) => {
    await withTestContext(testData, '63018', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Roles');
      await settings.module.switchToRoles();
      await settings.roles.enterAtRoleName();
      await settings.roles.clickSearch();
      await settings.roles.selectAtRoleNameInGrid();
      await settings.module.switchToRolesEntry();
      await settings.rolesEntry.clickSearchButton();
      await settings.rolesEntry.clickCitizenServicesEditPermissionButton();
      await settings.module.switchToRolesEntryEditScreen();
      await settings.rolesEntry.enterAtScreenID(0);
      await settings.rolesEntry.clickSearchButton();
      await settings.rolesEntry.verifyPermissionsAreChecked(0);
      await settings.rolesEntry.clearScreenID();
      await settings.rolesEntry.enterAtScreenID(1);
      await settings.rolesEntry.clickSearchButton();
      await settings.rolesEntry.verifyPermissionsAreChecked(1);
      await settings.rolesEntry.close();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request Entry');
      await loaderPage.navigateToScreen('CSP Alarm Requests');
    });
  });

  test('RegistrationDetails_InactivePhoneNoSortOrderIsNotChanged_63582', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '63582', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtNameID();
      await citizenServices.registrationDetails.enterAtAddress();
      await citizenServices.registrationDetails.selectAtPhoneType();
      await citizenServices.registrationDetails.enterAtPhoneNumber(1, 1);
      await citizenServices.registrationDetails.selectAtPhoneType2();
      await citizenServices.registrationDetails.enterAtPhoneNumber(2, 2);
      await citizenServices.registrationDetails.clickAddMorePhone();
      await citizenServices.registrationDetails.selectAtPhoneType3();
      await citizenServices.registrationDetails.enterAtPhoneNumber(3, 3);
      await citizenServices.registrationDetails.clickAddMorePhone();
      await citizenServices.registrationDetails.selectAtPhoneType4();
      await citizenServices.registrationDetails.enterAtPhoneNumber(4, 4);
      await citizenServices.registrationDetails.clickInactivePhone();
      await citizenServices.registrationDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.verifyInactivePhoneSortOrderIsNull();
      await citizenServices.registrationDetails.clickDeletePhoneNo();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.verifyPhoneNoIsDeleted();
      await citizenServices.registrationDetails.verifySortIsReordered();
    });
  });

  test('WhileAccessingLiveVideoLinkCitizensIPCameraScreenAutomaticallyCloses_68273', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '68273', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.enterAtFirstName();
      await citizenServices.liveVideoLink.enterAtLastName();
      await citizenServices.liveVideoLink.clickSearch();
      await citizenServices.liveVideoLink.selectAtCitizenNoInGrid();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.clickAddIPCameraLink();
      await citizenServices.module.switchToCameraDetails();
      await citizenServices.cameraDetails.enterAtCameraName();
      await citizenServices.cameraDetails.enterAtURL();
      await citizenServices.cameraDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.module.switchToCameraDetails();
      await citizenServices.cameraDetails.saveNclose();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAtNameInGrid();
      await citizenServices.citizenIPCamera.verifyAtAddIPCameraLinkText();
    });
  });

  test('LocationCheckEntry_DispositionTab_AllowingToSaveWithoutInternalSave_68304', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '68304', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Entry');
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.enterAtLocation();
      await citizenServices.locationCheckEntry.switchToDetailsTab();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.selectAtReason();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.tabOutFromDateNTime();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterToDateNTimeAsFuture();
      await citizenServices.locationCheckEntry.locationCheckDetailsTab.enterRemarks();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.switchToDispositionTab();
      await citizenServices.locationCheckEntry.locationCheckDispositionTab.selectAtHouseDisposition();
      await citizenServices.locationCheckEntry.locationCheckDispositionTab.taboutDispositionDateNTime();
      await citizenServices.locationCheckEntry.locationCheckDispositionTab.taboutOfficerPF();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.clickSave();
      await citizenServices.locationCheckEntry.verify1051UpdatedDataExistsAckPopup();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.switchToDispositionTab();
      await citizenServices.locationCheckEntry.locationCheckDispositionTab.save();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await citizenServices.locationCheckEntry.verifyStatusLabel();
    });
  });

  test('ResetIconInRegistrationDetailsScreenNotWorkingCorrectly_68328A', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '68328A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickAddNew();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.enterAtLastName();
      await citizenServices.registrationDetails.enterAtFirstName();
      await citizenServices.registrationDetails.enterAtAddress();
      await citizenServices.registrationDetails.clickResetIcon();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.verifyLastNameIsBlank();
      await citizenServices.registrationDetails.verifyFirstNameIsBlank();
      await citizenServices.registrationDetails.verifyAddressIsBlank();
    });
  });
});

test.describe('Q3PBCS2025', () => {
  test('SortOrderFunctionalityForOnlineReportIsNotPerformingAsExpected_62910', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '62910', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Online Reports');
      await citizenServices.module.switchToOnlineReports();
      await citizenServices.onlineReports.clickTableHeader();
      await citizenServices.onlineReports.verifyNullRowsInGrid();
      await citizenServices.onlineReports.clickSearch();
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.onlineReports.verifyAtColumnValuesAreSortedDescendingOrder(3);
    });
  });
});

// ===================== Part 6 (12 tests) =====================

test.describe('Q3Defect22025', () => {
  test('LiveVideoLinkAddressSearchNotWorking_68379', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '68379', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.enterAtAddress(0);
      await citizenServices.liveVideoLink.clickSearch();
      await citizenServices.liveVideoLink.verifyAtAddressInGrid(0);
      await citizenServices.liveVideoLink.clearAddress();
      await citizenServices.liveVideoLink.enterAtAddress(1);
      await citizenServices.liveVideoLink.clickSearch();
      await citizenServices.liveVideoLink.verify1011NoRecFoundAck();
      await citizenServices.module.switchToLiveVideoLink();
    });
  });

  test('CitizenFlagEntryWhileEnteringMandatoryfieldsandClickSaveGettingEnterPhoneNumberPopupButPhoneNoIsNotMandatory_69498', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69498', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickAddNew();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.enterAtLastName();
      await citizenServices.citizenFlagEntry.enterAtFirstName();
      await citizenServices.citizenFlagEntry.enterAtAddress();
      await citizenServices.citizenFlagEntry.enterEmail();
      await citizenServices.citizenFlagEntry.clickSave();
      await citizenServices.citizenFlagEntry.verify1014NotAValidEmailAcknowledge();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.clearEmail();
      await citizenServices.citizenFlagEntry.enterAtEmail();
      await citizenServices.citizenFlagEntry.save();
      await citizenServices.citizenFlagEntry.verify2018EnterPhoneNoPopupNotArise();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('ServiceRequestEntryAbleToSaveNewEntryWithoutEnteringMandatoryFieldCitizenName_69650', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69650', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.clickAddNewService();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.selectAtServiceType();
      await citizenServices.serviceRequestsEntry.enterAtAddress();
      await citizenServices.serviceRequestsEntry.switchToServiceDetailsTab();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterAtEnterLocation();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterServiceDetails();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify30033EnterLastNameAcknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtLastName();
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify30033EnterFirstNameAcknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtFirstName();
      await citizenServices.serviceRequestsEntry.save();
      await citizenServices.module.switchToServiceRequestsEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });

  test('CSCFSCodeMap_IncidentTypeisnotshowingdescription_69815', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69815', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS CFS Code Map');
      await citizenServices.module.switchToCSCFSCodeMap();
      await citizenServices.cSCFSCodeMap.selectAtIncidentType();
      await citizenServices.cSCFSCodeMap.clickSearch();
      await citizenServices.cSCFSCodeMap.verifyAtIncidentTypeInGrid();
    });
  });

  test('CitizenServiceLocationCheckEntryCheckIntervalAfterEnteringHourDailyFieldGetting1008PageError_69943', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69943', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.enterAtServiceNo();
      await citizenServices.locationCheckSearch.clickSearch();
      await citizenServices.locationCheckSearch.selectAtServiceInGrid();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.switchToCheckInterval();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickNoInterval();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Location Check Entry Screen');
      await citizenServices.module.switchToLocationCheckEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
      await citizenServices.locationCheckEntry.switchToCheckInterval();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickHour();
      await citizenServices.locationCheckEntry.checkIntervalTab.enterAtEveryHour();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickDaily();
      await citizenServices.locationCheckEntry.checkIntervalTab.enterAtEveryDays();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickWeekly();
      await citizenServices.locationCheckEntry.checkIntervalTab.enterAtEveryWeeks();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickMonthly();
      await citizenServices.locationCheckEntry.checkIntervalTab.enterAtEveryDayOf();
      await citizenServices.locationCheckEntry.checkIntervalTab.enterAtMonth();
      await citizenServices.locationCheckEntry.checkIntervalTab.clickYearly();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Location Check Entry Screen');
      await citizenServices.module.switchToLocationCheckEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('CSPawnEntryClickImageWhileClickingMobileDeviceCameraGettingServerError_69972', async ({ loginPage, loaderPage, citizenServices, home, testData }) => {
    await withTestContext(testData, '69972', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Entry');
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.selectType();
      await citizenServices.cSPawnEntry.enterEnteredBy();
      await citizenServices.cSPawnEntry.clickMainTab();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.selectPropertyType();
      await citizenServices.cSPawnEntry.cSPawnEntryMainTab.enterDescription();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.clickDealerTab();
      await citizenServices.cSPawnEntry.cSPawnEntrydealerTab.selectDealerIDNo();
      await citizenServices.module.switchToCSPawnEntry();
      await citizenServices.cSPawnEntry.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
      await citizenServices.cSPawnEntry.clickImageIcon();
      await home.module.switchToAllImageScreen();
      await home.allImagesScreen.clickMobileDeviceCameraButton();
      await home.module.switchToMobileDeviceOTPScreen();
      await home.mobileDeviceOTPScreen.clickSendLinkToMobileButton();
      await home.mobileDeviceOTPScreen.VerifyAtAuthenticaionCodeGeneratedAs6Digit();
    });
  });

  test('CitizenAccountSearchInactiveDataHighlightedInRedColorInsteadOfGreyedOut_69982', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69982', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtCitizenNo();
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verify1011NoRecordFoundAckMsg();
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.refresh();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.clickIncludeInactiveCheckbox();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyAtCitizenNoIsGreyOut();
    });
  });

  test('ServiceRequests_SearchButtonFunctionIsNotWorkingAsExpected_69989', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69989', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.clickSearch();
      await citizenServices.serviceRequests.verifyGridIsnotNull();
      await citizenServices.serviceRequests.clickBack();
      await citizenServices.serviceRequests.selectComplaintDispositionAsChecked();
      await citizenServices.serviceRequests.clickSearch();
      const IfAckExist = await citizenServices.serviceRequests.verifyIfAcknowledgeExist();
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.verifySearchbuttonIsDisplayed(IfAckExist);
      await citizenServices.serviceRequests.verify1011AcknowledgeOccurs(IfAckExist);
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.verifyGridIsnotNull(IfAckExist);
    });
  });

  test('CitizenAccountSearch_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70023', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70023', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.citizenAccountSearch.verifyGridIsNull();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.verifyGridIsNotNull();
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrder(4);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrder(4);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedAscendingOrderCaseSensitive(5);
      await citizenServices.citizenAccountSearch.verifyAtColumnValuesAreSortedDescendingOrderCaseSensitive(5);
    });
  });

  test('AnonymousTips_WhileSortTypeWithDefalutSearchShowsAllDataInGrid_70024', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70024', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Anonymous Tips');
      await citizenServices.module.switchToAnonymousTipsScreen();
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.anonymousTips.verifyGridIsNull();
      await citizenServices.anonymousTips.clickSearch();
      await citizenServices.anonymousTips.verifyGridIsNotNull();
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedAscendingOrder(4);
      await citizenServices.anonymousTips.verifyAtColumnValuesAreSortedDescendingOrder(4);
    });
  });
});

test.describe('Q4CSEnhancement2025', () => {
  test('AddExpirationForCitizenComplaint_69856', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69856', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Complaints');
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.enterAtService();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.selectAtServiceNoInGrid();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.enterExpirationDateAsPast();
      await citizenServices.complaintsEntry.saveNClose();
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickBack();
      await citizenServices.complaintsScreen.clickReset();
      await citizenServices.complaintsScreen.enterAtService();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyNoRecordFoundAcknowledgePopup();
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickIncludeExpiredcheckbox();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyAtServiceNoInGrid();
      await citizenServices.complaintsScreen.selectAtServiceNoInGrid();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.clearExpirationDateNTime();
      await citizenServices.complaintsEntry.enterExpirationDateAsPresent();
      await citizenServices.complaintsEntry.saveNClose();
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickBack();
      await citizenServices.complaintsScreen.clickReset();
      await citizenServices.complaintsScreen.enterAtService();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyNoRecordFoundAcknowledgePopup();
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickIncludeExpiredcheckbox();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyAtServiceNoInGrid();
      await citizenServices.complaintsScreen.selectAtServiceNoInGrid();
      await citizenServices.module.switchToComplaintsEntry();
      await citizenServices.complaintsEntry.clearExpirationDateNTime();
      await citizenServices.complaintsEntry.enterExpirationDateAsFuture();
      await citizenServices.complaintsEntry.saveNClose();
      await citizenServices.module.switchToComplaintScreen();
      await citizenServices.complaintsScreen.clickBack();
      await citizenServices.complaintsScreen.clickReset();
      await citizenServices.complaintsScreen.enterAtService();
      await citizenServices.complaintsScreen.clickSearch();
      await citizenServices.complaintsScreen.verifyAtServiceNoInGrid();
    });
  });

  test('EnterACitizenFlagToAnAddressFromRMS_70149', async ({ loginPage, loaderPage, citizenServices, geo, testData }) => {
    await withTestContext(testData, '70149', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickAddNew();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.verifyAtJuris();
      await citizenServices.citizenFlagEntry.enterAtLastName();
      await citizenServices.citizenFlagEntry.enterAtFirstName();
      await citizenServices.citizenFlagEntry.enterAtMiddleName();
      await citizenServices.citizenFlagEntry.selectSuffix();
      await citizenServices.citizenFlagEntry.enterAtAddress();
      await geo.module.switchToCommonNameHelp();
      await geo.commonNameHelp.SelectAtCommonName();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.verifyAtCityPopulated();
      await citizenServices.citizenFlagEntry.verifyAtStatePopulated();
      await citizenServices.citizenFlagEntry.verifyAtZipPopulated();
      await citizenServices.citizenFlagEntry.enterAtEmail();
      await citizenServices.citizenFlagEntry.selectAtPhoneType();
      await citizenServices.citizenFlagEntry.enterAtPhoneNumber();
      await citizenServices.citizenFlagEntry.save();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenFlagEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    });
  });
});

// ===================== Part 7 (13 tests) =====================

test.describe('Q4Defect2025', () => {
  test('ServiceRequestEntryWhileEnteringInvalidPhoneNumberAllowingToSaveTheScreen_69567', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69567', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Service Requests');
      await citizenServices.module.switchToServiceRequestsScreen();
      await citizenServices.serviceRequests.clickAddNewService();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.selectAtServiceType();
      await citizenServices.serviceRequestsEntry.enterAtLastName();
      await citizenServices.serviceRequestsEntry.enterAtFirstName();
      await citizenServices.serviceRequestsEntry.enterAtAddress();
      await citizenServices.serviceRequestsEntry.switchToServiceDetailsTab();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterAtEnterLocation();
      await citizenServices.serviceRequestsEntry.serviceDetailsTab.enterServiceDetails();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtEmail(0);
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify1014Acknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtEmail(1);
      await citizenServices.serviceRequestsEntry.enterAtPrimaryPhoneNo(0);
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify5037Acknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtPrimaryPhoneNo(1);
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify22505Acknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.clearPrimaryPhoneNo();
      await citizenServices.serviceRequestsEntry.selectAtPhoneType();
      await citizenServices.serviceRequestsEntry.clickSave();
      await citizenServices.serviceRequestsEntry.verify2018Acknowledge();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.enterAtPrimaryPhoneNo(1);
      await citizenServices.serviceRequestsEntry.save();
      await citizenServices.module.switchToServiceRequestsEntry();
      await citizenServices.serviceRequestsEntry.verifyAdditionSuccessfulBottomMessage();
    });
  });

  test('PopupMessageForLocationCheckEntryUpdateStatusNViewHistoryTabIncorrectlyDisplayedOnScreen_69580', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69580', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.enterAtServiceNo();
      await citizenServices.locationCheckSearch.clickSearch();
      await citizenServices.locationCheckSearch.selectAtServiceInGrid();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.switchToUpdateStatusNViewHistoryTab();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.tabUpdateDateNTime();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.tabUpdateBy();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.selectAtStatus();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.enterAtComments();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.clickSave();
      await citizenServices.locationCheckEntry.verify1051UpdatedDataExistsAckPopup();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.switchToUpdateStatusNViewHistoryTab();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.clickAdd();
      await citizenServices.locationCheckEntry.updateStatusNViewHistory.verifyAtCommentsInGrid();
      await citizenServices.module.switchToLocationCheckEntry();
      await citizenServices.locationCheckEntry.save();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    });
  });

  test('LiveVideoLinkDataDisappearedInCitizenIPCamera_69757', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69757', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickManageIPCamera();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.enterAtLastName();
      await citizenServices.citizenIPCamera.enterAtFirstName();
      await citizenServices.citizenIPCamera.enterAtAddress();
      await citizenServices.citizenIPCamera.enterEmail();
      await citizenServices.citizenIPCamera.save();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAdditionSuccessfulBottomMessage();
      await citizenServices.module.verify1070EmailSentAcknowledgePopup();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.clickAddIPCameraLink();
      await citizenServices.module.switchToCameraDetails();
      await citizenServices.cameraDetails.enterAtCameraName();
      await citizenServices.cameraDetails.enterAtURL();
      await citizenServices.cameraDetails.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAtCitizenLastName();
      await citizenServices.citizenIPCamera.verifyAtCitizenFirstName();
      await citizenServices.citizenIPCamera.verifyAtAddress();
      await citizenServices.citizenIPCamera.verifyEmail();
      await citizenServices.citizenIPCamera.verifyAtNameInGrid();
    });
  });

  test('AnonymousTipsEntryAfterAddingDataClickResetbuttonDataNotResetting_69883', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69883', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Anonymous Tips');
      await citizenServices.module.switchToAnonymousTipsScreen();
      await citizenServices.anonymousTips.clickAddNewTip();
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.selectIssueType();
      await citizenServices.anonymousTipsEntry.enterReceivedDateNTimeAsPrevDate();
      await citizenServices.anonymousTipsEntry.enterActivityDateNTimeAsCurrentDate();
      await citizenServices.anonymousTipsEntry.selectConnectionToTheIncident();
      await citizenServices.anonymousTipsEntry.enterLocation();
      await citizenServices.anonymousTipsEntry.clickComplaintDetailsTab();
      await citizenServices.anonymousTipsEntry.enterDetails();
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.clickReset();
      await citizenServices.module.switchToAnonymousTipsEntry();
      await citizenServices.anonymousTipsEntry.verifyIssueTypeIsNotSelected();
      await citizenServices.anonymousTipsEntry.verifyConnectionToTheIncidentIsNotSelected();
      await citizenServices.anonymousTipsEntry.verifyReceivedDateIsBlank();
      await citizenServices.anonymousTipsEntry.verifyActivityDateIsBlank();
      await citizenServices.anonymousTipsEntry.verifyLocationIsBlank();
      await citizenServices.anonymousTipsEntry.clickComplaintDetailsTab();
      await citizenServices.anonymousTipsEntry.verifyDetailsFieldIsBlank();
    });
  });

  test('CitizenFlagSearchSelectExistingRecordWhileClickingOnPrintIconAddressfieldGetsEnabled_69906', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69906', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.selectRandomRecord();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.verifyAddressFieldIsDisabled();
      await citizenServices.citizenFlagEntry.clickPrintIcon();
      await citizenServices.module.switchToCitizenFlagEntry();
      await citizenServices.citizenFlagEntry.verifyAddressFieldIsDisabled();
    });
  });

  test('CitizenFlagSearch_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70036', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70036', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Flag Search');
      await citizenServices.module.switchToCitizenFlagSearch();
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.citizenFlagSearch.verifyGridIsNull();
      await citizenServices.citizenFlagSearch.clickSearch();
      await citizenServices.citizenFlagSearch.verifyGridIsNotNull();
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedAscendingOrderCaseSensitive(4);
      await citizenServices.citizenFlagSearch.verifyAtColumnValuesAreSortedDescendingOrderCaseSensitive(4);
    });
  });

  test('CSCFSCodeMap_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70057', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70057', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS CFS Code Map');
      await citizenServices.module.switchToCSCFSCodeMap();
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSCFSCodeMap.verifyGridIsNull();
      await citizenServices.cSCFSCodeMap.clickSearch();
      await citizenServices.cSCFSCodeMap.verifyGridIsNotNull();
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.cSCFSCodeMap.verifyAtColumnValuesAreSortedDescendingOrder(3);
    });
  });

  test('CSPawnDealer_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70060', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70060', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CS Pawn Dealer');
      await citizenServices.module.switchToCSPawnDealer();
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSPawnDealer.verifyGridIsNull();
      await citizenServices.cSPawnDealer.clickSearchButton();
      await citizenServices.cSPawnDealer.verifyGridIsNotNull();
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.cSPawnDealer.verifyAtColumnValuesAreSortedDescendingOrder(3);
    });
  });

  test('LocationCheckSearch_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70139', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70139', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Location Check Search');
      await citizenServices.module.switchToLocationCheckSearch();
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.locationCheckSearch.verifyGridIsNull();
      await citizenServices.locationCheckSearch.clickSearch();
      await citizenServices.locationCheckSearch.verifyGridIsNotNull();
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(4);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(4);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(5);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(5);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(6);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(6);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(7);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(7);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedAscendingOrder(8);
      await citizenServices.locationCheckSearch.verifyAtColumnValuesAreSortedDescendingOrder(8);
    });
  });

  test('RegistrationDetailsUserActivationWithoutFillingMandatoryDetailsAllowedToSaveScreen_69767', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '69767', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Citizen Account Search');
      await citizenServices.module.switchToCitizenAccountSearch();
      await citizenServices.citizenAccountSearch.enterAtCitizenNo();
      await citizenServices.citizenAccountSearch.clickSearchButton();
      await citizenServices.citizenAccountSearch.selectAtCitizenNoInGrid();
      await citizenServices.module.switchToRegistrationDetails();
      await citizenServices.registrationDetails.clickUserActivationButton();
      await citizenServices.module.switchToUserActivation();
      await citizenServices.userActivation.selectAtRegisterationStatusAsNull();
      await citizenServices.userActivation.clickSave();
      await citizenServices.userActivation.verify30098PleaseSelectTheStatusAck();
      await citizenServices.module.switchToUserActivation();
    });
  });
});

test.describe('Q4CSDefect2025', () => {
  test('CSPPermitRequest_WhileSortTypeWithDefaultSearchShowsAllDataInGrid_70144', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '70144', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Permit Request');
      await citizenServices.module.switchToCSPPermitRequest();
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSPPermitRequest.verifyGridIsNull();
      await citizenServices.cSPPermitRequest.clicksearch();
      await citizenServices.cSPPermitRequest.verifyGridIsNotNull();
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(0);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(0);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(1);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(1);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(2);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(2);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(3);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(4);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(4);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(5);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(5);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedAscendingOrder(6);
      await citizenServices.cSPPermitRequest.verifyAtColumnValuesAreSortedDescendingOrder(6);
    });
  });

  test('CSPAlarmRequestWhileClickingExcelIconGetting2AcknowledgePopup_72103', async ({ loginPage, loaderPage, citizenServices, testData }) => {
    await withTestContext(testData, '72103', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('CSP Alarm Requests');
      await citizenServices.module.switchToCSPAlarmRequests();
      await citizenServices.cSPAlarmRequests.clickExcelIcon();
      // objectIdentification.windowHandle.verifySameScreenNotOpenedTwice('Acknowledge');
      await citizenServices.cSPAlarmRequests.verifyNoDataPresentAckappears();
      await citizenServices.module.switchToCSPAlarmRequests();
    });
  });
});

test.describe('Q4CSFunctional2025', () => {
  test('EnterACitizenLinkforAnAddressfromRMS_72233', async ({ loginPage, loaderPage, citizenServices, geo, testData }) => {
    await withTestContext(testData, '72233', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Citizen Services');
      await loaderPage.navigateToScreen('Live Video Link');
      await citizenServices.module.switchToLiveVideoLink();
      await citizenServices.liveVideoLink.clickManageIPCamera();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAtJuris();
      await citizenServices.citizenIPCamera.enterAtLastName();
      await citizenServices.citizenIPCamera.enterAtFirstName();
      await citizenServices.citizenIPCamera.enterAtMiddleName();
      await citizenServices.citizenIPCamera.selectSuffix();
      await citizenServices.citizenIPCamera.enterAtAddress();
      await geo.module.switchToCommonNameHelp();
      await geo.commonNameHelp.SelectAtCommonName();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyCityIsNotBlank();
      await citizenServices.citizenIPCamera.verifyStateIsNotBlank();
      await citizenServices.citizenIPCamera.verifyZipIsNotBlank();
      await citizenServices.citizenIPCamera.enterAtEmail();
      await citizenServices.citizenIPCamera.enterAtPrimaryPhonetype();
      await citizenServices.citizenIPCamera.enterAtPrimaryPhoneNo();
      await citizenServices.citizenIPCamera.save();
      await citizenServices.module.switchToCitizenIPCamera();
      await citizenServices.citizenIPCamera.verifyAdditionSuccessfulBottomMessage();
    });
  });
});

