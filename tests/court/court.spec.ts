// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('Court');

test.describe('DefectTestCasesCourt', () => {
    // Automated by Stalin
    // Year : 2023  Quarter: 2  Sprint: 08
    // Type of Test case - Defect
    test('DefectTestCasesCourt_CRM149355ToverifytheChargedoesnotexistissue_11416', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '11416', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.save();
            await court.module.switchToScheduling();
            await court.scheduling.verifyAtCurrentCharge();
            await court.scheduling.closeTheScreen();
            await court.module.switchToCaseSearch();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('Charge');
            await settings.module.switchToCharge();
            await settings.chargeScreen.enterAtChargeCode();
            await settings.chargeScreen.clickSearchButton();
            await settings.chargeScreen.clickAtChargeCodeinGrid();
            await settings.module.switchToSharedCodes();
            await settings.sharedCodes.clickInactiveCheckBox();
            await settings.sharedCodes.verifyInactiveDateAsCurrentDate();
            await settings.sharedCodes.saveNClose();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            // await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.verifyAtCurrentChargeDescription();
            await court.module.switchToScheduling();
        });
    });

    // Automated by KIRAN :- Date :-24/4/2023 Quarter:-2 Sprint:-8 Module:-Court
    test('DefectTestCasesCourt_ToCheckwhetherCourtModuleSystemParameter_2139WorkingProperlyOrNot_11685', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '11685', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemParameter2139AsFalse();

            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.verifytheCitationIsNonMandatory();
            await court.createCase.closeTheScreen();

            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.verifycitationAsNonMandatory();
            await court.scheduling.closeTheScreen();

            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickBack();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemParameter2139AsTrue();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.verifytheCitationIsMandatory();
            await court.createCase.closeTheScreen();
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.verifycitationAsMandatory();
        });
    });

    // Automated By : - Abinaya M on 05/13/2024
    // Sprint :-  : Quarter 2  :  Sprint 5  
    // Type of Test case : - Defect - CRM # :-164348
    test('DefectTestCasesCourt_CRM164348ToVerifyTheAssessmentSearchWhileClickingOnGridHeadersSortOrderFunctionalityNotWorking_29363', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '29363', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Assessment Search');
            await court.module.switchToAssessmentSearch();
            await court.assessmentSearch.clickSearch();
            const rateCodeColumnValues = await court.assessmentSearch.getRateCodeColumnValues();
            console.log(rateCodeColumnValues);
            await court.assessmentSearch.verifyRateCodeListedInAscendingOrder(rateCodeColumnValues);
            const rateCodeColumnValues1 = await court.assessmentSearch.getRateCodeColumnValues();
            console.log(rateCodeColumnValues1);
            await court.assessmentSearch.verifyRateCodeListedInDescendingOrder(rateCodeColumnValues1);
            await court.assessmentSearch.reloadScreen('Assessment Search');
            await court.module.switchToAssessmentSearch();
            await court.assessmentSearch.clickSearch();
            const effectiveDateColumnValues = await court.assessmentSearch.getEffectiveDateColumnValues();
            console.log(effectiveDateColumnValues);
            await court.assessmentSearch.verifyEffectiveDateListedInAscendingOrder(effectiveDateColumnValues);
            const effectiveDateColumnValues1 = await court.assessmentSearch.getEffectiveDateColumnValues();
            console.log(effectiveDateColumnValues1);
            await court.assessmentSearch.verifyEffectiveDateListedInDescendingOrder(effectiveDateColumnValues1);
        });
    });

    // Automated By : - Manikandan.k  on 07/12/2024
    // Sprint :-  : Quarter 3  :  Sprint 7 
    // Type of Test case : - Defect - CRM # :-164459
    test('DefectTestCasesCourt_ToVerifyTheCaseDeletionClickOnDeleteNowInCourtDeleteScreenEnterAllMandatoryDataClickOnSaveIconValidationFailedAcknowledge_34475', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '34475', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Case Deletion');
            await court.module.switchToCaseDeletion();
            await court.caseDeletion.clickDeleteNew();
            await court.module.switchToCourtDelete();
            await court.courtDelete.enterAtCitationNo();
            await court.courtDelete.tabOutDate();
            await court.courtDelete.enterAtRemarks();
            await court.courtDelete.saveTheScreen();
            await court.module.switchToCourtDelete();
            await court.courtDelete.verifyDeletionSuccessfulStatusMessage(); // added
            await court.courtDelete.closeTheScreen();
            await court.module.switchToCaseDeletion();
            await court.caseDeletion.verifyAtCitationNoInGrid(); // added
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.verifyAtCitationIsNotTheGrid(); // added
            await court.courtCaseSearch.verifyColumnsSortingAsAscending('Name ID'); // added
            await court.courtCaseSearch.verifyColumnsSortingAsDescending('Name ID'); // added
        });
    });

    // Automated By : - Manikandan.k  on 07/15/2024
    // Sprint :-  : Quarter 3  :  Sprint 7 
    // Type of Test case : - Defect - CRM # :-169080 for 1.118
    test('DefectTestCasesCourt_ToverifyTheCourtCaseEntrySchedulingActivityScreenRemainingIssues_34981', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '34981', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1); // added
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.clickAddButton(); // added
            await court.createCase.verifyAtChargeInGrid(1);
            await court.createCase.enterAtCharge(2);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.clickAddButton();
            await court.createCase.verifyAtChargeInGrid(2);
            await court.createCase.enterAtCharge(3);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.clickAddButton();
            await court.createCase.verifyAtChargeInGrid(3);
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.save();
            await court.module.switchToScheduling();
            await court.scheduling.save();
            await court.module.switchToScheduling();
            // await objectIdentification.manualIdentify.verifyUpdateSuccessful();
            await court.scheduling.verifyAtChargeInGrid(1);
            await court.scheduling.verifyAtChargeInGrid(2);
            await court.scheduling.verifyAtChargeInGrid(3);
        });
    });

    // Automated by :-Kiran  Date :-11/19/2024 Quarter:-4 Sprint:11 Module:-Court
    test('DefectTestCasesCourt_CRM172485_ToVerifyTheCaseSearchSchedulingCommentsTabAfterEnterTHeSubjectWhileClickIngOnEnterCommentsButtonSaveAlertPoPDoesntArise_42291', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '42291', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.enterAtCitationNo();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.switchToCommentsTab();
            await court.scheduling.commentsTab.enterAtSubject();
            await court.scheduling.commentsTab.clickEnterComments();
            await court.scheduling.commentsTab.verifyAtSubjectInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.save();
            // await objectIdentification.manualIdentify.verifyUpdateSuccessful();
        });
    });

    // Automated by :-Kiran  Date :-11/19/2024 Quarter:-4 Sprint:11 Module:-Court Type :- Enhancement  SetUp:-1.118
    test('DefectTestCasesCourt_CRM160576ToVerifyTheCourtStatus_MilwaukeeReqDA_42095', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '42095', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.clickDocketLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsMandatory();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyAdditionSuccessFullMessage();
            await court.module.switchToCreateCase();
            await court.createCase.verifyDocketLabelAsMandatory();
            await court.createCase.clickDocketLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsShow();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyUpdateSuccessFullMessage();
            await court.module.switchToCreateCase();
            await court.createCase.verifyDocketLabelAsNonMandatory();
            await court.createCase.clickDocketLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsHide();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyUpdateSuccessFullMessage();
            await court.module.switchToCreateCase();
            await court.createCase.verifyDocketLabelAsGrey();
            await court.createCase.clickDACaseLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsMandatory();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyAdditionSuccessFullMessage();
            await court.module.switchToCreateCase();
            await court.createCase.verifyDACaseLabelAsMandatory();
            await court.createCase.clickDACaseLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsShow();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyUpdateSuccessFullMessage();
            await court.module.switchToCreateCase();

            await court.createCase.verifyDACaseLabelAsNonMandatory();
            await court.createCase.clickDACaseLabel();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.selectFieldUsageAsHide();
            await settings.repositoryEntry.saveScreen();
            await settings.repositoryEntry.verifyUpdateSuccessFullMessage();
            await court.module.switchToCreateCase();
            await court.createCase.verifyDACaseLabelAsGrey();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(0);
            await court.createCase.clickAddButton();
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.verifyAtChargeInGrid(0);
            await court.createCase.save();
            await court.module.switchToScheduling();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });

    // Automated by :-Kiran  Date :-11/18/2024 Quarter:-4 Sprint:11 Module:-Court Type :- Defect   SetUp :-1.118
    test('DefectTestCasesCourt_ToverifyTheCreateCaseAfterCreatingANewEntryClickOnSaveGetting1006ValidationFiledError_42292', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '42292', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.clickAddButton();
            await court.createCase.verify6040MinimumOneChargeIsRequiredAcknowledgePoPup();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCharge(0);
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.clickSave();
            await court.createCase.verify6040MinimumOneChargeIsRequiredAcknowledgePoPup();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCharge(0);
            await court.createCase.clickAddButton();
            await court.createCase.verifyAtChargeInGrid(0);
            await court.createCase.save();
            await court.module.switchToScheduling();
        });
    });

    // Automated by :-Ranjith Kumar V K  Date :-08/07/2025 Quarter:-3 Sprint:08  Type :- Defect   
    test('DefectTestCasesCourt_CRM162148ToVerifyTheCreateCaseAfterAddingTheNewEntryClickOnSaveWeAreGetting1006ValidationFiledError_63633', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '63633', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Create Case');
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID(1);
            await court.createCase.verify7045AcknowledgePopupOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtDefendantNameID(2);
            await court.createCase.verify7045AcknowledgePopupOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtDefendantNameID(3);
            await court.createCase.acceptThe6125Popup();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.verify7045AcknowledgePopupNotOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.clearDefendantName();
            await court.createCase.verify6020AcknolwedgePopupOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtDefendantNameID(4);
            await court.createCase.verify7045AcknowledgePopupNotOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.enterAtCourtAppDateTime();
            const time = await court.createCase.getCourtAppTime();
            await court.createCase.clickAddButton();
            await court.createCase.verify6040AcknowledgePopupOccurs();
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtCharge(1);
            await court.createCase.clickAddButton();
            await court.createCase.verifyAtChargeInGrid(1);
            await court.createCase.verifyAtChargeDescriptionInGrid(1);
            await court.createCase.save();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Create Case');
            await court.module.switchToScheduling();
            await court.scheduling.clickCourtActivitiesTab();
            await court.scheduling.courtActivitiesTab.verifyDateAndTimeInGrid(time);
            await court.scheduling.courtActivitiesTab.verifyAtChargeInGrid(1);
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.verifyAtCitationInTheGrid();
            await court.courtCaseSearch.verifyAtDefendantInTheGrid();
            await court.courtCaseSearch.verifyAtChargeInTheGrid(1);
            await court.module.switchToCaseSearch();
        });
    });
});

