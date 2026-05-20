import type { App, Plugin } from 'vue'
import { nayraConfig } from './config'
import { componentRegistry } from './registry'
import { useNayraTheme } from './composables/useNayraTheme'

export interface NayraUIOptions {
  theme?: 'light' | 'dark' | 'auto'
  prefix?: string
}

export const NayraUI: Plugin<[NayraUIOptions?]> = {
  install(app: App, options: NayraUIOptions = {}) {
    const prefix = options.prefix ?? 'Na'
    nayraConfig.prefix = prefix

    for (const [name, component] of Object.entries(componentRegistry)) {
      app.component(`${prefix}${name}`, component)
    }

    const { initTheme } = useNayraTheme()
    initTheme(options.theme ?? 'auto')
  }
}

// Core
export { componentRegistry } from './registry'
export type { NayraComponentName } from './registry'
export { nayraConfig } from './config'
export type { NayraConfig } from './config'
export { useNayraTheme } from './composables/useNayraTheme'
export type { ThemeValue } from './composables/useNayraTheme'

// Component prop/emit types
export type { ButtonProps, ButtonEmits } from './components/Button/types'
export type { IconProps } from './components/Icon/types'
export type { HeaderProps } from './components/Header/types'
export type { FooterProps } from './components/Footer/types'
export type { HeroSectionProps } from './components/HeroSection/types'
export type { FeatureCardProps, FeatureCardColor } from './components/FeatureCard/types'
export type { InteractiveCounterProps, InteractiveCounterEmits } from './components/InteractiveCounter/types'
export type { CounterControlsProps, CounterControlsEmits } from './components/CounterControls/types'

// Icon gallery
export { useIconGallery } from './components/Icon/useIconGallery'
export type { IconEntry, IconVariant, UseIconGalleryReturn } from './components/Icon/useIconGallery'

// Individual components
export const {
  Button,
  Icon,
  IconGallery,
  Header,
  Footer,
  HeroSection,
  FeatureCard,
  InteractiveCounter,
  CounterControls,
} = componentRegistry
