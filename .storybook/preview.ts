import { setup } from '@storybook/vue3-vite'
import type { Preview } from '@storybook/vue3-vite'
import { NayraUI } from '../src/index'
import '../src/assets/css/main.css'

setup((app) => {
  app.use(NayraUI)
})

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
