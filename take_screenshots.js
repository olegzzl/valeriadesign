const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
    "https://303timer.vercel.app/",
    "https://psyhology-8jft.vercel.app/",
    "https://studio-19-pl.vercel.app/#hero",
    "https://cosmetic-ivory.vercel.app/#home",
    "https://www.ledstudio.duckdns.org/",
    "https://streetwear02.netlify.app/",
    "https://streetwear01.netlify.app/",
    "https://scherlock.netlify.app/",
    "https://voguish-gold.vercel.app/",
    "https://alexdiler.vercel.app/",
    "https://supermaster-2.vercel.app/",
    "https://osite-eta.vercel.app/"
];

function sanitizeFilename(url) {
    try {
        const u = new URL(url);
        // Extract the first part of the hostname, e.g., '303timer' from '303timer.vercel.app'
        // or 'ledstudio' from 'www.ledstudio.duckdns.org'
        let name = u.hostname;
        if (name.startsWith('www.')) {
            name = name.substring(4);
        }
        return name.split('.')[0];
    } catch (e) {
        return url.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/[^a-zA-Z0-9-]/g, '_');
    }
}

(async () => {
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const url of urls) {
        console.log(`Processing: ${url}`);
        const filenameBase = sanitizeFilename(url);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            // PC screenshot
            await page.setViewport({ width: 1920, height: 1080 });
            await new Promise(resolve => setTimeout(resolve, 2000)); // wait for animations
            await page.screenshot({ path: `screenshots/${filenameBase}_pc.png` });

            // Mobile screenshot
            // Use logical mobile dimensions (360x760) and scale factor 3 to get 1080x2280 output
            await page.setViewport({ 
                width: 360, 
                height: 760, 
                isMobile: true, 
                hasTouch: true,
                deviceScaleFactor: 3 
            });
            // We might also want to set a mobile user agent just in case
            await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1');
            // Reload the page to ensure mobile layout and JS trigger correctly
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            await new Promise(resolve => setTimeout(resolve, 2000));
            await page.screenshot({ path: `screenshots/${filenameBase}_mobile.png` });

            console.log(`Screenshots saved for ${url}`);
        } catch (error) {
            console.error(`Failed to process ${url}:`, error.message);
        }
    }

    await browser.close();
    console.log("All done!");
})();
