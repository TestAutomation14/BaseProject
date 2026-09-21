import { Page } from '@playwright/test';
import {
  ActivityModule, ScheduleSearchPage, WorkReleasePage, WorkReleaseMainTabPage,
  IndividualSchedulingPage, GroupMovementPage, OutsideSignOutInPage,
  InsideSignOutInPage, VerifyNamePage, EmployerPage, InmateMovementPage,
  ActivitySearchPage, ActivityEntryPage, ActivityEntryPFTabPage, ActivityEntryOtherTabPage,
  ActivityEntryLogEntryTabPage, LogHistoryTabPage, ActivityEntryVisitorsTabPage,
  MaintenanceTabPage, ActivityEntryQAFormsTabPage, NamesTabPage, ActivityEntryFeesTabPage,
  SchedulesTabPage, RecurrencePopUpPage, ActivitySearchHelpWindowPage,
  ActivityCalendarEntryPage, ActivityQuickEntryPage as HomeActivityQuickEntryPage,
} from '../pages/activity';

// ── Type ─────────────────────────────────────────────────────────────────────

export type ActivityFixture = {
  activity: {
    module: ActivityModule;
    activitySearch: ActivitySearchPage;
    activitySearchHelpWindow: ActivitySearchHelpWindowPage;
    activityEntry: ActivityEntryPage & {
      activityEntryPFTab: ActivityEntryPFTabPage;
      activityEntryOtherTab: ActivityEntryOtherTabPage;
      activityEntryLogEntryTab: ActivityEntryLogEntryTabPage;
      logHistoryTab: LogHistoryTabPage;
      activityEntryVisitorsTab: ActivityEntryVisitorsTabPage;
      maintenanceTab: MaintenanceTabPage;
      activityEntryQAFormsTab: ActivityEntryQAFormsTabPage;
      namesTab: NamesTabPage;
      activityEntryFeesTab: ActivityEntryFeesTabPage;
      schedulesTab: SchedulesTabPage;
      recurrencePopUp: RecurrencePopUpPage;
    };
    activityCalendarEntry: ActivityCalendarEntryPage;
    activityQuickEntry: HomeActivityQuickEntryPage;
    scheduleSearch: ScheduleSearchPage;
    workRelease: WorkReleasePage & { mainTab: WorkReleaseMainTabPage };
    individualScheduling: IndividualSchedulingPage;
    groupMovement: GroupMovementPage;
    outsideSignOutIn: OutsideSignOutInPage;
    insideSignOutIn: InsideSignOutInPage;
    verifyName: VerifyNamePage;
    employer: EmployerPage;
    inmateMovement: InmateMovementPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const activityFixtureDefs = {
  activity: async ({ page }: { page: Page }, use: (v: ActivityFixture['activity']) => Promise<void>) => {
    const workRelease = Object.assign(new WorkReleasePage(page), {
      mainTab: new WorkReleaseMainTabPage(page),
    });
    const activityEntry = Object.assign(new ActivityEntryPage(page), {
      activityEntryPFTab: new ActivityEntryPFTabPage(page),
      activityEntryOtherTab: new ActivityEntryOtherTabPage(page),
      activityEntryLogEntryTab: new ActivityEntryLogEntryTabPage(page),
      logHistoryTab: new LogHistoryTabPage(page),
      activityEntryVisitorsTab: new ActivityEntryVisitorsTabPage(page),
      maintenanceTab: new MaintenanceTabPage(page),
      activityEntryQAFormsTab: new ActivityEntryQAFormsTabPage(page),
      namesTab: new NamesTabPage(page),
      activityEntryFeesTab: new ActivityEntryFeesTabPage(page),
      schedulesTab: new SchedulesTabPage(page),
      recurrencePopUp: new RecurrencePopUpPage(page),
    });
    await use({
      module: new ActivityModule(page),
      activitySearch: new ActivitySearchPage(page),
      activitySearchHelpWindow: new ActivitySearchHelpWindowPage(page),
      activityEntry,
      activityCalendarEntry: new ActivityCalendarEntryPage(page),
      activityQuickEntry: new HomeActivityQuickEntryPage(page),
      scheduleSearch: new ScheduleSearchPage(page),
      workRelease,
      individualScheduling: new IndividualSchedulingPage(page),
      groupMovement: new GroupMovementPage(page),
      outsideSignOutIn: new OutsideSignOutInPage(page),
      insideSignOutIn: new InsideSignOutInPage(page),
      verifyName: new VerifyNamePage(page),
      employer: new EmployerPage(page),
      inmateMovement: new InmateMovementPage(page),
    });
  },
};
