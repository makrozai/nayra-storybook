<script setup lang="ts">
import CounterControls from '../CounterControls/CounterControls.vue'
import type { InteractiveCounterProps, InteractiveCounterEmits } from './types'
import { useCounter } from './useCounter'

defineOptions({ name: 'InteractiveCounter' })

/**
 * @component InteractiveCounter
 * @description Organismo de Contador Interactivo construido según la arquitectura atómica.
 * Mantiene un estado reactivo local independiente y emite el evento 'change'.
 *
 * @emits {change} ChangeEvent - Emitido cada vez que el valor del contador se actualiza.
 */
const props = withDefaults(defineProps<InteractiveCounterProps>(), {
  initialValue: 0,
  title: 'Reactividad con Vue 3 & Tailwind v4',
  description:
    'Experimenta la potencia de la Composition API de Vue 3, tipado estricto en TypeScript y estilos fluidos de Tailwind CSS v4.'
})

const emit = defineEmits<InteractiveCounterEmits>()

const {
  count,
  valueClass,
  indicatorClass,
  handleIncrement,
  handleDecrement,
  handleReset
} = useCounter(() => props.initialValue, emit)
</script>

<template>
  <div class="c-card c-card--interactive" role="region" :aria-label="title">
    <!-- Efecto visual premium: Glow de fondo -->
    <div class="c-card__glow" aria-hidden="true"></div>

    <!-- Encabezado de la Tarjeta (BEM Elements) -->
    <div class="c-card__header">
      <div>
        <h3 class="c-card__title">
          {{ title }}
        </h3>
        <p class="c-card__description">
          {{ description }}
        </p>
      </div>
      <!-- Indicador dinámico basado en modificadores de color BEM -->
      <div class="c-card__indicator" :class="indicatorClass" aria-hidden="true"></div>
    </div>

    <!-- Visualizador del Contador (BEM Elements & modifiers) -->
    <div class="c-counter-display">
      <span class="c-counter-display__label">Valor Actual</span>
      <div
        id="counter-value"
        class="c-counter-display__value"
        :class="valueClass"
        aria-live="polite"
      >
        {{ count }}
      </div>
    </div>

    <!-- Controles del Contador (Molécula que encapsula los átomos) -->
    <CounterControls
      @decrement="handleDecrement"
      @reset="handleReset"
      @increment="handleIncrement"
    />
  </div>
</template>

<style src="./InteractiveCounter.css" scoped></style>
