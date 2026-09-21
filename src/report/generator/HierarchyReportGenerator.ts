import fs from "fs";
import path from "path";
import ejs from "ejs";
import { Properties } from "../../config/Properties";
import { exportPdf } from "./PdfExporter";
import { mergeHierarchyJson } from "./DataAggregator";


const ENV = process.env.ENV || "test";
Properties.load(ENV);

/* ✅ BASE PATH */
let basePath = Properties.get("REPORT_BASE_PATH");

if (!basePath) {
  throw new Error("❌ REPORT_BASE_PATH is not configured");
}

// ✅ Normalize path separators and handle UNC paths only for network shares
// Convert forward slashes to backslashes
basePath = basePath.replace(/\//g, "\\");

// Only add UNC prefix if it's a network path (not a local drive path)
if (!basePath.startsWith("\\\\") && !basePath.match(/^[A-Z]:\\/i)) {
  // Network path without UNC prefix - add it
  basePath = "\\\\" + basePath.replace(/^\\+/, "");
}

console.log("📁 Base Report Path:", basePath);

/* ✅ RAW JSON FOLDER */
const resultsFolder = path.join(basePath, "raw");

export type HierarchyGenerationOptions = {
  startDate?: string;
  endDate?: string;
};

export class HierarchyReportGenerator {

  static async generate(product: string, options: HierarchyGenerationOptions = {}) {
    const {
      startDate = formatDateKey(new Date()),
      endDate = startDate
    } = options;
    const rangeStart = parseDateKey(startDate, 'startDate');
    const rangeEnd = parseDateKey(endDate, 'endDate');
    if (rangeStart > rangeEnd) {
      throw new Error(`Hierarchy date range is invalid: ${startDate} is after ${endDate}`);
    }
    console.log('🔎 Starting report aggregation...');
    console.log(`📅 Hierarchy report date range: ${startDate} to ${endDate}`);

    /* ✅ STEP 1: READ JSON FILES */
    if (!fs.existsSync(resultsFolder)) {
      console.log("❌ Raw results folder not found:", resultsFolder);
      return;
    }

    const mergeResult = mergeHierarchyJson(resultsFolder, rangeStart, rangeEnd);
    const files = mergeResult.files;

    console.log(`📂 Found ${files.length} JSON files:`, files);

    if (!files.length) {
      console.log("❌ No JSON files found");
      return;
    }

    const mergedRaw = mergeResult.data;
    console.log(`📊 Total merged suites: ${mergedRaw.suites.length} (from all historical runs)`);

    // ✅ STEP 3: SAVE MERGED JSON
    const mergedFilePath = path.join(resultsFolder, "merged-results.json");
    fs.writeFileSync(mergedFilePath, JSON.stringify(mergedRaw, null, 2), "utf-8");
    console.log("✅ Merged JSON created:", mergedFilePath);

    // ✅ STEP 4: GENERATE ONE HIERARCHICAL REPORT FROM MERGED DATA
    await this.generateReportFromMerged(product, mergedRaw, basePath);

    console.log(`\n✅ Hierarchy report generated successfully`);
  }

  private static async generateReportFromMerged(product: string, raw: any, basePath: string) {
    // Store each generated hierarchy report under the day it was generated.
    // The merged input can contain older historical results and must not move
    // the current report into an old execution-date folder.
    const timestamp = new Date()
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "");

    const rootOutput = path.join(basePath, timestamp, product);
    fs.mkdirSync(rootOutput, { recursive: true });

    // Only refresh the hierarchy summary pages. Keep suite-wise report directories intact.
    for (const legacyFile of ["index.html", "index.pdf"]) {
      const legacyPath = path.join(rootOutput, legacyFile);
      if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
    }

    console.log(`📂 Generating hierarchical report: ${timestamp}/${product}`);

    /* ✅ COPY ASSETS */
    const assetsSource = path.join(process.cwd(), "src/Report/assets");
    const assetsTarget = path.join(rootOutput, "assets");

    if (fs.existsSync(assetsSource)) {
      fs.cpSync(assetsSource, assetsTarget, { recursive: true });
    }

    const moduleMap: any = {};
    const folderName = (value: string) =>
      value.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "_").replace(/^_+|_+$/g, "");
    const folderSegments = (value: string) =>
      value.split("/").filter(Boolean).map(folderName);
    const normalizeStatus = (status?: string): 'passed' | 'failed' | 'skipped' => {
      if (status === 'passed' || status === 'expected') return 'passed';
      if (status === 'failed' || status === 'unexpected' || status === 'timedOut') return 'failed';
      return 'skipped';
    };

    const validSuites = (raw.suites || []).filter((s: any) => s.file);

    /* ✅ BUILD HIERARCHY */
    validSuites.forEach((suite: any) => {

      const normalizedFile = suite.file
        .replace(/\\/g, "/")
        .split("/")
        .filter(Boolean);
      const file = normalizedFile.pop() || "unknown.spec.ts";
      const suiteFolder = file.replace(".spec.ts", "");

      const relativeFromScripts = suite.file
        .replace(/\\/g, "/")
        .split("/src/test/scripts/")
        .pop();

      const relativeSegments = (relativeFromScripts || file)
        .split("/")
        .filter(Boolean)
        .slice(0, -1);

      const moduleName = relativeSegments[0] || "General";
      const categorySegments = relativeSegments.slice(1);
      const category = categorySegments.length > 0
        ? categorySegments.join("/")
        : (findDescribeTitle(suite) || suiteFolder);

      const suiteDisplayName = findDescribeTitle(suite) || suiteFolder;

      const summary = { total: 0, passed: 0, failed: 0, skipped: 0 };

      const specs = [
        ...(suite.specs || []),
        ...(suite.suites || []).flatMap((inner: any) => inner.specs || [])
      ];
      specs.forEach((spec: any) => {
        (spec.tests || []).forEach((test: any) => {
          summary.total++;

          const result = test.results?.[0];
          if (!result) return;

        const normalized = normalizeStatus(result.status);
        if (normalized === "passed") summary.passed++;
        else if (normalized === "failed") summary.failed++;
        else summary.skipped++;
      });
      });

      /* ✅ MODULE */
      if (!moduleMap[moduleName]) {
        moduleMap[moduleName] = {
          name: moduleName,
          folderName: folderName(moduleName),
          summary: { total: 0, passed: 0, failed: 0, skipped: 0 },
          categories: {}
        };
      }

      const moduleObj = moduleMap[moduleName];

      /* ✅ CATEGORY */
      if (!moduleObj.categories[category]) {
        moduleObj.categories[category] = {
          name: category,
          folderSegments: folderSegments(category),
          summary: { total: 0, passed: 0, failed: 0, skipped: 0 },
          suites: []
        };
      }

      const categoryObj = moduleObj.categories[category];

      categoryObj.suites.push({
        name: suiteDisplayName,
        summary,
        machine: suite.machine,
        suiteFile: suite.file,
        reportDate: suite.reportDate
      });

      ["total", "passed", "failed", "skipped"].forEach(k => {
        moduleObj.summary[k] += summary[k];
        categoryObj.summary[k] += summary[k];
      });
    });

    /* ✅ LOAD TEMPLATES */
    const moduleTemplate = fs.readFileSync(
      path.join(process.cwd(), "src/Report/templates/module.ejs"),
      "utf-8"
    );
    const pdfPaths: string[] = [];
    const reportFileName = (...names: string[]) =>
      `${names.join("_").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase()}.html`;
    const relativeHref = (fromFile: string, toFile: string) =>
      path.relative(path.dirname(fromFile), toFile).replace(/\\/g, "/");

    const categoryTemplate = fs.readFileSync(
      path.join(process.cwd(), "src/Report/templates/category.ejs"),
      "utf-8"
    );

    const overallTemplate = fs.readFileSync(
      path.join(process.cwd(), "src/Report/templates/overall.ejs"),
      "utf-8"
    );

    /* ✅ GENERATE MODULE + CATEGORY */
    Object.values(moduleMap).forEach((module: any) => {

      const modulePath = path.join(rootOutput, module.folderName);
      fs.mkdirSync(modulePath, { recursive: true });

      const moduleFileName = reportFileName(module.name, "module");
      module.reportFileName = moduleFileName;
      const moduleHtmlPath = path.join(modulePath, moduleFileName);
      module.reportPath = relativeHref(
        path.join(rootOutput, "overall.html"),
        moduleHtmlPath
      );
      for (const legacyFile of ["index.html", "index.pdf"]) {
        const legacyPath = path.join(modulePath, legacyFile);
        if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
      }

      const categories = Object.values(module.categories);
      categories.forEach((cat: any) => {
        const categoryFolders = cat.folderSegments as string[];
        cat.reportFileName = reportFileName(module.name, cat.name, "category");
        const categoryHtmlPath = path.join(
          modulePath,
          ...categoryFolders,
          cat.reportFileName
        );
        cat.reportPath = relativeHref(moduleHtmlPath, categoryHtmlPath);
        cat.breadcrumbs = [
          {
            label: module.name,
            href: relativeHref(categoryHtmlPath, moduleHtmlPath),
            active: false
          },
          ...categoryFolders.map((folder: string, index: number) => {
            const folderPath = path.join(modulePath, ...categoryFolders.slice(0, index + 1));
            const isLeaf = index === categoryFolders.length - 1;
            return {
              label: folder,
              href: isLeaf
                ? relativeHref(categoryHtmlPath, categoryHtmlPath)
                : `${relativeHref(categoryHtmlPath, folderPath)}/`,
              active: isLeaf
            };
          })
        ];
        cat.suites.forEach((suite: any) => {
          const suitePath = getSuiteReportPath(suite.suiteFile);
          const suiteReportPath = path.join(
            basePath,
            suite.reportDate || timestamp,
            product,
            suitePath
          );
          suite.link = path.relative(
            path.join(rootOutput, module.folderName, ...categoryFolders),
            suiteReportPath
          ).replace(/\\/g, "/");
        });
      });

      const moduleHTML = ejs.render(moduleTemplate, {
        title: module.name,
        reportFileName: moduleFileName,
        overallReportPath: relativeHref(moduleHtmlPath, path.join(rootOutput, "overall.html")),
        product,
        generatedAt: new Date(raw.stats.startTime).toLocaleString(),
        data: {
          summary: module.summary,
          categories
        }
      });

      fs.writeFileSync(moduleHtmlPath, moduleHTML);
      pdfPaths.push(moduleHtmlPath);

      categories.forEach((cat: any) => {

        const categoryFolders = cat.folderSegments;
        const categoryPath = path.join(modulePath, ...categoryFolders);
        fs.mkdirSync(categoryPath, { recursive: true });

        const categoryFileName = cat.reportFileName;
        const categoryHtmlPath = path.join(
          categoryPath,
          categoryFileName
        );
        for (const legacyFile of ["index.html", "index.pdf"]) {
          const legacyPath = path.join(categoryPath, legacyFile);
          if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
        }

        const categoryHTML = ejs.render(categoryTemplate, {
          title: `${module.name}/${cat.name}`,
          moduleName: module.name,
          reportFileName: categoryFileName,
          moduleReportFileName: moduleFileName,
          overallReportPath: relativeHref(categoryHtmlPath, path.join(rootOutput, "overall.html")),
          assetPrefix: '../'.repeat(categoryFolders.length + 1),
          moduleReportPath: relativeHref(categoryHtmlPath, moduleHtmlPath),
          breadcrumbs: cat.breadcrumbs,
          product,
          generatedAt: new Date(raw.stats.startTime).toLocaleString(),
          data: {
            summary: cat.summary,
            suites: cat.suites
          }
        });

        fs.writeFileSync(categoryHtmlPath, categoryHTML);
        pdfPaths.push(categoryHtmlPath);
      });
    });

    /* ✅ OVERALL REPORT */
    const overallSummary = { total: 0, passed: 0, failed: 0, skipped: 0 };

    Object.values(moduleMap).forEach((mod: any) => {
      ["total", "passed", "failed", "skipped"].forEach(k => {
        overallSummary[k] += mod.summary[k];
      });
    });

    const overallHTML = ejs.render(overallTemplate, {
      title: "Overall Report",
      overallReportPath: "./overall.html",
      product,
      generatedAt: new Date(raw.stats.startTime).toLocaleString(),
      data: {
        summary: overallSummary,
        modules: Object.values(moduleMap)
      }
    });

    const overallHtmlPath = path.join(rootOutput, "overall.html");
    fs.writeFileSync(overallHtmlPath, overallHTML);
    pdfPaths.push(overallHtmlPath);

    if (Properties.get("PDF_REPORT_ENABLED").toLowerCase() === "true") {
      await Promise.all(pdfPaths.map(pdfPath => exportPdf(pdfPath)));
      console.log(`📄 Hierarchy PDF reports generated: ${pdfPaths.length}`);
    } else {
      console.log("📄 Hierarchy PDF report generation is disabled.");
    }

    console.log("✅ Hierarchy reports generated successfully");
    console.log("📁 Output:", rootOutput);
  }
}

function findDescribeTitle(suite: any): string | undefined {
  const isFileLike = (title: unknown): title is string =>
    typeof title === 'string' &&
    title.trim().length > 0 &&
    !title.endsWith('.spec.ts') &&
    !title.includes('/') &&
    !title.includes('\\');

  for (const child of suite.suites || []) {
    if (isFileLike(child.title)) return child.title.trim();
    const nestedTitle = findDescribeTitle(child);
    if (nestedTitle) return nestedTitle;
  }

  return isFileLike(suite.title) ? suite.title.trim() : undefined;
}

function getSuiteReportPath(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const scriptsRelative = normalized.split("tests").pop() || path.basename(normalized);
  const suiteDirectory = scriptsRelative.replace(/\.spec\.ts$/i, "");
  const suiteFileName = path.basename(scriptsRelative).replace(/\.ts$/i, ".html");
  return path.join(suiteDirectory, suiteFileName);
}

function formatDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDateKey(value: string, name: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`${name} must use YYYY-MM-DD format: ${value}`);
  }
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    throw new Error(`${name} is not a valid calendar date: ${value}`);
  }
  if (name === 'startDate') date.setHours(0, 0, 0, 0);
  else date.setHours(23, 59, 59, 999);
  return date;
}