test.describe('CourtEntryScreen', () => {
    test('CourtEntryScreen_AssessmentSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, 'AssessmentsEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Assessment Search');
            await court.module.switchToAssessmentSearch();
            await court.assessmentSearch.clickAddNew();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Assessment Search');
            await court.module.switchToAssessmentsEntry();
            await court.assessmentEntry.enterAtEffectiveDate();
            await court.assessmentEntry.selectAtCode();
            await court.assessmentEntry.enterAtCost();
            await court.assessmentEntry.enterAtSort();
            await court.assessmentEntry.clickAddBtn();
            await court.assessmentEntry.verifyAtCodeInGrid();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Assessment Search');
            await court.module.switchToAssessmentsEntry();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });

    test('CourtEntryScreen_CreateCaseSmokeEntry', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, 'CreateCase', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Case Search');
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.tabOutViolationDateNTime();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Case Search');
            await court.module.switchToScheduling();
            // await objectIdentification.smokeTest.clickOnEntryScreensTabsWithCheckWindowOpens('Scheduling');
        });
    });

    test('CourtEntryScreen_RegisterCodesSmokeEntry', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, 'RegisterCodeEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5471 - Register Codes');
            await court.module.switchToRegisterCodes();
            await court.registerCodes.clickAddNew();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Register Codes');
            await court.module.switchToRegisterCodeEntry();
            await court.registerCodeEntry.enterAtCategoryCode();
            await court.registerCodeEntry.enterAtCategoryDescription();
            await court.registerCodeEntry.selectAtFormType();
            await court.registerCodeEntry.enterAtSortOrder();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Register Codes');
            await court.module.switchToRegisterCodeEntry();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });

    test('CourtEntryScreen_PaymentSchedulingSmokeEntry', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, 'PaymentSchedulingEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Payment Schedule Search');
            await court.module.switchToPaymentScheduleSearch();
            await court.paymentScheduleSearch.clickAddNew();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Payment Schedule Search');
            await court.module.switchToPaymentScheduling();
            await court.paymentScheduling.enterAtDefendantNameID();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Payment Schedule Search');
            await court.module.switchToPaymentScheduling();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });
});

