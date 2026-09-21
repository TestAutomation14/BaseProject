# VehicleScripts.java - Complete Active @Test Methods Extraction

**Total Active @Test Methods: 66**
**File: D:\Phoenix2026Workspace\PhoenixBaseTest2026\src\test\java\scripts\VehicleScripts.java**

---

## Test 1: VerifyPreviousAndFutureDateIsAllowedInFlagTabOfVehicleEntry_148438
- **TestID:** 148438
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 77-112

```java
	public void VerifyPreviousAndFutureDateIsAllowedInFlagTabOfVehicleEntry_148438(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "148438");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		Playback.controlReadyThreadWait();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.vehicleTab.enterAtVehicleNumber();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtVehicleNo(0);
		vehicle.vehicleBoatSearch.clickRowAtVehicleNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterEnteredBy();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterComments();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickCommentIconInGrid(0);
		popup.acknowledge.remarksAcknowledgeOk();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickRefresh();
		vehicle.vehicleBoatSearch.verifyFlagIconInSearchscreen(0);
		Playback.controlReadyThreadWait();
		vehicle.vehicleBoatSearch.clickFlagIconInSearchScreen(0);
		vehicle.switchToVehicleFlagDetailsScreen();
		vehicle.vehicleFlagDetailsScreen.verifyCurrentDate(0);
		vehicle.vehicleFlagDetailsScreen.verifyFlagIconInFlagDetailScreen(0);
	}
```

---

## Test 2: createNewBoatEntry_149530
- **TestID:** 149530
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 115-167

```java
	public void createNewBoatEntry_149530(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "149530");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();           //Added line
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSaveButton();
		vehicle.vehicleBoatEntry.verifyRegistrationNumberAcknowledgeMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtPropulsion();
		vehicle.vehicleBoatEntry.enterAtMaterial();
		vehicle.vehicleBoatEntry.enterLength();
		vehicle.vehicleBoatEntry.selectVOD();
		vehicle.vehicleBoatEntry.enterDescription();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterAtBoatHullNo();
		vehicle.vehicleBoatSearch.enterAtYear(); // need to update as year has two fields
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatHullNo(0);
		vehicle.vehicleBoatSearch.verifyAtYear(0);
		vehicle.vehicleBoatSearch.clickRowAtBoatHullNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterPlateExpireMonthAndYear();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStatusAsActive();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectColors();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectPlateType();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterName();
		// Names.NameSearchHelpWindow.selectName();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 3: VerifyPreviousAndFutureDateIsAllowedInFlagTabOfVehicleEntry_147344
- **TestID:** 147344
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 171-215

```java
	public void VerifyPreviousAndFutureDateIsAllowedInFlagTabOfVehicleEntry_147344(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "147344");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStatusAsActive();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterPreviousDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlagInGrid(0);
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterFutureDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag1();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlag1InGrid(1);
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickClearButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyDuplicationAcknowledgeMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag2();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlag2InGrid(2);
		//added verification method below 
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlagsInGrid();//created
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSaveButton();
		vehicle.vehicleBoatEntry.verify1051UpdatedDataExistsAckMsg();//created
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickClearButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();//created
		vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 4: VerifyApplicationIsShowingValidationMessageWhenUsingSameVinNumber_153263
- **TestID:** 153263
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 218-237

```java
	public void VerifyApplicationIsShowingValidationMessageWhenUsingSameVinNumber_153263(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "153263");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.clickSaveButton();
		vehicle.vehicleBoatEntry.verifyVinNoDuplicationAlertMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSaveNCloseButton();
		vehicle.vehicleBoatEntry.verifyVinNoDuplicationAlertMessage();
		vehicle.switchToVehicleBoatEntry();

	}
```

---

## Test 5: VerifyWhenVinIsTransferredToNewPlateAllHistoricalDataRetainedWithOldPlate_153239
- **TestID:** 153239
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 240-281

```java
	public void VerifyWhenVinIsTransferredToNewPlateAllHistoricalDataRetainedWithOldPlate_153239(
			ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "153239");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.vehicleTab.enterAtVinNumber();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.clickRowAtVinNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo1();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtModel();
		vehicle.vehicleBoatEntry.enterAtStyle();
		vehicle.vehicleBoatEntry.selectVOD();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtColor1();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsModified(0);
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.vehicleTab.enterAtVinNumber();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyNoRecordFoundAcknowledgeMessage();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.vehicleTab.clickShowAllCheckBox();
		vehicle.vehicleBoatSearch.vehicleTab.enterAtPlate();
		vehicle.vehicleBoatSearch.vehicleTab.selectAtState();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyUsingAtVinNoRowRed();
		vehicle.vehicleBoatSearch.verifyUsingVinNo1RowBlackColor();

	}
```

---

## Test 6: AddVehilceDetailtoaNameinVehicleEntryandVerifyActivityAppearsinVehicleTabNameEntryScreen_163444
- **TestID:** 163444
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 285-342

```java
	public void AddVehilceDetailtoaNameinVehicleEntryandVerifyActivityAppearsinVehicleTabNameEntryScreen_163444(
			ITestContext testContext) {

		// Playback.testContext.setAttribute("testID", "147339");
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "163444");
		// Playback.testContext=testContext;
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();

		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();

		// vehicle.vehicleBoatSearch.enterAtPlate();
		// Test context for out method
//		vehicle.vehicleBoatSearch.getPlateID();
//		vehicle.vehicleBoatSearch.enterPlate(Playback.testContext.getAttribute("plateID").toString());

		// Enter test data by other moduleMethod
//		Playback.threadWait();
//		geo.streetEntry.enterAtStreetName();

		// For assigning another test ID to get the another test case data
		// Playback.testContext.setAttribute("testID", "147344");
		vehicle.vehicleBoatSearch.enterAtPlate();
		vehicle.vehicleBoatSearch.selectAtState();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.clickRowAtVinNo();

		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectPlateType();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtNameActivity();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsModified(0);
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickClearButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAtNameinGrid();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickNameInfoIcon();
		names.switchToNameEntry();
		names.nameEntry.switchToVehicleTab();
		names.nameEntry.nameEntryVehicleTab.SelectAtActivity();
		names.nameEntry.nameEntryVehicleTab.VerifyAtActivityInGrid(0);

//		vehicle.vehicleBoatEntry.clickFlagsTab();
//		vehicle.vehicleBoatEntry.clickAttachmentsTab();
//		vehicle.vehicleBoatEntry.switchToAttachmentsTab();
//		vehicle.vehicleBoatEntry.vehicleBoatEntryAttachmentsTab.clickRefershButton();
//		vehicle.switchToVehicleBoatEntry();
//		vehicle.vehicleBoatEntry.clickSaveButton();
//		popup.acknowledge.ok();

	}
```

---

## Test 7: CreateNewVehicleEntryWithInsuranceDetails_163451
- **TestID:** 163451
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 346-386

```java
	public void CreateNewVehicleEntryWithInsuranceDetails_163451(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "163451");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSaveButton();
		vehicle.vehicleBoatEntry.verify9154EnterPlateNoOrVINNoAckMsg();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.enterYearAsCurrentYear();
		vehicle.vehicleBoatEntry.selectMake();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.selectModel();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.selectStyle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.selectInsuranceCompany();
		vehicle.vehicleBoatEntry.enterInsurancePoliceNumber();
		vehicle.vehicleBoatEntry.enterDescription();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectColors();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtColor1();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterName();
		// Names.NameSearchHelpWindow.selectName();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectNameActivity();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 8: VerifyPlateTransferLogic_251105
- **TestID:** 251105
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 390-442

```java
	public void VerifyPlateTransferLogic_251105(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "251105");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.enterAtPlate();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.clickRowAtVehicleNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndState1(); // need to change
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtStatus();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsDisplayed();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsTransfer(0); // added by Abi
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateNoIsNull();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectNameActivity();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
//		objectIdentification.windowHandle.switchToMainWindow();
//		loader.navigateToModule("Vehicle");
//		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickVehicleTab();
		vehicle.vehicleBoatSearch.vehicleTab.clickShowAllCheckBox();
		//vehicle.vehicleBoatSearch.vehicleTab.enterAtPlate();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyUsingAtVehicleNoRowRed();
		vehicle.vehicleBoatSearch.clickRowAtVehicleNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsTransfer(0);

	}
```

---

## Test 9: AddressenteredinTowedFrom_257679
- **TestID:** 257679
- **Group(s):** TowDefectTestCases1
- **Priority:** 1
- **Lines:** 446-491

```java
	public void AddressenteredinTowedFrom_257679(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "257679");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.enterAtTowedFrom();
		tow.towEntry.towTab.verifyAndCancel5100PopupMsg();
		
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.enterAtTowedFromCSZ();
		popup.switchToCodedSearch();
		popup.kPICodedLookup.selectAtZipCodeInGrid();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.enterAtTowedTo();
		tow.towEntry.towTab.verifyAndCancel5100PopupMsg();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.enterAtTowedToCSZ();
		popup.switchToCodedSearch();
		popup.kPICodedLookup.selectAtZipCodeInGrid();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.tabTowRequestDateTime();
		tow.towEntry.towTab.selectAtWrecker();
	
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.tabOutState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
		tow.switchToTowEntry();
	}
```

---

## Test 10: RefusebuttondeleteInTowEntry_259714
- **TestID:** 259714
- **Group(s):** TowDefectTestCases1
- **Priority:** 2
- **Lines:** 495-535

```java
	public void RefusebuttondeleteInTowEntry_259714(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "259714");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.verifyCallIBubbleIsDisplayed();
		tow.towEntry.verifyAtCaseNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.selectAtWrecker();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.clickRefuseButton();
		tow.switchToTowRefusePopupScreen();
		tow.towRefusePopUpScreen.enterAtReason();
		tow.towRefusePopUpScreen.save();     // Method created
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.verifyHoldReasonIIconIsDisplayed();
		tow.towEntry.towTab.clickHoldReasonIIcon();
		tow.switchToTowRefusePopupScreen();
		tow.towRefusePopUpScreen.clickDeleteButton();
		tow.switchToTowEntry();

	}
```

---

## Test 11: TowReasonconfiguration_256100
- **TestID:** 256100
- **Group(s):** TowDefectTestCases1
- **Priority:** 3
- **Lines:** 539-571

```java
	public void TowReasonconfiguration_256100(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "256100");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Settings");
		loader.navigateToScreen("System Parameter");
		settings.switchToSystemParamter();
		settings.sysParameter.setSystemparameter427AsAbandoned();
		settings.switchToSystemParamter();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.verifyCallIBubbleIsDisplayed();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.selectAtTowReason();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyAtReleaseToLastName();
		tow.switchToTowEntry();
	}
