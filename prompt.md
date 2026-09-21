# Selenium to Playwright TypeScript Migration Prompt

## Project Overview

Migrate the **PhoenixBaseTest2026** Selenium Java/TestNG automation framework to **Playwright with TypeScript**. The source project is located at `D:\Phoenix2026Workspace\PhoenixBaseTest2026` and the target Playwright project will be at `D:\Migrations\BaseProject`.

---

## Source Framework Architecture (Selenium + Java + TestNG)

### Project Structure
```
src/test/java/
├── application/        → Page Object business logic (action methods)
│   ├── Login.java, Geo.java, Names.java, Home.java, Inventory.java
│   ├── Scheduling.java, Settings.java, Training.java, Vehicle.java
│   ├── Accounting.java, Activity.java, Admission.java, BI.java
│   ├── CAD.java, CitizenServices.java, DetailWork.java
│   ├── DocumentManagement.java, EmploymentApplicants.java
│   ├── FacilityManagement.java, Helpdesk.java, Personnel.java
│   ├── Loader.java, Popup.java, QA.java, Tow.java
│   └── ... (25 application classes)
├── uIMaps/             → Element locators (Page Factory pattern)
│   ├── UIMapLogin.java, UIMapGeo.java, UIMapNames.java
│   ├── UIMapHome.java, UIMapInventory.java, UIMapScheduling.java
│   └── ... (26 UIMap classes with @FindBy annotations)
├── scripts/            → Test classes (TestNG @Test methods)
│   ├── LoginScripts.java, GeoScripts.java, NamesScripts.java
│   ├── InventoryScripts.java, SchedulingScripts.java
│   ├── SettingsScripts.java, TrainingScripts.java, VehicleScripts.java
│   ├── BaseSmokeTest*.java (multiple smoke test classes)
│   └── ... (32 script classes)
├── utilities/          → Framework utilities
│   ├── Browser.java         → Browser navigation helpers
│   ├── Playback.java        → WebDriver lifecycle, waits, screenshots
│   ├── ObjectIdentification.java → Element interaction helpers (inner classes: WindowHandle, ManualIdentify, RandomIdentify, ActionBuilder, FilesHandle, ReadPDF, AttachmentsTab, SmokeTest, ReadExcel, ReadCSVFile)
│   ├── Randomized.java      → Date/time/random data utilities
│   └── verify.java          → Assertion wrapper methods
├── dataAccess/         → Test data management
│   ├── BaseData.java        → JSON-based test data reader (per module/testID)
│   └── FileHandle.java      → File read/write utilities
├── resources/          → Configuration
│   ├── config.properties    → Environment config (URL, browser, credentials, paths)
│   └── PropertiesFile.java  → Properties file reader
├── reports/            → Reporting
│   ├── ExtentReport.java    → ExtentReports integration
│   └── SendingMail.java     → Email report sender
└── Prerequities/       → Grid/Hub setup
    └── HubAndNode.java
```

### Test Suites
```
2026Suites/
├── AttachmentScripts/
├── CheckListScripts/
├── DailyDefectCRM/
├── DefectScripts/
├── EnhancementScripts/
├── FunctionalScripts/
├── LegacyScripts/
├── ProductBacklogScripts/
└── SystemParameter/
```

---

## Key Framework Patterns to Migrate

### 1. Three-Layer Architecture
- **UIMap (Locators)** → Use `@FindBy` with Page Factory pattern to define WebElements
- **Application (Actions)** → Business logic methods that operate on UIMap elements
- **Scripts (Tests)** → TestNG test classes with `@BeforeMethod`, `@Test`, `@AfterMethod`

### 2. WebDriver Lifecycle (`Playback.java`)
- `Playback.start()` → Initializes browser (Chrome/Edge/IE, local or Grid/Docker)
- `Playback.stop()` → Cleans cookies, quits driver
- `Playback.driver` → Static WebDriver instance shared across classes
- Thread waits: `pageLoadThreadWait()`, `controlReadyThreadWait()`, `gridLoadThreadWait()`, `popupThreadWait()`

