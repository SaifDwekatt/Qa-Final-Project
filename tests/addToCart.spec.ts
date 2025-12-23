
//saif
import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const products = page.locator('[data-test^="product-"]');
  const count = await products.count();
  const randomIndex = Math.floor(Math.random() * count);
  await products.nth(randomIndex).click();
  const toast = page.getByText('Product added to shopping cart');
  const toastPromise = expect(toast).toBeVisible({ timeout: 5000 });
  await page.locator('[data-test="add-to-cart"]').click();
  await toastPromise;
});

