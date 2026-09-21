// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';

const testData = TestDataReader.loadData('Geo');

test.describe('GeoFunctional1', () => {
  test('GeoFunctional1_112850', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112850', async () => {
      await loginPage.loginScreen.Logon()
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.ClickSaveButton()
      await geo.streetEntry.VerifyAcknowlegdeSaveMessage()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.VerifyAcknowledgeAddMessage()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.SelectAtPrefix()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.SelectAtSuffix()
      await geo.streetEntry.enterAtZipCode(); // updated
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.VerifyStreetNameWithPrefixSuffixAndTypeInGrid(0)
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.verifyAtPrefix()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtStreetType(0)
      await geo.streetSearch.VerifyAtSuffix(); // changed method
    });
  });

  test('GeoFunctional1_112851', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112851', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.SelectAtPrefix()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.SelectAtSuffix()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.VerifyStreetNameWithPrefixSuffixAndTypeInGrid(0)
      await geo.streetEntry.Save()
      await geo.streetEntry.VerifyAcknowledgeRecordExistsMessage()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyRecordExisitStatusMessage()
    });
  });

  test('GeoFunctional1_112852', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112852', async () => {
      // Playback.testContext=testContext;
      // Browser.NavigateToLoginScreenForFire();
      //login.loginScreen.loginToFireInNewTab();
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtStreetType(0)
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickSaveButton()
      await geo.addressIntersection.VerifyAcknowlegdeSaveMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeAddPremiseMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeEvenNumber()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeOddNumber()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtOddEvenNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyOddEvenPremiseAdded(0)
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyOddPremiseAdded(1)
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyEvenPremiseAdded()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyPremiseAdded()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeOverlapping()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickSaveButton()
      await geo.addressIntersection.VerifyAcknowledgeUpdateMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage(); // changed as addition succ
    });
  });

  test('GeoFunctional1_112853', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112853', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickAllTabs()
      // Reworked by:- Abi, Date :- 11/03/2021 , Module:-Geo .
    });
  });

  test('GeoFunctional1_112854', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112854', async () => {
      // Playback.testContext=testContext;
      // int rowCount = 0;
      await loginPage.loginScreen.loginToFireInNewTab()
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickRow(0)
      await geo.addressIntersection.UpdatePremiseDetailsPatrolZoneAndSubZone()
      await geo.addressIntersection.ClickSaveNClose()
      await geo.addressIntersection.VerifyAcknowledgeUpdateMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyUpdatedPremiseDetailsPatrolZoneAndSubZoneIsNotNullInTheGrid(0)
      await geo.addressIntersection.SaveScreen(); // updated
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.saveNCloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection(); // Added by Abi
      await geo.addressIntersection.EnterAtOddNumber(); //
      await geo.addressIntersection.SelectAsOdd(); //
      await geo.addressIntersection.SelectPatrolZone()
      await geo.addressIntersection.SelectSubZone()
      await geo.addressIntersection.clickAddButton(); // Added by Abi
      await geo.addressIntersection.VerifyUpdatedPremiseDetailsPatrolZoneAndSubZoneIsNotNullInTheGrid(2); // Changed by Abi
      await geo.addressIntersection.ClickDeleteRow(1, 1)
      await geo.addressIntersection.VerifyConfirmationDeleteMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // Added method By Abi
      await geo.addressIntersection.closeAddressIntersectionScreen()
      await geo.module.switchToStreetSearchScreen(); //
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.VerifyRowDeletedInTheGrid(3); // Changed by Abi
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage()
      //Reworked by:-Abi , Date :- 11/03/2021 , Module:- Geo.
    });
  });

  test('GeoFunctional1_112860', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112860', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton()
      await geo.addressIntersection.ClickAtOddEvenRow()
      await geo.addressIntersection.VerifyOddEvenViewed(); // Added by Abi
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.VerifyCurrentDate()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.addressIntersection.clickRefreshButton()
      await geo.addressIntersection.VerifyInactiveRowGraycolor(0)
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtOddEvenStreetName(); // Added method w/o prefix
      await geo.addressSearch.verifyAcknowledgePremiseInactiveAddress()
      await geo.module.switchToAddressSearchScreen()
      // Reworked by:- Abi , Date :- 11/09/2021 , Module:- Geo .
    });
  });

  test('GeoFunctional1_112861', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112861', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.ClickAtOddEvenRow()
      await geo.addressIntersection.VerifyOddEvenViewed()
      // geo.addressIntersection.clickInactiveCheckBox(); // Commented as already the
      // premise is inactive
      await geo.addressIntersection.VerifyInactiveDateDisabled(); // Changed by Abi
      await geo.addressIntersection.VerifyInactiveRowGraycolor(0)
      //		geo.addressIntersection.clickAddButton();
      //		geo.addressIntersection.SaveScreen();
      //		geo.addressIntersection.clickRefreshButton();						// commented and inserted after few lines
      //		geo.addressIntersection.SaveScreen();
      //		geo.addressIntersection.ClickAtOddEvenRow();
      //		geo.addressIntersection.VerifyOddEvenViewed();
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.VerifyInactiveDateIsBlank(); // Added method by Abi
      await geo.addressIntersection.clickAddButton(); // Added by Abi
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.addressIntersection.clickRefreshButton()
      await geo.addressIntersection.verifyActiveRowBlackColor(0); // Added method by Abi
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtOddEvenStreetNameWithPrefix()
      await geo.addressSearch.VerifyAtOddEvenStreet()
      await geo.addressSearch.ClickAllTabs()
      // Reworked by:- Abi, Date :-11/03/2021 , Module:- Geo .
    });
  });

  test('GeoFunctional1_112862', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112862', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyNoRecordFoundAcknowledgeMessage()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.ClickSaveButton()
      await geo.addressFlagEntry.verify1018RequiredEntriesAreMissingAddress()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.ClickSaveButton()
      await geo.addressFlagEntry.VerifyDisplayConditionAcknowledgeAddMessage()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.VerifyOddValuesExist()
      await geo.addressFlagEntry.switchToNarrativeTextFrame()
      await geo.addressFlagEntry.enterAtRemarks();
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.selectAtDisplayCondition(); //Changed By kiran
      await geo.addressFlagEntry.ClickSaveButton()
      await geo.addressFlagEntry.VerifyActiveDateAcknowledgeAddMessage()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterActiveDate()
      //		 geo.addressFlagEntry.ClickAddButton();									// commented due to changes in screen
      //		 geo.addressFlagEntry.VerifyActiveAsCurrentDate(0);
      //		 geo.addressFlagEntry.VerifyAtDisplayCondition(0);
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.CloseScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.VerifyActiveDateAsCurrentDate(0)
      await geo.addressFlag.VerifyAtDisplayCondition(0)
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.ClickToFlagTab()
      // geo.addressSearch.addressSearchFlagsTab.VerifyFlagDetailsViewed(0); //
      // commented due to changes in screen
      await geo.addressSearch.addressSearchFlagsTab.VerifyActiveAsOfAsCurrentDate()
      await geo.addressSearch.addressSearchFlagsTab.verifyAtFlagRemarksInGrid();  //added By Kiran For Extra Verficiation
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.DeleteAtOddRow()
      await geo.addressIntersection.VerifyAcknowlegeReviewMessage(); // Changed by Abi
      await geo.module.switchToAddressIntersection()
      // Reworked by:- Abi , Date :- 11/09/2021 , Module:- Geo.
    });
  });

  test('GeoFunctional1_112864', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112864', async () => {
      // Playback.testContext=testContext;
      // int rowCount = 0;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtOddEvenStreetName()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtDisplayCondition(0)
      await geo.addressFlag.ClickAtAddress()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.VerifyAtAddress(); // updated
      // geo.AddressFlagEntry.VerifyActiveAsCurrentDate();
      // geo.AddressFlagEntry.VerifyAtDisplayCondition(0);
      // geo.AddressFlagEntry.DeleteFlag();
      // geo.AddressFlagEntry.VerifyConfirmationDeleteMessage();
      await geo.addressFlagEntry.DeleteAddressFlag()
      //		geo.addressFlagEntry.VerifyDeletionSuccessfulMessage();			// commented by Abi due to functionality changes
      //		geo.addressFlagEntry.ClickSaveButton();												//
      //		geo.switchToAddressFlagEntry();
      //		geo.addressFlagEntry.CloseScreen();								//	commented by Abi due to functionality changes
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.VerifyNoRecordFoundAcknowledgeMessage()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.ClickDeleteRow(0, 1)
      await geo.addressIntersection.VerifyConfirmationDeleteMessage()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.addressIntersection.VerifyRowDeletedInTheGrid(1)
    });
  });

  test('GeoFunctional1_112874', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112874', async () => {
      // Playback.testContext=testContext;
      //login.loginScreen.loginToFireInNewTab();
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyAtStreetName()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.ClickSaveButton()
      //line added based on iD 68373
      // objectIdentification.windowHandle.verifySameAcknowledgeNotOpensMultipletimes('(5006) No value for premise')
      //geo.apartmentEntry.VerifyAcknowlegdeSaveMessage();
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAcknowledgeAddMessage()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.VerifyPermiseUneditable()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAcknowledgeApartmentvalue()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //		geo.switchToApartmentEntry();
      //		geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.apartmentEntry.SaveScreen()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.apartmentEntry.CloseScreen()
      await geo.module.switchToApartment()
      //		geo.apartment.CloseScreen();							//Added by Abi due to blue screen issue in automation DB
      //		geo.switchToStreetSearchScreen();							//
      //		geo.streetSearch.SelectManageApartment();
      //		geo.switchToApartment();								//Added by Abi due to blue screen issue in automation DB
      await geo.apartment.VerifyPremiseViewed(0)
      await geo.apartment.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.verifyAtLocation()
      await geo.apartmentHelpWindow.verifyAtApartmentRange(); //added by Kiran
      await geo.apartmentHelpWindow.enterAtApartment()
      await geo.apartmentHelpWindow.clickUseThisAptNo()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddresseAndApartment()
      await geo.addressSearch.ClickAllTabs()
      //@Test(groups = { 'GeoFunctional2' })
    });
  });

  test('GeoFunctional1_114295', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '114295', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.VerifyAtPremiseOddInGrid(0);  //added by Kiran For Extraverification
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickManageApartmentUsingStreetName()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0);  //added by Kiran For Extraverification
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.apartmentEntry.SaveNClose()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyPremiseViewed(0)
      await geo.apartment.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.ClickToFlagTab();  //Testcase ID: 42119 updated From this Line
      await geo.addressSearch.addressSearchFlagsTab.ClickAddFlag()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDateAsCurrentDate()
      await geo.addressFlagEntry.switchToNarrativeTextFrame()
      await geo.addressFlagEntry.enterAtRemarks()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.doubleClickInSaveIcon()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickToFlagTab()
      await geo.addressSearch.addressSearchFlagsTab.VerifyActiveAsOfAsCurrentDate()
      await geo.addressSearch.addressSearchFlagsTab.verifyAtFlagRemarksInGrid()
      await geo.addressSearch.addressSearchFlagsTab.verifyCountInGrid(1)
      // Automated By : - Abinaya M, On:- 02/08/2023
      // Sprint :-Â 2023 :Â Quarter 1 :Â  Sprint 3
      // Type of Test case : - Defect - CRM # :-114295
    });
  });

});

