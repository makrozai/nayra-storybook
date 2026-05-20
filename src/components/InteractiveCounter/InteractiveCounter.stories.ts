import type { Meta, StoryObj } from '@storybook/vue3'
import InteractiveCounter from './InteractiveCounter.vue'

const meta = {
  title: 'Organisms/InteractiveCounter',
  component: InteractiveCounter,
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      description: 'Valor inicial del contador interactivo.',
      control: 'number',
      table: { category: 'Configuración' }
    },
    title: {
      description: 'Título descriptivo superior.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    description: {
      description: 'Texto descriptivo de la tarjeta interactiva.',
      control: 'text',
      table: { category: 'Contenido' }
    },
    onChange: {
      description: 'Evento emitido al cambiar el valor del contador.',
      action: 'change',
      table: { category: 'Eventos' }
    }
  },
  args: {
    initialValue: 0,
    title: 'Contador de Interacciones',
    description: 'Prueba la reactividad incrementando o decrementando el valor.'
  }
} satisfies Meta<typeof InteractiveCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialValue: 0
  }
}

export const InitialValuePositive: Story = {
  args: {
    initialValue: 10,
    title: 'Estado Positivo Inicial'
  }
}

export const InitialValueNegative: Story = {
  args: {
    initialValue: -5,
    title: 'Estado Negativo Inicial'
  }
}
