import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import { NayraUI } from '../src/index'
import { useNayraTheme } from '../src/composables/useNayraTheme'
import { nayraConfig } from '../src/config'
import { addons } from '@storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import React, { useEffect, useState } from 'react'
import { DocsContainer as BaseDocsContainer } from '@storybook/blocks'
import '../src/assets/css/main.css'

setup((app) => {
  // Inicializar la UI de Nayra con el tema por defecto (oscuro) y registrar todos los componentes
  app.use(NayraUI, { theme: 'dark', prefix: 'Na' })
})

// Canal de comunicación para sincronizar el tema de Storybook (Manager y Docs) con nuestros componentes
const channel = addons.getChannel()

// Obtener el estado inicial de modo oscuro de manera síncrona y robusta
const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    try {
      const saved = window.localStorage.getItem('sb-addon-themes-3')
      if (saved) {
        const data = JSON.parse(saved)
        if (data && typeof data.current === 'string') {
          return data.current === 'dark'
        }
      }
    } catch (e) {}
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) {}
  }
  return false
}

// Establecer el tema inicial a través del composable para mantener el ref reactivo en sincronía
const initialDark = getInitialDarkMode()
useNayraTheme().setTheme(initialDark ? 'dark' : 'light')

if (typeof document !== 'undefined') {
  // Inyectar estilo para forzar el fondo transparente en el body dentro de Storybook
  // De esta manera se usa el fondo por defecto del layout de Storybook (Canvas) sin sobreescribirlo con el dark blue de la app
  const style = document.createElement('style')
  style.innerHTML = `
    body.sb-show-main, body.sb-body {
      background-color: transparent !important;
    }
  `
  document.head.appendChild(style)
}

// Sincronizar el tema cuando cambie dinámicamente desde el toolbar de Storybook
channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
  useNayraTheme().setTheme(isDark ? 'dark' : 'light')
})

// Contenedor personalizado de Docs para cambiar el tema dinámicamente
export const CustomDocsContainer = ({ children, context }: any) => {
  const [isDark, setIsDark] = useState(getInitialDarkMode())

  useEffect(() => {
    const handleThemeChange = (dark: boolean) => {
      setIsDark(dark)
    }
    channel.on(DARK_MODE_EVENT_NAME, handleThemeChange)
    return () => {
      channel.off(DARK_MODE_EVENT_NAME, handleThemeChange)
    }
  }, [])

  const theme = isDark ? themes.dark : themes.normal

  return React.createElement(BaseDocsContainer, { context, theme }, children)
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    darkMode: {
      dark: themes.dark,
      light: themes.normal,
      current: 'system' // Seguir la preferencia del sistema por defecto
    },
    docs: {
      container: CustomDocsContainer,
      source: {
        transform: (src: string) => {
          const prefix = nayraConfig.prefix
          const names = [
            'Button', 'Icon', 'Header', 'Footer',
            'HeroSection', 'FeatureCard', 'InteractiveCounter', 'CounterControls'
          ]
          let result = src
          for (const name of names) {
            result = result.replaceAll(`<${name}`, `<${prefix}${name}`)
            result = result.replaceAll(`</${name}>`, `</${prefix}${name}>`)
          }
          return result
        }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