### 3. Element Interaction (`ObjectIdentification.java`)
- **WindowHandle** → Window/tab switching, close popups, switch to main window
- **ManualIdentify** → Dropdown selection, click, sendKeys, scroll, clear
- **RandomIdentify** → Random data entry
- **ActionBuilder** → Mouse actions (hover, drag-drop, double-click)
- **FilesHandle** → File upload/download
- **ReadPDF** → PDF text extraction and verification
- **ReadExcel** → Excel file reading
- **ReadCSVFile** → CSV file reading
- **AttachmentsTab** → Attachment operations
- **SmokeTest** → Smoke test tab navigation

### 4. Test Data (`BaseData.java`)
- Reads from JSON files per module (e.g., `Geo.json`, `Names.json`)
- Uses `testContext.getAttribute("testID")` and `moduleName` to look up test data
- JSON path: configured via `config.properties` → `TestDataFilePath`
- Pattern: `BaseData.getGeoModuleValue("columnName")` / `BaseData.getTestContextData("key")`

### 5. Configuration (`config.properties`)
```properties
product=Police
Version=2024_140
url=https://ch140.prophoenix.com/Law/Login.aspx
BrowserType=ChromeGrid
HubURL=CHPNX473
HubPort=4444
Password=Pnx@2016
Database=AutomationPoliceMJ
UserName=Automation
TestDataFilePath=D:\\Phoenix2026Workspace\\JsonFiles2022\\JsonFiles\\
ReportsPath=\\\\10.103.1.194\\Automation\\ShareFolder\\ExtentReport\\
```

### 6. Reporting (ExtentReports)
- Suite-level and method-level report initialization
- Screenshots on failure
- Node IP tracking for grid execution
- HTML report generation with pass/fail/skip counts

### 7. Test Execution Pattern (TestNG)
```java
@BeforeSuite → ExtentReport.startReport(suitePath)
@BeforeMethod → Playback.start(), initialize page objects, ExtentReport.startReportForMethod()
@Test(groups = {...}) → Test logic with testContext attributes (testID, moduleName)
@AfterMethod → Playback.stop(), ExtentReport logging
@AfterSuite → ExtentReport.flush()
```

### 8. Multi-Window Handling
- Application uses iframes extensively (`//iframe[contains(@src,'...')]`)
- Tests switch between multiple browser windows/tabs
- Main window identified by title "Public Safety Solution"

### 9. Application Under Test
- **Phoenix Public Safety Solution** (web-based)
- Modules: Geo, Names, Inventory, Scheduling, Settings, Training, Vehicle, Accounting, Activity, CAD, etc.
- Navigation: Loader → Module → Screen pattern
- Uses ASP.NET WebForms (element IDs like `usrLogin_txtUserName`, `ctl00_...`)

---

## Target Playwright TypeScript Framework Structure

```
D:\Migrations\BaseProject\
├── playwright.config.ts          → Playwright configuration (baseURL, browsers, timeouts)
├── package.json
├── tsconfig.json
├── .env                          → Environment variables (URL, credentials, paths)
├── src/
│   ├── config/
│   │   └── environment.ts        → Config reader (replaces PropertiesFile.java)
│   ├── pages/                    → Page Object Model (merges UIMap + Application layers)
│   │   ├── login.page.ts
│   │   ├── home.page.ts
│   │   ├── loader.page.ts
│   │   ├── popup.page.ts
│   │   ├── geo/
│   │   │   ├── street-search.page.ts
│   │   │   ├── street-entry.page.ts
│   │   │   ├── common-names.page.ts
│   │   │   ├── address-intersection.page.ts
│   │   │   └── ... (all Geo sub-pages)
│   │   ├── names/
│   │   ├── inventory/
│   │   ├── scheduling/
│   │   ├── settings/
│   │   ├── training/
│   │   ├── vehicle/
│   │   ├── accounting/
│   │   ├── cad/
│   │   └── ... (all modules)
│   ├── fixtures/
│   │   └── test-fixtures.ts      → Custom Playwright fixtures (page objects, auth)
│   ├── helpers/
│   │   ├── browser-helpers.ts    → Navigation, window/tab management
│   │   ├── element-helpers.ts    → Common element interactions (replaces ObjectIdentification)
│   │   ├── wait-helpers.ts       → Custom wait utilities
│   │   ├── date-helpers.ts       → Date/time utilities (replaces Randomized.java)
│   │   ├── random-helpers.ts     → Random data generation
│   │   ├── file-helpers.ts       → File upload/download, PDF/Excel/CSV reading
│   │   └── verify-helpers.ts     → Custom assertion helpers
│   └── data/
│       ├── test-data-reader.ts   → JSON test data reader (replaces BaseData.java)
│       └── types.ts              → TypeScript interfaces for test data
├── tests/
│   ├── login/
│   │   └── login.spec.ts
│   ├── geo/
│   │   └── geo.spec.ts
│   ├── names/
│   │   └── names.spec.ts
│   ├── inventory/
│   │   └── inventory.spec.ts
│   ├── scheduling/
│   │   └── scheduling.spec.ts
│   ├── settings/
│   │   └── settings.spec.ts
│   ├── training/
│   │   └── training.spec.ts
│   ├── vehicle/
│   │   └── vehicle.spec.ts
│   └── smoke/
│       └── smoke.spec.ts
└── test-data/                    → JSON test data files (copy from JsonFiles2022)
```

