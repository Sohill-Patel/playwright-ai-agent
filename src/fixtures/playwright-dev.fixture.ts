import { test as base } from '@playwright/test';
import { PlaywrightDevPage } from '../page-objects/PlaywrightDevPage';

type PlaywrightDevFixtures = {
  playwrightDevPage: PlaywrightDevPage;
};

/**
 * Playwright.dev fixture
 * Provides an initialized PlaywrightDevPage instance for documentation tests
 */
export const test = base.extend<PlaywrightDevFixtures>({
  playwrightDevPage: async ({ page }, use) => {
    const playwrightPage = new PlaywrightDevPage(page);
    await use(playwrightPage);
    // Cleanup handled by Playwright's page lifecycle
  },
});
