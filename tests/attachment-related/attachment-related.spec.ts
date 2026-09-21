// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';

const testData = TestDataReader.loadData('Attachment');

test.describe('2021DefectTestCases', () => {
  test('2021DefectTestCases_281422', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '281422', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Detail Work')
      await loaderPage.navigateToScreen('Detail Search')
      await detailWork.module.switchToDetailSearch()
      await detailWork.detailSearch.enterAtDetailNo()
      await detailWork.detailSearch.clickSearch()
      await detailWork.detailSearch.verifyAtDetailNo(0)
      await detailWork.detailSearch.clickAtDetailNoInGrid()
      await detailWork.module.switchToDetailEntryScreen()
      await detailWork.detailEntry.clickAttachmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await detailWork.module.switchToDetailEntryScreen()
      await detailWork.detailEntry.clickAttachmentsTab()
      // objectIdentification.attachmentsTab.selectAttachmentCheckBoxByIndex(0)
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.ClickUpdate()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.enterAtDescription()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAccessAsChange(0)
      await settings.accessLog.verifyAccessAsAdd(1)
      await settings.accessLog.verifyAtDescription(0)
      await settings.accessLog.verifyAtDescription(1)
      await detailWork.module.switchToDetailEntryScreen()
      await detailWork.detailEntry.clickAttachmentsTab()
      // objectIdentification.attachmentsTab.deleteAttachmentFileInGridByIndex(0)
      // objectIdentification.attachmentsTab.verifyDeleteConfirmPopup()
      await loaderPage.navigateToScreen('Access Log')
      // objectIdentification.manualIdentify.reloadScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.enterAtDescription()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAccessAsDelete(0)
      await settings.accessLog.verifyAtDescription(0)
    });
  });

});

test.describe('2020DefectAttachments', () => {
  test('2020DefectAttachments_257120', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '257120', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Address Search')
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.enterAtAddress()
      await geo.addressSearch.verifyAttachmentsTabIsDisplayed()
      await geo.addressSearch.switchToAttachmentTab()
      await geo.addressSearch.attachmentsTab.clickAddFiles()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await geo.addressSearch.attachmentsTab.VerifyAddedAttachementInTheFolderGrid(1)
      await geo.addressSearch.attachmentsTab.clickAddFiles()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsPhotoEvidence()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await geo.addressSearch.attachmentsTab.VerifyAddedAttachementInTheFolderGrid(2)
      await geo.addressSearch.attachmentsTab.clickAddFiles()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsPhotoEvidence()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await geo.addressSearch.attachmentsTab.VerifyAddedAttachementInTheFolderGrid(3)
      await geo.addressSearch.attachmentsTab.clickAddFiles()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await geo.addressSearch.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await geo.addressSearch.attachmentsTab.VerifyAddedAttachementInTheFolderGrid(4)
      await geo.addressSearch.attachmentsTab.clickRefresh()
      await geo.addressSearch.attachmentsTab.deleteAttachmentFileInGridByIndex(3)
      await geo.addressSearch.attachmentsTab.verifyDeleteConfirmPopup()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToAttachmentTab()
      await geo.addressSearch.attachmentsTab.deleteAttachmentFileInGridByIndex(2)
      await geo.addressSearch.attachmentsTab.verifyDeleteConfirmPopup()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToAttachmentTab()
      await geo.addressSearch.attachmentsTab.deleteAttachmentFileInGridByIndex(1)
      await geo.addressSearch.attachmentsTab.verifyDeleteConfirmPopup()
      await geo.module.switchToAddressSearchScreen()
      await geo.addressSearch.switchToAttachmentTab()
      await geo.addressSearch.attachmentsTab.clickRefresh()
      await geo.addressSearch.attachmentsTab.VerifyAddedAttachementInTheFolderGrid(1)
    });
  });

  test('2020DefectAttachments_255336', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '255336', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await names.module.switchToNameEntry()
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyNameEntryAttachmentTabBlueColor()
    });
  });

  test('2020DefectAttachments_261097', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '261097', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter39AsWrongLocation()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsNetwork()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verify1204UnableToLocateNetworkPathAcknowledge();
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.clickBulkAttachmentRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickBrowseButton()
      await home.multiFilesAttachments.selectBulkAttachment()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickUploadButton();// Added by Vijay
      await home.multiFilesAttachments.clickCloseButton();// Added by Vijay
      // home.multiFilesAttachments.verifyUnableToAccessNetworkPathMessage();
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter39AsCorrectLocation()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsDataBase()
      await settings.module.switchToSystemParamter()
    });
  });

  test('2020DefectAttachments_261417', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '261417', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Entry')
      await names.module.switchToArrestEntry()
      await names.arrestEntry.enterAtNameID()
      await names.arrestEntry.switchToArrestTab()
      await names.arrestEntry.arrestTab.enterAtCaseNo()
      await names.arrestEntry.arrestTab.tabTheArrestDateAndTime()
      await names.arrestEntry.arrestTab.selectAtHow()
      await names.arrestEntry.arrestTab.enterAtOfficer1()
      await names.arrestEntry.arrestTab.selectArmed()
      await names.arrestEntry.arrestTab.tabTheBookingDateAndTime()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToChargeTab()
      await names.arrestEntry.chargeTab.tabTheCaseNoEntries()
      await names.arrestEntry.chargeTab.enterAtCharge()
      await names.arrestEntry.chargeTab.selectAtStatus()
      await names.arrestEntry.chargeTab.clickTheAddButton()
      await names.arrestEntry.clickReleaseTab()
      await names.arrestEntry.releaseTab.selectSchoolAsCollegeDegree()
      await names.arrestEntry.releaseTab.selectGradeAsA7thGrade()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.SaveNCloseScreen()
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.EnterAtCaseNo()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.SelectArrestByAtCaseNo()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToAttachmentTab()
      await names.arrestEntry.attachmentsTab.clickAddFiles()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.verifyAddSingleFileRadioButtonIsSelected()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.selectAtFile()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await names.arrestEntry.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      await names.module.switchToArrestEntry()
      const arresrNo = await names.arrestEntry.readArrestNo()
      await names.arrestEntry.ClickALCIcon()
      await home.module.switchToALCScreen()
      await home.aLCScreen.verifyAtSetPermissionForArrestNo(arresrNo)
      await home.aLCScreen.ClickPFTab()
      await home.aLCScreen.aLCPFTab.SelectAtAction()
      await home.aLCScreen.aLCPFTab.EnterAtPFCode()
      await home.aLCScreen.aLCPFTab.ClickAddButton()
      await home.aLCScreen.aLCPFTab.VerifyAtActionInGrid(0)
      await home.aLCScreen.SaveScreen()
      await home.module.switchToALCScreen()
      await home.aLCScreen.ClickGroupTab()
      await home.aLCScreen.aLCGroupTab.SelectAtAction()
      await home.aLCScreen.aLCGroupTab.selectAtDivision()
      await home.aLCScreen.aLCGroupTab.selectAtSection()
      await home.aLCScreen.aLCGroupTab.selectAtSquad()
      await home.aLCScreen.aLCGroupTab.selectTitle()
      await home.aLCScreen.aLCGroupTab.ClickAdd()
      await home.aLCScreen.SaveAndClose()
      await loaderPage.navigateToModule('Names')
      await loaderPage.logout()
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.EnterAtCaseNo()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.SelectArrestByAtCaseNo()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToAttachmentTab()
      await names.arrestEntry.attachmentsTab.selectFileByIndex(0)
      await home.module.switchToGetAttachmentScreen()
    });
  });

  test('2020DefectAttachments_256406', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '256406', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.EnterAtBirthDate()
      await names.module.switchToNameEntry()
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.clickZoomIcon()
      await home.module.switchToFullImageViewScreen()
      await home.imageFullViewScreen.clickDeleteIcon()
      await home.imageFullViewScreen.verifyDeleteConfirmPopup()
      await home.module.switchToFullImageViewScreen()
      await home.imageFullViewScreen.close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.clickResetButton()
      await home.allImagesScreen.ClickCheckedCheckbox()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickCheckedCheckbox()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
    });
  });

  test('2020DefectAttachments_260820', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '260820', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verifyCategoryAsMandatory()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.ClickLinkRadioButton()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verifyLinkEnabledAsMandatory()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.EnterAtLink()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.SelectRowCheckboxUsingFileName()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verifyLinkEnabledAsMandatory()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.EnterAtLink1()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.ClickUpdate()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.VerifyAtFileName1()
      // Automated By : - Abinaya M
      // Sprint :-Â 2023 :Â Quarter 1 :Â  Sprint 4
      // Type of Test case : - Enhancement - CRM # :-148406 //copied from personnel scripts due to attachment related
    });
  });

  test('2020DefectAttachments_256422', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '256422', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.EnterAtArrestNo()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.SelectRowByAtArrestNo()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.ClickArrestEntryImageView()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyProfileImageDisplayed()
      await names.nameEntry.closeTheScreen()
      await loaderPage.navigateToScreen('Expungement')
      await names.module.switchToExpungement()
      await names.expungement.EnterAtNameID()
      await names.expungement.VerifyAtAddress()
      await names.expungement.VerifyAtName()
      await names.expungement.SelectTypeAsExpungement()
      await names.expungement.EnterReason()
      await names.expungement.DeleteAtArrestBookingRow()
      await names.expungement.VerifyDeleteExpungementConfirmMessage()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      //				names.BackToExpungement();
      //				popup.switchToAcknowledge();
      await names.expungement.VerifyExpungeCompletedAcknowledgeMessage1()
      await names.expungement.VerifyNoActivitiesAcknowledgeMessage()
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.ClickBackButton()
      await names.nameSearch.ClickResetButton()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyImageNotAvailable()
    });
  });

  test('2020DefectAttachments_256798', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '256798', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToPhysicalTab()
      await names.nameEntry.physicalTab.EnterHeight()
      await names.nameEntry.physicalTab.EnterWeight_lbs()
      await names.nameEntry.physicalTab.EnterScarsMarksAsARTARM()
      await names.nameEntry.physicalTab.EnterAtDescription()
      await names.nameEntry.physicalTab.ClickAddButton()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyProfileImageDisplayed()
      // Application is not working as per the functionality
    });
  });

  test('2020DefectAttachments_256411', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '256411', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.enterNameIDAsJ()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      //				names.nameEntry.switchToPhysicalTab();
      //				names.nameEntry.physicalTab.EnterAtSMT();
      //				names.nameEntry.physicalTab.clickGlassesCheckBox();
      //				names.nameEntry.physicalTab.AddMarks();
      //				names.switchToNameEntry();
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.clickActiveCheckboxWithConfirmMsg()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickPhotoLineIcon()
      await names.module.switchToPhotoLineupScreen()
      await names.photoLineupEntry.ClickSearchButton()
      await names.photoLineupEntry.ClickBuildLineupButton()
      await names.module.switchToBuildPhotoLineupScreen()
      await names.buildPhotoLineup.ClickAutoRandomImagesButton(); //
      await names.buildPhotoLineup.EnterAtOfficer()
      await names.buildPhotoLineup.EnterDateAsCurrentDate()
      await names.buildPhotoLineup.ClickSaveAndViewPDFButton(); // disabled
      await names.buildPhotoLineup.VerifyCompleteLineUpAcknowledgeMessage(); //
      await home.module.switchToSelectReport()
      await home.selectReport.ClickPhotoLineupReportInGrid()
      await names.module.switchToPhotoLineupReportWindow()
      await names.photoLineupReportWindow.closeScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await names.module.switchToBuildPhotoLineupScreen()
      await names.buildPhotoLineup.CloseScreen()
      await names.module.switchToPhotoLineupScreen()
      await names.photoLineupEntry.EnterAtCaseNo()
      await names.photoLineupEntry.EnterAtOfficer()
      await names.photoLineupEntry.EnterTabOfficerDateTime()
      await names.photoLineupEntry.enterAtVictimLastName()
      await names.photoLineupEntry.enterAtVictimFirstName()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName()
      await names.module.switchToPhotoLineupScreen()
      await names.photoLineupEntry.ClickAdd()
      await names.photoLineupEntry.SaveScreen()
      await names.module.switchToPhotoLineupScreen()
      await names.photoLineupEntry.deleteRowByUsingNameInGrid()
      await names.module.switchToPhotoLineupScreen()
      // Automated By : - Mohamed Absar A on 11/14/2024
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : 2024
      // Type of Test case : - Defect CRM#152606
    });
  });

  test('2020DefectAttachments_48910', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48910', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setAtSystemParameter40(1)
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('48910_' + randomNumber)
      // String readed = objectIdentification.readPDF.ReadPDF('48910_' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readed, 'System Parameter Settings')
      await home.module.switchToFrmPnxRpt()
      await home.pnxReportSSRSPDFScreen.CloseScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setAtSystemParameter40(2)
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('48910A_' + randomNumber)
      // String readed2 = objectIdentification.readPDF.ReadPDF('48910A_' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readed2, 'System Parameter Settings')
      await home.module.switchToFrmPnxRpt()
      //Automated By : Mohamed Absar A on 03/03/2025 //Test Case Type:- Checklist //Q1 Sprint 3 2025
    });
  });

  test('2020DefectAttachments_48819', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48819', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.myHome.clickMessageIcon()
      await home.module.switchToMessageSearch()
      await home.messageSearch.clickAddNewButton()
      await home.module.switchToMessageSend()
      await home.messageSendScreen.EnterAtPF()
      await home.messageSendScreen.ClickAddButton()
      await home.messageSendScreen.EnterAtMessage()
      await home.messageSendScreen.clickBrowseImageButton()
      await home.attachment.selectAtImageFile()
      await home.module.switchToMessageSend()
      await home.messageSendScreen.ClickSendButton()
      await home.messageSendScreen.VerifyMessageSuccessfulBottomMessage()
      await home.messageSendScreen.clickCancel()
      await home.module.switchToMessageSearch()
      await home.messageSearch.selectAtMessageInGrid()
      await home.module.switchToMessageReceivedScreen()
      await home.messageReceivedScreen.verifyAtImage()
      await home.messageReceivedScreen.verifyAtTextMessage()
      await home.module.switchToMessageReceivedScreen()
      //Automated By : Sarathkumar L on 04/25/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Product Backlog
    });
  });

  test('2020DefectAttachments_55894', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55894', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormName()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.clickPDFRadioButton()
      await qA.qAFormEntry.mainTab.clickChooseFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Crash.pdf')
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickSaveButton()
      await qA.qAFormEntry.clickCancelConfirmationPopup()
      await qA.qAFormEntry.verifyBottomMessageNotAppears()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SaveScreen()
      await qA.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.verifyPDFLinkIsDisplayed()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.verifyReadyForUseCheckboxEnabled()
      await qA.qAFormEntry.selectReadyForUseCheckBoxWithCancelConfirmPopup()
      await qA.qAFormEntry.verifyReadyForUseCheckBoxUnchecked()
      await qA.qAFormEntry.SelectReadyForUseCheckBox()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.verifyAllowMultipleRecordsCheckboxDisabled()
      await qA.qAFormEntry.mainTab.verifySharedCheckboxDisabled()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.verifyPhoenixFormRadioButtonDisabled()
      await qA.qAFormEntry.mainTab.verifyPDFRadioButtonDisabled()
      await qA.qAFormEntry.mainTab.verifyEvaluationFormRadioButtonDisabled()
      await qA.module.SwitchToQAFormEntry()
      // Automated By : - Manikandan k on 04/25/2025
      // Sprint :-Â Quarter 2 :Â  Sprint 04 : 2025
      // Type of Test case : - Defect CRM# 182812
    });
  });

  test('2020DefectAttachments_23180', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '23180', async () => {
      await loginPage.loginScreen.Logon()
      await home.forms.clickFormsButton()
      await home.forms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickSelect()
      // objectIdentification.filesHandle.fileAttach.fileUpload(BaseData.getHomeModuleValue('FormName'))
      await qA.qAFormEntry.EnterAtSortOrder()
      await qA.qAFormEntry.clickSaveNAddNew()
      await qA.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qA.qAFormEntry.verifySortOrderFieldIsBlank();// App issue
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyActivityAsOf()
      // Automated By :- Mohamed Absar A on 04/21/2025 | Type:- Backlog | Q2 Sprint 4 2025 | CRM#160428
    });
  });

  test('2020DefectAttachments_55349', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55349', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter89AsTrue()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyReportApprovalTab()
      await home.myHome.myReportsTab.SelectStatusAsOnHold()
      await home.myHome.myReportsTab.verifyTabNotRefreshed()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter89AsFalse()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyReportApprovalTab()
      await home.myHome.myReportsTab.SelectStatusAsOnHold()
      await home.myHome.myReportsTab.verifyTabRefreshed()
      //Automated by  :-Kiran  Date :-04/21/2025  Quarter:-2  Sprint-4  Module:-Personnel  Type:-ProductBackLog  SetUp:-1.175
    });
  });

  test('2020DefectAttachments_58090A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '58090A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Certification Search')
      await training.module.switchToCertificationSearch()
      await training.certificationSearch.clickSearch()
      await training.certificationSearch.selectAtPFInGrid()
      await training.module.switchToCertificationEntry()
      await training.certificationEntry.selectAtEarnedViaInGrid()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.save()
      await training.certificationManualEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.verifyTabColor('Attachments',1)
      //Automated by  :-Kiran  Date :-04/28/2025  Quarter:-2  Sprint-4  Module:-Personnel  Type:-ProductBacklog  SetUp:-1.118
    });
  });

  test('2020DefectAttachments_66051', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '66051', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.verifyInactiveCheckboxIsDisabled();//created
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.verifyAtCategoryInGrid();//created
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await personnel.module.switchToPersonnelEntry()
      // Automated By : - Ranjith Kumar V K
      // Sprint :- : Quarter 3 : Sprint 8
      // Type of Test case : - Defect 2025
    });
  });

});