---

## Migration Rules & Mapping

### Locator Strategy Mapping
| Selenium (Java) | Playwright (TypeScript) |
|---|---|
| `@FindBy(how = How.ID, using = "id")` | `page.locator('#id')` |
| `@FindBy(how = How.XPATH, using = "...")` | `page.locator('xpath=...')` or prefer CSS |
| `@FindBy(how = How.LINK_TEXT, using = "...")` | `page.getByRole('link', { name: '...' })` |
| `@FindBy(how = How.CSS, using = "...")` | `page.locator('css=...')` |
| `driver.findElement(By.id("..."))` | `page.locator('#...')` |
| `driver.findElement(By.xpath("..."))` | `page.locator('...')` |

### Action Mapping
| Selenium | Playwright |
|---|---|
| `element.sendKeys("text")` | `await locator.fill('text')` |
| `element.click()` | `await locator.click()` |
| `element.clear()` | `await locator.clear()` |
| `element.getText()` | `await locator.textContent()` |
| `element.getAttribute("attr")` | `await locator.getAttribute('attr')` |
| `element.isDisplayed()` | `await locator.isVisible()` |
| `element.isEnabled()` | `await locator.isEnabled()` |
| `new Select(el).selectByVisibleText("text")` | `await locator.selectOption({ label: 'text' })` |
| `Actions.moveToElement(el).perform()` | `await locator.hover()` |
| `Actions.doubleClick(el).perform()` | `await locator.dblclick()` |
| `Actions.dragAndDrop(src, tgt).perform()` | `await src.dragTo(tgt)` |

### Wait Mapping
| Selenium | Playwright |
|---|---|
| `Thread.sleep(ms)` | `await page.waitForTimeout(ms)` (avoid; use auto-wait) |
| `WebDriverWait.until(ExpectedConditions.elementToBeClickable(el))` | Auto-waiting built into Playwright actions |
| `WebDriverWait.until(ExpectedConditions.visibilityOf(el))` | `await locator.waitFor({ state: 'visible' })` |
| `driver.manage().timeouts().implicitlyWait(...)` | Not needed (Playwright auto-waits) |
| `driver.manage().timeouts().pageLoadTimeout(...)` | `navigationTimeout` in config |

### Window/Frame Handling
| Selenium | Playwright |
|---|---|
| `driver.switchTo().frame(el)` | `page.frameLocator('selector')` or `frame.locator(...)` |
| `driver.switchTo().defaultContent()` | Access page directly (no switch needed with frameLocator) |
| `driver.switchTo().window(handle)` | `const [newPage] = await context.waitForEvent('page')` |
| `driver.getWindowHandles()` | `context.pages()` |
| `driver.switchTo().alert()` | `page.on('dialog', dialog => dialog.accept())` |

