import { ref } from 'vue'
import type { Ref } from 'vue'

// Singleton intencional: una única fuente de verdad para el tema en toda la app
const activeTheme = ref<'light' | 'dark'>('dark')
let mediaQueryList: MediaQueryList | null = null

type ThemeValue = 'light' | 'dark'

type UseNayraThemeReturn = {
  theme: Ref<ThemeValue>
  setTheme: (theme: ThemeValue) => void
  initTheme: (initialTheme?: ThemeValue | 'auto') => void
}

export const useNayraTheme = (): UseNayraThemeReturn => {
  // Aplica el tema sin tocar el listener de mediaQuery (uso interno)
  const applyTheme = (theme: ThemeValue) => {
    activeTheme.value = theme
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-nayra-theme', theme)
    }
  }

  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    applyTheme(e.matches ? 'dark' : 'light')
  }

  // setTheme público: detiene el modo auto y aplica el tema manualmente
  const setTheme = (theme: ThemeValue) => {
    if (mediaQueryList) {
      mediaQueryList.removeEventListener('change', handleSystemThemeChange)
      mediaQueryList = null
    }
    applyTheme(theme)
  }

  const initTheme = (initialTheme: ThemeValue | 'auto' = 'auto') => {
    // Respetar atributo pre-existente (SSR, pre-render o Storybook Decorators)
    if (typeof document !== 'undefined') {
      const existing = document.documentElement.getAttribute('data-nayra-theme')
      if (existing === 'light' || existing === 'dark') {
        applyTheme(existing)
        return
      }
    }

    if (initialTheme === 'auto' && typeof document !== 'undefined') {
      mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
      applyTheme(mediaQueryList.matches ? 'dark' : 'light')
      mediaQueryList.removeEventListener('change', handleSystemThemeChange)
      mediaQueryList.addEventListener('change', handleSystemThemeChange)
    } else if (initialTheme === 'light' || initialTheme === 'dark') {
      setTheme(initialTheme)
    }
  }

  return { theme: activeTheme, setTheme, initTheme }
}
