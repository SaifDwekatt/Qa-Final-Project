import { test, expect } from '@playwright/test';
import { randomBytes } from 'crypto';



test('Register and Login', async ({ page }) => {
  const uniqueEmail = `user_${randomBytes(8).toString('hex')}@example.com`;
  const password = `Pass${randomBytes(6).toString('hex')}!123`;
  await page.goto('https://practicesoftwaretesting.com/auth/register');
  await page.locator('[data-test="first-name"]').fill(process.env.FIRST_NAME || '');
  await page.locator('[data-test="last-name"]').fill(process.env.LAST_NAME || '');
  await page.locator('[data-test="dob"]').fill(process.env.DOB || '');
  await page.locator('[data-test="street"]').fill(process.env.STREET || '');
  await page.locator('[data-test="postal_code"]').fill(process.env.POSTAL_CODE || '');
  await page.locator('[data-test="city"]').fill(process.env.CITY || '');
  await page.locator('[data-test="state"]').fill(process.env.STATE || '');
  await page.locator('[data-test="country"]').selectOption(process.env.COUNTRY || '');
  await page.locator('[data-test="phone"]').fill(process.env.PHONE || '');

  await page.locator('[data-test="email"]').fill(uniqueEmail);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="register-submit"]').click();
  await expect(page).toHaveURL(/\/auth\/login/);
  await page.locator('[data-test="email"]').fill(uniqueEmail);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-submit"]').click();
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
});