```

---

## Test 12: PoliceDefect2020_254466
- **TestID:** 254466
- **Group(s):** TowDefectTestCases1
- **Priority:** 4
- **Lines:** 575-601

```java
	public void PoliceDefect2020_254466(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "254466");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickHoldReasonCheckbox();
		tow.towScreen.verifyHoldReaonCheckBoxIsSelected();
		tow.towScreen.selectAtHoldReasonDropDown();
		tow.towScreen.clickSearchButton();
		
		//tow.towScreen.verifyAtHoldReasonInGrid(0);
		tow.towScreen.selectRowByAtTowNo();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyHoldCheckBoxSelected();
		tow.towEntry.release.verifyAtHoldReason();
		tow.towEntry.release.uncheckHoldCheckbox();
		tow.towEntry.release.verifyHoldReasonDropdownDisabled();
		tow.towEntry.release.clickHoldCheckbox();
		tow.towEntry.release.selectReason();
		tow.towEntry.save();
		tow.switchToTowEntry();

	}
```

---

## Test 13: RefusedVendordetailsshowninTowRefuseSearchResult_272369
- **TestID:** 272369
- **Group(s):** TowDefectTestCases1
- **Priority:** 5
- **Lines:** 605-635

```java
	public void RefusedVendordetailsshowninTowRefuseSearchResult_272369(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "272369");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.clickRowByAtCallNo();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.clickRefuseButton();
		tow.switchToTowRefusePopupScreen();
		tow.towRefusePopUpScreen.enterAtReason();
		tow.towRefusePopUpScreen.saveNCloseScreen();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verify1003UpdateSuccessfulFooterMessage();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.verifyRefuseInfoIconIsDisplayed();
		tow.switchToTowEntry();
		tow.towEntry.closeTheScreen();
		loader.navigateToScreen("Tow Refuse");
		tow.switchToTowRefuseScreen();
		tow.towRefuse.clickSearchButton();
		tow.towRefuse.verifyAtCallNo();
		tow.towRefuse.verifyAtVendor();
		tow.switchToTowRefuseScreen();
	}
```

---

## Test 14: VerifyyearandVINNoinTowEntryscreenfromVehicleModule_272370
- **TestID:** 272370
- **Group(s):** TowDefectTestCases1
- **Priority:** 6
- **Lines:** 639-662

```java
	public void VerifyyearandVINNoinTowEntryscreenfromVehicleModule_272370(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "272370");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.clickNoPlateCheckbox();
		tow.towEntry.verify7252ConfirmMessage();
		tow.switchToTowEntry();
		tow.towEntry.verifyYearIsEnabled();
		tow.towEntry.verifyMakeIsEnabled();
		tow.towEntry.verifyModelIsEnabled();
		tow.towEntry.verifyColorsIsEnabled();
		tow.towEntry.verifyVINIsEnabled();
		tow.towEntry.verifyStyleIsEnabled();
		tow.towEntry.enterAtYear();
		tow.towEntry.enterAtVINNo();
		tow.switchToTowEntry();
	}
```

---

## Test 15: VerifyVehicleBoatSearchisaddedwithIncidentActivitydropdownfield_263018
- **TestID:** 263018
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 666-683

```java
	public void VerifyVehicleBoatSearchisaddedwithIncidentActivitydropdownfield_263018(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "263018");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.verifyIncidentActivityFieldDisplayed();
		vehicle.vehicleBoatSearch.selectAtIncidentActivity();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyRecordsListedInGrid();
		vehicle.vehicleBoatSearch.clickRowAtVinNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameActivity();
	}
```

---

## Test 16: ToverifywhetherTowSignaturelogicforReleasedTo_275269
- **TestID:** 275269
- **Group(s):** TowDefectTestCases1
- **Priority:** 7
- **Lines:** 687-724

```java
	public void ToverifywhetherTowSignaturelogicforReleasedTo_275269(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "275269");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.selectAtWrecker();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.towEntry.release.enterAtReleasedBy();
		tow.towEntry.release.clickReleasedBySignatureButton();
		home.switchToSignatureScreen();
		home.signatureScreen.clickTypeButton();
		home.signatureScreen.enterAtSignTextArea("Automation");
		home.signatureScreen.clickApplyButton();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();

	}
```

---

## Test 17: TocheckwhetherCancelledTowrecordsdisplayinggrayed_275951
- **TestID:** 275951
- **Group(s):** TowDefectTestCases1
- **Priority:** 8
- **Lines:** 728-754

```java
	public void TocheckwhetherCancelledTowrecordsdisplayinggrayed_275951(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "275951");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.selectRowByAtTowNo();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtTowReason();
		tow.towEntry.verify7251ConfirmMessage();
		tow.switchToTowEntry();
		tow.towEntry.saveNClose();
		tow.switchToTowScreen();
		tow.towScreen.clickBackButton();
		tow.towScreen.selectTowReasonAsCancel();
		tow.towScreen.clickSearchButton();
		tow.towScreen.verifyAtTowNoInGrid();
		tow.towScreen.verifyAtRowViewedAsGrayColor();
		tow.towScreen.clickBackButton();
		tow.switchToTowScreen();

	}
```

---

## Test 18: ToCheckDateTimeLabelChangeVehicleFlagTab_280016
- **TestID:** 280016
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 779-821

```java
		public void ToCheckDateTimeLabelChangeVehicleFlagTab_280016(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "280016");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();                                 //Removed below lines
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();

		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.switchToVehicleBoatEntry();                                            //Added line
		vehicle.vehicleBoatEntry.saveScreen();
		// vehicle.vehicleBoatSearch.verifyNoRecordFoundAcknowledgeMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();

		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyEffectiveDateTimeMandatory();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag1();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlag1InGrid(0);
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		// vehicle.vehicleBoatSearch.verifyNoRecordFoundAcknowledgeMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();

	}
```

---

## Test 19: VerifyTowEntryReleaseTosignatureclearbuttonfunctionality_280021
- **TestID:** 280021
- **Group(s):** TowSystemParameter
- **Priority:** none
- **Lines:** 824-875

```java
	public void VerifyTowEntryReleaseTosignatureclearbuttonfunctionality_280021(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "280021");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Settings");
		loader.navigateToScreen("System Parameter");
		settings.switchToSystemParamter();
		settings.sysParameter.setSystemparameter290AsFalse();
		settings.switchToSystemParamter();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.selectRowByAtTowNo();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.towEntry.release.clickReleaseToSignatureButton();
		home.switchToSignatureScreen();
		home.signatureScreen.clickTypeButton();
		home.signatureScreen.enterAtSignTextArea("AutoTest");
		//home.signatureScreen.enterAtName();      // This method has to be Hided as per the current functionality //Don't Delete this line of code
		home.signatureScreen.clickApplyButton();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyReleaseToClearButtonIsDisplayed();
		tow.towEntry.release.clickReleaseToClearButton();
		tow.switchToTowEntry();
		tow.towEntry.clickDispositionTab();
		tow.towEntry.towDispositionTab.enterAtAuthorizedBy();
		tow.towEntry.towDispositionTab.clickSignatureButton();
		home.switchToSignatureScreen();
		home.signatureScreen.enterAtPassword();
		home.signatureScreen.clickShowSignatureButton();
		home.signatureScreen.clickApplyButton();
		tow.switchToTowEntry();
		tow.towEntry.clickDispositionTab();
		tow.towEntry.towDispositionTab.verifyClearButtonIsDisplayed();  //Method Changed
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickPrintIcon();
		home.switchToSelectReport();
		home.selectReport.CloseTheScreen();
		tow.switchToTowEntry();
		tow.towEntry.clickDispositionTab();
		tow.towEntry.towDispositionTab.verifyClearButtonIsDisplayed();
		tow.switchToTowEntry();

	}
```

---

## Test 20: VerifyReleaseToNamefieldfunctionalitywithsystemparameter427_282074
- **TestID:** 282074
- **Group(s):** TowDefectTestCases1
- **Priority:** 10
- **Lines:** 878-1004

```java
	public void VerifyReleaseToNamefieldfunctionalitywithsystemparameter427_282074(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "282074");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Settings");
		loader.navigateToScreen("System Parameter");
		settings.switchToSystemParamter();
		settings.sysParameter.setSystemparameter427AsAccident();
		settings.switchToSystemParamter();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.tabTowRequestDateTime();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.selectAtTowReason();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		String wreckerDropDownValue = tow.towEntry.towTab.getWreckerDropDownValue();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyAtReleaseToLastNameWithActiveWrecker(wreckerDropDownValue);
		tow.towEntry.release.verifyReleaseToLastNameIsDisabled();
		// 9th line testcase doubt
		tow.switchToTowEntry();
		String readTowNo = tow.towEntry.readTowNo();
		tow.towEntry.closeTheScreen();
		// 2nd Scenario
		tow.switchToTowScreen();
		tow.towScreen.verifyAtActiveTowNoRowViewedAsGrayColor(readTowNo);
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber1();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.tabTowRequestDateTime();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.selectAtTowReason1();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyReleaseToLastNameIsEmpty();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyAtReleaseToLastName();
		tow.switchToTowEntry();
		String readTowNo1 = tow.towEntry.readTowNo();
		tow.towEntry.closeTheScreen();
		// 3rd scenario
		tow.switchToTowScreen();
		tow.towScreen.verifyAtActiveTowNoRowViewedAsGrayColor(readTowNo1);
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber2();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.tabTowRequestDateTime();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.selectAtTowReason();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyAtReleaseToLastName();
		// 23rd line of testcase not able to perform on App
		tow.switchToTowEntry();
		tow.towEntry.closeTheScreen();
		// 4th scenario
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber3();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyReleaseToLastNameIsEmpty();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.towEntry.towTab.tabTowRequestDateTime();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.selectAtTowReason1();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.verifyAtReleaseToLastName();
		tow.switchToTowEntry();

	}
```

---

## Test 21: TocheckwhetherSignatureisupdating_280018
- **TestID:** 280018
- **Group(s):** TowDefectTestCases2
- **Priority:** 1
- **Lines:** 1009-1041

```java
	public void TocheckwhetherSignatureisupdating_280018(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "280018");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Settings");
		loader.navigateToScreen("System Parameter");
		settings.switchToSystemParamter();
		settings.sysParameter.setSystemparameter290AsTrue();
		settings.switchToSystemParamter();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.clickRowByAtCallNo();
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.towEntry.release.enterAtReleasedBy();
		tow.towEntry.release.clickReleasedBySignatureCheckBox();
		home.switchToSignatureScreen();
		home.signatureScreen.Close();
		tow.switchToTowEntry();
		tow.towEntry.clickDispositionTab();
		tow.towEntry.towDispositionTab.enterAtAuthorizedBy();
		tow.towEntry.towDispositionTab.clickAuthorizedBysignatureCheckBox();
		home.switchToSignatureScreen();
		home.signatureScreen.Close();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();

	}		
