import { Page } from '@playwright/test';
import {
  AlarmsPage,
  AlarmAccountSearchPage, AccountEntryPage, AlarmTypePage,
  AlarmCFSEntryPage, AlarmCFSFireCFSTabPage, AlarmCFSCADCFSAndDispositionTabPage,
  AlarmCFSFeesAndSettingsTabPage,
  AlarmsEntryPage, AlarmEntryContactTabPage, AlarmEntryMainTabPage,
  ProcessFalseAlarmTabPage, TransactionHistoryTabPage, InvoicesTabPage,
  AlarmSearchPage, AlarmCompanySearchPage, AlarmNameEntryPage,
  FalseAlarmsPage, AlarmYearEndReportPage, AlarmCompanyEntryPage,
} from '../pages/alarms';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AlarmsFixture = {
  alarms: {
    module: AlarmsPage;
    alarmAccountSearch: AlarmAccountSearchPage;
    accountEntry: AccountEntryPage;
    alarmType: AlarmTypePage;
    alarmCFSEntry: AlarmCFSEntryPage & {
      alarmCFSFireCFSTab: AlarmCFSFireCFSTabPage;
      alarmCFSCADCFSAndDispositionTab: AlarmCFSCADCFSAndDispositionTabPage;
      alarmCFSFeesAndSettingsTab: AlarmCFSFeesAndSettingsTabPage;
    };
    alarmsEntry: AlarmsEntryPage & {
      alarmEntryContactTab: AlarmEntryContactTabPage;
      alarmEntryMainTab: AlarmEntryMainTabPage;
      processFalseAlarmTab: ProcessFalseAlarmTabPage;
      transactionHistoryTab: TransactionHistoryTabPage;
      invoicesTab: InvoicesTabPage;
    };
    alarmSearch: AlarmSearchPage;
    alarmCompanySearch: AlarmCompanySearchPage;
    alarmNameEntry: AlarmNameEntryPage;
    falseAlarms: FalseAlarmsPage;
    alarmYearEndReport: AlarmYearEndReportPage;
    alarmCompanyEntry: AlarmCompanyEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const alarmsFixtureDefs = {
  alarms: async ({ page }: { page: Page }, use: (v: AlarmsFixture['alarms']) => Promise<void>) => {
    const alarmCFSEntry = Object.assign(new AlarmCFSEntryPage(page), {
      alarmCFSFireCFSTab: new AlarmCFSFireCFSTabPage(page),
      alarmCFSCADCFSAndDispositionTab: new AlarmCFSCADCFSAndDispositionTabPage(page),
      alarmCFSFeesAndSettingsTab: new AlarmCFSFeesAndSettingsTabPage(page),
    });
    const alarmsEntry = Object.assign(new AlarmsEntryPage(page), {
      alarmEntryContactTab: new AlarmEntryContactTabPage(page),
      alarmEntryMainTab: new AlarmEntryMainTabPage(page),
      processFalseAlarmTab: new ProcessFalseAlarmTabPage(page),
      transactionHistoryTab: new TransactionHistoryTabPage(page),
      invoicesTab: new InvoicesTabPage(page),
    });
    await use({
      module: new AlarmsPage(page),
      alarmAccountSearch: new AlarmAccountSearchPage(page),
      accountEntry: new AccountEntryPage(page),
      alarmType: new AlarmTypePage(page),
      alarmCFSEntry,
      alarmsEntry,
      alarmSearch: new AlarmSearchPage(page),
      alarmCompanySearch: new AlarmCompanySearchPage(page),
      alarmNameEntry: new AlarmNameEntryPage(page),
      falseAlarms: new FalseAlarmsPage(page),
      alarmYearEndReport: new AlarmYearEndReportPage(page),
      alarmCompanyEntry: new AlarmCompanyEntryPage(page),
    });
  },
};
