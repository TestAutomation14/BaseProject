import { Page } from '@playwright/test';
import {
  BIModule, MasterSearchPage, MasterSearchEntryPage, MasterSearchEntryPeriodTabPage,
  DashBoardConfigPage, DashBoardEntryPage, DashBoardEntryMainTabPage,
  DashBoardEntryDistributedToTabPage, DashBoardEntryDisplayScreenTabPage,
  StatisticalReportPage, StatisticalReportEntryPage, GisAnalysisPage,
  MyDashboardPage, PowerBIPage,
} from '../pages/bi';

// ── Type ─────────────────────────────────────────────────────────────────────

export type BIFixture = {
  bi: {
    module: BIModule;
    masterSearch: MasterSearchPage;
    masterSearchEntry: MasterSearchEntryPage & { masterSearchEntryPeriodTab: MasterSearchEntryPeriodTabPage };
    dashBoardConfig: DashBoardConfigPage;
    dashBoardEntry: DashBoardEntryPage & {
      dashBoardEnrtyMainTab: DashBoardEntryMainTabPage;
      dashBoardEnrtyDistributedToTab: DashBoardEntryDistributedToTabPage;
      dashBoardEnrtyDisplayScreenTab: DashBoardEntryDisplayScreenTabPage;
    };
    statisticalReport: StatisticalReportPage;
    statisticalReportEntry: StatisticalReportEntryPage;
    gisAnalysis: GisAnalysisPage;
    myDashboard: MyDashboardPage & { powerBI: PowerBIPage };
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const biFixtureDefs = {
  bi: async ({ page }: { page: Page }, use: (v: BIFixture['bi']) => Promise<void>) => {
    const masterSearchEntry = Object.assign(new MasterSearchEntryPage(page), {
      masterSearchEntryPeriodTab: new MasterSearchEntryPeriodTabPage(page),
    });
    const dashBoardEntry = Object.assign(new DashBoardEntryPage(page), {
      dashBoardEnrtyMainTab: new DashBoardEntryMainTabPage(page),
      dashBoardEnrtyDistributedToTab: new DashBoardEntryDistributedToTabPage(page),
      dashBoardEnrtyDisplayScreenTab: new DashBoardEntryDisplayScreenTabPage(page),
    });
    const myDashboard = Object.assign(new MyDashboardPage(page), {
      powerBI: new PowerBIPage(page),
    });
    await use({
      module: new BIModule(page),
      masterSearch: new MasterSearchPage(page),
      masterSearchEntry,
      dashBoardConfig: new DashBoardConfigPage(page),
      dashBoardEntry,
      statisticalReport: new StatisticalReportPage(page),
      statisticalReportEntry: new StatisticalReportEntryPage(page),
      gisAnalysis: new GisAnalysisPage(page),
      myDashboard,
    });
  },
};
