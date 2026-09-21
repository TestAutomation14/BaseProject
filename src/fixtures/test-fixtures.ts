import { expect } from '@playwright/test';
import { createTestContext, withTestContext } from '../data/test-context';
import { test as base, type RemoteBrowserFixtures } from './remoteBrowser.fixture';

// ── Domain fixture definitions ────────────────────────────────────────────────
import { loginFixtureDefs, type LoginFixture } from './login.fixtures';
import { loaderFixtureDefs, type LoaderFixture } from './loader.fixtures';
import { popupFixtureDefs, type PopupFixture } from './popup.fixtures';
import { testDataFixtureDefs, type TestDataFixture } from './test-data.fixtures';
import { appConfigFixtureDefs, type AppConfigFixture } from './app-config.fixtures';
import { geoFixtureDefs, type GeoFixture } from './geo.fixtures';
import { homeFixtureDefs, type HomeFixture } from './home.fixtures';
import { namesFixtureDefs, type NamesFixture } from './names.fixtures';
import { accountingFixtureDefs, type AccountingFixture } from './accounting.fixtures';
import { helpdeskFixtureDefs, type HelpdeskFixture } from './helpdesk.fixtures';
import { activityFixtureDefs, type ActivityFixture } from './activity.fixtures';
import { documentManagementFixtureDefs, type DocumentManagementFixture } from './document-management.fixtures';
import { personnelFixtureDefs, type PersonnelFixture } from './personnel.fixtures';
import { detailWorkFixtureDefs, type DetailWorkFixture } from './detail-work.fixtures';
import { biFixtureDefs, type BIFixture } from './bi.fixtures';
import { cadFixtureDefs, type CADFixture } from './cad.fixtures';
import { trainingFixtureDefs, type TrainingFixture } from './training.fixtures';
import { towFixtureDefs, type TowFixture } from './tow.fixtures';
import { vehicleFixtureDefs, type VehicleFixture } from './vehicle.fixtures';
import { employmentApplicantsFixtureDefs, type EmploymentApplicantsFixture } from './employment-applicants.fixtures';
import { citizenServicesFixtureDefs, type CitizenServicesFixture } from './citizen-services.fixtures';
import { facilityManagementFixtureDefs, type FacilityManagementFixture } from './facility-management.fixtures';
import { schedulingFixtureDefs, type SchedulingFixture } from './scheduling.fixtures';
import { admissionFixtureDefs, type AdmissionFixture } from './admission.fixtures';
import { qaFixtureDefs, type QAFixture } from './qa.fixtures';
import { inventoryFixtureDefs, type InventoryFixture } from './inventory.fixtures';
import { settingsFixtureDefs, type SettingsFixture } from './settings.fixtures';
import { recordsFixtureDefs, type RecordsFixture } from './records.fixtures';
import { propertyFixtureDefs, type PropertyFixture } from './property.fixtures';
import { cmFixtureDefs, type CMFixture } from './cm.fixtures';
import {
  trafficFixtureDefs, trafficWIFixtureDefs,
  type TrafficFixture, type TrafficWIFixture,
} from './traffic.fixtures';
import { animalControlFixtureDefs, type AnimalControlFixture } from './animal-control.fixtures';
import { alarmsFixtureDefs, type AlarmsFixture } from './alarms.fixtures';
import { k9FixtureDefs, type K9Fixture } from './k9.fixtures';
import { coronerFixtureDefs, type CoronerFixture } from './coroner.fixtures';
import { ftoFixtureDefs, type FTOFixture } from './fto.fixtures';
import { aiFixtureDefs, type AIFixture } from './ai.fixtures';
import { civilFixtureDefs, type CivilFixture } from './civil.fixtures';
import { commissaryFixtureDefs, type CommissaryFixture } from './commissary.fixtures';
import { courtFixtureDefs, type CourtFixture } from './court.fixtures';
import { cadqaqiFixtureDefs, type CADQAQIFixture } from './cadqaqi.fixtures';
import { medicalFixtureDefs, type MedicalFixture } from './medical.fixtures';
import { stateDemoFixtureDefs, type StateDemoFixture } from './state-demo.fixtures';
import { videoFixtureDefs, type VideoFixture } from './video.fixtures';
import { warrantFixtureDefs, type WarrantFixture } from './warrant.fixtures';

// ── Composite fixture type ────────────────────────────────────────────────────