### Assertion Mapping
| Selenium/TestNG | Playwright |
|---|---|
| `Assert.assertEquals(actual, expected)` | `expect(actual).toBe(expected)` |
| `Assert.assertTrue(condition)` | `expect(condition).toBeTruthy()` |
| `Assert.assertFalse(condition)` | `expect(condition).toBeFalsy()` |
| Custom `verify.ExpectedPropertyValueIsEqual(...)` | `await expect(locator).toHaveText(...)` |

### TestNG → Playwright Test Lifecycle
| TestNG | Playwright |
|---|---|
| `@BeforeSuite` | `globalSetup` in playwright.config.ts |
| `@BeforeMethod` | `test.beforeEach(async ({ page }) => { ... })` |
| `@Test` | `test('test name', async ({ page }) => { ... })` |
| `@AfterMethod` | `test.afterEach(async ({ page }) => { ... })` |
| `@AfterSuite` | `globalTeardown` in playwright.config.ts |
| `groups = { "group1" }` | `test.describe('group1', () => { ... })` or tags `@group1` |
| `ITestContext` attributes | Playwright fixtures or test.info() |

---

## Migration Instructions (Step-by-Step)

### Phase 1: Project Setup
1. Initialize Playwright TypeScript project with `playwright.config.ts`
2. Create `.env` file with environment variables from `config.properties`
3. Set up `tsconfig.json` with path aliases
4. Install dependencies: `@playwright/test`, `dotenv`, `pdf-parse`, `exceljs`, `csv-parser`

### Phase 2: Core Framework (Utilities)
1. **environment.ts** → Replace `PropertiesFile.java` with `dotenv` + typed config
2. **element-helpers.ts** → Migrate `ObjectIdentification.java` inner classes:
   - `ManualIdentify` → Dropdown helpers, click helpers, scroll utilities
   - `WindowHandle` → Multi-window/tab utilities using `context.pages()`
   - `ActionBuilder` → Mouse action helpers
3. **wait-helpers.ts** → Migrate `Playback.java` wait methods (mostly use Playwright auto-wait)
4. **date-helpers.ts** → Migrate `Randomized.java` date/time utilities
5. **file-helpers.ts** → PDF reading (pdf-parse), Excel (exceljs), CSV, file upload/download
6. **verify-helpers.ts** → Custom assertion wrappers (optional, Playwright has rich assertions)

### Phase 3: Test Data Layer
1. **test-data-reader.ts** → Migrate `BaseData.java` JSON reader pattern
2. Copy JSON test data files to `test-data/` folder
3. Create TypeScript interfaces for test data structures

### Phase 4: Page Objects (Merge UIMap + Application)
For each module (e.g., Geo):
1. Combine `UIMapGeo.java` locators + `Geo.java` actions into `geo/*.page.ts`
2. Convert `@FindBy` locators to Playwright locators
3. Convert action methods to async TypeScript methods
4. Handle iframe switching with `page.frameLocator()`
5. Replace `Playback.driver` references with injected `page` parameter

**Example conversion:**
```typescript
// src/pages/login.page.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;

  // Locators (from UIMapLogin.java)
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly databaseDropdown: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#usrLogin_txtUserName');
    this.passwordInput = page.locator('#usrLogin_txtPassword');
    this.databaseDropdown = page.locator('#usrLogin_lstProductDB');
    this.loginButton = page.locator('#usrLogin_cmdLogin');
    this.errorMessage = page.locator('#lblErrorMessage');
  }

  // Actions (from Login.java)
  async login(username: string, password: string, database: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    await this.page.waitForSelector('iframe[src*="frmMyHome"]');
  }
}
```

### Phase 5: Test Scripts
For each script class (e.g., GeoScripts.java):
1. Create corresponding `.spec.ts` file
2. Convert `@Test` methods to `test()` blocks
3. Use fixtures to inject page objects
4. Convert test groups to `test.describe()` blocks or tags
5. Map `testContext.setAttribute("testID", "...")` to test data fixture