test.describe('GeoFunctional2', () => {
  test('GeoFunctional2_112875', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112875', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.loginToFireInNewTab()
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyAtStreetName()
      await geo.apartment.ClickAtPremise()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.clickRefreshButton(); // Added by Abi
      await geo.apartmentEntry.VerifyApartmentViewed(0)
      await geo.apartmentEntry.VerifyPremise()
      await geo.apartmentEntry.ClickAtApartmentFrom()
      await geo.apartmentEntry.EnterAtSplitTo()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyApartmentSplited(0)
      await geo.apartmentEntry.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.apartmentEntry.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.EnterAtSplitApartment()
      await geo.apartmentHelpWindow.clickUseThisAptNo()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddressWithSplitApartment()
      await geo.addressSearch.ClickAllTabs()
    });
  });

  test('GeoFunctional2_112876', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112876', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.enterAtAddress()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAcknowledgeNoRecordFound()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.ClickSaveButton()
      await geo.commonNamesEntry.VerifyAcknowlegdeMessageRequiredEntriesAreMissing()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAcknowledgeMessageEnterCommonName()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtAddress()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameExist(0)
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.CloseScreen()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.SelectAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyStreetNameWithApartment()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.ClickAllTabs()
    });
  });

  test('GeoFunctional2_112877', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112877', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyAtStreetName()
      await geo.apartment.ClickAtPremise()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.DeleteAtApartment()
      await geo.apartmentEntry.VerifyAcknowlegeReviewMessage(); // Changed by Abi
      await geo.module.switchToApartmentEntry()
      //		//geo.switchToCommonNamesEntry();
      //		geo.apartmentEntry.CloseScreen();
      //		geo.switchToApartment();
      //		geo.apartment.CloseScreen();
      // Reworked by:- Abi , Date :- 11/10/2021 , Module:- Geo .
    });
  });

  test('GeoFunctional2_112878', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112878', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtCommonName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      // geo.commonNames.ClickAtCommonName(0);
      await geo.commonNames.clickAtCommonName(); // Added by Abi
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.clickRefreshButton(); // updated
      await geo.commonNamesEntry.VerifyAtCommonNameExist(0)
      // geo.commonNamesEntry.DeleteAtCommonNameRow(0);
      await geo.commonNamesEntry.DeleteAtCommonNameRow(); // Added by Abi
      await geo.commonNamesEntry.VerifyConfirmationDeleteMessage()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.VerifyRowsNotExits(); // delete issue report to module owner CRM# 57899
      await geo.commonNamesEntry.CloseScreen()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.VerifyAcknowledgeNoRecordFound(); // validation error message shows. CRM# created
      // geo.switchToCommonNamesEntry(); // Commented by Abi
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyAtStreetName()
      await geo.apartment.VerifyPremiseViewed(0); // Added by Abi
      await geo.apartment.ClickAtPremise()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.clickRefreshButton(); // updated
      await geo.apartmentEntry.DeleteAtApartment()
      await geo.apartmentEntry.VerifyConfirmationDeleteMessage()
      await geo.module.switchToCommonNamesEntry()
      await geo.apartmentEntry.SaveScreen()
      await geo.apartmentEntry.verifyUpdateSuccessfulStatusMessage()
    });
  });

  test('GeoFunctional2_112879', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112879', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.loginToFireInNewTab()
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew(); // commented as dataset has been added for these steps
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.SelectAtInterPrefix()
      await geo.streetEntry.EnterAtInterStreetName()
      await geo.streetEntry.EnterAtInterStreetType()
      await geo.streetEntry.SelectAtInterSuffix()
      await geo.streetEntry.enterAtZipCode1()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.VerifyInterSectionStreetNameWithPrefixSuffixAndTypeInGird(0)
      await geo.streetEntry.Save()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage(); // updated
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.EnterAtInterStreetName()
      await geo.streetSearch.EnterAtInterStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtIntersectionStreetName()
      await geo.streetSearch.ClickClearFields()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.VerifyAtStreetName()
      await geo.addressIntersection.EnterInvalidPremiseNumber()
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseNumber()
      await geo.addressIntersection.EnterAtInterStreetWithType()
      await geo.addressIntersection.EnterAllFields()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtInterStreetViewed(0)
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.ClickIntersectionCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetNameAndIntersection(0)
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtStreetNameAndTypeWithIntersectionSlashCharacter()
      await geo.addressSearch.VerifyAtIntersectionAddressByStreetName()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.EnterAtInterIntersectionStreetNameAndTypeWithSlashCharacter()
      await geo.addressSearch.VerifyAtIntersectionAddressByIntersectionStreetName()
    });
  });

  test('GeoFunctional2_112880', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112880', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtStreetNameWithIntersectionSlash()
      await geo.commonNamesEntry.VerifyAtStreetAndInterSectionStreet()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameExist(0)
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.CloseScreen()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtStreetNameWithInter()
      await geo.commonNames.VerifyAtStreetNameAndInterSectionStreetName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.SwitchToCommonNameTab()
      await geo.addressSearch.addressSearchCommonNameTab.VerifyAtCommonName()
    });
  });

  test('GeoFunctional2_112881', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112881', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.ClickIntersectionCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtIntersectionStreetName()
      await geo.streetSearch.ClickIntersectionCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.VerifyAtStreetNameAndIntersectionStreetName(0)
      await geo.addressIntersection.DeleteAtIntersectionStreetRow()
      await geo.addressIntersection.VerifyAcknowlegeReviewMessageCommon(); // Changed by Abi
      await geo.module.switchToAddressIntersection()
    });
  });

  test('GeoFunctional2_112882', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112882', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtCommonName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      await geo.commonNames.clickAtCommonName(); // Changed method w/o index by Abi
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.clickRefreshButton(); // updated
      await geo.commonNamesEntry.VerifyAtCommonNameExist(0)
      await geo.commonNamesEntry.DeleteAtCommonNameRow(); // Changed method w/o index
      await geo.commonNamesEntry.VerifyConfirmationDeleteMessage()
      await geo.module.switchToCommonNamesEntry(); // Changed by Abi
      await geo.commonNamesEntry.SaveScreen()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.VerifyRowsNotExits(); // delete issue reported to module owner
      await geo.commonNamesEntry.CloseScreen()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.VerifyAcknowledgeNoRecordFound(); // validation error message shows. CRM# created
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.VerifyAtStreetNameAndIntersectionStreetName(0)
      await geo.addressIntersection.DeleteAtIntersectionStreetRow()
      await geo.addressIntersection.VerifyConfirmationDeleteMessage()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.addressIntersection.VerifyIntersectionRowsNotExist()
    });
  });

  test('GeoFunctional2_112884', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112884', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.loginToFireInNewTab()
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtStreetType(0)
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.clickRefreshButton()
      await geo.streetUpdate.VerifyMainStreetName()
      await geo.streetUpdate.VerifyMainStreetType()
      await geo.streetUpdate.ClickAddButton()
      await geo.streetUpdate.VerifyAcknowledgeAddMessage()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.EnterAtAltStreet()
      await geo.streetUpdate.EnterAtAltStreetType()
      await geo.streetUpdate.ClickAddButton()
      await geo.streetUpdate.VerifyAlterStreetNameAddedInTheGird(0)
      await geo.streetUpdate.SaveScreen()
      await geo.module.switchToStreetUpdate()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage()
      await geo.streetUpdate.CloseStreetUpdateScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtAltStreetName()
    });
  });

  test('GeoFunctional2_112885', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112885', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.clickRefreshButton()
      await geo.streetUpdate.VerifyMainStreetName()
      await geo.streetUpdate.VerifyMainStreetType()
      await geo.streetUpdate.VerifyAlterStreetNameAddedInTheGird(0)
      await geo.streetUpdate.ClickAtAltStreetName()
      await geo.streetUpdate.VerifyAtAltStreetName()
      await geo.streetUpdate.VerifyAtAltStreetType()
      await geo.streetUpdate.ClickReplaceCheckBox()
      await geo.streetUpdate.ClickAddButton()
      await geo.streetUpdate.VerifyReplaceCheckBoxChecked(0)
      await geo.streetUpdate.SaveScreen()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.verifyUpdateSuccessfulStatusMessage()
      await geo.streetUpdate.CloseStreetUpdateScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtPremiseWithAlterStreetName()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtAltStreetName()
      // Reworked by:-Abi , Date :- 11/12/2021, Module:- Geo.
    });
  });

  test('GeoFunctional2_9063', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '9063', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectAtStreetNameFromGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseOddInGrid(0)
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickManageApartmentUsingStreetName()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen()
      await geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtAddress()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickToFlagTab()
      await geo.addressSearch.addressSearchFlagsTab.ClickAddFlag()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.VerifyAtOddInField()
      await geo.addressFlagEntry.VerifyAtOddInField()
      // Automated By : - Bavithra, On:- 11/09/2023
      // Sprint :-Â 2023 :Â Quarter 4 :Â  Sprint 21
    });
  });

});

test.describe('GeoFunctional3', () => {
  test('GeoFunctional3_112886', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112886', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Batch Update(P)')
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.clickRefreshButton()
      await geo.batchUpdate.verifyApplicationErrorAckMssgNotAppeared();//added line based on ID - 68332
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.EnterAtStreetName()
      await geo.batchUpdate.EnterAtStreetType()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.ClickSelectAllCheckBox()
      await geo.batchUpdate.ClickUpdateButton()
      await geo.batchUpdate.batchUpdatePopup.SelectAtPremiseType()
      await geo.batchUpdate.batchUpdatePopup.EnterAtZipCode()
      await geo.batchUpdate.batchUpdatePopup.EnterAtSubZone()
      await geo.batchUpdate.batchUpdatePopup.EnterAtCivilDistrict()
      await geo.batchUpdate.batchUpdatePopup.EnterAtPatrolZone()
      await geo.batchUpdate.batchUpdatePopup.EnterAtNPACard()
      await geo.batchUpdate.batchUpdatePopup.EnterAtTrack()
      await geo.batchUpdate.batchUpdatePopup.ClickAddCheckbox()
      await geo.batchUpdate.batchUpdatePopup.EnterAtCensus()
      await geo.batchUpdate.batchUpdatePopup.EnterAtCustom1()
      await geo.batchUpdate.batchUpdatePopup.updateScreenInBatchUpdate()
      await geo.batchUpdate.VerifyUpdateSuccessfulAcknowledgeMessage(); // updated
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.clickRefreshButton()
      await geo.batchUpdate.verifyApplicationErrorAckMssgNotAppeared();//added line based on ID - 68332
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.EnterAtStreetName()
      await geo.batchUpdate.EnterAtStreetType()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.VerifyAtStreetName(0)
      await geo.batchUpdate.VerifyAtZipcode(0)
      await geo.batchUpdate.VerifyAtTrackNo(0)
      await geo.batchUpdate.VerifyAtSubZone(0)
      await geo.batchUpdate.VerifyAtPatrolZone(0)
      await geo.batchUpdate.VerifyAtNPACard(0)
      await geo.batchUpdate.VerifyAtCustom(0)
      await geo.batchUpdate.VerifyAtCivilDistrict(0)
      await geo.batchUpdate.VerifyAtCensus(0)
    });
  });

  test('GeoFunctional3_112888', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112888', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Batch Update(P)')
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.EnterAtStreetName()
      await geo.batchUpdate.EnterAtStreetType()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.VerifyAtStreetName(0)
      await geo.batchUpdate.VerifyAtZipcode(0)
      await geo.batchUpdate.VerifyAtTrackNo(0)
      await geo.batchUpdate.VerifyAtSubZone(0)
      await geo.batchUpdate.VerifyAtPatrolZone(0)
      await geo.batchUpdate.VerifyAtNPACard(0)
      await geo.batchUpdate.VerifyAtCustom(0)
      await geo.batchUpdate.VerifyAtCivilDistrict(0)
      await geo.batchUpdate.VerifyAtCensus(0)
      await geo.batchUpdate.SelectAtPremiseNo()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.VerifyAtStreetName()
      await geo.addressIntersection.VerifyAtPatrolZoneGrid(0)
      await geo.addressIntersection.VerifyAtSubZoneGrid(0)
      await geo.addressIntersection.VerifyAtCensusGrid(0)
      await geo.addressIntersection.verifyAtZipCodeGrid(0)
      await geo.addressIntersection.clickAtPremiseNo()
      await geo.addressIntersection.VerifyBatchUpdateDetailsAtZipCodeCensusNPACard()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.DoubleClickAtPremise()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.clickRefreshButton(); // updated
      await geo.addressIntersection2040.VerifyAtStreetNameAndStreetType()
      await geo.addressIntersection2040.VerifyAtPremise()
      await geo.addressIntersection2040.switchToMainTab()
      await geo.addressIntersection2040.addressIntersectionMainTab.VerifyAtCensus()
      await geo.addressIntersection2040.addressIntersectionMainTab.VerifyAtPremiseType()
      await geo.addressIntersection2040.switchToPoliceTab()
      await geo.addressIntersection2040.policeTab.ClickAtCivilDistrictInGrid()
      await geo.addressIntersection2040.policeTab.VerifyAtCivilDistrict()
      await geo.addressIntersection2040.policeTab.VerifyAtCustom1()
      await geo.addressIntersection2040.policeTab.VerifyAtNPACard()
      await geo.addressIntersection2040.policeTab.VerifyAtPatrolZone()
      await geo.addressIntersection2040.policeTab.VerifyAtSubZone()
      await geo.addressIntersection2040.policeTab.VerifyAtTrackNo(0)
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.Save()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.addressIntersection2040.CloseScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickClearButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.module.switchToAddressIntersection()
      //updated By :-Kiran Date ;-10/24/2024 Sprint:-10 Quarter:-4 Testcase ID :-42078
    });
  });

  test('GeoFunctional3_112931', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112931', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtStreetDetails()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameExist(0)
      await geo.commonNamesEntry.EnterAtCommonName1()
      await geo.commonNamesEntry.EnterAtSortOrder1()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonName1AndSortOrderExist(1)
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyAdditionSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.enterAtCommonName3();   ///Testcase ID:42078 from this line- start
      await geo.commonNamesEntry.EnterAtSortOrder(2)
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.SaveScreen()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.verifyUpdateSuccessfulStatusMessage();// -End
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(3)
      await geo.commonNamesEntry.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName1()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
    });
  });

  test('GeoFunctional3_112934', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112934', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtCommonName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      await geo.commonNames.clickAtCommonName(); // Changed method w/o index
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.ClickAtCommonName()
      await geo.commonNamesEntry.UpdateSortOrderAs2()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifySortOrderAs2(0)
      await geo.commonNamesEntry.ClickSaveButton()
      await geo.commonNamesEntry.VerifyAcknowlegdeSortOrderMessage()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.ClickAtCommonName1()
      await geo.commonNamesEntry.UpdateSortOrderAs0()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifySortOrderAs0(1)
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyUpdateSuccessfulStatusMessage(); // updated
      await geo.commonNamesEntry.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.SelectAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName1()
    });
  });

  test('GeoFunctional3_112976', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112976', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.ClickWeatherButton()
      await geo.module.switchToWeatherScreen()
      await geo.weatherScreen.VerifyAsWeatherScreenDisplayed()
      // geo.weatherScreen.CloseScreen();
      // Reworked by:-Abi , Date :-11/26/2021 , Module:-Geo .
    });
  });

  test('GeoFunctional3_159694', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '159694', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickRefreshButton(); // updated
      await geo.addressIntersection.VerifyAtPremiseOddInGrid(1)
      await geo.addressIntersection.VerifyAtPremiseEvenInGrid(2)
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeOverlapping()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickAtPremiseOddRowInGrid()
      await geo.addressIntersection.EnterAtOddTo()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseOddSplited(1, 3); // Changes in method by Abi
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage()
      await geo.addressIntersection.VerifyAtPremiseOddSplited(1, 2); // Changes in method by Abi
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickAtPremiseEvenRowInGrid()
      await geo.addressIntersection.enterAtEvenTo()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseEvenSplited(3, 4); // Changes in method by Abi
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage()
      await geo.addressIntersection.VerifyAtPremiseEvenSplited(3, 4); // Changes in method by Abi
      await geo.module.switchToAddressIntersection()
      //		geo.addressIntersection.CloseScreen();
    });
  });

  test('GeoFunctional3_207329', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '207329', async () => {
      await loginPage.loginScreen.Logon()
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyConfirmGeoFly()
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.VerifyAtStreetName()
      await geo.fastGeo.VerifyAtIntStreetName()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.ClickRefreshMapButton()
      await geo.fastGeo.enterAtCommonName()
      await geo.fastGeo.clickSaveAndUseAddress()
      await geo.fastGeo.Verify5108SelectedMuncipalityConfirmMessage(); // This popup is not arising for
      //	 geo.fastGeo.VerifyAddressConfirmMessage();
      // gn address
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.ClickAllTabs()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtCommonName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.VerifyAtAddress(0)
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.ClickIntersectionCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtInterStreetName(0)
      await geo.streetSearch.VerifyAtCSZ(0)
      await geo.streetSearch.EnterAtInterStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtIntersectionStreetName(); // //issue happened in chrome
      // geo.streetSearch.VerifyAtCSZ(0);
    });
  });

  test('GeoFunctional3_207330', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '207330', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.VerifyAtCSZ()
      await geo.addressSearch.ClickAllTabs()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.EnterAtStreetNameWithSlashCharacter()
      await geo.addressSearch.VerifyAtAddress1()
      // geo.addressSearch.VerifyAtCommonName(); need to uncomment after adding
      // dataset
      await geo.addressSearch.ClickAllTabs()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.EnterAtStreetName1WithSlashCharacter()
      await geo.addressSearch.VerifyAtAddress2()
      // geo.addressSearch.VerifyAtCommonName(); need to uncomment after adding
      // dataset
      await geo.addressSearch.VerifyAtCSZ()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.SwitchToCommonNameTab()
      await geo.addressSearch.addressSearchCommonNameTab.VerifyAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.EnterAtStreetNameAndStreetName1WithSlashCharacter()
      await geo.addressSearch.VerifyAtAddress1()
      //	geo.addressSearch.VerifyAtCommonName();							need to uncomment after adding dataset
      await geo.addressSearch.VerifyAtCSZ()
      await geo.addressSearch.ClickAllTabs()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.EnterAtStreetName1AndStreetNameWithSlashCharacter()
      await geo.addressSearch.VerifyAtAddress2()
      //	geo.addressSearch.VerifyAtCommonName();							need to uncomment after adding dataset
      await geo.addressSearch.VerifyAtCSZ()
      await geo.addressSearch.SwitchToCommonNameTab()
      await geo.addressSearch.addressSearchCommonNameTab.VerifyAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickAllTabs()
      // Automated by:- Dinesh , Date :- 14/12/2021 , Quarter:-4 , Sprint:-5 ,
      // Module:-Geo .
    });
  });

});

