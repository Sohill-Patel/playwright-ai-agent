import { playwrightDevTest as test } from './fixtures';

test('has title', async ({ playwrightDevPage }) => {
  // Navigate to Playwright documentation home page
  await playwrightDevPage.goto();

  // Verify page title contains 'Playwright'
  await playwrightDevPage.verifyPageTitle();
});

test('get started link', async ({ playwrightDevPage }) => {
  // Navigate to Playwright documentation home page
  await playwrightDevPage.goto();

  // Click the Get Started link
  await playwrightDevPage.clickGetStartedLink();

  // Verify the Installation heading is visible
  await playwrightDevPage.verifyInstallationHeadingVisible();
});
