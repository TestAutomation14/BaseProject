// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('CADQAQI');

test.describe('Q2CADQAQIFunctional2024', () => {
    // Automated by Bavithra :- Date :-06/19/2024 Quarter:-2 Sprint:-6
    test('verifyEvaluationSearchScreenAndSelectCallsForQAIcon_30316', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '30316', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickActiveCallViewLink();
            await cADQAQI.module.switchToCallSearch();
            await records.callSearch.ClickResetButton();
            await records.callSearch.EnterToDateAsCurrentDate();
            await records.callSearch.clickSearchButton();
            await records.callSearch.verifyRowCountIsNotZero();
            // Playback.driver.close();
            // objectIdentification.windowHandle.switchToMainWindow();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.verifyScreenIsDisplayed('CAD QA Eval. Form');
            await loaderPage.verifyScreenIsDisplayed('Evaluation Search');
            await loaderPage.verifyScreenIsDisplayed('Random List History');
            await loaderPage.verifyScreenIsDisplayed('Select Calls for QA');
            await loaderPage.navigateToScreen('Select Calls for QA');
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.clickPrintIcon();
            await home.module.switchToSelectReport();
            await cADQAQI.selectCallForQA.VerifySelectReportScreenOpened();
            await home.selectReport.CloseTheScreen();
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.clickExcelIcon();
            await cADQAQI.selectCallForQA.verifyDocumentDownloaded();
            await cADQAQI.module.switchToSelectCallsForQA();
        });
    });

    // Automated by Bavithra :- Date :-06/19/2024 Quarter:-2 Sprint:-6
    test('verifyFinalizationTabFunctionalitiesInEvaluationEntry_30378', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '30378', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.clickSeeSupervisorCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoLookUpIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoIsMandatory();
            await cADQAQI.evaluationEntry.finalizationTab.selectPFNo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluatorApprovalSignCheckbox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifySignIsUploded();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.save();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyUpdateSuccessful();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluatorApprovalSignCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifySignIsRemoved();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.save();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.closeScreen();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickAddNew();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.selectAtServiceType();
            await cADQAQI.evaluationEntry.enterAtCallNo();
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF();
            await cADQAQI.evaluationEntry.verifyAlreadyExistCallAndPFAckMsg();
            await cADQAQI.module.switchToEvaluationEntry();
        });
    });

    // Automated by Bavithra :- Date :-06/20/2024 Quarter:-2 Sprint:-6
    test('verifyCADQAQIEvaluationFormFunctionalities_30400', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '30400', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('CAD QA Eval. Form');
            await cADQAQI.module.switchToCADQAEvalForm();
            await cADQAQI.cADQAEvalForm.selectAtTrainingType();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtTrainingTypeInGrid();
            await cADQAQI.cADQAEvalForm.clickIncludeInactiveCheckbox();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtFormNameIsGreyedOutInGrid(0);
            await cADQAQI.cADQAEvalForm.clickIncludeInactiveCheckbox();
            await cADQAQI.cADQAEvalForm.clickSampleCheckbox();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyFormNameInGrid();
            await cADQAQI.cADQAEvalForm.clickAddNewEvaluationButton();
            await cADQAQI.cADQAEvalForm.verifyEvaluationFormEntryOpens();
            await cADQAQI.module.switchToCADQAEvalForm();
        });
    });

    // Automated by Bavithra :- Date :-06/21/2024 Quarter:-2 Sprint:-6
    test('verifyRandomListHistoryScreenFunctionalities_30419', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '30419', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Random List History');
            await cADQAQI.module.switchToRandomListEntry();
            await cADQAQI.randomListHistory.selectAtServiceType();
            await cADQAQI.randomListHistory.clickSearch();
            await cADQAQI.randomListHistory.verifyAtServiceTypeInGrid();
            await cADQAQI.randomListHistory.clickRefresh();
            await cADQAQI.randomListHistory.enterAtFromDateAndTime();
            await cADQAQI.randomListHistory.enterAtToDateAndTime();
            await cADQAQI.randomListHistory.clickSearch();
            await cADQAQI.randomListHistory.verifyDatesInGrid();
            await cADQAQI.randomListHistory.clickRefresh();
            await cADQAQI.randomListHistory.enterAtListPreparedBy();
            await cADQAQI.randomListHistory.clickSearch();
            await cADQAQI.randomListHistory.selectAtRandomEvaluationListInGrid();
            await cADQAQI.module.switchToRandomListEntryWindow();
            await cADQAQI.randomListHistoryScreen.verifyAtListPreparedBy();
            await cADQAQI.randomListHistoryScreen.closeScreen();
            await cADQAQI.module.switchToRandomListEntry();
            await cADQAQI.randomListHistory.clickAddNew();
            await cADQAQI.module.switchToSelectCallsForQAScreen();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtToDateAndTime();
            await cADQAQI.selectCallForQA.enterAtNoOfCalls();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.enterAtDescription();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.module.switchToRandomListEntryWindow();
            const evaluationListNo = await cADQAQI.randomListHistoryScreen.getEvaluationListNo();
            await cADQAQI.randomListHistoryScreen.verifyAtRowCountInGrid();
            await cADQAQI.randomListHistoryScreen.closeScreen();
            await cADQAQI.module.switchToSelectCallsForQAScreen();
            await cADQAQI.selectCallForQA.closeScreen();
            await cADQAQI.module.switchToRandomListEntry();
            await cADQAQI.randomListHistory.clickRefresh();
            await cADQAQI.randomListHistory.clickSearch();
            await cADQAQI.randomListHistory.verifyAtEvaluationListNoInGrid(evaluationListNo);
            await cADQAQI.module.switchToRandomListEntry();
        });
    });

    // Automated by Bavithra :- Date :-06/26/2024 Quarter:-2 Sprint:-6
    test('verifyEvaluationEntryScreenFunctionalities_30445', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '30445', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickAddNew();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.selectAtServiceType();
            await cADQAQI.evaluationEntry.enterAtCallNo();
            await cADQAQI.evaluationEntry.verifyLocationLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyCFSCodeLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtCFSCodeValue();
            await cADQAQI.evaluationEntry.verifyDispositionLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyPriorityLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtPriorityValue();
            await cADQAQI.evaluationEntry.verifyReportedTimeLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtReportedTimeValue();
            await cADQAQI.evaluationEntry.verifyStackedTimeLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtStackedTimeValue();
            await cADQAQI.evaluationEntry.verifyDispatchTimeLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtDispatchTimeValue();
            await cADQAQI.evaluationEntry.verifyDayOfWeekLabelIsDispalyed();
            await cADQAQI.evaluationEntry.verifyAtDayOfWeekValue();
            await cADQAQI.evaluationEntry.verifyStackedTimeDurationLabelIsDispalyed();
            await cADQAQI.evaluationEntry.verifyAtStackedTimeDurationValue();
            await cADQAQI.evaluationEntry.verifyDispatchTimeDurationLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtTheTimeOfTheCallReceivedLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyNoOfActiveCallsLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtActiveCallsValue();
            await cADQAQI.evaluationEntry.verifyNoOfStackedCallsLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtNoOfStackedCallsValue();
            await cADQAQI.evaluationEntry.verifyNoOfLawUnitsODLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtNoOfLawUnitsODValue();
            await cADQAQI.evaluationEntry.verifyShiftDurationElapsedLabelIsDispalyed();
            await cADQAQI.evaluationEntry.verifyActiveCallViewLinkIsDisplayed();
            await cADQAQI.evaluationEntry.verifyStackedCallViewLinkIsDisplayed();
            await cADQAQI.evaluationEntry.verifyDateAsCurrentDate();
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF();
            await cADQAQI.evaluationEntry.verifyEvaluationForPFInfoIconIsDisplayed();
            await cADQAQI.evaluationEntry.selectAtEvaluationForm();
            await cADQAQI.evaluationEntry.clickEvaluationTab();
            await cADQAQI.evaluationEntry.evaluationTab.switchToCategoryFrame();
            const columnHeaders = await cADQAQI.evaluationEntry.evaluationTab.getColumnHeadersInEvaluationForm();
            await cADQAQI.evaluationEntry.evaluationTab.verifyColumnHeadersInEvaluationForm(columnHeaders);
            await cADQAQI.evaluationEntry.evaluationTab.clickYesColumnInEvaluationForm();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyEvaluationLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyCompletedLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyScoreLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtScoreValue();
            await cADQAQI.evaluationEntry.verifyPercentageLabelIsDisplayed();
            await cADQAQI.evaluationEntry.verifyAtPercentageValue();
            await cADQAQI.evaluationEntry.closeScreen();
            await cADQAQI.module.switchToEvaluationSearch();
        });
    });

    // Automated by Bavithra :- Date :-06/27/2024 Quarter:-2 Sprint:-6
    test('verifyEvaluationEntryTabFunctionalities_33192', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '33192', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickEvaluationTab();
            await cADQAQI.evaluationEntry.evaluationTab.clickRatingInstruction();
            await cADQAQI.module.switchToRatingInstruction();
            await cADQAQI.ratingInstruction.verifyRatingInstructionIsDisplayed();
            await cADQAQI.ratingInstruction.closeScreen();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickEvaluationTab();
            await cADQAQI.evaluationEntry.evaluationTab.switchToCategoryFrame();
            await cADQAQI.evaluationEntry.evaluationTab.verifyScoreValueIsDisplayed();
            await cADQAQI.evaluationEntry.evaluationTab.verifyMaxValueIsDisplayed();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickNarrativeTab();
            await cADQAQI.evaluationEntry.narrativeTab.selectAtTemplate();
            await cADQAQI.evaluationEntry.narrativeTab.clickLoadButton();
            await cADQAQI.evaluationEntry.narrativeTab.verifyAtTextInRichTextEdit();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickNarrativeTab();
            await cADQAQI.evaluationEntry.narrativeTab.clickIntenalSave();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickNarrativeTab();
            await cADQAQI.evaluationEntry.narrativeTab.verifyAtTextInRichTextEdit();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.save();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.clickSeeSupervisorCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoLookUpIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoIsMandatory();
            await cADQAQI.evaluationEntry.finalizationTab.selectPFNo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoLookUpIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.clickExceedsStandardsCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.clickRecommendRemedialTrainingCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyEvaluatorApprovalLabelIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.enterAtComments();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.save();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyAtComments();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluatorApprovalSignCheckbox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifySignIsUploded();
            await cADQAQI.evaluationEntry.finalizationTab.clickEraseIcon();
            await cADQAQI.evaluationEntry.finalizationTab.verifySignIsRemoved();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluatorApprovalSignCheckbox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifySignIsUploded();
            await cADQAQI.evaluationEntry.finalizationTab.clickForwardToEvaluateeReviewCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluateeReviewSignCheckBox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.save();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyUpdateSuccessful();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            const columnHeadersScore = await cADQAQI.evaluationEntry.finalizationTab.getColumnHeadersInScoreSummary();
            await cADQAQI.evaluationEntry.finalizationTab.verifyScoreSummaryFieldIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.verifyColumnHeadersInScoreSummary(columnHeadersScore);
            await cADQAQI.evaluationEntry.finalizationTab.verifyOverallScoreLabelIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.verifyAtOverallScorePercentage();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.module.switchToEvaluationEntry();
        });
    });

    // Automated By : - Abinaya M on 06/19/2024
    // Sprint :- : Quarter 2 : Sprint 6
    // Type of Test case : - Functional
    test('ToVerifyTheFinalizationTabFunctionalitiesInEvaluationEntryScreenUnderCADQAQIModule_32744', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '32744', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.verifyScreenIsDisplayed('CAD QA Eval. Form');
            await loaderPage.verifyScreenIsDisplayed('Evaluation Search');
            await loaderPage.verifyScreenIsDisplayed('Random List History');
            await loaderPage.verifyScreenIsDisplayed('Select Calls for QA');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.clickExceedsStandardsCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyExceedsStandardsCheckboxIsChecked();
            await cADQAQI.evaluationEntry.finalizationTab.clickRecommendRemedialTrainingCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyRecommendRemedialTrainingCheckboxIsChecked();
            await cADQAQI.evaluationEntry.finalizationTab.clickSeeSupervisorCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifySeeSupervisorCheckboxIsChecked();
            await cADQAQI.evaluationEntry.finalizationTab.verifyPFNoLookUpIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.selectPFNo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyEvaluatorApprovalIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.verifyCommentsIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluatorApprovalSignCheckbox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyEvaluatorApprovalSignatureIsDisplayed();
            await cADQAQI.evaluationEntry.finalizationTab.clickForwardToEvaluateeReviewCheckbox();
            await cADQAQI.evaluationEntry.finalizationTab.verifyForwardToEvaluateeReviewCheckboxIsChecked();
            await cADQAQI.evaluationEntry.finalizationTab.verifyEvaluateeReviewSignCheckBoxIsEnabled();
            await cADQAQI.evaluationEntry.finalizationTab.clickEvaluateeReviewSignCheckbox();
            await settings.module.switchToPhoenixAuthenticatorWindow();
            await settings.phoenixAuthenticatorWindow.enterAtPassword();
            await settings.phoenixAuthenticatorWindow.clickAcceptButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyEvaluateeReviewSignatureIsDisplayed();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.saveScreen();
            await cADQAQI.evaluationEntry.verifyUpdateSuccessful();
            await cADQAQI.evaluationEntry.verifyApprovalTabIsDisplayed();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyScoreSummaryFieldIsDisplayed();
        });
    });

    // Automated By : - Abinaya M on 06/19/2024
    // Sprint :- : Quarter 2 : Sprint 6
    // Type of Test case : - Functional
    test('ToVerifyTheApprovalTabFunctionalitiesInEvaluationEntryScreen_32802', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '32802', async () => {
            await loginPage.loginScreen.logonForOtherPFAndOtherDB(1, 1);
            // loader.navigateToModule("Settings");
            // loader.navigateToScreen("System Parameter");
            // settings.switchToSystemParamter();
            // settings.sysParameter.clickApprovalParameterButton();
            // settings.switchToApprovalParameterWindow();
            // settings.approvalParameter.selectAtApprovalProcess();
            // settings.approvalParameter.setEnableApprovalProcessAsTrue();
            // settings.approvalParameter.saveScreen();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToApprovalTab();
            await cADQAQI.evaluationEntry.approvalTab.verifyActionsListedInNewAction();
            await cADQAQI.evaluationEntry.approvalTab.selectAtNewAction();
            await cADQAQI.evaluationEntry.approvalTab.tabOutDateAndTime();
            await cADQAQI.evaluationEntry.approvalTab.clickInternalSave();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.saveScreen();
            await cADQAQI.evaluationEntry.verifyApprovalStatusAsSubmittedAndDisplayInGreenColor();
            await cADQAQI.evaluationEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await loaderPage.logout();
            await loginPage.loginScreen.logonForOtherPFAndOtherDB(2, 1);
            await home.module.switchToMyHomeScreen();
            await home.myHome.SwitchToMyReportApprovalTab();
            await home.myHome.myReportsTab.ClickSearchButton();
            await home.myHome.myReportsTab.selectRowByAtRefNo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToApprovalTab();
            await cADQAQI.evaluationEntry.approvalTab.selectActionAsApprove();
            await cADQAQI.evaluationEntry.approvalTab.tabOutDateAndTime();
            await cADQAQI.evaluationEntry.approvalTab.clickInternalSave();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.saveScreen();
            await cADQAQI.evaluationEntry.verifyApprovalStatusAsApprovedndDisplayInGreenColor();
        });
    });

    // Automated By : - Abinaya M on 06/20/2024
    // Sprint :- : Quarter 2 : Sprint 6
    // Type of Test case : - Functional
    test('ToVerifyTheNarrativeTabFunctionalitiesInEvaluationEntryScreen_32751', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '32751', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToNarrativeTab();
            await cADQAQI.evaluationEntry.narrativeTab.selectAtTemplate();
            await cADQAQI.evaluationEntry.narrativeTab.clickLoadButton();
            await cADQAQI.evaluationEntry.narrativeTab.verifyAtTextInRichTextEdit();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToNarrativeTab();
            await cADQAQI.evaluationEntry.narrativeTab.clickIntenalSave();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.saveScreen();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToNarrativeTabAfterSave();
            await cADQAQI.evaluationEntry.narrativeTab.verifyAtTextInRichTextEdit();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.switchToNarrativeTabAfterSave();
            await cADQAQI.evaluationEntry.narrativeTab.clickAddNewButton();
            await home.module.switchToTextMgmtScreen();
            await home.textMgmt.EnterAtTextName();
            await home.textMgmt.clickDetailTab();
            await home.textMgmt.detailsTab.EnterSummaryRichTextAsTestAutomation();
            await home.module.switchToTextMgmtScreen();
            await home.textMgmt.SaveAndCloseScreen();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickResetIcon();
            await cADQAQI.evaluationEntry.switchToNarrativeTabAfterSave();
            await cADQAQI.evaluationEntry.narrativeTab.clickTemplate();
            await cADQAQI.evaluationEntry.narrativeTab.verifyAtTemplate(1);
        });
    });

    // Automated By : - Abinaya M on 06/20/2024
    // Sprint :- : Quarter 2 : Sprint 6
    // Type of Test case : - Functional
    test('ToVerifyTheCADQAEvaluationTabFunctionalitiesInPersonnelEntryScreen_32720', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '32720', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('Personnel');
            await loaderPage.navigateToScreen('Personnel Search');
            await personnel.module.switchToPersonnelSearch();
            await personnel.personnelSearch.enterAtPF();
            await personnel.personnelSearch.clickSearchButton();
            await personnel.personnelSearch.selectRowAtPFCode();
            await personnel.module.switchToPersonnelEntry();
            await personnel.personnelEntry.switchToWorkRecordTab();
            await personnel.personnelEntry.personnelEntryWorkRecordTab.verifyCADQAEvaluationsTabIsDisplayed();
            await personnel.personnelEntry.personnelEntryWorkRecordTab.clickCADQAEvaluationsTab();
            await personnel.personnelEntry.personnelEntryWorkRecordTab.cADQAEvaluationsTab.verifyAtEvaluationFormInGrid();
            await personnel.personnelEntry.personnelEntryWorkRecordTab.cADQAEvaluationsTab.selectAtEvaluationFormInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyAtEvaluationForPF();
        });
    });

    // Automated By : - Bavithra on 06/23/2025
    // Sprint :- : Quarter 2 : Sprint 6
    test('verifyEvaluationSearchScreenFunctionalities_35534', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '35534', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.selectAtServiceType();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtServiceTypeColumnValues();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtCADQANoInGrid();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.selectAtEvaluationForm();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtEvaluationFormColumnValues();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtEvaluationForPF();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtEvaluationForColumnValues();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtEvaluationByPF();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtEvaluationByColumnValues();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.clickSeeSupervisorCheckbox();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifySeeSupervisorCheckboxIsChecked();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.clickExceedStandardsCheckbox();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyExceedsStandardsCheckboxIsChecked();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.clickRecommendedRemedialTraingCheckbox();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyRecommendRemedialTrainingCheckboxIsChecked();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtComments();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickFinalizationTab();
            await cADQAQI.evaluationEntry.finalizationTab.verifyAtComments();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtOverallScoreFrom();
            await cADQAQI.evaluationSearch.enterAtOverallScoreTo();
            await cADQAQI.evaluationSearch.clickSearch();
            // cADQAQI.evaluationSearch.verifyAtScore();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtCallNo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtCallNoInGrid();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.selectAtCFSCode();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtCFSColumnValues();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.entetAtPrioriry();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyAtPriorityValue();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            await cADQAQI.evaluationSearch.enterAtReceivedSource();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickCallInfoIcon();
            await records.module.switchToCallEntry();
            await records.callEntry.verifyAtReceivedSource();
            await records.callEntry.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.clickReset();
            // cADQAQI.evaluationSearch.enterAtCADDisposition();
            // cADQAQI.evaluationSearch.clickSearch();
            // cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            // cADQAQI.switchToEvaluationEntry();
            // cADQAQI.evaluationSearch.verifyAtDisposition();
        });
    });
});