test.describe('SysParamter', () => {
  test('SysParamter_112935', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '112935', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      // // SettingsScripts.SettingsTestContext = GeoTestContext;
      await settings.sysParameter.enterParameterIDAs508()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterParameterIDAs509()
      // objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtCommonName()
      await geo.addressSearch.VerifyAtParaIDButtonExist()
      await geo.addressSearch.ClickAtParaIDNameButton()
      await geo.module.switchToGoogleMap()
      await geo.module.switchToAddressSearchScreen()
    });
  });

});

test.describe('SysParamter512', () => {
  test('SysParamter512_150286', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '150286', async () => {
      // Playback.testContext=testContext;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsGoogleMap()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      //geo.addressSearch.VerifyMapTabColorRed();
      await geo.addressSearch.clickMapTabForGoogleMap(); // make changes in method
      //geo.addressSearch.addressSearchMapTab.switchToGoogleMapTab(); // make changes in method
      await geo.addressSearch.addressSearchMapTab.ClickResetButton()
      await geo.addressSearch.addressSearchMapTab.DragandDropMapLocationIcon()
      await geo.addressSearch.addressSearchMapTab.ClickUpdateButton()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateTableConfirmMessage()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateConfirmMessage()
      await geo.module.switchToAddressSearchScreen()
      //geo.addressSearch.switchToMapTab();
      //	geo.addressSearch.VerifyMapTabColorBlack(); // Added by Abi
      await geo.addressSearch.clickMapTabForGoogleMap()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateAcknowledgeMessage(); // issue in DB, run after DB sync
      await geo.module.switchToAddressSearchScreen()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsHEREMap()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('SysParamter512_257114', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257114', async () => {
      // Playback.testContext=testContext;
      //		String LatituteLongitute = null;
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      //		settings.sysParameter.setSystemparameter512AsESRI();
      await settings.sysParameter.setSystemparameter512AsGoogleMap()
      //		settings.switchToSystemParamter();
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyConfirmGeoFly()
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.EnterAtStreet()
      //		geo.fastGeo.GetLatLongValue(LatituteLongitute);
      await geo.fastGeo.clickSaveAndUseAddress()
      // geo.fastGeo.VerifyAddressAcknowledgeMessage();
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.clickMapTabForGoogleMap()
      // //		geo.addressSearch.addressSearchMapTab.verifyLatLongValue(Playback.getTestContextAttribute(LatituteLongitute))
      const latAndLong = await geo.addressSearch.addressSearchMapTab.getLatAndLongList()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickToDetailsTab()
      await geo.addressSearch.addressSearchDetailsTab.verifyActiveLatitude(latAndLong)
      await geo.addressSearch.addressSearchDetailsTab.verifyActiveLongitude(latAndLong)
      await geo.addressSearch.addressSearchDetailsTab.enterAtPatrolzone(); ////update the testcase ID:42049 from this line
      await geo.addressSearch.addressSearchDetailsTab.enterAtTowArea()
      await geo.addressSearch.addressSearchDetailsTab.SaveScreen()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickToDetailsTab()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await geo.addressSearch.addressSearchDetailsTab.verifyActiveLatitude(latAndLong)
      await geo.addressSearch.addressSearchDetailsTab.verifyActiveLongitude(latAndLong)
    });
  });

  test('SysParamter512_256804', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '256804', async () => {
      // address help window
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.verifyAlphaRadioButtonSelected()
      await geo.commonNameHelp.verifyGridListOutResults()
      await geo.commonNameHelp.clickAtContainsRadioButton()
      await geo.commonNameHelp.verifyGridListOutResults()
      await geo.commonNameHelp.clickAtSoundEXRadiobutton()
      await geo.commonNameHelp.VerifyAcknowledgeNoRecordFound()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.clickAtContainsRadioButton()
      await geo.commonNameHelp.verifyGridListOutResults()
      await geo.commonNameHelp.CloseCommonHelpWindow()
      // valid address
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtAddress1()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress2()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtAddress2()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress3()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.verifyAtAddress(3)
      // intersection
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtIntersectionAddress()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtIntersectionAddressByStreetName()
      // intersection street alone
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtIntStreet()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtIntersectionAddressByIntersectionStreetName()
      // inactive intersection and search
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.EnterAtInterStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.selectgridCheckBoxByInterSteetName()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickAtInterStreetNameInGrid()
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyUpdateSuccessfulStatusMessage()
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtIntersectionStreet()
      await geo.addressSearch.VerifyAcknowledgeInactiveIntersection()
      // common name
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.EnterAtCommonName()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.verifyAtAddress(7)
      // phone no
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.EnterAtPhoneNumber()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.verifyAtAddress(8)
      // Verify apartment needed
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress4()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.closeWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddressBubbleNotDisplayed()
      // Verify apartment not needed
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsNoVerification()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress5()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.verifyAtAddress(5)
      // Verify apartment needed
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsValidApartment()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress6()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.closeWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddressBubbleNotDisplayed()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtAddress1()
      // address button
      await geo.addressSearch.ClickAddressButton()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.VerifyAtStreetName('N Hemlock St S')
      await geo.addressIntersection2040.CloseScreen()
      // print button
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.clickPrintButton()
      await home.module.switchToSelectReport()
      await home.selectReport.clickAddressDetailReportInGrid()
      // Weather button
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickWeatherButton()
      await geo.module.switchToWeatherScreen()
      await geo.weatherScreen.verifyTemperature()
      await geo.weatherScreen.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.EnterAtAlarmNo()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.verifyAtAddress(9)
    });
  });

  test('SysParamter512_257949', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257949', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsESRI()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress1()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress1()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.enterAtApartment()
      await geo.apartmentHelpWindow.clickUseThisAptNo()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.clickMapTabForESRIMap()
      await geo.addressSearch.addressSearchMapTab.veriyAtLatitudeAndLongitude()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsHEREMap()
      await settings.module.switchToSystemParamter()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('SysParamter512_258294', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '258294', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter558As8()
      await settings.module.switchToSystemParamter()
      //		settings.sysParameter.setSystemparameter512AsESRI();
      await settings.sysParameter.setSystemparameter512AsHEREMap()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('AVL Replay')
      await geo.module.switchToAVLReplay()
      await geo.aVLReplay.enterAtFromDateAndTime()
      await geo.aVLReplay.enterAtToDateAndTime()
      await geo.aVLReplay.clickShowUnits()
      await geo.aVLReplay.verifyNoRecordsFoundSelectedTimeDuationAckwMsg()
      await geo.module.switchToAVLReplay()
      await geo.aVLReplay.clickPolygonButtonInDrawAreas()
      await geo.aVLReplay.dragAndPointInMapPanel()
      await geo.aVLReplay.verifyNoRecordsFoundSelectedTimeDuationAckwMsg()
      await geo.module.switchToAVLReplay()
      await geo.aVLReplay.clickResetButton(); // updated
      await geo.aVLReplay.enterAtFromDateAndTimeII()
      await geo.aVLReplay.enterAtToDateAndTimeII()
      //		geo.aVLReplay.verifyShowUnitsOnMapIsDisabled();           											 to be added for 14.87
      await geo.aVLReplay.clickShowUnits()
      await geo.aVLReplay.verifyFromdatelessthanTodateAckwMsg()
      await geo.module.switchToAVLReplay()
      await settings.module.switchToSystemParamter()
    });
  });

  test('SysParamter512_UpdateGeoCode', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'UpdateGeoCode', async () => {
      await loginPage.loginScreen.Logon()
      //		loader.navigateToModule('Setting');
      //		loader.navigateToScreen('System Parameter');
      //		settings.switchToSystemParamter();
      //		settings.sysParameter.setSystemparameter512AsGoogleMap();
      //		objectIdentification.windowHandle.switchToMainWindow();
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Update GeoCode')
      await geo.module.switchToUpdateGeoCode()
      await geo.updateGeoCode.enterAtAddress()
      await geo.updateGeoCode.clickSearchButton()
      await geo.updateGeoCode.selectAtAddressInGrid()
      await geo.module.switchToAddressSearchWindow()
      //geo.updateGeoCode.verifyInvalidZipCodeAckMessage();
      await geo.updateGeoCode.verifyInvalidZipCodeAckMessgaeNotAppeared();//updated based on ID 68376
      await geo.module.switchToAddressSearchWindow()
      await geo.addressSearch.clickMapTabForGoogleMap()
      await geo.addressSearch.addressSearchMapTab.ClickResetButton()
      await geo.addressSearch.addressSearchMapTab.verifyLatLongNotSet()
      await geo.addressSearch.addressSearchMapTab.dragAndDropInMap()
      await geo.addressSearch.addressSearchMapTab.ClickUpdateButton()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateTableConfirmMessage()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateConfirmMessage()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateAcknowledgeMessage()
      await geo.module.switchToAddressSearchWindow()
      await geo.addressSearch.clickMapTabForGoogleMap()
      await geo.addressSearch.addressSearchMapTab.verifyLatLongValueSet()
      await geo.addressSearch.CloseScreen()
      await geo.module.switchToUpdateGeoCode()
      await geo.updateGeoCode.enterAtAddress()
      await geo.updateGeoCode.clickSearchButton()
      await geo.updateGeoCode.verifyNoRecordsFoundAck()
      await geo.module.switchToUpdateGeoCode()
      // Automated by:-Abinaya , Date :-11/08/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

  test('SysParamter512_42033', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '42033', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsHEREMap()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyConfirmGeoFly()
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.EnterAtPremise()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.clickSaveAndUseAddress()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToMapTab()
      await geo.addressSearch.addressSearchMapTab.verifyLatLongValueSet()
      await geo.addressSearch.addressSearchMapTab.ClickResetButton()
      await geo.addressSearch.addressSearchMapTab.ClickUpdateButton()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateTableConfirmMessage()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateConfirmMessage()
      await geo.addressSearch.addressSearchMapTab.VerifyUpdateAcknowledgeMessage()
      // objectIdentification.smokeTest.checkAckExist();//verifying Validation Acknowledge Exist
      await loaderPage.navigateToScreen('AVL Replay');    //Testcase ID:42066 Updation
      await geo.module.switchToAVLReplay()
      await geo.aVLReplay.selectAtMapOptions()
      await geo.aVLReplay.verifyStopplayAndChangeMapOptionPopUpIsNotArised()
      await geo.module.switchToAVLReplay()
      //Automated by  :-Kiran  Date :-10/23/2024 Quarter:-4 Sprint: Module:-geo
    });
  });

  test('SysParamter512_42048', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '42048', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsGoogleMap()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickAddnewButton()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerType()
      await geo.mapLayerEntry.selectAtLayerName()
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.clickAddressVerificationCheckBox()
      await geo.mapLayerEntry.SaveScreen()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.maximizeScreen()
      await geo.mapLayerEntry.verifyAdditionSuccessfulBottomMessage()
      await geo.mapLayerEntry.VerifyAtFeatureName()
      //Automated by  :-Kiran  Date :-24/10/2024 Quarter:-4 Sprint:10 Module:-Geo
    });
  });

  test('SysParamter512_42052', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '42052', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsGoogleMap()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickAddnewButton()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerType()
      await geo.mapLayerEntry.selectAtLayerName()
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.verifyAddressFieldIsMandatory()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.verifyFromlatlongIsDisplayed()
      await geo.mapLayerEntry.verifyTolatlongIsDisplayed()
      await geo.mapLayerEntry.verifyAtFromlatlong()
      await geo.mapLayerEntry.verifyAtTolatlong()
      await geo.mapLayerEntry.selectAtLayerType(0)
      await geo.mapLayerEntry.verifyAddressFieldIsNonMandatory()
      await geo.mapLayerEntry.verifyFromlatlongIsNotEnabled()
      await geo.mapLayerEntry.verifyTolatlongIsIsNotEnabled()
      await geo.mapLayerEntry.clickMapTab()
      await geo.mapLayerEntry.mapTab.clickDrawAlineButton()
      await geo.mapLayerEntry.mapTab.drawALineInMap()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.SaveScreen()
      await geo.mapLayerEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      //Automated by  :-Sarath  Date :-01/20/2025 Quarter:-1 Sprint:1 Module:-Geo
    });
  });

});

