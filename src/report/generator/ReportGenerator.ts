import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import os from 'os';
import { exportPdf } from './PdfExporter';
import { Properties } from '../../config/Properties';
import {
  aggregateTests,
  getExecutionBrowser,
  getLastTestResult,
  getSuiteFile,
  getResultTimeBounds,
  getResultVideoHost,
  getResultVideoTestName,
  getTestAnnotations,
  getTestAttachments,
  getTestDuration,
  getTestEndTime,
  getTestError,
  getReportMachineName,
  resolveReportStartTime,
  getSuiteTests,
  getSuiteStartTime,
  getTestTitle,
  getTestStartTime,
  getTestStatus,
  normalizeAggregatedStatus,
  readJsonFile,
  loadReportJsonData
} from './DataAggregator';


const videoReportProtocol = Properties.get('VIDEO_REPORT_PROTOCOL') || 'http';
const videoReportPort = Properties.get('VIDEO_REPORT_PORT') || '4450';
const videoReportOnFailureOnly = Properties.get('VIDEO_REPORT_ON_FAILURE_ONLY') !== 'false';

const getFailedVideoUrl = (
  status: string,
  testTitle: string,
  videoHost: string,
  hasError: boolean
): string | undefined => {
  // Playwright can mark a test as skipped after an execution error (for
  // example, when the browser closes during a locator action). Keep the
  // diagnostic video link for that case as well.
  if (videoReportOnFailureOnly && status !== 'failed' && !hasError) return undefined;

  return `${videoReportProtocol}://${videoHost}:${videoReportPort}/?title=${encodeURIComponent(testTitle)}`;
};

// ✅ Correct base path
const basePath =
  Properties.get("REPORT_BASE_PATH");
if (!basePath) {
  throw new Error("❌ REPORT_BASE_PATH is not configured");
}

console.log("📁 Base Report Path:", basePath);

export class ReportGenerator {
  static async generateSuiteReport({ suite, product, useJson = false }: any) {

    const baseReportPath =
      Properties.get('REPORT_BASE_PATH') ||
      path.join(process.cwd(), 'src', 'Report');

    fs.mkdirSync(baseReportPath, { recursive: true });

    const allTests = suite.allTests();

    const reportJson = useJson ? loadReportJsonData() : { suites: [], tests: [], stats: {} };

    const runStartTime = useJson
      ? resolveReportStartTime(reportJson, suite)
      : getSuiteStartTime(suite);

    const timestamp = new Date(runStartTime)
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '');

    /* ✅ PATH FIX: use the actual spec file stem, not the full nested suite title,
       otherwise the filename can duplicate the suite directory path and create a
       non-existent nested path like .../SuiteDir/Records/.../Pursuit.spec.ts.html */
    let suitePath: string | null = null;
    let filePath: string | null = null;

    if (useJson && getSuiteFile(reportJson, suite.location?.file, suite.title)) {
      const suiteFile = suite.location?.file;
      filePath = getSuiteFile(reportJson, suiteFile, suite.title);
    } else {
      filePath = allTests?.[0]?.location?.file || null;
    }

