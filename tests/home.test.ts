import {test, expect} from '@playwright/test';

test("Open home page and verify tite", async ({page}) => {
    // test steps
    await page.goto("https://www.fifa.com/fifaplus/en/home")

    await expect(page).toHaveTitle('FIFA+');  
})

test("Verifly logo is visible and has the alt title", async ({page}) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");

    const logo = page.locator('[href="/fifaplus/en/home"] img');
    
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('title', 'Qatar 202');

})

test("Verify Navigation Links", async ({page}) => {
    const expectedLinks = [
      "FIFA WOMEN'S WORLD CUP 2023™",
       "THE BEST",
       "FIFA WORLD CUP 2022™",
       "TEAMS",
       "HIGHLIGHTS",
       "SCORES & FIXTURES",
       "KNOCKOUT & GROUPS",
       "NEWS",
       "ORIGINALS",
       "ARCHIVE",
       "PLAY ZONE",
       "WHO AM I?",
       "HEAD-TO-HEAD",
       "TRIVIA",
       "MATCH CENTRE",
       "HIGHLIGHTS",
       "LIVE STREAMING",];
    
    await page.goto("https://www.fifa.com/fifaplus/en/home");

    const navLinks = page.locator('#mainLinksID a');
    
    await expect(navLinks.first()).toBeVisible();
    expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
})