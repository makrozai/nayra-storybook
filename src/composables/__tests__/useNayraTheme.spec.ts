import { describe, it, expect, beforeEach, vi } from 'vitest'

// Helpers para happy-dom
const setHtmlAttr = (val: string | null) => {
  if (val === null) {
    document.documentElement.removeAttribute('data-nayra-theme')
  } else {
    document.documentElement.setAttribute('data-nayra-theme', val)
  }
}
const getHtmlAttr = () => document.documentElement.getAttribute('data-nayra-theme')

describe('useNayraTheme', () => {
  beforeEach(async () => {
    // Forzar el módulo a recargarse para resetear el singleton entre tests
    vi.resetModules()
    setHtmlAttr(null)
  })

  it('setTheme("dark") actualiza el atributo del documento', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    useNayraTheme().setTheme('dark')
    expect(getHtmlAttr()).toBe('dark')
  })

  it('setTheme("light") actualiza el atributo del documento', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    useNayraTheme().setTheme('light')
    expect(getHtmlAttr()).toBe('light')
  })

  it('setTheme actualiza el ref reactivo "theme"', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    const { theme, setTheme } = useNayraTheme()
    setTheme('light')
    expect(theme.value).toBe('light')
    setTheme('dark')
    expect(theme.value).toBe('dark')
  })

  it('initTheme("dark") aplica dark', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    useNayraTheme().initTheme('dark')
    expect(getHtmlAttr()).toBe('dark')
  })

  it('initTheme("light") aplica light', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    useNayraTheme().initTheme('light')
    expect(getHtmlAttr()).toBe('light')
  })

  it('initTheme respeta atributo pre-existente en el DOM', async () => {
    setHtmlAttr('light')
    const { useNayraTheme } = await import('../useNayraTheme')
    useNayraTheme().initTheme('dark') // pide dark, pero ya hay "light" en el DOM
    expect(getHtmlAttr()).toBe('light')
  })

  it('setTheme tras initTheme("auto") gana sobre matchMedia', async () => {
    // Mockear matchMedia para devolver dark
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: query.includes('dark'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    const { useNayraTheme } = await import('../useNayraTheme')
    const { initTheme, setTheme, theme } = useNayraTheme()
    initTheme('auto') // inicia en dark por matchMedia
    expect(theme.value).toBe('dark')

    setTheme('light') // override manual
    expect(theme.value).toBe('light')
    expect(getHtmlAttr()).toBe('light')

    vi.unstubAllGlobals()
  })

  it('el ref "theme" es compartido entre instancias del composable (singleton)', async () => {
    const { useNayraTheme } = await import('../useNayraTheme')
    const a = useNayraTheme()
    const b = useNayraTheme()
    a.setTheme('light')
    expect(b.theme.value).toBe('light')
  })
})