type PhoenixFixtures =
  & RemoteBrowserFixtures
  & LoginFixture
  & LoaderFixture
  & PopupFixture
  & TestDataFixture
  & AppConfigFixture
  & GeoFixture
  & HomeFixture
  & NamesFixture
  & AccountingFixture
  & HelpdeskFixture
  & ActivityFixture
  & DocumentManagementFixture
  & PersonnelFixture
  & DetailWorkFixture
  & BIFixture
  & CADFixture
  & TrainingFixture
  & TowFixture
  & VehicleFixture
  & EmploymentApplicantsFixture
  & CitizenServicesFixture
  & FacilityManagementFixture
  & SchedulingFixture
  & AdmissionFixture
  & QAFixture
  & InventoryFixture
  & SettingsFixture
  & RecordsFixture
  & PropertyFixture
  & CMFixture
  & TrafficFixture
  & TrafficWIFixture
  & AnimalControlFixture
  & AlarmsFixture
  & K9Fixture
  & CoronerFixture
  & FTOFixture
  & AIFixture
  & CivilFixture
  & CommissaryFixture
  & CourtFixture
  & CADQAQIFixture
  & MedicalFixture
  & StateDemoFixture
  & VideoFixture
  & WarrantFixture;

// ── Extended test ─────────────────────────────────────────────────────────────

export const test = base.extend<PhoenixFixtures>({
  // ── Page-level override (CSS injection, logging, unhandledRejection suppressor) ──
  page: async ({ remotePage: page }, use) => {
    // Suppress unhandled rejections from ASP.NET's arguments.callee in strict mode
    const suppressHandler = (reason: any) => {
      if (reason && reason.message && reason.message.includes('callee')) {
        // Swallow this specific error - it's from ASP.NET AJAX's _doPostBack
        // being triggered during Playwright's internal evaluate in strict mode
        return;
      }
    };
    process.on('unhandledRejection', suppressHandler);

    // Inject CSS to hide the globalPopup overlay on page loads
    // Skip authenticator pages to avoid interfering with their postback communication
    await page.context().route(/\.aspx/i, async (route) => {
      const url = route.request().url().toLowerCase();
      // Don't intercept authenticator requests or POST requests
      if (route.request().method() !== 'GET' || url.includes('authenticate')) {
        await route.continue();
        return;
      }
      const response = await route.fetch();
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('text/html')) {
        let body = await response.text();
        const overlayCSS = '<style>#globalPopup,.popup-overlay{display:none!important;pointer-events:none!important;opacity:0!important;}</style>';
        if (body.includes('</head>')) {
          body = body.replace('</head>', overlayCSS + '</head>');
        } else if (body.includes('<body')) {
          body = body.replace('<body', overlayCSS + '<body');
        }
        await route.fulfill({ response, body });
      } else {
        await route.fulfill({ response });
      }
    });

    // Debug: track page open/close events
    page.context().on('page', (newPage) => {
      const shortUrl = newPage.url().split('/').pop()?.split('?')[0] || newPage.url();
      console.log('[CONTEXT] New page opened:', newPage.url());
      newPage.on('close', () => {
        console.log('[CONTEXT] Page closed:', shortUrl);
      });
    });

    await use(page);
    process.removeListener('unhandledRejection', suppressHandler);
  },

  // ── Domain fixtures (spread from domain modules) ──────────────────────────
  ...loginFixtureDefs,
  ...loaderFixtureDefs,
  ...popupFixtureDefs,
  ...testDataFixtureDefs,
  ...appConfigFixtureDefs,
  ...geoFixtureDefs,
  ...homeFixtureDefs,
  ...namesFixtureDefs,
  ...accountingFixtureDefs,
  ...helpdeskFixtureDefs,
  ...activityFixtureDefs,
  ...documentManagementFixtureDefs,
  ...personnelFixtureDefs,
  ...detailWorkFixtureDefs,
  ...biFixtureDefs,
  ...cadFixtureDefs,
  ...trainingFixtureDefs,
  ...towFixtureDefs,
  ...vehicleFixtureDefs,
  ...employmentApplicantsFixtureDefs,
  ...citizenServicesFixtureDefs,
  ...facilityManagementFixtureDefs,
  ...schedulingFixtureDefs,
  ...admissionFixtureDefs,
  ...qaFixtureDefs,
  ...inventoryFixtureDefs,
  ...settingsFixtureDefs,
  ...recordsFixtureDefs,
  ...propertyFixtureDefs,
  ...cmFixtureDefs,
  ...trafficFixtureDefs,
  ...trafficWIFixtureDefs,
  ...animalControlFixtureDefs,
  ...alarmsFixtureDefs,
  ...k9FixtureDefs,
  ...coronerFixtureDefs,
  ...ftoFixtureDefs,
  ...aiFixtureDefs,
  ...civilFixtureDefs,
  ...commissaryFixtureDefs,
  ...courtFixtureDefs,
  ...cadqaqiFixtureDefs,
  ...medicalFixtureDefs,
  ...stateDemoFixtureDefs,
  ...videoFixtureDefs,
  ...warrantFixtureDefs,
});

export { expect, withTestContext, createTestContext };