test.describe('CADQAQIEntryScreen', () => {
    test('EvaluationSearchEntrySmoke', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, 'EvaluationEntry', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickAddNew();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.selectAtServiceType();
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF();
            await cADQAQI.evaluationEntry.selectAtEvaluationForm();
        });
    });
});

test.describe('Q2CADQAQIDefect2025', () => {
    // Automated By : - Bavithra on 06/23/2025
    // Sprint :- : Quarter 2 : Sprint 6
    test('verifyEvaluationEntryScreenNotThrowsJSError_45353', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '45353', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickAddNew();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.selectAtServiceType();
            await cADQAQI.evaluationEntry.enterAtCallNo();
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF();
            await cADQAQI.evaluationEntry.selectAtEvaluationForm();
            await cADQAQI.evaluationEntry.saveScreen();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyAdditionSuccessful();
            await cADQAQI.module.switchToEvaluationEntry();
        });
    });

    // Automated By : - chandrasekar.v on 11/28/2025
    // Sprint :- : Quarter 4 : Sprint 11
    // Type of Test case : - Defect 2025
    // Enabling Add New Evaluation Button in QA Eval. Form Search Screen
    test('CRM197853_PoliceRMSTRAINQAFormEvaluationFormIntegrationAssistance_72780', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72780', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('Roles');
            await settings.module.switchToRoles();
            await settings.roles.clickAddNew();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.enterAtRoleName();
            await settings.rolesEntry.enterAtRoleDescription();
            await settings.rolesEntry.clickSelectAllScheckBox();
            await settings.rolesEntry.save();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.close();
            await settings.module.switchToRoles();
            await settings.roles.enterAtRoleName();
            await settings.roles.clickSearch();
            await settings.roles.selectRowAtRoleName();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.enterAtScreenName(1);
            await settings.rolesEntry.clickSearchButton();
            await settings.rolesEntry.clickFTOEditPermissionButton();
            await settings.module.switchToRolesEntryEditScreen();
            await settings.rolesEntry.clickSelectAllScheckBox();
            await settings.rolesEntry.save();
            await settings.rolesEntry.close();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.clearScreenName();
            await settings.rolesEntry.enterAtScreenName(2);
            await settings.rolesEntry.clickSearchButton();
            await settings.rolesEntry.clickCADQAQIEditPermissionButton();
            await settings.module.switchToRolesEntryEditScreen();
            await settings.rolesEntry.clickSelectAllScheckBox();
            await settings.rolesEntry.save();
            await settings.rolesEntry.close();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.clearScreenName();
            await settings.rolesEntry.enterAtScreenID(1);
            await settings.rolesEntry.clickSearchButton();
            await settings.rolesEntry.verifyPermissionsAreDisabled();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.clearScreenID();
            await settings.rolesEntry.enterAtScreenID(2);
            await settings.rolesEntry.clickSearchButton();
            await settings.rolesEntry.clickSettingsEditPermission();
            await settings.module.switchToRolesEntryEditScreen();
            await settings.rolesEntry.clickSelectAllScheckBox();
            await settings.rolesEntry.save();
            await settings.module.switchToRolesEntryEditScreen();
            await settings.rolesEntry.verifyAddCheckBoxIsCheckedInGrid();
            await settings.rolesEntry.close();
            await loaderPage.navigateToModule('Personnel');
            await loaderPage.navigateToScreen('Personnel Entry');
            await personnel.module.switchToPersonnelEntry();
            await personnel.personnelEntry.enterAtPFCode();
            await personnel.personnelEntry.enterAtFirstName();
            await personnel.personnelEntry.enterAtLastName();
            await personnel.personnelEntry.switchToSecurityTab();
            await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName();
            await personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword();
            await personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword();
            await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment();
            await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton();
            await personnel.module.switchToPersonnelEntry();
            await personnel.personnelEntry.save();
            await loaderPage.logout();
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('QA Eval.Form Search');
            await settings.module.switchToQAEvalFormSearch();
            await cADQAQI.cADQAEvalForm.clickAddNewEvaluationButton();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.qAEvaluationEntry.selectAtFormType();
            await cADQAQI.qAEvaluationEntry.enterAtFormName();
            await cADQAQI.qAEvaluationEntry.enterAtDescription();
            await cADQAQI.qAEvaluationEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });

    // Automated By : - chandrasekar.v on 11/28/2025
    // Sprint :- : Quarter 4 : Sprint 11
    // Type of Test case : - Defect 2025
    // Disabling Add New Evaluation Button in QA Eval. Form Search Screen
    test('CRM197853_PoliceRMSTRAINQAFormEvaluationFormIntegrationAssistance_72780A', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72780A', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('Roles');
            await settings.module.switchToRoles();
            await settings.roles.enterAtRoleName();
            await settings.roles.clickSearch();
            await settings.roles.selectRowAtRoleName();
            await settings.module.switchToRolesEntry();
            await settings.rolesEntry.enterAtScreenID(1);
            await settings.rolesEntry.clickSearchButton();
            await settings.rolesEntry.verifyPermissionsAreDisabled();
            await settings.rolesEntry.clickSettingsEditPermission();
            await settings.module.switchToRolesEntryEditScreen();
            await settings.rolesEntry.verifyAddCheckBoxIsUnCheckedInGrid();
            await loaderPage.logout();
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('CAD QA Eval. Form');
            await cADQAQI.module.switchToCADQAEvalForm();
            await cADQAQI.cADQAEvalForm.verifyAddNewEvaluationButtonIsNotDisplayed();
            await cADQAQI.module.switchToCADQAEvalForm();
        });
    });

    // Automated by :-Hemamalini V on 11/19/2025, Type: Defect, CRM# 196943, Sprint: Q4 sprint 11 2025
    // Updated by Hemamalini based on testcase 72467, Sprint: Q4 sprint 11 2025
    test('ToVerifyEvaluationForPFDropdownFunctionalitiesBasedOnCallInEvaluationEntry_72463', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72463', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickAddNew();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.selectAtServiceType();
            await cADQAQI.evaluationEntry.enterAtCallNo();
            const evalForPFDropdownVals = await cADQAQI.evaluationEntry.getEvaluationForPFDropdownValues();
            await cADQAQI.evaluationEntry.verifyEvaluationForPFDropdownValues(0);
            await cADQAQI.evaluationEntry.verifyEvaluationForPFDropdownValues(1);
            await cADQAQI.evaluationEntry.verifyEvaluationForPFDropdownValues(2);
            await cADQAQI.evaluationEntry.verifyEvaluationForPFDropdownValues(3);
            await cADQAQI.evaluationEntry.verifyEvaluationForPFWithSameCallTakerNDispatcher();
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF(0);
            await cADQAQI.evaluationEntry.verifyAtEvaluationForPF(0);
            await cADQAQI.evaluationEntry.selectAtEvaluationForPF(1);
            await cADQAQI.evaluationEntry.verifyAtEvaluationForPF(1);
            await cADQAQI.evaluationEntry.selectAtEvaluationForm(0);
            await cADQAQI.evaluationEntry.verifyAtEvaluationForm(0);
            await cADQAQI.evaluationEntry.selectAtEvaluationForm(1);
            await cADQAQI.evaluationEntry.verifyAtEvaluationForm(1);
            await cADQAQI.evaluationEntry.verifyEvaluationForPFDropdownValuesAsSame(evalForPFDropdownVals);
            await cADQAQI.evaluationEntry.save();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });
});

