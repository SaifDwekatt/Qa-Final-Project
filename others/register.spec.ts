import { test, expect } from '@playwright/test';

test('should register a new user', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/register');
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill('SAIF');
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill('DWEKAT');
  await page.locator('[data-test="dob"]').fill('2002-12-15');
  await page.locator('[data-test="street"]').fill('NABLUS');
  await page.locator('[data-test="postal_code"]').fill('P404');
  await page.locator('[data-test="city"]').fill('NABLUS');
  await page.locator('[data-test="state"]').fill('WESTBANK');
  await page.locator('[data-test="country"]').selectOption('PS');
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill('123456789');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('saifdwaaaea2kAAaaaat@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('CVNFasfasasfGCJH@2002asasfg25252');
  await page.locator('[data-test="register-submit"]').click();
  

  await page.waitForNavigation();  
  
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
});
