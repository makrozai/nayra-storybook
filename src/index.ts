import type { App, Plugin } from 'vue'
import { nayraConfig } from './config'
import Button from './components/Button/Button.vue'
import Icon from './components/Icon/Icon.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import FeatureCard from './components/FeatureCard/FeatureCard.vue'
import InteractiveCounter from './components/InteractiveCounter/InteractiveCounter.vue'
import CounterControls from './components/CounterControls/CounterControls.vue'
import { useNayraTheme } from './composables/useNayraTheme'

// Objeto de componentes para registro global automático
const components = {
  Button,
  Icon,
  Header,
  Footer,
  HeroSection,
  FeatureCard,
  InteractiveCounter,
  CounterControls
}

export const NayraUI: Plugin = {
  install(app: App, options: { theme?: 'light' | 'dark' | 'auto'; prefix?: string } = {}) {
    const initialTheme = options.theme || 'auto'
    const prefix = options.prefix ?? 'Na'
    nayraConfig.prefix = prefix

    // Registrar componentes globalmente con el prefijo configurado (por defecto 'Na')
    for (const [name, component] of Object.entries(components)) {
      app.component(`${prefix}${name}`, component)
    }

    // Inicializar tema
    const { initTheme } = useNayraTheme()
    initTheme(initialTheme)
  }
}

// Exportar componentes de manera individual, composables y config
export {
  Button,
  Icon,
  Header,
  Footer,
  HeroSection,
  FeatureCard,
  InteractiveCounter,
  CounterControls,
  useNayraTheme,
  nayraConfig
}
