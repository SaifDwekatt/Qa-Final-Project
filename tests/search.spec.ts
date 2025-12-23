import { test, expect } from '@playwright/test';

test('Search', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').click();
  
  await page.locator('[data-test="search-query"]').fill('pliers');
  
  await page.locator('[data-test="search-submit"]').click();
  
  await page.waitForSelector('[data-test="search-term"]'); 
  
  await page.waitForTimeout(2000); 

  await page.locator('[data-test="search_completed"]').click();
});
