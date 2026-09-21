// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('Coroner');

test.describe('CoronerCaseFunctionality', () => {
    test('CoronerCaseFunctionality_265521', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265521', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtRMSCaseNo()
            await coroner.coronerCaseEntry.clickDODUkownCheckBox()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.verifyAtSex()
            await coroner.coronerCaseEntry.verifyAgeBasedOnDOB()
            await coroner.coronerCaseEntry.verifyAtAddress()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.verifyNextReviewDateAs7DaysAfterAssign()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtLocationOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtCauseOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtLocalMortuary()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtSubstanceInvolved()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtMannerOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtFacilityNameID()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterRemarks()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.coronerCaseEntry.verifyAdditionSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyInvestNoGenerated()
            await coroner.coronerCaseEntry.clickOnAllTheTabs()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_265537', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265537', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.verifyNameIntheGridByLatNameFistName(0)
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAgeBasedOnDOB()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.verifyAtName()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyNameNotEnteredAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.enterAtNameID()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.selectAtRelationship()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.saveNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.VerifyAdditionSuccessfulAcknowledge()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.SelectRowByAtRelationship()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyNameInfoIconDisplayed()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.saveNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyUpdateSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.coronerCaseEntry.verifyUpdateSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyNamesTabAsBlueColour()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_265542', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265542', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtNameID()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.verifyNameIntheGridByLatNameFistName(0)
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.verifyAtName()
            await coroner.coronerCaseEntry.clickOnReviewTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReviewTab.clickAddNewReview()
            await coroner.module.switchToCoronerReview()
            await coroner.coronerReview.verifyCurrentReviewDateAsTodaysDate()
            await coroner.coronerReview.selectAtCoronerStatus()
            await coroner.coronerReview.tabDateAndTime()
            await coroner.coronerReview.verifyNextReviewDateAs7DaysAfterAssign()
            await coroner.coronerReview.selectAtTemplate()
            await coroner.coronerReview.clickOnLoad()
            await coroner.coronerReview.clickSave()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyReviewTabAsBlueColour()
            await coroner.coronerCaseEntry.clickOnReviewTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReviewTab.verifyStatusDateAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryReviewTab.verifyNextReviewDateAs7DaysAfterAssign()
            await coroner.coronerCaseEntry.coronerCaseEntryReviewTab.verifyAtStatusChangedTo()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_268508', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '268508', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtNameID()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.verifyNameIntheGridByLatNameFistName(0)
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.verifyAtName()
            await coroner.coronerCaseEntry.clickOnEffortsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.clickAddEffort()
            await coroner.module.switchToCoronerEfforts()
            await coroner.coronerEfforts.enterAtInvestigator()
            await coroner.coronerEfforts.selectAtCoronerCatogory()
            await coroner.coronerEfforts.selectAtCoronerActivity()
            await coroner.coronerEfforts.tabStartedDateAndTime()
            await coroner.coronerEfforts.selectAtTemplate()
            await coroner.coronerEfforts.clickOnLoad()
            await coroner.coronerEfforts.enterAtRemarksText()
            await coroner.module.switchToCoronerEfforts()
            await coroner.coronerEfforts.clickSave()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.coronerCaseEntry.verifyUpdateSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyEffortTabAsBlueColour()
            await coroner.coronerCaseEntry.clickOnEffortsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtInvestigatorName()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyDateFromAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtActivityCode()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtRemarks(1)
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_265705', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265705', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtNameID()
            await coroner.coronerCaseSearch.selectAtCauseOfDeath()
            await coroner.coronerCaseSearch.selectAtCaseStatus()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.clickOnReportsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReportsTab.clickAddReportButton()
            await coroner.module.switchToCoronerCaseReportsEntry()
            await coroner.coronerCaseReportEntry.verifyAtCoronerInvestNo()
            await coroner.coronerCaseReportEntry.verifyAtReportedOfficer()
            await coroner.coronerCaseReportEntry.selectAtType()
            await coroner.coronerCaseReportEntry.selectAtStatus()
            await coroner.coronerCaseReportEntry.enterDescription()
            await coroner.coronerCaseReportEntry.selectAtTemplate()
            await coroner.coronerCaseReportEntry.clickOnLoad()
            await coroner.coronerCaseReportEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyUpdateSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyReportTabAsBlueColour()
            await coroner.coronerCaseEntry.clickOnReportsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReportsTab.verifyReportStatusAsOnHold(0)
            await coroner.coronerCaseEntry.coronerCaseEntryReportsTab.verifyReportTypeAsCoronerReport(0)
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_265707', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265707', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtNameID()
            await coroner.coronerCaseSearch.selectAtCauseOfDeath()
            await coroner.coronerCaseSearch.selectAtCaseStatus()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            const investNo = await coroner.coronerCaseEntry.readInvestNo()
            const dateOfDeath = await coroner.coronerCaseEntry.readDateOfDeath()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.clickOnEvidenceTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.clickAddNew()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyInvestNo(investNo)
            await coroner.coronerEvidenceEntry.verifyDateOfDeath(dateOfDeath)
            await coroner.coronerEvidenceEntry.verifyAddnewButtonDisabled()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.enterDescription()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            const EvidenceNo = await coroner.coronerEvidenceEntry.readEvidenceNo()
            await coroner.coronerEvidenceEntry.saveNclose()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnEvidenceTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyAtInvestNo(0)
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyAtCaseNo(0)
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyAtReason(0)
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyAtEvidenceNo(EvidenceNo, 0)
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    test('CoronerCaseFunctionality_268953', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '268953', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Records')
            await loaderPage.navigateToScreen('Case Search')
            await records.module.switchToCaseSearch()
            await records.caseSearch.enterAtCaseNo()
            await records.module.switchToCaseUpdate()
            await records.caseUpdate.clickCoronerIcon()
            // coroner.switchToCoronerSearchHelpWindow();
            // coroner.coronerCaseSearch.selectRowByAtCaseNoInGrid();
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtRMSCaseNo()
            await coroner.coronerCaseEntry.enterAtLastName()
            await coroner.coronerCaseEntry.enterAtFirstName()
            await names.module.switchToNameSearchHelpWindow()
            await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtSex()
            // await coroner.coronerCaseEntry.verifyAtAge()
            await coroner.coronerCaseEntry.verifyAgeBasedOnDOB()
            await coroner.coronerCaseEntry.verifyAtAddress()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.verifyNextReviewDateAs7DaysAfterAssign()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtLocationOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtCauseOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtLocalMortuary()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtSubstanceInvolved()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.selectAtMannerOfDeath()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterRemarks()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.coronerCaseEntry.verifyAdditionSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyInvestNoGenerated()
            await coroner.coronerCaseEntry.clickOnAllTheTabs()
            await coroner.coronerCaseEntry.verifyPropertyTabEnabled()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });
});

