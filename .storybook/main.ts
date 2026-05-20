import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}

export default config
