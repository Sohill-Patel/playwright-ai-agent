import { test } from '@playwright/test';
import { PlaywrightDevPage } from '../src/page-objects/PlaywrightDevPage';

test('has title', async ({ page }) => {
  // Initialize page object
  const playwrightPage = new PlaywrightDevPage(page);

  // Navigate to Playwright documentation home page
  await playwrightPage.goto();

  // Verify page title contains 'Playwright'
  await playwrightPage.verifyPageTitle();
});

test('get started link', async ({ page }) => {
  // Initialize page object
  const playwrightPage = new PlaywrightDevPage(page);

  // Navigate to Playwright documentation home page
  await playwrightPage.goto();

  // Click the Get Started link
  await playwrightPage.clickGetStartedLink();

  // Verify the Installation heading is visible
  await playwrightPage.verifyInstallationHeadingVisible();
});
