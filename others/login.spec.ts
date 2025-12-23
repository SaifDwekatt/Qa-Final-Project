import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config();

test.describe('Login Feature', () => {

  
  test('should log in with valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    
   
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(process.env.EMAIL!);  

    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD!);  
    
    await page.locator('[data-test="login-submit"]').click();
    
   
    await page.waitForNavigation();
    
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');  
  });

});