```

---

## Test 22: ToverifywhetherTowSignaturelogicforReleasedToReleaseBy_280015
- **TestID:** 280015
- **Group(s):** TowSystemParameter
- **Priority:** none
- **Lines:** 1044-1121

```java
		public void ToverifywhetherTowSignaturelogicforReleasedToReleaseBy_280015(ITestContext testContext) {

			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "280015");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Settings");
			loader.navigateToScreen("System Parameter");
			settings.switchToSystemParamter();
			settings.sysParameter.setSystemparameter290AsTrue();
			settings.switchToSystemParamter();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.clickAddNewButton();
			tow.switchToTowEntry();
			tow.towEntry.enterAtCallNo();
			tow.towEntry.enterAtPlateNumber();
			tow.towEntry.selectAtPlateState();
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.clickSelectButton();
			tow.switchToTowEntry();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.selectAtEquipmentUsed();    
			tow.towEntry.towTab.tabTowRequestDate();
			tow.towEntry.towTab.tabTowRequestDateTime();
			tow.towEntry.towTab.selectAtWrecker();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.enterAtReleaseToNameID();
			tow.towEntry.release.clickReleaseToSignatureButton();
			home.switchToSignatureScreen();
			home.signatureScreen.verifySignButtonIsDisplayed();
			home.signatureScreen.Close();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.enterAtReleasedBy();
			tow.towEntry.release.verifySignatureCheckBoxIsDisplayed();
			tow.towEntry.release.clickReleasedBySignatureCheckBox();
			settings.switchToPhoenixAuthenticatorWindow();
			settings.phoenixAuthenticatorWindow.enterAtPassword();
			settings.phoenixAuthenticatorWindow.clickAcceptButton();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.verifyReleasedBySignatureCheckBoxIsSelected();
			loader.navigateToModule("Settings");
			loader.navigateToScreen("System Parameter");
			settings.switchToSystemParamter();
			settings.sysParameter.setSystemparameter290AsFalse();
			settings.switchToSystemParamter();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.verifyAtReleasedBy();
			tow.towEntry.release.clearReleasedBy();
			tow.towEntry.release.enterAtReleasedBy1();
			tow.towEntry.release.clickReleasedBySignatureCheckBox();
			settings.switchToPhoenixAuthenticatorWindow();
			settings.phoenixAuthenticatorWindow.enterAtPassword();
			settings.phoenixAuthenticatorWindow.clickAcceptButton();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			// tow.towEntry.release.verifyReleasedBySignatureCheckBoxIsSelected(); //As per
			// test the Testcase App is not supporting in this line
			tow.switchToTowEntry();

		}
```

---

## Test 23: TocheckwhetherReleasedBySignatureshouldshowproperly_280014
- **TestID:** 280014
- **Group(s):** TowDefectTestCases2
- **Priority:** 3
- **Lines:** 1124-1194

```java
		public void TocheckwhetherReleasedBySignatureshouldshowproperly_280014(ITestContext testContext) {

			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "280014");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon(); 
			loader.navigateToModule("Settings");
			loader.navigateToScreen("System Parameter");
			settings.switchToSystemParamter();
			settings.sysParameter.setSystemparameter290AsFalse();
			settings.switchToSystemParamter();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.clickAddNewButton();
			tow.switchToTowEntry();
			tow.towEntry.enterAtCallNo();
			tow.towEntry.enterAtPlateNumber();
			tow.towEntry.selectAtPlateState();
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.clickSelectButton();
			tow.switchToTowEntry();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.selectAtEquipmentUsed();
			tow.towEntry.towTab.tabTowRequestDate();
			tow.towEntry.towTab.tabTowRequestDateTime();
			tow.towEntry.towTab.selectAtWrecker();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.clickTowDetailsInGrid();
			home.switchToPnxReportSSRSPDFScreen();
			home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.enterAtReleaseToNameID();
			tow.towEntry.release.enterAtReleasedBy();
			tow.towEntry.release.clickReleasedBySignatureButton();
			home.switchToSignatureScreen();
			home.signatureScreen.enterAtPassword();
			home.signatureScreen.clickShowSignatureButton();
			home.signatureScreen.clickApplyButton();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.clickReleaseTab();
			tow.towEntry.release.clickReleasedByClearButton();
			tow.towEntry.release.clearReleasedBy();
			tow.towEntry.release.enterAtReleasedBy1();
			tow.towEntry.release.clickReleasedBySignatureButton();
			home.switchToSignatureScreen();
			home.signatureScreen.clickTypeButton();
			home.signatureScreen.enterAtSignTextArea("Test");
			home.signatureScreen.clickApplyButton();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.clickTowDetailsInGrid();
			home.switchToPnxReportSSRSPDFScreen();
			home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();

		}
```

---

## Test 24: TocheckwhetherTowEntryScreenchangeworkingproperly_280013
- **TestID:** 280013
- **Group(s):** TowDefectTestCases2
- **Priority:** 4
- **Lines:** 1199-1239

```java
		public void TocheckwhetherTowEntryScreenchangeworkingproperly_280013(ITestContext testContext) {

			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "280013");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.clickAddNewButton();
			tow.switchToTowEntry();
			tow.towEntry.enterAtCallNo();
			tow.towEntry.clickNoPlateCheckbox();
			tow.towEntry.verify7252ConfirmMessage();
			tow.switchToTowEntry();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.selectAtEquipmentUsed();
			tow.towEntry.towTab.tabTowRequestDate();
			tow.towEntry.towTab.tabTowRequestDateTime();
			tow.towEntry.towTab.selectAtWrecker();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.verifyCreateCallCheckBoxIsNotDisplayed();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.verifyAtTowFrom();
			tow.towEntry.towTab.verifyAtTowedFromCSZ();
			tow.towEntry.towTab.verifyAtTowedTo();
			tow.towEntry.towTab.verifyAtTowedToCSZ();
			tow.towEntry.towTab.tabOutCancelDateNTime();
			tow.towEntry.towTab.verifyCancelDateNTimeisEmpty();
			tow.switchToTowEntry();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.verifyAtTowFrom();
			tow.switchToTowEntry();

		}
```

---

## Test 25: TocheckwhetherSignatureLogicindispositiontabofTowEntry_280012
- **TestID:** 280012
- **Group(s):** TowSystemParameter
- **Priority:** none
- **Lines:** 1242-1305

```java
		public void TocheckwhetherSignatureLogicindispositiontabofTowEntry_280012(ITestContext testContext) {
			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "280012");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Settings");
			loader.navigateToScreen("System Parameter");
			settings.switchToSystemParamter();
			settings.sysParameter.setSystemparameter290AsFalse();
			settings.switchToSystemParamter();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.enterAtTowNo();
			tow.towScreen.clickSearchButton();
			tow.towScreen.selectRowByAtTowNo();
			tow.switchToTowEntry();
			tow.towEntry.clickDispositionTab();
			tow.towEntry.towDispositionTab.enterAtAuthorizedBy();
			tow.towEntry.towDispositionTab.clickSignatureButton();
			home.switchToSignatureScreen();
			home.signatureScreen.enterAtPassword();
			home.signatureScreen.clickShowSignatureButton();
			home.signatureScreen.clickApplyButton();
			tow.switchToTowEntry();
			tow.towEntry.clickDispositionTab();
			tow.towEntry.towDispositionTab.verifyClearButtonIsDisplayed();
			tow.towEntry.towDispositionTab.clickClearButton();
			tow.switchToTowEntry();
			tow.towEntry.closeTheScreen();
			tow.switchToTowScreen();
			tow.towScreen.clickBackButton();
			tow.towScreen.clickResetButton();
			loader.navigateToModule("Settings");
			loader.navigateToScreen("System Parameter");
			settings.switchToSystemParamter();
			settings.sysParameter.setSystemparameter290AsTrue();
			settings.switchToSystemParamter();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.enterAtTowNo();
			tow.towScreen.clickSearchButton();
			tow.towScreen.selectRowByAtTowNo();
			tow.switchToTowEntry();
			tow.towEntry.clickDispositionTab();
			tow.towEntry.towDispositionTab.enterAtAuthorizedBy();
			tow.towEntry.towDispositionTab.verifySignatureCheckBoxIsDisplayed();
			tow.towEntry.towDispositionTab.clickSignatureCheckBox();
			settings.switchToPhoenixAuthenticatorWindow();
			settings.phoenixAuthenticatorWindow.enterAtPassword();
			settings.phoenixAuthenticatorWindow.clickAcceptButton();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.clickPrintIcon();
			home.switchToSelectReport();
			home.selectReport.CloseTheScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickDispositionTab();
			tow.towEntry.towDispositionTab.verifySignatureCheckBoxIsSelected();
			tow.switchToTowEntry();

		}
```

---

## Test 26: TocheckwhetherLocationofVehiclekeyandTowreason_280011
- **TestID:** 280011
- **Group(s):** TowDefectTestCases2
- **Priority:** 6
- **Lines:** 1308-1357

```java
		public void TocheckwhetherLocationofVehiclekeyandTowreason_280011(ITestContext testContext) {

			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "280011");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.clickAddNewButton();
			tow.switchToTowEntry();
			tow.towEntry.verifyLocationOfVehicleKeyIsDisplayed();
			tow.towEntry.selectLocationOfVehicleKeyAsAdd2390();
			settings.switchToSharedCodes();
			settings.sharedCodes.verifyAtCodeID();
			settings.sharedCodes.clickAddNewButton();
			settings.sharedCodes.EnterAtPopUpCodeValue();
			settings.sharedCodes.EnterAtPopUpDescription();
			settings.sharedCodes.clickAddButtonInPopUp();
			settings.sharedCodes.clickAddNewButton();
			settings.sharedCodes.enterAtPopUpCodeValue1();
			settings.sharedCodes.enterAtPopUpDescription1();
			settings.sharedCodes.clickAddButtonInPopUp();
			settings.sharedCodes.closeScreen();
			tow.switchToTowEntry();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.verifyTowResonTextFieldIsDisplayed();
			tow.towEntry.towTab.enterTowReason();
			tow.towEntry.towTab.selectAtEquipmentUsed();
			tow.towEntry.towTab.tabTowRequestDate();
			tow.towEntry.towTab.tabTowRequestDateTime();
			tow.towEntry.towTab.selectAtWrecker();
			tow.switchToTowEntry();
			tow.towEntry.enterAtCallNo();
			tow.towEntry.enterAtPlateNumber();
			tow.towEntry.selectAtPlateState();
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.clickSelectButton();
			tow.switchToTowEntry();
			tow.towEntry.selectAtLocationOfVehicleKey();
			tow.towEntry.save();
			tow.switchToTowEntry();
			tow.towEntry.selectAtLocationOfVehicleKey1();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.clearTowReason();
			tow.towEntry.towTab.enterAtTowReason();
			tow.switchToTowEntry();
			tow.towEntry.save();
			tow.switchToTowEntry();
		}
