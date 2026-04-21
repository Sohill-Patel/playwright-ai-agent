// spec: specs/get-coffee-from-brazil.md
// seed: tests/seed.spec.ts

import { coffeeShopTest as test, expect } from '../fixtures';

test.describe('Brazilian Coffee Price Discovery', () => {
  test('View Brazilian coffee price from home page featured section', async ({ coffeeShopHomePage }) => {
    // 1. Navigate to https://valentinos-magic-beans.click/
    await coffeeShopHomePage.goto();
    await coffeeShopHomePage.verifyPageUrl();
    await coffeeShopHomePage.verifyPageTitle();
    await coffeeShopHomePage.verifyFeaturedCoffeesSectionVisible();

    // 2. Scroll down to locate the Featured Coffees section
    await coffeeShopHomePage.scrollFeaturedSectionIntoView();
    await coffeeShopHomePage.verifyFeaturedCoffeesSectionVisible();
    await coffeeShopHomePage.verifyBrazilianSantosCardVisible();

    // Get the Brazilian Santos product card
    const brazilianCard = await coffeeShopHomePage.getBrazilianSantosCard();

    // 3. Identify the price displayed for Brazilian Santos coffee
    const expectedPrice = '$22.99';
    await brazilianCard.verifyDescriptionText('Smooth and mellow with low acidity.');
    await brazilianCard.verifyPriceVisible(expectedPrice);
    await expect(brazilianCard.cardLocator.locator(`text=${expectedPrice}`)).toContainText(expectedPrice);

    // 4. Verify the Add to Cart button displays the price
    await brazilianCard.verifyAddToCartButtonVisible();
    await brazilianCard.verifyAddToCartButtonText('Add to Cart');
    await brazilianCard.verifyCardContainsPrice(expectedPrice);
  });
});