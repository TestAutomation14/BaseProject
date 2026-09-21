// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('AI');

test.describe('Q2AIFunctional2024', () => {
    // Automated by :-Kiran  Date :-6/19/2024 Quarter:-2 Sprint:6 Module:-AI
    test('DuplicationFucntionalityBaseOnAIBot_32687', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '32687', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.verifyAtQuestionInGrid()
            await aI.bOTQAManagerEntry.enterAtAnswer()
            await aI.bOTQAManagerEntry.clicksave()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await aI.bOTQAManagerEntry.closeScreen()
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.verify6040QuestionAlreadyExistAckMessage()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.closeScreen()
            await aI.module.switchToBOTQAManagerScreen()
        });
    });

    // Automated by :-Kiran  Date :-6/21/2024 Quarter:-2 Sprint:6 Module:-AI
    test('ToVerifyTheViewExcelFunctionalitiesInBOTQAManagerScreen_32690', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '32690', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickViewExcelLink()
            // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat(ExcelName)
            // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
            // List<String> readCSV = objectIdentification.readCSVFile.ReadCSV(ExcelName)
            // objectIdentification.readCSVFile.verifyAtDataInCSVFile(readCSV, "_question")
            // objectIdentification.readCSVFile.verifyAtDataInCSVFile(readCSV, "_answer")
            // objectIdentification.readCSVFile.verifyAtDataInCSVFile(readCSV, "location")
            // objectIdentification.windowHandle.phoenixMainWindow()
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.verifyAtQuestionInGrid()
            await aI.bOTQAManagerEntry.enterAtAnswer()
            await aI.bOTQAManagerEntry.clicksave()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            // objectIdentification.readPDF.SendLocalDownloadedFileToServerPath(ExcelName)
        });
    });

    // Updated by: bavithra Date:04/28/2025 Quarter:-2 Sprint:4 Module:-AI, test case Id:48858
    // Automated by :-Bavithra Date :-4/17/2025 Quarter:-2 Sprint:4 Module:-AI
    test('ToVerifyViewUsageDetailsFunctionalitiesInAITranscription_35346', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '35346', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('AI Transcription')
            await aI.module.switchToAITranscription()
            await aI.aITranscriptionDashboard.verifyCloseButtonIsDisplayed()
            await aI.aITranscriptionDashboard.clickViewUsageDetails()
            await aI.module.switchToAITranscriptionStatusMsg()
            await aI.aITranscriptionStatusMsg.verifyJurisLabel()
            await aI.aITranscriptionStatusMsg.verifyJurisDropdownIsDisplayed()
            await aI.aITranscriptionStatusMsg.verifyJurisDropdownValueIsSelectedAsPX()
            await aI.aITranscriptionStatusMsg.verifyAtJurisDropdownValues()
            await aI.aITranscriptionStatusMsg.verifyShowSummaryByJurisCheckboxIsDisplayed()
            await aI.aITranscriptionStatusMsg.verifyShowSummaryByJurisLabel()
            await aI.aITranscriptionStatusMsg.verifyCurrentLicenseLabel()
            await aI.aITranscriptionStatusMsg.verifyValidUntilLabel()
            await aI.aITranscriptionStatusMsg.verifyMinutesLicensedTotalLabel()
            await aI.aITranscriptionStatusMsg.verifyAvailableBalanceLabel()
            await aI.aITranscriptionStatusMsg.verifyDatesLabel()
            await aI.aITranscriptionStatusMsg.verifyDatesDropdownValues()
            await aI.aITranscriptionStatusMsg.verifyFromLabel()
            await aI.aITranscriptionStatusMsg.verifyToLabel()
            await aI.aITranscriptionStatusMsg.verifyAtColumnHeaders()
            await aI.module.switchToAITranscriptionStatusMsg()
        });
    });

    // Automated by :-Bavithra Date :-4/18/2025 Quarter:-2 Sprint:4 Module:-AI
    test('verifyAIParameterIntegration_44292', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '44292', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Settings')
            await loaderPage.navigateToScreen('System Parameter')
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.selectAtModule()
            await settings.sysParameter.clickSearchButton()
            await settings.sysParameter.verifyBucketName186Label()
            await settings.sysParameter.enterAtBucketName186()
            await settings.sysParameter.verifyResultBucket187Label()
            await settings.sysParameter.enterAtResultBucket187()
            await settings.sysParameter.verifyAccessKeyID188Label()
            await settings.sysParameter.enterAtAccessKeyID188()
            await settings.sysParameter.verifySecretAccessKey189Label()
            await settings.sysParameter.enterAtSecretAccessKey189()
            await settings.sysParameter.verifyAPIUrl190Label()
            await settings.sysParameter.enterAtAPIUrl190()
            await settings.sysParameter.saveScreen()
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.verifyAtBucketName186()
            await settings.sysParameter.verifyAtResultBucket187()
            await settings.sysParameter.verifyAtAccessKeyID188()
            await settings.sysParameter.verifyAtSecretAccessKey189()
            await settings.sysParameter.verifyAtAPIUrl190()
            await settings.module.switchToSystemParamter()
        });
    });

    // Updated in Test case Id: 58351 Date :-5/28/2025 Quarter:-2 Sprint:5 Module:-AI
    // Automated by :-Bavithra Date :-4/28/2025 Quarter:-2 Sprint:4 Module:-AI
    test('verifyNonAdminRoleFunctionalityForNoLicense_35537', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '35537', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('AI Transcription')
            await aI.module.switchToAITranscription()
            await aI.aITranscriptionDashboard.verifyCancelButtonIsDisplayed()
            await aI.aITranscriptionDashboard.verifySendRequestIsNotShown()
            await aI.aITranscriptionDashboard.clickViewDemoButton()
            await aI.module.switchToPlayVideoWindow()
            await aI.playVideo.verifyPlayButtonIsDisplayed()
            await aI.module.switchToAITranscription()
            await aI.aITranscriptionDashboard.clickCancelButton()
            await aI.aITranscriptionDashboard.verifyViewUsageDetailsIsDisplayed()
        });
    });

    // Automated by :-Bavithra Date :-4/29/2025 Quarter:-2 Sprint:4 Module:-AI
    test('verifySuperAdminRoleFunctionalityForBOTQAndAManager_36137', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '36137', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.verifyAtQuestionInGrid()
            await aI.bOTQAManagerEntry.enterAtAnswer()
            await aI.bOTQAManagerEntry.save()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await aI.bOTQAManagerEntry.closeScreen()
            await aI.module.switchToBOTQAManagerScreen()
        });
    });

    // Automated by :-Bavithra Date :-5/27/2025 Quarter:-2 Sprint:5 Module:-AI
    test('verifyAITranscriptionNonAdminRoleFunctionalitiesActiveLicense_35413', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '35413', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('AI Transcription')
            await aI.module.switchToAITranscription()
            await aI.aITranscriptionDashboard.verifySubmitNewButtonISEnabled()
            await aI.aITranscriptionDashboard.clickSubmitNewButton()
            await aI.aITranscriptionDashboard.verifyAIeRequestWindowExist()
            await aI.aITranscriptionDashboard.verifyViewUsageButtonNotDisplayed()
            await aI.aITranscriptionDashboard.clickClose()
            // objectIdentification.windowHandle.switchToMainWindow()
            await aI.module.switchToAITranscription()
        });
    });

    // Automated by :-Hemamalini Date :-11/25/2025, type:- Functional, Sprint:- Q4 Sprint 11 2025
    test('VerifyAIMugMatchScreenLoadsCorrectlyWithoutDisplayingAnyErrorMessages_72744', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '72744', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('AI Mugmatch')
            await aI.module.switchToAIMugmatch()
            await aI.aIMugmatch.verifyAddToWatchListButtonIsDisabled()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Mug Match')
            await aI.module.switchToAIMugmatch()
        });
    });
});

