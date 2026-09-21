// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('Video');

test.describe('Q4VideoDefectSP2025', () => {
    // Automated By : - Sarathkumar L on 12/24/2025
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Defect
    test('verifyThatNoErrorMessageIsDisplayedOnTheStateCodedSystemCodeScreenCRM170903_74630', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74630', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Settings');
            await loaderPage.navigateToScreen('System Parameter');
            await settings.module.switchToSystemParamter();
            await settings.sysParameter.enterAtParameterID();
            await settings.sysParameter.clickSearchButton();
            await settings.sysParameter.enterAtCameraWebURL();
            await settings.sysParameter.saveScreen();
            // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Camera View Config Search');
            await video.module.switchToCameraViewConfigSearch();
            await video.cameraViewConfigSearch.clickAddNew();
            await video.module.switchToCameraViewConfigEntry();
            await video.cameraViewConfigEntry.selectAtViewType(1);
            await video.cameraViewConfigEntry.enterAtViewName();
            await video.cameraViewConfigEntry.enterAtViewFor();
            await video.cameraViewConfigEntry.selectAtAllCameraValue();
            await video.cameraViewConfigEntry.clickCameraAddIcon();
            await video.cameraViewConfigEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
            await video.module.switchToCameraViewConfigEntry();
            await video.cameraViewConfigEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful();
            await video.module.switchToCameraViewConfigEntry();
        });
    });
});

test.describe('Q4VideoChecklist2025', () => {
    // Automated By : - Sarathkumar L on 12/29/2025
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Checklist
    test('ToReviewTheCameraViewConfigSearchScreenCreatingNewEntry_74681', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74681', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Camera View Config Search');
            await video.module.switchToCameraViewConfigSearch();
            await video.cameraViewConfigSearch.clickAddNew();
            await video.module.switchToCameraViewConfigEntry();
            await video.cameraViewConfigEntry.selectAtViewType(1);
            await video.cameraViewConfigEntry.enterAtViewName();
            await video.cameraViewConfigEntry.enterAtViewFor();
            await video.cameraViewConfigEntry.clickSave();
            await video.cameraViewConfigEntry.verify1018RequiredEntriesAreMissingAcknowldgePopupAppears();
            await video.module.switchToCameraViewConfigEntry();
            await video.cameraViewConfigEntry.verifyAddIconIsDisplayed();
            await video.cameraViewConfigEntry.verifyRemoveIconIsDisplayed();
            await video.cameraViewConfigEntry.verifyUpIconIsDisplayed();
            await video.cameraViewConfigEntry.verifyDownIconIsDisplayed();
            await video.cameraViewConfigEntry.selectAtAllCameraValue();
            await video.cameraViewConfigEntry.clickCameraAddIcon();
            await video.cameraViewConfigEntry.verifyAtConfiguredCamerasValue(1);
            await video.cameraViewConfigEntry.verifyAtAllCamerasValueNotContains(1);
            await video.cameraViewConfigEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
            await video.module.switchToCameraViewConfigSearch();
            await video.cameraViewConfigSearch.verifyAtViewNameInGrid(1);
        });
    });
});

