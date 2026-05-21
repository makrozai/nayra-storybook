import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Header from './Header.vue'

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Título principal del proyecto.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    subtitle: {
      description: 'Subtítulo descriptivo.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    badgeText: {
      description: 'Texto de estado del indicador dinámico.',
      control: 'text',
      table: { category: 'Contenido' }
    }
  },
  args: {
    title: 'Antigravity',
    subtitle: 'Vue 3 + Vite Component Library',
    badgeText: 'Testing'
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Antigravity',
    subtitle: 'Component Library',
    badgeText: 'Stable'
  }
}
