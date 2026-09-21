//@ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('AnimalControl');

test.describe('AnimalControlSystemParameter', () => {
    test('AnimalControlSystemParameter_260153', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '260153', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsFalse();

            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsNotMandatory();
            await animalControl.animalCaseEntry.closeScreen();

            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsTrue();

            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsMandatory();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.clickSaveButton();

            await animalControl.animalCaseEntry.verifyEnterCallNumberAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtCallNo();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();

            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsFalse();

            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlSystemParameter_258288', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258288', async () => {
            let regEntry;
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsTrue();

            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();

            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(0);
            await animalControl.animalRegistrationEntry.verifyAtAnimalName();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerName(0);
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            regEntry = await animalControl.animalRegistrationEntry.readRegEntryNo();
            await animalControl.animalRegistrationEntry.verifyAtCostAndFeeTabInvoiceAmountAsSame();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.saveNClose();

            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.enterAtRegEntry(regEntry);
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByAnimalName();
            await animalControl.module.switchToAnimalRegistrationEntry();
            regEntry = await animalControl.animalRegistrationEntry.readRegEntryNo();
            await animalControl.animalRegistrationEntry.verifyAtCostAndFeeTabInvoiceAmountAsSame();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
        });
    });

    test('AnimalControlSystemParameter_258659', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258659', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2501AsFutureDate(2);
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.verifyExpirationDateAsFuturetDate(2);
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalControlSystemParameter_72754', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '72754', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsFalse();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsNotMandatory();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyAtLocation();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveNCloseScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('AnimalControlSystemParameter_72754A', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '72754A', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsTrue();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsMandatory();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.animalCaseEntry.verifyEnterCallNumberAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtCallNo();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyAtLocation();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveNCloseScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.setSystemparameter2504AsFalse();
            await settings.module.switchToSystemParamter();
        });
    });
});

test.describe('2020DefectTestCase', () => {
    test('2020DefectTestCase_259720', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '259720', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtPrimaryNameID();
            await animalControl.animalNameMerge.verifyAtPrimaryNameValidated();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.verifyAtMergingNameValidated();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.selectRowCheckBoxByAnimalName();
            await animalControl.animalNameMerge.clickMergeButton();
            await animalControl.module.switchToAnimalNameMergeHelpWindow();
            await animalControl.animalNameMergeHelpWindow.clickMergeButton();
            await animalControl.animalNameMergeHelpWindow.verify6130AddressUpdateAsOtherAddressConfirmation();
            await animalControl.animalNameMergeHelpWindow.veify6065MergeFieldReplaceWithPrimaryFieldConfirmation();
            await animalControl.animalNameMergeHelpWindow.verifyAtNameMergedSuccessfullyAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.verifyNameMergedSuccessful();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.verifySameNameCannotBeMergedAcknowledge();
            await animalControl.animalNameMerge.verify6071MergedNameIDsAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtMergeLastName();
            await animalControl.animalNameMerge.enterAtMergeFirstName();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.verifyNoRecordsFoundAcknowledgePopup();
            await animalControl.module.switchToAnimalNameMergeScreen();
        });
    });

    test('2020DefectTestCase_258285', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258285', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterPID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterSBCase();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickAIDCustomField();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.enterAtCustomName();
            await settings.repositoryEntry.saveNClose();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickPIDCustomField();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.enterAtCustomName1();
            await settings.repositoryEntry.saveNClose();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickSBCaseCustomField();
            await settings.module.switchToRepositoryEntry();
            await settings.repositoryEntry.enterAtCustomName2();
            await settings.repositoryEntry.saveNClose();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtAIDCustomField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtPIDCustomField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtSBCaseDCustomField();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveNClose();
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAID();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAtNameIDInGrid();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.animalNameSearch.clickResetButton();
            await animalControl.animalNameSearch.enterAtPID();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAtNameIDInGrid();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.animalNameSearch.clickResetButton();
            await animalControl.animalNameSearch.enterAtSBCase();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAtNameIDInGrid();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.module.switchToAnimalNameSearchScreen();
        });
    });

    test('2020DefectTestCase_258287', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258287', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectAtCaseNoInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            const readACENo = await animalControl.animalCaseEntry.readACENo();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAtVictimsNameInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickVictimsNameInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.VerifyAtActivityType();
            await names.nameEntry.activityTab.verifyAtOfficerInGrid();
            await names.nameEntry.activityTab.verifyAtActiveActivityNumber(readACENo);
        });
    });

    test('2020DefectTestCase_258305', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258305', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Accounting');
            await loaderPage.navigateToScreen('Invoice Type');
            await accounting.SwitchToInvoiceTypeScreen();
            await accounting.invoiceType.SelectRowByAtInvoiceType();
            await accounting.SwitchToInvoiceTypeEntry();
            await accounting.invoiceTypeEntry.ClickAddNewItemCodeButton();
            await accounting.SwitchToItemCodeEntry();
            await accounting.itemCodeEntry.EnterAtItemCode();
            await accounting.itemCodeEntry.EnterAtDescription();
            await accounting.itemCodeEntry.EnterAtAmount();
            await accounting.itemCodeEntry.SaveNClose();
            await accounting.SwitchToItemCodeEntry();
            await accounting.itemCodeEntry.Close();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.saveNClose();
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.verifyLicTagDisplayedInGrid();
        });
    });

    test('2020DefectTestCase_258306', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258306', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            // Scenario 1
            await animalControl.animalCaseSearch.clickIntakeCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickDischargedCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickBothCheckBoxAndVerifyOtherCheckboxesUnChecked();
            // Scenario 2
            await animalControl.animalCaseSearch.clickIntakeCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectFirstAnimalNameInDropdown();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtRowInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyIntakeCheckBoxChecked();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyCageDropdownIsDisabled();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAnimalNameInfoIconDisplayed();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickIntakeCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickDischargedCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo1();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtRow1InGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyIntakeCheckBoxChecked();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyCageDropdownIsDisabled();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAnimalNameInfoIconDisplayed();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtRow1InGrid();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyDischargedCheckBoxChecked();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAnimalNameInfoIconDisplayed();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickBothCheckBoxAndVerifyOtherCheckboxesUnChecked();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyBothIntakeAndDischargedEntryIsPresent();
        });
    });

    test('2020DefectTestCase_259713', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '259713', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed2();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtDOB();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtHeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtWeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtLength();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor2();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectMarkings();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectIssuingAgency();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectMfg();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            const animalNameID = await animalControl.animalNameEntry.readAnimalNameID();
            await animalControl.animalNameEntry.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.verifyReportNameAsAnimalNameDetail();
            await home.selectReport.CloseTheScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveNClose();
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.enterAnimalNameIDByActiveData(animalNameID);
            await animalControl.animalLostOrFoundEntry.tabReportedDateAndTime();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.tabOutLostOrFoundDateAndTime();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalLostOrFoundLocation();
            await animalControl.animalLostOrFoundEntry.clickAnimalShelterRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.enterAtReportingPersonsNameID();
            await animalControl.animalLostOrFoundEntry.clickReportingPersonsInfoRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.clickAnimalCollarOrHalterCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyCollarOrHalterInfoIsEnabled();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalLostOrFoundEntry.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.verifyReportNameAsAnimalLostFound();
            await home.selectReport.minimizeTheScreen();
        });
    });

    test('2020DefectTestCase_260392', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '260392', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.verifyLocationInfoIconIsDisplayed();
            await animalControl.animalCaseEntry.tabReportedDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.verifyOfficerInfoIconIsDisplayed();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyAtLocation();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyEnterActivityAcknowledgeMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            const readPhone1 = await animalControl.animalCaseEntry.animalCaseEntryMainTab.readPhone1();
            const readPhone2 = await animalControl.animalCaseEntry.animalCaseEntryMainTab.readPhone2();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickRowByAtActivityInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickNameInfoButton();
            await names.module.switchToNameEntry();
            await names.nameEntry.verifyActivePhoneNumber1(readPhone1);
            await names.nameEntry.verifyActivePhoneNumber2(readPhone2);
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickReset();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickRowByAtActivityInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyActivePhoneNumber1(readPhone1);
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyActivePhoneNumber2(readPhone2);
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('2020DefectTestCase_259716', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '259716', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.tabReportedDateAndTime();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyFoundCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.verifyAnimalLocatedCheckBoxIsEnabled();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.clickFoundCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyLostCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.verifyAnimalLocatedCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.clickFoundCheckBox();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.clickAnimalLocatedCheckBox();
            await animalControl.animalLostOrFoundEntry.tabOutLostOrFoundDateAndTime();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalLostOrFoundLocation();
            await animalControl.animalLostOrFoundEntry.verifyAddressLostFoundBubbleIcon();
            await animalControl.animalLostOrFoundEntry.clickAnimalShelterRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.enterAtReportingPersonsNameID();
            await animalControl.animalLostOrFoundEntry.verifyReportingPersonBubbleIconDisplayed();
            await animalControl.animalLostOrFoundEntry.clickMayWeShareReportingPersonInformationAsYes();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalNameID();
            await animalControl.animalLostOrFoundEntry.verifyAnimalNameBubbleIconDisplayed();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.verifyPrintIconEnabled();
            await animalControl.animalLostOrFoundEntry.verifySaveIconDisabled();
            await animalControl.animalLostOrFoundEntry.verifySaveNCloseIconDisabled();
            await animalControl.animalLostOrFoundEntry.verifyRefreshIconDisabled();
            await animalControl.animalLostOrFoundEntry.verifyLostCheckBoxCheckedAndDisabled();
            await animalControl.animalLostOrFoundEntry.verifyAnimalLocatedCheckBoxCheckedAndDisabled();
        });
    });
});

test.describe('2021DefectTestCase', () => {
    test('2021DefectTestCase_258292', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258292', async () => {
            await loginPage.loginScreen.logonUsingTestContext();
            await loaderPage.navigateToModule('Inventory & Fleet');
            await loaderPage.navigateToScreen('Inventory Search');
            await inventory.SwitchToInventorySearch();
            await inventory.inventorySearch.clickAddNew();
            await inventory.SwitchToInventoryEntry();
            await inventory.inventoryEntry.TabEntryDate();
            await inventory.inventoryEntry.selectAtInventoryName();
            await inventory.inventoryEntry.selectAtCategory();
            await inventory.inventoryEntry.selectAtMake();
            await inventory.inventoryEntry.clickMainTab();
            await inventory.inventoryEntry.inventoryEntryMainTab.selectAtItemCode();
            await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtCheckoutNo();
            await inventory.inventoryEntry.save();
            await inventory.SwitchToInventoryEntry();
            const invNo = await inventory.inventoryEntry.readInventoryNo();
            await inventory.inventoryEntry.close();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Cage Rental');
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.enterAtIssuingPF();
            await animalControl.animalCageRental.enterAtNameID();
            await animalControl.animalCageRental.enterAtInventoryNo(invNo);
            await animalControl.animalCageRental.verifyInventoryInfoIconIsDisplayed();
            await animalControl.animalCageRental.verifyAtCheckOutNo();
        });
    });

    test('2021DefectTestCase_258291', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258291', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(0);
            await animalControl.animalRegistrationEntry.verifyAtAnimalName();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerName(0);
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(1);
            await animalControl.animalRegistrationEntry.verifyAtAnimalName(1);
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerName(1);
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verifyLicTagAlreadyExistsAck();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(1);
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('2021DefectTestCase_258290', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258290', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.enterAtAddress();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            const NameID = await animalControl.animalNameEntry.readAnimalNameID();
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameIDActiveData(NameID);
            await animalControl.animalRegistrationEntry.verifyAtAnimalName();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verifyAtOwnerNameRequiredAck();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtNameInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtDateAsCurrentDateInGrid(0);
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtAnimalNameIDField();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerName(0);
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('2021DefectTestCase_258286', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258286', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.sendTabToAnimalNameFields();
            await animalControl.animalLostOrFoundEntry.closeScreen();
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAnimalNameID();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.clickGridRowByAnimalNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.switchToAnimalNameEntryAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.enterAtAddress();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.selectAtAddressType();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.clickAdd();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.switchToAnimalNameEntryAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyAtAddres(0);
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.selectAtRowByAddress();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyAddressBubbleIconDisplayed();
        });
    });

    test('2021DefectTestCase_258284', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258284', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtLocation();
            await animalControl.animalCaseSearch.enterAtACENo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterWarningSummonsAsRandomText();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await traffic.switchToCitationEntry();
            await traffic.citationEntry.closeCitationEntryScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterAtWarningSummons();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtEntryPresentInGrid();
        });
    });

    test('2021DefectTestCase_258289', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258289', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickIntakeCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectCageDropdownAsAS001();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickIntakeCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyCageDropdownIsDisabled();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveNCloseScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('2021DefectTestCase_275940', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '275940', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(0);
            await animalControl.animalRegistrationEntry.verifyAtAnimalName();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyOwnerNameIDAsEmpty();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verifyAtOwnerNameRequiredAck();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();

            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtAnimalNameIDField();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerName(0);
        });
    });

    test('2021DefectTestCase_260514', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '260514', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Accounting');
            await loaderPage.navigateToScreen('Invoice Type');
            await accounting.SwitchToInvoiceTypeScreen();
            await accounting.invoiceType.SelectRowByAtInvoiceType();
            await accounting.SwitchToInvoiceTypeEntry();
            await accounting.invoiceTypeEntry.ClickAddNewItemCodeButton();
            await accounting.SwitchToItemCodeEntry();
            await accounting.itemCodeEntry.EnterAtItemCode();
            await accounting.itemCodeEntry.EnterAtDescription();
            await accounting.itemCodeEntry.EnterAtAmount();
            await accounting.itemCodeEntry.SaveNClose();
            await accounting.SwitchToInvoiceTypeEntry();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.verifyAtLicTagType();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAtLicTagType();
        });
    });
});