test.describe('DailyDefectCRMCourt', () => {
    // Automated by :-Ranjith Kumar V K  Date :-08/07/2025 Quarter:-3 Sprint:08  Type :- Defect   
    test('DailyDefectCRMCourt_CRM162147ToVerifyTheRegisterCodesItsAllowToSaveTheScreenWithoutAddingTheMandatoryFieldSortOrder_63632', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '63632', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Register Codes');
            await court.module.switchToRegisterCodes();
            await court.registerCodes.clickAddNew();
            await court.module.switchToRegisterCodeEntry();
            await court.registerCodeEntry.enterAtCategoryCode();
            await court.registerCodeEntry.enterAtCategoryDescription();
            await court.registerCodeEntry.selectAtFormType();
            await court.registerCodeEntry.clickSave();
            await court.registerCodeEntry.verify6040SortOrderIsMandatoryAcknowledge();
            await court.module.switchToRegisterCodeEntry();
            await court.registerCodeEntry.enterAtSortOrder();
            await court.registerCodeEntry.save();
            await court.module.switchToRegisterCodeEntry();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessful();
        });
    });

    // Automated by :-Manikandan.k  Date :-10/06/2025 Quarter:-3 Sprint:09  Type :- Defect   
    test('DailyDefectCRMCourt_CRM195027ToVerifyThatCaseNumberDisplayedDOBAndNameModuleDisplayedDOBAreSameWhileSearchingTheCaseNumber_69238', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '69238', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Create Case');
            await court.module.switchToCreateCaseScreenTab();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtCaseNoUsingIndex(1);
            await court.createCase.clickSelectIncidentPopupCancel();
            await court.createCase.clickCopyChargePopupCancel();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1);
            await court.createCase.clickAddButton();
            await court.createCase.tabOutViolationDateNTime();
            await court.createCase.save();
            // await objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage();
            await court.module.switchToScheduling();
            await court.scheduling.closeTheScreen();
            await court.module.switchToCreateCaseScreenTab();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.enterAtCaseNoUsingIndex(1);
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.verifyAtNameIDInGrid();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.verifyAtBirthDate();
            await court.scheduling.clickNameInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.switchToMainTab();
            await names.nameEntry.nameEntryMainTab.VerifyAtBirthDate();
        });
    });

    // Automated By :- Sarathkumar L on 11/21/2025
    // Quarter :4 Sprint : 11 Year : 2025
    // Type of Test Case : DailyDefect  
    test('DailyDefectCRMCourt_CRM200144AttorneyRecommendationScreenSelectedPleaGuiltyInTheFilterDropdownClickedOnSearchThrows1008PageError_72548', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '72548', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Attorney Recommendation');
            await court.module.switchToAttorneyRecommendation();
            await court.attorneyRecommendation.selectAtFilter(); // created
            await court.attorneyRecommendation.clickSearchButton(); // created
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Attorney Recommendation');
            await court.module.switchToAttorneyRecommendation();
            await court.attorneyRecommendation.verifyAtDefendantInGrid(); // created
            await court.attorneyRecommendation.selectRowByAtDefendantInGrid(); // created
            await court.attorneyRecommendation.selectRowByAtChargeInGrid();
            await court.attorneyRecommendation.verifyAtInitialViolation(); // created
            await court.attorneyRecommendation.verifyAtViolation(); // created
            await court.attorneyRecommendation.clickViewReport(); // created
            await home.selectReport.verifySelectReportWindowIsExist();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Select Report');
            await court.module.switchToAttorneyRecommendation();
        });
    });

    // Automated By :- Sarathkumar L on 11/25/2025
    // Quarter :4 Sprint : 11 Year : 2025
    // Type of Test Case : DailyDefect  
    test('DailyDefectCRMCourt_CRM200110ToVerifyTheAttorneyRecommendationReportViewing_72682', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '72682', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Check-In');
            await court.module.switchTocheckIn();
            await court.checkIn.enterAtLastName(); // created
            await court.checkIn.enterAtFirstName(); // created
            await court.checkIn.clickSearchButton(); // created
            await court.checkIn.selectRowByAtDefendantInGrid();
            await court.checkIn.clickCheckInButton();
            await court.checkIn.verifyCheckInLabelAppears();
            await loaderPage.navigateToScreen('Attorney Recommendation');
            await court.module.switchToAttorneyRecommendation();
            await court.attorneyRecommendation.selectAtFilter(); // created
            await court.attorneyRecommendation.clickSearchButton(); // created
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Attorney Recommendation');
            await court.module.switchToAttorneyRecommendation();
            await court.attorneyRecommendation.verifyAtDefendantInGrid(); // created
            await court.attorneyRecommendation.selectRowByAtDefendantInGrid(); // created
            await court.attorneyRecommendation.selectRowByAtChargeInGrid();
            await court.attorneyRecommendation.verifyAtInitialViolation(); // created
            await court.attorneyRecommendation.verifyAtViolation(); // created
            await court.attorneyRecommendation.clickViewReport(); // created
            await home.selectReport.verifySelectReportWindowIsExist();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Select Report');
            await court.module.switchToAttorneyRecommendation();
        });
    });
});

