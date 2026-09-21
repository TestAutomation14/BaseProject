import { Page } from '@playwright/test';
import {
  SchedulingPage, TimeSearchPage, TimeEntryPage, CalenderTabPage, CalendarPage,
  AppointmentsPopupPage, TradeSwapSearchPage, EventCodePage, EventCodeEntryPage,
  EventResourcesPage, EventResourcesEntryPage, ScheduleSettingsPage,
  ScheduleSettingsTourTabPage, ScheduleSettingsRotationTabPage, ScheduleSettingsGroupTabPage,
  TourEntryPage, RotationCodeEntryPage, GroupEntryPage, TimeCategoryPage,
  TimeCategoryEntryPage, TimeTypeEntryPage, WorkSheetPage, RosterWindowPage,
  JobGradePage, JobGradeEntryPage, CarryOverAccrualEntryPage, HolidayPage,
  TradeSwapEntryPage, CalenderTab2Page, TimeReportPage,
} from '../pages/scheduling';

// ── Type ─────────────────────────────────────────────────────────────────────

export type SchedulingFixture = {
  scheduling: {
    module: SchedulingPage;
    timeSearch: TimeSearchPage;
    timeEntry: TimeEntryPage;
    calenderTab: CalenderTabPage;
    calendar: CalendarPage;
    appointmentsPopup: AppointmentsPopupPage;
    tradeSwapSearch: TradeSwapSearchPage;
    tradeSwapEntry: TradeSwapEntryPage;
    eventCode: EventCodePage;
    eventCodeEntry: EventCodeEntryPage;
    eventResources: EventResourcesPage;
    eventResourcesEntry: EventResourcesEntryPage;
    scheduleSettings: ScheduleSettingsPage & {
      scheduleSettingsTourTab: ScheduleSettingsTourTabPage;
      scheduleSettingsRotationTab: ScheduleSettingsRotationTabPage;
      scheduleSettingsGroupTab: ScheduleSettingsGroupTabPage;
    };
    tourEntry: TourEntryPage;
    rotationCodeEntry: RotationCodeEntryPage;
    groupEntry: GroupEntryPage;
    timeCategory: TimeCategoryPage;
    timeCategoryEntry: TimeCategoryEntryPage;
    timeTypeEntry: TimeTypeEntryPage;
    workSheet: WorkSheetPage;
    rosterWindow: RosterWindowPage;
    jobGrade: JobGradePage;
    jobGradeEntry: JobGradeEntryPage;
    carryOverAccrualEntry: CarryOverAccrualEntryPage;
    holiday: HolidayPage;
    calenderTab2: CalenderTab2Page;
    timeReport: TimeReportPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const schedulingFixtureDefs = {
  scheduling: async ({ page }: { page: Page }, use: (v: SchedulingFixture['scheduling']) => Promise<void>) => {
    await use({
      module: new SchedulingPage(page),
      timeSearch: new TimeSearchPage(page),
      timeEntry: new TimeEntryPage(page),
      calenderTab: new CalenderTabPage(page),
      calendar: new CalendarPage(page),
      appointmentsPopup: new AppointmentsPopupPage(page),
      tradeSwapSearch: new TradeSwapSearchPage(page),
      tradeSwapEntry: new TradeSwapEntryPage(page),
      eventCode: new EventCodePage(page),
      eventCodeEntry: new EventCodeEntryPage(page),
      eventResources: new EventResourcesPage(page),
      eventResourcesEntry: new EventResourcesEntryPage(page),
      scheduleSettings: Object.assign(new ScheduleSettingsPage(page), {
        scheduleSettingsTourTab: new ScheduleSettingsTourTabPage(page),
        scheduleSettingsRotationTab: new ScheduleSettingsRotationTabPage(page),
        scheduleSettingsGroupTab: new ScheduleSettingsGroupTabPage(page),
      }),
      tourEntry: new TourEntryPage(page),
      rotationCodeEntry: new RotationCodeEntryPage(page),
      groupEntry: new GroupEntryPage(page),
      timeCategory: new TimeCategoryPage(page),
      timeCategoryEntry: new TimeCategoryEntryPage(page),
      timeTypeEntry: new TimeTypeEntryPage(page),
      workSheet: new WorkSheetPage(page),
      rosterWindow: new RosterWindowPage(page),
      jobGrade: new JobGradePage(page),
      jobGradeEntry: new JobGradeEntryPage(page),
      carryOverAccrualEntry: new CarryOverAccrualEntryPage(page),
      holiday: new HolidayPage(page),
      calenderTab2: new CalenderTab2Page(page),
      timeReport: new TimeReportPage(page),
    });
  },
};