test.describe('2020DefectStreetSearch', () => {
  test('2020DefectStreetSearch_247900', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247900', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNoinFromAndTo()
      await geo.addressIntersection.EnterAtEvenNoinFromAndTo()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.DeleteAtOddRow()
      await geo.addressIntersection.VerifyConfirmationDeleteMessage()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.VerifyRowDeletedInTheGrid(1)
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
    });
  });

  test('2020DefectStreetSearch_247901', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247901', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyAtStreetName()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterPremise()
      await geo.apartmentEntry.VerifyNotValidPremiseMessage()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.VerifyPermiseUneditable()
      await geo.apartmentEntry.EnterApartmentFromAs2()
      //		geo.switchToApartmentEntry();
      //geo.apartmentEntry.EnterApartmentToAsA();
      //geo.apartmentEntry.VerifyInvalidInputAcknowlegdeMessage();
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //	geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickInactiveCheckbox()
      await geo.apartmentEntry.VerifyCurrentDateShows()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(1)
      await geo.apartmentEntry.verifyInactiveCheckBoxIsSelected(1); // Added by Abi
      await geo.apartmentEntry.ClickAtApartmentFrom(); // Added by Abi
      // geo.apartmentEntry.DoubleClickAtApartmentFrom(); // method commented
      await geo.apartmentEntry.verifyApartmentFromFeildIsDisabled()
      await geo.apartmentEntry.ClickInactiveCheckbox(); // Added by Abi
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.CloseScreen()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyPremiseViewed(0)
      await geo.apartment.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAtAddressWithInvalidApartmentFrom()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.VerifyLocation()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed(); // Added by Abi
      await geo.addressSearch.ResetAddress(); // Added by Abi
      await geo.addressSearch.EnterAtAddressWithApartmentFrom(); // Added by Abi
      await geo.addressSearch.verifyAtAddressBubble(); // Added by Abi
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_255120', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255120', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.EnterAtPrefix()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtPrefix(0)
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtZipcode()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectAtStreetType()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.ClickShowAltStreetNameCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.ClickInactiveCheckboxCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToApartment()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      // Reworked by:-Abi , Date :-11/15/2021 , Module:-Geo .
    });
  });

  test('2020DefectStreetSearch_255122', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255122', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumberWithLetters(); // Added by Abi
      await geo.addressIntersection.verifyPremiseEvenInactive(); //
      await geo.addressIntersection.verifyOddEvenPremiseComboBoxAsBoth()
      await geo.addressIntersection.clickRefreshButton(); // Added by Abi
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtEvenOddInGrid(1)
      await geo.addressIntersection.clickRefreshButton()
      await geo.addressIntersection.enterAtEvenOddNumber(); // Added by Abi
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAcknowledgeOddNumber(); //
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.closeAddressIntersectionScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickManageIntersectionUsingStreetName()
      await geo.module.switchToAddressIntersection()
      //		geo.addressIntersection.bindValuesinZipCodeEdit();
      //		geo.addressIntersection.verifyZipCodeBasedOnJuris();
      await geo.addressIntersection.enterAtZipCode()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.clickAddNewButton()
      await popupPage.kPICodedLookup.switchToZipCodeEntry()
      await geo.zipCodeEntry.enterAtZipCodeEdit()
      await geo.zipCodeEntry.selectAtStateComboBox()
      await geo.zipCodeEntry.enterAtCityEdit()
      await geo.zipCodeEntry.saveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickZipCodeLookupButton()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.closeAddressIntersectionScreen()
      await geo.module.switchToStreetSearchScreen(); // Added by Abi
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterOddNumber()
      await geo.addressIntersection.EnterEvenNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.SelectPatrolZone()
      await geo.addressIntersection.enterAtNPACard()
      await geo.addressIntersection.SelectSubZone()
      await geo.addressIntersection.EnterGeoCordsX()
      await geo.addressIntersection.EnterGeoCordsY()
      await geo.addressIntersection.SelectVotingDistrict()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.ClickDeleteRow(1, 1)
      await geo.addressIntersection.VerifyConfirmationDeleteMessage()
      await geo.module.switchToAddressIntersection()
    });
  });

  test('2020DefectStreetSearch_255123', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255123', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterPremise()
      await geo.apartmentEntry.verifyAt5001NotAValidPremiseStatusMsg()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.VerifyPermiseUneditable()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //geo.apartmentEntry.EnterAtApartmentTo();  //hided by Kiran
      await geo.apartmentEntry.ClickInactiveCheckbox()
      await geo.apartmentEntry.VerifyCurrentDateShows()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.apartmentEntry.CloseScreen()
      await geo.module.switchToApartment()
      await geo.apartment.CloseScreen()
      // 2nd
      //		loader.navigateToModule('Geo');
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.clearZipCode()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      //		geo.switchToStreetSearchScreen();
      //		geo.streetSearch.SelectManageIntersection();
      //		geo.addressIntersection.VerifyAtInterStreetViewed(0);
      //		geo.addressIntersection.CloseScreen();
      // 3rd
      //		loader.navigateToModule('Geo');
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.EnterAtAltStreet()
      await geo.streetUpdate.EnterAtAltStreetType()
      await geo.streetUpdate.ClickMainStreetInactive()
      await geo.streetUpdate.ClickReplaceCheckBox()
      await geo.streetUpdate.verifyPremiseFieldsAreUnEditable()
      await geo.streetUpdate.ClickAddButton()
      await geo.streetUpdate.SaveScreen()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.CloseStreetUpdateScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.VerifyAlterStreetNameAddedInTheGird(0)
      await geo.streetUpdate.CloseStreetUpdateScreen()
      //		loader.navigateToModule('Geo');
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.verifyNoRecordsFoundAck()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_257948', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257948', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType(); // updated
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.clickAtDescription()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseOddFromAndTo()
      await geo.addressIntersection.enterAtPremiseEvenFromAndTo()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtZipCodeGrid(0)
      await geo.addressIntersection.SaveScreen();////------------------Need to add bottom Message verification
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.deleteRowByUsingEvenOddInGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_257115', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257115', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNoinFromAndTo()
      await geo.addressIntersection.EnterAtEvenNoinFromAndTo()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen(); // Added by Abi
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage(); // Added by Abi
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      //		if (Thread.currentThread().getStackTrace()[1].getMethodName().contains('257115')
      //				&& (PropertiesFile.readPropertiesFile('url').contains('14.87'))) {
      //			geo.addressIntersection.closeAddressIntersectionScreen(); // Add this line due to blue screen issue in 14.87
      //		}
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.DoubleClickOnTheRowAtPremiseOdd()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.switchToMainTab()
      await geo.addressIntersection2040.addressIntersectionMainTab.clickMapButton()
      await home.module.switchToGlobalMapScreen()
      await home.globalMapScreen.Close()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.switchToMainTab()
      await geo.addressIntersection2040.addressIntersectionMainTab.clickGetButton()
      await geo.module.switchToAddressIntersection2040UpdateLatLongWindow()
      await geo.addressIntersection2040UpdateLatLongWindow.clickMapButton()
      await home.module.switchToGlobalMapScreen()
      await home.globalMapScreen.Close()
      await geo.module.switchToAddressIntersection2040UpdateLatLongWindow()
      await geo.addressIntersection2040UpdateLatLongWindow.clickGetButton()
      await geo.addressIntersection2040UpdateLatLongWindow.clickAutoCalculateButton()
      await geo.addressIntersection2040UpdateLatLongWindow.clickGetButton()
      await geo.addressIntersection2040UpdateLatLongWindow.clickMapButton()
      await home.module.switchToGlobalMapScreen()
      await home.globalMapScreen.Close()
      await geo.module.switchToAddressIntersection2040UpdateLatLongWindow()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_247877', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247877', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.ClickAtPremiseOddRowInGrid()
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAcknowledgePremiseInactiveAddress()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtAddress()
      await names.nameSearch.clickAddressIBubbleIcon()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearch.verifyAddressButtonInActive()
      await geo.addressSearchHelp.switchToFlagsTab()
      await geo.addressSearch.addressSearchFlagsTab.verifyAddFlagInactive()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.switchToCommonNameTab()
      await geo.addressSearch.addressSearchCommonNameTab.verifyAddCommonNameDisabled()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.verifyAddNewButtonDisabled()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.CloseAddressSearchScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.VerifyAcknowledgePremiseInactiveAddress()
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtAddress1()
      await names.nameEntry.VerifyAcknowledgePremiseInactiveAddress()
      await names.module.switchToNameEntry()
      await names.nameEntry.enterAtAddress2()
      await names.nameEntry.VerifyAddressIconDisplayed()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_247881', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247881', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.selectPrefixAsNE()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      //        geo.streetEntry.Save();
      await geo.streetEntry.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtEvenFrom()
      await geo.addressIntersection.enterAtEvenTo()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet1()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet2()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet3()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.ClickAllTabs()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Mithun
    });
  });

  test('2020DefectStreetSearch_250095', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '250095', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.EnterStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      //        geo.streetEntry.Save();
      await geo.streetEntry.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      //        geo.addressIntersection.enterAtZipCode();
      await geo.addressIntersection.clickAddButton()
      //        geo.addressIntersection.SaveScreen();
      await geo.addressIntersection.saveNCloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet1(); // updated
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet2(); // updated
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet3(); // updated
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtIntersectionAddressByStreetName()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetSearch_258308', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '258308', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clickAtPremiseNo()
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAcknowledgePremiseInactiveAddress()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAddressButtonIsDisabled()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtAddress()
      await names.nameSearch.clickAddressIBubbleIcon()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.switchToFlagsTab()
      await geo.addressSearchHelp.addressSearchHelpFlagsTab.verifyAddFlagsButtonIsDisabled()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.switchToCommonNameTab()
      await geo.addressSearchHelp.addressSearchHelpCommonNameTab.verifyAddCommonNamesButtonIsDisabled()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.switchToContactsTab()
      await geo.addressSearchHelp.addressSearchHelpContactTab.verifyAddNewButtonIsDisabled()
      await geo.module.switchToAddressSearchHelpWindow()
      await geo.addressSearchHelp.CloseAddressSearchScreen()
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtAddress1()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.selectAtRealAddress(0)
      await geo.realAddressHelpWindow.verifyAcknowledgeAtPremiseNoIsInactive()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.selectAtRealAddress(1)
      await names.module.switchToNameEntry()
      await names.nameEntry.clearAddress()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.VerifyAcknowledgePremiseInactiveAddress()
      await names.module.switchToNameEntry()
    });
  });

  test('2020DefectStreetSearch_257951', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257951', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.ClickAtStreetName1()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddressWithInvalidPremise()
      await geo.module.switchToPremiseHelpWindow()
      await geo.premiseHelpWindow.clickShowDetailButton()
      await geo.premiseHelpWindow.verifyPremiseNoInGrid()
      await geo.premiseHelpWindow.closeScreen()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress1WithOutApartmentNo()
      await geo.module.switchToApartmentHelpWindow1()
      await geo.apartmentHelpWindow.verifyApartmentRangeNotEmpty()
      await geo.apartmentHelpWindow.closeWindow()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.verifyAtAddressBubble()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

});

test.describe('2020DefectStreetEntry', () => {
  test('2020DefectStreetEntry_247882', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247882', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyStatusMessage()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.EnterAtStreetName1()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.EnterAtStreetName1()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName1()
      await geo.streetSearch.ClickAtStreetName1()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.VerifyAtAddress()
      //Updated by Kiran Quarter:4 Sprint:10, Date:10/24/2024 : Testcase ID:42049
    });
  });

  test('2020DefectStreetEntry_255126', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255126', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.selectAtJuris()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.streetEntry.Save()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.selectAtJuris1()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.selectJurisAsNull()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetType(0)
      await geo.streetSearch.VerifyAtStreetType(1)
      await geo.streetSearch.selectAtJuris()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseEven()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtEvenOddInGrid(0)
      await geo.addressIntersection.SaveScreen(); // Added by Abi
      await geo.addressIntersection.closeAddressIntersectionScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.selectAtJuris1()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseEven()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickInactiveCheckBox()
      await geo.addressIntersection.VerifyInactiveDateDisabled()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtEvenOddInGrid(0)
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.closeAddressIntersectionScreen()
      await geo.module.switchToStreetSearchScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.verifyAtRealAddress(0)
      await geo.realAddressHelpWindow.verifyAtRealAddress(1)
      await geo.realAddressHelpWindow.selectAtRealAddress(1)
      await geo.realAddressHelpWindow.verifyAcknowledgeAtPremiseNoIsInactive()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.selectAtRealAddress(0)
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyFlagsTabIsDisplayed()
      await geo.addressSearch.verifyCommonNameTabIsDisplayed()
      await geo.addressSearch.verifyAttachmentsTabIsDisplayed()
      await geo.addressSearch.verifyContactsTabIsDisplayed()
      await geo.addressSearch.verifyDetailsTabIsDisplayed()
      await geo.addressSearch.verifyNotificationTabIsDisplayed()
      await geo.addressSearch.verifyMapTabIsDisplayed()
      await geo.addressSearch.verifyActivitiesTabIsDisplayed()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress1()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.verifyAtRealAddress(0)
      await geo.realAddressHelpWindow.verifyAtRealAddress(1)
      await geo.realAddressHelpWindow.close()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress2()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.verifyAtRealAddress1(); // Make changes in the method by Abi
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetEntry_255121', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255121', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifySpecialCharactersNotAllowed()
      await geo.streetEntry.EnterSpecialCharacter()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.EnterSpecialCharacter()
      await geo.streetEntry.VerifySpecialCharacterNotAllowedInStreetName()
      await geo.streetEntry.SelectAtPrefix()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.DeleteRowFromGrid()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      // Reworked by:- Abinaya , Date :- 10/22/2021 , Module:- Geo.
    });
  });

  test('2020DefectStreetEntry_257125', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257125', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.selectJurisAsBC()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      //		geo.switchToStreetEntry();
      //		geo.streetEntry.VerifyAdditionSuccessfulStatusMessage(); //updated
      //		geo.streetEntry.closeStreetEntry();
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.selectAtJuris()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtFromAndToOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      //		geo.switchToAddressIntersection();
      //		geo.addressIntersection.verifyAdditionSuccessfulStatusMessage();
      //		geo.addressIntersection.CloseScreen();
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.enterAtMiddleName()
      await names.nameEntry.enterAtAddressStreetNameWithPremiseNo()
      await names.nameEntry.VerifyAddressIconDisplayed()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.EnterAtBirthDate()
      await names.nameEntry.nameEntryMainTab.verifyAsAdultAge()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyNameTypeAutoBindedAsA()
      await names.nameEntry.SaveNCloseScreen()
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAddressAsAddress()
      await names.nameSearch.EnterAtPremiseNo()
      await names.nameSearch.EnterAtStreet()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.VerifyAtName(0)
      // objectIdentification.windowHandle.switchToMainWindow()
      // Reworked by:-Abi , Date :-11/15/2021 , Module:- Geo .
    });
  });

  test('2020DefectStreetEntry_257127', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257127', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.saveNClose()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.enterAtEvenTo()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.verifyNameTypeCheckboxDefaultSelectedForPerson()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName(); // Changes in a method by Abi
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectPhoneType1AsHome()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.enterAtNotes()
      await geo.contactEntryScreen.SaveCloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.ClickReset()
      await geo.addressSearch.addressSearchContactTab.VerifyAtNameInTheGrid(0)
      await geo.addressSearch.addressSearchContactTab.VerifyAtNotesInTheGrid(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetEntry_257128', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257128', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.SelectAtPrefix()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.enterAtEvenTo()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtStreetDetails()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.SaveAndClose()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      await geo.addressSearch.SwitchToCommonNameTab()
      await geo.addressSearch.addressSearchCommonNameTab.VerifyAtCommonName(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetEntry_257950', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257950', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.clickAtDescription()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.streetEntry.Save()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      //		geo.streetSearch.selectRowByAtCSZ();
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseOddFromAndTo()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtZipCodeGrid(0)
      await geo.addressIntersection.enterAtPremiseEvenFromAndTo()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtZipCodeGrid(1)
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.deleteRowByUsingEvenOddInGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.saveNCloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      //	 Reworked by:- Abi , Date :- 11/02/2021, Module:- Geo . // only run in 14.82
    });
  });

  test('2020DefectStreetEntry_247879', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247879', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry(); //
      await geo.streetEntry.closeStreetEntry(); //
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtEvenFrom()
      await geo.addressIntersection.enterAtEvenTo()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection(); //
      await geo.addressIntersection.CloseScreen(); //
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.EnterAtBirthDate()
      await names.nameEntry.nameEntryMainTab.SelectAtSex()
      await names.nameEntry.nameEntryMainTab.SelectLicenseType()
      await names.nameEntry.nameEntryMainTab.SelectAtRace()
      await names.nameEntry.nameEntryMainTab.SelectAtEthnic()
      await names.nameEntry.nameEntryMainTab.SelectAtResident()
      await names.nameEntry.SaveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAddressAsAddress()
      await names.nameSearch.EnterAtPremiseNo()
      await names.nameSearch.EnterAtStreet()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.VerifyAtNameUsingLastNameFirstName(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetEntry_247880', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '247880', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.saveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterNameIDAsA()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.EnterAtBirthDate()
      await names.nameEntry.nameEntryMainTab.SelectAtSex()
      await names.nameEntry.nameEntryMainTab.SelectLicenseType()
      await names.nameEntry.nameEntryMainTab.SelectAtRace()
      await names.nameEntry.nameEntryMainTab.SelectAtEthnic()
      await names.nameEntry.nameEntryMainTab.SelectAtResident()
      await names.nameEntry.SaveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterNameIDAsO()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.EnterAtBirthDate()
      await names.nameEntry.nameEntryMainTab.SelectAtSex()
      await names.nameEntry.nameEntryMainTab.SelectLicenseType()
      await names.nameEntry.nameEntryMainTab.SelectAtRace()
      await names.nameEntry.nameEntryMainTab.SelectAtEthnic()
      await names.nameEntry.nameEntryMainTab.SelectAtResident()
      await names.nameEntry.SaveNCloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToNamesTab()
      await geo.addressSearch.addressSearchNamesTab.verifyAtNameInGrid()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtAddress()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.verifyAtNameInGrid()
      await names.nameSearch.verifyAtName1InGrid()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectStreetEntry_261407', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '261407', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.verifyAtZipCodeDescription()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.selectRowByAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.EnterAtEvenNumber(); // updated
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtEvenOddInGrid(0)
      //		geo.addressIntersection.CloseScreen();
      await geo.addressIntersection.SaveScreen(); //added by kiran
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage();   //added by kiran
      await geo.addressIntersection.saveNCloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen();  //added by kiran
      await geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage();   //added by kiran
      await geo.apartmentEntry.SaveNClose()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyPremiseViewed(0);  //added by kiran For Extraverification
      await geo.apartment.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickManageIntersectionUsingStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAtIntStreetNameInGrid()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

});

