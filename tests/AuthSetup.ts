import { test } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '..', 'playwright', '.auth', 'user.json');

test('authenticate user and store session', async ({ page }) => {
  await page.goto('https://dev.vectrasmartquote.com/login');

  await page.getByPlaceholder('eg:admin@heavyhaul.com').fill('vivek.k@inapp.com');
  await page.getByPlaceholder('••••••••').fill('Inapp@2026');
  await page.getByRole('button', { name: 'Sign in to Dashboard' }).click();

  await page.waitForURL(/.*(dashboard|quotes).*/i, { timeout: 30000 }).catch(() => { });

  await page.context().storageState({ path: authFile });
});