test.describe('AttachmentFunctional', () => {
  test('AttachmentFunctional_258922', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '258922', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreenByScreenID('1383 - Activity Search')
      await activity.module.switchToActivitySearch()
      //home.switchToActivitySearch();
      await activity.activitySearch.clickAddNewButton()
      await home.module.switchToActivityEntry()
      await activity.activityEntry.selectAtCategoryGroup()
      await activity.activityEntry.selectAtCategory()
      await activity.activityEntry.selectAtActivityType()
      await activity.activityEntry.selectAtActivityStatus()
      await activity.activityEntry.tabActivityDateTime()
      await activity.activityEntry.enterAtSubject()
      await activity.activityEntry.Save()
      await activity.activityEntry.close()
      //activity.switchToActivitySearch();
      await home.module.switchToActivitySearch()
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.refreshWhiteBoardScreen()
      await home.module.switchToMyHomeScreen()
      await home.whiteBoard.selectRowByAtSubject(0)
      await home.module.switchToActivityEntry()
      await activity.activityEntry.switchToActivityEntryAttachmentTab()
      await activity.activityEntry.attachmentsTab.clickAddFiles()
      await activity.activityEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await activity.activityEntry.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await home.module.switchToActivityEntry()
      await activity.activityEntry.switchToActivityEntryAttachmentTab()
      await activity.activityEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await home.module.switchToActivityEntry()
      await activity.activityEntry.saveNClose()
      await home.module.switchToMyHomeScreen()
      await home.whiteBoard.selectRowByAtSubject(0)
      await home.module.switchToActivityEntry()
      await activity.activityEntry.verifyAttachmentTabIsDefaultTab()
      await activity.activityEntry.close()
      await home.module.switchToMyHomeScreen()
      await home.whiteBoard.clickMaximizeButton()
      await home.module.switchToWhiteBoardWindow()
      await home.whiteBoard.selectRowByAtSubject(0)
      await home.module.switchToActivityEntry()
      await activity.activityEntry.verifyAttachmentTabIsDefaultTab()
    });
  });

  test('AttachmentFunctional_105073', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '105073', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAtNameType()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verifyAddSingleFileRadioButtonIsSelected()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectTextFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      //					names.nameEntry.attachmentsTab.VerifyAddedAttachementExistInTheGrid();
    });
  });

  test('AttachmentFunctional_105081', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '105081', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAtNameType()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.clickAddFiles()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.nameEntry.attachmentsTab.attachmentsCategoryPopup.verifyAddBulkFileRadioButtonIsSelected()
      await popupPage.switchToMultiFilesAttachWindow()
      //popup.multiFilesAttachWindow.SelectImgFile();
      await names.nameEntry.attachmentsTab.multiFilesAttachments.clickBrowseButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('TestJPG')
      //popup.multiFilesAttachWindow.SelectTextFile();
      //		popup.switchToMultiFilesAttachWindow();
      //		popup.multiFilesAttachWindow.SelectImgFile();
      await popupPage.switchToMultiFilesAttachWindow()
      await popupPage.multiFilesAttachWindow.ClickUpload()
      await popupPage.multiFilesAttachWindow.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.verifyAddedAttachementExistInTheGrid()
    });
  });

  test('AttachmentFunctional_105087', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '105087', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAtNameType()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      //					names.nameEntry.attachmentsTab.SelectRowCheckBox(4, 2);
      await names.nameEntry.attachmentsTab.ClickDownloadSelectedFilesButton()
      // WindowsControl.FileSavePopup.ClickSaveOptionDropdown();
      // WindowsControl.FileSavePopup.ClickSaveAsOption();
      // WindowsControl.FileBrowserWindow.EnterSaveFileName(Playback.GetTestDeployDirectoryPath(NamesTestContext)
      // + WindowsControl.FileBrowserWindow.GetFileName());
      // WindowsControl.FileBrowserWindow.ClickSave();
    });
  });

  test('AttachmentFunctional_105088', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '105088', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectAtNameType()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToAttachmentsTab()
      await names.nameEntry.attachmentsTab.deleteLastRowAndVerifyRowIsRemoved()
    });
  });

  test('AttachmentFunctional_9117', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '9117', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.selectRowAtName()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.clickPersonnelTrainingReportInGrid()
      await home.module.switchToPnxCustomReportPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('9117')
      // String readPDF = objectIdentification.readPDF.ReadPDF('9117')
      await home.module.switchToKPITempPDFScreen()
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('TrainingType'))
      await home.module.switchToSelectReport()
      await home.selectReport.clickPersonnelTrainingReportByCourseInGrid()
      await home.module.switchToPnxCustomReportPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('9117C')
      // String readPDF1 = objectIdentification.readPDF.ReadPDF('9117C')
      await home.module.switchToKPITempPDFScreen()
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF1, BaseData.getPersonnelModuleValue('CourseTitle'))
      // Automated By : Stalin
      // Year : 2023Â  Quarter: 01Â  Sprint: 04
      // Type of Test case - Enhancement /copied from personnel scripts due to attachment related
    });
  });

  test('AttachmentFunctional_288600', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '288600', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Entry')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.enterAtPFCode()
      await personnel.personnelEntry.enterAtLastName()
      await personnel.personnelEntry.enterAtFirstName()
      await personnel.personnelEntry.save(); // additionally added
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.selectAtPhoneType()
      await personnel.personnelEntry.personnelEntryMainTab.enterAtPhoneNumber()
      await personnel.personnelEntry.personnelEntryMainTab.clickPhoneNoAddButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.verifyAtPhoneNoInGrid(0)
      await personnel.personnelEntry.personnelEntryMainTab.deleteAtPhoneNumberInGrid()
      await popupPage.confirm.yes()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.verifyRowCountIsZeroInGrid()
      await personnel.personnelEntry.personnelEntryMainTab.selectAtPhoneType()
      await personnel.personnelEntry.personnelEntryMainTab.enterAtPhoneNumber1()
      await personnel.personnelEntry.personnelEntryMainTab.clickPhoneNoAddButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.verifyAtPhoneNo1InGrid(0)
      //			personnel.switchToPersonnelEntry();
      //			personnel.personnelEntry.clickPictureNotAvailable();
      //			home.switchToAllImageScreen();
      //			home.allImagesScreen.ClickAddNewButton();
      //			home.switchToUpdateImageScreen();
      //			home.updateImageScreen.TabDateTime();
      //			home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile();
      //			home.updateImageScreen.Save();
      //			home.updateImageScreen.switchtoUploadedImage();
      //			home.updateImageScreen.VerifyImageUploaded();
      //			home.switchToUpdateImageScreen();
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated by:-Bavithra , Date :-07/13/2023 , Quarter:-3 , Sprint:-13 ,
      // Module:Settings
    });
  });

  test('AttachmentFunctional_12119', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '12119', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Certification Search')
      await training.module.switchToCertificationSearch()
      await training.certificationSearch.clickAddNew()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.selectAtCertification()
      await training.certificationManualEntry.clickAddMultiplePF()
      await home.module.switchToAddMultiplePFScreen()
      await home.addMultiplePF.ClickSelectAll()
      await home.addMultiplePF.ClickAddTheSelectPFToList()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.save()
      await training.certificationManualEntry.switchToAttachmentTab()
      await training.certificationManualEntry.attachmentsTab.clickAddFiles()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.selectAtFile()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await training.certificationManualEntry.attachmentsTab.VerifyAtFileName()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.verifyUpdateSuccessFullMessage()
      // Automated by Vijay // Date : 09/14/2021 // Sprint: Q3 Sprint 5
    });
  });

  test('AttachmentFunctional_15751', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '15751', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Vehicle')
      await loaderPage.navigateToScreen('Vehicle/Boat Search')
      await vehicle.module.switchToVehicleBoatSearch()
      await vehicle.vehicleBoatSearch.clickAddVehicle()
      await vehicle.module.switchToVehicleBoatEntry()
      await vehicle.vehicleBoatEntry.enterAtVinNo()
      await vehicle.vehicleBoatEntry.enterAtYear()
      await vehicle.vehicleBoatEntry.enterAtMake()
      await vehicle.vehicleBoatEntry.enterAtModel()
      await vehicle.vehicleBoatEntry.enterAtStyle()
      await vehicle.vehicleBoatEntry.enterAtCustom1()
      await vehicle.vehicleBoatEntry.clickMainTab()
      await vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtPlateNumber()
      await vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.selectAtState()
      await vehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.enterAtNameID()
      await vehicle.module.switchToVehicleBoatEntry()
      await vehicle.vehicleBoatEntry.saveScreen()
      await vehicle.module.switchToVehicleBoatEntry()
      await vehicle.vehicleBoatEntry.verifyAdditionSuccessfulMessage()
      const readVehicleNo = await vehicle.vehicleBoatEntry.readPlateAndState()
      await vehicle.vehicleBoatEntry.closeScreen()
      await loaderPage.navigateToScreen('Tow')
      await tow.module.switchToTowScreen()
      await tow.towScreen.clickAddNewButton()
      await tow.module.switchToTowEntry()
      await tow.towEntry.enterAtCallNo()
      await tow.towEntry.enterAtPlateNo(readVehicleNo.substring(0, readVehicleNo.length()-4))
      await tow.towEntry.selectAtPlateState()
      await vehicle.module.switchToVehicleBoatEntry()
      await vehicle.vehicleBoatEntry.clickSelectButton()
      await tow.module.switchToTowEntry()
      await tow.towEntry.clickTowTab()
      await tow.towEntry.towTab.selectAtEquipmentUsed()
      await tow.towEntry.towTab.tabTowRequestDate()
      await tow.towEntry.towTab.selectAtWrecker()
      await tow.towEntry.towTab.selectAtTowReason()
      await tow.towEntry.save()
      //tow.towEntry.verifyAtPlateVInNo(0);		// Values disappear in Automation DB
      //tow.towEntry.verify1002AdditionSuccessfulFooterMessage();
      await tow.towEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.clickTowSummaryDetails()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('15751')
      // String readPDF = objectIdentification.readPDF.ReadPDF('15751')
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF, 'Accident')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      //objectIdentification.readPDF.ReadPDF(' Names related to Arrest?');
      await loaderPage.navigateToScreen('Tow')
      await tow.module.switchToTowScreen()
      await tow.towScreen.enterAtPlateNo()
      await tow.towScreen.clickSearchButton()
      await tow.towScreen.verifyAtTowNoInGrid()
      await tow.towScreen.selectRowByAtTowNo()
      await tow.module.switchToTowEntry()
      //tow.towEntry.verifyAtCallNo();
      await tow.towEntry.enterAtPlateNo(readVehicleNo)
      await vehicle.module.switchToVehicleBoatEntry()
      await vehicle.vehicleBoatEntry.clickSelectButton()
      await tow.module.switchToTowEntry()
      await tow.towEntry.verifyAtPlateVInNo(0)
      await tow.towEntry.save()
      await tow.towEntry.verify1003UpdateSuccessfulFooterMessage()
      await tow.towEntry.clickPrintIcon()
      const randomNumber = Randomized.getRandomNumber()
      await home.module.switchToSelectReport()
      await home.selectReport.clickTowSummaryDetails()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('15751'+'_'+randomNumber)
      // String readPDF1 = objectIdentification.readPDF.ReadPDF('15751'+'_'+randomNumber)
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF1, 'Abandoned')
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF1, BaseData.getVehicleModuleValue('Model'))
      await home.kPITempPDFScreen.verifyContentInPDF(readPDF1,  BaseData.getVehicleModuleValue('VinNo'))
    });
  });

  test('AttachmentFunctional_ImageEditor', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, 'ImageEditor', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.selectNameByLastNameAndFirstName()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyImageNotAvailable()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyAllButtonsDisplayed()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.TabDateTime()
      await home.updateImageScreen.verifyDateTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.SaveAndClose()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickCheckedCheckbox()
      await home.allImagesScreen.ClickDeleteIconOfPrimaryImage()
      await home.allImagesScreen.clickNonPrimaryImageZoomIcon()
      await home.allImagesScreen.clickPrimaryImageViewIcon()
      await home.module.switchToFullImageViewScreen()
      await home.imageFullViewScreen.clickDeleteIcon()
      await home.imageFullViewScreen.close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickResetIcon()
      await names.nameEntry.verifyProfileImageDisplayed()
    });
  });

  test('AttachmentFunctional_ImageEditor_2', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, 'ImageEditor_2', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.EnterAtLastName()
      await names.nameSearch.EnterAtFirstName()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.selectNameByLastNameAndFirstName()
      await names.module.switchToNameEntry()
      await names.nameEntry.verifyProfileImageDisplayed()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyAllButtonsDisplayed()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.TabDateTime()
      await home.updateImageScreen.verifyDateTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.SaveAndClose()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyFirstImageCheckedCheckboxChecked1()
      await home.allImagesScreen.verifySecondImageCheckedCheckboxUnchecked()
      await home.allImagesScreen.ClickDeleteIconOfPrimaryImage()
      await home.allImagesScreen.ClickDeleteIconOfNonPrimaryImages()
      await home.allImagesScreen.clickNonPrimaryImageZoomIcon()
      await home.module.switchToFullImageViewScreen()
      await home.imageFullViewScreen.clickDeleteIcon()
      await home.imageFullViewScreen.verifyDeleteConfirmPopup()
      await home.module.switchToFullImageViewScreen()
      await home.imageFullViewScreen.clickDeleteIcon()
      await home.imageFullViewScreen.close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickResetIcon()
      await names.nameEntry.verifyProfileImageDisplayed()
      await names.nameEntry.closeTheScreen()
      await names.module.switchToNameSearch()
      await names.nameSearch.ClickRefreshButton()
      await names.nameSearch.verifyPictureIconInGrid()
      // Automated By : - Abinaya M on 09/21/2023
      // Sprint :-Â  :Â Quarter 3 :Â  Sprint 18
      // Type of Test case : - Defect - CRM # :-158244
    });
  });

  test('AttachmentFunctional_16344', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '16344', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormRefNo()
      await qA.qAFormEntry.EnterAtFormName()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickPDFRadioButton()
      await qA.qAFormEntry.selectPdfFile()
      await qA.qAFormEntry.verify6071LargerFilePopup();//
      await qA.qAFormEntry.SaveScreen()
      await qA.qAFormEntry.SelectReadyForUseCheckBox()
      await qA.qAFormEntry.ClickSaveNCloseButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName()
      await settings.qaForms.clickManageRepository()
      await qA.module.switchToQuestionnaireRepository()
      await qA.questionnarieRepository.EnterAtRepositoryID()
      await qA.questionnarieRepository.clickAddButton()
      await qA.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.NavigateToQAFormsTab()
      await personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.clickReportSaveNExit()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.NavigateToQAFormsTab1()
      await personnel.personnelEntry.personnelEntryQAFormsTab.clickRefreshButton()
      await personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtPFNoBasedOnFormNameInGrid()
      await personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtPFNameBasedOnFormNameInGrid()
      // by Mahesha
    });
  });

});

