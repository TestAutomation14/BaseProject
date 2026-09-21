/**
 * Date, time, and random data utility helpers (migrated from Randomized.java)
 */

export class DateHelpers {
  // ─── Current Date/Time ─────────────────────────────────────────────────────

  static getCurrentDate(format: string = 'MM/dd/yyyy'): string {
    return DateHelpers.formatDate(new Date(), format);
  }

  static getCurrentDayNumber(): string {
    return new Date().getDate().toString().padStart(2, '0');
  }

  static getCurrentMonth(): string {
    return (new Date().getMonth() + 1).toString().padStart(2, '0');
  }

  static getCurrentMonthName(): string {
    return new Date().toLocaleDateString('en-US', { month: 'short' });
  }

  static getCurrentMonthFullName(): string {
    return new Date().toLocaleDateString('en-US', { month: 'long' });
  }

  static getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  static getCurrentTime(format: string = 'HH:mm:ss'): string {
    return DateHelpers.formatDate(new Date(), format);
  }

  // ─── Future Date/Time ──────────────────────────────────────────────────────

  static getFutureDate(daysAhead: number, format: string = 'MM/dd/yyyy'): string {
    const future = DateHelpers.addDays(new Date(), daysAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureDateFromDate(fromDate: string, daysAhead: number, format: string = 'MM/dd/yyyy'): string {
    const baseDate = DateHelpers.parseDate(fromDate, format);
    const future = DateHelpers.addDays(baseDate, daysAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureDateByMonth(monthsAhead: number, format: string = 'MM/dd/yyyy'): string {
    const future = new Date();
    future.setMonth(future.getMonth() + monthsAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureYearByNoOfYears(yearsAhead: number, format: string = 'yyyy'): string {
    const future = new Date();
    future.setFullYear(future.getFullYear() + yearsAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureTimeByHours(hoursAhead: number, format: string = 'HH:mm'): string {
    const future = new Date();
    future.setHours(future.getHours() + hoursAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureTimeByMinutes(minutesAhead: number, format: string = 'HH:mm'): string {
    const future = new Date();
    future.setMinutes(future.getMinutes() + minutesAhead);
    return DateHelpers.formatDate(future, format);
  }

  static getFutureTimeFromGivenTime(fromTime: string, hoursAhead: number, format: string = 'HH:mm'): string {
    const [hours, minutes] = fromTime.split(':').map(Number);
    const d = new Date();
    d.setHours(hours + hoursAhead, minutes);
    return DateHelpers.formatDate(d, format);
  }

  static getFutureDayNumber(daysAhead: number): string {
    const future = DateHelpers.addDays(new Date(), daysAhead);
    return future.getDate().toString().padStart(2, '0');
  }

  // ─── Previous Date/Time ────────────────────────────────────────────────────

  static getPreviousDate(daysBack: number, format: string = 'MM/dd/yyyy'): string {
    const past = DateHelpers.addDays(new Date(), -daysBack);
    return DateHelpers.formatDate(past, format);
  }

  static getPreviousDateFromDate(fromDate: string, daysBack: number, format: string = 'MM/dd/yyyy'): string {
    const baseDate = DateHelpers.parseDate(fromDate, format);
    const past = DateHelpers.addDays(baseDate, -daysBack);
    return DateHelpers.formatDate(past, format);
  }

  static getPreviousDateByMonth(monthsBack: number, format: string = 'MM/dd/yyyy'): string {
    const past = new Date();
    past.setMonth(past.getMonth() - monthsBack);
    return DateHelpers.formatDate(past, format);
  }

  static getPreviousYear(yearsBack: number): string {
    return (new Date().getFullYear() - yearsBack).toString();
  }

  static getPreviousMonth(monthsBack: number): string {
    const past = new Date();
    past.setMonth(past.getMonth() - monthsBack);
    return (past.getMonth() + 1).toString().padStart(2, '0');
  }

  static getPreviousTimeByHours(hoursBack: number, format: string = 'HH:mm'): string {
    const past = new Date();
    past.setHours(past.getHours() - hoursBack);
    return DateHelpers.formatDate(past, format);
  }

  // ─── Date Calculations ─────────────────────────────────────────────────────

  static getNoOfDaysDifference(date1: string, date2: string, format: string = 'MM/dd/yyyy'): number {
    const d1 = DateHelpers.parseDate(date1, format);
    const d2 = DateHelpers.parseDate(date2, format);
    const diffMs = Math.abs(d2.getTime() - d1.getTime());
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  static getFirstDayOfYear(format: string = 'MM/dd/yyyy'): string {
    const d = new Date(new Date().getFullYear(), 0, 1);
    return DateHelpers.formatDate(d, format);
  }

  static getLastDayOfYear(format: string = 'MM/dd/yyyy'): string {
    const d = new Date(new Date().getFullYear(), 11, 31);
    return DateHelpers.formatDate(d, format);
  }

  static getDayByDate(dateStr: string, format: string = 'MM/dd/yyyy'): string {
    const d = DateHelpers.parseDate(dateStr, format);
    return d.toLocaleDateString('en-US', { weekday: 'long' });
  }

  static getStartOfWeek(dateStr: string, format: string = 'MM/dd/yyyy'): string {
    const d = DateHelpers.parseDate(dateStr, format);
    const day = d.getDay();
    d.setDate(d.getDate() - day); // Sunday
    return DateHelpers.formatDate(d, format);
  }

  static getEndOfWeek(dateStr: string, format: string = 'MM/dd/yyyy'): string {
    const d = DateHelpers.parseDate(dateStr, format);
    const day = d.getDay();
    d.setDate(d.getDate() + (6 - day)); // Saturday
    return DateHelpers.formatDate(d, format);
  }

  static isDateBetween(dateStr: string, fromStr: string, toStr: string, format: string = 'MM/dd/yyyy'): boolean {
    const date = DateHelpers.parseDate(dateStr, format).getTime();
    const from = DateHelpers.parseDate(fromStr, format).getTime();
    const to = DateHelpers.parseDate(toStr, format).getTime();
    return date >= from && date <= to;
  }

  // ─── Format Conversion ─────────────────────────────────────────────────────

  static convertFormat(dateStr: string, srcFormat: string, targetFormat: string): string {
    const d = DateHelpers.parseDate(dateStr, srcFormat);
    return DateHelpers.formatDate(d, targetFormat);
  }

  // ─── Internal Helpers ──────────────────────────────────────────────────────

  static formatDate(date: Date, format: string): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const replacements: [string, string][] = [
      ['yyyy', date.getFullYear().toString()],
      ['yy', date.getFullYear().toString().slice(-2)],
      ['MM', pad(date.getMonth() + 1)],
      ['M', (date.getMonth() + 1).toString()],
      ['dd', pad(date.getDate())],
      ['d', date.getDate().toString()],
      ['HH', pad(date.getHours())],
      ['hh', pad(date.getHours() % 12 || 12)],
      ['mm', pad(date.getMinutes())],
      ['ss', pad(date.getSeconds())],
      ['MMM', date.toLocaleDateString('en-US', { month: 'short' })],
    ];

    let result = format;
    for (const [key, value] of replacements) {
      result = result.replace(key, value);
    }
    return result;
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static parseDate(dateStr: string, format: string = 'MM/dd/yyyy'): Date {
    // Handle common formats
    if (format === 'MM/dd/yyyy' || format === 'M/d/yyyy') {
      const parts = dateStr.split('/');
      return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
    }
    if (format === 'yyyy-MM-dd') {
      const parts = dateStr.split('-');
      return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    }
    if (format === 'MMddyyyy') {
      return new Date(
        parseInt(dateStr.slice(4, 8)),
        parseInt(dateStr.slice(0, 2)) - 1,
        parseInt(dateStr.slice(2, 4))
      );
    }
    // Fallback
    return new Date(dateStr);
  }
  static convertDateFormat(dateStr: string, srcFormat: string, targetFormat: string): string {
    return DateHelpers.convertFormat(dateStr, srcFormat, targetFormat);
  }
}