test.describe('CoronerEvidenceFunctionality', () => {
    test('CoronerEvidenceFunctionality_265927', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265927', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.clickAddNew()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.enterAtInvestNo()
            await coroner.coronerEvidenceEntry.verifyAtDateOfDeath()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonDisabled()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.enterDescription()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyAdditionSuccessfulMessage()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            await coroner.module.switchToCoronerEvidenceEntry()
        });
    });

    test('CoronerEvidenceFunctionality_265928', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265928', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.clickAddNew()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.enterAtInvestNo()
            await coroner.coronerEvidenceEntry.verifyAtDateOfDeath()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonDisabled()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.enterDescription()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyAdditionSuccessfulMessage()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            const evidenceNo1 = await coroner.coronerEvidenceEntry.readEvidenceNo()
            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.reloadCoronerEvidenceScreen()
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.enterAtInvestNo()
            await coroner.coronerEvidenceSearch.clickOnSearch()
            await coroner.coronerEvidenceSearch.selectGridRowByEvidenceNo(evidenceNo1)
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyAtInvestNo()
            await coroner.coronerEvidenceEntry.verifyAtDateOfDeath()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            const seq = await coroner.coronerEvidenceEntry.readItemNo()
            await coroner.coronerEvidenceEntry.clickAddnewButton()
            await coroner.coronerEvidenceEntry.verifySeqGeneratedAsNextNo(seq)
            await coroner.coronerEvidenceEntry.selectReasonAsMentalIllness()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyUpdateSuccessfulMessage()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            const seq1 = await coroner.coronerEvidenceEntry.readItemNo()
            await coroner.coronerEvidenceEntry.clickAddnewButton()
            await coroner.coronerEvidenceEntry.verifySeqGeneratedAsNextNo(seq1)
            await coroner.module.switchToCoronerEvidenceEntry()
        });
    });

    test('CoronerEvidenceFunctionality_265929', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '265929', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.enterAtInvestNo()
            await coroner.coronerEvidenceSearch.selectAtReason()
            await coroner.coronerEvidenceSearch.enterAtFromEvidenceNo()
            await coroner.coronerEvidenceSearch.enterAtToEvidenceNo()
            await coroner.coronerEvidenceSearch.clickOnSearch()
            await coroner.coronerEvidenceSearch.selectGridRowByEvidenceNo()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyAtInvestNo()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            await coroner.coronerEvidenceEntry.verifyAtReason()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyUpdateSuccessfulMessage()
            await coroner.module.switchToCoronerEvidenceEntry()
        });
    });

    test('CoronerEvidenceFunctionality_268677', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '268677', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtNameID()
            await coroner.coronerCaseSearch.selectAtCauseOfDeath()
            await coroner.coronerCaseSearch.selectAtCaseStatus()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            const investNo = await coroner.coronerCaseEntry.readInvestNo()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.clickOnEvidenceTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.clickAddNew()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyInvestNo(investNo)
            await coroner.coronerEvidenceEntry.verifyAddnewButtonDisabled()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.enterDescription()
            await coroner.coronerEvidenceEntry.verifyDefaultQuantityAs1()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyAdditionSuccessfulMessage()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateDisplayed()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonDisplayed()
            await coroner.coronerEvidenceEntry.verifyViewHistoryButtonDisplayed()
            const seq = await coroner.coronerEvidenceEntry.readItemNo()
            await coroner.coronerEvidenceEntry.enterChangeDateAsCurrentDate()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonAsMandatory()
            await coroner.coronerEvidenceEntry.selectStorageLocationAsCoronerLocation()
            await coroner.coronerEvidenceEntry.enterAtChangeReason()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyUpdateSuccessfulMessage()
            await coroner.coronerEvidenceEntry.verifySeqNo(seq)
        });
    });

    test('CoronerEvidenceFunctionality_268680', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '268680', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.verifyNameIntheGrid(0)
            await coroner.coronerCaseSearch.selectGridRowByName()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtInvestNo()
            await coroner.coronerCaseEntry.clickOnEvidenceTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyStatusAsOpenInvestigationByEvidenceNo()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.selectGridRowByEvidenceNo()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.verifyAtInvestNo()
            await coroner.coronerEvidenceEntry.verifyAtEvidenceNo()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateDisplayed()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonDisplayed()
            await coroner.coronerEvidenceEntry.verifyViewHistoryButtonDisplayed()
            const location = await coroner.coronerEvidenceEntry.readSelectedStorageLocation()
            await coroner.coronerEvidenceEntry.clickViewHistoryButton()
            await coroner.module.switchToCoronerEvidenceHistory()
            await coroner.coronerEvidenceHistory.verifyLocationTo(location, 0)
            await coroner.coronerEvidenceHistory.verifyAtPFName(0)
            await coroner.coronerEvidenceHistory.verifyChangedReasonAsNull(0)
            await coroner.coronerEvidenceHistory.closeScreen()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.enterChangeDateAsCurrentDate()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonAsMandatory()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.enterAtChangeReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyUpdateSuccessfulMessage()
            await coroner.coronerEvidenceEntry.clickViewHistoryButton()
            await coroner.module.switchToCoronerEvidenceHistory()
            await coroner.coronerEvidenceHistory.verifyLocationFrom(location, 0)
            await coroner.coronerEvidenceHistory.verifyAtLocationTo(0)
            await coroner.coronerEvidenceHistory.verifyAtPFName(0)
            await coroner.coronerEvidenceHistory.verifyAtChangedReason(0)
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnEvidenceTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyAtStatusByEvidenceNo()
            await coroner.coronerCaseEntry.coronerCaseEntryEvidenceTab.verifyClosedStatusShowingAsGrayColor()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });
});

