//marah
import { test, expect } from '@playwright/test';

test('BrandFilter', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByText('ForgeFlex Tools').click();
  await page.waitForTimeout(2000); 
  await page.getByText('MightyCraft Hardware').click();
  await page.waitForTimeout(2000); 
});
