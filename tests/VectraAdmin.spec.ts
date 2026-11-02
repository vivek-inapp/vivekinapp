import { test, expect } from '@playwright/test';

test('Admin Dashboard', async ({ page }) => {
  await page.goto('https://dev.vectrasmartquote.com/admin', { waitUntil: 'networkidle' });

  await expect(page).toHaveURL(/\/admin/i, { timeout: 30000 });

  await expect(page.getByRole('heading', 
    { name: /Admin Module|Admin Console|Admin/i })).toBeVisible({ timeout: 30000 });

  await page.getByRole('button', { name: /add new/i }).click();
  await page.getByPlaceholder('Enter name').fill('John');
  await page.getByPlaceholder('Enter email address').fill('john.doe@example.com');
  await page.locator('.admin-user-modal__dropdown').click();
  await page.locator('.p-dropdown-item-label', { hasText: 'User' }).click();
  await page.getByRole('button', { name: /add user/i }).click();
}
);
