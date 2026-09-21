import { Page } from '@playwright/test';
import {
  NameSearchPage, NameEntryPage, NamesPage, NameEntryMainTabPage, AdditionalNumberScreenPage,
  PseudonymEntryPage, ArrestSearchPage, StatementTabPage, ArrestEntryPage, NameEntryFlagTabPage,
  PhysicalTabPage, AliasTabPage, PhoneTabPage, NameEntryAddressesTabPage, FamilyTabPage,
  EmpSchoolTabPage, InfoTabPage, GangTabPage, NameEntryCommentsTabPage, NamesCommentsPage,
  AssociateTabPage, VisitorsTabPage,
  NameSearchHelpWindowPage,
  GangDetailEntryPage,
  ArrestTabPage,
  ChargeTabPage,
  GunPermitSearchPage,
  GunPermitEntryPage, GunPermitEntryMainTabPage, GunPermitEntryNarrativeTabPage,
  GunPermitCommentsPage, GunPermitEntryHistoryTabPage, GunPermitEntryRegistrationTabPage,
  MedicalTabPage,
  DispositionTabPage
} from '../pages/names';
import { createFrameProxy, createPopupProxy } from '../helpers/browser-helpers';
import { DateHelpers, ElementHelpers } from '../helpers';
import { wrapWithAutoContext } from '../helpers/browser-helpers';

// ── Type ─────────────────────────────────────────────────────────────────────

export type NamesFixture = {
  namesSearch: NameSearchPage;
  namesEntry: NameEntryPage;
  names: {
    module: NamesPage;
    nameSearchHelpWindow: NameSearchHelpWindowPage;
    namesSearch: NameSearchPage;
    namesEntry: NameEntryPage;
    nameSearch: NameSearchPage;
    nameEntry: NameEntryPage & {
      nameEntryMainTab: NameEntryMainTabPage;
      physicalTab: PhysicalTabPage;
      aliasTab: AliasTabPage;
      nameEntryAddressesTab: NameEntryAddressesTabPage;
      phoneTab: PhoneTabPage;
      nameEntryFlagTab: NameEntryFlagTabPage;
      familyTab: FamilyTabPage;
      empSchoolTab: EmpSchoolTabPage;
      infoTab: InfoTabPage;
      gangTab: GangTabPage;
      nameEntryCommentsTab: NameEntryCommentsTabPage;
      namesComments: NamesCommentsPage;
      associateTab: AssociateTabPage;
      visitorsTab: VisitorsTabPage;
    };
    arrestSearch: ArrestSearchPage;
    arrestEntry: ArrestEntryPage & { statementTabPage: StatementTabPage; arrestTab: ArrestTabPage; chargeTab: ChargeTabPage };
    elementHelpers: ElementHelpers;
    gangDetailEntry: GangDetailEntryPage;
    gunPermitSearch: GunPermitSearchPage;
    gunPermitEntry: GunPermitEntryPage & { gunPermitEntryMainTab: GunPermitEntryMainTabPage; gunPermitEntryNarrativeTab: GunPermitEntryNarrativeTabPage; gunPermitComments: GunPermitCommentsPage; gunPermitEntryHistoryTab: GunPermitEntryHistoryTabPage; gunPermitEntryRegistrationTab: GunPermitEntryRegistrationTabPage };
    [key: string]: any;
  };
};


// ── Definitions ──────────────────────────────────────────────────────────────

export const namesFixtureDefs = {
  namesSearch: async ({ page }: { page: Page }, use: (v: NameSearchPage) => Promise<void>) => {
    await use(new NameSearchPage(page));
  },

  namesEntry: async ({ page }: { page: Page }, use: (v: NameEntryPage) => Promise<void>) => {
    await use(new NameEntryPage(page));
  },

  names: async ({ page }: { page: Page }, use: (v: NamesFixture['names']) => Promise<void>) => {
    const nameSearchFrame = createFrameProxy(page, 'frmNameSrch');
    const nameSearch = new NameSearchPage(nameSearchFrame);
    const nameEntryPage = createPopupProxy(page, 'frmName.aspx');
    const nameEntry = Object.assign(new NameEntryPage(nameEntryPage), {
      nameEntryMainTab: new NameEntryMainTabPage(nameEntryPage),
      physicalTab: new PhysicalTabPage(nameEntryPage),
      aliasTab: new AliasTabPage(nameEntryPage),
      nameEntryFlagTab: new NameEntryFlagTabPage(nameEntryPage),
      nameEntryAddressesTab: new NameEntryAddressesTabPage(nameEntryPage),
      phoneTab: new PhoneTabPage(nameEntryPage),
      familyTab: wrapWithAutoContext(page, FamilyTabPage),
      empSchoolTab: wrapWithAutoContext(page, EmpSchoolTabPage),
      namesComments: new NamesCommentsPage(nameEntryPage),
      associateTab: wrapWithAutoContext(page, AssociateTabPage),
      visitorsTab: wrapWithAutoContext(page, VisitorsTabPage),
      infoTab: wrapWithAutoContext(page, InfoTabPage),
      gangTab: wrapWithAutoContext(page, GangTabPage),
      nameEntryCommentsTab: wrapWithAutoContext(page, NameEntryCommentsTabPage)
    });
    const arrestSearchProxy = createFrameProxy(page, 'frmBookingSrch');
    const arrestEntryProxy = createPopupProxy(page, 'Booking/frmBooking');
    const arrestEntry = Object.assign(new ArrestEntryPage(arrestEntryProxy), {
      statementTabPage: new StatementTabPage(arrestEntryProxy),
      arrestTab: wrapWithAutoContext(page, ArrestTabPage),
      chargeTab: wrapWithAutoContext(page, ChargeTabPage),
      medicalTab: wrapWithAutoContext(page, MedicalTabPage),
      dispositionTab: wrapWithAutoContext(page, DispositionTabPage),
    });
    const GunPermitSearchProxy = createFrameProxy(page, 'frmGunpermitsSrch');
    const GunPermitEntryProxy = createPopupProxy(page, 'frmGunpermits');
    const gunPermitEntry = Object.assign(new GunPermitEntryPage(GunPermitEntryProxy), {
      gunPermitEntryMainTab: new GunPermitEntryMainTabPage(GunPermitEntryProxy),
      gunPermitEntryNarrativeTab: new GunPermitEntryNarrativeTabPage(GunPermitEntryProxy),
      gunPermitComments: new GunPermitCommentsPage(GunPermitEntryProxy),
      gunPermitEntryHistoryTab: new GunPermitEntryHistoryTabPage(GunPermitEntryProxy),
      gunPermitEntryRegistrationTab: new GunPermitEntryRegistrationTabPage(GunPermitEntryProxy)
    });
    await use({
      module: new NamesPage(page),
      nameSearchHelpWindow: wrapWithAutoContext(page, NameSearchHelpWindowPage),
      namesSearch: nameSearch,
      namesEntry: nameEntry,
      nameSearch, nameEntry,
      dateHelpers: new DateHelpers(),
      elementHelpers: new ElementHelpers(page),
      arrestSearch: new ArrestSearchPage(arrestSearchProxy),
      arrestEntry: arrestEntry,
      additionalNumberScreen: new AdditionalNumberScreenPage(createPopupProxy(page, 'frmNameNumber')),
      pseudonymEntry: new PseudonymEntryPage(createPopupProxy(page, 'frmPseudonym')),
      gangDetailEntry: new GangDetailEntryPage(page),
      gunPermitSearch: new GunPermitSearchPage(GunPermitSearchProxy),
      gunPermitEntry: gunPermitEntry,
    });
  },
};

