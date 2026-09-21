import { Page } from '@playwright/test';
import {
  MileageEntryPage, InventorySearchPage, InventoryEntryPage, CheckOutInTabPage,
  InventoryEntryMainTabPage, AssignedIssuedHistoryTabPage, PurchaseHistoryTabPage,
  ServiceHistoryTabPage, InventoryEntryNotesTabPage, InventoryEntryDispositionTabPage,
  InventoryEntryActivityLogTabPage, BatchAssignReturnPage,
  StorageLocationPage as InvStorageLocationPage,
  StorageLocationEntryPage as InvStorageLocationEntryPage, CheckOutInEntryPage,
  EquipmentServicePage, ItemEntrySearchPage, InventoryAuditSearchPage,
  InventoryAuditEntryPage, AuditTabPage as InvAuditTabPage, MainTabPage as InvMainTabPage,
  ApprovalTabPage as InvApprovalTabPage, MileageLogPage, CheckOutInSearchPage,
  SelfCheckOutInPage, EquipmentPFAuthenticationPage,
} from '../pages/inventory';

// ── Type ─────────────────────────────────────────────────────────────────────

export type InventoryFixture = {
  inventory: {
    module: {
      switchToCheckOutInSearch: () => Promise<void>;
      switchToEquipmentServiceScreenTab: () => Promise<void>;
      switchToEquipmentServiceWindow: () => Promise<void>;
      switchToInventoryAuditEntry: () => Promise<void>;
      switchToInventoryAuditSearch: () => Promise<void>;
      switchToMileageLog: () => Promise<void>;
      switchToMileageLogEntry: () => Promise<void>;
    };
    inventorySearch: InventorySearchPage;
    inventoryEntry: InventoryEntryPage;
    checkOutInSearch: CheckOutInSearchPage;
    checkOutInEntry: CheckOutInEntryPage;
    batchAssignReturn: BatchAssignReturnPage;
    storageLocation: InvStorageLocationPage;
    storageLocationEntry: InvStorageLocationEntryPage;
    equipmentService: EquipmentServicePage;
    inventoryAuditSearch: InventoryAuditSearchPage;
    inventoryAuditEntry: InventoryAuditEntryPage;
    mileageEntry: MileageEntryPage;
    mileageLog: MileageLogPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const inventoryFixtureDefs = {
  inventory: async ({ page }: { page: Page }, use: (v: InventoryFixture['inventory']) => Promise<void>) => {
    await use({
      module: {
        switchToCheckOutInSearch: async () => {},
        switchToEquipmentServiceScreenTab: async () => {},
        switchToEquipmentServiceWindow: async () => {},
        switchToInventoryAuditEntry: async () => {},
        switchToInventoryAuditSearch: async () => {},
        switchToMileageLog: async () => {},
        switchToMileageLogEntry: async () => {},
      },
      inventorySearch: new InventorySearchPage(page),
      inventoryEntry: new InventoryEntryPage(page),
      checkOutInSearch: new CheckOutInSearchPage(page),
      checkOutInEntry: new CheckOutInEntryPage(page),
      batchAssignReturn: new BatchAssignReturnPage(page),
      storageLocation: new InvStorageLocationPage(page),
      storageLocationEntry: new InvStorageLocationEntryPage(page),
      equipmentService: new EquipmentServicePage(page),
      inventoryAuditSearch: new InventoryAuditSearchPage(page),
      inventoryAuditEntry: new InventoryAuditEntryPage(page),
      mileageEntry: new MileageEntryPage(page),
      mileageLog: new MileageLogPage(page),
    });
  },
};
