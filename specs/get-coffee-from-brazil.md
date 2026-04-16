# Get Coffee Price from Brazil

## Application Overview

Valentino's Magic Beans is a premium coffee e-commerce shop selling single-origin and blended coffees from around the world. This test plan covers various scenarios for retrieving the price of a Brazilian coffee product, specifically the "Brazilian Santos" coffee. The site features a home page with promoted products, a shop page with all products, and individual product detail pages. Users can access Brazilian coffee pricing through multiple entry points: featured section on home page, product grid on shop page, and product detail pages.

## Test Scenarios

### 1. Brazilian Coffee Price Discovery

**Seed:** `tests/seed.spec.ts`

#### 1.1. View Brazilian coffee price from home page featured section

**File:** `tests/get-coffee-from-brazil/featured-section.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/
    - expect: Home page loads successfully
    - expect: Page title displays 'Valentino's Magic Beans - Premium Coffee'
    - expect: Featured Coffees section is visible
  2. Scroll down to locate the Featured Coffees section
    - expect: Featured Coffees section is displayed
    - expect: Brazilian Santos coffee card is visible
    - expect: Brazilian Santos has the description 'Smooth and mellow with low acidity.'
  3. Identify the price displayed for Brazilian Santos coffee
    - expect: Price $22.99 is clearly displayed on the Brazilian Santos card
    - expect: Price is formatted as a currency value
  4. Verify the Add to Cart button displays the price
    - expect: Add to Cart button shows the full price
    - expect: Price matches the displayed card price of $22.99

#### 1.2. View Brazilian coffee price from shop products page

**File:** `tests/get-coffee-from-brazil/shop-page.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/
    - expect: Home page loads successfully
  2. Click on 'Shop' navigation link
    - expect: Shop page loads at URL /products
    - expect: Page displays 'Our Coffee Collection' heading
    - expect: All available coffee products are displayed in a grid layout
  3. Locate Brazilian Santos product in the grid
    - expect: Brazilian Santos is displayed as the first product
    - expect: Product card includes product image
    - expect: Product card includes description: 'Smooth and mellow with low acidity.'
  4. Verify the price displayed for Brazilian Santos
    - expect: Price $22.99 is displayed on the Brazilian Santos card
    - expect: Price is positioned consistently with other product prices
  5. Verify buttons on the product card
    - expect: Add to Cart button is visible
    - expect: View Details button is visible
    - expect: Both buttons are clickable

#### 1.3. View Brazilian coffee detailed price information

**File:** `tests/get-coffee-from-brazil/product-details.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/products
    - expect: Shop page loads successfully
    - expect: Brazilian Santos product is visible
  2. Click on 'View Details' button for Brazilian Santos
    - expect: Product detail page loads
    - expect: URL changes to /products/504
    - expect: Page displays the Brazilian Santos product image
  3. Verify main product information on detail page
    - expect: Product title 'Brazilian Santos' is displayed as a heading
    - expect: Price $22.99 is prominently displayed
    - expect: Product description 'Smooth and mellow with low acidity.' is shown
    - expect: Origin is listed as 'Brazil'
  4. Verify product specifications section
    - expect: Product Details section is visible
    - expect: Origin field shows 'Brazil'
    - expect: Roast Level shows 'Medium-Dark Roast'
    - expect: Weight shows '12oz / 340g'
    - expect: Processing shows 'Washed'
  5. Verify Add to Cart button displays correct price
    - expect: Add to Cart button displays 'Add to Cart - $22.99'
    - expect: Button is clickable
  6. Verify promotional information displayed
    - expect: Free shipping message is displayed
    - expect: Freshly roasted to order message is shown
    - expect: 30-day money-back guarantee is displayed
  7. Verify tasting notes are displayed
    - expect: Tasting Notes section is visible
    - expect: Tasting notes include: Chocolate, Caramel, Citrus, Nutty

#### 1.4. Verify Brazilian coffee price consistency across pages

**File:** `tests/get-coffee-from-brazil/price-consistency.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/
    - expect: Home page loads successfully
  2. Record the price displayed for Brazilian Santos on home page
    - expect: Price $22.99 is displayed on the featured coffee card
  3. Navigate to Shop page (/products)
    - expect: Shop page loads successfully
  4. Verify Brazilian Santos price on shop page matches home page
    - expect: Price on shop page is $22.99
    - expect: Price matches the home page price exactly
  5. Click View Details on Brazilian Santos from shop page
    - expect: Product detail page loads
  6. Verify Brazilian Santos price on product detail page
    - expect: Price displayed on detail page is $22.99
    - expect: Price matches both home page and shop page
    - expect: All three locations show consistent pricing

#### 1.5. Add Brazilian coffee to cart and verify price in cart

**File:** `tests/get-coffee-from-brazil/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/products/504
    - expect: Brazilian Santos product detail page loads
    - expect: Price $22.99 is displayed
  2. Click 'Add to Cart - $22.99' button
    - expect: Product is added to the shopping cart
    - expect: Success notification appears (if applicable)
    - expect: Add to Cart button remains functional
  3. Navigate to shopping cart
    - expect: Cart page loads
    - expect: Brazilian Santos product is listed in cart
    - expect: Price $22.99 is displayed for the product
  4. Verify cart subtotal
    - expect: Subtotal reflects the $22.99 price
    - expect: Cart total includes the product price

#### 1.6. Navigate back from product detail page to verify continuity

**File:** `tests/get-coffee-from-brazil/navigation.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/products/504
    - expect: Brazilian Santos product detail page loads
    - expect: Back to Products link is visible
  2. Click 'Back to Products' link
    - expect: User returns to shop page (/products)
    - expect: Brazilian Santos is still visible
    - expect: Price $22.99 is displayed
    - expect: Page state is intact

#### 1.7. Verify price format and currency display

**File:** `tests/get-coffee-from-brazil/price-format.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/products
    - expect: Shop page loads
  2. Locate Brazilian Santos price on product card
    - expect: Price is displayed as $22.99
    - expect: Dollar sign ($) is present
    - expect: Price format includes cents (.99)
    - expect: Price is right-aligned or clearly separated from other text
  3. Navigate to product detail page for Brazilian Santos
    - expect: Product detail page loads
  4. Verify price format on detail page
    - expect: Price displays as $22.99 consistently
    - expect: Currency formatting matches shop page
    - expect: Price is clearly readable and properly formatted

#### 1.8. Verify Brazilian coffee is correctly labeled as Brazil origin

**File:** `tests/get-coffee-from-brazil/brazil-origin.spec.ts`

**Steps:**
  1. Navigate to https://valentinos-magic-beans.click/products/504
    - expect: Brazilian Santos product page loads
  2. Locate the Origin field in Product Details section
    - expect: Origin field is visible
    - expect: Origin value is 'Brazil'
  3. Verify the product name includes 'Brazilian'
    - expect: Product name is 'Brazilian Santos'
    - expect: Name clearly indicates Brazil as the origin
  4. Verify product description correlates with Brazilian origin
    - expect: Description 'Smooth and mellow with low acidity.' is consistent with Brazilian coffee characteristics
