import { test, expect } from '@playwright/test'

test.describe('InteractiveCounter — Storybook integration', () => {
  test.beforeEach(async ({ page }) => {
    // Ir a la historia por defecto de InteractiveCounter en modo iframe
    await page.goto('/iframe.html?id=organisms-interactivecounter--default&viewMode=story')
    // Esperar a que la tarjeta esté montada
    await page.waitForSelector('.c-card--interactive', { timeout: 10_000 })
  })

  test('muestra el contador inicial en cero con estilos neutrales', async ({ page }) => {
    const valueNode = page.locator('#counter-value')
    await expect(valueNode).toBeVisible()
    await expect(valueNode).toHaveText('0')

    // Estilos BEM neutrales iniciales
    await expect(valueNode).toHaveClass(/c-counter-display__value--neutral/)
    const indicatorNode = page.locator('.c-card__indicator')
    await expect(indicatorNode).toHaveClass(/c-card__indicator--neutral/)
  })

  test('incrementar incrementa el valor y aplica clases positivas', async ({ page }) => {
    const valueNode = page.locator('#counter-value')
    const indicatorNode = page.locator('.c-card__indicator')
    const btnIncrement = page.locator('button[aria-label="Sumar uno al contador"]')

    // Incrementar 1 vez
    await btnIncrement.click()
    await expect(valueNode).toHaveText('1')
    await expect(valueNode).toHaveClass(/c-counter-display__value--positive/)
    await expect(indicatorNode).toHaveClass(/c-card__indicator--positive/)

    // Incrementar 2 veces
    await btnIncrement.click()
    await expect(valueNode).toHaveText('2')
  })

  test('decrementar decrementa el valor y aplica clases negativas', async ({ page }) => {
    const valueNode = page.locator('#counter-value')
    const indicatorNode = page.locator('.c-card__indicator')
    const btnDecrement = page.locator('button[aria-label="Restar uno al contador"]')

    // Decrementar 1 vez
    await btnDecrement.click()
    await expect(valueNode).toHaveText('-1')
    await expect(valueNode).toHaveClass(/c-counter-display__value--negative/)
    await expect(indicatorNode).toHaveClass(/c-card__indicator--negative/)

    // Decrementar 2 veces
    await btnDecrement.click()
    await expect(valueNode).toHaveText('-2')
  })

  test('reiniciar restablece el contador al valor inicial', async ({ page }) => {
    const valueNode = page.locator('#counter-value')
    const btnIncrement = page.locator('button[aria-label="Sumar uno al contador"]')
    const btnReset = page.locator('button[aria-label="Restablecer contador al valor inicial"]')

    // Incrementar a 3
    await btnIncrement.click()
    await btnIncrement.click()
    await btnIncrement.click()
    await expect(valueNode).toHaveText('3')

    // Reiniciar
    await btnReset.click()
    await expect(valueNode).toHaveText('0')
    await expect(valueNode).toHaveClass(/c-counter-display__value--neutral/)
  })
})
