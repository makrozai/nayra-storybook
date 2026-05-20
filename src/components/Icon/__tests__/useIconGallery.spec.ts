import { describe, it, expect } from 'vitest'
import { useIconGallery } from '../useIconGallery'

describe('useIconGallery', () => {
  it('expone el catálogo completo de iconos', () => {
    const { icons, total } = useIconGallery()
    expect(icons.length).toBeGreaterThan(0)
    expect(total).toBe(icons.length)
  })

  it('cada entrada tiene name, variants y primaryVariant', () => {
    const { icons } = useIconGallery()
    for (const icon of icons) {
      expect(icon.name).toBeTruthy()
      expect(icon.variants.length).toBeGreaterThan(0)
      expect(icon.variants).toContain(icon.primaryVariant)
    }
  })

  it('filtered devuelve todos los iconos cuando query está vacío', () => {
    const { icons, filtered } = useIconGallery()
    expect(filtered.value).toHaveLength(icons.length)
  })

  it('filtra por nombre (case-insensitive)', () => {
    const { query, filtered } = useIconGallery()
    query.value = 'STAR'
    expect(filtered.value.every(i => i.name.toLowerCase().includes('star'))).toBe(true)
  })

  it('filtra parcialmente', () => {
    const { query, filtered } = useIconGallery()
    query.value = 'cust'
    expect(filtered.value.some(i => i.name.includes('custom'))).toBe(true)
  })

  it('devuelve lista vacía cuando no hay coincidencia', () => {
    const { query, filtered } = useIconGallery()
    query.value = 'xzxzxz_inexistente'
    expect(filtered.value).toHaveLength(0)
  })

  it('ordena los iconos alfabéticamente', () => {
    const { icons } = useIconGallery()
    const names = icons.map(i => i.name)
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)))
  })

  it('el icono custom-star existe en el catálogo', () => {
    const { icons } = useIconGallery()
    const star = icons.find(i => i.name === 'custom-star')
    expect(star).toBeDefined()
    expect(star!.variants.length).toBeGreaterThan(0)
  })

  it('el icono tech-vue existe con variante colorful', () => {
    const { icons } = useIconGallery()
    const vue = icons.find(i => i.name === 'tech-vue')
    expect(vue).toBeDefined()
    expect(vue!.variants).toContain('colorful')
  })

  it('primaryVariant sigue el orden solid > regular > brands > colorful', () => {
    const { icons } = useIconGallery()
    const order = ['solid', 'regular', 'brands', 'colorful']
    for (const icon of icons) {
      const expected = icon.variants.reduce((best, v) =>
        order.indexOf(v) < order.indexOf(best) ? v : best
      )
      expect(icon.primaryVariant).toBe(expected)
    }
  })

  it('total no cambia al modificar query', () => {
    const { query, total, filtered } = useIconGallery()
    const initialTotal = total
    query.value = 'star'
    expect(total).toBe(initialTotal)
    expect(filtered.value.length).toBeLessThanOrEqual(total)
  })

  it('restaura todos los resultados al limpiar query', () => {
    const { icons, query, filtered } = useIconGallery()
    query.value = 'star'
    expect(filtered.value.length).toBeLessThan(icons.length)
    query.value = ''
    expect(filtered.value).toHaveLength(icons.length)
  })
})