test.describe('Q2PBCADQAQI2025', () => {
    // Automated by :-Kiran Date :-06/23/2025 Quarter:-2 Sprint-6 Module:-Personnel Type:-PB SetUp:-1.175
    test('ToVerifyThePerf_Eval_FormFunctionalitiesUnderPersonnelModule_55874', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '55874', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Personnel');
            await loaderPage.navigateToScreen('Perf. Eval. Form');
            await cADQAQI.module.switchPerfEvalForm();
            await cADQAQI.cADQAEvalForm.selectAtTrainingType();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtTrainingTypeInGrid();
            // objectIdentification.windowHandle.switchToMainWindow();
            await loaderPage.ReLoadScreen('Perf. Eval. Form');
            await cADQAQI.module.switchPerfEvalForm();
            await cADQAQI.cADQAEvalForm.clickIncludeInactiveCheckbox();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtFormNameIsGreyedOutInGrid(1);
            // objectIdentification.windowHandle.switchToMainWindow();
            await loaderPage.ReLoadScreen('Perf. Eval. Form');
            await cADQAQI.module.switchPerfEvalForm();
            await cADQAQI.cADQAEvalForm.clickAddNewEvaluationButton();
            await cADQAQI.cADQAEvalForm.verifyPerformanceEvaluationEntryOpens();
            await cADQAQI.module.switchPerfEvalForm();
            await cADQAQI.cADQAEvalForm.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.VerifySelectReportScreenOpened();
            await cADQAQI.module.switchPerfEvalForm();
            await cADQAQI.cADQAEvalForm.clickExcelIcon();
            // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx');
        });
    });
});

