import type { Meta, StoryObj } from '@storybook/vue3'
import Footer from './Footer.vue'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pie de página de la aplicación que muestra información de copyright y una lista configurable de enlaces de navegación. Admite una cantidad flexible de enlaces y se adapta a diferentes necesidades de contenido, desde un solo enlace hasta múltiples recursos externos.',
      },
    },
  },
  argTypes: {
    copyright: {
      description: 'Texto de copyright que se muestra en el pie de página. Incluye típicamente el año y el nombre del autor o la organización.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    links: {
      description:
        'Lista de enlaces de navegación del pie de página. Cada enlace es un objeto con las propiedades `text` (texto visible) y `url` (dirección de destino).',
      control: { type: 'object' },
      table: { category: 'Propiedades' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    copyright: '© 2026 Create Antigravity. Todos los derechos reservados.',
    links: [
      { text: 'GitHub', url: 'https://github.com' },
      { text: 'Documentación', url: 'https://vuejs.org' },
    ],
  },
}

export const SingleLink: Story = {
  args: {
    copyright: '© 2026 Mi Proyecto.',
    links: [{ text: 'Repositorio', url: 'https://github.com' }],
  },
}

export const ManyLinks: Story = {
  args: {
    copyright: '© 2026 Create Antigravity. Todos los derechos reservados.',
    links: [
      { text: 'GitHub', url: 'https://github.com' },
      { text: 'Documentación', url: 'https://vuejs.org' },
      { text: 'Comunidad', url: 'https://discord.gg/vue' },
      { text: 'Blog', url: 'https://blog.vuejs.org' },
    ],
  },
}
