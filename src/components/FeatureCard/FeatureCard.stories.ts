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
          'Tarjeta de características que muestra una tecnología o funcionalidad del proyecto con un título, descripción y un icono con color personalizable. Se utiliza en la sección de características de la página principal para destacar las tecnologías integradas como Vue 3, Vitest, Tailwind CSS y TypeScript.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título principal de la tarjeta que identifica la característica o tecnología.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    description: {
      description: 'Texto descriptivo que explica los beneficios o el propósito de la característica.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    iconColorClass: {
      description:
        'Clase CSS de Tailwind que define el color de fondo del icono. Ejemplos: `bg-indigo-400`, `bg-purple-400`, `bg-pink-400`, `bg-teal-400`.',
      control: { type: 'text' },
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
    iconColorClass: 'bg-indigo-400',
  },
}

export const Vue3Feature: Story = {
  args: {
    title: 'Vue 3',
    description: 'Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.',
    iconColorClass: 'bg-indigo-400',
  },
}

export const VitestFeature: Story = {
  args: {
    title: 'Vitest',
    description: 'Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.',
    iconColorClass: 'bg-purple-400',
  },
}

export const TailwindFeature: Story = {
  args: {
    title: 'Tailwind CSS',
    description: 'Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.',
    iconColorClass: 'bg-pink-400',
  },
}

export const TypeScriptFeature: Story = {
  args: {
    title: 'TypeScript',
    description: 'Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.',
    iconColorClass: 'bg-teal-400',
  },
}