test.describe('2020DefectAddressFlag', () => {
  test('2020DefectAddressFlag_255723', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255723', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Batch Update(P)')
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.EnterAtStreetName()
      await geo.batchUpdate.EnterAtZipCode()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.VerifyAtStreetName(0)
      await geo.batchUpdate.clickAtStreetNameInGrid(0)
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.EnterAtEvenNumber()
      await geo.addressIntersection.selectPatrolZoneAsPatrolZone()
      await geo.addressIntersection.selectSubZoneAsSubZone()
      await geo.addressIntersection.enterAtNPACard()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyAtEvenOddInGrid(1)
      // geo.switchToAddressIntersection();
      // geo.addressIntersection.verifyUpdateSuccessfulStatusMessage();
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.VerifyAtPatrolZone1(1)
      await geo.batchUpdate.VerifyAtSubZone(1)
      await geo.batchUpdate.VerifyAtNPACard(1)
      await geo.batchUpdate.ClickIntersectionCheckBox()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.ClickSelectAllCheckBox()
      await geo.batchUpdate.ClickUpdateButton()
      await geo.batchUpdate.batchUpdatePopup.SelectAtPremiseType(); // Changed by Abi
      await geo.batchUpdate.batchUpdatePopup.EnterAtZipCode()
      await geo.batchUpdate.batchUpdatePopup.EnterAtPatrolZone()
      await geo.batchUpdate.batchUpdatePopup.EnterAtSubZone()
      await geo.batchUpdate.batchUpdatePopup.EnterAtNPACard()
      await geo.batchUpdate.batchUpdatePopup.EnterAtTrack()
      await geo.batchUpdate.batchUpdatePopup.ClickAddCheckbox(); // Changed by Abi
      await geo.batchUpdate.batchUpdatePopup.updateScreenInBatchUpdate()
      await geo.batchUpdate.VerifyUpdateSuccessfulAcknowledgeMessage()
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.VerifyAtPatrolZone(0)
      await geo.batchUpdate.VerifyAtSubZone(0)
      await geo.batchUpdate.VerifyAtNPACard(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectAddressFlag_261098', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '261098', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      // Base address merge
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.clickMergeAddressButton()
      await geo.addressSearch.mergeAddressPopup.EnterAtMergeToAddress(0)
      await geo.addressSearch.mergeAddressPopup.ClickMergeButton()
      await geo.addressSearch.mergeAddressPopup.VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime()
      await geo.addressSearch.mergeAddressPopup.VerifyMergeSuccessfulAcknowledge()
      await geo.addressSearch.mergeAddressPopup.verifyMergeFromAddressWillNotInactivatedAcknowledge()
      // Address with apartment merge with Another
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.clickMergeAddressButton()
      await geo.addressSearch.mergeAddressPopup.EnterAtMergeToAddress(1)
      await geo.addressSearch.mergeAddressPopup.ClickMergeButton()
      await geo.addressSearch.mergeAddressPopup.VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime()
      await geo.addressSearch.mergeAddressPopup.VerifyMergeSuccessfulAcknowledge()
      // Address with apartment merge with Another Apartment of same address
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress2()
      await geo.addressSearch.clickMergeAddressButton()
      await geo.addressSearch.mergeAddressPopup.EnterAtMergeToAddress(2)
      await geo.addressSearch.mergeAddressPopup.ClickMergeButton()
      await geo.addressSearch.mergeAddressPopup.VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime()
      await geo.addressSearch.mergeAddressPopup.VerifyMergeSuccessfulAcknowledge()
      // Intersection with Intersection
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ClickClearButton()
      await geo.addressSearch.enterAtAddress3()
      //		geo.switchToAddressIntersectionHelpWindow();
      //		geo.addressIntersectionHelpWindow.selectGridRow(1);
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.clickMergeAddressButton()
      await geo.addressSearch.mergeAddressPopup.EnterAtMergeToAddress(3)
      await geo.addressSearch.mergeAddressPopup.ClickMergeButton()
      await geo.addressSearch.mergeAddressPopup.VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime()
      await geo.addressSearch.mergeAddressPopup.VerifyMergeSuccessfulAcknowledge()
      await geo.module.switchToAddressSearchScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectAddressFlag_257118', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257118', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      // Search scenario
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress()
      await geo.addressFlag.VerifyAddressInfoButtonYellowColor()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddressInTheGrid()
      await geo.addressFlag.reloadAddressFlagPScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.enterAtRemarks()
      await geo.addressFlag.selectAtDisplayConditions()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddressInTheGrid()
      await geo.addressFlag.reloadAddressFlagPScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.enterAtActiveAsDate()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddressInTheGrid()
      await geo.addressFlag.reloadAddressFlagPScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.enterAtInactiveAfter()
      await geo.addressFlag.clickInactiveCheckBox()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddressInTheGrid()
      await geo.addressFlag.VerifyAtAddressRowAppearGreyColor(0)
      await geo.addressFlag.ClickAtAddress()
      // Print
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.ClickPrintButton()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      // Deleting in active Record
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.DeleteAddressFlag()
      //	geo.addressFlagEntry.verifyNoRecordsFoundAcknowledgeMessage();
      // Creating new
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlag.EnterAtAddress1()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDateAsCurrentDate()
      await geo.addressFlagEntry.selectIsCriticalCheckBox()
      await geo.addressFlagEntry.SelectText()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.switchToNarrativeTextFrame()
      await geo.addressFlagEntry.enterAtRemarks()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.reloadAddressFlagPScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress1()
      await geo.addressFlag.VerifyAddressInfoButtonRedColor()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddress1InTheGrid(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectAddressFlag_259725', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '259725', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.enterActiveDateAsPreviousDate()
      await geo.addressFlagEntry.clickTextMgmtIcon()
      await settings.module.switchToTextEntry()
      // settings.textEntry.clickSubjectTab();
      // available only in 14.87
      await settings.textEntry.enterAtTextName()
      // settings.switchToTextEntry();
      await settings.textEntry.saveScreen()
      await settings.module.switchToTextEntry()
      await settings.textEntry.verifyAdditionSuccessfulStatusMessage()
      await settings.textEntry.close()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SaveScreen()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddressInTheGrid()
      await geo.addressFlag.ClickAtAddress()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated by Mithun
    });
  });

});

