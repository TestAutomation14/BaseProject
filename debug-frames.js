const { chromium } = require('playwright');
require('dotenv').config({ path: '.env', override: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL);
  await page.locator('#usrLogin_txtUserName').fill(process.env.USERNAME);
  await page.locator('#usrLogin_txtPassword').fill(process.env.PASSWORD);
  await page.locator('#usrLogin_lstProductDB').selectOption({ label: process.env.DATABASE });
  await page.locator('#usrLogin_cmdLogin').click();
  await page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });

  console.log('=== After login frames ===');
  for (const f of page.frames()) { console.log('Frame:', f.url()); }

  // Navigate to Accounting
  await page.locator('#RAD_SLIDING_PANE_CONTENT_Pane1').hover();
  const leftNav = page.locator('#LeftNav');
  await leftNav.locator('xpath=.//ul/li/div/span[contains(text(),"Accounting")]').scrollIntoViewIfNeeded();
  await leftNav.locator('xpath=.//ul/li/div/span[contains(text(),"Accounting")]').click();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);

  // Navigate to Invoice Type
  const screen = leftNav.locator('xpath=.//ul/li/ul/li/div/span[text()="Invoice Type"]');
  const count = await screen.count();
  for (let i = 0; i < count; i++) {
    if (await screen.nth(i).isVisible()) { await screen.nth(i).click({ force: true }); break; }
  }
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  console.log('=== After navigation frames ===');
  for (const f of page.frames()) { console.log('Frame:', f.url()); }

  // List all iframes
  const iframes = await page.locator('iframe').all();
  console.log('=== iframe count:', iframes.length, '===');
  for (let i = 0; i < iframes.length; i++) {
    const src = await iframes[i].getAttribute('src');
    const vis = await iframes[i].isVisible();
    console.log('iframe', i, 'src:', src, 'visible:', vis);
  }

  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
