import type { Page } from 'playwright';

export type PerformanceMetrics = {
  url: string;
  capturedAt: string;
  navigation: {
    ttfb: number;
    domContentLoaded: number;
    load: number;
    domInteractive: number;
    transferSize: number;
  };
  webVitals: {
    fcp: number | null;
    lcp: number | null;
    cls: number;
    inp: number | null;
  };
  resourceCount: number;
};

type BrowserVitals = {
  fcp: number | null;
  lcp: number | null;
  cls: number;
  inp: number | null;
  clsSessionValue: number;
  clsSessionStart: number | null;
  clsSessionLast: number | null;
};

export async function installPerformanceObservers(page: Page): Promise<void> {
  await page.addInitScript(() => {
    // Prevent the default 250-entry Resource Timing buffer from truncating counts.
    performance.setResourceTimingBufferSize(10000);
    const vitals: BrowserVitals = {
      fcp: null,
      lcp: null,
      cls: 0,
      inp: null,
      clsSessionValue: 0,
      clsSessionStart: null,
      clsSessionLast: null
    };
    (window as Window & { __pwVitals?: BrowserVitals }).__pwVitals = vitals;
    let lastPersistedSignature = '';

    const saveSnapshotBeforeNavigation = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcpEntry = lcpEntries[lcpEntries.length - 1];
      const eventEntries = performance.getEntriesByType('event');
      const inpEntry = eventEntries
        .filter(entry => entry.duration >= 16)
        .reduce((longest, entry) => entry.duration > (longest?.duration ?? 0) ? entry : longest, undefined as PerformanceEntry | undefined);
      const snapshot = {
        url: location.href,
        capturedAt: new Date().toISOString(),
        navigation: {
          ttfb: navigation?.responseStart || 0,
          domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
          load: navigation?.loadEventEnd || 0,
          domInteractive: navigation?.domInteractive || 0,
          transferSize: navigation?.transferSize || 0
        },
        webVitals: {
          fcp: vitals.fcp ?? fcpEntry?.startTime ?? null,
          lcp: vitals.lcp ?? lcpEntry?.startTime ?? null,
          cls: vitals.cls,
          inp: vitals.inp ?? inpEntry?.duration ?? null
        },
        resourceCount: performance.getEntriesByType('resource').length
      };
      try {
        const signature = JSON.stringify({
          fcp: snapshot.webVitals.fcp,
          lcp: snapshot.webVitals.lcp,
          inp: snapshot.webVitals.inp,
          cls: snapshot.webVitals.cls,
          resourceCount: snapshot.resourceCount
        });
        if (signature === lastPersistedSignature) return;
        lastPersistedSignature = signature;
        const stored = sessionStorage.getItem('__pwPreviousPerformanceMetrics');
        if (stored) {
          const previous = JSON.parse(stored) as typeof snapshot;
          if (previous.url === snapshot.url) {
            snapshot.navigation = {
              ttfb: previous.navigation.ttfb || snapshot.navigation.ttfb,
              domContentLoaded: previous.navigation.domContentLoaded || snapshot.navigation.domContentLoaded,
              load: previous.navigation.load || snapshot.navigation.load,
              domInteractive: previous.navigation.domInteractive || snapshot.navigation.domInteractive,
              transferSize: previous.navigation.transferSize || snapshot.navigation.transferSize
            };
            snapshot.webVitals = {
              fcp: previous.webVitals.fcp ?? snapshot.webVitals.fcp,
              lcp: previous.webVitals.lcp ?? snapshot.webVitals.lcp,
              cls: Math.max(previous.webVitals.cls, snapshot.webVitals.cls),
              inp: previous.webVitals.inp ?? snapshot.webVitals.inp
            };
            snapshot.resourceCount = Math.max(previous.resourceCount, snapshot.resourceCount);
          }
        }
        sessionStorage.setItem('__pwPreviousPerformanceMetrics', JSON.stringify(snapshot));
      } catch {
        // Storage is unavailable for error pages and other opaque documents.
      }
    };
    window.setInterval(saveSnapshotBeforeNavigation, 250);

    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const entry = entries.find(candidate => candidate.name === 'first-contentful-paint');
        if (entry) {
          vitals.fcp = entry.startTime;
          saveSnapshotBeforeNavigation();
        }
      }).observe({ type: 'paint', buffered: true });
    } catch {
      // Paint timing is not supported by every browser.
    }

    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          vitals.lcp = Math.max(vitals.lcp || 0, entry.startTime);
          saveSnapshotBeforeNavigation();
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // LCP is optional in older browser versions.
    }

    const recordInteractionFallback = () => {
      saveSnapshotBeforeNavigation();
      const start = performance.now();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          vitals.inp = Math.max(vitals.inp || 0, performance.now() - start);
        });
      });
    };
    document.addEventListener('click', recordInteractionFallback, true);
    document.addEventListener('pointerup', recordInteractionFallback, true);
    document.addEventListener('keydown', recordInteractionFallback, true);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && vitals.lcp === null) {
        const entries = performance.getEntriesByType('largest-contentful-paint');
        const entry = entries[entries.length - 1];
        if (entry) vitals.lcp = entry.startTime;
      }
      if (document.visibilityState === 'hidden') {
        saveSnapshotBeforeNavigation();
      }
    });
    window.addEventListener('pagehide', saveSnapshotBeforeNavigation);
    window.addEventListener('beforeunload', saveSnapshotBeforeNavigation);

    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          const layoutShift = entry as PerformanceEntry & {
            hadRecentInput?: boolean;
            value?: number;
          };
          if (layoutShift.hadRecentInput) continue;

          const shiftValue = layoutShift.value || 0;
          const shiftTime = layoutShift.startTime;
          const sessionStart = vitals.clsSessionStart;
          const sessionLast = vitals.clsSessionLast;
          const withinSession = sessionStart !== null &&
            sessionLast !== null &&
            shiftTime - sessionLast < 1000 &&
            shiftTime - sessionStart < 5000;

          vitals.clsSessionValue = withinSession
            ? vitals.clsSessionValue + shiftValue
            : shiftValue;
          vitals.cls = Math.max(vitals.cls, vitals.clsSessionValue);
          vitals.clsSessionStart = withinSession ? sessionStart : shiftTime;
          vitals.clsSessionLast = shiftTime;
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // CLS is optional in older browser versions.
    }

    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEventTiming[]) {
          const duration = entry.duration;
          vitals.inp = Math.max(vitals.inp || 0, duration);
        }
      }).observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);
    } catch {
      // Event timing is optional in older browser versions.
    }
  });
}