    if (filePath) {
      let relativePath = filePath.replace(/\\/g, '/');

      if (relativePath.includes('tests')) {
        relativePath = relativePath.split('tests')[1];
      }

      suitePath = relativePath
        .replace(/^\//, '')
        .replace(/\.spec\.ts$/, '')
        .replace(/\//g, path.sep);
    }

    if (!suitePath) return;

    const fallbackFileName = filePath
      ? path.basename(filePath).replace(/\.ts$/i, '')
      : (suite.title || 'report').replace(/\s+/g, '_');

    const safeName = fallbackFileName.replace(/[\\/:*?"<>|]+/g, '_');

    if (allTests.length === 0) return;

    const outputDir = path.join(baseReportPath, timestamp, product, suitePath);

    fs.mkdirSync(outputDir, { recursive: true });

    /* ✅ Remove stale HTML/PDF artifacts for the same suite before regenerating.
       This ensures rerunning the same spec overwrites the previous report rather
       than leaving multiple generations in the same folder. */
    for (const entry of fs.readdirSync(outputDir, { withFileTypes: true })) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.html' || ext === '.pdf') {
        fs.unlinkSync(path.join(outputDir, entry.name));
      }
    }

    /* ✅ assets */
    const assetsSource = path.join(process.cwd(), 'src/Report/assets');
    const assetsTarget = path.join(outputDir, 'assets');

    if (fs.existsSync(assetsSource)) {
      fs.cpSync(assetsSource, assetsTarget, { recursive: true });
    }

    const attachmentsDir = path.join(outputDir, 'attachments');
    fs.mkdirSync(attachmentsDir, { recursive: true });

    const executedBy =
      process.env.USERNAME || process.env.USER || 'Unknown User';

    const osName = os.platform();

    const executionBrowser = getExecutionBrowser(reportJson, allTests);
    const sourceTests = useJson
      ? getSuiteTests(reportJson, suite.location?.file, suite.title, allTests)
      : allTests;

    /* ✅ ✅ ✅ TOTAL DURATION + SUITE END TIME (OPTIMIZED) */

    const { duration: totalDurationMs, endTime: suiteEndTime } =
      getResultTimeBounds(sourceTests);

    /* ✅ SUM DURATION (OPTIONAL METRIC) */
    const sumDuration = sourceTests.reduce((sum: number, t: any) => {
      return sum + getTestDuration(t);
    }, 0);

    /* ✅ FORMAT FUNCTION */
    function formatDuration(ms: number) {
      if (!ms || isNaN(ms)) return '0s';

      const totalSec = Math.floor(ms / 1000);
      const hr = Math.floor(totalSec / 3600);
      const min = Math.floor((totalSec % 3600) / 60);
      const sec = totalSec % 60;

      if (hr > 0) return `${hr}h ${min}m ${sec}s`;
      if (min > 0) return `${min}m ${sec}s`;
      return `${sec}s`;
    }

    /* ✅ ✅ ✅ TEST DATA (FIXED) */
    const tests = sourceTests.map((test: any) => {

      const lastResult = getLastTestResult(test);
      const startTime = getTestStartTime(test);
      const endTime = getTestEndTime(test);

      const startTimeFormatted = startTime
        ? startTime.toLocaleString()
        : 'N/A';

      const endTimeFormatted = endTime
        ? endTime.toLocaleString()
        : 'N/A';

      const actualStatus = normalizeAggregatedStatus(getTestStatus(test) || test.outcome?.() || 'skipped');
      const normalizedStatus = actualStatus;

      const annotations = getTestAnnotations(test);

      const severity =
        annotations.find((a: any) => a.type === 'severity')?.description || 'Not Set';

      const priority =
        annotations.find((a: any) => a.type === 'priority')?.description || 'Not Set';

      const videoHost =
        getResultVideoHost(lastResult) ||
        annotations.find((a: any) => a.type === 'video-host')?.description ||
        getReportMachineName();
      const testTitle = getTestTitle(test);
      const videoTestName = getResultVideoTestName(lastResult, testTitle);

      const attachments: any[] = [];
      let performanceMetrics: { user?: string; screens?: Array<{
        url?: string;
        capturedAt?: string;
        navigation?: {
          ttfb?: number;
          domContentLoaded?: number;
          load?: number;
          domInteractive?: number;
          transferSize?: number;
        };
        webVitals?: {
          fcp?: number | null;
          lcp?: number | null;
          cls?: number;
          inp?: number | null;
        };
        resourceCount?: number;
      }>; testDurationMs?: number } | undefined;

      /* ✅ FIXED ATTACHMENTS */
      for (const att of getTestAttachments(test)) {

        if (!att.path || !fs.existsSync(att.path)) continue;
        if (att.name === 'video-report-host') continue;

        if (att.name === 'performance-metrics.json') {
          try {
            performanceMetrics = readJsonFile(att.path);
          } catch (error) {
            console.warn(`⚠ Failed to read performance metrics for ${testTitle}:`, error);
          }
          continue;
        }

        const isTrace = att.contentType === 'application/zip';
        const isVideo = att.contentType?.includes('video');
        const isImage = att.contentType?.startsWith('image');

        // ✅ Only surface attachments the report template can actually render
        // (screenshots, videos, traces). Other attachments such as
        // performance-metrics.json are captured for every test (pass or
        // fail) and would otherwise show an empty "Attachments" section.
        if (!isTrace && !isVideo && !isImage) continue;

        const ext = path.extname(att.path);

        // ✅ PICK ONLY LAST VIDEO IF MULTIPLE EXIST
        const baseName =
          `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;

        let finalName = baseName;

        if (isTrace) finalName = `Trace_${baseName}`;
        if (isVideo) finalName = `Video_${baseName}`;

        const destPath = path.join(attachmentsDir, finalName);

        try {
          // ✅ Ensure file exists before copying
          if (fs.existsSync(att.path)) {
            fs.copyFileSync(att.path, destPath);

            attachments.push({
              fileName: finalName,
              contentType: att.contentType
            });
          } else {
            console.log("⚠ Attachment not found:", att.path);
          }
        } catch (err) {
          console.log("❌ Failed to copy attachment:", err);
        }
      }

      return {
        title: testTitle,
        executionUser: performanceMetrics?.user || 'User 1',
        executionStartTimeMs: startTime?.getTime() ?? Number.MAX_SAFE_INTEGER,
        status: normalizedStatus,
        duration: getTestDuration(test),
        durationFormatted: formatDuration(getTestDuration(test)),
        
        attachments,
        performanceMetrics,
        videoUrl: getFailedVideoUrl(
          normalizedStatus,
          videoTestName,
          videoHost,
          Boolean(getTestError(test))
        ),
        error: getTestError(test),
        executedBy,
        machineName: videoHost,
        osName,
        executionBrowser,
        startTime: startTimeFormatted,
        endTime: endTimeFormatted,

        severity,
        priority
      };
    });

    tests.sort((left: any, right: any) =>
      left.executionStartTimeMs - right.executionStartTimeMs
    );
    tests.forEach((test: any, index: number) => {
      test.executionOrder = index + 1;
    });

    /* ✅ SUMMARY */
    const summary = aggregateTests(tests).summary;

    const template = fs.readFileSync(
      path.join(process.cwd(), 'src/Report/templates/suite.ejs'),
      'utf-8'
    );

    const resolvedTitle = typeof suite.title === 'string' && suite.title && !suite.title.endsWith('.spec.ts') && !suite.title.includes('\\') && !suite.title.includes('/')
      ? suite.title
      : (filePath ? path.basename(filePath, path.extname(filePath)) : suite.title || 'Automation Report');
    const describeTitle = (() => {
      const fileLike = (value?: string) =>
        !!value && (value.endsWith('.spec.ts') || value.includes('\\') || value.includes('/'));
      const findDescribeTitle = (candidate: any): string | undefined => {
        if (candidate?.title && !fileLike(candidate.title)) return candidate.title;
        for (const child of candidate?.suites || []) {
          const title = findDescribeTitle(child);
          if (title) return title;
        }
        return undefined;
      };
      const runtimeTitle = findDescribeTitle(suite);
      if (runtimeTitle) return runtimeTitle;

      if (filePath && fs.existsSync(filePath)) {
        const source = fs.readFileSync(filePath, 'utf-8');
        const describeMatch = source.match(
          /\b(?:test\.)?describe\s*\(\s*(['"`])([\s\S]*?)\1/
        );
        if (describeMatch?.[2]?.trim()) return describeMatch[2].trim();
      }

      return resolvedTitle;
    })();

    const suiteHtmlPath = path.join(outputDir, `${safeName}.html`);
    const hierarchyRoot = path.join(baseReportPath, timestamp, product);
    const suiteDirectorySegments = path.relative(hierarchyRoot, outputDir)
      .split(path.sep)
      .filter(Boolean);
    const breadcrumbItems: Array<{ label: string; href: string; active?: boolean }> = [
      { label: 'Home', href: path.relative(outputDir, path.join(hierarchyRoot, 'overall.html')).replace(/\\/g, '/') }
    ];
    suiteDirectorySegments.forEach((segment, index) => {
      const folderPath = path.join(hierarchyRoot, ...suiteDirectorySegments.slice(0, index + 1));
      let targetPath = folderPath;
      const reportFiles = fs.existsSync(folderPath)
        ? fs.readdirSync(folderPath).filter((entry) => entry.endsWith('.html'))
        : [];
      const reportFile = index === 0
        ? reportFiles.find((entry) => entry.endsWith('_module.html'))
        : reportFiles.find((entry) => entry.endsWith('_category.html'));
      if (reportFile) targetPath = path.join(folderPath, reportFile);

      breadcrumbItems.push({
        label: segment,
        href: path.relative(outputDir, targetPath).replace(/\\/g, '/') || '.'
      });
    });
    breadcrumbItems.push({
      label: resolvedTitle,
      href: path.basename(suiteHtmlPath),
      active: true
    });

    const html = ejs.render(template, {
      title: resolvedTitle,
      product,
      breadcrumbs: breadcrumbItems,
      generatedAt: new Date(runStartTime).toLocaleString(),
      executionBrowser,
      endTime: suiteEndTime ? suiteEndTime.toLocaleString() : 'N/A', // ✅ ADD THIS
      data: {
        summary,
        tests,
        stats: {
          duration: totalDurationMs,
          formattedDuration: formatDuration(totalDurationMs),
          totalTestDuration: formatDuration(sumDuration)
        }
      }
    });

    const htmlPath = suiteHtmlPath;
    console.log("📄 Generating report at:", htmlPath);
    fs.writeFileSync(htmlPath, html);

    if (Properties.get('PERFORMANCE_REPORT_ENABLED') !== 'false') {
      const performanceTests = tests.filter(test =>
        test.performanceMetrics?.screens && test.performanceMetrics.screens.length > 0
      );
      const performanceTemplate = fs.readFileSync(
        path.join(process.cwd(), 'src/Report/templates/performance.ejs'),
        'utf-8'
      );
      const performanceHtml = ejs.render(performanceTemplate, {
        title: describeTitle,
        product,
        generatedAt: new Date(runStartTime).toLocaleString(),
        performanceTests,
        userCount: new Set(performanceTests.map(test => test.executionUser)).size
      });
      const performanceHtmlPath = path.join(outputDir, `${safeName}-performance.html`);
      console.log("📊 Generating performance report at:", performanceHtmlPath);
      fs.writeFileSync(performanceHtmlPath, performanceHtml);
    }

    if (Properties.get('PDF_REPORT_ENABLED').toLowerCase() === 'true') {
      await exportPdf(htmlPath);
    } else {
      console.log('📄 PDF report generation is disabled.');
    }
  }
}