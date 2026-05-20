<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonEmits } from './types'

defineOptions({ name: 'Button' })

/**
 * @component Button
 * @description Botón reutilizable con soporte para variantes (increment, decrement, reset),
 * estado deshabilitado y un slot para icono.
 */
const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  variant: 'reset',
  disabled: false,
})

const emit = defineEmits<ButtonEmits>()

const buttonModifierClass = computed<string>(() => {
  if (props.variant === 'decrement') return 'c-btn--decrement'
  if (props.variant === 'increment') return 'c-btn--increment'
  return 'c-btn--reset'
})

const handleClick = (): void => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :aria-label="ariaLabel || label || undefined"
    class="c-btn"
    :class="buttonModifierClass"
    @click="handleClick"
  >
    <!-- Slot para Icono -->
    <slot name="icon"></slot>

    <!-- Texto del Botón -->
    <span v-if="label" class="c-btn__text">{{ label }}</span>
  </button>
</template>

<style src="./Button.css" scoped></style>
