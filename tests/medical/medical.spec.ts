// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('Medical');

test.describe('Q2MedicalDefect2024', () => {
    // Automated By : - Abinaya M on 04/04/2024
    // Sprint :- : Quarter 2 : Sprint 4  
    // Type of Test case : - Defect - CRM # :- 165628
    // Updated by Abinaya on 05/15/2024
    // Sprint :- : Quarter 2 : Sprint 5  
    // Type of Test case : - Defect - CRM # :- 163999
    test('CRM165628ToVerifyTheMedicalModulesUIIssue_26370', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '26370', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Doctor Search');
            await medical.module.switchToDoctorSearch();
            await medical.doctorSearch.clickAddNew();
            await medical.module.switchToDoctorEntry();
            await medical.doctorEntry.enterAtDoctorName();
            await medical.doctorEntry.enterAtDEANo();
            await medical.doctorEntry.enterAtNPINo();
            await medical.doctorEntry.enterAtAddress();
            await medical.doctorEntry.selectAtPhoneType();
            await medical.doctorEntry.enterAtPhoneNo();
            await medical.doctorEntry.clickAddButton();
            await medical.doctorEntry.saveScreen();
            await medical.doctorEntry.saveAndCloseScreen();
            await medical.module.switchToDoctorSearch();
            await medical.doctorSearch.verifyAtdoctorNameInGrid();
            // Steps updated based on testcase Id - 29331
            await medical.doctorSearch.clickSearch();
            await medical.doctorSearch.selectRandomRowInGrid();
            await medical.module.switchToDoctorEntry();
            await medical.doctorEntry.selectAtPhoneType();
            await medical.doctorEntry.enterPhoneNo();
            await medical.doctorEntry.clickAddButton();
            await medical.doctorEntry.clickPrint();
            await medical.doctorEntry.verify22PleaseSaveAndContinueAck();
            await medical.module.switchToDoctorEntry();
            await medical.doctorEntry.saveScreen();
            await medical.doctorEntry.clickPrint();
            await home.module.switchToSelectReport();
            await home.selectReport.verifyReportNameAsDcotorNameDetails();
        });
    });

    // Automated By : - Abinaya M on 06/21/2024
    // Sprint :- : Quarter 2 : Sprint 6  
    // Type of Test case : - Defect - CRM # :-162149
    test('CRM162149ToVerifyTheMedicalSearchAfterUpdatingTheDataInNewEntryClickOnSaveBottomMessageShowingAs1003AdditionalSuccessfulMessageInsteadOf1002_32678', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '32678', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.clickAddNew();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.enterAtSPNNo();
            await medical.medicalHistory.verifyAtName();
            await medical.medicalHistory.saveScreen();
            await medical.medicalHistory.switchToChartingTab();
            await medical.medicalHistory.chartingTab.tabOutDateAndTime();
            await medical.medicalHistory.chartingTab.enterAtBy();
            await medical.medicalHistory.chartingTab.selectAtReason();
            await medical.medicalHistory.chartingTab.clickAddButton();
            await medical.medicalHistory.chartingTab.verifyAtReasonInGridBasedOnBy();
            await medical.medicalHistory.chartingTab.clickInternalSave();
            await medical.medicalHistory.chartingTab.verifyUpdateSuccessfulMessage();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.saveScreen();
        });
    });

    // Automated by :- Kiran Date :- 10/23/2024 Quarter:- 4 Sprint: 10 Module:- Medical
    test('CRM_173641TOVerifyTheMedicalDentist_StatisIsNotmandatory_WhileTryToAddTheInToTheGridEnterStatusAcknowledgeOcccurs_42218', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '42218', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Dentist');
            await medical.module.switchToMedicalDentist();
            await medical.medicalDentist.enterAtSPN();
            await medical.medicalDentist.tabOutDentalVisitRequiredDateAndTime();
            await medical.medicalDentist.enterAtDentalProblem();
            await medical.medicalDentist.clickInmateSubmittedDentalRequestFromRadioButton();
            await medical.medicalDentist.enterAtReceivedBy();
            await medical.medicalDentist.clickAdd();
            await medical.medicalDentist.Verify3033AcknowledgePopUp();
            await medical.module.switchToMedicalDentist();
            await medical.medicalDentist.selectAtStatus();
            await medical.medicalDentist.clickAdd();
            await medical.medicalDentist.verifyAtToothInGrid();
            await medical.medicalDentist.saveScreen();
            await medical.module.switchToMedicalDentist();
            await medical.medicalDentist.verifyAtToothInGrid();
            await medical.medicalDentist.VerifyAdditionalSuccessFullAcknowledgePopUp();
            await medical.module.switchToMedicalDentist();
        });
    });

    // Automated By :- Mithun on 12/17/2025 // Sprint : 12 Quarter : 4 Year : 2025 // Test Case : 55338
    test('CRM_185451_MedicalSearchWhileSearchTheScreen1006ValidationFailedOccurs_55338', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '55338', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.enterAtFromDate();
            await medical.medicalSearch.clickSearch();
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.verifyAtSPNNoInGrid();
            await medical.medicalSearch.clickAddNew();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.enterAtSPNNo(1);
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.verifyAtName(1);
            await medical.medicalHistory.saveScreen();
            await medical.module.switchToMedicalHistory();
        });
    });

    // Automated By :- Mithun on // Sprint : 12 Quarter : 4 Year : 2025 // Test Case : 74448
    test('CRM_158738_ToVerifyTheChartingTabInTheJUVChartsInsideTheMedicalModuleIsNotWorking_74448', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '74448', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.enterAtFromDate();
            await medical.medicalSearch.clickSearch();
            await medical.medicalSearch.selectAtSPNNo();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.switchToChartingTab();
            await medical.medicalHistory.chartingTab.tabOutDateAndTime();
            await medical.medicalHistory.chartingTab.enterAtBy();
            await medical.medicalHistory.chartingTab.selectAtReason();
            await medical.medicalHistory.chartingTab.switchToMessageBox();
            await medical.medicalHistory.chartingTab.enterAtChartingMessage();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.switchToChartingTab();
            await medical.medicalHistory.chartingTab.clickAddButton();
            await medical.medicalHistory.chartingTab.clickInternalSave();
            await medical.module.switchToMedicalHistory();
        });
    });

    // Automated By :- Mithun on 12/22/2025 // Sprint : 12 Quarter : 4 Year : 2025 // Test Case : 74451
    test('CRM_173762ToverifytheAddtheabilitytosortbasedonthecolumnheaderintheMedicalSearchScreen_74451', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '74451', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.enterAtFromDate();
            await medical.medicalSearch.clickSearch();
            await medical.medicalSearch.verifyColumnSortingAsAscending('SPN#');
            await medical.medicalSearch.verifyColumnSortingAsDescending('SPN#');
            await medical.medicalSearch.verifyColumnSortingAsAscending('CMS Booking#');
            await medical.medicalSearch.verifyColumnSortingAsDescending('CMS Booking#');
            await medical.medicalSearch.verifyColumnSortingAsAscending('Name');
            await medical.medicalSearch.verifyColumnSortingAsDescending('Name');
            await medical.medicalSearch.verifyColumnSortingAsAscending('Primary Doctor');
            await medical.medicalSearch.verifyColumnSortingAsDescending('Primary Doctor');
            await medical.medicalSearch.verifyColumnSortingAsAscending('Primary Dentist');
            await medical.medicalSearch.verifyColumnSortingAsDescending('Primary Dentist');
        });
    });

    // Automated By :- Mithun on // Sprint : 12 Quarter : 4 Year : 2025 // Test Case : 74739
    test('CRM_18129_CannotScheduleMedicationDistribution_74739', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '74739', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.clickAddNew();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.enterAtSPNNo();
            await medical.medicalHistory.saveScreen();
            await medical.medicalHistory.switchToChartingTab();
            await medical.medicalHistory.chartingTab.tabOutDateAndTime();
            await medical.medicalHistory.chartingTab.enterAtBy();
            await medical.medicalHistory.chartingTab.selectAtReason();
            await medical.medicalHistory.chartingTab.switchToMessageBox();
            await medical.medicalHistory.chartingTab.enterAtChartingMessage();
            await medical.medicalHistory.switchToChartingTab();
            await medical.medicalHistory.chartingTab.clickInternalSave();
            await medical.module.switchToMedicalHistory();
        });
    });
});

