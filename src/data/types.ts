/**
 * TypeScript interfaces for test data structures.
 * Each interface represents the shape of a single test case record within a module JSON file.
 *
 * JSON Structure: { "testId": { "ColumnName": "value", ... }, ... }
 */

// ─── Common / Shared ─────────────────────────────────────────────────────────

export interface LoginData {
  UserName: string;
  Password: string;
  Database: string;
}

export interface TestContext {
  testId: string;
  moduleName: string;
}

// ─── Geo Module ──────────────────────────────────────────────────────────────

export interface GeoData {
  Prefix?: string;
  StreetName?: string;
  StreetType?: string;
  Suffix?: string;
  ZipCode?: string;
  CSZ?: string;
  LowAddress?: string;
  HighAddress?: string;
  City?: string;
  State?: string;
  Zone?: string;
  District?: string;
  Subdivision?: string;
  CommonName?: string;
  Intersection1?: string;
  Intersection2?: string;
  UserName?: string;
  Password?: string;
  Database?: string;
  [key: string]: string | undefined;
}

// ─── Names Module ────────────────────────────────────────────────────────────

export interface NamesData {
  LastName?: string;
  FirstName?: string;
  MiddleName?: string;
  NameType?: string;
  NameID?: string;
  DOB?: string;
  SSN?: string;
  Race?: string;
  Sex?: string;
  Height?: string;
  Weight?: string;
  Hair?: string;
  Eyes?: string;
  Flags?: string;
  Officer1?: string;
  CaseNo1?: string;
  Charge1?: string;
  How?: string;
  NewCharge?: string;
  Address?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Phone?: string;
  [key: string]: string | undefined;
}

// ─── Inventory Module ────────────────────────────────────────────────────────

export interface InventoryData {
  ItemDescription?: string;
  Category?: string;
  Make?: string;
  Model?: string;
  SerialNumber?: string;
  Color?: string;
  Size?: string;
  Quantity?: string;
  UnitCost?: string;
  StorageLocation?: string;
  Status?: string;
  CaseNo?: string;
  [key: string]: string | undefined;
}

// ─── Vehicle Module ──────────────────────────────────────────────────────────

export interface VehicleData {
  PlateNumber?: string;
  PlateState?: string;
  PlateType?: string;
  PlateYear?: string;
  VIN?: string;
  Year?: string;
  Make?: string;
  Model?: string;
  Style?: string;
  Color?: string;
  OwnerName?: string;
  Status?: string;
  [key: string]: string | undefined;
}

// ─── Scheduling Module ───────────────────────────────────────────────────────

export interface SchedulingData {
  ScheduleType?: string;
  StartDate?: string;
  EndDate?: string;
  StartTime?: string;
  EndTime?: string;
  Officer?: string;
  Unit?: string;
  Assignment?: string;
  Shift?: string;
  [key: string]: string | undefined;
}

// ─── Settings Module ─────────────────────────────────────────────────────────

export interface SettingsData {
  SettingName?: string;
  SettingValue?: string;
  Category?: string;
  Description?: string;
  [key: string]: string | undefined;
}

// ─── Training Module ─────────────────────────────────────────────────────────

export interface TrainingData {
  CourseName?: string;
  CourseType?: string;
  Instructor?: string;
  StartDate?: string;
  EndDate?: string;
  Hours?: string;
  Officer?: string;
  Status?: string;
  [key: string]: string | undefined;
}

// ─── Home Module ─────────────────────────────────────────────────────────────

export interface HomeData {
  UserName?: string;
  Password?: string;
  CaseNo?: string;
  StorageLocation?: string;
  [key: string]: string | undefined;
}

// ─── Accounting Module ───────────────────────────────────────────────────────

export interface AccountingData {
  AccountNumber?: string;
  Description?: string;
  Amount?: string;
  TransactionType?: string;
  [key: string]: string | undefined;
}

// ─── Activity Module ─────────────────────────────────────────────────────────

export interface ActivityData {
  ActivityType?: string;
  CaseNo?: string;
  Officer?: string;
  Date?: string;
  Location?: string;
  Description?: string;
  [key: string]: string | undefined;
}

// ─── CAD Module ──────────────────────────────────────────────────────────────

export interface CADData {
  CallType?: string;
  Priority?: string;
  Location?: string;
  Address?: string;
  Unit?: string;
  Officer?: string;
  Disposition?: string;
  [key: string]: string | undefined;
}

// ─── Personnel Module ────────────────────────────────────────────────────────

export interface PersonnelData {
  EmployeeID?: string;
  LastName?: string;
  FirstName?: string;
  Rank?: string;
  Badge?: string;
  Division?: string;
  Status?: string;
  [key: string]: string | undefined;
}

// ─── Helpdesk Module ─────────────────────────────────────────────────────────

export interface HelpdeskData {
  TicketNumber?: string;
  Category?: string;
  Priority?: string;
  Description?: string;
  Status?: string;
  AssignedTo?: string;
  [key: string]: string | undefined;
}

// ─── Smoke Test Module ───────────────────────────────────────────────────────

export interface BaseSmokeData {
  UserName?: string;
  Password?: string;
  Database?: string;
  Module?: string;
  Screen?: string;
  Action?: string;
  ExpectedResult?: string;
  [key: string]: string | undefined;
}

// ─── Generic Module Data (fallback for modules without specific interfaces) ──

export interface ModuleData {
  [key: string]: string | undefined;
}

// ─── Module JSON File Structure ──────────────────────────────────────────────

/** Shape of an entire module JSON file: { testId: { column: value } } */
export type ModuleJsonFile<T = ModuleData> = Record<string, T>;

// ─── Module Name Union Type ──────────────────────────────────────────────────

export type ModuleName =
  | 'Geo'
  | 'Names'
  | 'Inventory'
  | 'Vehicle'
  | 'Scheduling'
  | 'Settings'
  | 'Training'
  | 'Home'
  | 'Login'
  | 'Accounting'
  | 'Activity'
  | 'Admission'
  | 'BI'
  | 'CAD'
  | 'CitizenServices'
  | 'DocumentManagement'
  | 'EmploymentApplicants'
  | 'FacilityManagement'
  | 'Helpdesk'
  | 'Personnel'
  | 'QA'
  | 'Tow'
  | 'BaseSmokeTest';
