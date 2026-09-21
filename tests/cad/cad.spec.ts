// @ts-nocheck
import { test, expect } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

test.describe('CADScripts', () => {
  test('ToVerifyInCommandCodes_257060', async ({ loginPage, loaderPage, cad, settings, testData }) => {
    await withTestContext(testData, '257060', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('CC Search');
      await cad.module.switchToCCSearchScreenTab();
      await cad.ccSearch.clickSysCCRadioButton();
      await cad.ccSearch.enterAtSystemCommand();
      await cad.ccSearch.clickSearch();
      await cad.ccSearch.verifyAtSystemCommandCodeInGrid();
      await cad.ccSearch.clickAtSystemCommandCodeInGrid();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.clickAddButton();
      await settings.sharedCodes.deleteAtCCInGridWithConfirmMsg();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.saveScreen();
      await settings.sharedCodes.verifyNoRecordFoundAckwMsg();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.enterAtUserCommandCode();
      await settings.sharedCodes.enterAtDescription();
      await settings.sharedCodes.enterAtDispOrder();
      await settings.sharedCodes.clickAddButton();
      await settings.sharedCodes.saveScreen();
      await settings.module.switchToSharedCodes();
    });
  });
});

test.describe('EntryScreenSmoke', () => {
  test('CADCCSearchSharedCodeSmoke_CCSearch', async ({ loginPage, loaderPage, cad, testData }) => {
    await withTestContext(testData, 'CCSearch', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('CC Search');
      await cad.module.switchToCCSearchScreenTab();
      await cad.ccSearch.clickSearch();
    });
  });

  test('CADLorSearchSmoke_LORSearch', async ({ loginPage, loaderPage, cad, popupPage, testData }) => {
    await withTestContext(testData, 'LORSearch', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('LOR Search');
      await cad.module.switchtoLORSearch();
      await cad.lorSearch.clickAddNew();
      await cad.module.switchToLOREntry();
      await cad.lorEntry.enterLORName();
      await cad.lorEntry.enterScheduleName();
      await cad.lorEntry.selectAtPriority();
      await cad.lorEntry.enterAtPrimeMaxUnit();
      await cad.lorEntry.selectAtPrimeMan();
      await cad.lorEntry.selectAtPrimeLevel();
      await cad.lorEntry.selectAtPrimeType();
      await cad.lorEntry.clickPrimeAddButton();
      await cad.lorEntry.verifyPrimeTypeInGrid();
      await cad.lorEntry.enterAtFirstBackupMaxUnit();
      await cad.lorEntry.selectAtFirstBackupRequired();
      await cad.lorEntry.selectAtFirstBackupMan();
      await cad.lorEntry.selectAtFirstBackupLevel();
      await cad.lorEntry.selectAtFirstBackupType();
      await cad.lorEntry.clickFirstBackupAddButton();
      await cad.lorEntry.verifyFirstBackupRequiredInGrid();
      await cad.lorEntry.enterAtSecondBackupMaxUnit();
      await cad.lorEntry.selectAtSecondBackupMan();
      await cad.lorEntry.selectAtSecondBackupRequired();
      await cad.lorEntry.selectAtSecondBackupLevel();
      await cad.lorEntry.selectAtSecondBackupType();
      await cad.lorEntry.clickSecondBackupAddButton();
      await cad.lorEntry.verifySecondBackupRequiredInGrid();
    });
  });

  test('CADNPASearchSmoke_NPASearch', async ({ loginPage, loaderPage, cad, popupPage, testData }) => {
    await withTestContext(testData, 'NPASearch', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('NPA Search');
      await cad.module.switchToNPASearch();
      await cad.npaSearch.clickAddNew();
      await cad.module.switchToNPAEntry();
      await cad.npaEntry.enterAtNPACard();
      await cad.npaEntry.enterAtTableName();
      await cad.npaEntry.enterAreaName();
      await cad.module.switchToNPAEntry();
      await cad.npaEntry.enterAtOrder();
      await cad.npaEntry.clickAddButton();
      await cad.npaEntry.verifyAtOrderInGrid();
    });
  });

  test('CADTriggerSearchSmoke_TriggerSearch', async ({ loginPage, loaderPage, cad, testData }) => {
    await withTestContext(testData, 'TriggerSearch', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('Trigger Search');
      await cad.module.switchToTriggerSearch();
      await cad.triggerSearch.clickAddNew();
      await cad.module.switchToTriggerEntry();
      await cad.triggerEntry.enterAtUnitSlotNo();
      await cad.triggerEntry.enterAtTriggerName();
      await cad.triggerEntry.enterAtTriggerDescr();
    });
  });

  test('CADZetronToneSearchSmoke_CADToneEntry', async ({ loginPage, loaderPage, cad, testData }) => {
    await withTestContext(testData, 'CADToneEntry', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('CAD');
      await loaderPage.navigateToScreen('Zetron Tone Search');
      await cad.module.switchToZetronToneSearch();
      await cad.zetronToneSearch.clickAddNew();
      await cad.module.switchToCADToneEntry();
      await cad.cadToneEntry.enterAtFireStation();
      await cad.cadToneEntry.enterAtToneCode();
    });
  });
});
