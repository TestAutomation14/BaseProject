// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('StateDemo');

test.describe('Q1StateDemoDefect2025', () => {
    // Automated By : Mohamed Absar A on 02/19/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#170903
    test('Q1StateDemoDefect2025_44313', async ({ loginPage, loaderPage, popupPage, stateDemo, home, settings, geo, activity, admission, personnel, vehicle, qA }) => {
        await withTestContext(testData, '44313', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('State / Demo');
            await loaderPage.navigateToScreen('State Coded');
            await stateDemo.module.switchToStateCoded();
            await stateDemo.stateCoded.selectAtCodeCategory();
            await stateDemo.stateCoded.clickSearch();
            await stateDemo.stateCoded.selectRandomGridRow();
            await stateDemo.module.switchToMaintainCodeValue();
            await stateDemo.maintainCodeValue.verifyAtHeaderlabel();
            await stateDemo.maintainCodeValue.closeScreen();
            // objectIdentification.windowHandle.verifyWindowNotExists('Maintain Code Value')
            await stateDemo.module.switchToStateCoded();
        });
    });

    // Automated By : Mohamed Absar A on 02/19/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#158810 
    test('Q1StateDemoDefect2025_44311', async ({ loginPage, loaderPage, popupPage, stateDemo, home, settings, geo, activity, admission, personnel, vehicle, qA }) => {
        await withTestContext(testData, '44311', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('State / Demo');
            await loaderPage.navigateToScreen('Demo Search');
            await stateDemo.module.switchToDemoSearch();
            await stateDemo.demoSearch.clickSearch();
            await stateDemo.demoSearch.selectRandomGridRow();
            await stateDemo.module.switchToDemoEntry();
            await stateDemo.demoEntry.verifyEnterAddressAsMandatory();
            await stateDemo.demoEntry.verifyCSZAsMandatory();
            await stateDemo.demoEntry.clickAddButton();
            await stateDemo.demoEntry.verifyEnterAddressAcknowledgePopup();
            await stateDemo.module.switchToDemoEntry();
        });
    });

    // Automated By : Hemamalini V on 11/14/2025, Type:- Defect, CRM# 187946, Sprint: Q4 Sprint 11 2025 
    test('Q1StateDemoDefect2025_72186', async ({ loginPage, loaderPage, popupPage, stateDemo, home, settings, geo, activity, admission, personnel, vehicle, qA }) => {
        await withTestContext(testData, '72186', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('State / Demo');
            await loaderPage.navigateToScreen('State ORI');
            await stateDemo.module.switchToStateORI();
            await stateDemo.stateORI.clickAddNew();
            await stateDemo.module.switchToStateORIEntry();
            await stateDemo.stateORIEntry.selectAtState();
            await stateDemo.stateORIEntry.enterAtORINumber();
            await stateDemo.stateORIEntry.verifyORINumberHas9Digits();
            await stateDemo.stateORIEntry.enterAtTitle();
            await stateDemo.stateORIEntry.save();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await stateDemo.stateORIEntry.verifyORINumberHas9Digits();
        });
    });
});