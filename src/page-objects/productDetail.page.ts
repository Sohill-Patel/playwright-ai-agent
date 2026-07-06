import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto(id: number | string = 504) {
    // Our static fixture uses product-<id>.html
    await this.page.goto(`/product-${id}.html`);
  }

  // Choose the product title (avoid site-level h1 conflicts)
  title(): Locator {
    return this.page.locator('h1.product-title');
  }

  async getTitleText(): Promise<string> {
    return this.title().innerText();
  }

  price(): Locator {
    return this.page.locator('[data-testid="product-price"]');
  }

  async getPriceText(): Promise<string> {
    return this.price().innerText();
  }

  description(): Locator {
    return this.page.locator('[data-testid="product-description"]');
  }

  async getDescriptionText(): Promise<string> {
    return this.description().innerText();
  }

  origin(): Locator {
    return this.page.locator('[data-testid="product-origin"]');
  }

  addToCartButton(): Locator {
    return this.page.locator('[data-testid="add-to-cart"]');
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton().click();
  }

  async backToProducts(): Promise<void> {
    await this.page.click('text=Back to Products');
  }
}
