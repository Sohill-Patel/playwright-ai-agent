import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / origin', () => {
  test('product detail shows Brazil origin', async ({ productDetail }) => {
    await productDetail.goto();
    await expect(productDetail.origin()).toHaveText('Brazil');
    await expect(productDetail.title()).toHaveText('Brazilian Santos');
  });
});
