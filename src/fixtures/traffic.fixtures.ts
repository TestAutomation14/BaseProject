import { Page } from '@playwright/test';
import {
  TrafficPage,
  CrashSearchPage, CrashSearchHelpWindowPage,
  CrashEntryPage, CrashEntryMainTabPage, CrashWitnessTabPage,
  CrashMotoristNonMotoristTabPage, CrashOccupantsTabPage, CrashTruckBusTabPage,
  CrashUnitPage, CrashUnitPersonTabPage, CrashUnitVehicleTabPage,
  CrashUnitDamageConditionsTabPage,
  CitationSearchPage,
  CitationEntryPage, CitationViolationsTabPage, CitationOffenseTabPage,
  CitationCourtTabPage,
  ParkingEntryPage, ParkingEntryMainTabPage, ParkingSearchPage,
  ParkingPermitsPage, ParkingPermitsSearchPage,
  DeerCrashPage, CourtSearchPage as TrafficCourtSearchPage,
  CourtEntryPage as TrafficCourtEntryPage,
  CitationArrestPage, RemarksPage,
} from '../pages/traffic';

// ── Type ─────────────────────────────────────────────────────────────────────

export type TrafficFixture = {
  traffic: {
    module: TrafficPage;
    crashSearch: CrashSearchPage;
    crashSearchHelpWindow: CrashSearchHelpWindowPage;
    crashEntry: CrashEntryPage & {
      crashEntryMainTab: CrashEntryMainTabPage;
      crashWitnessTab: CrashWitnessTabPage;
      crashMotoristNonMotoristTab: CrashMotoristNonMotoristTabPage;
      crashOccupantsTab: CrashOccupantsTabPage;
      crashTruckBusTab: CrashTruckBusTabPage;
    };
    crashUnit: CrashUnitPage & {
      crashUnitPersonTab: CrashUnitPersonTabPage;
      crashUnitVehicleTab: CrashUnitVehicleTabPage;
      crashUnitDamageConditionsTab: CrashUnitDamageConditionsTabPage;
    };
    citationSearch: CitationSearchPage;
    citationEntry: CitationEntryPage & {
      citationViolationsTab: CitationViolationsTabPage;
      citationOffenseTab: CitationOffenseTabPage;
      citationCourtTab: CitationCourtTabPage;
    };
    parkingEntry: ParkingEntryPage & { parkingEntryMainTab: ParkingEntryMainTabPage };
    parkingSearch: ParkingSearchPage;
    parkingPermits: ParkingPermitsPage;
    parkingPermitsSearch: ParkingPermitsSearchPage;
    deerCrash: DeerCrashPage;
    courtSearch: TrafficCourtSearchPage;
    courtEntry: TrafficCourtEntryPage;
    citationArrest: CitationArrestPage;
    remarks: RemarksPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

const buildTraffic = (page: Page): TrafficFixture['traffic'] => {
  const crashEntry = Object.assign(new CrashEntryPage(page), {
    crashEntryMainTab: new CrashEntryMainTabPage(page),
    crashWitnessTab: new CrashWitnessTabPage(page),
    crashMotoristNonMotoristTab: new CrashMotoristNonMotoristTabPage(page),
    crashOccupantsTab: new CrashOccupantsTabPage(page),
    crashTruckBusTab: new CrashTruckBusTabPage(page),
  });
  const crashUnit = Object.assign(new CrashUnitPage(page), {
    crashUnitPersonTab: new CrashUnitPersonTabPage(page),
    crashUnitVehicleTab: new CrashUnitVehicleTabPage(page),
    crashUnitDamageConditionsTab: new CrashUnitDamageConditionsTabPage(page),
  });
  const citationEntry = Object.assign(new CitationEntryPage(page), {
    citationViolationsTab: new CitationViolationsTabPage(page),
    citationOffenseTab: new CitationOffenseTabPage(page),
    citationCourtTab: new CitationCourtTabPage(page),
  });
  const parkingEntry = Object.assign(new ParkingEntryPage(page), {
    parkingEntryMainTab: new ParkingEntryMainTabPage(page),
  });
  return {
    module: new TrafficPage(page),
    crashSearch: new CrashSearchPage(page),
    crashSearchHelpWindow: new CrashSearchHelpWindowPage(page),
    crashEntry,
    crashUnit,
    citationSearch: new CitationSearchPage(page),
    citationEntry,
    parkingEntry,
    parkingSearch: new ParkingSearchPage(page),
    parkingPermits: new ParkingPermitsPage(page),
    parkingPermitsSearch: new ParkingPermitsSearchPage(page),
    deerCrash: new DeerCrashPage(page),
    courtSearch: new TrafficCourtSearchPage(page),
    courtEntry: new TrafficCourtEntryPage(page),
    citationArrest: new CitationArrestPage(page),
    remarks: new RemarksPage(page),
  };
};

export const trafficFixtureDefs = {
  traffic: async ({ page }: { page: Page }, use: (v: TrafficFixture['traffic']) => Promise<void>) => {
    await use(buildTraffic(page));
  },
};

// ── Wisconsin-specific traffic variant (reuses the same page objects) ────────

export type TrafficWIFixture = {
  trafficWI: TrafficFixture['traffic'] & {
    citationSearchHelpWindow: CitationSearchPage;
  };
};

export const trafficWIFixtureDefs = {
  trafficWI: async ({ page }: { page: Page }, use: (v: TrafficWIFixture['trafficWI']) => Promise<void>) => {
    const traffic = buildTraffic(page);
    await use({
      ...traffic,
      citationSearchHelpWindow: traffic.citationSearch,
    });
  },
};
