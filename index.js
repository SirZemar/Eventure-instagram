const puppeteer = require('puppeteer');

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500");
    await page.setViewport({
        width: 1080,
        height: 1080,
    });
    await page.screenshot({ path: "example.png" });
    await browser.close();
}

start();