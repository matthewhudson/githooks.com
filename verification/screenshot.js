const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Set content from index.html
  const fs = require('fs');
  const html = fs.readFileSync('index.html', 'utf8');
  await page.setContent(html);

  // Desktop screenshot
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: 'verification/desktop.png', fullPage: true });

  // Mobile screenshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'verification/mobile.png', fullPage: true });

  await browser.close();
})();