test.describe('AnimalRegistrationEntryTab', () => {
    test('AnimalRegistrationEntryTab_258304', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258304', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.enterAtLicTagNo();
            await animalControl.animalRegistrationSearch.selectAtLicenseIssuingAgency();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToNotesOrConditionsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryNotesOrConditionsTab.enterAtNotes();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToNotesOrConditionsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryNotesOrConditionsTab.verifyAtNotes();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalRegistrationEntryTab_274499', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274499', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.selectIssuingAgency();
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verifyEnterLicTagAck();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtVetnerianNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
            await animalControl.animalRegistrationSearch.enterAtLicTagNo();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.verifyAtLicOrTagNoInGrid(0);
            await animalControl.animalRegistrationSearch.selectGridrowByLicTagType();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToNotesOrConditionsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryNotesOrConditionsTab.enterNotes();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalRegistrationEntryTab_293965', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '293965', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.selectRowByAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickAddButton();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickReceivePaymentButton();
            await accounting.SwitchToReceivePayment();
            await accounting.receivePayment.verifyAtLastName();
            await accounting.receivePayment.verifyAtFirstName();
            await accounting.receivePayment.CloseScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickInvoiceIBubble();
            await accounting.SwitchToInvoiceEntry();
            await accounting.invoiceEntry.VerifyAtBillToAccountLastName();
            await accounting.invoiceEntry.VerifyAtBillToAccountFirstName();
            await accounting.invoiceEntry.SaveNClose();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToFlagsTab();
            await animalControl.animalRegistrationEntry.flagsTab.clickAddFlagsButton();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.SelectAtDisplayCondition();
            await geo.addressFlagEntry.EnterActiveDateAsCurrentDate();
            await geo.addressFlagEntry.EnterInactiveAfterDateAsCurrentDate();
            await geo.addressFlagEntry.enterAtText();
            await geo.addressFlagEntry.clickLoadButton();
            await geo.addressFlagEntry.SaveScreen();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage();
            await geo.addressFlagEntry.CloseScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToFlagsTab();
            await animalControl.animalRegistrationEntry.flagsTab.verifyAtCommentInActiveAsOfInGrid();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalRegistrationEntryTab_293965R2', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '293965R2', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.selectRowByAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickAddButton();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickReceivePaymentButton();
            await accounting.SwitchToReceivePayment();
            await accounting.receivePayment.verifyAtLastName();
            await accounting.receivePayment.verifyAtFirstName();
            await accounting.receivePayment.CloseScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickInvoiceIBubble();
            await accounting.SwitchToInvoiceEntry();
            await accounting.invoiceEntry.VerifyAtBillToAccountLastName();
            await accounting.invoiceEntry.VerifyAtBillToAccountFirstName();
            await accounting.invoiceEntry.SaveNClose();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToFlagsTab();
            await animalControl.animalRegistrationEntry.flagsTab.clickAddFlagsButton();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.SelectAtDisplayCondition();
            await geo.addressFlagEntry.EnterActiveDateAsCurrentDate();
            await geo.addressFlagEntry.EnterInactiveAfterDateAsCurrentDate();
            await geo.addressFlagEntry.enterAtText();
            await geo.addressFlagEntry.clickLoadButton();
            await geo.addressFlagEntry.ClickSaveButton();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage();
            await geo.addressFlagEntry.CloseScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToFlagsTab();
            await animalControl.animalRegistrationEntry.flagsTab.verifyAtCommentInActiveAsOfInGrid();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalRegistrationEntryTab_294294', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '294294', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.clickAddNewButton();
            await geo.module.switchToContactEntry();
            await geo.contactEntryScreen.SelectAtNameRelation();
            await geo.contactEntryScreen.clickNameTypeAsPerson();
            await geo.contactEntryScreen.enterAtLastName();
            await geo.contactEntryScreen.enterAtFirstName();
            await names.module.switchToNameSearchHelpWindow();
            await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
            await geo.module.switchToContactEntry();
            await geo.contactEntryScreen.SelectAtPhoneType1();
            await geo.contactEntryScreen.EnterAtPhoneNumber1();
            await geo.contactEntryScreen.SaveScreen();
            await geo.module.switchToContactEntry();
            await geo.contactEntryScreen.VerifyAdditionSuccessfulMessage();
            await geo.module.switchToContactEntry();
            await geo.contactEntryScreen.CloseScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.clickRefreshButton();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtNameInGrid();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtPhoneNoInGrid();
            await animalControl.animalRegistrationEntry.contactsTab.verifyEnteredDateAsCurrentDateInGrid(0);
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtNameRelationInGrid();
            await animalControl.animalRegistrationEntry.contactsTab.selectAtPhoneType1();
            await animalControl.animalRegistrationEntry.contactsTab.enterAtPhoneNo1();
            await animalControl.animalRegistrationEntry.contactsTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickAddressInfoIcon();
            await geo.module.switchToAddressSearchHelpWindow();
            await geo.addressSearchHelp.switchToContactsTab();
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAtNameInGrid();
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAtPhoneNoInGrid();
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyEnteredDateAsCurrentDateInGrid(0);
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAtNameRelationInGrid();
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAtPhoneType1();
            await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAtPhoneNo1();
            await geo.module.switchToAddressSearchHelpWindow();
        });
    });

    test('AnimalRegistrationEntryTab_294476', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '294476', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.enterAtRegEntry();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToHistoryTab();
            await animalControl.animalRegistrationEntry.historyTab.tabOutUpdateDateAndTime();
            await animalControl.animalRegistrationEntry.historyTab.tabOutUpdatedBy();
            await animalControl.animalRegistrationEntry.historyTab.enterAtComments();
            await animalControl.animalRegistrationEntry.historyTab.clickSaveButton();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToHistoryTab();
            await animalControl.animalRegistrationEntry.historyTab.verifyAtCommentsInGrid();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('AnimalRegistrationEntryTab_296351', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '296351', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByAnimalName();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.clickOwnerInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.VerifyAtLastName();
            await names.nameEntry.verifyAtFirstName();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.clickVeterinarianInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.VerifyAtNameTypeAndID();
        });
    });
});

test.describe('AnimalNameEntryTabFunctional', () => {
    test('AnimalNameEntryTabFunctional_258283', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '258283', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.enterAtAddress();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtHeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtLicenseOrTagNo();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtRabiesTagNo();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtWeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor2();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectExpirationDate();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterRabiesShotExpirationDateAsFutureDate(10);
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed2();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtDOB();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtLength();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectMarkings();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectIssuingAgency();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.enterCurrentDateInDateOFProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd();
            await animalControl.module.switchToMedicalProcedure();
            await animalControl.animalNameEntryMedicalProcedure.verifyWindowTitle();
            await animalControl.animalNameEntryMedicalProcedure.enterAtVeterinarianID();
            await animalControl.animalNameEntryMedicalProcedure.save();
            await animalControl.module.switchToMedicalProcedure();
            await animalControl.animalNameEntryMedicalProcedure.verifyAdditionSuccessfulMessage();
            await animalControl.animalNameEntryMedicalProcedure.saveAndClose();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtNameInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtTypeOfProcedureInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtReasonOfProcedureInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtName();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectRow();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.enterCurrentDateInDateOFProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd();
            await animalControl.module.switchToMedicalProcedure();
            await animalControl.animalNameEntryMedicalProcedure.verifyWindowTitle();
            await animalControl.module.switchToMedicalProcedure();
        });
    });

    test('AnimalNameEntryTabFunctional_274473', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274473', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAnimalNameID();
            await animalControl.animalNameSearch.selectAtSpecies();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAtNameIDInGrid();
            await animalControl.animalNameSearch.verifyAtNameInGrid();
            await animalControl.animalNameSearch.verifyAtSpeciesInGrid();
            await animalControl.animalNameSearch.clickGridRowByAnimalName();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyRequiredEntriesMissingAcknowledge();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtACENo();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyDateAsCurrentDate();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickSave();
            await animalControl.animalNameEntry.verifyDataExistsInOwnerDetailsTabAcknowledgeMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtDateAsCurrentDateInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtNameInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtACENoInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyEnterDateOfProcedureAcknowlege();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.tabDateOFProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd();

            await animalControl.module.switchToAnimalNameEntryOfMedical();
            await animalControl.animalNameEntryMedicalProcedure.enterTotalCost();
            await animalControl.animalNameEntryMedicalProcedure.enterAtVeterinarianID();
            await animalControl.animalNameEntryMedicalProcedure.selctVacType();
            await animalControl.animalNameEntryMedicalProcedure.selectBrand();
            await animalControl.animalNameEntryMedicalProcedure.enterProcedurePerformed();
            await animalControl.animalNameEntryMedicalProcedure.save();
            await animalControl.module.switchToAnimalNameEntryOfMedical();
            await animalControl.animalNameEntryMedicalProcedure.verifyAdditionSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntryOfMedical();
            await animalControl.animalNameEntryMedicalProcedure.saveAndClose();

            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtTypeOfProcedureInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtReasonOfProcedureInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtNameInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('AnimalNameEntryTabFunctional_274474', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274474', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAnimalNameID();
            await animalControl.animalNameSearch.selectAtTypeOfProcedure();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAtNameInGrid();
            await animalControl.animalNameSearch.verifyAtSpeciesInGrid();
            await animalControl.animalNameSearch.clickGridRowByAnimalName();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.clickAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.clickAdd();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyEnterAddressAcknowledgeMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.enterAtAddress();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.selectAtAddressType();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.enterDateAsCurrentDate();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickSave();
            await animalControl.animalNameEntry.verifyDataExistsInAddressesTabAcknowledgeMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.clickAdd();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.animalNameEntry.clickAddressesTab();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyAtAddres(0);
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyAtTypeInGrid();
            await animalControl.animalNameEntry.animalNameEntryAddressesTab.verifyDateAsCurrentDateInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.switchToCommentsTab();
            await animalControl.animalNameEntry.animalNameEntryCommentsTab.VerifyCurrentDate();
            await animalControl.animalNameEntry.animalNameEntryCommentsTab.EnterComments();
            await animalControl.animalNameEntry.animalNameEntryCommentsTab.ClickEnterCommentsButton();
            await popupPage.confirm.yes();
            await animalControl.module.switchToAnimalNameCommentsScreen();
            await names.namesComments.Enter100WordsRichText();
            await animalControl.module.switchToAnimalNameCommentsScreen();
            await names.namesComments.Save();
            await popupPage.confirm.yes();
            await animalControl.module.switchToAnimalNameCommentsScreen();
            await names.namesComments.VerifyAdditionSccessful();
            await names.namesComments.SaveAndCloseScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.switchToCommentsTab();
            await animalControl.animalNameEntry.animalNameEntryCommentsTab.VerifyAtSubjectInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('AnimalNameEntryTabFunctional_282071', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '282071', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyDuplicationOfDataFoundAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickClearButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.clickGridRowByAnimalNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtNameInGrid();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyDuplicationOfDataFoundAcknowledge();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickClearButton();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtPrimaryNameID();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.verifyAtAnimalIDInMergeTable(0);
            await animalControl.animalNameMerge.selectcheckbox();
            await animalControl.animalNameMerge.verifyMergeButtonEnabled();
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickActivityTab();
            await animalControl.animalNameEntry.animalNameEntryActivityTab.selectGridRowByActivityType();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('AnimalNameEntryTabFunctional_294741', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '294741', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickActivityTab();
            await animalControl.animalNameEntry.animalNameEntryActivityTab.verifyAtActivityTypeInGrid();
            await animalControl.animalNameEntry.animalNameEntryActivityTab.selectGridRowByActivityType();
            await animalControl.switchToAnimalRegistrationEntryUsingURL();
            await animalControl.animalNameEntry.verifyAtAnimalLastName();
            await animalControl.animalNameEntry.verifyAtAnimalFirstName();
            await animalControl.switchToAnimalRegistrationEntryUsingURL();
        });
    });

    test('AnimalNameEntryTabFunctional_13191', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '13191', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRandomRowInGrid();
            await animalControl.animalCaseSearch.verifySelectedRowIsNotEditable();
        });
    });
});

