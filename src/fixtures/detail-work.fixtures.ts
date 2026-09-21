import { Page } from '@playwright/test';
import {
  DetailWorkPage, DetailSearchPage, DetailEntryPage, FlagsTabPage,
  DetailRequestedByTabPage, DetailBillToTabPage, DetailOfficersTabPage,
  DetailStatusUpdateTabPage, DetailFeesTabPage, DetailInvoiceTabPage,
  OfficerPeckingOrderSearchPage, ReferedToSearchPage,
} from '../pages/detail-work';

// ── Type ─────────────────────────────────────────────────────────────────────

export type DetailWorkFixture = {
  detailWork: {
    module: DetailWorkPage;
    detailSearch: DetailSearchPage;
    detailEntry: DetailEntryPage & {
      detailRequestedByTab: DetailRequestedByTabPage;
      detailBillToTab: DetailBillToTabPage;
      detailOfficersTab: DetailOfficersTabPage;
      detailStatusUpdateTab: DetailStatusUpdateTabPage;
      detailFeesTab: DetailFeesTabPage;
      detailInvoiceTab: DetailInvoiceTabPage;
      flagsTab: FlagsTabPage;
    };
    officerPeckingOrderSearch: OfficerPeckingOrderSearchPage;
    referedToSearch: ReferedToSearchPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const detailWorkFixtureDefs = {
  detailWork: async ({ page }: { page: Page }, use: (v: DetailWorkFixture['detailWork']) => Promise<void>) => {
    const detailEntry = Object.assign(new DetailEntryPage(page), {
      detailRequestedByTab: new DetailRequestedByTabPage(page),
      detailBillToTab: new DetailBillToTabPage(page),
      detailOfficersTab: new DetailOfficersTabPage(page),
      detailStatusUpdateTab: new DetailStatusUpdateTabPage(page),
      detailFeesTab: new DetailFeesTabPage(page),
      detailInvoiceTab: new DetailInvoiceTabPage(page),
      flagsTab: new FlagsTabPage(page),
    });
    await use({
      module: new DetailWorkPage(page),
      detailSearch: new DetailSearchPage(page),
      detailEntry,
      officerPeckingOrderSearch: new OfficerPeckingOrderSearchPage(page),
      referedToSearch: new ReferedToSearchPage(page),
    });
  },
};