```

---

## Test 27: ToCheckWhetherTypeFieldshowingproperdataforVehicle_280010
- **TestID:** 280010
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 1362-1406

```java
	public void ToCheckWhetherTypeFieldshowingproperdataforVehicle_280010(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "280010");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickVehicleTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtVehicleNoDisplaysVehicleRecords();
		vehicle.vehicleBoatSearch.clickRowAtVehicleNo1();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtPlateType1();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickRefresh();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.verifyAtType1UsingVehicleNo1InGrid();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickVehicleTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtVehicleNoDisplaysVehicleRecords();
		vehicle.vehicleBoatSearch.clickRowAtVehicleNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtPlateType1();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickRefresh();
		vehicle.vehicleBoatSearch.verifyAtType1UsingVehicleNoInGrid();

	}
```

---

## Test 28: VerifyTheTowReasonvaluesshouldautopopulatetheVendorinTowEntryScreen_284329
- **TestID:** 284329
- **Group(s):** TowDefectTestCases2
- **Priority:** 7
- **Lines:** 1411-1451

```java
	public void VerifyTheTowReasonvaluesshouldautopopulatetheVendorinTowEntryScreen_284329(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "284329");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Settings");
		loader.navigateToScreen("Coded");
		settings.switchToCodedScreen();
		settings.coded.enterAtCodeID();
		settings.coded.clickSearchButton();
		settings.coded.clickRowByAtCodeID();
		settings.switchToSharedCodes();
		settings.sharedCodes.verifyAtCodeValueDescriptionInGrid(1);
		settings.sharedCodes.clickAtCodeValueDescription();//
		settings.sharedCodes.SelectAtTowVendor();
		settings.sharedCodes.clickAddButtonInPopUp();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();

		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.verifyTowReasonisEnabled();
		tow.towEntry.towTab.selectAtTowReason();
		tow.towEntry.towTab.selectAtEquipmentUsed();

		tow.towEntry.towTab.verifyAtWrecker();
		tow.towEntry.towTab.verifyCurrentDateAutoPopulatesInTowRequestedDate();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
		
	}
```

---

## Test 29: TocheckWhetherUseRGettingWarningMessageProperlyWhenEnteringVINWhichIsAlreadyHavingAnotherVehicle_284326
- **TestID:** 284326
- **Group(s):** TowDefectTestCases2
- **Priority:** 8
- **Lines:** 1456-1494

```java
	public void TocheckWhetherUseRGettingWarningMessageProperlyWhenEnteringVINWhichIsAlreadyHavingAnotherVehicle_284326(
			ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "284326");
		Browser.NavigateToLoginScreen();
		// login.loginScreen.logonUsingTestContextOtherDB();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatSearchHelpWindow();   //Method changed
		vehicle.vehicleBoatSearch.clickRowAtPlateNo();
		tow.switchToTowEntry();    //
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.verifyTowReasonisEnabled();
		tow.towEntry.towTab.selectAtTowReason();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.selectAtWrecker();
		tow.towEntry.towTab.tabTowRequestDate();
		tow.switchToTowEntry();
		tow.towEntry.clickPlateInfoIcon();// NEW METHOD////
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo1();
		//vehicle.vehicleBoatEntry.verifyVinNoDuplicationAlertMessage();
		popup.confirm.yes();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
		tow.switchToTowEntry();
	}
```

---

## Test 30: VerifyThePlateControlSearchResultGridIfClickedOnTheRowSelectRightClickViewDetailsVehicleEntryScreen_286928
- **TestID:** 286928
- **Group(s):** TowDefectTestCases2
- **Priority:** 9
- **Lines:** 1498-1528

```java
	public void VerifyThePlateControlSearchResultGridIfClickedOnTheRowSelectRightClickViewDetailsVehicleEntryScreen_286928(
			ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "286928");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.selectAtPlateState();

		vehicle.switchToVehicleBoatSearchHelpWindow();
		vehicle.vehicleBoatSearchHelpWindow.selectAtVehicleUsingVehicleNo();
		tow.switchToTowEntry();
		tow.towEntry.verifyAtPlateVInNo(0);
		tow.towEntry.VerifyAtState();
		tow.towEntry.clickRefreshButton();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatSearchHelpWindow();
		vehicle.vehicleBoatSearchHelpWindow.RightClickInStatePlate("V-11");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAtPlate();

		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.verifyAtPlateVInNo(0);
		tow.towEntry.VerifyAtState();
		tow.switchToTowEntry();
	}
```

---

## Test 31: VerifyinTowEntrywhilesearchinVehicleownernameshoulddisplaytheIncidentNames_278226
- **TestID:** 278226
- **Group(s):** TowDefectTestCases2
- **Priority:** 10
- **Lines:** 1533-1564

```java
	public void VerifyinTowEntrywhilesearchinVehicleownernameshoulddisplaytheIncidentNames_278226(
			ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "278226");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.towEntry.towTab.verifyAtWrecker();
		tow.towEntry.towTab.verifyAtAddress();
		tow.towEntry.towTab.verifyCurrentDateAutoPopulatesInTowRequestedDate();
		tow.towEntry.save();
		tow.towEntry.clickOwnerTab();
		tow.towEntry.owner.clickNameSearchIcon();//
		names.switchToNameSearchHelpWindow();
		names.nameSearchHelpWindow.verifyTheGridIsEmpty();//
		names.nameSearchHelpWindow.CloseScreen();
		tow.switchToTowEntry();

	}
```

---

## Test 32: WI_VerifyWhetherAnyBlueScreenErrorTthrowingIinTowEentrySscreenAndAlsoVerifyVINFfunctionalityPproperlyworkingInChangeMmode_289939
- **TestID:** 289939
- **Group(s):** TowDefectTestCases1
- **Priority:** 11
- **Lines:** 1567-1609

```java
		public void WI_VerifyWhetherAnyBlueScreenErrorTthrowingIinTowEentrySscreenAndAlsoVerifyVINFfunctionalityPproperlyworkingInChangeMmode_289939(
				ITestContext testContext) {

			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "289939");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow");
			tow.switchToTowScreen();
			tow.towScreen.clickAddNewButton();
			tow.switchToTowEntry();
			tow.towEntry.enterAtCallNo();
			tow.towEntry.clickNoPlateCheckbox();
			tow.towEntry.verify7252ConfirmMessage();
			tow.towEntry.enterAtVINNo();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.selectAtTowReason();
			tow.towEntry.towTab.selectAtEquipmentUsed();
			tow.towEntry.towTab.verifyAtWrecker();
			tow.switchToTowEntry(); //
			tow.towEntry.save();
			tow.switchToTowEntry();//
			tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
			String TowNo = tow.towEntry.readTowNo();
			tow.towEntry.closeTheScreen();
			tow.switchToTowScreen();
			tow.towScreen.verifyAtCallNoInGrid(0);
			tow.towScreen.verifyAtDescribtion(0);
			tow.towScreen.selectRowByAtTowNo(TowNo);
			tow.switchToTowEntry();
			tow.towEntry.verifyAtTowNo(TowNo);
			tow.towEntry.tabVINno();
			tow.towEntry.save();
			tow.towEntry.verify1003UpdateSuccessfulFooterMessage();
			tow.towEntry.clickRefreshButton();
			tow.towEntry.clickTowTab();
			tow.towEntry.towTab.tabTowReason();
			tow.towEntry.towTab.enterAtTowReason();
			tow.towEntry.save();
			tow.towEntry.verify1003UpdateSuccessfulFooterMessage();
			tow.switchToTowEntry();
		}
```

---

## Test 33: AddActivityDetailToANameInBoatEntryAndVerifyActivityAppearsInVehicleTabNameEntryScreen_294711
- **TestID:** 294711
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1616-1650

```java
	public void AddActivityDetailToANameInBoatEntryAndVerifyActivityAppearsInVehicleTabNameEntryScreen_294711(
			ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "294711");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterAtRegistration();
		vehicle.vehicleBoatSearch.boatTab.selectAtState();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.clickRowAtBoatHullNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectColors();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtNameActivity();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsModified(0);
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickClearButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAtNameinGrid();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickNameInfoIcon();
		names.switchToNameEntry();
		names.nameEntry.switchToVehicleTab();
		names.nameEntry.nameEntryVehicleTab.SelectAtActivity();
		names.nameEntry.nameEntryVehicleTab.VerifyAtActivityInGrid(0);

	}
```

---

## Test 34: VerifyWhetherTypeFieldshowingProperdataforBoat_294756
- **TestID:** 294756
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1656-1715

```java
	public void VerifyWhetherTypeFieldshowingProperdataforBoat_294756(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "294756");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.enterAtBoatNo();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatNoDisplaysBoatRecords();
		vehicle.vehicleBoatSearch.selectRowByAtBoatNoInGrid();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtPlateType();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateTypeDropdown();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickRefresh();
		vehicle.vehicleBoatSearch.verifyAtTypeUsingBoatNoInGrid();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatNoDisplaysBoatRecords();
		vehicle.vehicleBoatSearch.verifyAtTypeUsingBoatNoInGrid();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatNoDisplaysBoatRecords();
		vehicle.vehicleBoatSearch.selectRowByAtBoatNo1InGrid();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtPlateType();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateTypeDropdown();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickRefresh();
		vehicle.vehicleBoatSearch.verifyAtTypeUsingBoatNo1InGrid(); // Added by Abi
		vehicle.switchToVehicleBoatSearch();

	}