test.describe('EntryScreenSmoke', () => {
    test('EntryScreenSmoke_CoronerCaseEntrySmoke', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, 'CoronerCaseEntrySmoke', async () => {
            await loginPage.loginScreen.Logon()
            await popupPage.acknowledge.okIfWindowExist('AfterLogin')
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await popupPage.acknowledge.okIfWindowExist('After Click On CaseSearch')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await popupPage.acknowledge.okIfWindowExist('AfterClickAddNew')
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtRMSCaseNo()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.verifyNextReviewDateAs7DaysAfterAssign()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtFacilityNameID()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAdditionSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.smokeTest.clickOnEntryScreensTabs('CoronerCaseEntry')
        });
    });

    test('EntryScreenSmoke_CEvidenceSmoke', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, 'CEvidenceSmoke', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtRMSCaseNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectRowByAtCaseNoInGrid()
            await popupPage.acknowledge.okIfWindowExist('AfterClickOnRecord')
            await coroner.module.switchToCoronerCaseEntry()
            const InvestNo = await coroner.coronerCaseEntry.readInvestNo()

            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.clickAddNew()
            await popupPage.acknowledge.okIfWindowExist('AfterClickEvidanceAddnew')
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.enterAtInvestNo(InvestNo)
            await coroner.coronerEvidenceEntry.verifyAddnewButtonDisabled()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.enterDescription()
            await coroner.coronerEvidenceEntry.enterQuantity()
            await coroner.coronerEvidenceEntry.selectAtStorageLocation()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await popupPage.acknowledge.okIfWindowExist('AfterSaveEvidance')
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.VerifyAdditionSuccessfulMessage()
            await coroner.module.switchToCoronerEvidenceEntry()
        });
    });
});

