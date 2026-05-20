<script setup lang="ts">
import Button from '../Button/Button.vue'
import type { CounterControlsProps, CounterControlsEmits } from './types'

defineOptions({ name: 'NaCounterControls' })

/**
 * @component CounterControls
 * @description Molécula que agrupa y coordina los botones de acción del contador (Restar, Reiniciar y Sumar).
 * Compone múltiples átomos Button asegurando una distribución uniforme.
 *
 * @emits {decrement} DecrementEvent - Emitido al presionar el control de restar.
 * @emits {reset} ResetEvent - Emitido al presionar el control de reiniciar.
 * @emits {increment} IncrementEvent - Emitido al presionar el control de sumar.
 */
withDefaults(defineProps<CounterControlsProps>(), {
  disabled: false
})

const emit = defineEmits<CounterControlsEmits>()

// Manejadores de reenvío de eventos (prefijo "handle" obligatorio)
const handleDecrement = (): void => {
  emit('decrement')
}

const handleReset = (): void => {
  emit('reset')
}

const handleIncrement = (): void => {
  emit('increment')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3" role="group" aria-label="Controles del contador">
    <!-- Botón Decrementar -->
    <Button
      variant="decrement"
      label="Restar"
      :disabled="disabled"
      aria-label="Restar uno al contador"
      @click="handleDecrement"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="c-btn__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
        </svg>
      </template>
    </Button>

    <!-- Botón Restablecer -->
    <Button
      variant="reset"
      label="Reiniciar"
      :disabled="disabled"
      aria-label="Restablecer contador al valor inicial"
      @click="handleReset"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="c-btn__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12"
          />
        </svg>
      </template>
    </Button>

    <!-- Botón Incrementar -->
    <Button
      variant="increment"
      label="Sumar"
      :disabled="disabled"
      aria-label="Sumar uno al contador"
      @click="handleIncrement"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="c-btn__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </template>
    </Button>
  </div>
</template>

<style src="./CounterControls.css" scoped></style>
