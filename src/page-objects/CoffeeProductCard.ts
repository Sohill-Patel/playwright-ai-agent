import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for a coffee product card in the featured section
 * Abstracts interactions with individual coffee product cards
 */
export class CoffeeProductCard {
  readonly cardLocator: Locator;

  constructor(cardLocator: Locator) {
    this.cardLocator = cardLocator;
  }

  /**
   * Verify the card is visible
   */
  async verifyVisible(): Promise<void> {
    await expect(this.cardLocator).toBeVisible();
  }

  /**
   * Get the product name from the card
   */
  async getProductName(): Promise<string | null> {
    return await this.cardLocator.locator('h3').first().textContent();
  }

  /**
   * Get the product description
   */
  async getDescription(): Promise<string | null> {
    return await this.cardLocator.locator('[class*="text"]').first().textContent();
  }

  /**
   * Verify the description text is visible
   */
  async verifyDescriptionText(expectedText: string): Promise<void> {
    await expect(this.cardLocator.locator(`text=${expectedText}`)).toBeVisible();
  }

  /**
   * Get the price from the card
   */
  async getPrice(): Promise<string | null> {
    return await this.cardLocator.locator('text=$').textContent();
  }

  /**
   * Verify the price is visible
   */
  async verifyPriceVisible(expectedPrice: string): Promise<void> {
    await expect(this.cardLocator.locator(`text=${expectedPrice}`)).toBeVisible();
  }

  /**
   * Verify the price matches within the card text
   */
  async verifyCardContainsPrice(expectedPrice: string): Promise<void> {
    await expect(this.cardLocator).toContainText(expectedPrice);
  }

  /**
   * Get the Add to Cart button
   */
  async getAddToCartButton(): Promise<Locator> {
    return this.cardLocator.locator('button', { hasText: 'Add to Cart' });
  }

  /**
   * Verify the Add to Cart button is visible
   */
  async verifyAddToCartButtonVisible(): Promise<void> {
    const button = await this.getAddToCartButton();
    await expect(button).toBeVisible();
  }

  /**
   * Verify the Add to Cart button text matches
   */
  async verifyAddToCartButtonText(expectedText: string = 'Add to Cart'): Promise<void> {
    const button = await this.getAddToCartButton();
    await expect(button).toHaveText(new RegExp(expectedText));
  }
}