test.describe('AttachmentChecklist', () => {
  test('AttachmentChecklist_9125', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '9125', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter290AsTrue()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.verifySignButtonIsDisplayed()
      await home.signatureScreen.verifySaveButtonIsDisplayed()
      await home.signatureScreen.verifySaveNCloseButtonIsDisplayed()
      await home.signatureScreen.Close()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickBackButton()
      // Check the Parameter Use Legacy Signature Control (290) set as False
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter290AsFalse()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickTypeButton()
      await home.signatureScreen.enterAtSignTextArea('AutoTest')
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickApplyButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickClearSignatureButton()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickApplyButton()
      await home.signatureScreen.verifyProvideSignaturePopUpMessage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Check the Phoenix eSign with Draw option
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickDrawButton()
      await home.signatureScreen.drawSign()
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickApplyButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickClearSignatureButton()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickApplyButton()
      await home.signatureScreen.verifyProvideSignaturePopUpMessage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Check the Phoenix eSign with File option
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickFileButton()
      await home.signatureScreen.verifyFileSizeMustBeLessThan100KBlabel()
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickBrowseSignatureImageFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('PIC.jpg')
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickApplyButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickClearSignatureButton()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickApplyButton()
      await home.signatureScreen.verifyProvideSignaturePopUpMessage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Check the Phoenix eSign with File option - file size more than 100KB
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickFileButton()
      await home.signatureScreen.verifyFileSizeMustBeLessThan100KBlabel()
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickBrowseSignatureImageFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Image2.jpg')
      await home.signatureScreen.verifyFileOfSizeLessThan100KBAcknowledgePopup()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Check the Phoenix eSign with File option - different format - File size more
      // than 100KB
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickFileButton()
      await home.signatureScreen.verifyFileSizeMustBeLessThan100KBlabel()
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickBrowseSignatureImageFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('BotPNG.png')
      await home.signatureScreen.verifyFileOfSizeLessThan100KBAcknowledgePopup()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Check the Phoenix eSign with File option - different format - File size less
      // than 100KB
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickFileButton()
      await home.signatureScreen.verifyFileSizeMustBeLessThan100KBlabel()
      await home.signatureScreen.verifyAtName()
      await home.signatureScreen.verifyNameIsDisabled()
      await home.signatureScreen.clickBrowseSignatureImageFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('TestPNG.png')
      await home.signatureScreen.verifyInvalidFileFormatAcknowledgeMessage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickCancelButton()
      // Signature screen PhoneNo verification
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.selectRowByAtPhoneTypeInGrid()
      const readPhoneNo = await personnel.personnelEntry.personnelEntryMainTab.readPhoneNo()
      await personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage()
      await home.module.switchToSignatureScreen()
      await home.signatureScreen.clickUsePhoneButton()
      await home.signatureScreen.verifyAtActivePhoneNo(readPhoneNo)
      await home.signatureScreen.clickCancelButton()
      await personnel.module.switchToPersonnelEntry()
      // Use Phone functionality not covered in Automation scripts
      // Check the Phoenix eSign with Use Phone option with phone number already
      // configured
      //				personnel.switchToPersonnelEntry();
      //				personnel.personnelEntry.clickMainTab();
      //				personnel.personnelEntry.personnelEntryMainTab.selectAtPhoneNoType();
      //				String readPhoneNo = personnel.personnelEntry.personnelEntryMainTab.readPhoneNo();
      //				personnel.personnelEntry.personnelEntryMainTab.clickSignatureImage();
      //				home.switchToSignatureScreen();
      //				home.signatureScreen.clickUsePhoneButton();
      //				home.signatureScreen.verifyAtActivePhoneNo(readPhoneNo);
      //				home.signatureScreen.clickSendButton();
    });
  });

  test('AttachmentChecklist_48804', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48804', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsDataBase()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.VerifyAtFileName1()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.close()
      //scenario 2
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsNetwork()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickBackButton()
      await personnel.personnelSearch.clearPF();//Created by ranjith
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickBulkAttachmentRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Drug Form.pdf')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_wav.wav')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_CR3.CR3')
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.verifyAtFileName(1)
      await home.multiFilesAttachments.verifyAtFileName(5)
      await home.multiFilesAttachments.verifyAtFileName(6)
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.close()
      //scenario 3
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsOnbase()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickBackButton()
      await personnel.personnelSearch.clearPF();//Created by ranjith
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.ClickLinkRadioButton()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.EnterAtLink()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.VerifyAtFileName()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.close()
      //scenario 4
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsAzureCloud()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickBackButton()
      await personnel.personnelSearch.clearPF();//Created by ranjith
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickFolderRadioButton()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectFolder()
      await personnel.module.switchToPersonnelEntry()
      await popupPage.confirm.checkAlertIsPresentOrNot()
      //popup.confirm.verifyContainsMessageInPopup('This will upload all files from \'folder\'. Only do this if you trust the site');
      //popup.confirm.noWithContainsMessage('This will upload all files from \'folder\'. Only do this if you trust the site');
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtFolderCategory();//created by ranjith
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickFolderAddButton();//created by ranjith
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.VerifyAtFileName(2);//created by ranjith
      // objectIdentification.attachmentsTab.VerifyAtFileName(3);//created by ranjith
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      // Automated By :- Mohamed Absar A on 01/28/2025 // Type:- Defect // Q1 Sprint 1 2025 CRM#160131
    });
  });

  test('AttachmentChecklist_50825', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '50825', async () => {
      await loginPage.loginScreen.Logon()
      // Phoenix Form
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormName()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.clickPhoenixFormRadioButton()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await qA.qAFormEntry.SelectReadyForUseCheckBox()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.saveAndCloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid()
      await settings.qaForms.rightClickAndSelectOptionByFormNameInGrid(2)
      await qA.module.switchToQuestionnaireRepository()
      await qA.questionnarieRepository.EnterAtRepositoryID()
      await qA.questionnarieRepository.clickAddButton()
      await qA.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qA.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.NavigateToQAFormsTab()
      await personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameContainsInSelectForm(2)
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      // PDF
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormName1()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickMainTab()
      await qA.qAFormEntry.mainTab.clickPDFRadioButton()
      await qA.qAFormEntry.mainTab.clickChooseFileButton()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Crash.pdf')
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await qA.qAFormEntry.SelectReadyForUseCheckBox()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.saveAndCloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit1()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid(1)
      await settings.qaForms.rightClickAndSelectOptionByFormNameInGrid(1)
      await qA.module.switchToQuestionnaireRepository()
      await qA.questionnarieRepository.EnterAtRepositoryID()
      await qA.questionnarieRepository.clickAddButton()
      await qA.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qA.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.NavigateToQAFormsTab()
      await personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameContainsInSelectForm(1)
      //Automated By : - chandrasekar.v on 2/19/2025
      //Sprint :-  : Quarter 1  :  Sprint 2
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Ungrouped', () => {
  test('Ungrouped_13868', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '13868', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.selectAtTextName()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.switchToAttachmentScreen()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.selectAtImageFile()
      await home.attachment.ClickAddButton()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyUpdateSuccessFullMessage()
      await settings.textMgmt.switchToAttachmentScreen()
      await home.attachment.verifyAtFileName('img2.png')
      await settings.module.switchToTextMgmt()
      // Automated By : - Abinaya M on 05/09/2023
      // Sprint :-Â 2023 :Â Quarter 1 :Â  Sprint 9
    });
  });

  test('Ungrouped_277264', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '277264', async () => {
      await loginPage.loginScreen.LogonForFire()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.clickAccountabilityTagReportInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('277264A')
      // String readPDF = objectIdentification.readPDF.ReadPDF('277264A')
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, 'Account, Person')
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.clickAccountabilityIDReportInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('277264B')
      // String readPDF1 = objectIdentification.readPDF.ReadPDF('277264B')
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF1, 'Account, Person')
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      // Attachment script //Stalin
      // Stalin
    });
  });

  test('Ungrouped_258916', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '258916', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormRefNo()
      await qA.qAFormEntry.EnterAtFormName()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickPDFRadioButton()
      await qA.qAFormEntry.selectPdfFile()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickPDFLink()
      await qA.module.SwitchToManageQuestionsEntry()
      await qA.module.switchToPDFFormScreen()
      await qA.pdfFormScreen.close()
      await qA.module.SwitchToQAFormEntry()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Attachment Script //Stalin
      // //Mahesha
    });
  });

  test('Ungrouped_256803', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '256803', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter36AsHttps()
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.selectTypeAsForm(); // error detected by dinesh, changes made in method level.
      await settings.reportRepository.enterScreenIDAs2544()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.selectAtGridrowByName()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickDownloadButton(); // error detected by dinesh
      await settings.closeActiveWindow()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.shareDownloadedFileToServerAsTestCaseID(); // error detected by dinesh
      await settings.sharedCodes.clickUploadButton()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickSelectButton()
      await settings.reportRepositoryEntry.selectPDFAtTestcaseID()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickUploadPDFButton()
      await settings.reportRepositoryEntry.verifyUploadedSuccessfulFooterStatusMessage(); // error detected by dinesh
      await settings.reportRepositoryEntry.close()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyDeleteCustomReportButtonEnabled()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      // Attachment Script //Stalin
      // case // By
      // Stalin
    });
  });

  test('Ungrouped_254474', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '254474', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter36AsHttps()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.selectAtType()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.selectAtGridrowByName()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickDownloadButton()
      await settings.closeActiveWindow()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickUploadButton()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickSelectButton()
      await settings.reportRepositoryEntry.selectPDFFile()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickUploadPDFButton(); // error detected by dinesh
      await settings.reportRepositoryEntry.verifyUploadedSuccessfulFooterStatusMessage()
      await settings.reportRepositoryEntry.close()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToReportRepository()
      await settings.reportRepository.selectAtType1()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.selectAtGridrowByName1()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickDownloadButton()
      await settings.closeActiveWindow()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickUploadButton()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickSelectButton()
      await settings.reportRepositoryEntry.selectRDLFile()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickUploadPDFButton()
      await settings.reportRepositoryEntry.verifyUploadedSuccessfulFooterStatusMessage()
      await settings.reportRepositoryEntry.close()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      //Automated By : - manikandan.k on 1/4/2023
      //Sprint :-Â  :Â Quarter 1  :Â  Sprint 1
      //Module : Meaningful review
      //Type of Test case : - Defect  for 1.138
    });
  });

  test('Ungrouped_20773', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '20773', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Meaningful Review Search')
      await personnel.module.switchToMeaningfulReviewSearch()
      await personnel.meaningfulReviewSearch.clickAddNewButton()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.EnterAtPF()
      await personnel.meaningfulReviewEntry.EnterAtCaseNo()
      await personnel.meaningfulReviewEntry.saveScreen()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.switchToQAFormsTab()
      await personnel.meaningfulReviewEntry.qAFormsTab.selectAtSelectForm()
      await personnel.meaningfulReviewEntry.qAFormsTab.clickFillForm()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.enterAtName()
      await qA.questionDataEntry.clickSaveInQAForm()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.verifyAtName()
      await qA.questionDataEntry.clickReportSaveNExit()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.switchToQAFormsTab()
      await personnel.meaningfulReviewEntry.qAFormsTab.verifyAtPFNoInGrid()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.switchToAttachmentsTab()
      // objectIdentification.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.switchToApprovalTab()
      await personnel.meaningfulReviewEntry.approvalTab.selectAtAction(1)
      await personnel.meaningfulReviewEntry.approvalTab.TabDateTime()
      await personnel.meaningfulReviewEntry.approvalTab.SaveInternalTab()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.VerifyStatusAsSubmitted()
      await personnel.meaningfulReviewEntry.switchToApprovalTab()
      await personnel.meaningfulReviewEntry.approvalTab.selectAtAction(2)
      await personnel.meaningfulReviewEntry.approvalTab.TabDateTime()
      await personnel.meaningfulReviewEntry.approvalTab.SaveInternalTab()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.VerifyStatusAsApproved()
      await personnel.meaningfulReviewEntry.switchToQAFormsTab()
      await personnel.meaningfulReviewEntry.qAFormsTab.selectAtFormNameInGrid()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.enterAtName()
      await qA.questionDataEntry.clickSaveInQAForm()
      await qA.questionDataEntry.verifyAtName();//issue it is allowing to edit
      await qA.questionDataEntry.CloseScreen()
      await personnel.module.switchToMeaningfulReviewEntry()
      await personnel.meaningfulReviewEntry.switchToAttachmentsTab()
      //Attachment tab need to check whether it is allowing to edit
      // objectIdentification.attachmentsTab.selectFileByIndex(1)
      await home.module.switchToGetAttachmentScreen()
      //unable to enter in Attachment
      //Automated by  :-Kiran  Date :-5/16/2024 Quarter:-2 Sprint:-5 Module:-Personnel
    });
  });

});

test.describe('Q1Attachment2024', () => {
  test('Q1Attachment2024_29400', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '29400', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowInGrid(0)
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickBulkUploadRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.multiFilesAttachments.selectBulkAttachment()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.clickCloseButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.verifyAtFileName('9132.pdf')
      await home.attachment.verifyAtFileName('9129.pdf')
      await home.attachment.verifyAtFileName('8904_4.pdf')
      await home.attachment.verifyAtFileName('10300.pdf')
      // objectIdentification.attachmentsTab.clickAllAttachmentsCheckbox()
      // objectIdentification.attachmentsTab.verifyCheckBoxIsCheckedByFileName('9132.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsCheckedByFileName('9129.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsCheckedByFileName('8904_4.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsCheckedByFileName('10300.pdf')
      // objectIdentification.attachmentsTab.clickAllAttachmentsCheckbox()
      // objectIdentification.attachmentsTab.verifyCheckBoxIsUnCheckedByFileName('9132.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsUnCheckedByFileName('9129.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsUnCheckedByFileName('8904_4.pdf')
      // objectIdentification.attachmentsTab.verifyCheckBoxIsUnCheckedByFileName('10300.pdf')
      // objectIdentification.attachmentsTab.clickCheckBoxWithFileName('9132.pdf')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.verifyUpdateSuccessfulMessage()
      await personnel.personnelEntry.verifyattachmentTabcolorAsBlue()
      //Automated By : - chandrasekar.v on 18/06/2023
      //Sprint :-  : Quarter  2  :  Sprint 6
      //Type of Test case : - Defect 2024
    });
  });

  test('Q1Attachment2024_43937', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '43937', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('Calendar')
      await home.module.switchToCalendarScreen()
      await home.calendar.clickExportToPDFButton()
      await home.selectReport.verifySelectReportWindowIsExist()
      await home.module.switchToSelectReport()
      await home.selectReport.clickCalendarReportInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('CalendarReport' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDF('CalendarReport' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Calendar Report')
      // randomNumber = 0
      // Automated By : - Mohamed Absar A on 11/25/2024
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : 2024
      // Type of Test case : - Defect CRM#159207
    });
  });

  test('Q1Attachment2024_40867', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '40867', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsDataBase()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickBulkUploadRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Drug Form.pdf')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_wav.wav')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_CR3.CR3')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.verifyAtFileName(1)
      await home.multiFilesAttachments.verifyAtFileName(5)
      await home.multiFilesAttachments.verifyAtFileName(6)
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.clickCloseButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.verifyAtFileName('Drug Form.pdf')
      await home.attachment.verifyAtFileName('Sample_wav.wav')
      await home.attachment.verifyAtFileName('Sample_CR3.CR3')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsNetwork()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickBulkUploadRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Image1.jpg')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_wav.wav')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_CR3.CR3')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.verifyAtFileName(2)
      await home.multiFilesAttachments.verifyAtFileName(5)
      await home.multiFilesAttachments.verifyAtFileName(6)
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.clickCloseButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.verifyAtFileName('Image1.jpg')
      await home.attachment.verifyAtFileName('Sample_wav.wav')
      await home.attachment.verifyAtFileName('Sample_CR3.CR3')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsAzureCloud()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickBulkUploadRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Image2.jpg')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_wav.wav')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_CR3.CR3')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.verifyAtFileName(3)
      await home.multiFilesAttachments.verifyAtFileName(5)
      await home.multiFilesAttachments.verifyAtFileName(6)
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.clickCloseButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.verifyAtFileName('Image2.jpg')
      await home.attachment.verifyAtFileName('Sample_wav.wav')
      await home.attachment.verifyAtFileName('Sample_CR3.CR3')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsOnbase()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickBulkUploadRadioButton()
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Registration_Export.xlsx')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_wav.wav')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.clickSelectFileButton()
      await home.attachment.selectAtPDFFileName('Sample_CR3.CR3')
      await home.module.switchToMultiFilesAttachment()
      await home.multiFilesAttachments.verifyAtFileName(4)
      await home.multiFilesAttachments.verifyAtFileName(5)
      await home.multiFilesAttachments.verifyAtFileName(6)
      await home.multiFilesAttachments.clickUploadButton()
      await home.multiFilesAttachments.clickCloseButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.verifyAtFileName('Registration_Export.xlsx')
      await home.attachment.verifyAtFileName('Sample_wav.wav')
      await home.attachment.verifyAtFileName('Sample_CR3.CR3')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsDataBase()
      await settings.module.switchToSystemParamter()
      // Automated By : - Mohamed Absar A on 11/25/2024
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : 2024
      // Type of Test case : - Defect CRM#171937
    });
  });

  test('Q1Attachment2024_41558', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '41558', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPictureIcon()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.TabDateTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.Save()
      await home.module.switchToUpdateImageScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await home.updateImageScreen.SaveAndClose()
      await home.module.switchToAllImageScreen()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Personnel Entry - All Images Screen')
      await personnel.module.switchToPersonnelEntry()
      // Automated by:-Bavithra , Date :-12/14/2022 , Quarter:-4 , Sprint:-20 ,
      // Module:Home
    });
  });

  test('Q1Attachment2024_145144A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '145144A', async () => {
      await loginPage.loginScreen.Logon()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickSelect()
      await home.attachment.selectAtPDFFileName('Candidate form.pdf')
      await qA.qAFormEntry.SelectCategoryAsAdministration()
      await qA.qAFormEntry.EnterAtSortOrder()
      await qA.qAFormEntry.EnterAtFormName()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.clickM2fForm()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.EnterAtName()
      await qA.questionDataEntry.clickReportSave()
      await qA.questionDataEntry.verifyRecordNumIsNotNull()
      await qA.questionDataEntry.EnterAtReason()
      await qA.questionDataEntry.clickReportSave(); //
      await qA.questionDataEntry.verifyRecordNumberIsGenerated();//
      await qA.questionDataEntry.clickEmailIcon()
      await qA.sendEmailPopUp.enterAtTo()
      await qA.sendEmailPopUp.enterAtSubject()
      await qA.sendEmailPopUp.enterAtMessage()
      await qA.sendEmailPopUp.clickSend()
      // qA.questionDataEntry.clickReportSaveNExit();
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.clickViewFormData()
      await qA.module.SwitchToQAForm()
      await qA.qAForms.clickSearch()
      await qA.qAForms.verifyAtFormNameInGrid(0)
      await qA.qAForms.EnterAtFormName()
      await qA.qAForms.clickSearch()
      await qA.qAForms.verifyAtFormNameInGrid(0)
      await qA.qAForms.EnterFromDateAsPreviousDateAndTime()
      await qA.qAForms.EnterToDateAsCurrentDateAndTime()
      await qA.qAForms.clickSearch()
      await qA.qAForms.verifyAtFormNameInGrid(0)
      await qA.qAForms.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SelectAtCategory()
      await qA.module.switchToSharedCodes()
      await settings.maintainCodeValue.selectAtCodeValueDescription()
      await settings.maintainCodeValue.enterAtSortOrder()
      await settings.maintainCodeValue.clickUpdate()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.clickReset()
      await qA.qAFormEntry.verifyCodeValueDescriptionIsDisplayedFirstInCategoryDropdown()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated by:-Bavithra , Date :-12/14/2022 , Quarter:-4 , Sprint:-20 ,
      // Module:Home
    });
  });

  test('Q1Attachment2024_145144B', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '145144B', async () => {
      await loginPage.loginScreen.Logon()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.EnterAtFormRefNo()
      await qA.qAFormEntry.EnterAtFormName1()
      await qA.qAFormEntry.EnterAtVersion()
      await qA.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qA.qAFormEntry.clickPDFRadioButton()
      //				qA.qAFormEntry.clickSaveButton();
      //				qA.SwitchToQAFormEntry();
      //				qA.qAFormEntry.clickWindowMaximize();
      //				qA.qAFormEntry.verifyAdditionSuccessfulBottomMessage();
      //				qA.SwitchToQAFormEntry();
      await qA.qAFormEntry.clickChooseFile()
      await home.attachment.selectAtPDFFileName('Canditate Form.pdf')
      await popupPage.confirm.yes()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SaveScreen()
      await qA.module.SwitchToQAFormEntry()
      await qA.qAFormEntry.SelectReadyForUseCheckBox()
      await qA.qAFormEntry.ClickSaveNCloseButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName1()
      await settings.qaForms.clickManageRepository()
      await qA.module.switchToQuestionnaireRepository()
      await qA.questionnarieRepository.EnterAtRepositoryID()
      await qA.questionnarieRepository.selectAtCategory()
      await qA.questionnarieRepository.clickAddButton()
      await qA.questionnarieRepository.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.verifyFormAvailableInFormsLinkAdministration()
      //updated based on ID 46278 on 12/19/2024 by manikandan Q4 Sprint 12
      // Automated by :-manikandan.k
      // Date :-11/26/2024 Quarter:-4 Sprint:11
      // Module:-Names CRM - 174906
    });
  });

  test('Q1Attachment2024_46140', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '46140', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtFile()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAddButtonTwice()
      // objectIdentification.attachmentsTab.verifyAtFileNameCountInGrid()
      //Automated By: Ranjith Kumar V K
      //Date: 01/24/2025
      //Type of testcase: Functional
    });
  });

  test('Q1Attachment2024_48783', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48783', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Class Search')
      await training.module.switchToClassSearch()
      await training.classSearch.enterAtCourse()
      await training.classSearch.clickSearchLink()
      await training.classSearch.selectAtClassNoInGrid()
      await training.module.switchToTrainingClassEntry()
      await training.trainingClassEntry.clickStudentTab()
      await training.trainingClassEntry.classEntryStudentsTab.verifyAtPFCodeInGrid(1)
      await training.trainingClassEntry.classEntryStudentsTab.verifyAtPFCodeInGrid(2)
      await training.trainingClassEntry.classEntryStudentsTab.verifyAtPFCodeInGrid(3)
      await training.module.switchToTrainingClassEntry()
      await training.trainingClassEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('PersonnelTrainingClassDetail' + randomNumber)
      // String detailReport = objectIdentification.readPDF.ReadPDF('PersonnelTrainingClassDetail' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(detailReport, BaseData.getTrainingModuleValue('PFCode' + 1))
      // objectIdentification.readPDF.verifyContentInsidePDF(detailReport, BaseData.getTrainingModuleValue('PFCode' + 2))
      // objectIdentification.readPDF.verifyContentInsidePDF(detailReport, BaseData.getTrainingModuleValue('PFCode' + 3))
      // Automated by :-Sarath Date :-01/15/2025 Quarter:-1 Sprint:1 Module:-Scheduling
      // Updated by :-Sarath Date :-09/27/2025 Quarter:-3 Sprint:9 Module:-Scheduling TC - 68035A
    });
  });

  test('Q1Attachment2024_46200', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '46200', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Scheduling')
      await loaderPage.navigateToScreen('Calendar')
      await home.module.switchToCalendarScreen()
      await home.calendar.clickExportToPDFButton()
      await home.calendar.verifyErrorPopupNotArised();//Updated
      await home.module.switchToSelectReport()
      await home.selectReport.verifySelectReportWindowIsExist()
      await home.module.switchToSelectReport()
      await home.selectReport.clickCalendarReportInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('CalendarReport' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDF('CalendarReport' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Calendar Report')
      // randomNumber = 0
      // Automated By : - Manikandan k on 01/10/2025
      // Sprint :-Â Quarter 1 :Â  Sprint 01 : 2025
      // Type of Test case : - Defect CRM#169067
    });
  });

});