test.describe('AnimalControlCaseEntryFunctional', () => {
    test('AnimalControlCaseEntryFunctional_274398', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274398', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsNotMandatory();
            await animalControl.animalCaseEntry.checkInvestigationAuthorizedCheckBox();
            await animalControl.animalCaseEntry.verifyCallNoShownAsMandatory();

            await animalControl.animalCaseEntry.enterAtCaseNo();
            await animalControl.animalCaseEntry.verifyAtLocation();

            await animalControl.animalCaseEntry.clickCaseInfoIcon();
            await records.switchToCaseUpdate();
            let caseReportedDate1 = null;
            let caseReportedTime1 = null;
            await records.caseUpdate.GetDateTime(caseReportedDate1, caseReportedTime1);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyCaseReportedOnDateAndTime(
                caseReportedDate1,
                caseReportedTime1
            );
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyACENoGenerated();
        });
    });

    test('AnimalControlCaseEntryFunctional_274399', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274399', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtCaseNo();
            await animalControl.animalCaseSearch.enterAtLocation();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyAtACENo();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyEnterNameAcknowledgeMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtActivityInGrid(0);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCaseEntryFunctional_274400', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274400', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtOfficer();
            await animalControl.animalCaseSearch.enterAtCFS();
            await animalControl.animalCaseSearch.enterAtLocation();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyAtACENo();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyEnterAnimalNameAcknowledge();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtSex();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtBreed2();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtDOB();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtMicroChipID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtAnimalNameInGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtAnimalNameIDInGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.selectRowByAtAnimalName();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.animalCaseEntry.VerifyUpdatedDataExistsinTheAnimalInfoTabAcknowledge();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyRequiredEntriesMissingAcknowledge();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickIntakeCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.VerifycageDropdownAsMandatory();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectCageDropdownAsAS001();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAnimalHeldAt();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectMethodOfCapture();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectMethodOfIntake();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCaseEntryFunctional_274401', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274401', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtOfficer();
            await animalControl.animalCaseSearch.enterAtCFS();
            await animalControl.animalCaseSearch.selectAtCage();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyAtACENo();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyRequiredEntriesMissingAcknowledge();

            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickComplianceCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyFollowUpDatesDisabled();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickFollowupCallRequiredCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyFollowUpDatesEnabled();

            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterFollowUpDate1AsPrevious();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterFollowUpDate2AsFuture();

            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectResolutions();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAnimalDischargedConfirmationAsYes();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyDischargedCheckBoxChecked();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectHealthStatusOut();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterResolutionDayACurrentDate();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtAnimalNameInGrid(0);
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCaseEntryFunctional_274402', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274402', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtOfficer();
            await animalControl.animalCaseSearch.enterAtCFS();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyAtACENo();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyEnterVictimsNameAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.enterAtVictimNameID();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtLocationOfWounds();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtAnimalsName();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAttack();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAnimalHeldAt();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.selectRowByAtVictimName();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.animalCaseEntry.VerifyUpdatedDataExistsinTheBiteReportTabAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtVictimsName(0);
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtAnimalNameIDinGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickUpdateButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.saveInternal();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCaseEntryFunctional_274403', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274403', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtOfficer();
            await animalControl.animalCaseSearch.enterAtCFS();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickNarrativeTab();
            await animalControl.animalCaseEntry.narrativeTab.selectAtTempelate();
            await animalControl.animalCaseEntry.narrativeTab.clickLoadButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.animalCaseEntry.VerifyUpdatedDataExistsinTheNarrativeTabAcknowledge();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickNarrativeTab();
            await animalControl.animalCaseEntry.narrativeTab.internalSave();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickNarrativeTab();
            await animalControl.animalCaseEntry.narrativeTab.verifyAdditionSuccessfulMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalCaseEntry.clickCaseInfoIcon();
            await records.switchToCaseUpdate();
            await records.caseUpdate.clickReportingTab();
            const Report = await records.caseUpdate.reportingTab.readReportType(0);
            const Report1 = await records.caseUpdate.reportingTab.readReportType(1);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickReportingTab();
            await animalControl.animalCaseEntry.reportingTab.verifyReportTypeInGrid(Report, 0);
            await animalControl.animalCaseEntry.reportingTab.verifyReportTypeInGrid(Report1, 1);
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCaseEntryFunctional_293790', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '293790', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtACENo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtACENoInGrid();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickReportingTab();
            await animalControl.animalCaseEntry.reportingTab.clickAddReport();
            await records.switchToReportManager();
            await records.reportManager.selectAtType();
            await records.reportManager.tabReportedbyPF();
            await records.reportManager.save();
            await records.switchToReportStatus();
            await records.reportStatus.verifyLabelStatusOfSupplementalReportAsOnHold();
            await records.reportStatus.close();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickReportingTab();
            await animalControl.animalCaseEntry.reportingTab.clickRefreshButton();
            await animalControl.animalCaseEntry.reportingTab.verifyAtTypeInGrid();
            await animalControl.animalCaseEntry.reportingTab.verifyAtStatusInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });
});

test.describe('AnimalControlFunctional', () => {
    test('AnimalControlFunctional_274472', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274472', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickAddNew();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalLastName(0);
            await animalControl.animalNameEntry.clickSave();
            await animalControl.animalNameEntry.verify1018RequiredEntriesAreMissingAcknowledge();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.enterAtAddress();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterPID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterSBCase();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectBreed2();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtDOB();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('AnimalControlFunctional_274500', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274500', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.enterAtRegEntry();
            await animalControl.animalRegistrationSearch.selectAtLicType();
            await animalControl.animalRegistrationSearch.enterAtLicTagNo();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.verifyAtLicOrTagNoInGrid(0);
            await animalControl.animalRegistrationSearch.verifyAtRegNo(0);
            await animalControl.animalRegistrationSearch.selectGridrowByLicTagType();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAtRegEntryNo();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
            await animalControl.animalRegistrationSearch.enterAtAnimalFirstName();
            await animalControl.animalRegistrationSearch.enterAtAnimalLastName();
            await animalControl.animalRegistrationSearch.selectAtSpecies();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.verifyAtAnimalName(0);
            await animalControl.animalRegistrationSearch.selectGridrowByAnimalName();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAtRegEntryNo();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
        });
    });

    test('AnimalControlFunctional_274501', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '274501', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtPrimaryNameID();
            await animalControl.animalNameMerge.clickResetButton();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.selectcheckbox();
            await animalControl.animalNameMerge.verifyMergeButtonEnabled();
            await animalControl.animalNameMerge.clickMergeButton();
            await animalControl.module.switchToAnimalNameMergeHelpWindow();
            await animalControl.animalNameMergeHelpWindow.clickMergeButton();
            await animalControl.animalNameMergeHelpWindow.verify6130AddressUpdateAsOtherAddressConfirmation();
            await animalControl.animalNameMergeHelpWindow.veify6065MergeFieldReplaceWithPrimaryFieldConfirmation();
            await animalControl.animalNameMerge.verifyNameMergedSuccessfullyAcknowledge();
        });
    });
});

test.describe('AnimalControlEntrySmoke', () => {
    test('AnimalControlEntrySmoke_ACE', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, 'ACE', async () => {
            await loginPage.loginScreen.Logon();
            await popupPage.acknowledge.okIfWindowExist('AfterLogin');
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyCallNoShownAsNotMandatory();
            await animalControl.animalCaseEntry.checkInvestigationAuthorizedCheckBox();
            await animalControl.animalCaseEntry.verifyCallNoShownAsMandatory();
            await animalControl.animalCaseEntry.enterCaseNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterOfficer();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.selectComplaintType();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyACENoGenerated();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyEnterNameAcknowledgeMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterCFSReportedViolation();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyAdditionSuccessfulMessage();
        });
    });

    test('AnimalControlEntrySmoke_ALFE', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, 'ALFE', async () => {
            await loginPage.loginScreen.Logon();
            await popupPage.acknowledge.okIfWindowExist('AfterLogin');
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Search');
            await animalControl.module.switchToAnimalLostOrFound();
            await animalControl.animalLostFoundSearch.clickAddNew();
            await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.tabReportedDateAndTime();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.tabOutLostOrFoundDateAndTime();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalLostOrFoundLocation();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.clickAnimalShelterRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.enterReportingPersonsNameID();
            await animalControl.animalLostOrFoundEntry.clickReportingPersonsInfoRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.clickAnimalCollarOrHalterCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyCollarOrHalterInfoIsEnabled();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.verifyLFNo();
            await animalControl.animalLostOrFoundEntry.verifyAdditionSuccessfulMessage();
        });
    });

    test('AnimalControlEntrySmoke_ANE', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, 'ANE', async () => {
            await loginPage.loginScreen.Logon();
            await popupPage.acknowledge.okIfWindowExist('AfterLogin');
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickAddNew();
            await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAnimalName();
            await animalControl.animalNameEntry.enterAddress();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterDOB();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterHeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterWeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterLength();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectIssuingAgency();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectMfg();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterOwnerNameID();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd();
            await animalControl.animalNameEntry.saveScreen();
            await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyAnimalID();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
        });
    });

    test('AnimalControlEntrySmoke_ARE', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, 'ARE', async () => {
            await loginPage.loginScreen.Logon();
            await popupPage.acknowledge.okIfWindowExist('AfterLogin');
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAnimalNameID();
            await animalControl.animalRegistrationEntry.selectAtRegistrationType();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterLicTagNo();
            await animalControl.animalRegistrationEntry.save();
            await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen');
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyRegEntryNo();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
        });
    });
});

