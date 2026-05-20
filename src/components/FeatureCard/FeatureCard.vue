<script setup lang="ts">
import { computed } from 'vue'
import type { FeatureCardProps, FeatureCardColor } from './types'

defineOptions({ name: 'FeatureCard' })

/**
 * @component FeatureCard
 * @description Molécula para mostrar una característica con un icono de color y descripción.
 */
const props = defineProps<FeatureCardProps>()

const colorClassMap: Record<FeatureCardColor, string> = {
  indigo: 'bg-indigo-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400',
  teal: 'bg-teal-400',
  amber: 'bg-amber-400',
  emerald: 'bg-emerald-400',
  rose: 'bg-rose-400',
  sky: 'bg-sky-400',
}

const iconClass = computed(() => colorClassMap[props.color])
</script>

<template>
  <div class="c-feature-card">
    <div class="c-feature-card__icon" :class="iconClass" aria-hidden="true"></div>
    <div>
      <h3 class="c-feature-card__title">{{ title }}</h3>
      <p class="c-feature-card__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style src="./FeatureCard.css" scoped></style>
