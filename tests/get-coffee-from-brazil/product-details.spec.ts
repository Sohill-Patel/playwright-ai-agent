import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / product detail', () => {
  test('product detail shows Brazilian Santos price and info', async ({ productDetail }) => {
    await productDetail.goto();
    await expect(productDetail.title()).toHaveText('Brazilian Santos');
    await expect(productDetail.price()).toHaveText('$22.99');
    await expect(productDetail.description()).toContainText('Smooth and mellow with low acidity.');
  });
});