test.describe('2023DefectTestCase', () => {
    test('2023DefectTestCase_13202', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '13202', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectRow();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.RandomdoubleClickOnAllColumn();
        });
    });

    test('2023DefectTestCase_13203', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '13203', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.animalRegistrationEntry.selectAtLicType1();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo1();
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.enterAtRegEntry();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectIssuingAgency();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.enterLicTagNo();
            await animalControl.animalRegistrationEntry.enterAtAnimalFirstName();
            await animalControl.animalRegistrationEntry.enterAtAnimalLastName();
            await animalControl.module.switchToAnimalNameSearchHelpWindow();
            await animalControl.animalNameSearchHelpWindow.selectRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.clickAnimalsNameResetButton();
            await animalControl.animalRegistrationEntry.verifyAnimalNameIsNull();
        });
    });

    test('2023DefectTestCase_15553', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '15553', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtPrimaryNameID();
            await animalControl.animalNameMerge.verifyAtZeroInAnimalId(testData.get('PrimaryNameID'));
            await animalControl.animalNameMerge.verifyAtPrimaryNameValidated();
            await animalControl.animalNameMerge.clickResetButton();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.selectRowCheckBoxByAnimalName();
            await animalControl.animalNameMerge.verifyAtZeroInAnimalId(testData.get('MergeNameID'));
            await animalControl.animalNameMerge.clickMergeButton();
            await animalControl.module.switchToAnimalNameMergeHelpWindow();
            await animalControl.animalNameMergeHelpWindow.clickMergeButton();
            await animalControl.animalNameMergeHelpWindow.verify6130AddressUpdateAsOtherAddressConfirmation();
            await animalControl.animalNameMergeHelpWindow.veify6065MergeFieldReplaceWithPrimaryFieldConfirmation();
            await animalControl.animalNameMergeHelpWindow.verifyAtNameMergedSuccessfullyAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.verifyNameMergedSuccessful();
            await animalControl.animalNameMerge.enterAtMergeNameID();
            await animalControl.animalNameMerge.verifySameNameCannotBeMergedAcknowledge();
            await animalControl.animalNameMerge.verify6071MergedNameIDsAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
        });
    });

    test('2023DefectTestCase_13731', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '13731', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterAtPrimaryNameID();
            await animalControl.animalNameMerge.verifyAtMergingNameValidated();
            await animalControl.animalNameMerge.verifyAtLastName();
            await animalControl.animalNameMerge.verifyAtFirstName();
            await animalControl.animalNameMerge.clickResetButton();
            await animalControl.animalNameMerge.enterAtMergeLastName();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.clickSelectAllCheckbox();
            await animalControl.animalNameMerge.doubleclickMergeButton();
            await animalControl.animalNameMerge.verifyNameMergedSuccessfullyAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
        });
    });

    test('2023DefectTestCase_17015A', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '17015A', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            const readAnimalNameID = 'H-' + await animalControl.animalNameEntry.readAnimalNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickVeterinarianNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.VerifyAtActivityType();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToModule('Names');
            await loaderPage.navigateToScreen('Name Merge');
            await names.module.switchToNameMerge();
            await names.nameMerge.EnterAtPrimaryANameID();
            await names.nameMerge.EnterAtMergeANameID();
            await names.nameMerge.clickMergeNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToMainTab();
            const Jacket = await names.nameEntry.nameEntryMainTab.readJacket();
            const DOB = await names.nameEntry.nameEntryMainTab.readDOB();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.closeTheScreen();
            await names.module.switchToNameMerge();
            await names.nameMerge.ClickMergeButton();
            await names.module.switchToNameMergeDetails();
            await names.nameMerge.nameMergeScreenDetailsPopup.ClickDOBRowCheckbox();
            await names.nameMerge.nameMergeScreenDetailsPopup.clickJacketNoRowCheckbox();
            await names.nameMerge.nameMergeScreenDetailsPopup.ClickNameDetailsMergeButton();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyAliasNameConfirmMessage();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyMergeFieldsConfirmMessage();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyMergeCompletedAcknowledgeMessage();
            await names.module.switchToNameMerge();
            await names.nameMerge.ClickPrimaryNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToMainTab();
            await names.nameEntry.nameEntryMainTab.VerifyJacket(Jacket);
            await names.nameEntry.nameEntryMainTab.VerifyDOB(DOB);
            await names.nameEntry.switchToAddressesTab();
            await names.nameEntry.nameEntryAddressesTab.VerifyAtAddress(0);
            await names.nameEntry.switchToAliasTab();
            await names.nameEntry.aliasTab.VerifyAtAliasesName(1);
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.VerifyAtActivityType();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterNameID(readAnimalNameID);
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectRow();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianNameID1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianLastName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianFirstName();
        });
    });

    test('2023DefectTestCase_17015B', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '17015B', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            const readAnimalNameID = 'H-' + await animalControl.animalNameEntry.readAnimalNameID();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickVeterinarianNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.VerifyAtActivityType();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToModule('Names');
            await loaderPage.navigateToScreen('Name Merge');
            await names.module.switchToNameMerge();
            await names.nameMerge.EnterAtPrimaryANameID();
            await names.nameMerge.EnterAtMergeANameID();
            await names.nameMerge.clickMergeNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToMainTab();
            const Jacket = await names.nameEntry.nameEntryMainTab.readJacket();
            const DOB = await names.nameEntry.nameEntryMainTab.readDOB();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.closeTheScreen();
            await names.module.switchToNameMerge();
            await names.nameMerge.ClickMergeButton();
            await names.module.switchToNameMergeDetails();
            await names.nameMerge.nameMergeScreenDetailsPopup.ClickDOBRowCheckbox();
            await names.nameMerge.nameMergeScreenDetailsPopup.clickJacketNoRowCheckbox();
            await names.nameMerge.nameMergeScreenDetailsPopup.ClickNameDetailsMergeButton();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyAliasNameConfirmMessage();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyMergeFieldsConfirmMessage();
            await names.nameMerge.nameMergeScreenDetailsPopup.VerifyMergeCompletedAcknowledgeMessage();
            await names.module.switchToNameMerge();
            await names.nameMerge.ClickPrimaryNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.switchToMainTab();
            await names.nameEntry.nameEntryMainTab.VerifyJacket(Jacket);
            await names.nameEntry.nameEntryMainTab.VerifyDOB(DOB);
            await names.nameEntry.switchToAddressesTab();
            await names.nameEntry.nameEntryAddressesTab.VerifyAtAddress(0);
            await names.nameEntry.switchToAliasTab();
            await names.nameEntry.aliasTab.VerifyAtAliasesName(2);
            await names.nameEntry.switchToActivityTab();
            await names.nameEntry.activityTab.VerifyAtActivityType();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterNameID(readAnimalNameID);
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectRow();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianNameID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianLastName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianFirstName();
        });
    });

    test('2023DefectTestCase_18327A', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '18327A', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveAndNew();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveNCloseScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('2023DefectTestCase_18327B', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '18327B', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveAndNew();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveNCloseScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('2023DefectTestCase_19900', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '19900', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.selectAtAddressTypeDropdown(1);
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectRandomGridRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
            await animalControl.animalRegistrationSearch.selectAtAddressTypeDropdown(2);
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectRandomGridRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
            await animalControl.animalRegistrationSearch.enterAtDOB();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtDOB();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickBack();
            await animalControl.animalRegistrationSearch.clickReset();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectRandomGridRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
        });
    });

    test('2023DefectTestCase_19974', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '19974', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Inventory & Fleet');
            await loaderPage.navigateToScreen('Inventory Search');
            await inventory.SwitchToInventorySearch();
            await inventory.inventorySearch.clickAddNew();
            await inventory.SwitchToInventoryEntry();
            await inventory.inventoryEntry.selectAtInvName();
            await inventory.inventoryEntry.selectAtCategory();
            await inventory.inventoryEntry.selectAtMake();
            await inventory.inventoryEntry.saveWithConfrim();
            const inventoryNumber = await inventory.inventoryEntry.readInventoryNo();
            await inventory.inventoryEntry.saveNClose();
            await loaderPage.navigateToModule('Accounting');
            await loaderPage.navigateToScreen('Item Code');
            await accounting.SwitchToItemCode();
            await accounting.itemCode.selectAtDescriptionUnderAnimalContainment();
            await accounting.SwitchToItemCodeEntry();
            await accounting.itemCodeEntry.EnterAtAmount();
            await accounting.itemCodeEntry.SaveNClose();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Cage Rental');
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.enterAtIssuingPF();
            await animalControl.animalCageRental.enterAtNameID();
            await animalControl.animalCageRental.enterAtInventoryNo(inventoryNumber);
            await animalControl.animalCageRental.clickInventoryInfoIcon();
            await inventory.SwitchToInventoryEntry();
            await inventory.inventoryEntry.clickMainTab();
            await inventory.inventoryEntry.inventoryEntryMainTab.selectAtItemCode();
            await inventory.inventoryEntry.inventoryEntryMainTab.EnterCheckout();
            await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtDeptTracking();
            await inventory.inventoryEntry.saveWithConfrim();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.tabOutInventory();
            await animalControl.animalCageRental.verifyDeptTracking();
            await animalControl.animalCageRental.clickSignOutButton();
            await animalControl.animalCageRental.verifyAdditionSuccessful();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.clickInventoryItemTab();
            await animalControl.animalCageRental.inventoryItemTab.verifySignedOutAsLastAction();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.clickSignIn();
            await animalControl.animalCageRental.verifyUpdateSuccessful();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.clickInventoryItemTab();
            await animalControl.animalCageRental.inventoryItemTab.verifySignedInAsLastAction();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.switchToFeesTab();
            await animalControl.animalCageRental.feesTab.verifyAtRateInGrid();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.verifySignInIsDisabled();
            await animalControl.animalCageRental.clickSignOutButton();
            await animalControl.animalCageRental.verifyUpdateSuccessful();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.verifySignOutIsDisabled();
            await animalControl.module.switchToAnimalCageRental();
        });
    });

    test('2023DefectTestCase_46311', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '46311', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickAddNew();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed1();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            const animalIdNo = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.verifyNameID(animalIdNo);
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.copyMicroChipIDValue();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoHeightInField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyHeightInFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoWeightLbsField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyWeightLbsFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoLengthInField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyLengthInFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();

            // Scenario 2 Change Mode
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectAtGridRowById();
            await animalControl.module.switchToAnimalNameEntry();
            const animalIdNo1 = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.verifyNameID(animalIdNo1);
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.copyMicroChipIDValue();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoHeightInField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyHeightInFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoWeightLbsField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyWeightLbsFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.animalNameEntryMainTab.pasteCopiedValueIntoLengthInField();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyLengthInFieldIsBlank();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
        });
    });
});

