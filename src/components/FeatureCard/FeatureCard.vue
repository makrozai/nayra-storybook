<script setup lang="ts">
import type { FeatureCardProps } from './types'

defineOptions({ name: 'FeatureCard' })

/**
 * @component FeatureCard
 * @description Molécula para mostrar una característica con un icono de color y descripción.
 */
defineProps<FeatureCardProps>()
</script>

<template>
  <div class="c-feature-card">
    <div class="c-feature-card__icon" :class="iconColorClass" aria-hidden="true" />
    <div>
      <h3 class="c-feature-card__title">{{ title }}</h3>
      <p class="c-feature-card__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style src="./FeatureCard.css" scoped></style>
