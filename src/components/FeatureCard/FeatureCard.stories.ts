import type { Meta, StoryObj } from '@storybook/vue3-vite'
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
      description: { story: 'Todas las variantes de color disponibles sin icono explícito (solo el bullet decorativo).' }
    }
  }
}

export const WithFontIcon: Story = {
  args: {
    title: 'Icono FontAwesome',
    description: 'FeatureCard utilizando un icono de fuente (FontAwesome) pasando el prop icon.',
    color: 'emerald',
    icon: 'star',
    iconSource: 'font',
  },
}

export const WithSvgIcon: Story = {
  args: {
    title: 'Icono SVG Local',
    description: 'FeatureCard utilizando un icono SVG cargado desde los assets locales (src/assets/icons).',
    color: 'amber',
    icon: 'bolt',
    iconSource: 'svg',
    iconType: 'solid',
  },
}

export const AllColorsWithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Vue 3" description="Framework progresivo" color="indigo" icon="tech-vue" iconSource="svg" iconType="colorful" />
        <NaFeatureCard title="Rápido" description="Rendimiento óptimo" color="purple" icon="bolt" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Favoritos" description="Guarda tus preferencias" color="pink" icon="star" iconSource="font" />
        <NaFeatureCard title="Suma" description="Añade elementos" color="teal" icon="plus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Resta" description="Quita elementos" color="amber" icon="minus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Actualizar" description="Sincroniza datos" color="emerald" icon="arrow-path" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Personalizado" description="Icono SVG Outline" color="rose" icon="bolt" iconSource="svg" iconType="regular" />
        <NaFeatureCard title="Estrella" description="Icono SVG" color="sky" icon="custom-star" iconSource="svg" iconType="regular" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: { story: 'Todas las variantes de color con diferentes tipos de iconos (font y svg).' }
    }
  }
}