test.describe('Q4Defect2023', () => {
    test('Q4Defect2023_19901', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '19901', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            const result = await animalControl.animalCaseSearch.getGridData();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.selectAtComplaintType();
            await animalControl.animalCaseSearch.clickSearchButton();
            const result1 = await animalControl.animalCaseSearch.getGridData();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.enterAtACENo();
            await animalControl.animalCaseSearch.clickSearchButton();
            const result2 = await animalControl.animalCaseSearch.getGridData();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('Q4Defect2023_19918', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '19918', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtACENo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.enterAtVictimNameID();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtLocationOfWounds();
            await settings.module.switchToSharedCodes();
            await settings.sharedCodes.closeScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtAnimalsName();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verify1018RequiredEntriesAreMissingAckMsg();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtLocationOfWounds1();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.saveInternal();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.animalCaseEntry.verifyUpdateSuccessfulBottomMessage();
        });
    });

    test('Q4Defect2023_20197', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '20197', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtCaseNo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectAtCaseNoInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickCaseInfoIcon();
            await records.switchToCaseUpdate();
            let caseReportedDate1 = null;
            let caseReportedTime1 = null;
            await records.caseUpdate.GetDateTime(caseReportedDate1, caseReportedTime1);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyCaseReportedOnDateAndTime(
                caseReportedDate1,
                caseReportedTime1
            );
            await animalControl.animalCaseEntry.verifyReportedDay();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.enterAtCallNo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.selectRowByAtAceNo();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickCaseInfoIcon();
            await records.switchToCaseUpdate();
            let caseReportedDate2 = null;
            let caseReportedTime2 = null;
            await records.caseUpdate.GetDateTime(caseReportedDate2, caseReportedTime2);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.VerifyCaseReportedOnDateAndTime(
                caseReportedDate1,
                caseReportedTime1
            );
            await animalControl.animalCaseEntry.verifyReportedDay1();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('Q4Defect2023_20012', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '20012', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtHeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            const Animalid1 = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterHeight();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectColor1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID1();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            const Animalid2 = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToScreen('Animal Name Merge');
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMerge.enterPrimaryNameID1(Animalid1);
            await animalControl.animalNameMerge.verifyAtPrimaryNameValidated();
            await animalControl.animalNameMerge.enterMergeName(Animalid2);
            await animalControl.animalNameMerge.verifyAtMergingNameValidated();
            await animalControl.animalNameMerge.clickSearchButton();
            await animalControl.animalNameMerge.selectRowCheckBoxById(Animalid2);
            await animalControl.animalNameMerge.verifyAtIdAppearsGreenColor(Animalid2);
            await animalControl.animalNameMerge.clickMergeButton();
            await animalControl.module.switchToAnimalNameMergeHelpWindow();
            await animalControl.animalNameMergeHelpWindow.SelectRowCheckBoxByFields();
            await animalControl.animalNameMergeHelpWindow.clickMergeButton();
            await animalControl.animalNameMergeHelpWindow.verify6130AddressUpdateAsOtherAddressConfirmation();
            await animalControl.animalNameMergeHelpWindow.veify6065MergeFieldReplaceWithPrimaryFieldConfirmation();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await animalControl.animalNameMergeHelpWindow.verifyAtNameMergedSuccessfullyAcknowledge();
            await animalControl.module.switchToAnimalNameMergeScreen();
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.animalNameSearch.clickResetButton();
            await animalControl.animalNameSearch.enterNameID(Animalid1);
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.clickGridRowByAnimalName();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyNameID(Animalid1);
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianNameID1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianLastName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianFirstName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtPedigreeName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtSpecies();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            const date = await animalControl.animalRegistrationEntry.getIssuedDate();
            await animalControl.animalRegistrationEntry.selectAtRegistrationType();
            await animalControl.animalRegistrationEntry.enterLicTagNo();
            await animalControl.animalRegistrationEntry.enterAnimaNameId(Animalid1);
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtVetnerianNameID1();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('Q4Defect2023_23086', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '23086', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickAddNew();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.enterAtAddress();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed2();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await animalControl.animalNameEntry.saveNClose();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickAddNew();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.enterAtAddress();
            await animalControl.animalNameEntry.verifyAddressBubbleIconDisplayed();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed1();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtBreed2();
            await animalControl.animalNameEntry.clickSave();
        });
    });

    test('Q4Defect2023_20040', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '20040', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyAtDescription();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToNotesOrConditionsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryNotesOrConditionsTab.enterNotes();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToHistoryTab();
            await animalControl.animalRegistrationEntry.historyTab.enterAtComments();
            await animalControl.animalRegistrationEntry.historyTab.clickSaveButton();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToFlagsTab();
            await animalControl.animalRegistrationEntry.flagsTab.clickAddFlagsButton();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.SelectAtDisplayCondition();
            await geo.addressFlagEntry.EnterActiveDateAsCurrentDate();
            await geo.addressFlagEntry.SaveScreen();
            await geo.module.switchToAddressFlagEntry();
            await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage();
            await geo.addressFlagEntry.ClickSaveAndCloseButton();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.clickAddNewButton();
            await names.module.switchToContactEntry();
            await names.contactEntry.SelectNameRelationAsBuildingOwner();
            await names.contactEntry.EnterAtLastName();
            await names.module.switchToContactEntry();
            await names.contactEntry.SelectPhoneTypeAsHome();
            await names.contactEntry.EnterPhoneNumber();
            await names.contactEntry.saveScreen();
            await names.module.switchToContactEntry();
            await names.contactEntry.verifyAdditionSuccessFull();
            await names.contactEntry.ClickSaveNClose();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.clickRefreshButton();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtNameRelationInGrid();
            await animalControl.animalRegistrationEntry.contactsTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Applicant');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Fees');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Notes/Conditions');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('History');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Flags');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Contacts');
            await animalControl.animalRegistrationEntry.saveNClose();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtLicType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToHistoryTab();
            await animalControl.animalRegistrationEntry.historyTab.enterAtComments();
            await animalControl.animalRegistrationEntry.historyTab.clickSaveButton();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage();
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Applicant');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('Fees');
            await animalControl.animalRegistrationEntry.verifyAtTabsColorAsBlue('History');
        });
    });

    test('Q4Defect2023_24795', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '24795', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAnimalNameID();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.clickGridRowByAnimalNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.tabDateOFProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd();
            await animalControl.module.switchToAnimalNameEntryOfMedical();
            await animalControl.animalNameEntryMedicalProcedure.enterAtVeterinarianID();
            await animalControl.animalNameEntryMedicalProcedure.clickNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.SelectPhoneTypeAsHome();
            await names.nameEntry.EnterAtPhoneNo();
            await names.nameEntry.SelectPhoneType1AsWork();
            await names.nameEntry.EnterAtPhoneNo1();
            await names.nameEntry.Save();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.VerifyUpdateSuccessfulStatusMessage();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalNameEntryOfMedical();
            await animalControl.animalNameEntryMedicalProcedure.saveAndClose();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMedicalTab();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyRowCountAs1();
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtNameInGrid(0);
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtPhoneInGrid(0);
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('Q4Defect2023_26550', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '26550', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.enterAtAnimalNameID();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.clickGridRowByAnimalNameID();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.clickVeterinarianNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.ClearLastName();
            await names.nameEntry.EnterAtLastName();
            await names.nameEntry.ClearFirstName();
            await names.nameEntry.EnterAtFirstName();
            await names.nameEntry.SaveNCloseScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianLastName();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyAtVeterinarianFirstName();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.selectAtNameInGrid();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickOwnerNameInfoIcon();
            await names.module.switchToNameEntryUsingUrl();
            await names.nameEntry.ClearLastName();
            await names.nameEntry.EnterAtLastName();
            await names.nameEntry.ClearFirstName();
            await names.nameEntry.EnterAtFirstName();
            await names.nameEntry.SaveNCloseScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickOwnerDetailsTab();
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtNameInGrid();
            await animalControl.module.switchToAnimalNameEntry();
        });
    });

    test('Q4Defect2023_26349', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '26349', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.enterAtCaseNo();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickInternalSaveButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verify6040AddAnimalNameToGridAck();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickInternalSaveButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verify6040AddVictimNameToGridAck();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.enterAtVictimNameID();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtLocationOfWounds();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtAnimalsName();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.saveBiteReportTab();
        });
    });

    test('Q4Defect2023_26224', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '26224', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('Coded');
            await settings.module.switchToCodedScreen();
            await settings.coded.enterAtCodeID();
            await settings.coded.clickSearchButton();
            await settings.coded.verifyAtCodeIDInGrid(0);
            await settings.coded.clickRowByAtCodeID();
            await settings.module.switchToSharedCodes();
            await settings.sharedCodes.clickAddNewButton();
            await settings.sharedCodes.EnterAtPopUpCodeValue();
            await settings.sharedCodes.EnterAtPopUpDescription();
            await settings.sharedCodes.selectAtSpecies();
            await settings.sharedCodes.clickAddButtonInPopUp();
            await settings.sharedCodes.closeScreen();
            await settings.module.switchToCodedScreen();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtNameID();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtColor1();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.animalNameEntry.saveNClose();
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtNameID1();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtColor2();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage();
            await animalControl.module.switchToAnimalNameEntry();
        });
    });
});

test.describe('Q2Defect2024', () => {
    test('Q2Defect2024_21775', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '21775', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Search');
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickTrackingLookUpIcon();
            await popupPage.switchToCodedSearch();
            await popupPage.kPICodedLookup.selectAtCodeValueInGrid();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.selectAtGridRowById();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickAddressInfoIcon();
            await geo.module.switchToAddressSearchHelpWindow();
            await geo.addressSearch.ClickAddressButton();
            await geo.switchToAddressIntersection2040();
            await geo.addressIntersection2040.switchToPoliceTab();
            await geo.addressIntersection2040.policeTab.VerifyAtTrackNo(0);
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.animalNameSearch.clickResetButton();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyAllRecordsDisplayedInGrid();
            await animalControl.animalNameSearch.clickBackButton();
            await animalControl.animalNameSearch.clickTrackingLookUpIcon();
            await popupPage.switchToCodedSearch();
            await popupPage.kPICodedLookup.selectAtDescription();
            await animalControl.module.switchToAnimalNameSearchScreen();
            await animalControl.animalNameSearch.clickSearch();
            await animalControl.animalNameSearch.verifyNoRecordFoundAcknowledge1011();
            await animalControl.module.switchToAnimalNameSearchScreen();
        });
    });

    test('Q2Defect2024_29758', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '29758', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAtAnimalName();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSpecies();
            await animalControl.animalNameEntry.animalNameEntryMainTab.selectAtSex();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtVeterinarianNameID();
            await animalControl.animalNameEntry.saveScreen();
            const animalIdNo = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.VerifyAdditionSuccessfulMessage();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalFirstName();
            await animalControl.module.switchToAnimalNameSearchHelpWindow();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonDisabled();
            await animalControl.animalNameSearchHelpWindow.verifyAtNameIdInGrid(animalIdNo);
            await animalControl.animalNameSearchHelpWindow.verifyAtNameInGrid();
            await animalControl.animalNameSearchHelpWindow.selectCheckBoxInGrid();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonEnabled();
            await animalControl.animalNameSearchHelpWindow.closeScreen();
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalFirstName();
            await animalControl.module.switchToAnimalNameSearchHelpWindow();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonDisabled();
            await animalControl.animalNameSearchHelpWindow.verifyAtNameIdInGrid(animalIdNo);
            await animalControl.animalNameSearchHelpWindow.verifyAtNameInGrid();
            await animalControl.animalNameSearchHelpWindow.selectCheckBoxInGrid();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonEnabled();
            await animalControl.animalNameSearchHelpWindow.closeScreen();
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterOfficer();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.selectComplaintType();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtFirstName();
            await animalControl.module.switchToAnimalNameSearchHelpWindow();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonDisabled();
            await animalControl.animalNameSearchHelpWindow.verifyAtNameIdInGrid(animalIdNo);
            await animalControl.animalNameSearchHelpWindow.verifyAtNameInGrid();
            await animalControl.animalNameSearchHelpWindow.selectCheckBoxInGrid();
            await animalControl.animalNameSearchHelpWindow.verifyViewDetailsButtonEnabled();
            await animalControl.animalNameSearchHelpWindow.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });

    test('Q2Defect2024_34941', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '34941', async () => {
            await loginPage.loginScreen.logonUsingTestContextOtherDB();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.enterAtAnimalLastName();
            await animalControl.animalRegistrationSearch.enterAtAnimalFirstName();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByAnimalName();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.selectAtPhoneType1();
            await animalControl.animalRegistrationEntry.contactsTab.clickSave();
            await animalControl.animalRegistrationEntry.verifyEnterMandatoryDataAcknowledgeMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.enterAtPhoneNo1();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verify1051UpdateDataExistInTheContactsTabAcknowledgeMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtPhoneType1();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtPhone1();
            await animalControl.animalRegistrationEntry.contactsTab.clearPhone1Field();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickSave();
            await animalControl.animalRegistrationEntry.verify1051UpdateDataExistInTheContactsTabAcknowledgeMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.clickSave();
            await animalControl.animalRegistrationEntry.verifyEnterMandatoryDataAcknowledgeMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.switchToContactsTab();
            await animalControl.animalRegistrationEntry.contactsTab.verifyAtPhoneType1();
            await animalControl.animalRegistrationEntry.contactsTab.enterAtPhoneNo1();
            await animalControl.animalRegistrationEntry.contactsTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('Q2Defect2024_44078', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '44078', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.pressTabThrice();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectRandomGridRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickAnimalNameID();
            await animalControl.animalRegistrationEntry.pressTabThrice();
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('Q2Defect2024_37771', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '37771', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtRegistrationType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo();
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.selectRowByAtDescription();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.enterAtRate();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickUpdateButton();
            await animalControl.animalRegistrationEntry.clickSave();
            await popupPage.acknowledge.okWithExpectedMessage('(1051)Updated data exists in the Fees tab. You must save or reset.');
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.saveTab();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.verifyUpdateSuccessfulBottomMessage();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.save();
            const regEntry = await animalControl.animalRegistrationEntry.readRegEntryNo();
            await animalControl.animalRegistrationEntry.closeScreen();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickSearch();
            await animalControl.animalRegistrationSearch.selectGridrowByRegNo(regEntry);
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickFeesTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryFeesTab.clickDeleteGridRow();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await popupPage.acknowledge.okWithExpectedMessage('(1051)Updated data exists in the Fees tab. You must save or reset.');
            await animalControl.module.switchToAnimalRegistrationEntry();
        });
    });

    test('Q2Defect2024_37736', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '37736', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            // scenario 1: Animal Name -- verified address, Owner Name -- verified address
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(0);
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyAddressCheckboxIsChecked();
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.clickOwnerInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.verifyAddressCheckboxisSelected();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtRegistrationType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(0);
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickMapTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.clickReset();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.verifyAtLatLongNotSetIsDisplayed(0);
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.clickUpdateLatLong();
            await popupPage.confirm.yesWithExpectedMessage('(5115)Master Geo already has Lat/Long. Do you want to overwrite?');
            await popupPage.confirm.yesWithExpectedMessage('(5102)Are you sure you want to update the Latitude and Longitude to  32.5294962  /  -84.8954814  ?');
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickMapTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.verifyAtLatLongNotSetIsDisplayed(1);
            await popupPage.acknowledge.okIfWindowExistAsError();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.verifyOwnerNameIsDisplayed();

            // scenario 2: Animal Name - with unverified address, Owner Name - with verified address
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Registration Search');
            await animalControl.module.switchToAnimalRegistrationSearchScreen();
            await animalControl.animalRegistrationSearch.clickAddNew();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID(1);
            await animalControl.animalRegistrationEntry.clickAnimalNameInfoBubbleIcon();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.verifyAddressCheckboxisNotSelected();
            await animalControl.animalNameEntry.closeScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickApplicantsTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.clickOwnerInfoIcon();
            await names.module.switchToNameEntry();
            await names.nameEntry.verifyAddressCheckboxisSelected();
            await names.nameEntry.closeTheScreen();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime();
            await animalControl.animalRegistrationEntry.selectAtRegistrationType();
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(1);
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate();
            await animalControl.animalRegistrationEntry.save();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.module.switchToAnimalRegistrationEntry();
            await animalControl.animalRegistrationEntry.clickMapTab();
            await popupPage.acknowledge.okWithExpectedMessageIfWindowExist('(1063)Invalid zip code');
            await animalControl.animalRegistrationEntry.clickMapTab();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.clickReset();
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.verifyAtLatLongNotSetIsDisplayed(0);
            await animalControl.animalRegistrationEntry.animalRegistrationEntryMapTab.clickUpdateLatLong();
            await popupPage.confirm.yesWithContainsMessage('(5102)Are you sure you want to update the Latitude and Longitude to  46.73114  /  -101.50703  ?');
        });
    });

    test('Q2Defect2024_44018', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '44018', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Name Entry');
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.enterAnimalName();
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            await animalControl.animalNameEntry.clickMainTab();
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterAtMicroChipID();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyMicroChipIDlengthNotGreaterThan20();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyMicrochipIDIsNotEqual();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyMicroChipIDlength(20);
            await animalControl.animalNameEntry.saveScreen();
            await animalControl.module.switchToAnimalNameEntry();
            const animalIdNo = await animalControl.animalNameEntry.getAnimalIdNo();
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyMicroChipIDlength(20);
            await animalControl.animalNameEntry.closeScreen();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.tabReportedDateAndTime();
            await animalControl.animalLostOrFoundEntry.tabOutLostOrFoundDateAndTime();
            await animalControl.animalLostOrFoundEntry.enterAnimalLostOrFoundLocation();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.clickAnimalShelterRadioButtonAsYes();
            await animalControl.animalLostOrFoundEntry.enterReportingPersonsNameID();
            await animalControl.animalLostOrFoundEntry.enterAnimalNameIDByActiveData(animalIdNo);
            await animalControl.animalLostOrFoundEntry.verifyMicroChipID(0);
            await animalControl.module.switchToAnimalLostOrFoundEntry();
        });
    });

    test('Q2Defect2024_48561', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '48561', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.clickSaveButton();
            await animalControl.animalCaseEntry.verifyConfirmationPopupIsArising();
            await popupPage.confirm.yes();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.clickSaveAndClose();
            await animalControl.animalCaseEntry.verifyConfirmationPopupIsArising();
            await popupPage.confirm.yes();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.clickSaveAndAddNew();
            await animalControl.animalCaseEntry.verifyConfirmationPopupIsArising();
            await popupPage.confirm.yes();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.closeScreen();
            await animalControl.module.switchToAnimalCaseSearch();
        });
    });
});

