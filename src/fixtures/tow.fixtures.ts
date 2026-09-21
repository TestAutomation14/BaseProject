import { Page } from '@playwright/test';
import {
  TowPage, TowRotationPage, TowVendorPage, TowVendorEntryPage,
  EquipmentPage, AreaAssignmentPage, AuthDriversPage, PhoneNumberPage,
  TowScreenPage, TowEntryPage, TowTabPage, OwnerPage, DriverPage,
  DamageMissingPage, PropertyInventoryPage, ForfeiturePage, ReleasePage,
  TowDispositionTabPage, TowNotesTabPage, TowRefusePage, TowRefusePopUpScreenPage,
} from '../pages/tow';

// ── Type ─────────────────────────────────────────────────────────────────────

export type TowFixture = {
  tow: {
    module: TowPage;
    towVendor: TowVendorPage;
    towVendorEntry: TowVendorEntryPage & {
      equipment: EquipmentPage;
      areaAssignment: AreaAssignmentPage;
      authDrivers: AuthDriversPage;
      phoneNumber: PhoneNumberPage;
    };
    towRotation: TowRotationPage;
    towScreen: TowScreenPage;
    towEntry: TowEntryPage & {
      towTab: TowTabPage;
      owner: OwnerPage;
      mDriver: DriverPage;
      damageMissing: DamageMissingPage;
      propertyInventory: PropertyInventoryPage;
      forfeiture: ForfeiturePage;
      release: ReleasePage;
      towDispositionTab: TowDispositionTabPage;
      towNotesTab: TowNotesTabPage;
    };
    towRefuse: TowRefusePage;
    towRefusePopUpScreen: TowRefusePopUpScreenPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const towFixtureDefs = {
  tow: async ({ page }: { page: Page }, use: (v: TowFixture['tow']) => Promise<void>) => {
    const towVendorEntry = Object.assign(new TowVendorEntryPage(page), {
      equipment: new EquipmentPage(page),
      areaAssignment: new AreaAssignmentPage(page),
      authDrivers: new AuthDriversPage(page),
      phoneNumber: new PhoneNumberPage(page),
    });
    const towEntry = Object.assign(new TowEntryPage(page), {
      towTab: new TowTabPage(page),
      owner: new OwnerPage(page),
      mDriver: new DriverPage(page),
      damageMissing: new DamageMissingPage(page),
      propertyInventory: new PropertyInventoryPage(page),
      forfeiture: new ForfeiturePage(page),
      release: new ReleasePage(page),
      towDispositionTab: new TowDispositionTabPage(page),
      towNotesTab: new TowNotesTabPage(page),
    });
    await use({
      module: new TowPage(page),
      towVendor: new TowVendorPage(page),
      towVendorEntry,
      towRotation: new TowRotationPage(page),
      towScreen: new TowScreenPage(page),
      towEntry,
      towRefuse: new TowRefusePage(page),
      towRefusePopUpScreen: new TowRefusePopUpScreenPage(page),
    });
  },
};
