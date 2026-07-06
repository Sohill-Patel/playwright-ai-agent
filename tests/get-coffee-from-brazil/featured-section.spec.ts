import { test, expect } from '../../src/fixtures/default.fixture';

test.describe('get-coffee-from-brazil / featured', () => {
  test('featured section shows Brazilian Santos price', async ({ home }) => {
    await home.goto();
    const featured = home.featuredSection();
    await expect(featured).toBeVisible();
    const price = await home.brazilPrice();
    await expect(price).toBeVisible();
    await expect(price).toHaveText('$22.99');
  });
});
