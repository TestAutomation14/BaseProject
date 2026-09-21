import { Page } from '@playwright/test';
import {
  VideoPage,
  CameraViewConfigEntryPage, CameraViewConfigSearchPage,
  VideoInterviewSearchPage,
  VideoInterviewEntryPage, VideoInterviewOfficersTabPage,
} from '../pages/video';

// ── Type ─────────────────────────────────────────────────────────────────────
// NOTE: fixture key is `videoModule` (not `video`) because Playwright reserves
// `video` as a worker-scoped option controlling video recording.

export type VideoFixture = {
  videoModule: {
    module: VideoPage;
    cameraViewConfigEntry: CameraViewConfigEntryPage;
    cameraViewConfigSearch: CameraViewConfigSearchPage;
    videoInterviewSearch: VideoInterviewSearchPage;
    videoInterviewEntry: VideoInterviewEntryPage & {
      videoInterviewOfficersTab: VideoInterviewOfficersTabPage;
    };
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const videoFixtureDefs = {
  videoModule: async ({ page }: { page: Page }, use: (v: VideoFixture['videoModule']) => Promise<void>) => {
    const videoInterviewEntry = Object.assign(new VideoInterviewEntryPage(page), {
      videoInterviewOfficersTab: new VideoInterviewOfficersTabPage(page),
    });
    await use({
      module: new VideoPage(page),
      cameraViewConfigEntry: new CameraViewConfigEntryPage(page),
      cameraViewConfigSearch: new CameraViewConfigSearchPage(page),
      videoInterviewSearch: new VideoInterviewSearchPage(page),
      videoInterviewEntry,
    });
  },
};
