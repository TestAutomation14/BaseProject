import { Page } from '@playwright/test';
import {
  VehiclePage, VehicleBoatEntryPage, VehicleBoatEntryMainTabPage,
  VehicleBoatEntryFlagTabPage, VehicleBoatEntryAttachmentsTabPage,
  VehicleBoatSearchPage, VehicleTabPage, BoatTabPage,
  VehicleBoatSearchHelpWindowPage, VehicleFlagDetailsScreenPage,
  VehicleMergePage, MergeListTabPage, VehicleMergeDetailsPage,
  TowRotationPage as VehicleTowRotationPage, TowVendorPage as VehicleTowVendorPage,
} from '../pages/vehicle';

// ── Type ─────────────────────────────────────────────────────────────────────

export type VehicleFixture = {
  vehicle: {
    module: VehiclePage;
    vehicleBoatSearch: VehicleBoatSearchPage & { vehicleTab: VehicleTabPage; boatTab: BoatTabPage };
    vehicleBoatSearchHelpWindow: VehicleBoatSearchHelpWindowPage;
    vehicleBoatEntry: VehicleBoatEntryPage & {
      vehicleBoatEntryMainTab: VehicleBoatEntryMainTabPage;
      vehicleBoatEntryFlagTab: VehicleBoatEntryFlagTabPage;
      vehicleBoatEntryAttachmentsTab: VehicleBoatEntryAttachmentsTabPage;
    };
    vehicleFlagDetailsScreen: VehicleFlagDetailsScreenPage;
    vehicleMerge: VehicleMergePage & { mergeListTab: MergeListTabPage };
    vehicleMergeDetails: VehicleMergeDetailsPage;
    towRotation: VehicleTowRotationPage;
    towVendor: VehicleTowVendorPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const vehicleFixtureDefs = {
  vehicle: async ({ page }: { page: Page }, use: (v: VehicleFixture['vehicle']) => Promise<void>) => {
    await use({
      module: new VehiclePage(page),
      vehicleBoatSearch: Object.assign(new VehicleBoatSearchPage(page), {
        vehicleTab: new VehicleTabPage(page),
        boatTab: new BoatTabPage(page),
      }),
      vehicleBoatSearchHelpWindow: new VehicleBoatSearchHelpWindowPage(page),
      vehicleBoatEntry: Object.assign(new VehicleBoatEntryPage(page), {
        vehicleBoatEntryMainTab: new VehicleBoatEntryMainTabPage(page),
        vehicleBoatEntryFlagTab: new VehicleBoatEntryFlagTabPage(page),
        vehicleBoatEntryAttachmentsTab: new VehicleBoatEntryAttachmentsTabPage(page),
      }),
      vehicleFlagDetailsScreen: new VehicleFlagDetailsScreenPage(page),
      vehicleMerge: Object.assign(new VehicleMergePage(page), {
        mergeListTab: new MergeListTabPage(page),
      }),
      vehicleMergeDetails: new VehicleMergeDetailsPage(page),
      towRotation: new VehicleTowRotationPage(page),
      towVendor: new VehicleTowVendorPage(page),
    });
  },
};