test.describe('Q2AIDefect2024R2', () => {
    // Automated By :- Mohamed Absar A on 05/26/2025 Type:- Defect Q2 Sprint 5 2025 CRM#186112 
    test('LogInScreenCRM186112_55647', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '55647', async () => {
            await loginPage.loginScreen.clickAtFeatureName(1)
            await loginPage.loginScreen.clickPlayVideoIcon(1)
            await aI.module.switchToPlayVideoWindow()
            await aI.playVideo.verifyAtVideoTitle(1)
            await aI.playVideo.verifyAtVideoTitleNotContains(2)
        });
    });
});

test.describe('AILegacy', () => {
    // Automated by :-Bavithra Date :-5/20/2025 Quarter:-2 Sprint:5 Module:-AI
    test('verifyAIParameterNameFunctionalityIncludeInactiveCheckbox_57961', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '57961', async () => {
            await loginPage.loginScreen.logonUsingTestContext()
            await loaderPage.navigateToScreen('Settings')
            await loaderPage.navigateToScreen('System Parameter')
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.clickParameterNameButton()
            await settings.module.switchToParameterNameSearch()
            await settings.parameterNameSearch.selectAtModule()
            await settings.parameterNameSearch.clickSearch()
            await settings.parameterNameSearch.verifyAtModuleColumnValues()
            await settings.parameterNameSearch.enterAtParameterID()
            await settings.parameterNameSearch.clickSearch()
            await settings.parameterNameSearch.verifyAtParamIDIsBlackColorInGrid()
            // objectIdentification.windowHandle.switchToMainWindow()
            await loaderPage.ClickLogginUserLink()
            await settings.module.switchToPhoenixAuthenticatorWindow()
            await settings.phoenixAuthenticatorWindow.enterAtPassword()
            await settings.phoenixAuthenticatorWindow.clickAcceptButton()
            await personnel.module.switchToUserParamScreen()
            await personnel.personnelEntry.switchToPreferenceTab()
            await personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
            await personnel.module.switchToPersonnelEntry()
            await personnel.personnelEntry.saveNClose()
            // objectIdentification.windowHandle.switchToMainWindow()
            await settings.module.switchToParameterNameSearch()
            await settings.parameterNameSearch.clickAtParamIDInGrid()
            await settings.module.switchToParameterNameEntry()
            await settings.parameterNameEntry.clickInactiveCheckbox()
            await settings.parameterNameEntry.saveAndClose()
            await settings.module.switchToParameterNameSearch()
            await settings.parameterNameSearch.clickIncludeInactiveCheckbox()
            await settings.parameterNameSearch.enterAtParameterID()
            await settings.parameterNameSearch.clickSearch()
            await settings.parameterNameSearch.verifyAtParamIDIsGreyColorInGrid()
            await settings.module.switchToParameterNameSearch()
        });
    });
});