export async function collectPerformanceMetrics(page: Page, urlOverride?: string): Promise<PerformanceMetrics> {
  return page.evaluate((override) => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const vitals = (window as Window & { __pwVitals?: BrowserVitals }).__pwVitals;
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    const lcpEntry = lcpEntries[lcpEntries.length - 1];
    const eventEntries = performance.getEntriesByType('event');
    const inpEntry = eventEntries
      .filter(entry => entry.duration >= 16)
      .reduce((longest, entry) => entry.duration > (longest?.duration ?? 0) ? entry : longest, undefined as PerformanceEntry | undefined);

    return {
      url: override || location.href,
      capturedAt: new Date().toISOString(),
      navigation: {
        ttfb: navigation ? navigation.responseStart : 0,
        domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
        load: navigation?.loadEventEnd || 0,
        domInteractive: navigation ? navigation.domInteractive : 0,
        transferSize: navigation?.transferSize || 0,
      },
      webVitals: {
        fcp: vitals?.fcp ?? fcpEntry?.startTime ?? null,
        lcp: vitals?.lcp ?? lcpEntry?.startTime ?? null,
        cls: vitals?.cls ?? 0,
        inp: vitals?.inp ?? inpEntry?.duration ?? null,
      },
      resourceCount: performance.getEntriesByType('resource').length,
    };
  }, urlOverride);
}