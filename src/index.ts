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

export { componentRegistry } from './registry'
export type { NayraComponentName } from './registry'
export { nayraConfig } from './config'
export type { NayraConfig } from './config'
export { useNayraTheme } from './composables/useNayraTheme'

export const {
  Button,
  Icon,
  Header,
  Footer,
  HeroSection,
  FeatureCard,
  InteractiveCounter,
  CounterControls,
} = componentRegistry