test.describe('Q2Defect2024', () => {
  test('Q2Defect2024_32674B', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '32674B', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Citizen Services')
      await loaderPage.navigateToScreen('Citizen Account Search')
      await citizenServices.module.switchToCitizenAccountSearch()
      await citizenServices.citizenAccountSearch.clickSearchButton()
      await citizenServices.citizenAccountSearch.selectAtCitizenNoInGrid()
      await citizenServices.module.switchToRegistrationDetails()
      await citizenServices.registrationDetails.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickSelectButton()
      await home.attachment.SelectPDFFile()
      await home.attachment.ClickAddButton()
      await home.attachment.verifyAtFileName('Crash.pdf')
      await citizenServices.module.switchToRegistrationDetails()
      await citizenServices.registrationDetails.save()
      await citizenServices.registrationDetails.verifyUpdateSuccessfulBottomMessage()
      await citizenServices.registrationDetails.verifyAttachmentTabDisplayedInBlueColor()
      //Automated By : - chandrasekar.v on 18/06/2023
      //Sprint :-  : Quarter  2  :  Sprint 6
      //Type of Test case : - Defect 2024
    });
  });

  test('Q2Defect2024_32675', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '32675', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Citizen Services')
      await loaderPage.navigateToScreen('CS Pawn Search')
      await citizenServices.module.switchToCSPawnSearch()
      await citizenServices.cSPawnSearch.clickSearchButton()
      await citizenServices.cSPawnSearch.selectAtPawnNoInGrid()
      await citizenServices.module.switchToCSPawnEntry()
      await citizenServices.cSPawnEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickSelectButton()
      await home.attachment.SelectPDFFile()
      await home.attachment.ClickAddButton()
      await home.attachment.verifyAtFileName('Crash.pdf')
      await citizenServices.module.switchToCSPawnEntry()
      await citizenServices.cSPawnEntry.save()
      await citizenServices.cSPawnEntry.verifyUpdateSuccessfulBottomMessage()
      await citizenServices.cSPawnEntry.verifyAttachmentTabDisplayedInBlueColor()
      await citizenServices.module.switchToCSPawnEntry()
      // Automated by Bavithra :- Date :-05/09/2023 Quarter:-2 Sprint:-9 Module:-Names
    });
  });

});

test.describe('namesFunctional5', () => {
  test('namesFunctional5_12120', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '12120', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.SelectNameByID()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.TabDateTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile()
      await home.updateImageScreen.Save()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.verifyAdditionSuccessFullMessage()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.switchtoUploadedImage()
      await home.updateImageScreen.VerifyImageUploaded()
      await home.updateImageScreen.Close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyFirstImageCheckedCheckboxChecked()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.TabDateTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile1()
      await home.updateImageScreen.Save()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.switchtoUploadedImage()
      await home.updateImageScreen.VerifyImageUploaded()
      await home.updateImageScreen.Close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyNewlyAddedImageCheckboxIsUnChecked()
      await home.allImagesScreen.clickPrimaryCheckbox()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.Close()
      await names.module.switchToNameEntry()
      // Automated by KIRAN :- Date :-09/19/2023 Quarter:-3 Sprint:-17 Module:-Vehicle
    });
  });

});

test.describe('2024NamesAttachments', () => {
  test('2024NamesAttachments_44378', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '44378', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Offender Search')
      await names.module.switchToOffenderSearch()
      await names.offenderSearch.enterAtNameID()
      await names.offenderSearch.clickSearch()
      await names.offenderSearch.selectRowByAtName()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.clickAddNotification()
      await names.offenderEntry.notificationTab.selectAtTypeInPopup()
      await names.offenderEntry.notificationTab.enterAtNameIDInPopup()
      await names.offenderEntry.notificationTab.clickAttachDocument()
      //updated based on ID 46278
      await names.offenderEntry.notificationTab.verifySelectFilePopupExist()
      await names.offenderEntry.notificationTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('img2.png')
      await names.offenderEntry.notificationTab.verifyAtFileName()
      await names.offenderEntry.notificationTab.clickClearButtonInPopup()
      await names.offenderEntry.notificationTab.verifyFilenameFieldIsEmpty()
      await names.offenderEntry.notificationTab.clickSelectFilePopupCancelButton()
      await names.offenderEntry.notificationTab.verifySaveButtonIsNotDispalyedInPopup()
      //updated based on ID 46278
      await names.offenderEntry.notificationTab.clickAttachDocument()
      await names.offenderEntry.notificationTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('img2.png')
      await names.offenderEntry.notificationTab.clickSaveButton()
      await names.offenderEntry.notificationTab.verifySaveButtonIsNotDispalyedInPopup()
      await names.offenderEntry.notificationTab.clickAdd()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.verifyAtTypeInGrid()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.save()
      await names.module.switchToOffenderEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await names.offenderEntry.verifyTabIsBlueInColor(BaseData.getNamesModuleValue('TabName'))
      // Added based On ID 46228
      // Automated by :-manikandan.k .
      // Date :- 12/18/2024 Quarter:-4 Sprint:12
      // Module:-Names CRM - 165791
    });
  });

  test('2024NamesAttachments_46239', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '46239', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterNameIDAsA()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.clickPseudonymAddRealNameLink()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      // objectIdentification.windowHandle.verifyWindowExists('Pseudonym Entry')
      await names.module.switchToPseudonymEntry()
      // Added based On ID 46228
      await names.pseudonymEntry.verifyAttachmentTabIsNotDisplayed()
      // Added based On ID 46228
      await names.pseudonymEntry.clickSave()
      await names.pseudonymEntry.verifyRealNameAcknowledgeMessage()
      await names.module.switchToPseudonymEntry()
      await names.pseudonymEntry.enterAtLastName()
      await names.pseudonymEntry.enterAtFirstName()
      await names.pseudonymEntry.saveScreen()
      await names.module.switchToPseudonymEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await names.pseudonymEntry.switchToAttachmentsTab();// added
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      await names.module.switchToPseudonymEntry()
      await names.pseudonymEntry.saveScreen()
      await names.module.switchToPseudonymEntry()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('1012 - Record already exists')
      await names.module.switchToPseudonymEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      // objectIdentification.manualIdentify.verifyTabIsBlueInColor(BaseData.getNamesModuleValue('TabName'));// added
      // objectIdentification.manualIdentify.verifyTabIsBlueInColor(BaseData.getNamesModuleValue('TabName1'))
      // Automated By : - Mohamed Absar A on 12/20/2024
      // Sprint :-Â Quarter 4 :Â  Sprint 12 : 2024
      // Type of Test case : - Defect CRM#170938
    });
  });

  test('2024NamesAttachments_47631', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '47631', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.enterAtArrestNo1InFrom()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.selectAtArrestNo1InGrid()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToCellTab()
      await names.arrestEntry.arrestEntryCellTab.verifyCellHistoryButtonIsDisabled();//added
      await names.arrestEntry.arrestEntryCellTab.verifyAddActivityButtonIsDisabled();//added
      await names.arrestEntry.arrestEntryCellTab.selectAtCustodyReason()
      await names.arrestEntry.arrestEntryCellTab.SelectRiskLevel()
      await names.arrestEntry.arrestEntryCellTab.EnterAtAssignCellNo()
      await names.arrestEntry.arrestEntryCellTab.enterAtAssignedBy()
      await names.arrestEntry.arrestEntryCellTab.tabOutAssignDateandTime();//added
      await names.arrestEntry.arrestEntryCellTab.SaveInternalTab()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToCellTab()
      await names.arrestEntry.arrestEntryCellTab.verifyAdditionSuccessFullMessage()
      await names.arrestEntry.arrestEntryCellTab.verifyButtonsEnabledInCellTab();//
      await names.arrestEntry.arrestEntryCellTab.clickAttachmentButton()
      await names.module.switchtoArrestJailCell();//added
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      // objectIdentification.attachmentsTab.VerifyAtFileName()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToCellTab()
      await names.arrestEntry.arrestEntryCellTab.SaveInternalTab()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToCellTab()
      await names.arrestEntry.arrestEntryCellTab.verifyUpdateSuccessFullMessage()
      await names.arrestEntry.arrestEntryCellTab.verifyAttachmentTabISBoldAndBlackColor()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.Save()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToCellTab()
      await names.arrestEntry.arrestEntryCellTab.verifyAttachmentTabISBoldAndBlackColor()
      await names.arrestEntry.arrestEntryCellTab.clickAttachmentButton()
      await names.module.switchtoArrestJailCell();//added
      // objectIdentification.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      // objectIdentification.attachmentsTab.VerifyAtFileName()
      // Automated by :-manikandan.k
      // Date :-01/20/2025 Quarter:-1 Sprint:1
      // Module:-Names CRM - 179716
    });
  });

  test('2024NamesAttachments_48521', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48521', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Offender Search')
      await names.module.switchToOffenderSearch()
      await names.offenderSearch.enterAtNameID()
      await names.offenderSearch.clickSearch()
      await names.offenderSearch.selectRowByAtName()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickFlagTab()
      await names.offenderEntry.flagTab.clickAddNew()
      await names.offenderEntry.flagTab.selectAtFlags(1)
      await names.offenderEntry.flagTab.clickUploadFile()
      await names.offenderEntry.flagTab.verifySelectPDFToUploadPopupWindowExist()
      await names.offenderEntry.flagTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('img2.png')
      await names.offenderEntry.flagTab.clickSaveButtonInPopup()
      await names.offenderEntry.flagTab.clickAddInPopup()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.save()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickFlagTab()
      await names.offenderEntry.flagTab.verifyAtFlagsInGrid(1)
      await names.offenderEntry.flagTab.clickAddNew()
      await names.offenderEntry.flagTab.selectAtFlags(2)
      await names.offenderEntry.flagTab.clickUploadFile()
      await names.offenderEntry.flagTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('img2.png')
      await names.offenderEntry.flagTab.clickClearButtonInPopup()
      await names.offenderEntry.flagTab.verifyFileNameFieldIsEmpty()
      await names.offenderEntry.flagTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('img2.png')
      await names.offenderEntry.flagTab.clickCancelButtonInPopup()
      await names.offenderEntry.flagTab.verifySaveButtonIsNotDispalyedInPopup()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.save()
      await names.module.switchToOffenderEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      // Automated by :- Naveen kumar
      // Date :-02/19/2025 Quarter:-1 Sprint:2
      // Module:-Names CRM - 180340
    });
  });

  test('2024NamesAttachments_50838', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '50838', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Gang Search')
      await names.module.switchToGangSearch()
      await names.gangSearch.ClickSearch()
      await names.gangSearch.ClickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.clickGangListReport()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('50838_' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDFUsingApache('50838_' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Gang List')
      await names.module.switchToGangSearch()
      // Automated by :- Naveen kumar
      // Date :-02/19/2025 Quarter:-1 Sprint:2
      // Module:-Names CRM - 180907
    });
  });

  test('2024NamesAttachments_48750', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48750', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Offender Search')
      await names.module.switchToOffenderSearch()
      await names.offenderSearch.clickSearch()
      await names.offenderSearch.ClickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.clickOffenderSimpleListReport()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('48750_' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDFUsingApache('48750_' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Offender Simple List')
      await names.module.switchToOffenderSearch()
      // Automated by :- Naveen kumar
      // Date :-02/24/2025 Quarter:-1 Sprint:2
      // Module:-Names CRM - 180901
    });
  });

  test('2024NamesAttachments_50847', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '50847', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Offender Search')
      await names.module.switchToOffenderSearch()
      await names.offenderSearch.clickSearch()
      await names.offenderSearch.selectRowByAtName()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.clickAddNotification()
      await names.offenderEntry.notificationTab.selectAtTypeInPopup()
      await names.offenderEntry.notificationTab.clickAttachDocument()
      await names.offenderEntry.notificationTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Drug Form.pdf')
      await names.offenderEntry.notificationTab.clickSaveButton()
      await names.offenderEntry.notificationTab.verifyAtFileName()
      await names.offenderEntry.notificationTab.clickAttachDocument()
      await names.offenderEntry.notificationTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Candidate form.pdf')
      await names.offenderEntry.notificationTab.clickClearButtonInPopup()
      await names.offenderEntry.notificationTab.clickSelectFilePopupCancelButton()
      await names.offenderEntry.notificationTab.verifyAtFileName()
      await names.offenderEntry.notificationTab.clickAdd()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await names.module.switchToOffenderEntry()
      // Automated By : Mohamed Absar A on 02/21/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#164252
    });
  });

  test('2024NamesAttachments_54995', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '54995', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Offender Search')
      await names.module.switchToOffenderSearch()
      await names.offenderSearch.clickSearch()
      await names.offenderSearch.selectRowByAtName()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.clickAddNotification()
      await names.offenderEntry.notificationTab.selectAtTypeInPopup()
      await names.offenderEntry.notificationTab.clickAttachDocument()
      await names.offenderEntry.notificationTab.clickSelectFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Drug Form.pdf')
      await names.offenderEntry.notificationTab.clickSaveButton()
      await names.offenderEntry.notificationTab.clickAdd()
      // objectIdentification.smokeTest.checkAckExist()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.selectAtTypeInGrid()
      await names.offenderEntry.notificationTab.clickAttachedFileInPopup()
      // objectIdentification.smokeTest.checkAckExist()
      await home.module.switchToGetAttachmentScreen()
      await home.getAttachment.Close()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.clickCancelButtonInNotificationPopup()
      await names.module.switchToOffenderEntry()
      await names.offenderEntry.clickNotificationTab()
      await names.offenderEntry.notificationTab.clickAttachIconInGridByAtType()
      // objectIdentification.smokeTest.checkAckExist()
      await home.module.switchToGetAttachmentScreen()
      // Automated By : - chandrasekar.v on 15/02/2024
      // Sprint :- : Quarter - 1 : Sprint - 2
      // Type of Test case : - Defect
    });
  });

  test('2024NamesAttachments_55857', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55857', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Gang Search')
      await names.module.switchToGangSearch()
      await names.gangSearch.SelectRowByAtGangName()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.ClickIdentificationTab()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.clickAddNewImageButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.clickImageCheckBox()
      await names.gangMasterEntry.identificationTab.clickUpdateImageButton()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await names.gangMasterEntry.identificationTab.clickDeleteIcon()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.verifyImageDeletedSuccessfulBottomMessage()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.SaveScreen()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.verifyAtGangName()
      await names.gangMasterEntry.closeTheScreen()
      await names.module.switchToGangSearch()
      await names.gangSearch.ClickAddNew()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.enterAtGangName(1)
      await names.gangMasterEntry.SaveScreen()
      await names.module.switchToGangMasterEntry()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.ClickIdentificationTab()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.clickAddNewImageButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.clickImageCheckBox()
      await names.gangMasterEntry.identificationTab.clickUpdateImageButton()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await names.gangMasterEntry.identificationTab.clickDeleteIcon()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.switchToMembersImageFrame()
      await names.gangMasterEntry.identificationTab.verifyImageDeletedSuccessfulBottomMessage()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.SaveScreen()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.verifyAtGangName(1)
      // Automated By :- Manikandan on 05/27/2025
      // Sprint : 05 Quarter :2 Year : 2025
      // Type of Test Case : Defect
    });
  });

});