```

---

## Test 35: VerifyPreviousAndFutureDateIsAllowedInFlagTabOfBoatEntry_295029
- **TestID:** 295029
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1721-1765

```java
	public void VerifyPreviousAndFutureDateIsAllowedInFlagTabOfBoatEntry_295029(ITestContext testcontext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testcontext.setAttribute("testID", "295029");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		
		vehicle.vehicleBoatEntry.verifyAddNewBoatButtonIsDisplayedAndEnabled();//created
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAddNewBoatButtonNotDisplayed();//created
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickAddNewBoatButton();
		
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStatusAsActive();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterPreviousDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlagInGrid(0);
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterFutureDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag1();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlag1InGrid(1);
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickClearButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyDuplicationAcknowledgeMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag2();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlag2InGrid(2);
		vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 36: VerifyValidationMessageWhenAddingExixtingHullNo_295158
- **TestID:** 295158
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1771-1790

```java
	public void VerifyValidationMessageWhenAddingExixtingHullNo_295158(ITestContext testcontext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testcontext.setAttribute("testID", "295158");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.clickSaveButton();
		vehicle.vehicleBoatEntry.verifyHullNoDuplicationAlertMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSaveNCloseButton();
		vehicle.vehicleBoatEntry.verifyHullNoDuplicationAlertMessage();
		vehicle.switchToVehicleBoatEntry();

	}
```

---

## Test 37: VerifyWhenHullIsTransferredToNewRegistrationAllHistoricalDataRetainedWithOldRegistration_295159
- **TestID:** 295159
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1795-1840

```java
	public void VerifyWhenHullIsTransferredToNewRegistrationAllHistoricalDataRetainedWithOldRegistration_295159(
			ITestContext testcontext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testcontext.setAttribute("testID", "295159");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterAtBoatHullNo();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.clickRowAtBoatHullNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo1();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtPropulsion();
		vehicle.vehicleBoatEntry.enterAtMaterial();
		vehicle.vehicleBoatEntry.selectVOD();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtColor1();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAssociationAsModified(0);
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.boatTab.enterAtBoatHullNo();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyNoRecordFoundAcknowledgeMessage();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickVehicleTab();
		vehicle.vehicleBoatSearch.vehicleTab.clickShowAllCheckBox();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterAtRegistration();
		vehicle.vehicleBoatSearch.boatTab.selectAtState();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.verifyUsingAtHullNoRowRed();
		vehicle.vehicleBoatSearch.verifyUsingHullNo1RowBlackColor();

	}
```

---

## Test 38: VerifyBoatSearchisaddedwithIncidentActivitydropdownfield_295160
- **TestID:** 295160
- **Group(s):** Boat
- **Priority:** none
- **Lines:** 1845-1864

```java
	public void VerifyBoatSearchisaddedwithIncidentActivitydropdownfield_295160(ITestContext testcontext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testcontext.setAttribute("testID", "295160");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.verifyIncidentActivityFieldDisplayed();
		vehicle.vehicleBoatSearch.selectAtIncidentActivity();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyRecordsListedInGrid();
		vehicle.vehicleBoatSearch.clickRowAtBoatHullNo();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameActivity();
		vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 39: TowEntrySmoke
- **TestID:** 
- **Group(s):** EntryScreenSmokeScriptVehicle
- **Priority:** none
- **Lines:** 1870-1904

```java
	public void TowEntrySmoke(ITestContext testContext) {

		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "TowEntry");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		popup.acknowledge.okIfWindowExist("AfterClick AddNew");
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.verifyCallIBubbleIsDisplayed();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.selectAtPlateState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtTowReason();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		popup.confirm.yes();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.clickOverrideCheckbox();
		tow.switchToTowEntry(); //
		tow.towEntry.save();
		popup.acknowledge.okIfWindowExist("AfterClick SaveScreen");
		tow.switchToTowEntry();//
		tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
		objectIdentification.smokeTest.clickOnEntryScreensTabs("Tow Entry");
		ExtentReport.getScreenShotOnRequest(true);

	}
```

---

## Test 40: TowVendorEntrySmoke
- **TestID:** 
- **Group(s):** EntryScreenSmokeScriptVehicle
- **Priority:** none
- **Lines:** 1908-1929

```java
	public void TowVendorEntrySmoke(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "TowVendorEntry");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow Vendor");
		tow.switchToTowVendor();
		tow.towVendor.clickAddNewButton();
		popup.acknowledge.okIfWindowExist("AfterClick AddNew");
		tow.switchToTowVendorEntry();
		tow.towVendorEntry.enterAtVendorCode();
		tow.towVendorEntry.enterAtTowVendorNameID();
		tow.towVendorEntry.enterOfficeContact();
		tow.towVendorEntry.save();
		popup.acknowledge.okIfWindowExist("AfterClick SaveScreen");
		tow.switchToTowVendorEntry();
		tow.towVendorEntry.verify1002AdditionSuccessfulFooterMessage();
		objectIdentification.smokeTest.clickOnEntryScreensTabs("Tow Vendor Entry");
		ExtentReport.getScreenShotOnRequest(true);

	}
```

---

## Test 41: VehicleEntrySmoke
- **TestID:** 
- **Group(s):** EntryScreenSmokeScriptVehicle
- **Priority:** none
- **Lines:** 1933-1964

```java
	public void VehicleEntrySmoke(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "VehicleEntry");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		popup.acknowledge.okIfWindowExist("AfterClick AddNew");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.enterYearAsCurrentYear();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStatusAsActive();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterDateEntered();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectFlag();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		popup.acknowledge.okIfWindowExist("AfterClick SaveScreen");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		objectIdentification.smokeTest.clickOnEntryScreensTabs("Vehicle Boat Search");
		ExtentReport.getScreenShotOnRequest(true);

	}
```

---

## Test 42: VechicleMainTabFunctionality_145423
- **TestID:** 145423
- **Group(s):** 2022Q4EnhancementTestcases
- **Priority:** none
- **Lines:** 1967-2011

```java
	public void VechicleMainTabFunctionality_145423(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "145423");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtModel();
		vehicle.vehicleBoatEntry.enterAtStyle();
		vehicle.vehicleBoatEntry.enterAtCustom1();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtNameActivity();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAtNameinGrid();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectColors();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameInGrid();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAtNameinGrid();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickClearButton();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameInGrid();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtActivityInGrid();
		vehicle.switchToVehicleBoatEntry();

	}
```

---

## Test 43: VechicleBoatSearchScreenFunctionality_145936
- **TestID:** 145936
- **Group(s):** 2022Q4EnhancementTestcases
- **Priority:** none
- **Lines:** 2014-2052

```java
	public void VechicleBoatSearchScreenFunctionality_145936(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "145936");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtModel();
		vehicle.vehicleBoatEntry.enterAtStyle();
		vehicle.vehicleBoatEntry.enterAtCustom1();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		String readVehicleNo = vehicle.vehicleBoatEntry.readVehicleNo();
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.enterToDateTimeAsCurrentDateTime();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyActiveVehilceNoInGrid(readVehicleNo, 0);
		vehicle.vehicleBoatSearch.verifyAtPlateStateInGrid(0);
		vehicle.vehicleBoatSearch.verifyAtMakeInGrid();
		vehicle.vehicleBoatSearch.verifyAtModelInGrid(0);
		vehicle.vehicleBoatSearch.verifyAtVinNoInGrid(0);
		vehicle.switchToVehicleBoatSearch();

	}
```

---

## Test 44: VechicleBoatFlagTabFunctionality_145236
- **TestID:** 145236
- **Group(s):** 2022Q4EnhancementTestcases
- **Priority:** none
- **Lines:** 2055-2085

```java
	public void VechicleBoatFlagTabFunctionality_145236(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "145236");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.verifyFlagDropdownAsRadicalDropdown();
		vehicle.vehicleBoatSearch.selectAtFlag();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.selectGridRow();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlagInGrid(0);
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.verifyFlagDropdownAsRadicalDropdown();
		vehicle.vehicleBoatSearch.boatTab.selectAtFlag();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.selectGridRow();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickFlagsTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlagInGrid(0);
		vehicle.switchToVehicleBoatEntry();

	}
```

---

## Test 45: CRM153329ToCheckVehicleBoatSearchScreensThrowsBlueScreenError_12919
- **TestID:** 12919
- **Group(s):** Vehicle
- **Priority:** none
- **Lines:** 2089-2106

```java
	public void CRM153329ToCheckVehicleBoatSearchScreensThrowsBlueScreenError_12919(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "12919");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.clickRandomColumn();
	vehicle.vehicleBoatSearch.selectGridRow();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.RandomdoubleClickOnAllColumn();
	
}
```

---

## Test 46: ToCheckWhetherUserIsAbleToSaveCustom1AndCustom2FieldUnderDispositionTab_13715
- **TestID:** 13715
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2110-2139

```java
public void ToCheckWhetherUserIsAbleToSaveCustom1AndCustom2FieldUnderDispositionTab_13715(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "13715");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Tow");
	tow.switchToTowScreen();
	tow.towScreen.clickAddNewButton();
	tow.switchToTowEntry();
	tow.towEntry.enterAtCallNo();
	tow.towEntry.enterAtPlateNumber();
	tow.towEntry.selectAtPlateState();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickSelectButton();
	tow.switchToTowEntry();
	tow.towEntry.clickTowTab();
	tow.towEntry.towTab.selectAtEquipmentUsed();
	tow.towEntry.towTab.tabTowRequestDate();
	tow.towEntry.towTab.selectAtWrecker();
	tow.towEntry.towTab.selectAtTowReason();
	tow.towEntry.save();
	tow.switchToTowEntry();
	tow.towEntry.clickDispositionTab();
	tow.towEntry.towDispositionTab.enterAtCustom1();
	tow.towEntry.towDispositionTab.enterAtCustom2();
	tow.towEntry.save();
	tow.towEntry.towDispositionTab.verifyAtCustom1();
	tow.towEntry.towDispositionTab.verifyAtCustom2();
}
```

---

## Test 47: vehicleEntryAndVerifyingInGridDisappearingOrNot_14692
- **TestID:** 14692
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2143-2181

```java
	public void vehicleEntryAndVerifyingInGridDisappearingOrNot_14692(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "14692");
	Browser.NavigateToLoginScreen();
	login.loginScreen.logonUsingTestContextOtherDB();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Entry");
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.enterAtCustom1();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtNameActivity();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.switchToVehicleBoatEntry();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtActivityInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtAddressInGrid();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAtNameinGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickClearButton();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateNoIsNull();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyNameIDIsNull();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAddressIsNull();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsMandatory();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.enterAtVinNo();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.switchToVehicleBoatEntry();
	objectIdentification.manualIdentify.verifyUpdateSuccessful();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsNotMandatory();
	vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 48: ToVerifyTheVehicleSearchScreenPlateNumberNotDisplaying_15752
- **TestID:** 15752
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2185-2211