**Example conversion:**
```typescript
// tests/geo/geo.spec.ts
import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Geo Functional Tests', { tag: '@GeoFunctional1' }, () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await page.goto('/Law/Login.aspx');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!, process.env.DATABASE!);
  });

  test('CreateNewStreet_112850', async ({ geoPage, loaderPage, testData }) => {
    const data = testData.getGeoData('112850');
    await loaderPage.navigateToModule('Geo');
    await loaderPage.navigateToScreen('Street Search');
    await geoPage.streetSearch.clickAddNew();
    await geoPage.streetEntry.clickSaveButton();
    await geoPage.streetEntry.verifyAcknowledgeSaveMessage();
    await geoPage.streetEntry.clickAddButton();
    await geoPage.streetEntry.verifyAcknowledgeAddMessage();
  });
});
```

### Phase 6: Configuration & Reporting
1. **playwright.config.ts** → Configure baseURL, browsers, retries, reporter
2. Use built-in Playwright HTML reporter (replaces ExtentReports)
3. Configure screenshot on failure (built-in)
4. Configure video recording if needed
5. Set up projects for different environments/browsers

### Phase 7: CI/CD & Grid Replacement
1. Playwright doesn't need Selenium Grid — it runs browsers natively
2. For parallel execution, use Playwright's built-in `workers` config
3. For CI, use `npx playwright install --with-deps` in pipeline

---

## Important Considerations

1. **iframes**: The Phoenix app uses heavy iframe-based navigation. Use `page.frameLocator()` chains.
2. **ASP.NET element IDs**: Keep existing IDs (e.g., `usrLogin_txtUserName`) — they work as CSS selectors.
3. **Multi-tab/window**: Use `context.waitForEvent('page')` pattern instead of window handles.
4. **Static waits**: Replace ALL `Thread.sleep()` with Playwright auto-waiting. Only use `waitForTimeout()` as last resort.
5. **Test data**: Keep the JSON-based test data approach; just read files with Node.js `fs` module.
6. **No PageFactory needed**: Playwright locators are lazy-evaluated by default.
7. **No Grid needed**: Playwright handles browser binaries directly. For distributed runs, use Playwright sharding.
8. **Groups → Tags**: Convert TestNG groups to Playwright tags (`@tag`) and filter with `--grep`.
9. **ExtentReports → Playwright Reporter**: Use built-in HTML reporter or custom reporter.
10. **Screenshots**: Built-in on failure. Configure in `playwright.config.ts`.

---

## File-by-File Migration Checklist

| Source (Java) | Target (TypeScript) | Priority |
|---|---|---|
| `resources/config.properties` | `.env` + `src/config/environment.ts` | P0 |
| `utilities/Playback.java` | `playwright.config.ts` + `src/fixtures/test-fixtures.ts` | P0 |
| `utilities/Browser.java` | `src/helpers/browser-helpers.ts` | P0 |
| `utilities/ObjectIdentification.java` | `src/helpers/element-helpers.ts` | P0 |
| `utilities/verify.java` | Built-in `expect()` (minimal wrapper if needed) | P1 |
| `utilities/Randomized.java` | `src/helpers/date-helpers.ts` + `random-helpers.ts` | P1 |
| `dataAccess/BaseData.java` | `src/data/test-data-reader.ts` | P0 |
| `dataAccess/FileHandle.java` | `src/helpers/file-helpers.ts` | P2 |
| `reports/ExtentReport.java` | Built-in Playwright HTML reporter | P1 |
| `reports/SendingMail.java` | CI pipeline email step (optional) | P3 |
| `uIMaps/UIMapLogin.java` + `application/Login.java` | `src/pages/login.page.ts` | P0 |
| `uIMaps/UIMapHome.java` + `application/Home.java` | `src/pages/home.page.ts` | P0 |
| `uIMaps/UIMapGeo.java` + `application/Geo.java` | `src/pages/geo/*.page.ts` | P1 |
| `scripts/LoginScripts.java` | `tests/login/login.spec.ts` | P0 |
| `scripts/GeoScripts.java` | `tests/geo/geo.spec.ts` | P1 |
| ... (repeat for all modules) | ... | P1-P2 |

---

## Commands

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/geo/geo.spec.ts

# Run by tag (equivalent to TestNG groups)
npx playwright test --grep @GeoFunctional1

# Run in headed mode (for debugging)
npx playwright test --headed

# Run with specific browser
npx playwright test --project=chromium

# Generate HTML report
npx playwright show-report

# Run in parallel (default)
npx playwright test --workers=4
```
