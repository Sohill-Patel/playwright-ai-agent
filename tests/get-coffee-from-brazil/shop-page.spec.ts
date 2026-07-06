import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / shop', () => {
  test('shop page lists Brazilian Santos with price', async ({ products }) => {
    await products.goto();
    const grid = products.productGrid();
    await expect(grid).toBeVisible();
    const card = products.brazilCard();
    await expect(card).toBeVisible();
    const price = products.brazilPrice();
    await expect(price).toHaveText('$22.99');
  });
});
