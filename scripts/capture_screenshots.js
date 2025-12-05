const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const sites = [
    { url: 'https://global-liquidity-credit-tracker.vercel.app', name: 'global-liquidity.png' },
    { url: 'https://ecom-test-nu.vercel.app/', name: 'ecom-test.png' },
    { url: 'https://fundus-dx-ml.vercel.app', name: 'fundus-dx-ml.png' }
];

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    const outputDir = path.join(__dirname, '../public/screenshots');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const site of sites) {
        try {
            console.log(`Navigating to ${site.url}...`);
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
            // Wait a bit for animations or lazy load
            await new Promise(r => setTimeout(r, 2000));
            await page.screenshot({ path: path.join(outputDir, site.name), fullPage: false });
            console.log(`Captured ${site.name}`);
        } catch (error) {
            console.error(`Failed to capture ${site.url}:`, error.message);
        }
    }

    await browser.close();
})();
