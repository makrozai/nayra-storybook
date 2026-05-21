import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botón reutilizable de la aplicación que soporta tres variantes visuales: incremento, decremento y reinicio. Se utiliza como elemento fundamental en los controles del contador interactivo. Acepta un slot `#icon` para personalizar el contenido visual y emite un evento `click` al ser pulsado.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Texto visible dentro del botón. Si no se proporciona, el botón mostrará solo el slot de icono.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    variant: {
      description:
        'Variante visual del botón que determina su estilo y color. `decrement` usa tonos rojos, `reset` tonos neutros e `increment` tonos verdes.',
      control: { type: 'select' },
      options: ['decrement', 'reset', 'increment'],
      table: { category: 'Propiedades' },
    },
    disabled: {
      description: 'Desactiva el botón, impidiendo la interacción del usuario y aplicando estilos de estado deshabilitado.',
      control: { type: 'boolean' },
      table: { category: 'Propiedades' },
    },
    ariaLabel: {
      description: 'Etiqueta accesible para lectores de pantalla. Importante cuando el botón solo contiene un icono sin texto visible.',
      control: { type: 'text' },
      table: { category: 'Propiedades' },
    },
    onClick: {
      description: 'Evento emitido cuando el usuario hace clic en el botón.',
      table: { category: 'Eventos' },
      action: 'click',
    },
    icon: {
      description: 'Slot para insertar un icono SVG o componente personalizado dentro del botón.',
      control: false,
      table: { category: 'Slots' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Increment: Story = {
  args: {
    label: 'Incrementar',
    variant: 'increment',
    disabled: false,
    ariaLabel: 'Incrementar contador',
  },
}

export const Decrement: Story = {
  args: {
    label: 'Decrementar',
    variant: 'decrement',
    disabled: false,
    ariaLabel: 'Decrementar contador',
  },
}

export const Reset: Story = {
  args: {
    label: 'Reiniciar',
    variant: 'reset',
    disabled: false,
    ariaLabel: 'Reiniciar contador',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    variant: 'increment',
    disabled: true,
    ariaLabel: 'Botón deshabilitado',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'increment',
    ariaLabel: 'Incrementar con icono',
  },
  render: (args) => ({
    setup() { return { args } },
    template: `
      <NaButton v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </template>
      </NaButton>
    `
  }),
}

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <NaButton label="Decrementar" variant="decrement" aria-label="Decrementar contador" />
        <NaButton label="Reiniciar" variant="reset" aria-label="Reiniciar contador" />
        <NaButton label="Incrementar" variant="increment" aria-label="Incrementar contador" />
      </div>
    `
  }),
}