test.describe('2020DefectCommonNames', () => {
  test('2020DefectCommonNames_255124', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255124', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.selectAtPhoneType1()
      await geo.addressSearch.addressSearchContactTab.EnterPhoneNo1AtPhone()
      await geo.addressSearch.addressSearchContactTab.SaveInternalTab()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.enterAtAddress()
      await geo.contactSearch.ClickSearchButton()
      await geo.module.switchToContactSearch(); // added
      await geo.contactSearch.verifyAtPhoneNoAsActive()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.clickInactivePhone1()
      await geo.addressSearch.addressSearchContactTab.SaveInternalTab()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.contactSearch.reloadContactSearch()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.enterAtAddress()
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickSearchButton()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.verifyAtPhoneNoAsInactive()
    });
  });

  test('2020DefectCommonNames_255125', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '255125', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.VerifySearchAddNewDisabled()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.SelectAtNameRelation1()
      await geo.contactEntryScreen.verifyNameRelationHavingMultipleValues()
      await geo.contactEntryScreen.verifyNameTypeCheckboxDefaultSelectedForPerson()
      await geo.contactEntryScreen.ClickBusinessRadioButton()
      await geo.contactEntryScreen.verifyLastNameAsEditable()
      await geo.contactEntryScreen.verifyFirstNameAsUnEditable()
      await geo.contactEntryScreen.EnterAtLastName1(); // updated
      await names.module.switchToNameSearchHelpWindow(); // added
      await names.nameSearchHelpWindow.CloseScreen(); // added
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.EnterAtAddress()
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SaveCloseScreen()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.ClickRefreshButton()
      await geo.geoContactNewEntry.VerifyAtLastName1(0)
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.SelectAtNameRelation1()
      await geo.contactEntryScreen.verifyNameRelationHavingMultipleValues()
      await geo.contactEntryScreen.verifyNameTypeCheckboxDefaultSelectedForPerson()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.SelectAtNameRow()
      //		names.nameSearchHelpWindow.verifyDoYouWantToCopyNameFromOtherJurisPopup();
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.clearAddress()
      await geo.contactEntryScreen.EnterAtAddress()
      // geo.switchToContactEntry();
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SelectAtPhoneType2()
      await geo.contactEntryScreen.EnterAtPhoneNumber2()
      await geo.contactEntryScreen.SaveCloseScreen()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.ClickRefreshButton()
      await geo.geoContactNewEntry.VerifyAtLastName1(0)
      await geo.geoContactNewEntry.VerifyAtName(1)
      await geo.geoContactNewEntry.closeWindow()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.enterAtAddress()
      await geo.contactSearch.ClickSearchButton()
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.verifyGridRowLastName1(0)
      await geo.contactSearch.verifyGridRowLastName(1)
    });
  });

  test('2020DefectCommonNames_257122', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257122', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.clickAddCommonNameToGeo()
      await geo.module.switchToStreetEntry()
      await geo.fastGeo.enterAtPremiseNo()
      await geo.fastGeo.enterAtStreetName()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.clickSaveAndUseAddress()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress1()
      await geo.module.switchToAddressSearchScreen()
    });
  });

  test('2020DefectCommonNames_257123', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '257123', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyConfirmGeoFly()
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.enterAtCommonName()
      await geo.fastGeo.clickTrackingLooUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDescription(0)
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.selectAtPremiseType()
      await geo.fastGeo.clickPatrolZoneLooUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDescription(1)
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.clickNPACardLooUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDescription(2)
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.clickCivilDistrictLooUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDescription(3)
      await geo.module.switchToGeoOnFly()
      await geo.fastGeo.selectAtVotingDistrict()
      await geo.fastGeo.clickSaveAndUseAddress()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.VerifyAtAddress1();   //Added By Kiran  For ExtraVerification
      await geo.addressSearch.VerifyAtCommonName();  //Added By Kiran  For ExtraVerification
      await geo.addressSearch.verifyAtAddressBubble(); //Added By Kiran  For ExtraVerification
    });
  });

  test('2020DefectCommonNames_256806', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '256806', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyConfirmGeoFly()
      await geo.module.switchToStreetEntry()
      await geo.fastGeo.enterAtZipCode()
      await geo.fastGeo.enterAtCommonName()
      await geo.fastGeo.enterTrackingAsTB()
      await geo.fastGeo.selectPremiseType()
      await geo.fastGeo.enterPatrolZoneAsPA()
      await geo.fastGeo.enterSubZoneAsSA()
      await geo.fastGeo.enterAtNPACard()
      await geo.fastGeo.enterAtCivilDistrict()
      await geo.fastGeo.selectVotingDistrictAsVD()
      await geo.fastGeo.clickSaveAndUseAddress()
      // objectIdentification.windowHandle.switchToMainWindow()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName(); //Added By Kiran  For ExtraVerification
      //Reworked by:-Abi  , Date :- 29/10/2021  , Module:- Geo.
    });
  });

  test('2020DefectCommonNames_260149', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '260149', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('ZIP Code')
      await geo.module.switchToZipCode()
      await geo.zipCode.clickAddNewButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtZipCode()
      await settings.sharedCodes.selectAtState()
      await settings.sharedCodes.enterAtCity()
      await settings.sharedCodes.selectLocationType()
      await settings.sharedCodes.enterAtLocationName()
      await settings.sharedCodes.saveScreen()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await geo.module.switchToZipCode()
      await geo.zipCode.enterAtZipCode()
      await geo.zipCode.clickSearchButton()
      await geo.zipCode.verifyAtZipcodeInGrid(0)
      await geo.zipCode.clearZipCode()
      await geo.zipCode.enterAtZipCode1()
      await geo.zipCode.clickSearchButton()
      await geo.zipCode.verifyAtZipCodeInGrid1()
      await geo.zipCode.clearZipCode()
      await geo.zipCode.clickAddNewButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtZipCode2()
      await settings.sharedCodes.selectAtState()
      await settings.sharedCodes.enterAtCity()
      await settings.sharedCodes.selectLocationType()
      await settings.sharedCodes.enterAtLocationName()
      await settings.sharedCodes.clickInactiveCheckBox()
      await settings.sharedCodes.saveScreen()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await geo.module.switchToZipCode()
      await geo.zipCode.enterAtZipCode2()
      await geo.zipCode.clickIncludeInactiveCheckBox()
      await geo.zipCode.clickSearchButton()
      await geo.zipCode.verifyAtZipcodeInGrid2(2)
      await geo.zipCode.verifyRowcolorAsgreyByCity()
      await geo.module.switchToZipCode()
      await geo.zipCode.clickAddNewButton()
      await settings.module.switchToSharedCodes()
      await geo.zipCode.enterAtZipCode1()
      await settings.sharedCodes.selectAtState()
      await settings.sharedCodes.enterAtCity()
      await settings.sharedCodes.selectLocationType()
      await settings.sharedCodes.enterAtLocationName()
      await settings.sharedCodes.clickSave()
      await settings.sharedCodes.verifyInvalidZipCodeAckwMsg()
      await settings.module.switchToSharedCodes()
      //@Test(groups = { '2020DefectCommonNames' }, priority = 2) // Q4 Sprint 5 Automated by Mahesha
    });
  });

  test('2020DefectCommonNames_260806', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '260806', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtDescriptionInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.enterAtLayerDescription()
      await settings.sharedCodes.selectAtLayerIcon()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.enterAtCodeValueSearch()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyAtCodeValueinGrid(0)
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickAddnewButton()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerType()
      await geo.mapLayerEntry.selectAtLayerName(0)
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.SaveNCloseScreen()
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectAtLayerName(0)
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyAtNameInGrid(0)
      await geo.mapLayerSearch.selectGridRowByLayerName(0)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectInavtiveCheckBox()
      await geo.mapLayerEntry.verifyInactiveDateAsCurrentDate()
      await geo.mapLayerEntry.SaveNCloseScreen()
      await geo.mapLayerSearch.verifyNoRecordsFoundAck()
      await loaderPage.navigateToScreen('Map Layer Search')
      await loaderPage.ReLoadScreen('Map Layer Search')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectAtLayerName(1)
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyNoRecordsFoundAck()
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickIncludeInactiveCheckBox()
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyAtNameInGrid(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectCommonNames_250423', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '250423', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.enterAtAddress()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.EnterAtCommonName()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.enterAtCommonNameUsingSubstring()
      await geo.commonNames.verifyAddressBubbleInfoIconDisplayed()
      await geo.commonNames.checkTheSoundAlikeCheckBox()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.enterAtZipCode()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.enterAtAddress()
      await geo.commonNames.enterAtZipCode()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.enterAtCommonName1()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      await geo.commonNames.enterAtCommonName2()
      await geo.commonNames.clearZipCode()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.verifyAtCommonName2(0)
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtAddress1()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtCommonName3()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.verifyDoYouWantToUpdateThisAsPrimaryCommonName()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtCommonName4()
      await geo.commonNamesEntry.EnterAtSortOrder1()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.SaveAndClose()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.enterAtCommonName3()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.closeWindow()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.verifyAtCommonName3(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectCommonNames_256802', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '256802', async () => {
      //	login.loginScreen.Logon();
      //		//login.loginScreen.loginToFireInNewTab();
      //		loader.navigateToModule('Geo');
      //		loader.navigateToScreen('Street Search');
      //		geo.switchToStreetSearchScreen();
      //		geo.streetSearch.enterAtStreetName();
      //		geo.streetSearch.clickSearchButton();
      //		geo.streetSearch.SelectAtStreetNameFromGrid();
      //		geo.switchToAddressIntersection();
      //		geo.addressIntersection.EnterAtOddNumber();
      //		geo.addressIntersection.EnterAtOddTo();
      //		geo.addressIntersection.SelectAsOdd();
      //		geo.addressIntersection.clickAddButton();
      //		geo.addressIntersection.SaveScreen();//method changed by Kiran from Save&close to Save
      //		geo.addressIntersection.verifyAdditionSuccessfulStatusMessage(); //step added by Kiran
      //		geo.addressIntersection.saveNCloseScreen();
      //		objectIdentification.windowHandle.switchToMainWindow();
      //		geo.switchToStreetSearchScreen();
      //		geo.streetSearch.enterAtStreetName();
      //		geo.streetSearch.clickSearchButton();
      //		geo.streetSearch.SelectManageApartment();
      //		geo.switchToApartment();
      //		geo.apartment.clickAddNewButton();
      //		geo.switchToApartmentEntry();
      //		geo.apartmentEntry.EnterAtPremise();
      //		geo.apartmentEntry.EnterAtApartmentFrom();
      //		//geo.apartmentEntry.EnterAtApartmentTo();
      //		geo.apartmentEntry.ClickAddButton(); // added
      //		geo.apartmentEntry.SaveScreen(); // added by kiran
      //		geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage();
      //		geo.apartmentEntry.SaveNClose();
      //		geo.switchToApartment(); // added
      //		geo.apartment.CloseScreen(); // added
      //		loader.navigateToScreen('Common Names');
      //		geo.switchToCommonNamesScreen();
      //		geo.commonNames.ClickAddNew();
      //		geo.switchToCommonNamesEntry();
      //		geo.commonNamesEntry.EnterAtStreetDetails();
      //		geo.switchToApartmentSearchHelpWindow();
      //		geo.apartmentHelpWindow.clickUseBaseAddressButton();
      //		geo.switchToCommonNamesEntry();
      //		geo.commonNamesEntry.EnterAtCommonName();
      //		geo.commonNamesEntry.ClickAddButton();
      //		geo.commonNamesEntry.verifyAtCommonNameInGrid();
      //		geo.commonNamesEntry.SaveScreen();
      //		geo.commonNamesEntry.verifyAtCommonNameInGrid();
      //		geo.commonNamesEntry.SaveAndClose();
      //		objectIdentification.windowHandle.switchToMainWindow();
      //		Playback.threadWait();
      //		Playback.threadWait();
      //		Playback.threadWait();
      //		loader.logout();
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.EnterAtCommonName()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickSearch()
      await geo.commonNames.VerifyAtCommonName(0)
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

});

test.describe('2021DefectTestCases', () => {
  test('2021DefectTestCases_275941', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '275941', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.clickMergeAddressButton()
      await geo.addressSearch.mergeAddressPopup.clickGetCountButton()
      await geo.addressSearch.mergeAddressPopup.VerifyAtRecordCount()
      await geo.addressSearch.mergeAddressPopup.EnterAtMergeToAddress(0)
      await geo.addressSearch.mergeAddressPopup.ClickMergeButton()
      await geo.addressSearch.mergeAddressPopup.VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime()
      await geo.addressSearch.mergeAddressPopup.VerifyMergeSuccessfulAcknowledge()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.mergeAddressPopup.VerifyAddressInactiveAcknowledge()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.verifyAtAddressBubble()
    });
  });

});

test.describe('SysParamter504', () => {
  test('SysParamter504_275255', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '275255', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter541AsTrue()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.enterAtApartment()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.module.switchToAddressSearchScreen()
      //TestCase ID â€“ 275256
    });
  });

  test('SysParamter504_275256', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '275256', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter541AsFalse()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.verifyAtStreetName()
      await geo.realAddressHelpWindow.close()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.clearAddress()
      await geo.addressSearch.enterAtAddress1()
      await geo.module.switchToApartmentSearchHelpWindow()
      await geo.apartmentHelpWindow.closeWindow()
      await geo.module.switchToAddressSearchScreen()
      //TestCase ID â€“ 275257
    });
  });

  test('SysParamter504_275257', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '275257', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter541AsFalse()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.SelectCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.module.switchToAddressSearchScreen()
      // Reworked by:-Abi , Date :-11/15/2021 , Module:-Geo .
      //@Test(groups = { 'GeoFunctional3' })
    });
  });

  test('SysParamter504_271623', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '271623', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter504AsVerifyApartment()
      await settings.sysParameter.setSystemparameter541AsTrue()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.selectAtJuris()
      await geo.streetEntry.selectAtPrefix()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.saveNClose()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.selectAtJuris()
      await geo.streetSearch.EnterAtPrefix()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.enterAtZipcode()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectAtStreetNameFromGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseEven()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseEvenInGrid(0)
      await geo.addressIntersection.saveNCloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.selectAtJuris()
      await geo.streetSearch.EnterAtPrefix()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.selectgridCheckBoxByInterSteetName()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.apartmentEntry.SaveNClose()
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtAddress()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(0)
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtCommonName1()
      await geo.commonNamesEntry.EnterAtSortOrder1()
      await geo.commonNamesEntry.ClickReplaceCheckBox()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(0)
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.SaveAndClose()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToApartmentHelpWindow()
      await geo.apartmentHelpWindow.clickUseBaseAddressButton()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress1()
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.SelectCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyDetailsTabIsDisplayed()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated by:-Dinesh , Date :-16-12-2021 , Quarter:-4 , Sprint:-6 ,
      // Module:-Geo . //Modified and Run and Analysed
    });
  });

});

test.describe('2022Q4Enhancement', () => {
  test('2022Q4Enhancement_282063', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '282063', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifySpecialCharactersNotAllowed()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.streetEntry.DeleteRowFromGrid()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.ClickResetButton()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid(0)
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.saveNClose()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectAtStreetNameFromGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.enterAtPremiseEven()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.SelectPatrolZone()
      await geo.addressIntersection.SelectSubZone()
      await geo.addressIntersection.enterAtNPACard()
      await geo.addressIntersection.EnterGeoCordsX()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.enterAtCensusTract()
      await geo.addressIntersection.SelectVotingDistrict()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseOddInGrid(0)
      // Automated by:-Abinaya , Date :-12/10/2021 , Quarter:-4 , Sprint:-5 ,
      // Module:-Geo .
    });
  });

  test('2022Q4Enhancement_PremiseAlphaNum', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'PremiseAlphaNum', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.selectRowByAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.verifyPremiseOddFromAndToIsDisabled()
      await geo.addressIntersection.verifyPremiseEvenFromAndToIsDisabled()
      await geo.addressIntersection.verifyOddOrEvenIsDisabled()
      await geo.addressIntersection.verifyOddEvenPremiseComboBoxAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyAtPremiseOddInGrid(0)
      await geo.addressIntersection.verifyAtEvenOddInGrid(0)
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage('EnterPremiseUsingAlphaNumericValues')
      await geo.addressIntersection.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.module.switchToAddressSearchScreen()
      // Automated by:-Abinaya , Date :-11/04/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

  test('2022Q4Enhancement_AddApartmentForIntersection', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'AddApartmentForIntersection', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectAtStreetNameFromGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.VerifyOddPremiseAdded(0)
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.VerifyOddPremiseAdded(0)
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.ClickIntersectionCheckBox()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickManageApartmentUsingStreetName()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.VerifyPermiseUneditable()
      await geo.apartmentEntry.EnterAtApartmentFrom()
      //geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.apartmentEntry.SaveScreen()
      await geo.apartmentEntry.VerifyAtApartmentFromInGrid(0)
      await geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.EnterAtStreetNameWithSlashCharacter()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.VerifyAtIntersectionAddressByStreetName()
      // Automated by:-Abinaya , Date :-11/07/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
      //@Test(groups = '2022Q4Enhancement')
    });
  });

  test('2022Q4Enhancement_AddressflagOfPoliceNotInFire', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'AddressflagOfPoliceNotInFire', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.ClickToFlagTab()
      await geo.addressSearch.addressSearchFlagsTab.ClickAddFlag()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDate()
      await geo.addressFlagEntry.switchToNarrativeTextFrame()
      await geo.addressFlagEntry.enterAtRemarks()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.logout()
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.ClickToFlagTab()
      await geo.addressSearch.addressSearchFlagsTab.VerifyFlagsListIsEmpty()
      await geo.addressSearch.addressSearchFlagsTab.ClickAddFlag()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDate()
      await geo.addressFlagEntry.switchToNarrativeTextFrame()
      await geo.addressFlagEntry.enterAtRemarks1()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.logoutFireRMS()
      browser.SwitchToLoginScreen('http://10.103.1.68/law/login.aspx')
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtAddressBubbleDisplayed()
      await geo.addressSearch.ClickToFlagTab()
      await geo.addressSearch.addressSearchFlagsTab.verifyAtFlagGridRemarks()
      // Automated by:-Abinaya , Date :-11/07/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

  test('2022Q4Enhancement_VerifyContactInNameEntry', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'VerifyContactInNameEntry', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactDetailEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName()
      await geo.module.switchToContactDetailEntry()
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SaveScreen()
      await geo.contactEntryScreen.VerifyAdditionSuccessfulMessage()
      await geo.contactEntryScreen.clickNameInfoIcon()
      await names.module.switchToNameEntry()
      await names.nameEntry.VerifyAtPhoneNumber()
    });
  });

  test('2022Q4Enhancement_AddressFlagSharedBox', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'AddressFlagSharedBox', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.VerifyOddValuesExist()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDateAsCurrentDate()
      await geo.addressFlagEntry.selectSharedCheckBox()
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.addressFlagEntry.CloseScreen()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddress1InTheGrid(0)
      await geo.module.switchToAddressFlagPSearch()
      await loaderPage.logout()
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flags')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.VerifyOddValuesExist()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDateAsCurrentDate()
      await geo.addressFlagEntry.selectSharedCheckBox()
      await geo.addressFlagEntry.SaveScreen()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.EnterAtAddress()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.VerifyAtAddress1InTheGrid(0)
      await geo.module.switchToAddressFlagPSearch()
      // Automated by:-Abinaya , Date :-11/08/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

  test('2022Q4Enhancement_ShowUpdatesOlderThan', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'ShowUpdatesOlderThan', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.enterAtShowUpdatesOlderThanDays()
      await geo.addressFlag.ClickSearchButton()
      await geo.addressFlag.verifyLastUpdatedDateOlderThan()
      // Automated by:-Abinaya , Date :-11/08/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

  test('2022Q4Enhancement_ZipcodeBatchUpdate', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'ZipcodeBatchUpdate', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Batch Update(P)')
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.ClickSearchButton()
      await geo.batchUpdate.SelectMultipleCheckboxesByStreetNameInGrid()
      await geo.batchUpdate.ClickUpdateButton()
      await geo.batchUpdate.verifySelectJurisAckMessageNotAppeared();//updated based on Id 68387
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.batchUpdatePopup.clickZipCodelookupIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.enterAtCode()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.batchUpdatePopup.ClickUpdateButtonInPopup()
      await geo.batchUpdate.VerifyUpdateSuccessfulAcknowledgeMessage()
      await geo.module.switchToBatchUpdate()
      await geo.batchUpdate.VerifyAtZipcodeBasaedOnStreetNames()
      //Update By : Kiran Testcase ID : 42119  Date:10/23/2024
    });
  });

});