test.describe('AnimalControlCheckListQ2S62025', () => {
    test('AnimalControlCheckListQ2S62025_58645', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58645', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabReportedDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.setAceYearToJSONFile('58645');
            await animalControl.animalCaseEntry.setAceNoToJSONFile('58645');
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtActivityInGrid(0);
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtActivityInGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtNameInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtAddressInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCheckListQ2S62025_58645A', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58645A', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtAceNoUsingJSONReadFile('58645');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.enterAtAnimalNameID();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.saveAnimalInfoTab();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickAnimalInfoTab();
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtAnimalNameIDInGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryAnimalInfoTab.verifyAtAnimalNameInGrid(0);
        });
    });

    test('AnimalControlCheckListQ2S62025_58645B', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58645B', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtAceNoUsingJSONReadFile('58645');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyCageDropdownIsDisabled();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickIntakeCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyCageDropdownIsEnabled();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectCageDropdownAsAS001();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.taboutDateAndTime();
            const date = await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.getDate();
            const time = await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.getTime();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectMethodOfCapture();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectMethodOfIntake();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAnimalHeldAt();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtHealthStatusIn();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtPhysicalState();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtWaterAvailable();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtFoodAvailable();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtAttitude();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtPregnant();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.selectAtOffspringPresent();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.enterAtEarliestReleaseDate();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtDateAndTimeInGrid(date, time);
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtNameInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtHeldAtInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtHealthInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtCageNoInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtReleaseDateInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickObservationsTab();
            await animalControl.animalCaseEntry.animalCaseEntryObservationsTab.verifyAtNameInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCheckListQ2S62025_58645C', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58645C', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtAceNoUsingJSONReadFile('58645');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtAnimalName();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.taboutDateAndTime();
            const date1 = await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.getDate();
            const time1 = await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.getTime();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickDischargedCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.dismiss9900AlertPopup();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickComplianceCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickFollowUpCallRequiredCheckBox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtHealthStatusOut();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterFollowUpDate1AsPrevious();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterFollowUpDate2AsFuture();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.selectAtResolutions();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.dismiss9900AlertPopup();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickIsVerbalWarningIssuedCheckbox();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.enterResolutionDayACurrentDate();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyDateAndTimeInGrid(date1, time1);
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtAnimalNameInGrid(0);
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtResolutionsInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyFollowUpCheckBoxIsCheckedInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtHealthOutInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickResolutionsTab();
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyDateAndTimeInGrid(date1, time1);
            await animalControl.animalCaseEntry.animalCaseEntryResolutionsTab.verifyAtAnimalNameInGrid(0);
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCheckListQ2S62025_58645D', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58645D', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtAceNoUsingJSONReadFile('58645');
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.enterAtVictimNameID();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtLocationOfWounds();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.selectAtAnimalsName();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.clickAddButton();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtVictimNameInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtAddressInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtAnimalNoInGrid();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.saveInternal();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickBiteReportTab();
            await animalControl.animalCaseEntry.animalCaseEntryBiteReportTab.verifyAtVictimNameInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyNarrativeTabIsDisplayed();
            await animalControl.animalCaseEntry.verifyAttachmentsTabIsDisplayed();
            await animalControl.animalCaseEntry.verifyApprovalTabIsDisplayed();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });

    test('AnimalControlCheckListQ2S62025_58638', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58638', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.enterAtACENo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtACENoInGrid();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.verifyACEIsBlank();
            await animalControl.animalCaseSearch.enterAtCaseNo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtCaseNoInGrid();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.verifyCaseIsBlank();
            await animalControl.animalCaseSearch.selectAtApprovalStatus();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtApprovalStatus();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickBackButton();
            await animalControl.animalCaseSearch.verifyApprovalStatusIsDisplayed();
        });
    });

    test('AnimalControlCheckListQ2S62025_58658', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58658', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Cage Rental');
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.enterAtIssuingPF();
            await animalControl.animalCageRental.enterAtIssuedPF();
            await animalControl.animalCageRental.verifyIssuedToNameIDFieldsIsDisabled();
            await animalControl.animalCageRental.verifyIssuedToNameTypeFieldsIsDisabled();
            await animalControl.animalCageRental.verifyIssuedToLastNameFieldsIsDisabled();
            await animalControl.animalCageRental.verifyIssuedToFirstNameFieldsIsDisabled();
            await animalControl.animalCageRental.verifyIssuedToMiddleNameFieldsIsDisabled();
            await animalControl.animalCageRental.clearIssuedPF();
            await animalControl.animalCageRental.verifyIssuedToNameIDFieldsIsEnabled();
            await animalControl.animalCageRental.verifyIssuedToNameTypeFieldsIsEnabled();
            await animalControl.animalCageRental.verifyIssuedToLastNameFieldsIsEnabled();
            await animalControl.animalCageRental.verifyIssuedToFirstNameFieldsIsEnabled();
            await animalControl.animalCageRental.verifyIssuedToMiddleNameFieldsIsEnabled();
            await animalControl.animalCageRental.enterAtNameID();
            await animalControl.animalCageRental.verifyIssuedPFCodesIsDisabled();
            await animalControl.animalCageRental.verifyIssuedPFDescriptionIsDisabled();
            await animalControl.animalCageRental.verifyIssuedPFLookupIconIsDisabled();
            await animalControl.animalCageRental.enterAtInventoryNo();
            await animalControl.animalCageRental.clickSignOutButton();
            await animalControl.animalCageRental.verifyAdditionSuccessful();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.clickSignIn();
            await animalControl.animalCageRental.verifyUpdateSuccessful();
            await animalControl.module.switchToAnimalCageRental();
            await animalControl.animalCageRental.switchToFeesTab();
            await animalControl.animalCageRental.feesTab.selectAtItemCode();
            await animalControl.animalCageRental.feesTab.clickAdd();
            await animalControl.animalCageRental.feesTab.verifyAtItemCodeInGrid();
            await animalControl.module.switchToAnimalCageRental();
        });
    });

    test('AnimalControlCheckListQ2S62025_58283', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '58283', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Entry');
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyFoundCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.tabReportedDateAndTime();
            await animalControl.animalLostOrFoundEntry.tabOutLostOrFoundDateAndTime();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalLostOrFoundLocation();
            await animalControl.animalLostOrFoundEntry.clickNoInCheckedTheCurrentAnimalShelter();
            await animalControl.animalLostOrFoundEntry.enterAtReportingPersonsNameID();
            await animalControl.animalLostOrFoundEntry.clickNoInMayWeShareTheReportingPersonsInformation();
            await animalControl.animalLostOrFoundEntry.enterAtAnimalNameID();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            const LFNo = await animalControl.animalLostOrFoundEntry.getLFNo();
            await animalControl.animalLostOrFoundEntry.closeScreen();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Search');
            await animalControl.module.switchToAnimalLostOrFound();
            await animalControl.animalLostFoundSearch.enterAtLastName();
            await animalControl.animalLostFoundSearch.enterAtFirstName();
            await animalControl.animalLostFoundSearch.clickSearch();
            await animalControl.animalLostFoundSearch.verifyAtLFInGrid(LFNo);
            await animalControl.animalLostFoundSearch.selectAtLFInGrid(LFNo);
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyFoundCheckBoxIsEnabled();
            await animalControl.animalLostOrFoundEntry.clickFoundCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyLostCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.verifyAnimalLocatedCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.clickFoundCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyLostCheckBoxIsEnabled();
            await animalControl.animalLostOrFoundEntry.clickLostCheckBox();
            await animalControl.animalLostOrFoundEntry.verifyFoundCheckBoxIsDisabled();
            await animalControl.animalLostOrFoundEntry.clickAnimalLocatedCheckBox();
            await animalControl.animalLostOrFoundEntry.saveScreen();
            await animalControl.module.switchToAnimalLostOrFoundEntry();
            await animalControl.animalLostOrFoundEntry.verifySaveIconDisabled();
            await animalControl.animalLostOrFoundEntry.closeScreen();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Lost/Found Search');
            await animalControl.module.switchToAnimalLostOrFound();
            await animalControl.animalLostFoundSearch.clickBack();
            await animalControl.animalLostFoundSearch.clickReset();
            await animalControl.animalLostFoundSearch.enterAtLastName();
            await animalControl.animalLostFoundSearch.enterAtFirstName();
            await animalControl.animalLostFoundSearch.clickSearch();
            await animalControl.animalLostFoundSearch.verify1011NoRecordFoundAcknowledge();
            await animalControl.module.switchToAnimalLostOrFound();
        });
    });

    test('AnimalControlCheckListQ2S62025_72473', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '72473', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            // scenario2
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.selectAtCage();
            await animalControl.animalCaseSearch.selectAtComplaintType();
            await animalControl.animalCaseSearch.selectAtResolutions();
            await animalControl.animalCaseSearch.selectAtApprovalStatus();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await animalControl.animalCaseSearch.verifyNoDataPresentAcknowledgeMessage();
            // scenario1
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickResetButton();
            await animalControl.animalCaseSearch.enterAtFollowUpDateFrom();
            await animalControl.animalCaseSearch.enterAtFollowUpDateTo();
            await animalControl.animalCaseSearch.clickSearchButton();
            await animalControl.animalCaseSearch.verifyAtACENoInGrid();
            await animalControl.animalCaseSearch.clickExcelIcon();
            await animalControl.animalCaseSearch.verifyDownloadFileFormatIsExcel();
        });
    });
});