test.describe('Q3CADQAQIChecklist', () => {
    // Automated by :-Bavithra Date :-08/22/2025 Quarter:-3 Sprint-8
    test('verifyAbleToCreateEvaluationEntryFromRandomListHistory_63273', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '63273', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Select Calls for QA');
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtToDateAndTime();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.enterAtDescription();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.module.switchToRandomListEntryWindow();
            await cADQAQI.randomListHistoryScreen.closeScreen();
            await loaderPage.navigateToScreen('Random List History');
            await cADQAQI.module.switchToRandomListEntry();
            await cADQAQI.randomListHistory.clickSearch();
            await cADQAQI.randomListHistory.verifyAtDescriptionInGrid();
            await cADQAQI.module.switchToRandomListEntry();
        });
    });

    // Automated by :-Bavithra Date :-08/22/2025 Quarter:-3 Sprint-8
    test('verifySelectCallsQASearchListDate_63274', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '63274', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Select Calls for QA');
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtToDateAndTime();
            await cADQAQI.selectCallForQA.clickSearch();
            await cADQAQI.selectCallForQA.verifyRptDateAreBetweenFromAndToDate();
        });
    });
});

test.describe('Q4CADQAQILegacy2025', () => {
    // Automated by :-Hemamalini V on 11/18/2025, Type:Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyShowRandomCallsLinkFunctionalitiesBasedOnNoOfCallsFieldInSelectCallsForQAScreen_72362', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72362', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Select Calls for QA');
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtToDateAndTime();
            await cADQAQI.selectCallForQA.enterAtNoOfCalls();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.verifyDateFromToAsCurrentDate();
            await cADQAQI.selectCallForQA.verifycallCountOr();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.selectCallForQA.verify6071DescriptionIsMandatoryAck();
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.enterAtDescription();
            await cADQAQI.selectCallForQA.clickCancelButton();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.enterAtDescription();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.module.switchToRandomListEntryWindow();
            await cADQAQI.randomListHistoryScreen.verifyAtRowCountInGrid();
            await cADQAQI.randomListHistoryScreen.closeScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
        });
    });

    // Automated by :-Hemamalini V on 11/18/2025, Type:Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyValidationsInSelectCallsForQAScreen_72382', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72382', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Select Calls for QA');
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.clickSearch();
            await cADQAQI.selectCallForQA.verify6071ServicetypeIsMandatoryAck();
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.verify6071ServicetypeIsMandatoryAck();
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.clickSearch();
            await cADQAQI.selectCallForQA.verify6071dateNTimeFormIsMandatoryAck();
            await cADQAQI.module.switchToSelectCallsForQA();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtToDateAndTime1();
            await cADQAQI.selectCallForQA.clickSearch();
            await cADQAQI.selectCallForQA.verifyClosedDateIsInGivenRange();
        });
    });

    // Automated by :-Hemamalini V on 11/18/2025, Type:Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyEvaluationListFunctionalitiesInRandomListHistoryScreen_72386', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72386', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Random List History');
            await cADQAQI.module.switchToRandomListEntry();
            await cADQAQI.randomListHistory.clickAddNew();
            await cADQAQI.module.switchToSelectCallsForQAScreen();
            await cADQAQI.selectCallForQA.selectAtServiceType();
            await cADQAQI.selectCallForQA.enterAtFromDateAndTime();
            await cADQAQI.selectCallForQA.enterAtNoOfCalls();
            await cADQAQI.selectCallForQA.clickShowRandomCalls();
            await cADQAQI.selectCallForQA.verifyDateFromTo();
            await cADQAQI.selectCallForQA.verifycallCountOr();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.selectCallForQA.verify6071DescriptionIsMandatoryAck();
            await cADQAQI.module.switchToSelectCallsForQAScreen();
            await cADQAQI.selectCallForQA.enterAtDescription();
            await cADQAQI.selectCallForQA.clickAcceptButton();
            await cADQAQI.module.switchToRandomListEntryWindow();
            await cADQAQI.randomListHistoryScreen.verifyEvaluationListNoIsNotBlank();
            await cADQAQI.randomListHistoryScreen.verifyAtRowCountInGrid();
        });
    });

    // Automated by :-Hemamalini V on 11/20/2025, Type: Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyCallReceiptIconFunctionalitiesBasedOnEvaluationEntry_72531', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72531', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            const callNo = await cADQAQI.evaluationEntry.getCallNo();
            const locationVal = await cADQAQI.evaluationEntry.getLocationValue();
            const cfsCodeVal = await cADQAQI.evaluationEntry.getCFSCodeValue();
            const dispValue = await cADQAQI.evaluationEntry.getDispositionValue();
            const reportedTime = await cADQAQI.evaluationEntry.getReportedTime();
            const stackedTime = await cADQAQI.evaluationEntry.getStackedTime();
            const dispatchTime = await cADQAQI.evaluationEntry.getDispatchTime();
            const dayOfWeek = await cADQAQI.evaluationEntry.getDayOfWeek();
            const durOfStackedTime = await cADQAQI.evaluationEntry.getDurationOfStackedTime();
            const durOfDispatchTime = await cADQAQI.evaluationEntry.getDurationOfDispatchTime();
            const noOfActiveCalls = await cADQAQI.evaluationEntry.getNoOfActiveCalls();
            const noOfStackedCalls = await cADQAQI.evaluationEntry.getNoOfStackedCalls();
            const noOfLawUnits = await cADQAQI.evaluationEntry.getNoOfLawUnits();
            const shiftDurationElapsed = await cADQAQI.evaluationEntry.getShiftDurationElapsed();
            await cADQAQI.evaluationEntry.clickCallInfoIcon();
            await records.module.switchToCallEntry();
            const caseNo = await records.callEntry.readCaseNo();
            await records.callEntry.closeScreen();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickCallReceiptIcon();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.verifyCallNoAsInEvaluationEntry(callNo);
            await cADQAQI.evaluationCallReceipt.verifyCaseNoAsInEvaluationEntry(caseNo);
            await cADQAQI.evaluationCallReceipt.verifyLocationAsInEvaluationEntry(locationVal);
            await cADQAQI.evaluationCallReceipt.verifyCFSCodeAsInEvaluationEntry(cfsCodeVal);
            await cADQAQI.evaluationCallReceipt.verifyDispositionAsInEvaluationEntry(dispValue);
            await cADQAQI.evaluationCallReceipt.verifyCallTakerAsInEvaluationEntry();
            await cADQAQI.evaluationCallReceipt.verifyDispatcherAsInEvaluationEntry();
            await cADQAQI.evaluationCallReceipt.verifyReportedTimeAsInEvaluationEntry(reportedTime);
            await cADQAQI.evaluationCallReceipt.verifyStackedTimeAsInEvaluationEntry(stackedTime);
            await cADQAQI.evaluationCallReceipt.verifyDispatchTimeAsInEvaluationEntry(dispatchTime);
            await cADQAQI.evaluationCallReceipt.verifyDayOfWeekAsInEvaluationEntry(dayOfWeek);
            await cADQAQI.evaluationCallReceipt.verifyDurationOfStackedtimeAsInEvaluationEntry(durOfStackedTime);
            await cADQAQI.evaluationCallReceipt.verifyDurationOfDispatchtimeAsInEvaluationEntry(durOfDispatchTime);
            await cADQAQI.evaluationCallReceipt.verifyNoOfActiveCallsAsInEvaluationEntry(noOfActiveCalls);
            await cADQAQI.evaluationCallReceipt.verifyNoOfStackedCallsAsInEvaluationEntry(noOfStackedCalls);
            await cADQAQI.evaluationCallReceipt.verifyNoOfLawUnitsAsInEvaluationEntry(noOfLawUnits);
            await cADQAQI.evaluationCallReceipt.verifyShiftDurationElapsedAsInEvaluationEntry(shiftDurationElapsed);
            await cADQAQI.evaluationCallReceipt.clickLocationLink();
            await cADQAQI.evaluationCallReceipt.verifyAddressSearchScreenExist();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickCFSCodeLink();
            await cADQAQI.evaluationCallReceipt.verifyCFSCodeEntryScreenExist();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickCallTakerLink();
            await cADQAQI.evaluationCallReceipt.verifyPersonelEntryScreenExist();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickDispatcherLink();
            await cADQAQI.evaluationCallReceipt.verifyPersonelEntryScreenExist();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickWeatherLink();
            await cADQAQI.evaluationCallReceipt.verifyCBEWeatherWindowExists();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickViewOfActiveCallsLink();
            await cADQAQI.evaluationCallReceipt.verifyCallSearchScreenExists();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickViewOfStackedCallsLink();
            await cADQAQI.evaluationCallReceipt.verifyCallSearchScreenExists();
        });
    });

    // Automated by Hemamalini on 11/20/2025, Type: Legacy, Sprint: Q4 sprint 11 2025
    test('ToverifySearchFunctionalitiesInCADQAEvalFormBasedOnBaseJuris_72537', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72537', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('CAD QA Eval. Form');
            await cADQAQI.module.switchToCADQAEvalForm();
            await cADQAQI.cADQAEvalForm.selectAtJuris();
            await cADQAQI.cADQAEvalForm.selectAtTrainingType();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtTrainingTypeInGrid();
            await cADQAQI.cADQAEvalForm.verifyJurisColAsBlank();
            await cADQAQI.cADQAEvalForm.enterAtFormName(0);
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtFormNameInGrid();
            await cADQAQI.cADQAEvalForm.clearFormName();
            await cADQAQI.cADQAEvalForm.clickSampleCheckbox();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyFormNameInGrid();
            await cADQAQI.cADQAEvalForm.clickSampleCheckbox();
            await cADQAQI.cADQAEvalForm.clickIncludeInactiveCheckbox();
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verifyAtFormNameIsGreyedOutInGrid(1);
            await cADQAQI.cADQAEvalForm.clickIncludeInactiveCheckbox();
            await cADQAQI.cADQAEvalForm.clickAddNewEvaluationButton();
            await cADQAQI.cADQAEvalForm.verifyEvaluationFormEntryOpens();
            await cADQAQI.module.switchToCADQAEvalForm();
            await cADQAQI.cADQAEvalForm.enterAtFormName(2);
            await cADQAQI.cADQAEvalForm.clickSearchButton();
            await cADQAQI.cADQAEvalForm.verify1011NoRecordFoundAck();
            await cADQAQI.module.switchToCADQAEvalForm();
        });
    });

    // Automated by :-Hemamalini V on 11/20/2025, Type: Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyEditTabDetailsWithEvaluationEntryScreenBasedOnCall_72545', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72545', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickCallInfoIcon();
            await records.module.switchToCallEntry();
            const callNo = await records.callEntry.getCallNo();
            await records.callEntry.clickEditTab();
            const stackedDate = await records.callEntry.callEntryEditTab.getStackedDate();
            const stackedTime = await records.callEntry.callEntryEditTab.getStackedTime();
            const dispatchedDate = await records.callEntry.callEntryEditTab.getDispatchedDate();
            const dispatchedTime = await records.callEntry.callEntryEditTab.getDispatchedTime();
            const callTakerValue = await records.callEntry.callEntryEditTab.getCallTakerValue();
            const dispatcherValue = await records.callEntry.callEntryEditTab.getDispatcherValue();
            const finalCFSValue = await records.callEntry.callEntryEditTab.getFinalCFSValue();
            const locationValue = await records.callEntry.callEntryEditTab.getLocationValue();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyCallNumberAsInCallEntry(callNo);
            await cADQAQI.evaluationEntry.verifyStackedDateAsInCallEntry(stackedDate);
            await cADQAQI.evaluationEntry.verifyDispatchedDateAsInCallEntry(dispatchedDate);
            await cADQAQI.evaluationEntry.verifyCFSCodeValueAsInCallEntry(finalCFSValue);
            await cADQAQI.evaluationEntry.verifyLocationValueAsInCallEntry(locationValue);
            await cADQAQI.evaluationEntry.clickCallReceiptIcon();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.verifyCallTaker(callTakerValue);
            await cADQAQI.evaluationCallReceipt.verifyDispatcher(dispatcherValue);
        });
    });

    // Automated by :-Hemamalini V on 11/20/2025, Type: Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyEvaluationFormsDropdownInEvaluationSearchScreen_72606', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72606', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyEvaluationFormColumnValuesNotUnique();
            await cADQAQI.evaluationSearch.clickBackLink();
            await cADQAQI.evaluationSearch.selectAtServiceType1();
            await cADQAQI.evaluationSearch.selectAtEvaluationForm();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.verifyAtEvaluationFormColumnValues();
            await cADQAQI.evaluationSearch.clickRandomRecordInGrid();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.verifyAtEvaluationForm(0);
        });
    });

    // Automated by :-Hemamalini V on 11/20/2025, Type: Legacy, Sprint: Q4 sprint 11 2025
    test('ToVerifyWeatherLinkFunctionalitiesInEvaluationEntry_72612', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '72612', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('Evaluation Search');
            await cADQAQI.module.switchToEvaluationSearch();
            await cADQAQI.evaluationSearch.enterAtCADQANo();
            await cADQAQI.evaluationSearch.clickSearch();
            await cADQAQI.evaluationSearch.selectAtCADQANo();
            await cADQAQI.module.switchToEvaluationEntry();
            await cADQAQI.evaluationEntry.clickCallReceiptIcon();
            await cADQAQI.module.switchToEvaluationCallReceipt();
            await cADQAQI.evaluationCallReceipt.clickWeatherLink();
            await records.module.switchToWeather();
            await records.weather.verifyAtLocation();
            await records.weather.verifyAtWeather();
            await records.weather.verifyAtDewpoint();
            await records.weather.verifyAtPressure();
            await records.weather.verifyAtVisibility();
            await records.weather.verifyAtLastUpdateOn();
            await records.weather.verifyAtTemperature();
            await records.weather.verifyAtRelativeHumidity();
            await records.weather.verifyAtWind();
        });
    });
});

