import { Page } from '@playwright/test';
import {
  CommissaryPage,
  CanteenOrderSearchPage, CanteenOrderEntryPage,
  PurchaseSearchPage, PurchasePage,
  AccountHistoryPage, AccountMasterPage,
  InmateDetailsPage, DepositReleaseFundsTabPage, InmateBillingTabPage,
  InmateAccountHistoryTabPage, InmateRestrictionsTabPage,
  CategoryRestrictionPage, PendingDeliveryPage, FundTransferPage,
  VendorSearchPage, VendorEntryPage, VendorProductTabPage,
  VendorPurchaseHistoryTabPage, VendorNotesTabPage,
  BankReconciliationPage, BankStatementPage,
  BatchBillingSearchPage, BatchBillingEntryPage,
  ItemSearchPage, ItemEntryPage,
  BankDepositSearchPage, BankDepositPage,
  DepositReleaseFundsPage, CashSearchPage,
  DrawerPermissionPage, CashDrawerPage, FreezeAccountPage,
} from '../pages/commissary';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CommissaryFixture = {
  commissary: {
    module: CommissaryPage;
    canteenOrderSearch: CanteenOrderSearchPage;
    canteenOrderEntry: CanteenOrderEntryPage;
    purchaseSearch: PurchaseSearchPage;
    purchase: PurchasePage;
    accountHistory: AccountHistoryPage;
    accountMaster: AccountMasterPage;
    inmateDetails: InmateDetailsPage & {
      depositReleaseFundsTab: DepositReleaseFundsTabPage;
      inmateBillingTab: InmateBillingTabPage;
      inmateAccountHistoryTab: InmateAccountHistoryTabPage;
      inmateRestrictionsTab: InmateRestrictionsTabPage;
    };
    categoryRestriction: CategoryRestrictionPage;
    pendingDelivery: PendingDeliveryPage;
    fundTransfer: FundTransferPage;
    vendorSearch: VendorSearchPage;
    vendorEntry: VendorEntryPage & {
      vendorProductTab: VendorProductTabPage;
      vendorPurchaseHistoryTab: VendorPurchaseHistoryTabPage;
      vendorNotesTab: VendorNotesTabPage;
    };
    bankReconciliation: BankReconciliationPage;
    bankStatement: BankStatementPage;
    batchBillingSearch: BatchBillingSearchPage;
    batchBillingEntry: BatchBillingEntryPage;
    itemSearch: ItemSearchPage;
    itemEntry: ItemEntryPage;
    bankDepositSearch: BankDepositSearchPage;
    bankDeposit: BankDepositPage;
    depositReleaseFunds: DepositReleaseFundsPage;
    cashSearch: CashSearchPage;
    drawerPermission: DrawerPermissionPage;
    cashDrawer: CashDrawerPage;
    freezeAccount: FreezeAccountPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const commissaryFixtureDefs = {
  commissary: async ({ page }: { page: Page }, use: (v: CommissaryFixture['commissary']) => Promise<void>) => {
    const inmateDetails = Object.assign(new InmateDetailsPage(page), {
      depositReleaseFundsTab: new DepositReleaseFundsTabPage(page),
      inmateBillingTab: new InmateBillingTabPage(page),
      inmateAccountHistoryTab: new InmateAccountHistoryTabPage(page),
      inmateRestrictionsTab: new InmateRestrictionsTabPage(page),
    });
    const vendorEntry = Object.assign(new VendorEntryPage(page), {
      vendorProductTab: new VendorProductTabPage(page),
      vendorPurchaseHistoryTab: new VendorPurchaseHistoryTabPage(page),
      vendorNotesTab: new VendorNotesTabPage(page),
    });
    await use({
      module: new CommissaryPage(page),
      canteenOrderSearch: new CanteenOrderSearchPage(page),
      canteenOrderEntry: new CanteenOrderEntryPage(page),
      purchaseSearch: new PurchaseSearchPage(page),
      purchase: new PurchasePage(page),
      accountHistory: new AccountHistoryPage(page),
      accountMaster: new AccountMasterPage(page),
      inmateDetails,
      categoryRestriction: new CategoryRestrictionPage(page),
      pendingDelivery: new PendingDeliveryPage(page),
      fundTransfer: new FundTransferPage(page),
      vendorSearch: new VendorSearchPage(page),
      vendorEntry,
      bankReconciliation: new BankReconciliationPage(page),
      bankStatement: new BankStatementPage(page),
      batchBillingSearch: new BatchBillingSearchPage(page),
      batchBillingEntry: new BatchBillingEntryPage(page),
      itemSearch: new ItemSearchPage(page),
      itemEntry: new ItemEntryPage(page),
      bankDepositSearch: new BankDepositSearchPage(page),
      bankDeposit: new BankDepositPage(page),
      depositReleaseFunds: new DepositReleaseFundsPage(page),
      cashSearch: new CashSearchPage(page),
      drawerPermission: new DrawerPermissionPage(page),
      cashDrawer: new CashDrawerPage(page),
      freezeAccount: new FreezeAccountPage(page),
    });
  },
};
