import { Page } from '@playwright/test';
import {
  MedicalPage,
  DoctorSearchPage, DoctorEntryPage,
  MedicalSearchPage, MedicalHistoryPage, ChartingTabPage,
  MedicalDentistPage, MedicationPage, MedicationSchedulePage,
} from '../pages/medical';

// ── Type ─────────────────────────────────────────────────────────────────────

export type MedicalFixture = {
  medical: {
    module: MedicalPage;
    doctorSearch: DoctorSearchPage;
    doctorEntry: DoctorEntryPage;
    medicalSearch: MedicalSearchPage;
    medicalHistory: MedicalHistoryPage & { chartingTab: ChartingTabPage };
    medicalDentist: MedicalDentistPage;
    medication: MedicationPage;
    medicationSchedule: MedicationSchedulePage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const medicalFixtureDefs = {
  medical: async ({ page }: { page: Page }, use: (v: MedicalFixture['medical']) => Promise<void>) => {
    const medicalHistory = Object.assign(new MedicalHistoryPage(page), {
      chartingTab: new ChartingTabPage(page),
    });
    await use({
      module: new MedicalPage(page),
      doctorSearch: new DoctorSearchPage(page),
      doctorEntry: new DoctorEntryPage(page),
      medicalSearch: new MedicalSearchPage(page),
      medicalHistory,
      medicalDentist: new MedicalDentistPage(page),
      medication: new MedicationPage(page),
      medicationSchedule: new MedicationSchedulePage(page),
    });
  },
};
