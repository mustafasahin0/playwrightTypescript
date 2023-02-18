import {test, expect} from '@playwright/test';

test("Open home page and verify tite", async ({page}) => {
    // test steps
    await page.goto("https://www.fifa.com/fifaplus/en/home")

    await expect(page).toHaveTitle('FIFA+');  

    
})