test.describe('2023CoronerDefectTestCases', () => {
    // Automated By : Sarathkumar L on 11/08/2023
    // Sprint :- : Quarter 1 : Sprint 1
    // Type of Test case : - Defect Setup: 118
    test('2023CoronerDefectTestCases_21260', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '21260', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnToxicologyTab()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectSamplesObtainedAsCheckAll()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectLaboratoryUsedAsCheckAll()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectAtDrugType()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtConcentration()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtMeasurement()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectAtSampleType()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtComments()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.clickAddButton()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.saveToxicologyTab()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.verifyAdditionSuccessfulAcknowledgePopup()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnToxicologyTab()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.verifyDrugTypeGrid(1)
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectAtDrugType()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtConcentration1()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.verify1146IntegerValueAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnToxicologyTab()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtMeasurement()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.selectAtSampleType()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.enterAtComments()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.clickAddButton()
            await coroner.coronerCaseEntry.coronerCaseEntryToxicologyTab.verify1019DuplicationDataFoundAckMsg()
        });
    });

    // Automated By : Bavithra on 07/12/2024
    // Sprint :- : Quarter 3 : Sprint 7
    // Type of Test case : - Defect
    test('2023CoronerDefectTestCases_34804', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '34804', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtSex1()
            await coroner.coronerCaseEntry.clickNameInfoIcon()
            await names.module.switchToNameEntry()
            await names.nameEntry.switchToMainTab()
            await names.nameEntry.nameEntryMainTab.SelectAtSex()
            await names.module.switchToNameEntry()
            await names.nameEntry.SaveNCloseScreen()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.verifyAtSex()
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    // Automated by :- Kiran Date :- 7/15/2024 Quarter:- 3 Sprint: 7 Module:- Coroner
    test('2023CoronerDefectTestCases_35042', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '35042', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.verifyDOBAgeColumnValuesDoesNotShowMinusSymbol() // Added Based on Test Case No - 46240
            await coroner.coronerCaseSearch.selectRandowRow()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.module.switchToCoronerCaseSearchScreen()
            const DOBFromGrid = await coroner.coronerCaseSearch.getColumnValueBySelectedRowWithColumnIndex('DOB/Age ')
            const AgeFromGrid = await coroner.coronerCaseSearch.SplitAgeFromDOBAgeColumn(DOBFromGrid)
            await coroner.module.switchToCoronerCaseEntry()
            const Age = await coroner.coronerCaseEntry.readAge()
            await coroner.coronerCaseEntry.verifyAge(Age, AgeFromGrid)
        });
    });

    // Automated By : - Abinaya M on 07/15/2024
    // Sprint :- : Quarter 3 : Sprint 7
    // Type of Test case : - Defect - CRM # :- 163995
    test('2023CoronerDefectTestCases_35334', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '35334', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Evidence Search')
            await coroner.module.switchToCoronerEvidenceSearchScreen()
            await coroner.coronerEvidenceSearch.clickAddNew()
            await coroner.module.switchToCoronerEvidenceEntry()
            await coroner.coronerEvidenceEntry.enterAtInvestNo()
            await coroner.coronerEvidenceEntry.selectAtReason()
            await coroner.coronerEvidenceEntry.selectAtEvidenceType()
            await coroner.coronerEvidenceEntry.selectAtEvidenceStatus()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.coronerEvidenceEntry.verifyAddnewButtonEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateTextIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonTextIsEnabled()
            await coroner.coronerEvidenceEntry.clickAddnewButton()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateTextIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonTextIsEnabled()
            await coroner.coronerEvidenceEntry.save()
            await coroner.module.switchToCoronerEvidenceEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await coroner.coronerEvidenceEntry.clickAddnewButton()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateTextIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonTextIsEnabled()
            await coroner.coronerEvidenceEntry.clickAddnewButton()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeDateTextIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonIsEnabled()
            await coroner.coronerEvidenceEntry.verifyLocationChangeReasonTextIsEnabled()
        });
    });

    // Updated by ranjith kumar v k
    // Q3 sprint 07 2025
    // TC ID: 55875
    // Automated By : - chandrasekar.v on 22/11/2024
    // Sprint :- : Quarter 4 : Sprint 11
    // Type of Test case : - Defect 2024
    test('2023CoronerDefectTestCases_42908', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '42908', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            // 55875 lines start
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verify1006ValidationAcknowledgeNotOccurs()
            // 55875 lines end
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.enterAtNameID()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.selectAtRelationship()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickSave()
            await coroner.coronerCaseEntry.verify1051UpdatedDataExistAcknowledge()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.saveNamesTab()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.VerifyAtLastNameFirstNameInGrid(0)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.VerifyAtRelationshipInGrid(0)
            await coroner.module.switchToCoronerCaseEntry()
        });
    });

    // Q3 sprint 02 2026
    // ATC : 78348 MTC ID: 78353
    // Automated By : - Jabar Ali 02/26/2026
    // Sprint :- : Quarter 1 : Sprint 2
    // Type of Test case : - Defect
    test('2023CoronerDefectTestCases_78348', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '78348', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnEffortsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.clickAddEffort()
            await coroner.module.switchToCoronerEfforts()
            await coroner.coronerEfforts.enterAtInvestigator()
            await coroner.coronerEfforts.selectAtCoronerCatogory()
            await coroner.coronerEfforts.selectAtCoronerActivity()
            await coroner.coronerEfforts.tabStartedDateAndTime()
            await coroner.coronerEfforts.enterAtCumulativeTimeHours()
            await coroner.coronerEfforts.enterAtCumulativeTimeMinutes()
            await coroner.coronerEfforts.save()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnEffortsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtInvestigatorName()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyDateFromAsCurrentDate()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtActivityCode()
            await coroner.coronerCaseEntry.coronerCaseEntryEffortsTab.verifyAtCucumativeHours()
        });
    });

    // Q3 sprint 02 2026
    // ATC : 78348 MTC ID: 78353
    // Automated By : - Jabar Ali 02/26/2026
    // Sprint :- : Quarter 1 : Sprint 2
    // Type of Test case : - Defect
    test('2023CoronerDefectTestCases_78353', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '78353', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.enterAtPhysiciansNameID()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyAtAddress(1)
            await coroner.coronerCaseEntry.coronerDrMedTab.clickAddButton()
            await coroner.coronerCaseEntry.coronerDrMedTab.internalSave()
            await coroner.coronerCaseEntry.verifyAdditionSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyNameByAddressInGrid()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyAtPhoneNoByNameInGrid()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyNameByAddressInGrid()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyAtPhoneNoByNameInGrid()
        });
    });

    // ATC : 79806 MTC ID: 17885
    // Automated By : - Jabar Ali 03/13/2026
    // Sprint :- : Quarter 1 : Sprint 3
    // Type of Test case : - Defect
    test('2023CoronerDefectTestCases_79806', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '79806', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.enterAtNameID()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.selectAtRelationship()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.enterAtComments(1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.saveNamesTab()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtNameInGrid(1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtRelationshipInGridByName(1, 1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtDOBInGridByName(1, 1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtAddressInGridByName(1, 1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtPhoneNoInGridByName(1, 1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtPhoneNo2InGridByName(1, 2)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.verifyAtCommentsInGridByName(1, 1)
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.doubleClickCommentsInGridVerifyItsNotEditable(1)
        });
    });
});

test.describe('Q2S6CoronerDefect2026', () => {
    // Q3 sprint 09 2025
    // TC ID: 60286
    // Automated By : - Stalin R 09/25/2025
    // Sprint :- : Quarter 3 : Sprint 9
    // Type of Test case : - Defect 2025
    test('Q2S6CoronerDefect2026_60286', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '60286', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.enterAtNameID1()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.clickAddNameButton()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.saveNamesTab()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnNamesTab()
            await coroner.coronerCaseEntry.coronerCaseEntryNamesTab.VerifyAdditionSuccessfulMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await coroner.coronerCaseEntry.verifyNamesTabAsBlueColour()
        });
    });

    // Q3 sprint 09 2025
    // TC ID: 60236
    // Automated By : - Stalin R 09/25/2025
    // Sprint :- : Quarter 3 : Sprint 9
    // Type of Test case : - Defect 2025
    test('Q2S6CoronerDefect2026_60236', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '60236', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.verifyAtNextReviewDate()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.clearNextReviewDate()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.clickCaseStatusField()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.verifyAtNextReviewDate()
        });
    });

    // Q3 sprint 09 2025
    // ATC : 68129 MTC ID: 15717
    // Automated By : - Stalin R 09/25/2025
    // Sprint :- : Quarter 3 : Sprint 9
    // Type of Test case : - Defect 2025
    test('Q2S6CoronerDefect2026_68129', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '68129', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickCustomIcon()
            await coroner.coronerCaseEntry.ClickManageCustomFieldsMenu()
            await settings.module.switchToCustomFields()
            await settings.coronerCustomFields.enterAtFieldName()
            await settings.coronerCustomFields.clickAddButton()
            await settings.coronerCustomFields.verifyUpdateSuccessfulStatusMessage()
            await settings.coronerCustomFields.clickSaveButton()
            await settings.coronerCustomFields.verify8EnterMandatoryDataAckMsg()
            await settings.module.switchToCustomFields()
        });
    });

    // Q3 sprint 09 2025
    // ATC : 68132 MTC ID: 22897
    // Automated By : - Stalin R 09/25/2025
    // Sprint :- : Quarter 3 : Sprint 9
    // Type of Test case : - Defect 2025
    test('Q2S6CoronerDefect2026_68132', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '68132', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.enterAtInvestNo()
            await coroner.coronerCaseSearch.clickOnSearch()
            await coroner.coronerCaseSearch.selectAtGridRowByInvest()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnReportsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReportsTab.clickAddReportButton()
            await coroner.module.switchToCoronerCaseReportsEntry()
            await coroner.coronerCaseReportEntry.selectAtType()
            await coroner.coronerCaseReportEntry.enterDescription()
            await coroner.coronerCaseReportEntry.save()
            await coroner.module.switchToCoronerCaseReportsEntry()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.module.switchToCoronerCaseReportsEntry()
            await coroner.coronerCaseReportEntry.saveNClose()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnReportsTab()
            await coroner.coronerCaseEntry.coronerCaseEntryReportsTab.verifyReportTypeAsCoronerReport(0)
        });
    });

    // Q3 sprint 09 2025
    // ATC : 68134 MTC ID: 65494
    // Automated By : - Stalin R 09/25/2025
    // Sprint :- : Quarter 3 : Sprint 9
    // Type of Test case : - Defect 2025
    test('Q2S6CoronerDefect2026_68134', async ({ loginPage, loaderPage, popupPage, coroner, names, records, settings, home, alarms }) => {
        await withTestContext(testData, '68134', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Coroner')
            await loaderPage.navigateToScreen('Coroner Case Search')
            await coroner.module.switchToCoronerCaseSearchScreen()
            await coroner.coronerCaseSearch.clickAddNew()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.enterAtNameID()
            await coroner.coronerCaseEntry.clickOnMainTab()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterAtInvestigator()
            await coroner.coronerCaseEntry.coronerCaseEntryMainTab.enterDateAssignedAsCurrentDate()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.enterAtPhysiciansNameID()
            await coroner.coronerCaseEntry.coronerDrMedTab.clickAddButton()
            await coroner.coronerCaseEntry.coronerDrMedTab.internalSave()
            await coroner.coronerCaseEntry.verifyAdditionSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Coroner Case Entry')
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyNameByAddressInGrid()
            await coroner.coronerCaseEntry.coronerDrMedTab.selectAtNameInGrid()
            await coroner.coronerCaseEntry.coronerDrMedTab.enterAtComments()
            await coroner.coronerCaseEntry.coronerDrMedTab.clickAddButton()
            await coroner.coronerCaseEntry.coronerDrMedTab.internalSave()
            await coroner.coronerCaseEntry.verifyUpdateSuccessfulAcknowledgeMessage()
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.save()
            await coroner.module.switchToCoronerCaseEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Coroner Case Entry')
            await coroner.module.switchToCoronerCaseEntry()
            await coroner.coronerCaseEntry.clickOnDrMedTab()
            await coroner.coronerCaseEntry.coronerDrMedTab.verifyAtCommentsInGridByName(1)
        });
    });
});