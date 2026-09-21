import { Page } from '@playwright/test';
import {
  CitizenServicesPage, AnonymousTipsPage, AnonymousTipsEntryPage,
  CitizenAccountSearchPage, RegistrationDetailsPage, AddressTabPage,
  CitizenFlagSearchPage, CitizenFlagEntryPage, ComplaintsScreenPage, ComplaintsEntryPage,
  ComplaintDetailsTabPage, ComplaintDispositionTabPage, CSPawnDealerPage, CSPawnDealerEntryPage,
  AuthorizedUsersTabPage, CSPawnEntryPage, CSPawnEntryMainTabPage, CSPawnEntryDealerTabPage,
  LiveVideoLinkPage, CitizenIPCameraPage, CameraDetailsPage, LocationCheckSearchPage,
  LocationCheckEntryPage, LocationCheckDetailsTabPage, LocationCheckDispositionTabPage,
  CheckIntervalTabPage, UpdateStatusNViewHistoryPage, ServiceRequestsPage,
  ServiceRequestsEntryPage, ServiceDetailsTabPage, UpdateStatusAndViewHistoryTabPage,
  CSPPermitRequestPage, CSPPermitRequestEntryPage, CSPawnSearchPage, AddressDetailsPage,
  CSCFSMapUpdatePage, UserActivationPage, AddressAuthorizationPage, CSFormSearchPage,
  CSFormEntryPage, StatusTabPage, OnlineReportsPage, CORSEntryPage, ProcessTabPage,
  NarrativeTabPage, CSCFSCodeMapPage, CSPAlarmRequestsPage,
} from '../pages/citizen-services';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CitizenServicesFixture = {
  citizenServices: {
    module: CitizenServicesPage;
    anonymousTips: AnonymousTipsPage;
    anonymousTipsEntry: AnonymousTipsEntryPage;
    citizenAccountSearch: CitizenAccountSearchPage;
    registrationDetails: RegistrationDetailsPage & { addressTab: AddressTabPage };
    citizenFlagSearch: CitizenFlagSearchPage;
    citizenFlagEntry: CitizenFlagEntryPage;
    complaintsScreen: ComplaintsScreenPage;
    complaintsEntry: ComplaintsEntryPage & { complaintDetailsTab: ComplaintDetailsTabPage; complaintDispositionTab: ComplaintDispositionTabPage };
    cSPawnDealer: CSPawnDealerPage;
    cSPawnDealerEntry: CSPawnDealerEntryPage & { authorizedUsersTab: AuthorizedUsersTabPage };
    cSPawnEntry: CSPawnEntryPage & { cSPawnEntryMainTab: CSPawnEntryMainTabPage; cSPawnEntrydealerTab: CSPawnEntryDealerTabPage };
    liveVideoLink: LiveVideoLinkPage;
    citizenIPCamera: CitizenIPCameraPage;
    cameraDetails: CameraDetailsPage;
    locationCheckSearch: LocationCheckSearchPage;
    locationCheckEntry: LocationCheckEntryPage & { locationCheckDetailsTab: LocationCheckDetailsTabPage; locationCheckDispositionTab: LocationCheckDispositionTabPage; checkIntervalTab: CheckIntervalTabPage; updateStatusNViewHistory: UpdateStatusNViewHistoryPage };
    serviceRequests: ServiceRequestsPage;
    serviceRequestsEntry: ServiceRequestsEntryPage & { serviceDetailsTab: ServiceDetailsTabPage; updateStatusAndViewHistoryTab: UpdateStatusAndViewHistoryTabPage };
    cSPPermitRequest: CSPPermitRequestPage;
    cSPPermitRequestEntry: CSPPermitRequestEntryPage;
    cSPawnSearch: CSPawnSearchPage;
    addressDetails: AddressDetailsPage;
    cSCFSMapUpdate: CSCFSMapUpdatePage;
    userActivation: UserActivationPage;
    addressAuthorization: AddressAuthorizationPage;
    cSFormSearch: CSFormSearchPage;
    cSFormEntry: CSFormEntryPage & { statusTab: StatusTabPage };
    onlineReports: OnlineReportsPage;
    cORSEntry: CORSEntryPage & { processTab: ProcessTabPage; narrativeTab: NarrativeTabPage };
    cSCFSCodeMap: CSCFSCodeMapPage;
    cSPAlarmRequests: CSPAlarmRequestsPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const citizenServicesFixtureDefs = {
  citizenServices: async ({ page }: { page: Page }, use: (v: CitizenServicesFixture['citizenServices']) => Promise<void>) => {
    await use({
      module: new CitizenServicesPage(page),
      anonymousTips: new AnonymousTipsPage(page),
      anonymousTipsEntry: new AnonymousTipsEntryPage(page),
      citizenAccountSearch: new CitizenAccountSearchPage(page),
      registrationDetails: Object.assign(new RegistrationDetailsPage(page), {
        addressTab: new AddressTabPage(page),
      }),
      citizenFlagSearch: new CitizenFlagSearchPage(page),
      citizenFlagEntry: new CitizenFlagEntryPage(page),
      complaintsScreen: new ComplaintsScreenPage(page),
      complaintsEntry: Object.assign(new ComplaintsEntryPage(page), {
        complaintDetailsTab: new ComplaintDetailsTabPage(page),
        complaintDispositionTab: new ComplaintDispositionTabPage(page),
      }),
      cSPawnDealer: new CSPawnDealerPage(page),
      cSPawnDealerEntry: Object.assign(new CSPawnDealerEntryPage(page), {
        authorizedUsersTab: new AuthorizedUsersTabPage(page),
      }),
      cSPawnEntry: Object.assign(new CSPawnEntryPage(page), {
        cSPawnEntryMainTab: new CSPawnEntryMainTabPage(page),
        cSPawnEntrydealerTab: new CSPawnEntryDealerTabPage(page),
      }),
      liveVideoLink: new LiveVideoLinkPage(page),
      citizenIPCamera: new CitizenIPCameraPage(page),
      cameraDetails: new CameraDetailsPage(page),
      locationCheckSearch: new LocationCheckSearchPage(page),
      locationCheckEntry: Object.assign(new LocationCheckEntryPage(page), {
        locationCheckDetailsTab: new LocationCheckDetailsTabPage(page),
        locationCheckDispositionTab: new LocationCheckDispositionTabPage(page),
        checkIntervalTab: new CheckIntervalTabPage(page),
        updateStatusNViewHistory: new UpdateStatusNViewHistoryPage(page),
      }),
      serviceRequests: new ServiceRequestsPage(page),
      serviceRequestsEntry: Object.assign(new ServiceRequestsEntryPage(page), {
        serviceDetailsTab: new ServiceDetailsTabPage(page),
        updateStatusAndViewHistoryTab: new UpdateStatusAndViewHistoryTabPage(page),
      }),
      cSPPermitRequest: new CSPPermitRequestPage(page),
      cSPPermitRequestEntry: new CSPPermitRequestEntryPage(page),
      cSPawnSearch: new CSPawnSearchPage(page),
      addressDetails: new AddressDetailsPage(page),
      cSCFSMapUpdate: new CSCFSMapUpdatePage(page),
      userActivation: new UserActivationPage(page),
      addressAuthorization: new AddressAuthorizationPage(page),
      cSFormSearch: new CSFormSearchPage(page),
      cSFormEntry: Object.assign(new CSFormEntryPage(page), {
        statusTab: new StatusTabPage(page),
      }),
      onlineReports: new OnlineReportsPage(page),
      cORSEntry: Object.assign(new CORSEntryPage(page), {
        processTab: new ProcessTabPage(page),
        narrativeTab: new NarrativeTabPage(page),
      }),
      cSCFSCodeMap: new CSCFSCodeMapPage(page),
      cSPAlarmRequests: new CSPAlarmRequestsPage(page),
    });
  },
};
