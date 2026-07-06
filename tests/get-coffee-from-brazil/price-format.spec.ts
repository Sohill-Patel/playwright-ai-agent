import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / format', () => {
  test('price format uses USD and two decimals', async ({ products, productDetail }) => {
    await products.goto();
    const shopPrice = await (await products.brazilPrice()).innerText();
    expect(shopPrice).toMatch(/^\$\d+\.\d{2}$/);

    await productDetail.goto();
    const detailPrice = await (await productDetail.price()).innerText();
    expect(detailPrice).toMatch(/^\$\d+\.\d{2}$/);
  });
});
