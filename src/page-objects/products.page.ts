import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/products.html');
  }

  productGrid(): Locator {
    return this.page.locator('[data-testid="product-grid"]');
  }

  brazilCard(): Locator {
    return this.page.locator('[data-testid="product-card-504"]');
  }

  brazilPrice(): Locator {
    return this.page.locator('[data-testid="product-card-504"] >> [data-testid="price"]');
  }

  async getBrazilPriceText(): Promise<string> {
    return this.brazilPrice().innerText();
  }

  viewDetailsButton(): Locator {
    return this.page.locator('[data-testid="product-card-504"] >> [data-testid="view-details"]');
  }

  async openBrazilDetail(): Promise<void> {
    await this.viewDetailsButton().click();
  }

  async addBrazilToCartFromCard(): Promise<void> {
    await this.page.locator('[data-testid="product-card-504"] >> [data-testid="add-to-cart"]').click();
  }
}
