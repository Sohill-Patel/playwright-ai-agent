import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  cartItem(id: number | string = 504): Locator {
    return this.page.locator(`li[data-testid="cart-item-${id}"]`);
  }

  cartItemPrice(id: number | string = 504): Locator {
    return this.page.locator(`li[data-testid="cart-item-${id}"] >> [data-testid="price"]`);
  }

  async getCartItemPriceText(id: number | string = 504): Promise<string> {
    return this.cartItemPrice(id).innerText();
  }

  subtotal(): Locator {
    return this.page.locator('[data-testid="cart-subtotal"]');
  }

  async getSubtotalText(): Promise<string> {
    return this.subtotal().innerText();
  }

  async hasItem(id: number | string = 504): Promise<boolean> {
    return await this.cartItem(id).count() > 0;
  }
}
