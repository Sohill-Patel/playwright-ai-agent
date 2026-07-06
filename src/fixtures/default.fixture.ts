import { test as base, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home.page';
import { ProductsPage } from '../page-objects/products.page';
import { ProductDetailPage } from '../page-objects/productDetail.page';
import { CartPage } from '../page-objects/cart.page';

type AppFixtures = {
  home: HomePage;
  products: ProductsPage;
  productDetail: ProductDetailPage;
  cart: CartPage;
};

export const test = base.extend<AppFixtures>({
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  products: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  productDetail: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },

  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };
export type { AppFixtures as Fixtures };