test.describe('AIChecklist2025', () => {
    // Automated by :Hemamalini V, Date :12/16/2025, type:- Checklist, Sprint:- Q4 Sprint 12 2025
    test('BOTQAManagerEntryScreen_74289', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '74289', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.verifyJurisEnabled()
            await aI.bOTQAManagerEntry.verifyAtEnteredByPF()
            await aI.bOTQAManagerEntry.verifyDeleteIconIsNotDisplayed()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickResetIcon()
            await aI.bOTQAManagerEntry.verifyQuestionIsBlank()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.clickShared()
            await aI.bOTQAManagerEntry.clicksave()
            await aI.bOTQAManagerEntry.verify77004EnterAtleastOneQuestion()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clicksave()
            await aI.bOTQAManagerEntry.verify77004EnterAtleastOneQuestion()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.verifyAtQuestionInGrid()
            await aI.bOTQAManagerEntry.clicksave()
            await aI.bOTQAManagerEntry.verify77004EnterAnswer()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.enterAtAnswer()
            await aI.bOTQAManagerEntry.save()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await aI.bOTQAManagerEntry.clickPrintIcon()
            await home.module.switchToSelectReport()
            await home.selectReport.CloseTheScreen()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.saveNClose()
            // objectIdentification.windowHandle.verifyWindowNotExists("BOT Q&A Manager Entry")
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.selectAtQuestionInGrid()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.verifyDeleteIconIsDisplayed()
            await aI.bOTQAManagerEntry.clickInactiveCheckbox()
            await aI.bOTQAManagerEntry.SaveNNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.verifyQuestionIsBlank()
            await aI.bOTQAManagerEntry.closeScreen()
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickIncludeInactiveCheckbox()
            await aI.bOTQAManager.clickSearch()
            await aI.bOTQAManager.verifyAtQuestionInGridIsGreyedOut()
        });
    });
});

