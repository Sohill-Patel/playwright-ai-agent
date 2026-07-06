import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / consistency', () => {
  test('price is consistent across pages', async ({ home, products, productDetail }) => {
    await home.goto();
    const homePrice = await (await home.brazilPrice()).innerText();

    await products.goto();
    const shopPrice = await (await products.brazilPrice()).innerText();

    await productDetail.goto();
    const detailPrice = await (await productDetail.price()).innerText();

    expect(homePrice).toBe(shopPrice);
    expect(shopPrice).toBe(detailPrice);
  });
});
