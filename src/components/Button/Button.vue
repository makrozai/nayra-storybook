<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonEmits } from './types'

defineOptions({ name: 'NaButton' })

/**
 * @component Button
 * @description Botón reutilizable con soporte para variantes (increment, decrement, reset),
 * estado deshabilitado y un slot para icono.
 * Encapsula la interacción de click e implementa accesibilidad por teclado nativa.
 *
 * @emits {click} ClickEvent - Emitido al hacer click o presionar Enter/Espacio sobre el botón activo.
 */
const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  variant: 'reset',
  disabled: false,
  ariaLabel: ''
})

const emit = defineEmits<ButtonEmits>()

// Determinar las clases BEM aplicables según la variante
const buttonModifierClass = computed<string>(() => {
  if (props.variant === 'decrement') return 'c-btn--decrement'
  if (props.variant === 'increment') return 'c-btn--increment'
  return 'c-btn--reset'
})

// Manejador del evento de Click
const handleClick = (): void => {
  if (!props.disabled) {
    emit('click')
  }
}

// Manejador de eventos de teclado (Enter / Espacio) para accesibilidad
const handleKeyDown = (event: KeyboardEvent): void => {
  if (props.disabled) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    emit('click')
  }
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :aria-label="ariaLabel || label"
    class="c-btn"
    :class="buttonModifierClass"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <!-- Slot para Icono -->
    <slot name="icon" />

    <!-- Texto del Botón -->
    <span v-if="label" class="c-btn__text">{{ label }}</span>
  </button>
</template>

<style src="./Button.css" scoped></style>
