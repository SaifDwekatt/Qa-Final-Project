import { test, expect } from '@playwright/test';

test('Sort A-Z', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const sortSelect = page.locator('[data-test="sort"]');

  await sortSelect.click();
  await page.waitForTimeout(2000);

  await sortSelect.selectOption({ label: 'Price (High - Low)' });
  await page.waitForTimeout(2000);

  await sortSelect.click();
  await page.waitForTimeout(2000);

  await sortSelect.selectOption({ label: 'Price (Low - High)' });
  await page.waitForTimeout(2000);
});