test.describe('Q4CADQAQIEnhancement', () => {
    // Automated by :-Hemamalini V on 12/09/2025, Type: Enhancement, Sprint: Q4 sprint 12 2025
    test('ToVerifyEvaluationFormEntryScreenFunctionalities_73948', async ({ loginPage, loaderPage, popupPage, cADQAQI, home, records, settings, personnel, fTO }) => {
        await withTestContext(testData, '73948', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('CAD QA/QI');
            await loaderPage.navigateToScreen('CAD QA Eval. Form');
            await cADQAQI.module.switchToCADQAEvalForm();
            await cADQAQI.cADQAEvalForm.clickAddNewEvaluationButton();
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.selectAtEvaluationFormType();
            await fTO.evaluationFormEntry.enterAtEvaluationFormName();
            await fTO.evaluationFormEntry.enterAtDescription();
            await fTO.evaluationFormEntry.clickUseScoringCheckBox();
            await fTO.evaluationFormEntry.clickColumnsTab();
            await fTO.evaluationFormEntry.columnsTab.enterAtColumn(1);
            await fTO.evaluationFormEntry.columnsTab.enterAtColumnHeading(1);
            await fTO.evaluationFormEntry.columnsTab.enterAtAllowedValues(1);
            await fTO.evaluationFormEntry.columnsTab.clickGradeGroupCheckbox();
            await fTO.evaluationFormEntry.columnsTab.enterAtMandateCommentsIfValue();
            await fTO.evaluationFormEntry.columnsTab.enterAtWeightageScoreField();
            await fTO.evaluationFormEntry.columnsTab.selectAllowEvaluaterAsNo();
            await fTO.evaluationFormEntry.columnsTab.selectAllowEvaluateeAsYes();
            await fTO.evaluationFormEntry.columnsTab.enterAtCharForChartReport();
            await fTO.evaluationFormEntry.columnsTab.enterAtColumnWidth();
            await fTO.evaluationFormEntry.columnsTab.enterAtNotes();
            await fTO.evaluationFormEntry.columnsTab.clickAddButton();
            await fTO.evaluationFormEntry.columnsTab.verifyAtColumnInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAtColumnHeadingInGrid();
            await fTO.evaluationFormEntry.columnsTab.verifyAtAllowedValuesInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyGradeGroupCheckboxIsCheckedInGrid();
            await fTO.evaluationFormEntry.columnsTab.verifyAtMandateCommentsInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAtWeightageInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAllowEvaluatorAsNoInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAllowEvaluateeAsYesInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAtReportCharInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAtWidthInGrid(1);
            await fTO.evaluationFormEntry.columnsTab.verifyAtNotesInGrid(1);
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.clickCategoryGroupTab();
            await fTO.evaluationFormEntry.categoryGroupTab.enterAtCategoryGroupName(1);
            await fTO.evaluationFormEntry.categoryGroupTab.enterAtSortOrder(1);
            await fTO.evaluationFormEntry.categoryGroupTab.clickAddButton();
            await fTO.evaluationFormEntry.categoryGroupTab.verifyAtCategoryGroupInGrid();
            await fTO.evaluationFormEntry.categoryGroupTab.verifyAtSortOrderInGrid(1);
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.switchToCategoryTab();
            await fTO.evaluationFormEntry.categoryTab.clickAddCategoryButton();
            await fTO.module.switchToEvaluationFormCategoryEntry();
            await fTO.evaluationFormCategoryEntry.enterAtCategory(1);
            await fTO.evaluationFormCategoryEntry.enterAtSortOrder();
            await fTO.evaluationFormCategoryEntry.selectAtCategoryGroup(1);
            await fTO.evaluationFormCategoryEntry.enterAtCategoryName(1);
            await fTO.evaluationFormCategoryEntry.selectAtDisallowEntriesFor();
            await fTO.evaluationFormCategoryEntry.enterAtScore(1);
            await fTO.evaluationFormCategoryEntry.enterAtEvaluationGuidelines();
            await fTO.evaluationFormCategoryEntry.saveScreen();
            await fTO.module.switchToEvaluationFormCategoryEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
            await fTO.evaluationFormCategoryEntry.saveAndCloseScreen();
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.switchToGuideLines();
            await fTO.evaluationFormEntry.guidelinesTab.enterAtRatingInstructions();
            await fTO.evaluationFormEntry.guidelinesTab.enterAtEvaluatorConsentAndAcceptance();
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful();
            await fTO.module.switchToEvaluationFormEntry();
            await fTO.evaluationFormEntry.saveAndCloseScreen();
            // objectIdentification.windowHandle.switchToMainWindow();
        });
    });
});