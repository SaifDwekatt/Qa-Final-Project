import { test, expect } from '@playwright/test';

test('Price Range', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const minHandle = page.locator('.ngx-slider-span.ngx-slider-pointer-min');
  const maxHandle = page.locator('.ngx-slider-span.ngx-slider-pointer-max');

  await minHandle.waitFor({ state: 'visible', timeout: 5000 });
  await maxHandle.waitFor({ state: 'visible', timeout: 5000 });

  const minBox = await minHandle.boundingBox();
  const maxBox = await maxHandle.boundingBox();

  if (minBox && maxBox) {
    await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(minBox.x + minBox.width / 2 + 50, minBox.y + minBox.height / 2);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    await page.mouse.move(maxBox.x + maxBox.width / 2, maxBox.y + maxBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(maxBox.x + maxBox.width / 2 - 50, maxBox.y + maxBox.height / 2);
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
});