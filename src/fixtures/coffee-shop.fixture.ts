import { test as base } from '@playwright/test';
import { CoffeeShopHomePage } from '../page-objects/CoffeeShopHomePage';

type CoffeeShopFixtures = {
  coffeeShopHomePage: CoffeeShopHomePage;
};

/**
 * Coffee Shop fixture
 * Provides an initialized CoffeeShopHomePage instance for coffee shop domain tests
 */
export const test = base.extend<CoffeeShopFixtures>({
  coffeeShopHomePage: async ({ page }, use) => {
    const homePage = new CoffeeShopHomePage(page);
    await use(homePage);
    // Cleanup handled by Playwright's page lifecycle
  },
});
