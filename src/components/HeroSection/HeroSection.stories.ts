import type { Meta, StoryObj } from '@storybook/vue3'
import HeroSection from './HeroSection.vue'

const meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Título principal del componente hero.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    highlight: {
      description: 'Texto resaltado en la segunda línea del título.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    description: {
      description: 'Descripción mostrada bajo el título.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    versionBadge: {
      description: 'Texto de la versión en el badge superior.',
      control: 'text',
      table: { category: 'Contenido' }
    }
  },
  args: {
    title: 'Descubre nuestra',
    highlight: 'Arquitectura BEM',
    description: 'Componentes fluidos, accesibles y listos para producción con Tailwind y Vue 3.',
    versionBadge: 'Nayra UI v1.0'
  }
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Sistema de Diseño',
    highlight: 'Escalable y Moderno',
    description: 'Acelera el desarrollo de tu producto con Nayra UI.',
    versionBadge: 'Beta 1.0'
  }
}