```java
public void ToVerifyTheVehicleSearchScreenPlateNumberNotDisplaying_15752(ITestContext testcontext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testcontext.setAttribute("testID","15752");
	Browser.NavigateToLoginScreen();
	login.loginScreen.logonUsingTestContextOtherDB();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyAllVehicleNoInGrid();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.selectShowAllCheckBox();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.clickNextButton();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.selectShowAllCheckBox();
	vehicle.vehicleBoatSearch.clickSearch();
	//vehicle.vehicleBoatSearch.verifyVehicleNoDisappearFromGrid();
	boolean blank1 =  vehicle.vehicleBoatSearch.verifyStateAndPlateDisappearFromGrid();
	//vehicle.vehicleBoatSearch.selectRandomRowByColumnName("State-Plate");
    if(blank1 == true) {
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsDisplayed();
    }
	}
```

---

## Test 49: ToCheckTheFilterFunctionalityOfDateRangeToFieldInVehicleBoatSearchScreen_17016
- **TestID:** 17016
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2217-2254

```java
    public void ToCheckTheFilterFunctionalityOfDateRangeToFieldInVehicleBoatSearchScreen_17016(ITestContext testcontext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testcontext.setAttribute("testID","17016");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickAddVehicle();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.enterAtVinNo();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
	String vno =vehicle.vehicleBoatEntry.readVehicleNo();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.enterToDateTimeAsCurrentDateTime();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vno);
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.enterFromDateAsPreviousDate();//created
	vehicle.vehicleBoatSearch.enterToDateAsPreviousDate();//created
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyAtVehicleNo(0);
	vehicle.vehicleBoatSearch.verifyVehicleNoNotListedInGrid(vno);
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vno);
	} 
```

---

## Test 50: VehicleBoatEntryScreenWhileClickOnPrintButtonTheDataWhichWasUnderTheGridGetsDisappearsInBothLAWAndFIRE_21774
- **TestID:** 21774
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2261-2314

```java
	public void VehicleBoatEntryScreenWhileClickOnPrintButtonTheDataWhichWasUnderTheGridGetsDisappearsInBothLAWAndFIRE_21774(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "21774");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Entry");
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickRowByAtPlateSTInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickPrintIcon();
	home.switchToSelectReport();
	home.selectReport.CloseTheScreen();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
	vehicle.vehicleBoatEntry.saveAndCloseScreen();
	objectIdentification.windowHandle.switchToMainWindow();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.clickRowAtPlateNo();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickRowByAtPlateSTInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.clickAddButton();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickPrintIcon();
	home.switchToSelectReport();
	home.selectReport.CloseTheScreen();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.vehicleBoatEntry.verifyUpdateSuccessfulMessage();
	vehicle.vehicleBoatEntry.saveAndCloseScreen();
	vehicle.switchToVehicleBoatSearch();
	
	
}
```

---

## Test 51: ToVerifyBlueScreenIssueInTowVendorEntryArea_ZoneAssignmentTabWhenWeAddCodeIdToTheGrid_23089
- **TestID:** 23089
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2319-2347

```java
	public void ToVerifyBlueScreenIssueInTowVendorEntryArea_ZoneAssignmentTabWhenWeAddCodeIdToTheGrid_23089(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "23089");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow Vendor");
		vehicle.switchToTowVendor();
		vehicle.towVendor.clickAddNew();
		tow.switchToTowVendorEntry();
		tow.towVendorEntry.enterAtVendorCode();
		tow.towVendorEntry.enterAtTowVendorNameID();
		tow.towVendorEntry.enterAtOfficeContact();
		tow.towVendorEntry.save();
		tow.switchToTowVendorEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		tow.towVendorEntry.clickAreaZoneAssignmentTab();
		tow.towVendorEntry.areaAssignment.selectAtTowZone();
		settings.switchToSharedCodes();
		settings.sharedCodes.closeScreen();
		tow.switchToTowVendorEntry();
		tow.towVendorEntry.clickAreaZoneAssignmentTab();
		tow.towVendorEntry.areaAssignment.clickAddButton();
		tow.towVendorEntry.areaAssignment.verify7100RequiredEntriesMissingAckMessage();
		tow.switchToTowVendorEntry();
		tow.towVendorEntry.clickAreaZoneAssignmentTab();
		tow.towVendorEntry.areaAssignment.verifyCodeIdShouldNotAdded();
		tow.switchToTowVendorEntry();
		}
```

---

## Test 52: ToVerifyVehicleBoatSearchScreenfunctionalities_44067
- **TestID:** 44067
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2352-2394

```java
	public void ToVerifyVehicleBoatSearchScreenfunctionalities_44067(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "44067");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();                              
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectStateAsWI();
		vehicle.switchToVehicleBoatEntry();  
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage();
		vehicle.switchToVehicleBoatEntry(); 
		String bno = vehicle.vehicleBoatEntry.readBoatNo();
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterToDateTimeAsCurrentDateTime();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyBoatNoInGrid(bno);
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickBoatTab();
		vehicle.vehicleBoatSearch.boatTab.enterFromDateAsPreviousDate();
		vehicle.vehicleBoatSearch.boatTab.enterToDateAsPreviousDate();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatNoInGrid(0);
		vehicle.vehicleBoatSearch.verifyBoatNoNotListedInGrid(bno);
		vehicle.vehicleBoatSearch.clickBack();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickSearch();
		vehicle.vehicleBoatSearch.verifyAtBoatNoDisplaysBoatRecords();
	}
```

---

## Test 53: HowToCreateBoatRegistration_44449
- **TestID:** 44449
- **Group(s):** Q1VehicleFunctional2025
- **Priority:** none
- **Lines:** 2400-2457

```java
	public void HowToCreateBoatRegistration_44449(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "44449");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickReset();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyBoatNoIsEmpty();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		vehicle.vehicleBoatEntry.verifyBoatNoIsCreated();
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyBoatNoIsEmpty();
		vehicle.vehicleBoatEntry.enterBoatHullNoAsMoreThan17Characters();
		vehicle.vehicleBoatEntry.verifyVinNoExceedingLimitOf17Characters();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickAddNewBoatButton();
		vehicle.vehicleBoatEntry.verifyBoatNoIsEmpty();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo(1);
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		vehicle.vehicleBoatEntry.verifyBoatNoIsCreated();
		vehicle.vehicleBoatEntry.saveAndCloseScreen();
		loader.navigateToScreen("Vehicle/Boat Entry");
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickAddNewBoatButton();
		vehicle.vehicleBoatEntry.verifyBoatNoIsEmpty();
		vehicle.vehicleBoatEntry.enterBoatHullNoAsMoreThan17Characters();
		vehicle.vehicleBoatEntry.verifyVinNoExceedingLimitOf17Characters();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo(1);
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
	}
```

---

## Test 54: toCheckWhetherVehicleBoatIDIsIncrementingOrNotWhileReloadingEntryScreenInAddModeAfterCreatingVehicleBoatIDCRM156507_52033
- **TestID:** 52033
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2461-2507

```java
	public void toCheckWhetherVehicleBoatIDIsIncrementingOrNotWhileReloadingEntryScreenInAddModeAfterCreatingVehicleBoatIDCRM156507_52033(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "52033");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Vehicle/Boat Search");
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddVehicle();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtVinNo();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtMake();
		vehicle.vehicleBoatEntry.enterAtModel();
		vehicle.vehicleBoatEntry.enterAtStyle();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		String readedVehicleNo = vehicle.vehicleBoatEntry.getVehicleNo();
		vehicle.vehicleBoatEntry.reloadScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAtVehicleNo(readedVehicleNo);
		vehicle.vehicleBoatEntry.closeScreen();
		vehicle.switchToVehicleBoatSearch();
		vehicle.vehicleBoatSearch.clickAddBoat();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.enterAtBoatHullNo();
		vehicle.vehicleBoatEntry.enterAtYear();
		vehicle.vehicleBoatEntry.enterAtPropulsion();
		vehicle.vehicleBoatEntry.enterAtMaterial();
		vehicle.vehicleBoatEntry.selectInsuranceCompany();
		vehicle.vehicleBoatEntry.clickMainTab();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtRegistrationNo();
		vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.saveScreen();
		vehicle.switchToVehicleBoatEntry();
		objectIdentification.manualIdentify.verifyAdditionSuccessful();
		String readedBoatNo = vehicle.vehicleBoatEntry.getBoatNo();
		vehicle.vehicleBoatEntry.reloadScreen();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.verifyAtBoatNo(readedBoatNo);
	}
```

---

## Test 55: ToVerifyVehicleMergeScreen_58082
- **TestID:** 58082
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** none
- **Lines:** 2512-2531

```java
	public void ToVerifyVehicleMergeScreen_58082(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "58082");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
    loader.navigateToScreen("Vehicle Merge");
    vehicle.switchTovehicleMerge();
    vehicle.vehicleMerge.enterAtPrimaryVehicleNo();
    vehicle.vehicleMerge.clickMergeListTab();
    vehicle.vehicleMerge.mergeListTab.clickResetButton();
    vehicle.vehicleMerge.mergeListTab.enterAtSecondaryVehicleNo();
    vehicle.vehicleMerge.clickMergeButton();
    objectIdentification.windowHandle.windowExist("Vehicle Merge");
    vehicle.switchTovehicleMergeDetail();
    vehicle.vehicleMergeDetails.clickMergeButton();
    vehicle.vehicleMergeDetails.verify6065SelectedMergePopup();
    vehicle.vehicleMergeDetails.verify9170VehicleMergedAcknowledge(); 
    vehicle.switchTovehicleMerge();
	}
```

---

## Test 56: ToVerifyVehicleBoatSearch_58483
- **TestID:** 58483
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** none
- **Lines:** 2536-2552

```java
	public void ToVerifyVehicleBoatSearch_58483(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "58483");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.selectAtPlateType();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyAtTypeInGrid();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.verifyAtPlateType(1);
	vehicle.switchToVehicleBoatSearch();
	}
```

---

## Test 57: ToVerifyVehicleBoatEntry_58485
- **TestID:** 58485
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** none
- **Lines:** 2557-2622

```java
	public void ToVerifyVehicleBoatEntry_58485(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "58485");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Entry");
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsMandatory();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.enterAtVinNo();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyPlateAndStateIsNotMandatory();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.checkPlateOnlyCheckBox();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterPlateExpireMonthAndYear();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectColors();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtPlateType();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtNameActivity();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.verifyAttachmentsTabIsDisplayed();
	vehicle.vehicleBoatEntry.verifyNotesTabIsDisplayed();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtNameInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtActivityInGrid();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickFlagsTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.taboutEffectiveDateAndTime();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterPreviousDateAsExpiryDate();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.ClickExpireTimeDownArrow();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterEnteredBy();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.selectAtFlag();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.enterComments();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.clickAddButton();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.switchToVehicleBoatEntry();
	objectIdentification.manualIdentify.verifyUpdateSuccessful();
	vehicle.vehicleBoatEntry.clickFlagsTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtEffectiveDateTimeInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtFlagInGrid(0);
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtEnteredByInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyAtExpireDateTimeInGrid();
	vehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.verifyCommentsInGrid();
	objectIdentification.windowHandle.windowExist("Acknowledge");
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.closeScreen();
	objectIdentification.windowHandle.switchToMainWindow();
	//Scenario 2
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Entry");
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.saveScreen();
	vehicle.switchToVehicleBoatEntry();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.verifyAttachmentsTabIsDisplayed();
	vehicle.vehicleBoatEntry.verifyNotesTabIsDisplayed();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateAndStateInGrid();
	vehicle.switchToVehicleBoatEntry();
	}
```