test.describe('AIEnhancement2026', () => {
    // Automated by :Hemamalini V, Date :01/19/2026, type:- Enhancement, Sprint:- Q1 Sprint 01 2026
    test('ToVerifySharedCheckboxFunctionalityInAIBOT_76107', async ({ loginPage, loaderPage, popupPage, aI, home, settings, personnel }) => {
        await withTestContext(testData, '76107', async () => {
            await loginPage.loginScreen.logonUsingTestContext()
            // await loaderPage.navigateToModule('Personnel')
            // await loaderPage.navigateToScreen('Personnel Search')
            // await personnel.module.switchToPersonnelSearch()
            // await personnel.personnelSearch.enterAtLoginUserName()
            // await personnel.personnelSearch.clickSearchButton()
            // await personnel.personnelSearch.selectRowInGrid(0)
            // await personnel.module.switchToPersonnelEntry()
            // await personnel.personnelEntry.switchToSecurityTab()
            // await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment()
            // await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton()
            // await personnel.module.switchToPersonnelEntry()
            // await personnel.personnelEntry.saveNClose()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.verifyAtEnteredByPF()
            await aI.bOTQAManagerEntry.enterAtEffectiveFromDateAsCurrentDate()
            await aI.bOTQAManagerEntry.enterAtEffectiveToDateAsFutureDate()
            await aI.bOTQAManagerEntry.clickShared()
            await aI.bOTQAManagerEntry.enterAtQuestion()
            await aI.bOTQAManagerEntry.clickAddButton()
            await aI.bOTQAManagerEntry.enterAtAnswer()
            await aI.bOTQAManagerEntry.saveNClose()
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.selectAtJuris()
            await aI.bOTQAManager.enterAtSearchText()
            await aI.bOTQAManager.clickSearch()
            await aI.bOTQAManager.verifyAtQuestionInGrid()
            await aI.bOTQAManager.verifyAtJurisInGridByQuestion()
            await loaderPage.navigateToModule('Personnel')
            await loaderPage.navigateToScreen('Personnel Search')
            await personnel.module.switchToPersonnelSearch()
            await personnel.personnelSearch.enterAtLoginUserName()
            await personnel.personnelSearch.clickSearchButton()
            await personnel.personnelSearch.selectRowInGrid(0)
            await personnel.module.switchToPersonnelEntry()
            await personnel.personnelEntry.switchToSecurityTab()
            await personnel.personnelEntry.personnelEntrySecurityTab.clickDeleteAtRoleNameInGrid()
            await personnel.personnelEntry.verifyDeletePopupAndClickOk()
            await personnel.personnelEntry.save()
            await personnel.personnelEntry.switchToSecurityTab()
            await personnel.personnelEntry.personnelEntrySecurityTab.verifyAtRoleNameNotInGrid()
            await personnel.module.switchToPersonnelEntry()
            await personnel.personnelEntry.saveNClose()
            await loaderPage.logout()
            await loginPage.loginScreen.logonUsingTestContext()
            await loaderPage.navigateToModule('AI')
            await loaderPage.navigateToScreen('BOT Q&A Manager')
            await aI.module.switchToBOTQAManagerScreen()
            await aI.bOTQAManager.clickAddNew()
            await aI.module.switchtToBOTQAManagerEntry()
            await aI.bOTQAManagerEntry.verifySharedCheckboxIsDisabled()
        });
    });
});