test.describe('Q1PersonnelAttachments2025', () => {
  test('Q1PersonnelAttachments2025_48790', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '48790', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      // objectIdentification.windowHandle.verifyWindowExists('Personnel Entry')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.verifyAttachmentCategoryPopupIsDisplayed()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.EnterAtFolderName()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.verifyAttachmentCategoryPopupIsClosed()
      // objectIdentification.attachmentsTab.ClickFolderRadioButton()
      // objectIdentification.attachmentsTab.VerifyAtFileName()
      // objectIdentification.attachmentsTab.verifyAtFolderNameInGrid()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.verifyAttachmentCategoryPopupIsDisplayed()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.verifyAtFolderName()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtFolderName()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtFile()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.attachmentsTab.verifyAttachmentCategoryPopupIsClosed()
      // objectIdentification.attachmentsTab.ClickFolderRadioButton()
      // objectIdentification.attachmentsTab.VerifyAtFileName1()
      // objectIdentification.attachmentsTab.verifyAtFolderNameInGrid()
      // Automated By :- Mohamed Absar A on 01/21/2025 // Type:- Defect - CRM#175317 // Q1 Sprint 1 2025
    });
  });

  test('Q1PersonnelAttachments2025_68302', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '68302', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.mouseOverFormsLink()
      await home.forms.MouseHoverOnFormNameAndClickSubFormName()
      await qA.module.SwitchToQAFormEntrybyURL()
      await qA.questionDataEntry.EnterAtName()
      await qA.questionDataEntry.enterAtAddress()
      await qA.questionDataEntry.clickPrintIcon()
      // objectIdentification.readPDF.pressEnter()
      // int randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('68302' + randomNumber)
      // objectIdentification.readPDF.verifyDownloadedFileWithExtensionExists(
      // BaseData.getHomeModuleValue('serverPath'), '68302' + randomNumber + '.pdf')
      await qA.module.SwitchToQAFormEntrybyURL()
      await qA.questionDataEntry.saveButton()
      await qA.questionDataEntry.saveNExit()
      await home.forms.clickFormsButton()
      await home.forms.clickViewFormData()
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qA.module.SwitchToQAFormEntrybyURL()
      await qA.questionDataEntry.clickPrintIcon()
      // objectIdentification.readPDF.pressTab()
      // objectIdentification.readPDF.pressEnter()
      await qA.module.SwitchToQAFormEntrybyURL()
      await qA.questionDataEntry.clickPrintIcon()
      // objectIdentification.readPDF.pressEnter()
      // int randomNumber1 = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('68302' + randomNumber1)
      // objectIdentification.readPDF.verifyDownloadedFileWithExtensionExists(
      // BaseData.getHomeModuleValue('serverPath'), '68302' + randomNumber + '.pdf')
      await qA.questionDataEntry.saveButton()
      await qA.questionDataEntry.saveNExit()
      // Automated by :-Manikandan Date :-10/1/2025 Quarter:-3 Sprint-9 Module:-Names Type:-Defect  SetUp:-1.175
    });
  });

});

test.describe('PBPersonnelAttachment', () => {
  test('PBPersonnelAttachment_55573', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55573', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindowFor2024R2()
      await settings.approvalParameter.selectAtModuleInGrid()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.selectAtOfficerSignatureRequired(0)
      await settings.approvalParameter.selectAtSupervisorSignatureRequired()
      await settings.approvalParameter.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Injury Rpt Search')
      await personnel.module.switchToInjuryRptSearch()
      await personnel.injuryRptSearch.clickAddNew()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.selectAtPFCode()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.tabOutDateOfInjury()
      await personnel.injuryReportEntry.selectAtTypeOfInjury()
      await personnel.injuryReportEntry.save()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.verifyAdditionSuccessfulMessage()
      await personnel.module.switchToInjuryRptEntryApprovalScreen()
      await personnel.injuryRptEntryApproval.clickHoldAndSendItForApprovalLaterRadioButton()
      await personnel.injuryRptEntryApproval.enterAtSupervisor()
      await personnel.injuryRptEntryApproval.saveAndClose()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.tabOutDateOfInjury()
      await personnel.injuryReportEntry.selectAtTypeOfInjury()
      await personnel.injuryReportEntry.clickInjuryDetailTab()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtRef(0)
      await personnel.injuryReportEntry.injuryDetailTab.enterAtUnit()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtHowOccured()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtNatureAndExtentOFInjury()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtLocationOfIncident()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtTimeLostDueToInjury()
      await personnel.injuryReportEntry.injuryDetailTab.enterAtTreatmentDetails()
      await personnel.injuryReportEntry.save()
      await personnel.module.switchToInjuryReportEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await personnel.injuryReportEntry.verifyStatusAsOnHold()
      await personnel.injuryReportEntry.verifyTabcolorAsBlue('Injury Detail')
      await personnel.injuryReportEntry.clickAttachmentsTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickSelectButton()
      await home.attachment.SelectPDFFile()
      await home.attachment.ClickAddButton()
      await home.attachment.verifyAtFileName('Crash.pdf')
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.switchToQAFormTab()
      await personnel.injuryReportEntry.qaFormTab.selectAtForm()
      await personnel.injuryReportEntry.qaFormTab.clickFillForm()
      await qA.module.SwitchToQuestionDataEntry()
      await qA.questionDataEntry.clickReportSaveNExit()
      await popupPage.confirm.yes()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.switchToQAFormTab()
      await personnel.injuryReportEntry.qaFormTab.verifyAtFormInGrid()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await personnel.injuryReportEntry.verifyTabcolorAsBlue('QA Forms')
      await personnel.injuryReportEntry.switchApprovalTab()
      await personnel.injuryReportEntry.approvalTab.selectAtNewAction(0)
      await personnel.injuryReportEntry.approvalTab.tabOutDateAndTime()
      await personnel.injuryReportEntry.approvalTab.clickAuthorizeAndSignCheckbox()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.switchApprovalTab()
      await personnel.injuryReportEntry.approvalTab.verifySignImageIsEnabled()
      await personnel.injuryReportEntry.approvalTab.save()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.verifyStatusAsSubmitted()
      await personnel.injuryReportEntry.verifyTabcolorAsBlue('Approval')
      await personnel.injuryReportEntry.switchApprovalTab()
      await personnel.injuryReportEntry.approvalTab.selectAtNewAction(1)
      await personnel.injuryReportEntry.approvalTab.tabOutDateAndTime()
      await personnel.injuryReportEntry.approvalTab.clickAuthorizeAndSignCheckbox()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.switchApprovalTab()
      await personnel.injuryReportEntry.approvalTab.verifySignImageIsEnabled()
      await personnel.injuryReportEntry.approvalTab.save()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.verifyStatusAsApproved()
      await personnel.injuryReportEntry.verifyTabcolorAsBlue('Approval')
      await personnel.injuryReportEntry.switchApprovalTab()
      await personnel.injuryReportEntry.approvalTab.selectAtNewAction(2)
      await personnel.injuryReportEntry.approvalTab.tabOutDateAndTime()
      await personnel.injuryReportEntry.approvalTab.selectAtRejectionCode()
      await personnel.injuryReportEntry.approvalTab.save()
      await personnel.module.switchToInjuryReportEntry()
      await personnel.injuryReportEntry.verifyStatusAsRejected()
      await personnel.injuryReportEntry.verifyTabcolorAsBlue('Approval')
      await personnel.injuryReportEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By : - chandrasekar.v on 5/22/2025
      //Sprint :-  : Quarter 2  :  Sprint 5
      //Type of Test case : - Defect 2025
    });
  });

  test('PBPersonnelAttachment_55498', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55498', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.clickAddNew()
      await settings.module.switchToReportRepositoryEntryWithTitle()
      await settings.reportRepositoryEntry.enterAtScreenID()
      await settings.reportRepositoryEntry.enterAtFileName()
      await settings.reportRepositoryEntry.SelectAtReportType()
      await settings.reportRepositoryEntry.enterAtReportOrFormName()
      await settings.reportRepositoryEntry.selectAtCategory()
      await settings.reportRepositoryEntry.clickUploadPDFButton()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickSelectButton()
      await settings.reportRepositoryEntry.selectPDFFile()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.clickUploadPDFButton()
      await settings.reportRepositoryEntry.verifyUploadedSuccessfulFooterStatusMessage()
      await settings.reportRepositoryEntry.close()
      await settings.module.switchToReportRepositoryEntryWithTitle()
      await settings.reportRepositoryEntry.save()
      await settings.module.switchToReportRepositoryEntryWithTitle()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.reportRepositoryEntry.close()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRandomRow()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('55498' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('55498' + no)
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Name'))
      //Automated by  :-Kiran  Date :-5/16/2025  Quarter:-3  Sprint-5  Module:-Personnel Type:-Product Backlog  SetUp:-1.118
    });
  });

  test('PBPersonnelAttachment_56051', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '56051', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Entry')
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.enterAtPFCode()
      await personnel.personnelEntry.enterAtFirstName()
      await personnel.personnelEntry.enterAtLastName()
      await personnel.personnelEntry.clickMainTab()
      await personnel.personnelEntry.personnelEntryMainTab.enterAtHeight()
      await personnel.personnelEntry.personnelEntryMainTab.enterAtWeight()
      await personnel.personnelEntry.personnelEntryMainTab.selectAtEyes()
      await personnel.personnelEntry.personnelEntryMainTab.selectAtHair()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToSecurityTab()
      await personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName()
      await personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword()
      await personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword()
      await personnel.personnelEntry.personnelEntrySecurityTab.selectRoleAsLocalAdmin()
      await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton()
      await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment()
      await personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.module.switchToPersonnelEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('56051' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('56051' + no)
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Height'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Weight'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Eyes'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Hair'))
      //Automated by  :-Kiran  Date :-04/28/2025  Quarter:-2  Sprint-04  Module:-Personnel  Type:-ProductBacklog  SetUp:-1.118
    });
  });

  test('PBPersonnelAttachment_55600', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55600', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickPrintButton()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('55600' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('55600' + no)
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column1'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column2'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column3'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column4'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column5'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column6'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column7'))
      //Automated by  :-Kiran  Date :-05/22/2025  Quarter:-2  Sprint-4  Module:-Personnel  Type:-Defect  SetUp:-118
    });
  });

  test('PBPersonnelAttachment_55751', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55751', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter231AsAzureCloud()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      await home.attachment.ClickAddFilesButton()
      await home.attachment.SelectAtCategory()
      await home.attachment.ClickSelectButton()
      await home.attachment.selectAtPDFFileName('9129.pdf')
      await home.attachment.ClickAddButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAllAttachmentsCheckbox()
      // objectIdentification.attachmentsTab.clickCreateAsPDFButton()
      // objectIdentification.windowHandle.verifyWindowExists('Name Rap Sheet')
      await personnel.module.switchToPersonnelEntry()
      await home.myHome.SwitchToMessageBulletinTab()
      //Automated by  :-Kiran  Date :-05/23/2025  Quarter:-2  Sprint-5  Module:-Personnel  Type:-Prodcut backlog  SetUp:-1.118
    });
  });

  test('PBPersonnelAttachment_55705', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55705', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Med History Search')
      await personnel.module.switchToMedHistorySearch()
      await personnel.medHistorySearch.clickSearchButton()
      await personnel.medHistorySearch.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('55705' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('55705' + no)
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column1'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column2'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column3'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column4'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column5'))
      await personnel.module.switchToMedHistorySearch()
      const columnHeaderName = await personnel.medHistorySearch.getHeaderColumn()
      await personnel.injuryRptSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getColumnName(ExcelName, 'MedicalHistDetails.xls')
      // objectIdentification.readExcel.comparerRMSDataAndExcelDatawithEquals(coulmnvaluesByColumnName, columnHeaderName)
      // Automated By :- Manikandan on 05/26/2025
      // Sprint : 05 Quarter :2 Year : 2025
      // Type of Test Case : Defect
    });
  });

  test('PBPersonnelAttachment_55591', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55591', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickPrintButton()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.enterAtEnterNumberOfEmployessToTest()
      await home.pnxReportSSRSPDFScreen.clickViewReportButton()
      await home.pnxReportSSRSPDFScreen.verifyTheNoOfPFAreListed()
      await home.pnxReportSSRSPDFScreen.verifyTheOutOFTotalBottomMessage(0)
      await home.pnxReportSSRSPDFScreen.verifySignatureLabelIsDispalyed()
      await home.pnxReportSSRSPDFScreen.verifyTwoWitnessFieldIsDisplayed()
      //Automated by  :-Kiran  Date :-06/23/2025  Quarter:-2  Sprint-06  Module:-personnel  Type:-legacy  SetUp:-1.118
    });
  });

});

test.describe('PBInjuryRptSearch', () => {
  test('PBInjuryRptSearch_55185', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55185', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Injury Rpt Search')
      await personnel.module.switchToInjuryRptSearch()
      await personnel.injuryRptSearch.clickSearchButton()
      await personnel.injuryRptSearch.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('55185' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('55185' + no)
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column1'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column2'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column3'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column4'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column5'))
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('Column6'))
      await personnel.module.switchToInjuryRptSearch()
      const columnHeaderName = await personnel.injuryRptSearch.getColumnHeaderName()
      await personnel.injuryRptSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getColumnName(ExcelName, 'InjuryDetails.xls')
      // objectIdentification.readExcel.comparerRMSDataAndExcelDatawithEquals(coulmnvaluesByColumnName, columnHeaderName)
      //Automated by  :-Kiran  Date :-05/23/2025  Quarter:-2  Sprint-5  Module:-Personnel  Type:-Product backlog  SetUp:-1.118
    });
  });

  test('PBInjuryRptSearch_56852', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '56852', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Injury Rpt Search')
      await personnel.module.switchToInjuryRptSearch()
      await personnel.injuryRptSearch.clickSearchButton()
      const columnHeaderName = await personnel.injuryRptSearch.getColumnHeaderName()
      await personnel.injuryRptSearch.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('55185' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('55185' + no)
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('PFName'))
      await home.module.switchToSelectReport()
      await home.selectReport.clickExcelRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xls')
      //	Playback.threadWait();
      //	String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName();
      //	List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getData(ExcelName);
      //	objectIdentification.readExcel.comparerRMSDataAndExcelData(coulmnvaluesByColumnName, columnHeaderName);
      await home.module.switchToSelectReport()
      await home.selectReport.clickScreenRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(BaseData.getPersonnelModuleValue('PFName'))
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.clickWordRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportCrystalPDFScreen()
      await home.pnxCustomReportPDFScreen.verifyReportIsOpened()
      //Automated by  :-Kiran  Date :-05/23/2025  Quarter:-2  Sprint-5  Module:-Personnel  Type:-Product backlog  SetUp:-1.118
    });
  });

});

test.describe('2025NamesAttachments', () => {
  test('2025NamesAttachments_58189', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '58189', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Gang Search')
      await names.module.switchToGangSearch()
      await names.gangSearch.SelectRowByAtGangName()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.ClickMembersTab()
      await names.gangMasterEntry.membersTab.ClickAtNameInGrid()
      await names.module.switchToGangDetail()
      await names.gangDetailEntry.ClickMainTab()
      await names.gangDetailEntry.gangDetailMainTab.verifyAtRank()
      await names.module.switchToGangDetail()
      await names.gangDetailEntry.SaveNClose()
      await names.module.switchToGangMasterEntry()
      await names.gangMasterEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('58189')
      // String readPDF = objectIdentification.readPDF.ReadPDF('58189')
      await names.gangMasterEntry.verifyAtRankByNameId(readPDF)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getNamesModuleValue('Captain'))
      // Automated by :-Kiran Date :-06/11/2025 Quarter:-1 Sprint-6 Module:-Personnel Type:-Legacy SetUp:-1.118
    });
  });

  test('2025NamesAttachments_60369', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60369', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToActivityTab()
      await names.nameEntry.activityTab.verifyAtChargeInGridByAtActivityType(0)
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60369')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60369')
      await names.nameEntry.verifyAtChargeByActivityTypeInReport(readPDF)
      // Automated By :- Manikandan on 06/17/2025 // Sprint : 06 Quarter :2 Year :
      // 2025 // Type of Test Case : Enhancement
    });
  });

  test('2025NamesAttachments_60688', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60688', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.enterAtNameType()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtFirstName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await names.nameEntry.switchToSocialMediaTab()
      await names.nameEntry.socialMediaTab.switchToCriteriaTab()
      await names.socialMediaTabs.criteriaTab.ClickFirst1CheckBoxJustification()
      await names.socialMediaTabs.criteriaTab.ClickFirst3CheckBoxIdentification()
      await names.socialMediaTabs.criteriaTab.SaveCriteriaTab()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToSocialMediaTab()
      await names.nameEntry.socialMediaTab.switchToSitesTab()
      await names.socialMediaTabs.sitesTab.SelectAtUCAccountName()
      await names.socialMediaTabs.sitesTab.ClickAddButton()
      await names.socialMediaTabs.sitesTab.SaveSitesTab()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToSocialMediaTab()
      await names.nameEntry.socialMediaTab.switchToHistoryTab()
      await names.socialMediaTabs.socialMediaHistoryTab.EnterAtNotes()
      await names.socialMediaTabs.socialMediaHistoryTab.ClickSaveButton()
      await names.socialMediaTabs.socialMediaHistoryTab.VerifyAtNotesAdded()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToSocialMediaTab()
      await names.nameEntry.socialMediaTab.switchToAttachmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToSocialMediaTab()
      await names.nameEntry.socialMediaTab.verifyAtTabsAreBlueColorUsingIndex(1)
      await names.nameEntry.socialMediaTab.verifyAtTabsAreBlueColorUsingIndex(2)
      await names.nameEntry.socialMediaTab.verifyAtTabsAreBlueColorUsingIndex(3)
      await names.nameEntry.socialMediaTab.verifyAtTabsAreBlueColorUsingIndex(4)
      //Automated By : - Sarathkumar L on 06/16/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('2025NamesAttachments_68211', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '68211', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectNameTypeAsAdult()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.ClickNameImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      //home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile();
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.EnterDate()
      await home.updateImageScreen.EnterTime()
      await home.updateImageScreen.clickChooseFileButtonAndSelectPNGFile()
      //home.updateImageScreen.clickChooseFileButtonAndSelectJPGFile();
      await home.updateImageScreen.ClickSaveAndCloseButton()
      await home.module.switchToAllImageScreen()
      //	home.allImagesScreen.ClickDeleteIconOfPrimaryImage();
      await home.allImagesScreen.clickDeleteIconOfPrimaryImage()
      await home.allImagesScreen.VerifyConfirmationDeleteMessage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.VerifyImageDeletedSuccessfulBottomMessage()
      await home.allImagesScreen.ClickCheckedCheckbox()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.VerifyUpdateSuccessfulMessage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.clickDeleteIconOfPrimaryImage()
      await home.allImagesScreen.VerifyConfirmationDeleteMessage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.VerifyImageDeletedSuccessfulBottomMessage()
      //Automated By :- Manikandan on // Sprint :09  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

});

