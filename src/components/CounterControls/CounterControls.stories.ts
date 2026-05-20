import type { Meta, StoryObj } from '@storybook/vue3'
import CounterControls from './CounterControls.vue'

const meta: Meta<typeof CounterControls> = {
  title: 'Molecules/CounterControls',
  component: CounterControls,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Grupo de controles del contador que agrupa los botones de decrementar, reiniciar e incrementar. Esta molécula coordina la interacción del usuario con el contador emitiendo eventos específicos para cada acción. Se puede deshabilitar completamente para bloquear toda interacción.',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Desactiva todos los botones del grupo de controles, impidiendo cualquier interacción del usuario.',
      control: { type: 'boolean' },
      table: { category: 'Propiedades' },
    },
    onDecrement: {
      description: 'Evento emitido cuando el usuario pulsa el botón de decrementar.',
      table: { category: 'Eventos' },
      action: 'decrement',
    },
    onReset: {
      description: 'Evento emitido cuando el usuario pulsa el botón de reiniciar.',
      table: { category: 'Eventos' },
      action: 'reset',
    },
    onIncrement: {
      description: 'Evento emitido cuando el usuario pulsa el botón de incrementar.',
      table: { category: 'Eventos' },
      action: 'increment',
    },
  },
}

export default meta

type Story = StoryObj<typeof CounterControls>

export const Default: Story = {
  args: {
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