test.describe('2022DefectTestCasesGeo', () => {
  test('2022DefectTestCasesGeo_278223', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '278223', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.verifyAtPremiseEven(0)
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      // geo.streetEntry.enterAtStreetType();
      // geo.streetEntry.enterAtZipCode();
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.VerifyAtStreetType(0)
      await geo.streetSearch.selectRowByAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseOddNumber()
      await geo.addressIntersection.SelectAsOdd()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtZipCodeGrid(0)
      await geo.addressIntersection.enterAtPremiseEven()
      await geo.addressIntersection.selectAsEven()
      await geo.addressIntersection.enterAtZipCode1()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.VerifyAtStreetName()
      await geo.streetSearch.verifyAtPremiseOdd(0)
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToRealAddressWindow()
      await geo.realAddressHelpWindow.verifyAtStreetName()
      await geo.realAddressHelpWindow.selectAtZipcode()
      await geo.module.switchToPremiseHelpWindow()
      await geo.premiseHelpWindow.enterValidPremise()
      await geo.premiseHelpWindow.clickUseThisPremise()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtCSZ()
    });
  });

});

test.describe('GeoEntryScreen', () => {
  test('GeoEntryScreen_AFSmoke', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'AFSmoke', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await popupPage.acknowledge.okIfWindowExist('After Click Addnew')
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.enterActiveDateAsPreviousDate();//
      await geo.addressFlagEntry.clickTextMgmtIcon()
      await settings.module.switchToTextEntry()
      await settings.textEntry.enterTextName()
      await settings.textEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await settings.module.switchToTextEntry()
      await settings.textEntry.verifyAdditionSuccessfulStatusMessage()
      await settings.textEntry.close()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SaveScreen(); //updated by ranjith
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
    });
  });

  test('GeoEntryScreen_SE1Smoke', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'SE1Smoke', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('After Click Addnew')
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.verifyAtStreetNameInGrid();//updated by ranjith//method name
      await geo.streetEntry.Save()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.VerifyAdditionSuccessfulStatusMessage()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.selectRowByAtStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtPremiseOddFromAndTo()
      await geo.addressIntersection.enterAtPremiseEvenFromAndTo()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText('Street Search', 'Close Tab')
      // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText('My Home', 'Close Tab')
      // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText('My DashBoard', 'Close Tab')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToAddressSearchHelpWindow()
      // objectIdentification.smokeTest.clickOnEntryScreensTabsWithCheckWindowOpens('Address Search');//updated by ranjith
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.enterAtStreetType()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.ClickBatchUpdateLink()
      await geo.streetSearch.enterAtZipcode()
      await geo.streetSearch.ClickPopupUpdateButton()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.VerifyAtZipcodeUpdateAllRecords()
      await geo.streetSearch.SelectManageIntersection()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.tabOutZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
    });
  });

  test('GeoEntryScreen_SE2Smoke', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'SE2Smoke', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectManageApartment()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClicking Add New')
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise();//updated by ranjith
      await geo.apartmentEntry.EnterAtApartment()
      //geo.apartmentEntry.EnterAtApartmentTo();
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.verifyAtApartmentInGrid();//updated by ranjith
      await geo.apartmentEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.apartmentEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.apartmentEntry.CloseScreen()
      await geo.module.switchToApartment()
      await geo.apartment.VerifyPremiseViewed(0)
      await geo.apartment.CloseScreen()
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.SelectManageStreet()
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.EnterAtAltStreet()
      await geo.streetUpdate.ClickAddButton()
      await geo.streetUpdate.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.verifyAdditionSuccessfulStatusMessage()
    });
  });

  test('GeoEntryScreen_CNSmoke', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'CNSmoke', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await popupPage.acknowledge.okIfWindowExist('Add New')
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtAddress()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.verifyAtCommonNameInGrid();//updated by ranjith//need to update
      await geo.commonNamesEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.verifyUpdateSuccessfulStatusMessage()
    });
  });

  test('GeoEntryScreen_CESmoke', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'CESmoke', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await popupPage.acknowledge.okIfWindowExist('Add New')
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      // geo.contactEntryScreen.ClickPrimaryContactCheckbox();
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtPhoneType1();//updated by ranjith
      await geo.contactEntryScreen.EnterAtPhoneNumber1();//updated by ranjith
      await geo.contactEntryScreen.SelectAtPhoneType2();//updated by ranjith
      await geo.contactEntryScreen.EnterAtPhoneNumber2();//updated by ranjith
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SaveScreen();//need to check
      //objectIdentification.manualIdentify.saveTheScreenWithConfirm();//updated by ranjith
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.VerifyAdditionSuccessfulMessage()
      await geo.contactEntryScreen.CloseScreen()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.ClickRefreshButton()
      await geo.geoContactNewEntry.VerifyAtName(0)
      //		geo.geoContactNewEntry.save();
      // objectIdentification.manualIdentify.saveTheScreenWithConfirm()
      await popupPage.acknowledge.okIfWindowExist('After Save')
    });
  });

  test('GeoEntryScreen_MLEntry', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'MLEntry', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickAddnewButton()
      await popupPage.acknowledge.okIfWindowExist('Add New')
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerType()
      await geo.mapLayerEntry.selectAtLayerName(0)
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToMapLayerEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Map Layer Entry')
    });
  });

  test('GeoEntryScreen_ORIEntry', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'ORIEntry', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('ORI File')
      // objectIdentification.windowHandle.switchToMainWindowScreenTab('frmORISrch')
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('After Add New')
      // objectIdentification.windowHandle.switchToWindow('ORI File Entry')
      // objectIdentification.randomIdentify.selectDropDownOption(state)
      // ori.sendKeys(Randomized.randomAlphanumeric(6))
      // objectIdentification.manualIdentify.saveTheScreenWithConfirm()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      // objectIdentification.windowHandle.switchToWindow('ORI File Entry')
      // verify.ExpectedPropertyValueIsEqual('1002 - Addition Successful', status.getText())
    });
  });

  test('GeoEntryScreen_ZIPEntry', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'ZIPEntry', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('ZIP Code')
      await geo.module.switchToZipCode()
      await geo.zipCode.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('Add New')
      await geo.module.switchToZipCode()
      await geo.module.switchToZipCodeEntry()
      await geo.zipCodeEntry.enterAtZipCodeEdit()
      await geo.zipCodeEntry.selectAtStateComboBox();//updated by ranjith
      await geo.zipCodeEntry.enterAtCityEdit()
      await geo.zipCodeEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('After Save')
      await geo.module.switchToZipCodeEntry()
      await geo.zipCodeEntry.verifyAdditionSuccessfulBottomMessage()
    });
  });

});

test.describe('SysParamter79', () => {
  test('SysParamter79_AddressFlagReviewBasedOnSysParam79', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, 'AddressFlagReviewBasedOnSysParam79', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.ClickSystemParameterIcon()
      await settings.module.switchToSystemParamterScreen()
      await settings.sysParameter.enterSysParameter79AsDays()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyRemindersTab()
      await home.myHome.myRemindersTab.ClickAddressFlags_P_Accordion()
      await home.myHome.myRemindersTab.verifyAddressFlagBasedOnDays()
      // Automated by:-Abinaya , Date :-11/08/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Geo .
    });
  });

});

