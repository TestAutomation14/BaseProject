import { Page, Locator } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * File handling helpers (migrated from ObjectIdentification: FilesHandle, ReadPDF, ReadExcel, ReadCSVFile)
 */
export class FileHelpers {
  // ─── File Upload/Download ──────────────────────────────────────────────────

  static async uploadFile(page: Page, selector: string, filePath: string) {
    const fileInput = page.locator(selector);
    await fileInput.setInputFiles(filePath);
  }

  static async uploadMultipleFiles(page: Page, selector: string, filePaths: string[]) {
    const fileInput = page.locator(selector);
    await fileInput.setInputFiles(filePaths);
  }

  static async downloadFile(page: Page, triggerSelector: string, downloadDir: string): Promise<string> {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator(triggerSelector).click(),
    ]);
    const filePath = path.join(downloadDir, download.suggestedFilename());
    await download.saveAs(filePath);
    return filePath;
  }

  static async downloadFileByAction(page: Page, action: () => Promise<void>, downloadDir: string): Promise<string> {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      action(),
    ]);
    const filePath = path.join(downloadDir, download.suggestedFilename());
    await download.saveAs(filePath);
    return filePath;
  }

  // ─── PDF Operations (ReadPDF) ──────────────────────────────────────────────

  static async readPdfText(filePath: string): Promise<string> {
    const pdfParse = require('pdf-parse');
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  }

  static async getPdfPageCount(filePath: string): Promise<number> {
    const pdfParse = require('pdf-parse');
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.numpages;
  }

  static async verifyPdfContainsText(filePath: string, expectedText: string): Promise<boolean> {
    const text = await FileHelpers.readPdfText(filePath);
    return text.includes(expectedText);
  }

  static async getPdfTextByPage(filePath: string, pageNumber: number): Promise<string> {
    const pdfParse = require('pdf-parse');
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer, {
      pagerender: (pageData: any) => {
        if (pageData.pageIndex === pageNumber - 1) {
          return pageData.getTextContent().then((textContent: any) => {
            return textContent.items.map((item: any) => item.str).join(' ');
          });
        }
        return '';
      },
    });
    return data.text;
  }

  // ─── Excel Operations (ReadExcel) ──────────────────────────────────────────

  static async readExcel(filePath: string, sheetName?: string): Promise<Record<string, any>[]> {
    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = sheetName
      ? workbook.getWorksheet(sheetName)
      : workbook.worksheets[0];

    const rows: Record<string, any>[] = [];
    const headers: string[] = [];

    worksheet.eachRow((row: any, rowNumber: number) => {
      if (rowNumber === 1) {
        row.eachCell((cell: any) => headers.push(cell.value?.toString() || ''));
      } else {
        const rowData: Record<string, any> = {};
        row.eachCell((cell: any, colNumber: number) => {
          rowData[headers[colNumber - 1]] = cell.value;
        });
        rows.push(rowData);
      }
    });

    return rows;
  }

  static async getExcelCellValue(filePath: string, sheetName: string, row: number, col: number): Promise<string> {
    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);
    const cell = worksheet.getRow(row).getCell(col);
    return cell.value?.toString() || '';
  }

  static async getExcelRowCount(filePath: string, sheetName?: string): Promise<number> {
    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = sheetName
      ? workbook.getWorksheet(sheetName)
      : workbook.worksheets[0];
    return worksheet.rowCount;
  }

  // ─── CSV Operations (ReadCSVFile) ──────────────────────────────────────────

  static async readCsv(filePath: string): Promise<Record<string, string>[]> {
    const csvParser = require('csv-parser');
    const results: Record<string, string>[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data: Record<string, string>) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (err: Error) => reject(err));
    });
  }

  // ─── File System Utilities ─────────────────────────────────────────────────

  static fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  static deleteFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  static getFilesInDirectory(dirPath: string): string[] {
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath);
  }

  static getFileSize(filePath: string): number {
    const stats = fs.statSync(filePath);
    return stats.size;
  }

  static readFileAsString(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
  }

  static async waitForFile(dirPath: string, filePattern: RegExp, timeoutMs: number = 30000): Promise<string> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      const files = fs.readdirSync(dirPath);
      const match = files.find((f) => filePattern.test(f));
      if (match) return path.join(dirPath, match);
      await new Promise((res) => setTimeout(res, 500));
    }
    throw new Error(`File matching ${filePattern} not found in ${dirPath} within ${timeoutMs}ms`);
  }

  static createDirectory(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
}