test.describe('MedicalEntryScreen', () => {
    test('DoctorSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, 'DoctorEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Doctor Search');
            await medical.module.switchToDoctorSearch();
            await medical.doctorSearch.clickAddNew();
            await medical.module.switchToDoctorEntry();
            await medical.doctorEntry.enterAtDoctorName();
            await medical.doctorEntry.selectAtPhoneType();
            await medical.doctorEntry.enterAtPhoneNo();
            await medical.doctorEntry.clickAddButton();
            await medical.doctorEntry.verifyAtPhoneTypeInGrid();
            await medical.doctorEntry.clickSave();
            await medical.doctorEntry.verifyAtPhoneTypeInGrid();
            await medical.module.switchToDoctorEntry();
        });
    });

    test('MedicalHistorySmokeEntry', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, 'MedicalHistoryEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Medical');
            await loaderPage.navigateToScreen('Medical Search');
            await medical.module.switchToMedicalSearch();
            await medical.medicalSearch.clickAddNew();
            await medical.module.switchToMedicalHistory();
            await medical.medicalHistory.enterAtSPNNo();
            await medical.medicalHistory.clickSave();
            await medical.module.switchToMedicalHistory();
        });
    });
});

test.describe('Q4AdmissionMedicalDefect2025', () => {
    // Automated By :- Mohamed Absar A on 12/31/2025 // Type:- Defect // Q4 Sprint 12 2025 CRM#187417
    test('AdmissionInmateSearchPrisonerPropertyMedicationCRM187417_74749', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '74749', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Admission / Booking');
            await loaderPage.navigateToScreen('Inmate Search');
            await admission.module.switchToInmateSearch();
            await admission.inmateSearchScreen.enterAtSPN(1);
            await admission.inmateSearchScreen.Search();
            await admission.inmateSearchScreen.selectAtSPNInGridUsingIndex(1);
            await admission.module.switchToAdmissionEntry();
            await admission.admissionEntry.NavigateToPrisonerPropertyTab();
            await admission.module.switchToInitialInmatePropertyEntry();
            await admission.initialInmateProPertyEntryScreen.selectAtItem(1);
            await medical.module.switchToMedication();
            await medical.medication.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.CloseTheScreen();
            await medical.module.switchToMedication();
            await medical.medication.enterAtDrug(1);
            await medical.medication.enterAtPrescribedAmt(1);
            await medical.medication.enterAtCurrentBalance(1);
            await medical.medication.enterAtRefills(1);
            await medical.medication.clickAddButton();
            await medical.medication.verifyAtDrugInGrid(2);
            await medical.medication.saveScreen();
            await medical.module.switchToMedication();
            await medical.medication.enterAtDrug(3);
            await medical.medication.enterAtPrescribedAmt(1);
            await medical.medication.enterAtCurrentBalance(1);
            await medical.medication.enterAtRefills(1);
            await medical.medication.clickAddButton();
            await medical.medication.verifyAtDrugInGrid(4);
            await medical.medication.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.CloseTheScreen();
            await medical.module.switchToMedication();
            await medical.medication.verifyAtDrugNotAvailableInGrid(4);
            await medical.medication.verifyAtDrugInGrid(2);
        });
    });

    // Automated By :- Mohamed Absar A on 03/26/2026 // Type:- Defect // Q1 Sprint 3 2026 CRM#200020
    test('InitialInmatePropertyMedicalBlueScreenErrorCRM200020_80471', async ({ loginPage, loaderPage, popupPage, medical, home, admission }) => {
        await withTestContext(testData, '80471', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Admission / Booking');
            await loaderPage.navigateToScreen('Inmate Search');
            await admission.module.switchToInmateSearch();
            await admission.inmateSearchScreen.enterAtSPN(1);
            await admission.inmateSearchScreen.Search();
            await admission.inmateSearchScreen.selectAtSPNInGridUsingIndex(1);
            await admission.module.switchToAdmissionEntry();
            await admission.admissionEntry.NavigateToPrisonerPropertyTab();
            await admission.module.switchToInitialInmatePropertyEntry();
            await admission.initialInmateProPertyEntryScreen.selectAtItem(1);
            await medical.module.switchToMedication();
            await medical.medication.enterAtDrug(1);
            await medical.medication.enterAtPrescribedAmt(1);
            await medical.medication.enterAtCurrentBalance(1);
            await medical.medication.enterAtRefills(1);
            await medical.medication.clickAddButton();
            await medical.medication.saveScreen();
            await medical.module.switchToMedication();
            await medical.medication.verifyAtDrugInGrid(2);
            await medical.medication.clickScheduleIconByDrugInGrid(2);
            await medical.module.switchToMedicationSchedule();
            await medical.medicationSchedule.selectAtDistributionPeriod(1);
            await medical.medicationSchedule.enterStartDateAsCurrentDate();
            await medical.medicationSchedule.enterToDateAsFutureDate(5);
            await medical.medicationSchedule.selectAtDistributionDays(1);
            await medical.medicationSchedule.clickAddButton();
            await medical.medicationSchedule.verify30660PleaseConfigureAcknowledgePopup(1);
            await medical.module.switchToMedicationSchedule();
        });
    });
});