test.describe('Q4GeoDefectTestCases2023', () => {
  test('Q4GeoDefectTestCases2023_18492', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '18492', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.clickToLocationCheckTab()
      await geo.addressSearch.addressSearchLocationCheckTab.clickAddLocationCheck()
      await geo.module.switchToLocationCheckEntry()
      await geo.locationCheckEntry.switchToDetailTab()
      await geo.locationCheckEntry.detailTab.selectAtReason()
      await geo.locationCheckEntry.detailTab.tabOutFromDateAndTime()
      await geo.locationCheckEntry.detailTab.tabOutToDateAndTime()
      await geo.locationCheckEntry.detailTab.enterAtRemarks()
      await geo.module.switchToLocationCheckEntry()
      await geo.locationCheckEntry.saveScreen()
      // objectIdentification.smokeTest.checkAckExist()
      await geo.module.switchToLocationCheckEntry()
      await geo.locationCheckEntry.verifyAdditionSuccessfulMessage()
      await geo.module.switchToLocationCheckEntry()
      //updated by :-Kiran , Date :-11/13/2024  Quarter:-4 Sprint:10 , testcase ID:-42066
      //Automated by  :-Kiran  Date :-10/23/2024 Quarter:-4 Sprint:10 Module:-Geo
    });
  });

  test('Q4GeoDefectTestCases2023_42104', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '42104', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.RightClickInStreetName()
      await geo.streetSearch.selectAtRighClickOptionOfStreet('Manage Intersection')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.EnterAtPremiseNumber(0)
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseNumber(1)
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.EnterAtPremiseNumber(2)
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtIntPremise(0)
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtIntPremise(1)
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtIntPremise(2)
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.clearZipCode()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.verifyAtIntStreetNameInGrid()
      await geo.addressIntersection.VerifyAtPremisesInTheGrid()
      await geo.addressIntersection.verifyAtIntPremiseInGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.verifyAdditionSuccessfulStatusMessage()
      //Automated by  :-Kiran  Date :-10/25/2024  Quarter:-4 Sprint:10 Module:-Geo
    });
  });

  test('Q4GeoDefectTestCases2023_42125', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '42125', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Common Names')
      await geo.module.switchToCommonNamesScreen()
      await geo.commonNames.ClickAddNew()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.enterAtAddress()
      await geo.commonNamesEntry.EnterAtCommonName()
      await geo.commonNamesEntry.EnterAtSortOrder(0)
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(0)
      await geo.commonNamesEntry.EnterAtCommonName1()
      await geo.commonNamesEntry.EnterAtSortOrder(1)
      await geo.commonNamesEntry.ClickReplaceCheckBox()
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(1)
      await geo.commonNamesEntry.enterAtCommonName3()
      await geo.commonNamesEntry.EnterAtSortOrder(2)
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(3)
      await geo.commonNamesEntry.enterAtCommonName4()
      await geo.commonNamesEntry.EnterAtSortOrder(3)
      await geo.commonNamesEntry.ClickAddButton()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(4)
      await geo.commonNamesEntry.SaveScreen()
      await geo.commonNamesEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.module.switchToCommonNamesEntry()
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(0)
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(1)
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(3)
      await geo.commonNamesEntry.VerifyAtCommonNameInGrid(4)
      await geo.commonNamesEntry.SaveAndClose()
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterCommonName(0)
      await geo.module.switchToCommonNameHelp()
      await geo.commonNameHelp.VerifyAtCommonName(3)
      await geo.commonNameHelp.clickAtContainsRadioButton()
      await geo.commonNameHelp.VerifyAtCommonName(0)
      await geo.commonNameHelp.VerifyAtCommonName(1)
      await geo.commonNameHelp.VerifyAtCommonName(3)
      await geo.commonNameHelp.VerifyAtCommonName(4)
      await geo.commonNameHelp.SelectAtCommonName()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.VerifyAtAddress()
      await geo.addressSearch.VerifyAtCommonName()
      //Automated by  :-Kiran  Date :-10/28/2024 Quarter:-4 Sprint:10 Module:-Geo
    });
  });

  test('Q4GeoDefectTestCases2023_47650', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '47650', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.EnterAndSelectAtATypeName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.VerifyAtPhoneNumber1()
      await geo.contactEntryScreen.VerifyAtPhoneNumber2()
      await geo.contactEntryScreen.verifyInactivePhone2checkboxIsChecked()
      await geo.contactEntryScreen.SaveScreen()
      await geo.contactEntryScreen.VerifyAdditionSuccessfulMessage()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.verifyDeleteIconIsEnabled()
      await geo.contactEntryScreen.clickRefreshButton()
      await geo.contactEntryScreen.verifyAtLastName()
      await geo.contactEntryScreen.verifyAtFirstName()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.clickSearchButton()
      await geo.geoContactNewEntry.verifyAltPhoneNoColumnValueAsNull()
      //Automated By: Ranjith Kumar V K
      //Date: 02/19/2025 Q1 Sprint 02 2025
      //Type of testcase: Functional
    });
  });

  test('Q4GeoDefectTestCases2023_55172', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55172', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await geo.contactEntryScreen.ClickSaveButton()
      await geo.contactEntryScreen.verify8EnterMandatoryData()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.ClickSaveButton()
      await geo.contactEntryScreen.verify8EnterMandatoryData()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SelectAtPhoneType2()
      await geo.contactEntryScreen.ClickSaveButton()
      await geo.contactEntryScreen.verify8EnterMandatoryData()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.EnterPhoneNumber2()
      await geo.contactEntryScreen.SaveScreen()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.save()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.ClickReset()
      await geo.addressSearch.addressSearchContactTab.VerifyAtNameInTheGrid(0)
      await geo.module.switchToAddressSearchScreen()
      //Automated By : - chandrasekar.v on 4/21/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4GeoDefectTestCases2023_55945', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55945', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.clickManageIntersectionUsingStreetName()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet1()
      await geo.addressIntersection.enterAtZipCode(1)
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.enterAtInterStreet2()
      await geo.addressIntersection.enterAtZipCode(2)
      await geo.addressIntersection.clickAddButton()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.verifyAtIntStreetNameInGrid()
      await geo.addressIntersection.verifyAtIntStreetNameInGrid(1)
      await geo.addressIntersection.verifyAtIntStreetNameInGrid(2)
      await geo.addressIntersection.CloseScreen()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToAddressIntersectionHelpWindow()
      await geo.addressIntersectionHelpWindow.verifyAtStreet2ByStreet(1)
      await geo.addressIntersectionHelpWindow.verifyAtStreet2ByStreet(2)
      await geo.addressIntersectionHelpWindow.verifyAtStreet2ByStreet(3)
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress1()
      await geo.addressSearch.verifyAddressButtonActive()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress2()
      await geo.addressSearch.verifyAddressButtonActive()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.addressSearch.ResetAddress()
      await geo.addressSearch.enterAtAddress3()
      await geo.addressSearch.verifyAddressButtonActive()
      await geo.addressSearch.verifyAtAddressBubble()
      await geo.module.switchToAddressSearchScreen()
      //Automated By : - chandrasekar.v on 3/25/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4GeoDefectTestCases2023_55974', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55974', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.EnterAddress('a');//lines added based on TC no  - 55199
      await geo.module.switchToCommonNameHelp()
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await geo.commonNameHelp.SelectCommonName()
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAllTabsAreEnabled();//lines added based on TC no  - 55199
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.clickNameLookUpIcon()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.CloseScreen()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectAtNameInGrid()
      await names.nameSearchHelpWindow.verifyDoYouWantToCopyNameFromOtherJurisPopup()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.verifyErrorCopyingNameDoesNotArise()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.verifyAtFirstName()
      await geo.contactEntryScreen.verifyAtLastName()
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SaveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToContactsTab()
      await geo.addressSearch.addressSearchContactTab.ClickReset()
      await geo.addressSearch.addressSearchContactTab.VerifyAtNameInTheGrid(0)
      await geo.module.switchToAddressSearchScreen()
      //Automated By : - chandrasekar.v on 3/25/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4GeoDefectTestCases2023_55048', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55048', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAddressButtonIsDisplayed()
      await geo.addressSearch.verifyAddressButtonActive()
      await geo.addressSearch.ClickAddressButton()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.switchToPoliceTab()
      await geo.addressIntersection2040.policeTab.verifyAtJurisFieldDoesNotContainNullValue()
      //Automated By : - chandrasekar.v on 3/25/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('GeoFunctional4', () => {
  test('GeoFunctional4_50824', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '50824', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.ClickAddressButton()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.switchToFireTab()
      await geo.addressIntersection2040.fireTab.ClickTableRowInGrid(0)
      await geo.addressIntersection2040.fireTab.EnterAtRANo()
      await geo.addressIntersection2040.fireTab.ClickMultijurisAddButton()
      await geo.addressIntersection2040.fireTab.Save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await geo.module.switchToAddressIntersection2040()
      await geo.addressIntersection2040.Save()
      await geo.module.switchToAddressIntersection2040()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By : - chandrasekar.v on 3/25/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q2S4GeoDefectTestCases2025', () => {
  test('Q2S4GeoDefectTestCases2025_55542', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55542', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.enterAtStreetType()
      await geo.streetEntry.enterAtZipCode()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.Save()
      await geo.streetEntry.closeStreetEntry()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.SelectAtStreetNameFromGrid()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtEvenOddNumber()
      await geo.addressIntersection.selectAsBoth()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.addressIntersection.CloseScreen()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.ClickClearFields()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.verifyAtPremiseEven(0)
      await geo.streetSearch.verifyAtPremiseOdd(0)
      await geo.streetSearch.selectgridCheckBoxByInterSteetName()
      await geo.streetSearch.verifyManageApartmentEnabled()
      await geo.streetSearch.VerifyBatchUpdateEnabled()
      await geo.streetSearch.verifyManageIntersectionIsEnabled()
      await geo.streetSearch.verifyManageStreetEnabled()
      await geo.streetSearch.selectgridCheckBoxByInterSteetName()
      await geo.streetSearch.clickManageApartmentUsingStreetName()
      await geo.module.switchToApartment()
      await geo.apartment.clickAddNewButton()
      await geo.module.switchToApartmentEntry()
      await geo.apartmentEntry.EnterAtPremise()
      await geo.apartmentEntry.VerifyPermiseUneditable()
      await geo.apartmentEntry.EnterAtApartment()
      await geo.apartmentEntry.ClickAddButton()
      await geo.apartmentEntry.SaveScreen()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.VerifyStreetNameWithApartment()
      await geo.addressSearch.verifyStreetNameWithPremise()
      await geo.module.switchToAddressSearchScreen()
      //Automated By : - chandrasekar.v on 3/25/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Q2S4GeoDefectTestCases2025_55037', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '55037', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Contact Search')
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation()
      await geo.contactEntryScreen.EnterAndSelectAtATypeName()
      await geo.contactEntryScreen.enterAtLastName()
      await geo.contactEntryScreen.enterAtFirstName()
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SelectAtPhoneType2()
      await geo.contactEntryScreen.EnterAtPhoneNumber2()
      await geo.contactEntryScreen.ClickAddMorePhoneNoButton()
      await geo.contactEntryScreen.SelectPhoneType3AsCell()
      await geo.contactEntryScreen.EnterAtPhoneNumber3()
      await geo.contactEntryScreen.verifyAtPhoneSortOrderOne(1)
      await geo.contactEntryScreen.verifyAtPhoneSortOrderTwo(1)
      await geo.contactEntryScreen.verifyAtPhoneSortOrderThree(1)
      await geo.contactEntryScreen.clickPhoneTypeOneInActiveCheckBox()
      await geo.contactEntryScreen.SaveScreen()
      await geo.contactEntryScreen.verifyAtPhoneSortOrderOne(2)
      await geo.contactEntryScreen.verifyAtPhoneSortOrderTwo(2)
      await geo.contactEntryScreen.verifyAtPhoneSortOrderThree(2)
      await geo.contactEntryScreen.clickDeleteIconOfSortOrderTwo()
      await geo.contactEntryScreen.verifyAtPhoneSortOrderThree(1)
      await geo.contactEntryScreen.CloseScreen()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.save()
      await geo.geoContactNewEntry.closeWindow()
      await geo.module.switchToContactSearch()
      await geo.contactSearch.ClickAddNew()
      await geo.module.switchToGeoContactNewEntry()
      await geo.geoContactNewEntry.EnterAtAddress()
      await geo.geoContactNewEntry.verifyAddNewButtonIsEnabled()
      await geo.geoContactNewEntry.ClickAddNewButton()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.SelectAtNameRelation1()
      await geo.contactEntryScreen.EnterAtLastName1()
      await geo.contactEntryScreen.enterAtFirstName()
      await geo.contactEntryScreen.ClickSaveButton()
      await geo.contactEntryScreen.verify8EnterMandatoryData()
      await geo.module.switchToContactEntry()
      await geo.contactEntryScreen.verifyPhoneTypeLabelIsMandatory()
      await geo.contactEntryScreen.verifyPhoneLabelIsMandatory(1)
      await geo.contactEntryScreen.SelectAtPhoneType1()
      await geo.contactEntryScreen.EnterAtPhoneNumber1()
      await geo.contactEntryScreen.SaveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await geo.module.switchToContactEntry()
      //Automated By :- Manikandan on // Sprint :07  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_63445', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63445', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      //updated based on id 68378
      await geo.addressFlagEntry.clickConvertToLowerCaseIcon()
      // objectIdentification.manualIdentify.verifyJSErrorNotAppear()
      await geo.addressFlagEntry.clickConvertToUpperCaseIcon()
      // objectIdentification.manualIdentify.verifyJSErrorNotAppear()
      //updated based on id 68378
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.EnterActiveDateAsCurrentDate()
      await geo.addressFlagEntry.SaveScreen()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.verifyAdditionSuccessfulStatusMessage()
      await geo.addressFlagEntry.verifyDeleteIconIsDispalyed()
      await geo.addressFlagEntry.DeleteAddressFlag()
      // objectIdentification.windowHandle.verifyWindowNotExists('Address Flag(P)')
      await geo.module.switchToAddressFlagPSearch()
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_63433', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63433', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Flag(F)')
      await geo.module.switchToAddressFlagPSearch()
      await geo.addressFlag.ClickAddNew()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.verifyAddressLabelAsBoldBlack()
      await geo.addressFlagEntry.EnterAtAddress()
      await geo.addressFlagEntry.ClickSaveButton()
      await geo.addressFlagEntry.VerifyDisplayConditionAcknowledgeAddMessage()
      await geo.module.switchToAddressFlagEntry()
      await geo.addressFlagEntry.SelectAtDisplayCondition()
      await geo.addressFlagEntry.ClickSaveButton()
      await geo.addressFlagEntry.VerifyActiveDateAcknowledgeAddMessage()
      await geo.module.switchToAddressFlagEntry()
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_63428', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63428', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.RightClickInStreetName()
      await geo.streetSearch.selectAtRighClickOptionOfStreet('Manage Street')
      await geo.module.switchToStreetUpdate()
      await geo.streetUpdate.enterAtZipCode()
      await geo.streetUpdate.SaveScreen()
      // objectIdentification.smokeTest.checkAckExist()
      await geo.module.switchToStreetUpdate()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_63420', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63420', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.selectgridCheckBoxByInterSteetName()
      await geo.streetSearch.verifyManageStreetEnabled()
      await geo.streetSearch.verifyManageApartmentEnabled()
      await geo.streetSearch.verifyManageIntersectionIsEnabled()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(0)
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(1)
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(2)
      await geo.streetSearch.VerifyBatchUpdateEnabled()
      await geo.streetSearch.ClickSelectAllCheckBox()
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(0)
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(1)
      await geo.streetSearch.verifyAtLinkButtonIsDisabled(2)
      //geo.streetSearch.verifyBatchUpdateIsDisabled();
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_63415', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63415', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAtTabColorByTabName(1,0)
      await geo.addressSearch.verifyAtTabColorByTabName(2,0)
      await geo.addressSearch.verifyAtTabColorByTabName(3,0)
      await geo.addressSearch.verifyAtTabColorByTabName(4,0)
      await geo.addressSearch.verifyAtTabColorByTabName(5,0)
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q2S4GeoDefectTestCases2025_68558', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '68558', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Street Search')
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.clickAddNew()
      await geo.module.switchToStreetEntry()
      await geo.streetEntry.enterAtStreetName()
      await geo.streetEntry.clickAddButton()
      await geo.streetEntry.saveNClose()
      await geo.module.switchToStreetSearchScreen()
      await geo.streetSearch.enterAtStreetName()
      await geo.streetSearch.clickSearchButton()
      await geo.streetSearch.RightClickInStreetName()
      await geo.streetSearch.selectAtRighClickOptionOfStreet('Manage Intersection')
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.VerifyAtStreetName()
      await geo.addressIntersection.enterAtInterStreet()
      await geo.addressIntersection.enterAtZipCode()
      await geo.addressIntersection.clickAddButton()
      await geo.addressIntersection.SaveScreen()
      await geo.module.switchToAddressIntersection()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await geo.addressIntersection.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await geo.module.switchToAddressIntersection()
      await geo.addressIntersection.VerifyAtStreetName()
      //Automated By :- Manikandan on // Sprint :11  Quarter : 4 Year : 2025  // Test Case : Defect
    });
  });

});

test.describe('Q3S7DailyDefectCRM', () => {
  test('Q3S7DailyDefectCRM_64336', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '64336', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.module.switchToPremiseHelpWindow()
      await geo.premiseHelpWindow.clickUseThisPremise()
      await geo.addressIntersection.VerifyAcknowledgeValidPremise()
      //geo.premiseHelpWindow.
      await geo.module.switchToPremiseHelpWindow()
      await geo.premiseHelpWindow.enterValidPremise()
      await geo.premiseHelpWindow.clickUseThisPremise()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.verifyAtAddressBubble()
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q3S7DailyDefectCRM_66063', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '66063', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToNotificationTab()
      await geo.addressSearch.addressSearchNotificationTab.clickSelectCFS()
      await geo.addressSearch.addressSearchNotificationTab.verifyCFSListIsNotEmpty()
      //Automated By :- Manikandan on // Sprint :09  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q3S7DailyDefectCRM_68326', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '68326', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.selectGridRowByLayerName(0)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.verifyAtFromlatlong()
      await geo.mapLayerEntry.verifyAtTolatlong()
      await geo.mapLayerEntry.SaveScreen()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.verifyAtFromlatlong()
      await geo.mapLayerEntry.verifyAtTolatlong()
      await geo.mapLayerEntry.SaveNCloseScreen()
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectGridRowByLayerName(0)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.verifyAtFromlatlong()
      await geo.mapLayerEntry.verifyAtTolatlong()
      //Automated By :- Manikandan on // Sprint :09  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

  test('Q3S7DailyDefectCRM_72201', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '72201', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToNotificationTab()
      await geo.addressSearch.addressSearchNotificationTab.selectAtDistributionList()
      await geo.addressSearch.addressSearchNotificationTab.selectAtReportingPeriod()
      await geo.addressSearch.addressSearchNotificationTab.selectAtNotifyEvent()
      await geo.addressSearch.addressSearchNotificationTab.clickSelectCFS()
      await geo.addressSearch.addressSearchNotificationTab.selectAtCFSInLeftPaneUsingIndex(0)
      await geo.addressSearch.addressSearchNotificationTab.clickCFSCodeAddButton()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSInCFSCodeInRightPane(0)
      await geo.addressSearch.addressSearchNotificationTab.clickSaveAndCloseInCFSCodePopup()
      await geo.addressSearch.addressSearchNotificationTab.verifyFilterPopupWindowClosed()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSFilter(0)
      await geo.addressSearch.addressSearchNotificationTab.clickAdd()
      await geo.addressSearch.addressSearchNotificationTab.verifyPeriodByAtNotifyEventInGrid()
      await geo.addressSearch.addressSearchNotificationTab.internalSave()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.switchToNotificationTab()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await geo.addressSearch.addressSearchNotificationTab.clickSelectCFS()
      await geo.addressSearch.addressSearchNotificationTab.selectAtCFSInLeftPaneUsingIndex(1)
      await geo.addressSearch.addressSearchNotificationTab.clickCFSCodeAddButton()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSInCFSCodeInRightPane(1)
      await geo.addressSearch.addressSearchNotificationTab.selectAtCFSInLeftPaneUsingIndex(2)
      await geo.addressSearch.addressSearchNotificationTab.clickCFSCodeAddButton()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSInCFSCodeInRightPane(2)
      await geo.addressSearch.addressSearchNotificationTab.selectAtCFSInLeftPaneUsingIndex(3)
      await geo.addressSearch.addressSearchNotificationTab.clickCFSCodeAddButton()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSInCFSCodeInRightPane(3)
      await geo.addressSearch.addressSearchNotificationTab.selectAtCFSInLeftPaneUsingIndex(4)
      await geo.addressSearch.addressSearchNotificationTab.clickCFSCodeAddButton()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSInCFSCodeInRightPane(4)
      await geo.addressSearch.addressSearchNotificationTab.clickSaveAndCloseInCFSCodePopup()
      await geo.addressSearch.addressSearchNotificationTab.verifyFilterPopupWindowClosed()
      // objectIdentification.smokeTest.checkAckExist()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToNotificationTab()
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSFilter(1)
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSFilter(2)
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSFilter(3)
      await geo.addressSearch.addressSearchNotificationTab.verifyAtCFSFilter(4)
    });
  });

});

test.describe('SystemParameter512', () => {
  test('SystemParameter512_63440', async ({ loginPage, loaderPage, popupPage, geo, names, home, settings }) => {
    await withTestContext(testData, '63440', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsHEREMap()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('AVL Replay')
      await geo.module.switchToAVLReplay()
      await geo.aVLReplay.verifyCannotReadPropertiesPopuNotAppears()
      await loaderPage.navigateToModule('Setting')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter512AsESRI()
      await settings.module.switchToSystemParamter()
      //Automated By :- Manikandan on // Sprint :08  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

});