---

## Test 58: CRM186699_ErrorThrowsWhenWeSaveTheScreenWithNamTypeAsA_B_J_O_NegativeScenario_57946
- **TestID:** 57946
- **Group(s):** VehicleDefectTestCases
- **Priority:** none
- **Lines:** 2627-2708

```java
	public void CRM186699_ErrorThrowsWhenWeSaveTheScreenWithNamTypeAsA_B_J_O_NegativeScenario_57946(ITestContext testContext) {
	ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
	testContext.setAttribute("testID", "57946");
	Browser.NavigateToLoginScreen();
	login.loginScreen.Logon();
	loader.navigateToModule("Vehicle");
	loader.navigateToScreen("Vehicle/Boat Search");
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickAddBoat();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState(1);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber(1);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID(1);
	vehicle.vehicleBoatEntry.saveScreen();
	String vehicleNo = vehicle.vehicleBoatEntry.readVehicleNo();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	Playback.waitForControlReady();
	vehicle.vehicleBoatSearch.enterAtVehicle(vehicleNo);
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vehicleNo);
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickAddBoat();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState(2);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber(2);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID(2);
	vehicle.vehicleBoatEntry.saveScreen();
	String vehicleNo1 = vehicle.vehicleBoatEntry.readVehicleNo();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	Playback.waitForControlReady();
	vehicle.vehicleBoatSearch.enterAtVehicle(vehicleNo1);
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vehicleNo1);
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickAddBoat();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState(3);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber(3);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID(3);
	vehicle.vehicleBoatEntry.saveScreen();
	String vehicleNo2 = vehicle.vehicleBoatEntry.readVehicleNo();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	Playback.waitForControlReady();
	vehicle.vehicleBoatSearch.enterAtVehicle(vehicleNo2);
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vehicleNo2);
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickAddBoat();
	vehicle.switchToVehicleBoatEntry();
	vehicle.vehicleBoatEntry.clickMainTab();
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState(4);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber(4);
	vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID(4);
	vehicle.vehicleBoatEntry.saveScreen();
	String vehicleNo3 = vehicle.vehicleBoatEntry.readVehicleNo();
	objectIdentification.manualIdentify.verifyAdditionSuccessful();
	vehicle.vehicleBoatEntry.closeScreen();
	vehicle.switchToVehicleBoatSearch();
	vehicle.vehicleBoatSearch.clickBack();
	vehicle.vehicleBoatSearch.clickReset();
	vehicle.vehicleBoatSearch.enterAtVehicle(vehicleNo3);
	Playback.waitForControlReady();
	vehicle.vehicleBoatSearch.clickSearch();
	vehicle.vehicleBoatSearch.verifyVehicleNoInGrid(vehicleNo3);
	vehicle.switchToVehicleBoatSearch();
	}
```

---

## Test 59: ToVerifyTowScreen_60109
- **TestID:** 60109
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** 1
- **Lines:** 2715-2760

```java
	public void ToVerifyTowScreen_60109(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "60109");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickAddNewButton();
		tow.switchToTowEntry();
		tow.towEntry.enterAtCallNo();
		tow.towEntry.enterAtPlateNumber();
		tow.towEntry.tabOutState();
		vehicle.switchToVehicleBoatEntry();
		vehicle.vehicleBoatEntry.clickSelectButton();
		tow.switchToTowEntry();
		tow.towEntry.clickTowTab();
		tow.towEntry.towTab.selectAtEquipmentUsed();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verifyDamageMissingTabIsDisplayed();
		tow.towEntry.verifyDamageMissingTabIsEnabled();
		tow.towEntry.verifyPropertyInventoryTabIsDisplayed();
		tow.towEntry.verifyPropertyInventoryTabIsEnabled();
		tow.towEntry.verifyNotesTabIsDisplayed();
		tow.towEntry.verifyNotesTabIsEnabled();
		tow.towEntry.verifyAttachmentsTabIsDisplayed();
		tow.towEntry.verifyAttachmentsTabIsEnabled();
		tow.towEntry.verifyQAFormsTabIsDisplayed();
		tow.towEntry.verifyQAFormsTabIsEnabled();
		tow.switchToTowEntry();
		tow.towEntry.clickOwnerTab();
		tow.towEntry.owner.enterAtOwnerLastName();
		tow.towEntry.owner.enterAtOwnerFirstName();
		names.switchToNameSearchHelpWindow();
		names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		objectIdentification.smokeTest.checkAckExist();
		tow.switchToTowEntry();
		tow.towEntry.setTowYearToJSONFile("60109");
		tow.towEntry.setTowNumberToJSONFile("60109");
		tow.switchToTowEntry();
	}
```

---

## Test 60: ToVerifyTowScreen_60109A
- **TestID:** 
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** 2
- **Lines:** 2763-2810

```java
	public void ToVerifyTowScreen_60109A(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "60109A");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.selectAtTowNoUsingJSONReadFile("60109");
		tow.switchToTowEntry();
		tow.towEntry.clickDriverTab();
		tow.towEntry.mDriver.clickOwnerCheckbox();
		tow.towEntry.mDriver.verifyAtOwnerLastName();
		tow.towEntry.mDriver.verifyAtOwnerFirstName();
		tow.towEntry.mDriver.uncheckOwnerCheckbox();
		tow.towEntry.mDriver.verifyDriverLastNameEmpty();
		tow.towEntry.mDriver.verifyDriverFirstNameEmpty();
		tow.towEntry.mDriver.enterAtFirstName();
		tow.towEntry.mDriver.enterAtLastName();
		names.switchToNameSearchHelpWindow();
		names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
		tow.switchToTowEntry();
		tow.towEntry.mDriver.enterComments();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		objectIdentification.smokeTest.checkAckExist();
		tow.switchToTowEntry();
		tow.towEntry.clickForfeitureTab();
		tow.towEntry.forfeiture.enterCrime();
		tow.towEntry.forfeiture.enterEstimatedValue();
		tow.towEntry.forfeiture.clickYesinLienOnVehicle();
		tow.towEntry.forfeiture.enterLienOfAmount();
		tow.towEntry.forfeiture.selectAtLienHolder();
		names.switchToNameSearchHelpWindow();
		names.nameSearchHelpWindow.SelectNameByNameID();
		tow.switchToTowEntry();
		tow.towEntry.clickForfeitureTab();
		tow.towEntry.forfeiture.enterAtGasGaugeReading();
		tow.towEntry.forfeiture.clickGoodInMechanicalCondition();
		tow.towEntry.forfeiture.selectEquipments();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		objectIdentification.smokeTest.checkAckExist();
		tow.switchToTowEntry();
	}
```

---

## Test 61: ToVerifyTowScreen_60109B
- **TestID:** 
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** 3
- **Lines:** 2814-2869

```java
	public void ToVerifyTowScreen_60109B(ITestContext testContext) {
		ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		testContext.setAttribute("testID", "60109B");
		Browser.NavigateToLoginScreen();
		login.loginScreen.Logon();
		loader.navigateToModule("Vehicle");
		loader.navigateToScreen("Tow");
		tow.switchToTowScreen();
		tow.towScreen.clickSearchButton();
		tow.towScreen.selectAtTowNoUsingJSONReadFile("60109");
		tow.switchToTowEntry();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.clickHoldCheckbox();
		tow.towEntry.release.selectAtHoldReason();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		tow.towEntry.verifyRedColorHoldLabel();
		tow.towEntry.clickReleaseTab();
		tow.towEntry.release.enterProofOf();
		tow.towEntry.release.enterAtReleaseToNameID();
		tow.towEntry.release.tabOutDateandTime();
		tow.towEntry.release.enterAtReleasedBy();
		tow.towEntry.release.enterComments();
		tow.switchToTowEntry();
		tow.towEntry.save();
		tow.switchToTowEntry();
		objectIdentification.smokeTest.checkAckExist();
		tow.switchToTowEntry();
		tow.towEntry.clickDispositionTab();
		tow.towEntry.towDispositionTab.enterAtAuthorizedBy();
		tow.towEntry.towDispositionTab.tabOutDateandTime();
		tow.towEntry.towDispositionTab.selectMethod();
		tow.towEntry.towDispositionTab.enterAtCustom1();
		tow.towEntry.towDispositionTab.enterAtCustom2();
		tow.towEntry.towDispositionTab.enterAtCustom3();
		tow.towEntry.towDispositionTab.enterAtCustom4();
		tow.switchToTowEntry();
		tow.towEntry.saveNClose();
		tow.switchToTowScreen();
		tow.towScreen.enterAtPlateNumber();
		tow.towScreen.clickSearchButton();
		tow.towScreen.verifyAtCallNoInGrid();
		tow.towScreen.verifyAtTowNoUsingJSONReadFileInGrid("60109");
		tow.towScreen.verifyAtHoldInGrid();
		tow.towScreen.verifyAtDescriptionInGrid();
		tow.towScreen.clickBackButton();
		tow.towScreen.clickResetButton();
		tow.towScreen.enterAtVinNo();
		tow.towScreen.clickSearchButton();
		tow.towScreen.verifyAtCallNoInGrid();
		tow.towScreen.verifyAtTowNoUsingJSONReadFileInGrid("60109");
		tow.towScreen.verifyAtHoldInGrid();
		tow.towScreen.verifyAtDescriptionInGrid();
		tow.switchToTowScreen();
	}
```

---

## Test 62: ToVerifyTowRefuseScreen_59995
- **TestID:** 59995
- **Group(s):** Q6VehicleCheckList2025
- **Priority:** none
- **Lines:** 2875-2903