test.describe('LegacyPersonnelAttachment', () => {
  test('LegacyPersonnelAttachment_60442', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60442', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.clickAddNewButton()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.enterAtPFCode()
      await personnel.personnelEntry.enterAtFirstName()
      await personnel.personnelEntry.enterAtLastName()
      await personnel.personnelEntry.clickAssignmentTab()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtDivision()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtSection()
      await personnel.personnelEntry.personnelEntryAssignmentTab.tabOutEffectiveDateTime()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await personnel.personnelEntry.clickAssignmentTab()
      await personnel.personnelEntry.personnelEntryAssignmentTab.clickViewAssignmentHistoryButton()
      await personnel.module.switchToAssignmentHistoryScreen()
      await personnel.assignmentHistoryScreen.clickPrintIcon()
      await personnel.assignmentHistoryScreen.VerifyAtChangedToDivisionInGrid()
      await personnel.assignmentHistoryScreen.VerifyAtChangedToSectionsInGrid()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60442')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60442')
      await names.gangMasterEntry.verifyAtRankByNameId(readPDF)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Division')
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'AssignDttm')
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Section')
      //Automated by  :-Kiran  Date :-06/17/2025  Quarter:-2  Sprint-06  Module:-Personnel  Type:-Product Backlog  SetUp:-1.118
    });
  });

  test('LegacyPersonnelAttachment_57920', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '57920', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Med History Search')
      await personnel.module.switchToMedHistorySearch()
      await personnel.medHistorySearch.clickSearchButton()
      await personnel.medHistorySearch.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('57920' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('57920' + no)
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(readPDF, BaseData.getPersonnelModuleValue('PFName'))
      await home.module.switchToSelectReport()
      await home.selectReport.clickExcelRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xls')
      //			Playback.threadWait();
      //			String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName();
      //			List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getData(ExcelName);
      //			objectIdentification.readExcel.comparerRMSDataAndExcelData(coulmnvaluesByColumnName, columnHeaderName);
      await home.module.switchToSelectReport()
      await home.selectReport.clickScreenRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      await home.pnxReportSSRSPDFScreen.verifyContentInPDF(BaseData.getPersonnelModuleValue('PFName'))
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.clickWordRadioButton()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportCrystalPDFScreen()
      await home.pnxCustomReportPDFScreen.verifyReportIsOpened()
      // Automated By :- Manikandan on 06/16/2025 // Sprint : 06 Quarter :2 Year : 2025 // Type of Test Case : Defect
    });
  });

  test('LegacyPersonnelAttachment_70014', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '70014', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickAssignmentTab()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtType()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtTitleRank()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtDivision()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtSection()
      await personnel.personnelEntry.personnelEntryAssignmentTab.SelectAtTeam()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtSquad()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectAtGroup()
      await personnel.personnelEntry.personnelEntryAssignmentTab.tabOutEffectiveDateTime()
      await personnel.personnelEntry.personnelEntryAssignmentTab.enterEffectiveTimeAsCurrentTime()
      await personnel.personnelEntry.personnelEntryAssignmentTab.selectNextReviewDueInAsOneMonth()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.verifyUpdateSuccessfulMessage()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      const randomNumberString = Randomized.randomNumberString(100)
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60442'+randomNumberString)
      // String readPDF = objectIdentification.readPDF.ReadPDF('60442'+randomNumberString)
      await names.gangMasterEntry.verifyAtRankByNameId(readPDF)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo0'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo1'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo2'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo3'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo4'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo5'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo6'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo7'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo8'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getPersonnelModuleValue('ChangedTo9'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, Randomized.getCurrentDate('MM/dd/yy'))
      // Automated by :-Kiran Date :-09/29/2025 Quarter:-3 Sprint-9 Module:-Personnel
      // Type:-Defect SetUp:-1.175
    });
  });

});

test.describe('2025EnhancementNamesAttachments', () => {
  test('2025EnhancementNamesAttachments_60174', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60174', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.EnterAtArrestNo()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.SelectRowByAtArrestNo()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.ClickNameInfoButton()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToMainTab()
      await names.nameEntry.nameEntryMainTab.VerifyAtSex()
      await names.nameEntry.nameEntryMainTab.VerifyAtRace()
      await names.nameEntry.nameEntryMainTab.VerifyAtEthnic()
      await names.module.switchToNameEntry()
      await names.nameEntry.closeTheScreen()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60174')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60174')
      // String bookingFieldValueInReportByAtArrestNoUsingIndex = names.arrestEntry
      // .getBookingFieldValueInReportByAtArrestNoUsingIndex(readPDF, 1)
      await names.arrestEntry.verifyAtSexByComparingPDFvalues(bookingFieldValueInReportByAtArrestNoUsingIndex)
      const race = await names.arrestEntry.getBookingFieldValueInReportByAtArrestNoUsingIndex(readPDF, 2)
      await names.arrestEntry.verifyAtRaceAndEthnicByComparingPDFvalues(race)
      // Automated By :- Mohamed Absar A on 06/18/2025 Type:- Legacy Q2 Sprint 6 2025
    });
  });

});

test.describe('2025HomeLegacyAttachments', () => {
  test('2025HomeLegacyAttachments_55885A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55885A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.ClickMessageSearchImageButton()
      await home.module.switchToMessageSearch()
      await home.messageSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String recentDownloadedExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> columnNames = objectIdentification.readExcel.getColumnName(recentDownloadedExcelName,
      // 'ChatMsgSrch.xls')
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 1)
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 2)
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 3)
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 4)
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 5)
      await home.messageSearch.verifyAtExcelColumnName(columnNames, 6)
      //Automated By : - Sarathkumar L on 06/16/2025
      //Quarter 2  :  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

});

test.describe('2025SettingsLegacyAttachments', () => {
  test('2025SettingsLegacyAttachments_60462', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60462', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      const columnValueInGrid = await settings.storageLocation.getColumnValueInGrid(1)
      const columnValueInGrid1 = await settings.storageLocation.getColumnValueInGrid(2)
      const columnValueInGrid2 = await settings.storageLocation.getColumnValueInGrid(3)
      await settings.storageLocation.clickPrintIcon();//created
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60462')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60462')
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid)
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid1)
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid2)
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToStorageLocation()
      const columnHeaderName = await settings.storageLocation.getHeaderColumn()
      await settings.storageLocation.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getColumnName(ExcelName,'StorageLocation.xls')
      // objectIdentification.readExcel.comparerRMSDataAndExcelDatawithEquals(coulmnvaluesByColumnName, columnHeaderName)
      await settings.module.switchToStorageLocation()
      // Automated By :- Manikandan on 06/23/2025 // Sprint : 06 Quarter :2 Year :
      // 2025 // Type of Test Case : Defect
    });
  });

  test('2025SettingsLegacyAttachments_60331', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60331', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Show Users')
      await settings.module.switchToShowUsers()
      const columnValueInGrid1 = await settings.showUsers.getColumnValueInGrid(1)
      const columnValueInGrid2 = await settings.showUsers.getColumnValueInGrid(2)
      const columnValueInGrid3 = await settings.showUsers.getColumnValueInGrid(3)
      await settings.module.switchToShowUsers()
      const columnValueInGrid4 = await settings.showUsers.getColumnValueInGrid(4)
      await settings.showUsers.clickPrintButton();//created
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60331')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60331')
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid1)
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid2)
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid3)
      // objectIdentification.readPDF.comparerRMSDataAndPDFDataWithContains(readPDF, columnValueInGrid4)
      await home.pnxReportSSRSPDFScreen.ClosePnxReportSSRSPDFScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToStorageLocation()
      //Automated By : - Sarathkumar L on 06/17/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('2025SettingsLegacyAttachments_60362', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60362', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      const interfaceColumnValueInGrid = await settings.fTPInterfaceSearch.getInterfaceColumnValueInGrid('Interface')
      const hostSiteColumnValueInGrid = await settings.fTPInterfaceSearch.getInterfaceColumnValueInGrid('HostSite')
      await settings.fTPInterfaceSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> excelData = objectIdentification.readExcel.getData(ExcelName)
      // objectIdentification.readExcel.comparerRMSDataAndExcelData(excelData, interfaceColumnValueInGrid)
      // objectIdentification.readExcel.comparerRMSDataAndExcelData(excelData, hostSiteColumnValueInGrid)
      await settings.module.switchToFTPInterfaceSearch()
      //Automated By : - Sarathkumar L on 06/18/2025
      //Sprint :-Â  :Â Quarter  2:Â  Sprint  6 2025
      //Type of Test case : - Legacy
    });
  });

  test('2025SettingsLegacyAttachments_60338', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60338', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ColumnName = objectIdentification.readExcel.getColumnName(ExcelName,'DocumentRepository.xls')
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 0)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 1)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 2)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 3)
      // Automated By : - Sarathkumar L on 06/25/2025
      //Sprint :-  : Quarter  2  :  Sprint 6  2025
      // Type of Test case : Legacy
    });
  });

  test('2025SettingsLegacyAttachments_60323', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60323', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.clickExcelIcon();//created
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ColumnName = objectIdentification.readExcel.getColumnName(ExcelName,'CodeType.xls')
      await settings.coded.verifyExcelColumnName(ColumnName, 0)
      await settings.coded.verifyExcelColumnName(ColumnName, 1)
      await settings.coded.verifyExcelColumnName(ColumnName, 2)
      await settings.coded.verifyExcelColumnName(ColumnName, 3)
      await settings.module.switchToCodedScreen()
      // Automated By : - Sarathkumar L on 06/26/2025
      //Sprint :-  : Quarter  2  :  Sprint 6  2025
      // Type of Test case : Legacy
    });
  });

  test('2025SettingsLegacyAttachments_55755', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55755', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickExcelIcon();//created
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> columnValues = objectIdentification.readExcel.getColumnName(ExcelName,'Form Inquiry.xls')
      await settings.qaForms.verifyExcelColumnName(columnValues, 0)
      await settings.qaForms.verifyExcelColumnName(columnValues, 1)
      await settings.qaForms.verifyExcelColumnName(columnValues, 2)
      await settings.qaForms.verifyExcelColumnName(columnValues, 3)
      await settings.qaForms.verifyExcelColumnName(columnValues, 4)
      await settings.qaForms.verifyExcelColumnName(columnValues, 5)
      await settings.qaForms.verifyExcelColumnName(columnValues, 6)
      await settings.qaForms.verifyExcelColumnName(columnValues, 7)
      await settings.qaForms.verifyExcelColumnName(columnValues, 8)
      await settings.qaForms.verifyExcelColumnName(columnValues, 9)
      await settings.qaForms.verifyExcelColumnName(columnValues, 10)
      await settings.module.switchToQAForms()
      //Automated By : Sarathkumar L on 05/27/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('2025SettingsLegacyAttachments_58060', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '58060', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickFTPInterfaceButton()
      await settings.module.switchToFTPInterfaceSearchScreen()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAllFTPInterfaceGridColumnName()
      await settings.fTPInterfaceSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ColumnName = objectIdentification.readExcel.getColumnName(ExcelName,'FTPDocument.xls')
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 0)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 1)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 2)
      await settings.fTPInterfaceSearch.verifyExcelColumnName(ColumnName, 3)
      await settings.module.switchToFTPInterfaceSearchScreen()
      //Automated By : - chandrasekar.v on 06/18/2025
      //Sprint :-  : Quarter  1  :  Sprint 5
      //Type of Test case : - Defect 2025
    });
  });

  test('2025SettingsLegacyAttachments_60524', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60524', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.clickBarcodeBatchPrint()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToFrmPnxRpt()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('AnimalCaseDetailReport' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDF('AnimalCaseDetailReport' + randomNumber)
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.verifyColunmValuInsidePDF(readPDF)
      await settings.module.switchToStorageLocation()
      //Automated By :- Manikandan on // Sprint :07  Quarter : 3 Year : 2025  // Test Case : Defect
    });
  });

});

test.describe('2025EAAttachmentsPB', () => {
  test('2025EAAttachmentsPB_55858', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '55858', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Employment Applicants')
      await loaderPage.navigateToScreen('Job Listings')
      await employmentApplicants.module.switchToJobListings()
      await employmentApplicants.jobListings.clickAddNewButton()
      await employmentApplicants.module.switchToJobEntry()
      await employmentApplicants.jobEntry.enterAtJobName()
      await employmentApplicants.jobEntry.enterAtJOBNoEdit()
      await employmentApplicants.jobEntry.saveScreen()
      await employmentApplicants.jobEntry.clickMainTab()
      await employmentApplicants.jobEntry.jobEntryMainTab.checkMandateResumeCheckBox()
      await employmentApplicants.module.switchToJobEntry()
      await employmentApplicants.jobEntry.clickSave()
      await employmentApplicants.jobEntry.verifyPleaseAttachResumePopup()
      await employmentApplicants.module.switchToJobEntry()
      await employmentApplicants.jobEntry.clickAttchmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await employmentApplicants.module.switchToJobEntry()
      await employmentApplicants.jobEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await employmentApplicants.module.switchToJobEntry()
      // Automated By : - Sarathkumar L on 08/20/2025
      //Sprint :-  : Quarter  3  :  Sprint 8  2025
      // Type of Test case : Defect
    });
  });

});

test.describe('Q3S8HomeDefectAttachments2025', () => {
  test('Q3S8HomeDefectAttachments2025_62883', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '62883', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('Phone Book Search')
      await home.module.switchToPhoneBookSearchScreen()
      await home.phoneBookSearch.enterAtLastName()
      await home.phoneBookSearch.enterAtFirstName()
      await home.phoneBookSearch.ClickSearchButton()
      await home.phoneBookSearch.selectAtNameInGrid()
      await home.module.switchToPhoneBookContactEntry()
      await home.phoneBookContactEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToFrmPnxRpt()
      await home.selectReport.downloadReport()
      const randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('62883' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDF('62883' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getHomeModuleValue('BookName'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getHomeModuleValue('PhoneType'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF,
      // BaseData.getHomeModuleValue('PhoneNumber'))
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.getHomeModuleValue('Extn'))
      //Automated By : - Bavithra on 08/18/2025
      //Sprint :-  : Quarter 3  :  Sprint 8
    });
  });

});

test.describe('TrainingDefectAttachments', () => {
  test('TrainingDefectAttachments_60321', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60321', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Class Search')
      await training.module.switchToClassSearch()
      await training.classSearch.clickSearchLink()
      await training.classSearch.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid(1)
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60321A')
      // String readPDF = objectIdentification.readPDF.ReadPDF('60321A')
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Personnel Training Class Summary Report')
      await home.selectReport.closePnxReportServerScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid(2)
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60321B')
      // String readPDF1 = objectIdentification.readPDF.ReadPDF('60321B')
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF1, 'Personnel Training Class Summary Report')
      await home.selectReport.closePnxReportServerScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid(3)
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('60321C')
      // String readPDF2 = objectIdentification.readPDF.ReadPDF('60321C')
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF2, 'Personnel Training Class Summary Report')
      await home.selectReport.closePnxReportServerScreen()
      //Automated By : - chandrasekar.v on 7/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('TrainingDefectAttachments_70532', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '70532', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Instructor Search')
      await training.module.switchToInstructorSearch()
      await training.instructorSearch.clickSearchLink()
      await training.instructorSearch.clickInstructorNameRadioButton();//created
      await training.module.switchToInstructorSearch()
      await training.instructorSearch.maximizeTheScreenUsingRobotClass()
      await training.instructorSearch.verifyTwoTablesNotDisplayed();//created
      // Automated By :- Mohamed Absar A on 10/15/2025 // Type:- Defect // Q4 Sprint 10 2025 CRM#179722
    });
  });

});