test.describe('Q3S8Defect2025', () => {
    test('Q3S8Defect2025_63110', async ({ loginPage, loaderPage, popupPage, animalControl, home, settings, geo, names, inventory, records, traffic, qA, accounting }) => {
        await withTestContext(testData, '63110', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Animal Control');
            await loaderPage.navigateToScreen('Animal Case Search');
            await animalControl.module.switchToAnimalCaseSearch();
            await animalControl.animalCaseSearch.clickAddNewButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.enterAtLocation();
            await animalControl.animalCaseEntry.tabReportedDateAndTime();
            await animalControl.animalCaseEntry.enterAtOfficer();
            await animalControl.animalCaseEntry.selectAtComplaintType();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickApprovalTab();
            await animalControl.animalCaseEntry.verify1051AcknowledgePopup();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.clickMainTab();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtMunicipality();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtCFSReportedViolation();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtInitialNatureOfComplaint();
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.verifyAtNameInGrid();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.switchToApprovalTab();
            await animalControl.animalCaseEntry.animalCaseEntryApprovalTab.selectAtNewAction();
            await animalControl.animalCaseEntry.animalCaseEntryApprovalTab.taboutDateAndTime();
            await animalControl.animalCaseEntry.animalCaseEntryApprovalTab.saveInternally();
            await animalControl.module.switchToAnimalCaseEntry();
            await animalControl.animalCaseEntry.verifyAtLabel();
            await animalControl.animalCaseEntry.saveScreen();
            await animalControl.module.switchToAnimalCaseEntry();
        });
    });
});

//---------------------------part 2 -------------------------------------------------
test.describe('Q3S9AnimalControlEnhancement2025', () => {
    test('Q3S9AnimalControlEnhancement2025_62496', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '62496', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Lost/Found Search')
            await animalControl.module.switchToAnimalLostOrFound()
            await animalControl.animalLostFoundSearch.clickSearch()
            await animalControl.animalLostFoundSearch.selectAtLFInGrid(BaseData.getAnimalControlModuleValue('LF'))
            await animalControl.module.switchToAnimalLostOrFoundEntry()
            await animalControl.animalLostOrFoundEntry.verifyAnimalHeldAtDropdownIsEnabled()
            await animalControl.animalLostOrFoundEntry.selectAtAnimalHeldAt()
            await animalControl.animalLostOrFoundEntry.verifyCageNoDropdownIsEnabled()
            await animalControl.animalLostOrFoundEntry.selectAtCageNo()
            await animalControl.animalLostOrFoundEntry.saveScreen()
            await animalControl.module.switchToAnimalLostOrFoundEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            // Automated By :- Ranjith Kumar V K on 08/21/2025
            // Sprint : 9 Quarter :3 Year : 2025
            // Type of Test Case : Defect
            // Date: 09/23/2025
        });
    });

    test('Q3S9AnimalControlEnhancement2025_72800', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72800', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Name Search')
            await animalControl.module.switchToAnimalNameSearchScreen()
            await animalControl.animalNameSearch.clickAddNew()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.enterAtAnimalName()
            await animalControl.animalNameEntry.enterAtAddress()
            await animalControl.animalNameEntry.clickMainTab()
            await animalControl.animalNameEntry.animalNameEntryMainTab.verifyRabiesShotExpirationDateFieldEnabledAndDisplayed() // created
            await animalControl.animalNameEntry.animalNameEntryMainTab.enterRabiesShotExpirationDateAsFutureDate(10)
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveScreen()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveNClose()
            await animalControl.module.switchToAnimalNameSearchScreen()
            await animalControl.animalNameSearch.clickBackButton()
            await animalControl.animalNameSearch.clickResetButton()
            await animalControl.animalNameSearch.enterRabiesShotExpirationFromAsFutureDate(10) // created
            await animalControl.animalNameSearch.enterRabiesShotExpirationToAsFutureDate(10) // created
            await animalControl.animalNameSearch.clickSearch()
            await animalControl.animalNameSearch.verifyRabiesShotExpAsFutureDateInGrid(10)
            await animalControl.animalNameSearch.clickGridRowByAnimalName()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveScreen()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.VerifyUpdateSuccessfulMessage()
            // Automated By :- Sarathkumar L on 11/26/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Enhancement
        });
    });
});

test.describe('AnimalControlCheckListQ2S62025', () => {
    test('AnimalControlCheckListQ2S62025_72473', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72473', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            // scenario2
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.selectAtCage()
            await animalControl.animalCaseSearch.selectAtComplaintType()
            await animalControl.animalCaseSearch.selectAtResolutions()
            await animalControl.animalCaseSearch.selectAtApprovalStatus()
            await animalControl.animalCaseSearch.clickExcelIcon()
            await animalControl.animalCaseSearch.verifyNoDataPresentAcknowledgeMessage()
            // scenario1
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickResetButton()
            await animalControl.animalCaseSearch.enterAtFollowUpDateFrom() // created
            await animalControl.animalCaseSearch.enterAtFollowUpDateTo() // created
            await animalControl.animalCaseSearch.clickSearchButton()
            await animalControl.animalCaseSearch.verifyAtACENoInGrid()
            await animalControl.animalCaseSearch.clickExcelIcon()
            await animalControl.animalCaseSearch.verifyDownloadFileFormatIsExcel() // created
            // objectIdentification.windowHandle.switchToMainWindow()
            // Automated By :- Sarathkumar L on 11/19/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Checklist
        });
    });
});

