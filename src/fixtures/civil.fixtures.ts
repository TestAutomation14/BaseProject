import { Page } from '@playwright/test';
import {
  CivilPage,
  CivilSearchPage,
  CivilFormPage, CivilFeesPaymentsTabPage, CivilNamesTabPage, CivilServiceTabPage,
  CivilPropertyTabPage, CivilCommentsTabPage, CivilNarrativeTabPage,
  AuthenticationWindowPage,
  PaperEntryPage, DistrictPage, DistrictCodePage,
  PaymentPage, CivilStatementPage,
  PaperTypePage, PaperTypesEntryPage,
  CivilContactPage, PropertyInventoryScreenPage, CivilPropertyPage, CivilDetailsPage,
  AssignmentPage, ServiceActionPage, ServiceActionEntryPage,
  ServiceAreaPage, CCAPMapPage, JobsPage, MobileEntryPage,
  LevyCaseSearchPage, LevyCaseEntryPage, LevyEntryPage,
} from '../pages/civil';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CivilFixture = {
  civil: {
    module: CivilPage;
    civilSearch: CivilSearchPage;
    civilForm: CivilFormPage & {
      civilFeesPaymentsTab: CivilFeesPaymentsTabPage;
      civilNamesTab: CivilNamesTabPage;
      civilServiceTab: CivilServiceTabPage;
      civilPropertyTab: CivilPropertyTabPage;
      civilCommentsTab: CivilCommentsTabPage;
      civilNarrativeTab: CivilNarrativeTabPage;
    };
    authenticationWindow: AuthenticationWindowPage;
    paperEntry: PaperEntryPage;
    district: DistrictPage;
    districtCode: DistrictCodePage;
    payment: PaymentPage;
    civilStatement: CivilStatementPage;
    paperType: PaperTypePage;
    paperTypesEntry: PaperTypesEntryPage;
    civilContact: CivilContactPage;
    propertyInventoryScreen: PropertyInventoryScreenPage;
    civilProperty: CivilPropertyPage;
    civilDetails: CivilDetailsPage;
    assignment: AssignmentPage;
    serviceAction: ServiceActionPage;
    serviceActionEntry: ServiceActionEntryPage;
    serviceArea: ServiceAreaPage;
    cCAPMap: CCAPMapPage;
    jobs: JobsPage;
    mobileEntry: MobileEntryPage;
    levyCaseSearch: LevyCaseSearchPage;
    levyCaseEntry: LevyCaseEntryPage;
    levyEntry: LevyEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const civilFixtureDefs = {
  civil: async ({ page }: { page: Page }, use: (v: CivilFixture['civil']) => Promise<void>) => {
    const civilForm = Object.assign(new CivilFormPage(page), {
      civilFeesPaymentsTab: new CivilFeesPaymentsTabPage(page),
      civilNamesTab: new CivilNamesTabPage(page),
      civilServiceTab: new CivilServiceTabPage(page),
      civilPropertyTab: new CivilPropertyTabPage(page),
      civilCommentsTab: new CivilCommentsTabPage(page),
      civilNarrativeTab: new CivilNarrativeTabPage(page),
    });
    await use({
      module: new CivilPage(page),
      civilSearch: new CivilSearchPage(page),
      civilForm,
      authenticationWindow: new AuthenticationWindowPage(page),
      paperEntry: new PaperEntryPage(page),
      district: new DistrictPage(page),
      districtCode: new DistrictCodePage(page),
      payment: new PaymentPage(page),
      civilStatement: new CivilStatementPage(page),
      paperType: new PaperTypePage(page),
      paperTypesEntry: new PaperTypesEntryPage(page),
      civilContact: new CivilContactPage(page),
      propertyInventoryScreen: new PropertyInventoryScreenPage(page),
      civilProperty: new CivilPropertyPage(page),
      civilDetails: new CivilDetailsPage(page),
      assignment: new AssignmentPage(page),
      serviceAction: new ServiceActionPage(page),
      serviceActionEntry: new ServiceActionEntryPage(page),
      serviceArea: new ServiceAreaPage(page),
      cCAPMap: new CCAPMapPage(page),
      jobs: new JobsPage(page),
      mobileEntry: new MobileEntryPage(page),
      levyCaseSearch: new LevyCaseSearchPage(page),
      levyCaseEntry: new LevyCaseEntryPage(page),
      levyEntry: new LevyEntryPage(page),
    });
  },
};
