import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import { NayraUI } from '../src/index'
import { useNayraTheme } from '../src/composables/useNayraTheme'
import { nayraConfig } from '../src/config'
import { componentRegistry } from '../src/registry'
import { addons } from '@storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import type { DocsContainerProps } from '@storybook/blocks'
import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'
import { DocsContainer as BaseDocsContainer } from '@storybook/blocks'
import '../src/assets/css/main.css'
import './preview.css'

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
    } catch (_e) {}
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (_e) {}
  }
  return false
}

// Establecer el tema inicial a través del composable para mantener el ref reactivo en sincronía
const initialDark = getInitialDarkMode()
useNayraTheme().setTheme(initialDark ? 'dark' : 'light')

// Sincronizar el tema cuando cambie dinámicamente desde el toolbar de Storybook
channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
  useNayraTheme().setTheme(isDark ? 'dark' : 'light')
})

// Contenedor personalizado de Docs para cambiar el tema dinámicamente
export const CustomDocsContainer = ({ children, context }: PropsWithChildren<DocsContainerProps>) => {
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
    backgrounds: { disable: true },
    darkMode: {
      dark: themes.dark,
      light: themes.normal,
      stylePreview: true,
      current: 'system',
    },
    docs: {
      container: CustomDocsContainer,
      source: {
        transform: (src: string) => {
          const prefix = nayraConfig.prefix
          let result = src
          for (const name of Object.keys(componentRegistry)) {
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
