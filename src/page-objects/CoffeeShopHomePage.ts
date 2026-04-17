import { Page, Locator, expect } from '@playwright/test';
import { CoffeeProductCard } from './CoffeeProductCard';

/**
 * Page Object for Valentino's Magic Beans home page
 * Abstracts interactions with the coffee shop home page and featured section
 */
export class CoffeeShopHomePage {
  readonly page: Page;
  readonly featuredCoffeesSection: Locator;
  readonly brazilianSantosCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.featuredCoffeesSection = page.locator('text=Featured Coffees');
    this.brazilianSantosCard = page.locator('xpath=//h3[contains(., "Brazilian Santos")]/ancestor::div[contains(@class, "p-6")]').first();
  }

  /**
   * Navigate to the coffee shop home page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://valentinos-magic-beans.click/');
  }

  /**
   * Verify the home page URL is correct
   */
  async verifyPageUrl(): Promise<void> {
    await expect(this.page).toHaveURL('https://valentinos-magic-beans.click/');
  }

  /**
   * Verify the page title
   */
  async verifyPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");
  }

  /**
   * Verify the Featured Coffees section is visible
   */
  async verifyFeaturedCoffeesSectionVisible(): Promise<void> {
    await expect(this.featuredCoffeesSection).toBeVisible();
  }

  /**
   * Scroll the Featured Coffees section into view
   */
  async scrollFeaturedSectionIntoView(): Promise<void> {
    await this.featuredCoffeesSection.scrollIntoViewIfNeeded();
  }

  /**
   * Get the Brazilian Santos coffee product card
   */
  async getBrazilianSantosCard(): Promise<CoffeeProductCard> {
    return new CoffeeProductCard(this.brazilianSantosCard);
  }

  /**
   * Verify the Brazilian Santos card is visible
   */
  async verifyBrazilianSantosCardVisible(): Promise<void> {
    await expect(this.brazilianSantosCard).toBeVisible();
  }
}
