import test, { chromium } from "@playwright/test";
import { describe } from "node:test";

describe('Launch Browser', () => {

    test('Open BestBuy', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.bestbuy.ca/en-ca');
        await browser.close()
    });
})