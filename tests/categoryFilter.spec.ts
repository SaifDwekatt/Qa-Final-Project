//marah
import { test, expect } from '@playwright/test';

test('Category', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('#filters').getByText('Hammer').click();
  await page.waitForTimeout(2000);  

  await page.locator('#filters').getByText('Power Tools').click();
  await page.waitForTimeout(2000);  

  await page.locator('#filters').getByText('Power Tools').click();
  await page.waitForTimeout(2000);  

  await page.locator('#filters').getByText('Hammer').click();
  await page.waitForTimeout(2000); 
});
