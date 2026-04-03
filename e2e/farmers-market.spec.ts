import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Fresh from Farm to Table')
    await expect(page.locator('body')).toContainText('Riverside Farmers Market')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('75+')
    await expect(page.locator('body')).toContainText('Local Vendors')
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Visit Us This Weekend')
  })
})

test.describe('Vendors page', () => {
  test('lists vendors from Drupal', async ({ page }) => {
    await page.goto('/vendors')
    await expect(page.locator('body')).toContainText('Green Valley Organics')
    await expect(page.locator('body')).toContainText('Honeybee Apiaries')
    await expect(page.locator('body')).toContainText('Sunrise Artisan Bakery')
  })

  test('vendor detail page loads', async ({ page }) => {
    await page.goto('/vendors/green-valley-organics')
    await expect(page.locator('body')).toContainText('Green Valley Organics')
    await expect(page.locator('body')).toContainText('organic vegetables')
  })
})

test.describe('Events page', () => {
  test('lists events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('body')).toContainText('Annual Harvest Festival')
    await expect(page.locator('body')).toContainText('Farm-to-Table Cooking Class')
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/annual-harvest-festival')
    await expect(page.locator('body')).toContainText('Annual Harvest Festival')
  })
})

test.describe('Seasons page', () => {
  test('lists seasons from Drupal', async ({ page }) => {
    await page.goto('/seasons')
    await expect(page.locator('body')).toContainText('Spring Market')
    await expect(page.locator('body')).toContainText('Summer Market')
  })

  test('season detail page loads', async ({ page }) => {
    await page.goto('/seasons/spring-market')
    await expect(page.locator('body')).toContainText('Spring Market')
  })
})

test.describe('News page', () => {
  test('lists news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('body')).toContainText('Market Expansion')
    await expect(page.locator('body')).toContainText('Summer Chef Demo Series')
  })

  test('news detail page loads', async ({ page }) => {
    await page.goto('/news/market-expansion-2025')
    await expect(page.locator('body')).toContainText('Market Expansion')
  })
})

test.describe('Static pages', () => {
  test('about page loads from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toContainText('About Riverside Farmers Market')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('body')).toContainText('Contact Us')
  })
})

test.describe('Navigation', () => {
  test('header links are present', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header')
    await expect(header).toContainText('Programs')
    await expect(header).toContainText('Events')
    await expect(header).toContainText('About')
  })
})
