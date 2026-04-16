// spec: specs/get-coffee-from-brazil.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Brazilian Coffee Price Discovery', () => {
  test('View Brazilian coffee price from home page featured section', async ({ page }) => {
    // 1. Navigate to https://valentinos-magic-beans.click/
    await page.goto('https://valentinos-magic-beans.click/');
    await expect(page).toHaveURL('https://valentinos-magic-beans.click/');
    await expect(page).toHaveTitle("Valentino's Magic Beans - Premium Coffee");

    // expect: Featured Coffees section is visible
    const featuredSection = page.locator('text=Featured Coffees');
    await expect(featuredSection).toBeVisible();

    // 2. Scroll down to locate the Featured Coffees section
    await featuredSection.scrollIntoViewIfNeeded();
    await expect(featuredSection).toBeVisible();

    // expect: Brazilian Santos coffee card is visible
    const brazilianCard = page.locator('xpath=//h3[contains(., "Brazilian Santos")]/ancestor::div[contains(@class, "p-6")]').first();
    await expect(brazilianCard).toBeVisible();

    // expect: Brazilian Santos has the description 'Smooth and mellow with low acidity.'
    const description = brazilianCard.locator('text=Smooth and mellow with low acidity.');
    await expect(description).toBeVisible();

    // 3. Identify the price displayed for Brazilian Santos coffee
    const price = brazilianCard.locator('text=$22.99');
    await expect(price).toBeVisible();
    await expect(price).toContainText('$22.99');

    // 4. Verify the Add to Cart button displays the price
    const addToCartButton = brazilianCard.locator('button', { hasText: 'Add to Cart' });
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toHaveText(/Add to Cart/);
    await expect(brazilianCard).toContainText('$22.99');
  });
});