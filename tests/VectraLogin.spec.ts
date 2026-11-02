import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://dev.vectrasmartquote.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vectra Pricing Tool/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://dev.vectrasmartquote.com/login');

  // Click the get started link.
  await page.getByPlaceholder('eg:admin@heavyhaul.com').fill('vivek.k@inapp.com');
  await page.getByPlaceholder('••••••••').fill('Inapp@2026');
  await page.getByText('Sign in to Dashboard').click();

  // Expects page to have a heading with the name Your Quotes.
  await expect(page.getByRole('heading',{name: 'Your Quotes' })).toBeVisible();
});