```java
	  public void ToVerifyTowRefuseScreen_59995(ITestContext testContext) {
		  ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		  testContext.setAttribute("testID", "59995");
		  Browser.NavigateToLoginScreen();
		  login.loginScreen.logonUsingTestContextOtherDB();
		  loader.navigateToModule("Vehicle");
		  loader.navigateToScreen("Tow");
		  tow.switchToTowScreen();
		  tow.towScreen.clickSearchButton();
		  tow.towScreen.selectRowByAtTowNo();
		  tow.switchToTowEntry();
		  tow.towEntry.clickRefuseButton();
		  tow.switchToTowEntryPopupScreen();
		  tow.towRefusePopUpScreen.enterAtReason();
		  tow.towRefusePopUpScreen.save();
		  tow.switchToTowEntry();
		  tow.towEntry.save();
		  tow.switchToTowEntry();
		  objectIdentification.manualIdentify.verifyUpdateSuccessful();
		  String callNo = tow.towEntry.readCallNo();
		  tow.towEntry.closeTheScreen();
		  objectIdentification.windowHandle.switchToMainWindow();
		  loader.navigateToScreen("Tow Refuse");
		  tow.switchToTowRefuseScreen();
		  tow.towRefuse.enterAtCallNo(callNo);
		  tow.towRefuse.clickSearchButton();
		  tow.towRefuse.verifyAtRemarksInGrid();
		  tow.switchToTowRefuseScreen();
	  }
```

---

## Test 63: ToVerifyTowRotationScreen_59996
- **TestID:** 59996
- **Group(s):** VehicleSP406
- **Priority:** none
- **Lines:** 2909-2943

```java
	  public void ToVerifyTowRotationScreen_59996(ITestContext testContext) {
		  ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		  testContext.setAttribute("testID", "59996");
		  Browser.NavigateToLoginScreen();
		  login.loginScreen.logonUsingTestContextOtherDB();
		  loader.navigateToModule("Settings");
		  loader.navigateToScreen("System Parameter");
		  settings.switchToSystemParamter();
		  settings.sysParameter.setSystemparameter406AsRotationbyAreaTowType();
		  loader.navigateToModule("Vehicle");
		  loader.navigateToScreen("Tow Rotation");
		  vehicle.switchToTowRotation();
		  vehicle.towRotation.selectAtPatrolArea();
		  vehicle.towRotation.verifyEquipmentTypeDropdownIsEnabled();
		  vehicle.towRotation.selectAtEquipmentType1();
		  vehicle.towRotation.verifyVendorDropdownIsEnabled();
		  vehicle.towRotation.selectAtVendor();
		  vehicle.towRotation.selectAtPosition();
		  vehicle.towRotation.clickAddButton();
		  vehicle.towRotation.verifyAtVendorInGrid(1);
		  vehicle.towRotation.verifyAtVendorName1InGrid();
		  vehicle.towRotation.verifyAtPositionNoInGrid(1);
		  vehicle.towRotation.verifyAtEquipmentInGrid(1);
		  vehicle.towRotation.verifyAtEquipmentCodeInGrid(1);
		  vehicle.towRotation.verifyAtAreaInGrid(1);
		  vehicle.towRotation.clickSave();
		  vehicle.switchToTowRotation();
		  objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge();
		  vehicle.switchToTowRotation();
		  loader.navigateToModule("Settings");
		  loader.navigateToScreen("System Parameter");
		  settings.switchToSystemParamter();
		  settings.sysParameter.setSystemparameter406AsRotationbyAreaTowType();
		  settings.switchToSystemParamter();
	  }
```

---

## Test 64: CRM187220VerifyTheVehicleMergeModuleWhenClickingOnLookupIcon_59994
- **TestID:** 59994
- **Group(s):** VehicleDefectTestCasesS92025
- **Priority:** none
- **Lines:** 2949-2968

```java
	  public void CRM187220VerifyTheVehicleMergeModuleWhenClickingOnLookupIcon_59994(ITestContext testContext) {
		  ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
		  testContext.setAttribute("testID", "59994");
		  Browser.NavigateToLoginScreen();
		  login.loginScreen.logonUsingTestContextOtherDB();
		  loader.navigateToModule("Vehicle");
		  loader.navigateToScreen("Vehicle Merge");
		  vehicle.switchTovehicleMerge();
		  vehicle.vehicleMerge.clickPrimaryVehicleLookupIcon();
		  objectIdentification.manualIdentify.verifyScreenIsRefreshed("Vehicle Merge");
		  vehicle.vehicleMerge.enterAtPrimaryVehicleNo();
		  vehicle.vehicleMerge.verifyPrimaryVehicleInfoIconIsDisplayed();
		  vehicle.vehicleMerge.verifyAtPlateST();
		  vehicle.vehicleMerge.clickOnPrimaryVehicleInfoIcon();
		  vehicle.switchToVehicleBoatEntry();
		  vehicle.vehicleBoatEntry.verifyAtVehicleNo(BaseData.getVehicleModuleValue("VehicleNo"));
		  vehicle.vehicleBoatEntry.saveAndCloseScreen();
		  objectIdentification.windowHandle.verifyWindowNotExists("Vehicle/Boat Entry");
		  vehicle.switchTovehicleMerge();
	  }
```

---

## Test 65: CRM193275ToVerifyTheAddTheSameVINUseInVehicleBoatEntry_69662
- **TestID:** 69662
- **Group(s):** VehicleDefectTestCasesS92025
- **Priority:** none
- **Lines:** 2974-3019

```java
		public void CRM193275ToVerifyTheAddTheSameVINUseInVehicleBoatEntry_69662(ITestContext testContext) {
			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "69662");
			Browser.NavigateToLoginScreen();
			login.loginScreen.Logon();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Vehicle/Boat Entry");
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.enterAtVinNo();
			vehicle.vehicleBoatEntry.enterAtYear();
			vehicle.vehicleBoatEntry.enterAtMake();
			vehicle.vehicleBoatEntry.enterAtModel();
			vehicle.vehicleBoatEntry.enterAtStyle();
			vehicle.vehicleBoatEntry.clickMainTab();
			vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber();
			vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState();
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.saveScreen();
			vehicle.switchToVehicleBoatEntry();
			String dateTime = vehicle.vehicleBoatEntry.getDateTimeFromGrid();
			String vehicleNo = vehicle.vehicleBoatEntry.getVehicleNo();
			objectIdentification.manualIdentify.verifyAdditionSuccessful();
			vehicle.vehicleBoatEntry.closeScreen();
			objectIdentification.windowHandle.switchToMainWindow();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Vehicle/Boat Entry");
			vehicle.switchToVehicleBoatEntry();
			vehicle.vehicleBoatEntry.enterAtVinNo();
			vehicle.vehicleBoatEntry.verify6040Popup(vehicleNo);
			vehicle.vehicleBoatEntry.verifyAtVehicleNo(vehicleNo);
			vehicle.vehicleBoatEntry.verifyAtVINNo();
			vehicle.vehicleBoatEntry.verifyAtYear();
			vehicle.vehicleBoatEntry.verifyAtMakeCode();
			vehicle.vehicleBoatEntry.verifyAtMakeDescription();
			vehicle.vehicleBoatEntry.verifyAtModelCode();
			vehicle.vehicleBoatEntry.verifyAtModelDescription();
			vehicle.vehicleBoatEntry.verifyAtStyle();
			vehicle.vehicleBoatEntry.verifyAtStyleDescription();
			vehicle.vehicleBoatEntry.verifyAtPlateST();
			vehicle.vehicleBoatEntry.clickMainTab();
			vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtPlateInGrid();
			vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.verifyAtDateTimeInGridByPlateST(dateTime);
			vehicle.vehicleBoatEntry.saveScreen();
			vehicle.switchToVehicleBoatEntry();
			objectIdentification.manualIdentify.verifyUpdateSuccessful();
		}
```

---

## Test 66: ToVerifyTowEntryAndRelatedModuleFunctionalities_70491
- **TestID:** 70491
- **Group(s):** VehicleDefectTestCasesS92025
- **Priority:** none
- **Lines:** 3026-3070

```java
		public void ToVerifyTowEntryAndRelatedModuleFunctionalities_70491(ITestContext testContext) {
			ExtentReport.CreateTest(Thread.currentThread().getStackTrace()[1].getMethodName());
			testContext.setAttribute("testID", "70491");
			Browser.NavigateToLoginScreen();
			login.loginScreen.logonUsingTestContextOtherDB();
			loader.navigateToModule("Vehicle");
			loader.navigateToScreen("Tow Vendor");
			//Scenario 1
			tow.switchToTowVendor();
			tow.towVendor.clickAddNewButton();
			tow.switchToTowVendorEntry();
			tow.towVendorEntry.enterAtVendorCode();
			tow.towVendorEntry.enterAtTowVendorNameID();
			tow.towVendorEntry.enterAtOfficeContactNo();
			tow.towVendorEntry.save();
			tow.switchToTowVendorEntry();
			objectIdentification.manualIdentify.verifyAdditionSuccessful();
			tow.towVendorEntry.clickPhoneNumberTab();
			tow.towVendorEntry.phoneNumber.selectPhoneAsHome();
			tow.towVendorEntry.phoneNumber.enterAtPhoneNumber();
			tow.towVendorEntry.phoneNumber.clickAddButton();
			tow.switchToTowVendorEntry();
			tow.towVendorEntry.save();
			tow.switchToTowVendorEntry();
			objectIdentification.manualIdentify.verifyUpdateSuccessful();
			tow.towVendorEntry.clickPhoneNumberTab();
			tow.towVendorEntry.phoneNumber.clickAtDeletePhoneNumberInGrid(1);
			tow.towVendorEntry.phoneNumber.clickNoInDeletePopup();
			tow.towVendorEntry.phoneNumber.clickOnHeaderXColumn();
			tow.towVendorEntry.phoneNumber.verifyDeletePopupNotOccurs();
			tow.towVendorEntry.phoneNumber.clickAtHeaderOnGridByColumnName(1);
			tow.towVendorEntry.phoneNumber.verifyDeletePopupNotOccurs();
			tow.towVendorEntry.phoneNumber.clickAtHeaderOnGridByColumnName(2);
			tow.towVendorEntry.phoneNumber.verifyDeletePopupNotOccurs();
			tow.switchToTowVendorEntry();
			//Scenario 3
			tow.towVendorEntry.clickAreaZoneAssignmentTab();
			tow.towVendorEntry.areaAssignment.selectAtPatrolArea(1);
			tow.towVendorEntry.areaAssignment.clickAddButton();
			tow.towVendorEntry.areaAssignment.verifyAtPatrolAreaInGrid(1);
			tow.towVendorEntry.areaAssignment.selectAtPatrolArea(1);
			tow.towVendorEntry.areaAssignment.clickAddButton();
			tow.towVendorEntry.areaAssignment.verify1019AcknowledgePopup();
			tow.switchToTowVendorEntry();
		}
```

---


