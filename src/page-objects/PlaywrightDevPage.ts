import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Playwright.dev documentation site
 * Abstracts interactions with the Playwright documentation pages
 */
export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  /**
   * Navigate to the Playwright documentation home page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }

  /**
   * Verify the page title contains 'Playwright'
   */
  async verifyPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  /**
   * Click the 'Get Started' link
   */
  async clickGetStartedLink(): Promise<void> {
    await this.getStartedLink.click();
  }

  /**
   * Verify the Installation heading is visible on the current page
   */
  async verifyInstallationHeadingVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  }
}
