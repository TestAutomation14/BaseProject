import { chromium } from '@playwright/test';
import { pathToFileURL } from 'node:url';

export async function exportPdf(htmlPath: string) {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        @media print {
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .header {
            break-inside: avoid;
          }
          .card, .module-card, .module-chart-card, .module-category-card,
          .dashboard-wrapper, .execution-info, .test-card, table, tr {
            break-inside: avoid;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
      `
    });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).map(image =>
        image.complete
          ? Promise.resolve()
          : new Promise<void>(resolve => {
              image.addEventListener('load', () => resolve(), { once: true });
              image.addEventListener('error', () => resolve(), { once: true });
            })
      ));
    });
    await page.waitForTimeout(300);

    const title = await page.title();
    await page.pdf({
      path: htmlPath.replace('.html', '.pdf'),
      width: '420mm',
      height: '300mm',
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: '18mm',
        right: '10mm',
        bottom: '18mm',
        left: '10mm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="width:100%;font:9px Arial,sans-serif;color:#64748b;
          padding:0 10mm;display:flex;justify-content:space-between;">
          <span>${escapeHtml(title)}</span>
          <span>Automation Report</span>
        </div>`,
      footerTemplate: `
        <div style="width:100%;font:9px Arial,sans-serif;color:#64748b;
          padding:0 10mm;display:flex;justify-content:space-between;">
          <span>Generated ${new Date().toLocaleString()}</span>
          <span style="white-space:nowrap;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>`
    });
  } finally {
    await browser.close();
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character] || character));
}
