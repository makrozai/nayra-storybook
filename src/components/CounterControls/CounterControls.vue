<script setup lang="ts">
import Button from '../Button/Button.vue'
import NaIcon from '../Icon/Icon.vue'
import type { CounterControlsProps, CounterControlsEmits } from './types'

defineOptions({ name: 'CounterControls' })

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
        <NaIcon source="svg" icon="minus" type="solid" :size="24" class="c-btn__icon" />
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
        <NaIcon source="svg" icon="arrow-path" type="solid" :size="24" class="c-btn__icon" />
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
        <NaIcon source="svg" icon="plus" type="solid" :size="24" class="c-btn__icon" />
      </template>
    </Button>
  </div>
</template>

<style src="./CounterControls.css" scoped></style>