test.describe('2025SettingsDefectAttachments', () => {
  test('2025SettingsDefectAttachments_63547', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '63547', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.clickUploadeIcon()
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.customDocHelpEntryUploadeWindow.clickSelectButton()
      await home.attachment.SelectPDFFile()
      await settings.customDocHelpEntryUploadeWindow.clickAddDocumentButton()
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGrid()
      await settings.module.switchToCustomDocHelpEntry()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('2025SettingsDefectAttachments_60560', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60560', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtSecurityScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.clickUploadeIcon()
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.customDocHelpEntryUploadeWindow.clickSelectButton()
      await home.attachment.SelectPDFFile()
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.customDocHelpEntryUploadeWindow.enterAtSortOrder()
      await settings.customDocHelpEntryUploadeWindow.clickAddDocumentButton()
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtDescription()
      await settings.customDocHelpEntry.enterAtCustomDescription()
      await settings.customDocHelpEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.customDocHelpEntry.clickResetButton()
      await settings.customDocHelpEntry.enterAtScreenID(1)
      await settings.customDocHelpEntry.enterAtSecurityScreenID(1)
      await settings.customDocHelpEntry.enterAtDocumentTitle(1)
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.enterAtSortOrder()
      await settings.customDocHelpEntry.clickAdd()
      await settings.customDocHelpEntry.save()
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGridBasedOnFileName(1)
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGrid(1)
      await settings.customDocHelpEntry.verifySortOrderInGrid()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.enterAtScreenID(1)
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.selectAtTitleInGridRow(1)
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.selectAtTitleInGridRow(1)
      await settings.customDocHelpEntry.clickInactiveCheckBox()
      await settings.customDocHelpEntry.clickUpdateButton()
      await settings.customDocHelpEntry.save()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.reloadCustomHelpTab()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickIncludeInactiveCheckBox()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyAtRowViewedAsGrayColor(1)
      await settings.module.switchToCustomHelp()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('2025SettingsDefectAttachments_64254', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '64254', async () => {
      await loginPage.loginScreen.Logon()
      // objectIdentification.windowHandle.switchToMainWindow()
      await home.myHome.enterAtSelfProfileTextSearchBar()
      await home.module.switchToTextSearch()
      await home.textSearch.verifyFromDateAsOneYearBeforeFromCurrentDate()
      await home.textSearch.verifyToDateAsCurrentDate()
      await home.textSearch.clearSearchWordsField()
      await home.textSearch.EnterTextInSearchWordsField()
      await home.textSearch.ClickSearchButton()
      const textColumnValue = await home.textSearch.getTextColumnValue()
      await home.textSearch.clickExportToExcelIcon()
      // objectIdentification.windowHandle.switchToDownloadExcelWindow(oldHandles)
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ExcelColumnValue = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName,'Text')
      await home.textSearch.verifyTextColumnValueBetweenExcelAndGrid(ExcelColumnValue,textColumnValue)
      await home.module.switchToTextSearch()
      await home.textSearch.clearSearchWordsField()
      await home.textSearch.selectAtTextTypeComboBox()
      await home.textSearch.ClickSearchButton()
      const textColumnValue1 = await home.textSearch.getTextTypeColumnValue()
      await home.textSearch.clickExportToExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName1 = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ExcelColumnValue1 = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName1,'Text Type')
      await home.textSearch.verifyTextColumnValueBetweenExcelAndGrid(ExcelColumnValue1,textColumnValue1)
      await home.module.switchToTextSearch()
      // objectIdentification.windowHandle.switchToMainWindow()
      //Automated By : - chandrasekar.v on 8/04/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('2022Q4Enhancement', () => {
  test('2022Q4Enhancement_63658', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '63658', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickFTPInterfaceButton()
      await settings.module.switchToFTPInterfaceSearchWindow()
      await settings.fTPInterfaceSearch.clickAddButton()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.selectAtInterface()
      await settings.fTPInterfaceEntry.enterAtFolderPath()
      await settings.fTPInterfaceEntry.selectAtLocationType()
      await settings.fTPInterfaceEntry.verifyAtLogonType(1)
      await settings.fTPInterfaceEntry.verifyAtKeyFile(1)
      await settings.fTPInterfaceEntry.verifyAtKeyId(1)
      await settings.fTPInterfaceEntry.selectAtLogonType()
      await settings.fTPInterfaceEntry.selectAtKeyFile()
      await settings.fTPInterfaceEntry.selectAtKeyID()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.saveScreen()
      await settings.fTPInterfaceEntry.verifyAtLogonType(2)
      await settings.fTPInterfaceEntry.verifyAtKeyFile(2)
      await settings.fTPInterfaceEntry.verifyAtKeyId(2)
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.closeScreen()
      await settings.module.switchToFTPInterfaceSearchWindow()
      await settings.fTPInterfaceSearch.selectAtInterface()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAtHostSiteInGrid()
      // objectIdentification.windowHandle.switchToMainWindow()
      //Automated By : - chandrasekar.v on 7/28/2025
      //Sprint :-  : Quarter  3  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('DocumentManagementAttachments', () => {
  test('DocumentManagementAttachments_57972', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '57972', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Document Mgmt')
      await loaderPage.navigateToScreen('My Documents')
      await documentManagement.module.SwitchToMyDocumentSearch()
      await documentManagement.myDocumentsSearch.EnterAtDocumentTitle()
      await documentManagement.myDocumentsSearch.clickSearchButton()
      await documentManagement.myDocumentsSearch.SelectMyDocumentfromGrid()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.NavigateToBlogTab()
      await documentManagement.myDocumentEntry.myBlogTab.EnterUpdateDateTime()
      await documentManagement.myDocumentEntry.myBlogTab.EnterAtComments()
      await documentManagement.myDocumentEntry.myBlogTab.clickSaveButton()
      await documentManagement.myDocumentEntry.myBlogTab.verifyAtCommentsInGrid()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.NavigateToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectImageFile()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.NavigateToAttachmentTab()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.save();//
      await documentManagement.module.SwitchToMyDocumentEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.verifyAtTabColorAsBlueByTabName(1)
      await documentManagement.myDocumentEntry.verifyAtTabColorAsBlueByTabName(2)
      await documentManagement.myDocumentEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await documentManagement.module.SwitchToMyDocumentEntry()
      await documentManagement.myDocumentEntry.verifyAtTabColorAsBlueByTabName(1)
      await documentManagement.myDocumentEntry.verifyAtTabColorAsBlueByTabName(2)
      // Automated By :- Manikandan on 07/24/2025 // Sprint : 07 Quarter :3 Year :
      // 2025 // Type of Test Case : Defect
    });
  });

});

test.describe('DailyDefectCRMAttachmntRelated', () => {
  test('DailyDefectCRMAttachmntRelated_64093', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '64093', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Search')
      await names.module.switchToNameSearch()
      await names.nameSearch.SelectNameTypeAsAdult()
      await names.nameSearch.enterAtNameID()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.ClickAtNameID()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToNameEntryFlagTab()
      await names.nameEntry.nameEntryFlagTab.ClickAddNewButton()
      await names.nameEntry.nameEntryFlagTab.SelectFlagAsArmedDangerous()
      await names.nameEntry.nameEntryFlagTab.EnteredBy()
      await names.nameEntry.nameEntryFlagTab.clickUploadAFileButton()
      await names.nameEntry.nameEntryFlagTab.clickUploadFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Crash.pdf')
      await names.nameEntry.nameEntryFlagTab.clickSelectButton()
      await names.nameEntry.nameEntryFlagTab.ClickAddButton()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToNameEntryFlagTab()
      await names.nameEntry.nameEntryFlagTab.ClickAddNewButton()
      await names.nameEntry.nameEntryFlagTab.SelectFlagAsArmedDangerous()
      await names.nameEntry.nameEntryFlagTab.EnteredBy()
      await names.nameEntry.nameEntryFlagTab.clickUploadAFileButton()
      await names.nameEntry.nameEntryFlagTab.verifyDuplicationDataNoApperead()
      await names.module.switchToNameEntry()
      await names.nameEntry.switchToNameEntryFlagTab()
      await names.nameEntry.nameEntryFlagTab.clickUploadFile()
      // objectIdentification.filesHandle.fileAttach.fileUpload('Crash.pdf')
      await names.nameEntry.nameEntryFlagTab.clickSelectButton()
      await names.nameEntry.nameEntryFlagTab.ClickAddButton()
      await names.module.switchToNameEntry()
      await names.nameEntry.Save()
      await names.module.switchToNameEntry()
      // Automated By :- Manikandan on 09/12/2025 // Sprint : 07 Quarter :3 Year :
      // 2025 // Type of Test Case : Defect
    });
  });

  test('DailyDefectCRMAttachmntRelated_67604', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '67604', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Arrest Search')
      await names.module.switchToArrestSearch()
      await names.arrestSearch.ClickClearDateButton()
      await names.arrestSearch.EnterAtArrestNo()
      await names.arrestSearch.ClickSearchButton()
      await names.arrestSearch.SelectAtArrestNoInGrid()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToChargeTab()
      await names.arrestEntry.chargeTab.clickAtChargeInGrid(1)
      await names.arrestEntry.chargeTab.verifyUpdateButtonIsDisplayed()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.switchToAttachmentTab()
      await names.arrestEntry.attachmentsTab.clickAddFiles()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      await names.arrestEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await names.arrestEntry.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      await names.module.switchToArrestEntry()
      await names.arrestEntry.ClickSaveButton()
      await names.arrestEntry.chargeTab.verifyUpdatedDataExistChargeTabAcknPopup()
      // Automated By :- Mohamed Absar A on 08/01/2025 // Type:- Legacy // Q3 Sprint 8 2025
    });
  });

});

test.describe('2025AdmissionLegacyAttachments', () => {
  test('2025AdmissionLegacyAttachments_60692', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60692', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      await admission.module.switchToInmateSearch()
      await admission.inmateSearchScreen.clickAddNew()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.enterAtNameID()
      await admission.admissionEntry.EnterProcessStartDateNTime()
      await admission.admissionEntry.clickStartBooking()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.enterAtArrivalDetails()
      await admission.admissionEntry.mainTab.tabCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtCompltedOfficer()
      await admission.admissionEntry.mainTab.selectAtCell(2)
      await admission.admissionEntry.mainTab.verifyPreBookCompletedAsNonMandatory()
      await admission.admissionEntry.mainTab.verifyPreBookOfficerAsNonMandatory()
      await admission.admissionEntry.mainTab.selectAtCell(1)
      await admission.admissionEntry.mainTab.verifyPreBookCompletedAsMandatory()
      await admission.admissionEntry.mainTab.verifyPreBookOfficerAsMandatory()
      await admission.admissionEntry.mainTab.tabCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtCompltedOfficer()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToBookingTab()
      await admission.admissionEntry.bookingTab.selectAtInmateType()
      await admission.admissionEntry.bookingTab.selectAtConfineReason()
      await admission.admissionEntry.bookingTab.selectAtSentenceStatus()
      await admission.admissionEntry.bookingTab.selectAtSex()
      await admission.admissionEntry.bookingTab.enterAtBookingOfficer()
      await admission.admissionEntry.bookingTab.enterArrestingOfficerAndID()
      await admission.admissionEntry.bookingTab.internalSave()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MentalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MentalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalTabSave()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.SelectAtArrestingAgency()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.EnterAtAgencyCaseNo()
      await admission.admissionEntry.chargeTab.EnterAtArrestingOfficer()
      await admission.admissionEntry.chargeTab.SelectAtDocumentType()
      await admission.admissionEntry.chargeTab.enterAtStatute(1)
      await admission.admissionEntry.chargeTab.SelectAtCourt()
      await admission.admissionEntry.chargeTab.EnterArrestDate()
      await admission.admissionEntry.chargeTab.clickAddButton()
      await admission.admissionEntry.chargeTab.ClickClearButton()
      await admission.admissionEntry.chargeTab.InternalsaveTab()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.verifySentenceIconIsShowingInGridByStatute(1)
      await admission.admissionEntry.chargeTab.saveAndGoToDetainers()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToDetainersTab()
      await admission.admissionEntry.detainerTab.SelectAtDetainerType()
      await admission.admissionEntry.detainerTab.SelectAtDetainerAgency()
      await admission.admissionEntry.detainerTab.tabenteredDateAndTime()
      await admission.admissionEntry.detainerTab.clickAddButton()
      await admission.admissionEntry.detainerTab.verify30084BillThisAgencyConfirmPopupAndClikNo()
      await admission.admissionEntry.detainerTab.verifyAtDetainerType()
      await admission.admissionEntry.detainerTab.clickSaveButton()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.clickPhotoImage()
      await admission.module.switchToImageArchiveScreen()
      await home.allImagesScreen.copyImageToClipboard('PIC.jpg')
      await admission.inmateImageArchiveScreen.ClickFileButton()
      await admission.module.switchUploadImageScreen()
      await home.allImagesScreen.pasteImage()
      await admission.uploadInmateImageScreen.tabPhotoDateAndTime()
      await admission.module.switchUploadImageScreen()
      await admission.uploadInmateImageScreen.saveAndCloseScreen()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.SelectAtType()
      await admission.inmateImageArchiveScreen.SelectAtAction()
      await admission.inmateImageArchiveScreen.ClickTransmitButton()
      await admission.inmateImageArchiveScreen.verifySaveConfirmPopup()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.closeScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.verifyImageIsAvailableOnFrontView()
      await admission.admissionEntry.mugShotTab.EnterAtPhotoTakenPF()
      await admission.admissionEntry.mugShotTab.tabPhotoTakenDateAndTime()
      //				admission.admissionEntry.mugShotTab.Save();
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyImageIsAvailableOnInmateLeftPicture()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.enterAtPrintedByPF()
      await admission.admissionEntry.fingerPrintTab.tabPrintDateTime()
      await admission.admissionEntry.fingerPrintTab.saveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.tabOutIntakeCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtIntakeOfficer()
      await admission.admissionEntry.mainTab.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyInmateBookingStatusAsInprogress()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.verifyIntakeActionCreatedinSuperVisorReviewGrid(0)
      await admission.admissionEntry.mainTab.selectAtReviewTypeInGrid(0)
      await admission.admissionEntry.mainTab.verifyAtReviewType(1)
      await admission.admissionEntry.mainTab.verifyAtSupervisor()
      await admission.admissionEntry.mainTab.selectAtAction(1)
      await admission.admissionEntry.mainTab.clickUpdateButton()
      await admission.admissionEntry.mainTab.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyInmateBookingStatusAsActiveIn()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.verifyIntakeProcessCompletedDateAsReviewedDateFromGrid(0)
      // Automated By :- Mohamed Absar A on 08/01/2025 // Type:- Legacy // Q3 Sprint 8 2025
    });
  });

  test('2025AdmissionLegacyAttachments_60692A', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60692A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      await admission.module.switchToInmateSearch()
      await admission.inmateSearchScreen.clickAddNew()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.enterAtNameID()
      await admission.admissionEntry.EnterProcessStartDateNTime()
      await admission.admissionEntry.clickStartBooking()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.enterAtArrivalDetails()
      await admission.admissionEntry.mainTab.tabCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtCompltedOfficer()
      await admission.admissionEntry.mainTab.selectAtCell(2)
      await admission.admissionEntry.mainTab.verifyPreBookCompletedAsNonMandatory()
      await admission.admissionEntry.mainTab.verifyPreBookOfficerAsNonMandatory()
      await admission.admissionEntry.mainTab.selectAtCell(1)
      await admission.admissionEntry.mainTab.verifyPreBookCompletedAsMandatory()
      await admission.admissionEntry.mainTab.verifyPreBookOfficerAsMandatory()
      await admission.admissionEntry.mainTab.tabCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtCompltedOfficer()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToBookingTab()
      await admission.admissionEntry.bookingTab.selectAtInmateType()
      await admission.admissionEntry.bookingTab.selectAtConfineReason()
      await admission.admissionEntry.bookingTab.selectAtSentenceStatus()
      await admission.admissionEntry.bookingTab.selectAtSex()
      await admission.admissionEntry.bookingTab.enterAtBookingOfficer()
      await admission.admissionEntry.bookingTab.enterArrestingOfficerAndID()
      await admission.admissionEntry.bookingTab.internalSave()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MentalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MentalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalTabSave()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.SelectAtArrestingAgency()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.EnterAtAgencyCaseNo()
      await admission.admissionEntry.chargeTab.EnterAtArrestingOfficer()
      await admission.admissionEntry.chargeTab.SelectAtDocumentType()
      await admission.admissionEntry.chargeTab.enterAtStatute(1)
      await admission.admissionEntry.chargeTab.tabOutCt()
      await admission.admissionEntry.chargeTab.SelectAtCourt()
      await admission.admissionEntry.chargeTab.EnterArrestDate()
      await admission.admissionEntry.chargeTab.clickAddButton()
      await admission.admissionEntry.chargeTab.ClickClearButton()
      await admission.admissionEntry.chargeTab.InternalsaveTab()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.verifySentenceIconIsShowingInGridByStatute(1)
      await admission.admissionEntry.chargeTab.saveAndGoToDetainers()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToDetainersTab()
      await admission.admissionEntry.detainerTab.SelectAtDetainerType()
      await admission.admissionEntry.detainerTab.SelectAtDetainerAgency()
      await admission.admissionEntry.detainerTab.tabenteredDateAndTime()
      await admission.admissionEntry.detainerTab.clickAddButton()
      await admission.admissionEntry.detainerTab.verify30084BillThisAgencyConfirmPopupAndClikNo()
      await admission.admissionEntry.detainerTab.verifyAtDetainerType()
      await admission.admissionEntry.detainerTab.clickSaveButton()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.clickPhotoImage()
      await admission.module.switchToImageArchiveScreen()
      await home.allImagesScreen.copyImageToClipboard('PIC.jpg')
      await admission.inmateImageArchiveScreen.ClickFileButton()
      await admission.module.switchUploadImageScreen()
      await home.allImagesScreen.pasteImage()
      await admission.uploadInmateImageScreen.tabPhotoDateAndTime()
      await admission.module.switchUploadImageScreen()
      await admission.uploadInmateImageScreen.saveAndCloseScreen()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.SelectAtType()
      await admission.inmateImageArchiveScreen.SelectAtAction()
      await admission.inmateImageArchiveScreen.ClickTransmitButton()
      await admission.inmateImageArchiveScreen.verifySaveConfirmPopup()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.closeScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.verifyImageIsAvailableOnFrontView()
      await admission.admissionEntry.mugShotTab.EnterAtPhotoTakenPF()
      await admission.admissionEntry.mugShotTab.tabPhotoTakenDateAndTime()
      //				admission.admissionEntry.mugShotTab.Save(); // screen loading issue
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyImageIsAvailableOnInmateLeftPicture()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.enterAtPrintedByPF()
      await admission.admissionEntry.fingerPrintTab.tabPrintDateTime()
      await admission.admissionEntry.fingerPrintTab.saveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.tabOutIntakeCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtIntakeOfficer()
      await admission.admissionEntry.mainTab.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyInmateBookingStatusAsInprogress()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.verifyIntakeActionCreatedinSuperVisorReviewGrid(0)
      await admission.admissionEntry.mainTab.selectAtReviewTypeInGrid(0)
      await admission.admissionEntry.mainTab.verifyAtReviewType(0)
      await admission.admissionEntry.mainTab.verifyAtSupervisor()
      await admission.admissionEntry.mainTab.selectAtAction(1)
      await admission.admissionEntry.mainTab.enterAtComments()
      await admission.admissionEntry.mainTab.verifySupervisorReviewDateAsCurrentDate()
      await admission.admissionEntry.mainTab.clickUpdateButton()
      await admission.admissionEntry.mainTab.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyInmateBookingStatusAsInprogress()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.verifyIntakeCompletedDateAndTimeAreBlank()
      await admission.admissionEntry.mainTab.selectAtReviewTypeInGrid(0)
      await admission.admissionEntry.mainTab.verifyAtReviewType(0)
      await admission.admissionEntry.mainTab.verifyAtSupervisor()
      await admission.admissionEntry.mainTab.verifyAtAction(1)
      await admission.admissionEntry.mainTab.verifySupervisorReviewDateAsCurrentDate()
      await admission.admissionEntry.mainTab.selectAtAction(2)
      await admission.admissionEntry.mainTab.clickUpdateButton()
      await admission.admissionEntry.mainTab.tabOutIntakeCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtIntakeOfficer()
      await admission.admissionEntry.mainTab.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyInmateBookingStatusAsActiveIn()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.verifyAtActionInGrid(2)
      await admission.admissionEntry.mainTab.verifyIntakeActionCreatedinSuperVisorReviewGrid(0)
      // Automated By :- Mohamed Absar A on 08/08/2025 // Type:- Defect // Q3 Sprint 8 2025 CRM#194064
    });
  });

  test('2025AdmissionLegacyAttachments_60642', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60642', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      await admission.module.switchToInmateSearch()
      await admission.inmateSearchScreen.clickAddNew()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.enterAtNameID()
      await admission.admissionEntry.EnterProcessStartDateNTime()
      await admission.admissionEntry.clickStartBooking()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMainTab()
      await admission.admissionEntry.mainTab.tabCompletedDateAndTime()
      await admission.admissionEntry.mainTab.enterAtCompltedOfficer()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToBookingTab()
      await admission.admissionEntry.bookingTab.selectAtInmateType()
      await admission.admissionEntry.bookingTab.selectAtConfineReason()
      await admission.admissionEntry.bookingTab.selectAtSentenceStatus()
      await admission.admissionEntry.bookingTab.selectAtSex()
      await admission.admissionEntry.bookingTab.enterAtBookingOfficer()
      await admission.admissionEntry.bookingTab.enterArrestingOfficerAndID()
      await admission.admissionEntry.bookingTab.saveAndGotoMedicalScreening();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyNavigatedToMedicalScreeningTab();//
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MedicalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MedicalAttentionReq()
      await admission.admissionEntry.medicalScreeningTab.MentalIntButton()
      await admission.module.switchToQAFormEntry()
      await admission.admissionEntry.medicalScreeningTab.MentalIntakeQAForm()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMedicalScreeningTab()
      await admission.admissionEntry.medicalScreeningTab.MentalAttentionReq()
      await admission.admissionEntry.medicalScreeningTab.saveAndGotoCharges();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyNavigatedToChargesTab();//
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.SelectAtArrestingAgency()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.EnterAtAgencyCaseNo()
      await admission.admissionEntry.chargeTab.EnterAtArrestingOfficer()
      await admission.admissionEntry.chargeTab.SelectAtDocumentType()
      await admission.admissionEntry.chargeTab.enterAtStatute(1)
      await admission.admissionEntry.chargeTab.tabOutCt()
      await admission.admissionEntry.chargeTab.SelectAtCourt()
      await admission.admissionEntry.chargeTab.EnterArrestDate()
      await admission.admissionEntry.chargeTab.clickAddButton()
      await admission.admissionEntry.chargeTab.ClickClearButton()
      await admission.admissionEntry.chargeTab.InternalsaveTab()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToChargeTab()
      await admission.admissionEntry.chargeTab.verifySentenceIconIsShowingInGridByStatute(1)
      await admission.admissionEntry.chargeTab.saveAndGoToDetainers()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyNavigatedToDetainersTab();//
      await admission.admissionEntry.NavigateToDetainersTab()
      await admission.admissionEntry.detainerTab.SelectAtDetainerType()
      await admission.admissionEntry.detainerTab.SelectAtDetainerAgency()
      await admission.admissionEntry.detainerTab.tabenteredDateAndTime()
      await admission.admissionEntry.detainerTab.clickAddButton()
      await admission.admissionEntry.detainerTab.verify30084BillThisAgencyConfirmPopupAndClikNo()
      await admission.admissionEntry.detainerTab.verifyAtDetainerType()
      await admission.admissionEntry.detainerTab.clickSaveButton()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.clickPhotoImage()
      await admission.module.switchToImageArchiveScreen()
      await home.allImagesScreen.copyImageToClipboard('PIC.jpg')
      await admission.inmateImageArchiveScreen.ClickFileButton()
      await admission.module.switchUploadImageScreen()
      await home.allImagesScreen.pasteImage()
      await admission.uploadInmateImageScreen.tabPhotoDateAndTime()
      await admission.module.switchUploadImageScreen()
      await admission.uploadInmateImageScreen.saveAndCloseScreen()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.SelectAtType()
      await admission.inmateImageArchiveScreen.SelectAtAction()
      await admission.inmateImageArchiveScreen.ClickTransmitButton()
      await admission.inmateImageArchiveScreen.verifySaveConfirmPopup()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.closeScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.verifyImageIsAvailableOnFrontView()
      await admission.admissionEntry.mugShotTab.EnterAtPhotoTakenPF()
      await admission.admissionEntry.mugShotTab.tabPhotoTakenDateAndTime()
      await admission.admissionEntry.mugShotTab.Save(); // screen loading issue
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyImageIsAvailableOnInmateLeftPicture()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.saveAndGotoFingerPrintButton();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyNavigatedToFingerPrintTab();//
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.enterAtPrintedByPF()
      await admission.admissionEntry.fingerPrintTab.tabPrintDateTime()
      await admission.admissionEntry.fingerPrintTab.saveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.clearPrintedByPF();//
      await admission.admissionEntry.fingerPrintTab.clickInternalSave();//
      await admission.admissionEntry.fingerPrintTab.verify30098PleaseSelectPrintedByAcknowledgePopup();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.enterAtPrintedByPF()
      await admission.admissionEntry.fingerPrintTab.clearPrintDateTime();//
      await admission.admissionEntry.fingerPrintTab.clickInternalSave();//
      await admission.admissionEntry.fingerPrintTab.verify30033EnterPrintDateTimeAcknowledgePopup();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.tabPrintDateTime()
      await admission.admissionEntry.fingerPrintTab.saveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToFingerPrintTab()
      await admission.admissionEntry.fingerPrintTab.SelectAtMethodUsed()
      await admission.admissionEntry.fingerPrintTab.SelectIDConfirmed()
      await admission.admissionEntry.fingerPrintTab.enterAtConfirmedByPF();//
      await admission.admissionEntry.fingerPrintTab.EnterConfirmedDateTime()
      await admission.admissionEntry.fingerPrintTab.saveAndGotoAssociations();//
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.verifyNavigatedToAssociationsTab();//
      await admission.admissionEntry.verifyTabColorAsBlue(1)
      //Automated by  :-Kiran  Date :-10/16/2025  Quarter:-3  Sprint-10  Module:-Personnel  Type:-Legacy  SetUp:-1.175
    });
  });

});

