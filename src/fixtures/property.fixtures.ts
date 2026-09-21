import { Page } from '@playwright/test';
import {
  PropertyPage,
  PropertyEditEntryPage, PropertyEntryPage, PropertyEntryMainTabPage, RecoveredTabPage,
  PropertyEntryHistoryTabPage, PropertyEntryNamesTabPage,
  PropertyUpdatePage, PropertyUpdatePopupPage,
  PropertyRoomRolesPage, PropertyRoomRolesStorageTabPage, PropertyRoomRolesDispositionTabPage,
  PropertyRoomRolesChainTabPage,
  PropertySearchPage, PullRequestPage, RequestEntryPage,
  RequestEntryItemsTabPage, RequestEntryRoutingTabPage,
  LocationSearchPage, StorageLocationsPage, BarcodeUpdatePage, PropertyNotesPage,
} from '../pages/property';

// ── Type ─────────────────────────────────────────────────────────────────────

export type PropertyFixture = {
  property: {
    module: PropertyPage;
    propertyEditEntry: PropertyEditEntryPage;
    propertyEntry: PropertyEntryPage & {
      propertyEntryMainTab: PropertyEntryMainTabPage;
      recoveredTab: RecoveredTabPage;
      propertyEntryHistoryTab: PropertyEntryHistoryTabPage;
      propertyEntryNamesTab: PropertyEntryNamesTabPage;
    };
    propertyUpdate: PropertyUpdatePage;
    propertyUpdatePopup: PropertyUpdatePopupPage;
    propertyRoomRoles: PropertyRoomRolesPage & {
      propertyRoomRolesStorageTab: PropertyRoomRolesStorageTabPage;
      propertyRoomRolesDispositionTab: PropertyRoomRolesDispositionTabPage;
      propertyRoomRolesChainTab: PropertyRoomRolesChainTabPage;
    };
    propertySearch: PropertySearchPage;
    pullRequest: PullRequestPage;
    requestEntry: RequestEntryPage & {
      requestEntryItemsTab: RequestEntryItemsTabPage;
      requestEntryRoutingTab: RequestEntryRoutingTabPage;
    };
    locationSearch: LocationSearchPage;
    storageLocations: StorageLocationsPage;
    barcodeUpdate: BarcodeUpdatePage;
    propertyNotes: PropertyNotesPage;
    propertyIndex: PropertyEditEntryPage;
    propertySearchHelpWindow: PropertySearchPage;
    attachPropertyPopup: any;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const propertyFixtureDefs = {
  property: async ({ page }: { page: Page }, use: (v: PropertyFixture['property']) => Promise<void>) => {
    const propertyEntry = Object.assign(new PropertyEntryPage(page), {
      propertyEntryMainTab: new PropertyEntryMainTabPage(page),
      recoveredTab: new RecoveredTabPage(page),
      propertyEntryHistoryTab: new PropertyEntryHistoryTabPage(page),
      propertyEntryNamesTab: new PropertyEntryNamesTabPage(page),
    });
    const propertyRoomRoles = Object.assign(new PropertyRoomRolesPage(page), {
      propertyRoomRolesStorageTab: new PropertyRoomRolesStorageTabPage(page),
      propertyRoomRolesDispositionTab: new PropertyRoomRolesDispositionTabPage(page),
      propertyRoomRolesChainTab: new PropertyRoomRolesChainTabPage(page),
    });
    const requestEntry = Object.assign(new RequestEntryPage(page), {
      requestEntryItemsTab: new RequestEntryItemsTabPage(page),
      requestEntryRoutingTab: new RequestEntryRoutingTabPage(page),
    });
    const propertyEditEntry = new PropertyEditEntryPage(page);
    const propertySearch = new PropertySearchPage(page);
    await use({
      module: new PropertyPage(page),
      propertyEditEntry,
      propertyEntry,
      propertyUpdate: new PropertyUpdatePage(page),
      propertyUpdatePopup: new PropertyUpdatePopupPage(page),
      propertyRoomRoles,
      propertySearch,
      pullRequest: new PullRequestPage(page),
      requestEntry,
      locationSearch: new LocationSearchPage(page),
      storageLocations: new StorageLocationsPage(page),
      barcodeUpdate: new BarcodeUpdatePage(page),
      propertyNotes: new PropertyNotesPage(page),
      propertyIndex: propertyEditEntry,
      propertySearchHelpWindow: propertySearch,
      attachPropertyPopup: {} as any,
    });
  },
};
