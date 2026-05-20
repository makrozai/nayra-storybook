import type { Meta, StoryObj } from '@storybook/vue3'
import FeatureCard from './FeatureCard.vue'

const meta: Meta<typeof FeatureCard> = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tarjeta de características que muestra una tecnología o funcionalidad con un título, descripción y un icono de color semántico. El prop `color` acepta valores predefinidos que se mapean internamente a clases CSS.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título principal de la tarjeta.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    description: {
      description: 'Texto descriptivo de la característica.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    color: {
      description: 'Color semántico del icono.',
      control: { type: 'select' },
      options: ['indigo', 'purple', 'pink', 'teal', 'amber', 'emerald', 'rose', 'sky'],
      table: { category: 'Propiedades' },
    },
  },
}

export default meta

type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    title: 'Característica',
    description: 'Descripción general de una característica del proyecto.',
    color: 'indigo',
  },
}

export const Vue3Feature: Story = {
  args: {
    title: 'Vue 3',
    description: 'Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.',
    color: 'indigo',
  },
}

export const VitestFeature: Story = {
  args: {
    title: 'Vitest',
    description: 'Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.',
    color: 'purple',
  },
}

export const TailwindFeature: Story = {
  args: {
    title: 'Tailwind CSS',
    description: 'Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.',
    color: 'pink',
  },
}

export const TypeScriptFeature: Story = {
  args: {
    title: 'TypeScript',
    description: 'Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.',
    color: 'teal',
  },
}

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Indigo" description="Color indigo" color="indigo" />
        <NaFeatureCard title="Purple" description="Color purple" color="purple" />
        <NaFeatureCard title="Pink" description="Color pink" color="pink" />
        <NaFeatureCard title="Teal" description="Color teal" color="teal" />
        <NaFeatureCard title="Amber" description="Color amber" color="amber" />
        <NaFeatureCard title="Emerald" description="Color emerald" color="emerald" />
        <NaFeatureCard title="Rose" description="Color rose" color="rose" />
        <NaFeatureCard title="Sky" description="Color sky" color="sky" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: { story: 'Todas las variantes de color disponibles.' }
    }
  }
}
