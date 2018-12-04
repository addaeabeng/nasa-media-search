const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
    // launch browser
    browser = await puppeteer.launch(
        {
            headless: true, // headless mode set to false so browser opens up with visual feedback
            slowMo: 250, // how slow actions should be
        }
    );
    // creates a new page in the opened browser
    page = await browser.newPage()
});

describe('Home Page Loading', () => {
        test('Home image loads correctly', async () => {

            page.emulate({
                viewport: {
                    width: 500,
                    height: 2400
                },
                userAgent: ''
            });

            await page.goto('http://localhost:3000/');
            await page.waitForSelector('.content');

            const html = await page.$eval('.logo-image', e => e.getAttribute("alt"));
            expect(html).toBe('NASA Image search');
        }, 100000);
    }
);

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
    browser.close()
});