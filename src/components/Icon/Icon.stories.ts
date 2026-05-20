import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'
import IconGallery from './IconGallery.vue'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    source: {
      control: 'radio',
      options: ['font', 'svg'],
      description: 'Origen del icono (fuente externa FontAwesome o SVG local)',
      table: { category: 'Configuración' }
    },
    icon: {
      control: 'text',
      description: 'Nombre del icono (ej. \'house\' o nombre del archivo SVG)',
      table: { category: 'Configuración' }
    },
    type: {
      control: 'select',
      options: ['solid', 'regular', 'brands', 'colorful'],
      description: 'Variante de la colección de iconos',
      table: { category: 'Configuración' }
    },
    size: {
      control: 'number',
      description: 'Tamaño en píxeles. Si se omite, hereda del elemento padre.',
      table: { category: 'Apariencia' }
    },
    rotate: {
      control: 'number',
      description: 'Rotación en grados',
      table: { category: 'Apariencia' }
    },
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta accesible para lectores de pantalla',
      table: { category: 'Accesibilidad' }
    }
  },
  args: {
    source: 'font',
    icon: 'house',
    type: 'solid'
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const FontAwesomeSolid: Story = {
  args: {
    source: 'font',
    icon: 'heart',
    type: 'solid',
    size: 48
  }
}

export const FontAwesomeRegular: Story = {
  args: {
    source: 'font',
    icon: 'heart',
    type: 'regular',
    size: 48
  }
}

export const FontAwesomeBrands: Story = {
  args: {
    source: 'font',
    icon: 'github',
    type: 'brands',
    size: 48
  }
}

export const SvgLocalSolid: Story = {
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'solid',
    size: 64
  }
}

export const SvgLocalRegular: Story = {
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'regular',
    size: 64
  }
}

export const SvgLocalColorful: Story = {
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; border: 1px dashed #ccc; padding: 16px; border-radius: 8px;">
        <div style="font-size: 24px; color: #ff0000; display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-size: 16px; color: #666;">
            Preserva sus colores nativos (verde y azul) sin heredar el color rojo del padre
          </span>
        </div>
      </div>
    `
  }),
  args: {
    source: 'svg',
    icon: 'tech-vue',
    type: 'colorful',
    size: 64
  }
}

export const VariantFallback: Story = {
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; border: 1px dashed #ccc; padding: 16px; border-radius: 8px;">
        <p style="font-size: 14px; margin: 0; color: #666;">
          <strong>Caso:</strong> Se solicita variante <code>brands</code> del icono <code>custom-star</code>, la cual NO existe localmente.
        </p>
        <div style="display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-weight: bold;">
            ¡Cargado con éxito! Resolvió automáticamente en la variante disponible (solid)
          </span>
        </div>
      </div>
    `
  }),
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'brands',
    size: 48
  }
}

export const SizeInheritanceAndColor: Story = {
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div style="font-size: 24px; color: var(--theme-primary, #6366f1); display: flex; align-items: center; gap: 8px;">
        <NaIcon v-bind="args" />
        <span style="font-weight: bold;">Heredando color y tamaño de fuente (24px)</span>
      </div>
    `
  }),
  args: {
    source: 'font',
    icon: 'bell'
  }
}

export const Transformations: Story = {
  args: {
    source: 'font',
    icon: 'arrow-right',
    rotate: 90,
    size: 32
  }
}

export const Gallery: Story = {
  name: 'Galería de Iconos Locales',
  render: () => ({
    components: { IconGallery },
    template: `<IconGallery />`
  }),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Lista interactiva de todos los iconos SVG locales disponibles en la librería. Usa el buscador para filtrar por nombre. Cada icono muestra su nombre (para usarlo en `icon="..."`) y las variantes disponibles.'
      }
    }
  }
}
