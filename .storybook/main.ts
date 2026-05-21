import type { StorybookConfig } from '@storybook/vue3-vite'
import type { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['storybook-dark-mode', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal: (viteConfig: InlineConfig) => {
    if (process.env.NODE_ENV === 'production') {
      viteConfig.base = '/nayra-storybook/'
    }
    return viteConfig
  }
}

export default config