test.describe('Q4DefectTestCasesCourt2025', () => {
    // Automated By :- Mithun on 12/18/2025 // Sprint : 12 Quarter : 4  Year :  2025 // Test Case : 74424
    test('Q4DefectTestCasesCourt2025_CRM_175731_ToverifytheAssessmentsearchAssessmentEntryclickdeletetherecordingridcanceltheconfirmationpopupclickongridheaderagainconfirmationpopupdisplaying_74424', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '74424', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('Assessment Search');
            await court.module.switchToAssessmentSearch();
            await court.assessmentSearch.enterAtRateCode();
            await court.assessmentSearch.clickSearch();
            await court.assessmentSearch.selectAtRateCodeInGrid();
            await court.module.switchToAssessmentsEntry();
            await court.assessmentEntry.deleteAtCodeInGrid();
            await court.assessmentEntry.verifyDeletePopup();
            await court.module.switchToAssessmentsEntry();
            await court.assessmentEntry.clickAtColumHeader();
            // await objectIdentification.manualIdentify.verifyJSErrorNotAppear();
            await court.module.switchToAssessmentsEntry();
        });
    });

    // Automated By :- Mithun on 12/18/2025 // Sprint : 12 Quarter : 4  Year :  2025 // Test Case : 62689
    test('Q4DefectTestCasesCourt2025_CRM_189984_VerifyTheCourtCaseDeletionNameMergedThrowsValidationError_62689', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '62689', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Case Search');
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.clickAddButton();
            await court.createCase.tabOutViolationDateNTime();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            await court.module.switchToCreateCase();
            // await objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Case Search');
            await court.module.switchToCreateCase();
            await court.createCase.closeTheScreen();
            await loaderPage.navigateToScreen('Case Deletion');
            await court.module.switchToCaseDeletion();
            await court.caseDeletion.clickDeleteNew();
            await court.module.switchToCourtDelete();
            await court.courtDelete.enterAtCitationNo();
            await court.courtDelete.tabOutDate();
            await court.courtDelete.enterAtRemarks();
            await court.courtDelete.saveTheScreen();
            await court.module.switchToCourtDelete();
            await court.courtDelete.verifyDeletionSuccessfulStatusMessage();
            await court.courtDelete.closeTheScreen();
            await court.module.switchToCaseDeletion();
            await court.caseDeletion.verifyAtCitationNoInGrid();
            await loaderPage.navigateToModule('Names');
            await loaderPage.navigateToScreen('Name Merge');
            await names.module.switchToNameMerge();
            await names.nameMerge.EnterAtPrimaryANameID();
            await names.nameMerge.VerifyAtPrimaryLastName();
            await names.nameMerge.VerifyAtPrimaryFirstName();
            await names.nameMerge.ClickMergeListTab();
            await names.nameMerge.ClickMergeListTabResetButton();
            await names.nameMerge.EnterAtMergeANameID();
            await names.nameMerge.clickAtMergedIDRowCheckbox();
            await names.nameMerge.verifyAtMergeId();
            await names.nameMerge.verifyAtMergeLastName();
            await names.nameMerge.verifyAtMergeFirstName();
            await names.nameMerge.ClickMergeButton();
            await names.nameMerge.VerifyMergeCompletedAcknowledgeMessage();
            // need to verify this from case deletion screen
            await court.module.switchToCaseDeletion();
            await court.caseDeletion.enterAtLastName();
            await court.caseDeletion.enterAtFirstName();
            await court.caseDeletion.clickSearch();
            await court.caseDeletion.verifyAtCitationNoInGrid();
            await court.caseDeletion.selectAtCitationNoInGrid();
            await court.module.switchToCourtDelete();
            await court.courtDelete.verifyAtNameMergeID();
        });
    });

    // Automated By :- Mithun on // Sprint :12  Quarter : 4 Year : 2025  // Test Case : 74450
    test('Q4DefectTestCasesCourt2025_CRM_168334_ToVerifyTheCourtStatusNameActivityNotShowingDateTime_74450', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '74450', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickAddNew();
            await court.module.switchToCreateCase();
            await court.createCase.enterAtCitationNo();
            await court.createCase.enterAtDefendantNameID();
            await court.createCase.enterAtCharge(1);
            await court.createCase.selectAtCourtActivityType();
            await court.createCase.clickAddButton();
            await court.createCase.tabOutViolationDateNTime();
            // await objectIdentification.manualIdentify.saveTheScreenWithConfirm();
            await loaderPage.navigateToModule('Names');
            await loaderPage.navigateToScreen('Name Search');
            await names.module.switchToNameSearch();
            await names.nameSearch.enterAtNameID();
            await names.nameSearch.clickSearchButton();
            await names.nameSearch.selectRowByAtAtypeNameID();
            await names.module.switchToNameEntry();
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.verifyCurrentDateInGridByAtActivityType();
            await names.nameEntry.activityTab.verifyAtChargeByActivityType(0);
            await names.module.switchToNameEntry();
        });
    });

    // Automated By :- Mithun on // Sprint : 12 Quarter : 4 Year : 2025  // Test Case : 74453
    test('Q4DefectTestCasesCourt2025_CRM_177857CourtPaymentSchedulingwhileclickingongridheaderbluescreenerroroccurs_74453', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '74453', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreen('Payment Scheduling'); // Payment Schedule screen
            await court.module.switchToPaymentScheduling();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Citation#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Case#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Violation');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Disposition');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Plea');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Total Due');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Paid');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Balance');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtScheduledCitationRowHeaders('Status');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Citation#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Case#');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Violation');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Disposition');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Plea');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Total Due');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Paid');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Balance');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.paymentScheduling.clickAtUnScheduledCitationRowHeaders('Status');
            // await objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
            await court.module.switchToPaymentScheduleSearch();
        });
    });

    // Automated By :- Mithun on // Sprint : 12  Quarter : 4 Year : 2025  // Test Case : 74734
    test('Q4DefectTestCasesCourt2025_ToVerifyCourtCaseSearchCourtDateTimeFilterNotShowingTheRecordCorrectly_74734', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '74734', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.clickShowAppearanceCheckbox();
            await court.courtCaseSearch.enterAtCourtCaseStartDate();
            await court.courtCaseSearch.enterAtCourtCaseEndDate();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.verifyAtCourtDateColumnWithStartDateAndEndDateRange();
            await court.courtCaseSearch.clickBack();
            await court.courtCaseSearch.verifyShowAppearanceCheckboxIsChecked();
            await court.courtCaseSearch.verifyAtCourtCaseStartDate();
            await court.courtCaseSearch.verifyAtCourtCaseEndDate();
        });
    });

    // Automated By :- Mithun on // Sprint : 12  Quarter : 4 Year : 2025  // Test Case : 74736
    test('Q4DefectTestCasesCourt2025_CRM_190872ToVerifyCourtCaseSearchSchedulingScreenCourtActivitiesTabPreviousCourtDateTimeChangingWhenEnterNewCourtActivity_74736', async ({ loginPage, loaderPage, popupPage, court, names, home, settings, records, scheduling, geo, traffic, personnel, vehicle, property, qA }) => {
        await withTestContext(testData, '74736', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Court');
            await loaderPage.navigateToScreenByScreenID('5411 - Case Search');
            await court.module.switchToCaseSearch();
            await court.courtCaseSearch.enterAtCitationNo();
            await court.courtCaseSearch.clickSearch();
            await court.courtCaseSearch.selectRowByAtChargeInGrid();
            await court.module.switchToScheduling();
            await court.scheduling.clickCourtActivitiesTab();
            await court.scheduling.courtActivitiesTab.verifyAtCourtDateTimeInGrid(1);
            await court.scheduling.courtActivitiesTab.verifyAtCourtActivityTypeInGrid(1);
            await court.scheduling.courtActivitiesTab.verifyAtChargeInGrid(1);
            await court.scheduling.courtActivitiesTab.clickAtCourtActivityTypeInGrid(1);
            await court.module.switchToCourtActivities();
            await court.courtActivities.verifyAtCourtDate(1);
            await court.courtActivities.closeTheScreen();
            await court.module.switchToScheduling();
            await court.scheduling.courtActivitiesTab.verifyAtCourtDateTimeInGrid(2);
            await court.scheduling.courtActivitiesTab.verifyAtCourtActivityTypeInGrid(2);
            await court.scheduling.courtActivitiesTab.verifyAtChargeInGrid(2);
            await court.scheduling.courtActivitiesTab.clickAtCourtActivityTypeInGrid(2);
            await court.module.switchToCourtActivities();
            await court.courtActivities.verifyAtCourtDate(2);
            await court.courtActivities.closeTheScreen();
            await court.module.switchToScheduling();
            await court.scheduling.courtActivitiesTab.verifyAtCourtDateTimeInGrid(3);
            await court.scheduling.courtActivitiesTab.verifyAtCourtActivityTypeInGrid(3);
            await court.scheduling.courtActivitiesTab.verifyAtChargeInGrid(3);
            await court.scheduling.courtActivitiesTab.clickAtCourtActivityTypeInGrid(3);
            await court.module.switchToCourtActivities();
            await court.courtActivities.verifyAtCourtDate(3);
            await court.courtActivities.closeTheScreen();
            await court.module.switchToScheduling();
        });
    });
});