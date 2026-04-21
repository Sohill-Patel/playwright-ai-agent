/**
 * Test Fixtures Index
 * Centralized fixture exports for consistent test configuration
 */

// Feature-specific fixtures - import these in your test files
export { test as playwrightDevTest } from '../src/fixtures/playwright-dev.fixture';
export { test as coffeeShopTest } from '../src/fixtures/coffee-shop.fixture';

// Base test for tests that don't need special fixtures
export { test } from '@playwright/test';

// Also export expect for convenience
export { expect } from '@playwright/test';