test.describe('Q3S8Defect2025', () => {
    test('Q3S8Defect2025_72670', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72670', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Registration Search')
            await animalControl.module.switchToAnimalRegistrationSearchScreen()
            await animalControl.animalRegistrationSearch.clickAddNew()
            await animalControl.module.switchToAnimalRegistrationEntry()
            await animalControl.animalRegistrationEntry.tabAtIssueDateandTime()
            await animalControl.animalRegistrationEntry.selectAtRegistrationType()
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(1)
            await animalControl.animalRegistrationEntry.enterExpireDateAsFutureDate(5)
            await animalControl.animalRegistrationEntry.enterAtAnimalNameID()
            await animalControl.animalRegistrationEntry.clickApplicantsTab()
            await animalControl.animalRegistrationEntry.animalRegistrationEntryApplicantTab.verifyAtOwnerNameID()
            await animalControl.module.switchToAnimalRegistrationEntry()
            await animalControl.animalRegistrationEntry.save()
            await animalControl.module.switchToAnimalRegistrationEntry()
            await animalControl.animalRegistrationEntry.verifyAdditionSuccessfulMessage()
            await animalControl.module.switchToAnimalRegistrationEntry()
            await animalControl.animalRegistrationEntry.enterAtLicTagNo(2)
            await animalControl.animalRegistrationEntry.save()
            await animalControl.module.switchToAnimalRegistrationEntry()
            await animalControl.animalRegistrationEntry.verifyUpdateSuccessfulBottomMessage()
            await animalControl.animalRegistrationEntry.clickQAFormsTab() // created
            await qA.module.SwitchToQuestionDataEntry()
            await qA.questionDataEntry.clickSignatureField()
            await home.module.switchToSignatureScreen()
            await home.signatureScreen.clickTypeButton()
            await home.signatureScreen.enterAtSignTextArea('Auto')
            await home.signatureScreen.enterAtName()
            await home.signatureScreen.clickApplyButton()
            await qA.module.SwitchToQuestionDataEntry()
            await qA.questionDataEntry.verifySignatureFieldIsNotNull()
            await qA.questionDataEntry.saveScreen() // created
            await qA.module.SwitchToQuestionDataEntry()
            await qA.questionDataEntry.verifyAdditionaSuccessFull()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Question Data Entry")
            await qA.module.SwitchToQuestionDataEntry()
            // Automated by Sarathkumar on 11/25/2025
            // Year : 2025 Quarter: 4 Sprint: 11
            // Type of Testcase - Defect
        });
    });

    test('Q3S8Defect2025_72726', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72726', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.verifyAddNewLinkIsDisplayedAndEnabled()
            await animalControl.animalCaseSearch.verifyResetLinkIsDisplayedAndEnabled()
            await animalControl.animalCaseSearch.verifySearchLinkIsDisplayedAndEnabled()
            await animalControl.animalCaseSearch.verifyBackLinkIsDisabled()
            await animalControl.animalCaseSearch.enterAtLocation(1)
            await animalControl.animalCaseSearch.verifyReferenceErrorAckMsgNotDisplayed()
            await animalControl.module.switchToAnimalCaseSearch()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Animal Case Search")
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickSearchButton()
            await animalControl.animalCaseSearch.verifyAtLocationInGrid(2) // created
            // Automated By :- Sarathkumar L on 11/25/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_72739', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72739', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Lost/Found Search')
            await animalControl.module.switchToAnimalLostOrFound()
            await animalControl.animalLostFoundSearch.enterAtLocationWhereAnimalWasLostFound(1) // created
            await geo.module.switchToCommonNameHelp()
            await geo.commonNameHelp.SelectCommonName()
            await animalControl.module.switchToAnimalLostOrFound()
            await animalControl.animalLostFoundSearch.clickSearch()
            await animalControl.animalLostFoundSearch.verifyAtLocationWhereLostFoundInGrid(2)
            await animalControl.animalLostFoundSearch.clickBack()
            await animalControl.animalLostFoundSearch.clickReset()
            await animalControl.animalLostFoundSearch.enterAtLocationWhereAnimalWasLostFound(3)
            await animalControl.animalLostFoundSearch.verify5024InvalidAddressAcknowledgePopupMessage() // created
            await animalControl.module.switchToAnimalLostOrFound()
            // Automated By :- Sarathkumar L on 11/25/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_72778', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72778', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.enterAtACENo(1) // created
            await animalControl.animalCaseSearch.clickSearchButton()
            await animalControl.animalCaseSearch.selectRowByAtAceNo(1)
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyReportedDateTimeIsDisabled() // created
            await animalControl.animalCaseEntry.closeScreen()
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickBackButton()
            await animalControl.animalCaseSearch.clickResetButton()
            await animalControl.animalCaseSearch.enterAtACENo(2)
            await animalControl.animalCaseSearch.clickSearchButton()
            await animalControl.animalCaseSearch.selectRowByAtAceNo(2)
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyReportedDateTimeIsEnabled() // created
            await animalControl.animalCaseEntry.enterReportedDateAsFutureDate() // created
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.clickMainTab()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.saveScreen()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await animalControl.animalCaseEntry.verifyReportedDateTimeIsDisabled() // created
            await animalControl.animalCaseEntry.saveNCloseScreen()
            await animalControl.module.switchToAnimalCaseSearch()
            // Automated By :- Sarathkumar L on 11/26/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_72778A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72778A', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Records')
            await loaderPage.navigateToScreen('Call Entry')
            await records.module.switchToCallEntry()
            await records.callEntry.enterAtInitialCFS()
            await records.callEntry.TabReceivedSource()
            await records.callEntry.enterAtReportedLocation()
            await records.callEntry.TabReportedDateTime()
            await records.callEntry.clickEditTab()
            await records.callEntry.stackedDate()
            await records.callEntry.stackedTime()
            await records.callEntry.finishedDate()
            await records.callEntry.finishedTime()
            await records.callEntry.EnterAtCADDisposition()
            await records.callEntry.enterAtLocation1()
            await records.module.switchToCallEntry()
            await records.callEntry.save()
            await records.module.switchToCallEntry()
            await records.callEntry.VerifyAdditionSuccessfulMessage()
            await records.module.switchToCallEntry()
            await records.callEntry.swithchtoANCATab()
            await records.callEntry.callEntryANCATab.clickAddnew()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.clickInvestigationAuthorizedCheckBox() // created
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals()
            await animalControl.animalCaseEntry.clickSaveButton()
            await animalControl.animalCaseEntry.verify6040GenerateCaseToProceedFurtherAcknowledgePopupMessage() // created
            await animalControl.module.switchToAnimalCaseEntry()
            // Automated By :- Sarathkumar L on 11/26/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_74100', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '74100', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Inventory & Fleet')
            await loaderPage.navigateToScreen('Inventory Search')
            await inventory.module.switchToInventorySearch()
            await inventory.inventorySearch.clickAddNew()
            await inventory.module.switchToInventoryEntry()
            await inventory.inventoryEntry.selectAtInvName()
            await inventory.inventoryEntry.selectAtCategory()
            await inventory.inventoryEntry.selectAtType()
            await inventory.inventoryEntry.selectAtMake()
            await inventory.inventoryEntry.saveWithConfrim()
            await inventory.module.switchToInventoryEntry()
            const inventoryNumber = await inventory.inventoryEntry.readInventoryNo()
            await inventory.inventoryEntry.saveNClose()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Cage Rental')
            await animalControl.module.switchToAnimalCageRental()
            await animalControl.animalCageRental.enterAtIssuingPF()
            await animalControl.animalCageRental.enterAtNameID()
            await animalControl.animalCageRental.enterAtInventoryNo(inventoryNumber)
            await animalControl.animalCageRental.clickSignOutButton()
            await animalControl.animalCageRental.verify21861PleaseCompleteTheFeesTabAcknowledgePopupMessage() // created
            await animalControl.module.switchToAnimalCageRental()
            await animalControl.animalCageRental.switchToFeesTab()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Animal Cage Rental")
            await animalControl.module.switchToAnimalCageRental()
            // Automated By :- Sarathkumar L on 12/10/2025
            // Quarter :4 Sprint : 12 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_74292', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '74292', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.enterAtACENo(1) // created
            await animalControl.animalCaseSearch.clickSearchButton()
            await animalControl.animalCaseSearch.selectRowByAtAceNo(1)
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.clearOfficer() // created
            await animalControl.animalCaseEntry.enterAtOfficer()
            // objectIdentification.windowHandle.windowExist("Coded Search")
            await popupPage.switchToCodedSearch()
            await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyAtOfficerPF()
            await animalControl.animalCaseEntry.saveScreen()
            // objectIdentification.windowHandle.windowExist("Animal Case Entry")
            await animalControl.module.switchToAnimalCaseEntry()
            // objectIdentification.windowHandle.verifyWindowNotExists("Coded Search")
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.closeScreen()
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.selectRowByAtAceNo(1)
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyAtOfficerPF()
            // objectIdentification.windowHandle.verifyWindowNotExists("Coded Search")
            // Automated By :- Sarathkumar L on 12/16/2025
            // Quarter :4 Sprint : 12 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_74395', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '74395', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Name Search')
            await animalControl.module.switchToAnimalNameSearchScreen()
            await animalControl.animalNameSearch.enterAtAnimalNameID()
            await animalControl.animalNameSearch.clickSearch()
            await animalControl.animalNameSearch.clickGridRowByAnimalNameID()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickOwnerDetailsTab()
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.enterAtOwnerNameID()
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.clickAdd()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickMedicalTab()
            await animalControl.animalNameEntry.verify6040PleaseSaveTheEnteredDataInOwnerTabAcknowledgePopup() // created
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveScreen()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickMedicalTab()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.enterCurrentDateInDateOFProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.enterTotalCost()
            await animalControl.animalNameEntryMedicalProcedure.enterAtVeterinarianID()
            await animalControl.animalNameEntryMedicalProcedure.save()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.save()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.saveAndClose()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickOwnerDetailsTab()
            await animalControl.animalNameEntry.animalNameEntryOwnerDetailsTab.verifyAtNameInGrid(0)
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveScreen()
            await animalControl.module.switchToAnimalNameEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.saveScreen()
            await animalControl.module.switchToAnimalNameEntry()
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickMedicalTab()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.verifyAtNameInGrid(0)
            await animalControl.module.switchToAnimalNameEntry()
            // Automated By :- Sarathkumar L on 12/18/2025
            // Quarter :4 Sprint : 12 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('Q3S8Defect2025_74808', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '74808', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Records')
            await loaderPage.navigateToScreen('Call Entry')
            await records.module.switchToCallEntry()
            await records.callEntry.enterAtInitialCFS()
            await records.callEntry.TabReceivedSource()
            await records.callEntry.enterAtReportedLocation()
            await records.callEntry.TabReportedDateTime()
            await records.callEntry.clickEditTab()
            await records.callEntry.stackedDate()
            await records.callEntry.stackedTime()
            await records.callEntry.finishedDate()
            await records.callEntry.finishedTime()
            await records.callEntry.EnterAtCADDisposition()
            await records.callEntry.enterAtLocation1()
            await records.module.switchToCallEntry()
            await records.callEntry.save()
            await records.module.switchToCallEntry()
            const callNo = await records.callEntry.getCallNo()
            await records.callEntry.VerifyAdditionSuccessfulMessage()
            await records.module.switchToCallEntry()
            await records.callEntry.swithchtoANCATab()
            await records.callEntry.callEntryANCATab.clickAddnew()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyCallNumberInAnimalCaseEntry(callNo)
            await animalControl.animalCaseEntry.verifyCaseNoIsEmpty() // created
            await animalControl.animalCaseEntry.verifyCaseLookUpIconIsDisabled() // created
            await animalControl.animalCaseEntry.verifyCallInfoIconIsDisplayed()
            await animalControl.animalCaseEntry.verifyCallInfoIconIsEnabled()
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals()
            await animalControl.animalCaseEntry.saveScreen()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyCaseNoIsEmpty()
            await animalControl.animalCaseEntry.verifyCallNumberInAnimalCaseEntry(callNo)
            await animalControl.animalCaseEntry.verifyCallInfoIconIsDisplayed()
            // Automated By :- Sarathkumar L on 02/01/2025
            // Quarter :4 Sprint : 12 Year : 2025
            // Type of Test Case : Defect
        });
    });
});

test.describe('Q4S11AnimalControlLegacy2025', () => {
    test('Q4S11AnimalControlLegacy2025_72765', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72765', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Name Entry')
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.enterAtNameID()
            await animalControl.animalNameEntry.saveScreen()
            await animalControl.module.switchToAnimalNameEntry()
            await animalControl.animalNameEntry.clickMedicalTab()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.tabDateOFProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtTypeOfProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.selectAtReasonOfProcedure()
            await animalControl.animalNameEntry.animalNameEntryMedicalTab.clickAdd()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.enterTotalCost()
            await animalControl.animalNameEntryMedicalProcedure.enterAtVeterinarianID()
            await animalControl.animalNameEntryMedicalProcedure.selctVacType()
            await animalControl.animalNameEntryMedicalProcedure.selectBrand()
            await animalControl.animalNameEntryMedicalProcedure.verifyTypeFieldIsDisabled() // added
            await animalControl.animalNameEntryMedicalProcedure.clickDeclawedCheckbox() // created
            await animalControl.animalNameEntryMedicalProcedure.verifyTypeFieldIsEnabled() // created
            await animalControl.animalNameEntryMedicalProcedure.selectAtType() // created
            await animalControl.animalNameEntryMedicalProcedure.verifyResultFieldIsDisabled() // added
            await animalControl.animalNameEntryMedicalProcedure.clickStoolSampleCheckbox() // created
            await animalControl.animalNameEntryMedicalProcedure.verifyResultFieldIsEnabled() // created
            await animalControl.animalNameEntryMedicalProcedure.selectAtResult() // created
            await animalControl.animalNameEntryMedicalProcedure.save()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.verifyAdditionSuccessfulMessage()
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("frmMedicalProcedure")
            await animalControl.module.switchToAnimalNameEntryOfMedical()
            await animalControl.animalNameEntryMedicalProcedure.saveAndClose()
            await animalControl.module.switchToAnimalNameEntry()
            // Automated By : Sarathkumar L on 11/26/2025
            // Sprint :- : Quarter - 4 : Sprint - 11
            // Type of Test case : - Legacy
        });
    });
});

test.describe('AnimalControlSystemParamater', () => {
    test('AnimalControlSystemParamater_72754', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72754', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Settings')
            await loaderPage.navigateToScreen('System Parameter')
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.setSystemparameter2504AsFalse()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickAddNewButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyCallNoShownAsNotMandatory()
            await animalControl.animalCaseEntry.enterAtLocation()
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime()
            await animalControl.animalCaseEntry.enterAtOfficer()
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals()
            await animalControl.animalCaseEntry.saveScreen()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyAtLocation()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Animal Case Entry")
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.clickMainTab()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.saveNCloseScreen()
            await animalControl.module.switchToAnimalCaseSearch()
            // Automated By :- Sarathkumar L on 11/26/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });

    test('AnimalControlSystemParamater_72754A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '72754A', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Settings')
            await loaderPage.navigateToScreen('System Parameter')
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.setSystemparameter2504AsTrue()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickAddNewButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyCallNoShownAsMandatory()
            await animalControl.animalCaseEntry.enterAtLocation()
            await animalControl.animalCaseEntry.tabOutReportingDateAndTime()
            await animalControl.animalCaseEntry.enterAtOfficer()
            await animalControl.animalCaseEntry.selectComplaintTypeAsCrueltyToAnimals()
            await animalControl.animalCaseEntry.clickSaveButton()
            await animalControl.animalCaseEntry.verifyEnterCallNumberAcknowledge()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.enterAtCallNo()
            await animalControl.animalCaseEntry.saveScreen()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.verifyAtLocation()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Animal Case Entry")
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.clickMainTab()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtMunicipality()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtCFSReportedViolation()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtInitialNatureOfComplaint()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.enterAtNameID()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.selectAtActivity()
            await animalControl.animalCaseEntry.animalCaseEntryMainTab.clickAddButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.saveNCloseScreen()
            await animalControl.module.switchToAnimalCaseSearch()
            await loaderPage.navigateToModule('Settings')
            await loaderPage.navigateToScreen('System Parameter')
            await settings.module.switchToSystemParamter()
            await settings.sysParameter.setSystemparameter2504AsFalse()
            await settings.module.switchToSystemParamter()
            // Automated By :- Sarathkumar L on 11/26/2025
            // Quarter :4 Sprint : 11 Year : 2025
            // Type of Test Case : Defect
        });
    });
});

test.describe('Q1Defect2026', () => {
    test('Q1Defect2026_80121', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, admission, personnel, vehicle, qA, animalControl, records, inventory, accounting }) => {
        await withTestContext(testData, '80121', async () => {
            await loginPage.loginScreen.Logon()
            await loaderPage.navigateToModule('Animal Control')
            await loaderPage.navigateToScreen('Animal Case Search')
            await animalControl.module.switchToAnimalCaseSearch()
            await animalControl.animalCaseSearch.clickAddNewButton()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.enterAtCallNo()
            await animalControl.animalCaseEntry.selectAtComplaintType()
            await animalControl.animalCaseEntry.saveScreen()
            await animalControl.module.switchToAnimalCaseEntry()
            await animalControl.animalCaseEntry.tabOutOfficer()
            await animalControl.animalCaseEntry.verifyCodedWindowNotExist()
            // Automated By : - Mithun on 3/18/2026
            // Sprint :- : Quarter 1 : Sprint 3
            // Type of Test case : - Defect 2026
        });
    });
});