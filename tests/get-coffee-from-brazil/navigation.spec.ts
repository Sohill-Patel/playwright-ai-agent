import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / navigation', () => {
  test('navigate back from product detail to products page', async ({ productDetail, products }) => {
    await productDetail.goto();
    await productDetail.page.click('text=Back to Products');
    await expect(products.productGrid()).toBeVisible();
  });
});
