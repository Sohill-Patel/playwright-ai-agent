import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / cart', () => {
  test('add Brazilian Santos to cart and verify subtotal', async ({ productDetail, cart }) => {
    await productDetail.goto();
    await productDetail.addToCartButton().click();

    await cart.goto();
    const itemPrice = cart.cartItemPrice();
    await expect(itemPrice).toHaveText('$22.99');
    await expect(cart.subtotal()).toHaveText('$22.99');
  });
});