test.describe('Q4VideoLegacy2025', () => {
    // Automated By : - Sarathkumar L on 12/29/2025
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Legacy Testcase
    test('ToReviewTheCameraConfigSearchScreenFunctionality_74687', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74687', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Camera View Config Search');
            await video.module.switchToCameraViewConfigSearch();
            await video.cameraViewConfigSearch.enterAtViewFor();
            await video.cameraViewConfigSearch.clickSearchButton();
            await video.cameraViewConfigSearch.selectAtViewNameInGrid(1);
            await video.module.switchToCameraViewConfigEntry();
            await video.cameraViewConfigEntry.verifyAtConfiguredCamerasValue(1);
            await video.cameraViewConfigEntry.verifyDeleteIconIsDisplayed();
            await video.cameraViewConfigEntry.clickDeleteIcon();
            await video.cameraViewConfigEntry.verify4DoYouReallyWantToDeleteConfirmAcknowledgeMessage();
            await video.module.switchToCameraViewConfigSearch();
            await video.cameraViewConfigSearch.verifyAtViewNameRecordNotListedInGrid(1);
            await video.module.switchToCameraViewConfigSearch();
        });
    });

    // Automated By : - Sarathkumar L on 12/29/2025
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Legacy
    test('ToReviewTheVideoInterviewSearchOfficerTabPrimaryOfficerNameDeleteLogic_74715', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74715', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Video Interview Search');
            await video.module.switchToVideoInterviewSearch();
            await video.videoInterviewSearch.clickAddNew();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.enterAtCaseID(1);
            await video.videoInterviewEntry.enterAtInterviewNameID();
            await video.videoInterviewEntry.tabOutPrimaryOfficer();
            await video.videoInterviewEntry.saveScreen();
            await video.module.switchToVideoInterviewEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
            await video.videoInterviewEntry.clickOfficersTab();
            await video.videoInterviewEntry.officersTab.enterAtPF(1);
            await video.videoInterviewEntry.officersTab.clickAddButton();
            await video.videoInterviewEntry.officersTab.enterAtPF(2);
            await video.videoInterviewEntry.officersTab.clickAddButton();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.clickOfficersTab();
            await video.videoInterviewEntry.officersTab.clickDeleteCellByPF(1);
            await popupPage.confirm.acceptPopup();
            await video.videoInterviewEntry.officersTab.clickDeleteCellByPF(2);
            await popupPage.confirm.acceptPopup();
            await video.videoInterviewEntry.officersTab.clickDeleteCellByPF(3);
            await video.videoInterviewEntry.officersTab.verifyDeleteConfirmationPopupNotAppears();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.saveScreen();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.clickOfficersTab();
            await video.videoInterviewEntry.officersTab.verifyPFDescriptionNotContainsInGrid(1);
            await video.videoInterviewEntry.officersTab.verifyPFDescriptionNotContainsInGrid(2);
            await video.module.switchToVideoInterviewEntry();
        });
    });

    // Automated By : - Sarathkumar L on 02/01/2026
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Legacy Testcase
    test('ToReviewTheVideoInterviewScreenGridAndSaveFunctionality_74786', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74786', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Video Interview Search');
            await video.module.switchToVideoInterviewSearch();
            await video.videoInterviewSearch.clickAddNew();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.enterAtCaseID(1);
            await video.videoInterviewEntry.enterAtInterviewNameID();
            await video.videoInterviewEntry.tabOutPrimaryOfficer();
            await video.videoInterviewEntry.clickOfficersTab();
            await video.videoInterviewEntry.officersTab.enterAtPF(1);
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.clickSaveIcon();
            await video.videoInterviewEntry.verify1051UpdatedDataExistsInTheOfficeAcknowledgePopupMessage();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.clickSaveAndCloseIcon();
            await video.videoInterviewEntry.verify1051UpdatedDataExistsInTheOfficeAcknowledgePopupMessage();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.officersTab.clickAddButton();
            await video.videoInterviewEntry.officersTab.verifyAtPFNameInGrid(1);
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.saveScreen();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.officersTab.verifyAtPFNameInGrid(1);
            // objectIdentification.manualIdentify.verifyAdditionSuccessful();
            await video.videoInterviewEntry.saveAndCloseScreen();
            await video.module.switchToVideoInterviewSearch();
        });
    });
});

test.describe('Q4VideoDefect2025', () => {
    // Automated By : - Sarathkumar L on 12/29/2025
    // Sprint :- : Quarter 4 : Sprint 12
    // Type of Test case : - Defect
    test('CRM190632InterviewFieldNameControlShouldBeWorkAsSameAsNameEntryScreenResetButtonIsNotAvailable_74706', async ({ loginPage, loaderPage, popupPage, video, settings }) => {
        await withTestContext(testData, '74706', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Video');
            await loaderPage.navigateToScreen('Video Interview Search');
            await video.module.switchToVideoInterviewSearch();
            await video.videoInterviewSearch.clickAddNew();
            await video.module.switchToVideoInterviewEntry();
            await video.videoInterviewEntry.verifyClearNameIconIsDisplayed();
            await video.videoInterviewEntry.enterAtInterviewNameID();
            await video.videoInterviewEntry.verifyAtNameID();
            await video.videoInterviewEntry.clickClearNameIcon();
            await video.videoInterviewEntry.verifyNameIDIsBlank();
        });
    });
});