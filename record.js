const { chromium } = require('playwright');

(async () => {
  // 1. Browser starten
  const browser = await chromium.launch();

  // 2. Kontext mit Fenstergröße und Videoaufnahme
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    recordVideo: {
      dir: 'videos/',
      size: { width: 1080, height: 1920 }
    }
  });

  // 3. Seite öffnen
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');

  // 4. Warten, solange das Reel dauern soll (in Millisekunden)
  await page.waitForTimeout(15000);

  // 5. Schließen, erst dabei wird das Video gespeichert
  await context.close();
  await browser.close();
})();