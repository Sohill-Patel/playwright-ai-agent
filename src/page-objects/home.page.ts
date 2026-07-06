import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  featuredSection(): Locator {
    return this.page.locator('text=Featured Coffees');
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

  async addBrazilToCartFromCard(): Promise<void> {
    await this.page.locator('[data-testid="product-card-504"] >> [data-testid="add-to-cart"]').click();
  }

  async viewBrazilDetails(): Promise<void> {
    await this.page.locator('[data-testid="product-card-504"] >> [data-testid="view-details"]').click();
  }
}