test.describe('2025AdmissionDailyDefectCRMAttachments', () => {
  test('2025AdmissionDailyDefectCRMAttachments_65512', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '65512', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      await admission.module.switchToInmateSearch()
      await admission.inmateSearchScreen.EnterAtSPNNO()
      await admission.inmateSearchScreen.Search()
      await admission.inmateSearchScreen.selectAtSPNInGrid()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await home.module.switchToPnxReportSSRSPDFScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int randomNumber = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('CMS Booking Sheet' + randomNumber)
      // String readPDF = objectIdentification.readPDF.ReadPDF('CMS Booking Sheet' + randomNumber)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, BaseData.GetAdmissionModuleValue('Charge'))
      await home.module.switchToPnxReportSSRSPDFScreen()
      //Automated by  :-Kiran  Date :-07/23/2025  Quarter:-3  Sprint-7  Module:-Personnel  Type:-Defect  SetUp:-1.175
    });
  });

});

test.describe('DailyDefectAttachment', () => {
  test('DailyDefectAttachment_63933', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '63933', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToSecurityTab()
      await personnel.personnelEntry.personnelEntrySecurityTab.verifyAtRoleNameInGrid()
      await personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Inventory & Fleet')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.rolesEntryPermissionWindow.verifyDeleteCheckBoxIsEnabled()
      await settings.rolesEntry.rolesEntryPermissionWindow.clickDeleteCheckBox()
      await settings.rolesEntry.rolesEntryPermissionWindow.SaveNClose()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToAttachmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToAttachmentsTab()
      // objectIdentification.attachmentsTab.deleteAttachmentFileInGridByIndex(0)
      await popupPage.confirm.yes()
      // objectIdentification.attachmentsTab.verifyAddedAttachementNotExistInTheGrid()
      // Automated by :-Kiran Date :-08/07/2025 Quarter:-3 Sprint-7 Module:-Personnel Type:-Defect  SetUp:-1.175
    });
  });

  test('DailyDefectAttachment_65408', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '65408', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsScanDocument()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickBulkAttachmentRadioButton()
      // objectIdentification.attachmentsTab.switchToMultiFilesAttachment()
      // objectIdentification.attachmentsTab.multiFilesAttachments.clickBrowseButton()
      // objectIdentification.attachmentsTab.multiFilesAttachments.selectBulkAttachment()
      // objectIdentification.attachmentsTab.multiFilesAttachments.clickUploadButton()
      // objectIdentification.attachmentsTab.multiFilesAttachments.clickCloseButtonWithConfirm()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.switchToAttachmentTab()
      // objectIdentification.attachmentsTab.clickRefresh()
      // objectIdentification.attachmentsTab.clickAllAttachmentsCheckbox()
      // objectIdentification.attachmentsTab.clickCreateAsPDFButton()
      // objectIdentification.smokeTest.checkAckExist()
      await home.module.switchToGetAttachmentScreen()
      // objectIdentification.readPDF.DownloadReports()
      // int no = Randomized.getRandomNumber(100)
      // objectIdentification.readPDF.SaveAsPDFfileToLocation('65408' + no)
      // String readPDF = objectIdentification.readPDF.ReadPDF('65408' + no)
      // objectIdentification.readPDF.verifyContentInsidePDF(readPDF, 'Military Personnel Ave')
      // List<File> imageINPDF = objectIdentification.readPDF.getImageINPDF('65408' + no)
      //Automated By : - Sarathkumar L on 10/06/2025
      //Sprint :-  : Quarter 4  :  Sprint 10
      //Type of Test case : - Legacy 2025
    });
  });

  test('DailyDefectAttachment_64304', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '64304', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      await personnel.module.switchToPersonnelSearch()
      await personnel.personnelSearch.enterAtPF()
      await personnel.personnelSearch.clickSearchButton()
      await personnel.personnelSearch.selectRowAtPFCode()
      await home.allImagesScreen.CopyImageToclipboard()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.clickPictureIcon()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.ClickAddNewButton()
      await home.module.switchToUpdateImageScreen()
      await home.allImagesScreen.pasteImage()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.Save()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.switchtoUploadedImage()
      await home.updateImageScreen.VerifyImageUploaded()
      await home.module.switchToUpdateImageScreen()
      await home.updateImageScreen.Close()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.verifyFirstImageCheckedCheckboxChecked()
      await home.allImagesScreen.ClickUpdateButton()
      await home.allImagesScreen.VerifyUpdateSuccessfulMessage()
      await personnel.module.switchToPersonnelEntry()
      await personnel.personnelEntry.save()
      await personnel.personnelEntry.verifyUpdateSuccessfulMessage()
    });
  });

});

test.describe('Q4S10LegacyTrainingAttachments2025', () => {
  test('Q4S10LegacyTrainingAttachments2025_60393', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '60393', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Training')
      await loaderPage.navigateToScreen('Certification Search')
      await training.module.switchToCertificationSearch()
      await training.certificationSearch.clickAddNew()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.enterAtPFCode()
      await training.certificationManualEntry.verifyAtPFCode();//created
      await training.certificationManualEntry.selectAtCertification()
      await training.certificationManualEntry.verifyAtCertification();//created
      await training.certificationManualEntry.save()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.verifyAdditionSuccessFullMessage()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.ClickMainTab()
      await training.certificationManualEntry.EnterAtEarnedCEU()
      await training.certificationManualEntry.verifyAtEarnedCEU();//created
      await training.certificationManualEntry.EnterAtEarnedHours()
      await training.certificationManualEntry.verifyAtEarnedHours();//created
      await training.certificationManualEntry.enterAtReason();//created
      await training.certificationManualEntry.verifyAtReason()
      await training.certificationManualEntry.enterAtCertificationOrLicense()
      await training.certificationManualEntry.verifyAtCertificationOrLicense();//created
      await training.certificationManualEntry.enterAtEnteredBy()
      await training.certificationManualEntry.verifyAtEnteredBy();//created
      await training.certificationManualEntry.TabOutEnteredDate()
      await training.certificationManualEntry.verifyEnteredDateAsCurrentDate();//created
      await training.certificationManualEntry.InternalSave()
      await training.certificationManualEntry.VerifyUpdateSuccessfulAcknowledgeMessage()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.switchToAttachmentTab()
      await training.certificationManualEntry.attachmentsTab.clickAddFiles()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.selectAtFile()
      await training.certificationManualEntry.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await training.certificationManualEntry.attachmentsTab.VerifyAtFileName()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.save()
      await training.module.switchToCertificationManualEntry()
      await training.certificationManualEntry.verifyUpdateSuccessFullMessage()
      //Automated By : - Sarathkumar L on 10/28/2025
      //Sprint :-  : Quarter 4  :  Sprint 10
      //Type of Test case : Defect 2025 CRM# 176544
    });
  });

});

test.describe('2025AdmissionDefectAttachments', () => {
  test('2025AdmissionDefectAttachments_70011', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '70011', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      await admission.module.switchToInmateSearch()
      await admission.inmateSearchScreen.EnterAtSPNNO()
      await admission.inmateSearchScreen.Search()
      await admission.inmateSearchScreen.selectAtSPNInGridByRow()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.clickPhotoImage()
      await admission.module.switchToImageArchiveScreen()
      await home.allImagesScreen.copyImageToClipboard('PIC.jpg')
      await admission.inmateImageArchiveScreen.ClickFileButton()
      await admission.module.switchUploadImageScreen()
      await home.allImagesScreen.pasteImage()
      await admission.uploadInmateImageScreen.tabPhotoDateAndTime()
      await admission.module.switchUploadImageScreen()
      await admission.uploadInmateImageScreen.saveAndCloseScreen()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.SelectAtType()
      await admission.inmateImageArchiveScreen.SelectAtAction()
      await admission.inmateImageArchiveScreen.ClickTransmitButton()
      await admission.inmateImageArchiveScreen.verifySaveConfirmPopup()
      await admission.module.switchToImageArchiveScreen()
      await admission.inmateImageArchiveScreen.closeScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.NavigateToMugShotTab()
      await admission.admissionEntry.mugShotTab.EnterAtPhotoTakenPF()
      await admission.admissionEntry.mugShotTab.tabPhotoTakenDateAndTime()
      await admission.admissionEntry.mugShotTab.Save()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.clickSPNChangeIcon()
      await admission.module.switchToSPNChange()
      await admission.sPNNOChange.enterAtSPNChangeName()
      await admission.sPNNOChange.saveScreen()
      await admission.module.switchToAdmissionEntry()
      await admission.inmateSearchScreen.verify30138SPNNameChangeAcknowledge()
      await admission.module.switchToAdmissionEntry()
      await admission.admissionEntry.SaveScreen()
      await admission.module.switchToAdmissionEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      // Automated By :- Mohamed Absar A on 08/01/2025 // Type:- Legacy // Q4 Sprint 10 2025
    });
  });

});

test.describe('Q3GeoDefectAttachments2025', () => {
  test('Q3GeoDefectAttachments2025_68614', async ({ loginPage, loaderPage, popupPage, names, home, settings, geo, activity, vehicle, inventory, training, scheduling, personnel, tow, citizenServices, detailWork, documentManagement, employmentApplicants, admission, qA }) => {
    await withTestContext(testData, '68614', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.selectGridRowByLayerName(0)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.verifyAttachmentTabEnabled()
      await geo.mapLayerEntry.switchToAttcahmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectAtCategory()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectPDFFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      // objectIdentification.smokeTest.checkAckExist()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.switchToAttcahmentsTab()
      // objectIdentification.attachmentsTab.verifyAddedAttachementExistInTheGrid()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.SaveScreen()
      // objectIdentification.smokeTest.checkAckExist()
      await geo.module.switchToMapLayerEntry()
      //Automated by  :-Kiran  Date :-07/28/2025  Quarter:-3  Sprint-7  Module:-Personnel  Type:-Defect  SetUp:-1.175
    });
  });

});

