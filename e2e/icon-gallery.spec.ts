import { test, expect } from '@playwright/test'

test.describe('Icon Gallery — story Storybook', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-icon--gallery&viewMode=story')
    // Esperar a que la galería esté montada
    await page.waitForSelector('.c-icon-gallery', { timeout: 10_000 })
  })

  test('muestra la galería con al menos un icono', async ({ page }) => {
    const items = page.locator('.c-icon-gallery__item')
    await expect(items.first()).toBeVisible()
    expect(await items.count()).toBeGreaterThan(0)
  })

  test('muestra el campo de búsqueda', async ({ page }) => {
    const input = page.locator('input[type="search"]')
    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('aria-label', /icono/i)
  })

  test('muestra el contador total/filtrado', async ({ page }) => {
    const count = page.locator('.c-icon-gallery__count')
    await expect(count).toBeVisible()
    await expect(count).toHaveText(/\d+ \/ \d+/)
  })

  test('filtrar por "star" reduce los resultados', async ({ page }) => {
    const before = await page.locator('.c-icon-gallery__item').count()
    await page.fill('input[type="search"]', 'star')
    const after = await page.locator('.c-icon-gallery__item').count()
    expect(after).toBeLessThanOrEqual(before)
    expect(after).toBeGreaterThan(0)
  })

  test('búsqueda sin resultados muestra mensaje empty', async ({ page }) => {
    await page.fill('input[type="search"]', 'xzxzxz_inexistente')
    await expect(page.locator('.c-icon-gallery__empty')).toBeVisible()
    await expect(page.locator('.c-icon-gallery__grid')).not.toBeVisible()
  })

  test('cada icono muestra su nombre', async ({ page }) => {
    const names = page.locator('.c-icon-gallery__name')
    await expect(names.first()).toBeVisible()
    const text = await names.first().textContent()
    expect(text?.trim()).toBeTruthy()
  })

  test('cada icono muestra al menos un badge de variante', async ({ page }) => {
    const badges = page.locator('.c-icon-gallery__badge')
    await expect(badges.first()).toBeVisible()
  })

  test('el contador se actualiza al filtrar', async ({ page }) => {
    const count = page.locator('.c-icon-gallery__count')
    const before = await count.textContent()
    await page.fill('input[type="search"]', 'star')
    await expect(count).not.toHaveText(before!)
  })

  test('restaura resultados al borrar búsqueda', async ({ page }) => {
    const input = page.locator('input[type="search"]')
    await input.fill('star')
    const filtered = await page.locator('.c-icon-gallery__item').count()
    await input.fill('')
    const restored = await page.locator('.c-icon-gallery__item').count()
    expect(restored).toBeGreaterThan(filtered)
  })
})
