<script setup lang="ts">
import type { HeroSectionProps } from './types'

defineOptions({ name: 'HeroSection' })

/**
 * @component HeroSection
 * @description Organismo que muestra la introducción principal de la página, consumiendo propiedades para el contenido.
 */
defineProps<HeroSectionProps>()
</script>

<template>
  <section class="c-hero" aria-labelledby="hero-title">
    <div class="c-hero__badge">
      {{ versionBadge }}
    </div>

    <h2 id="hero-title" class="c-hero__title">
      {{ title }} <br>
      <span class="c-hero__highlight">
        {{ highlight }}
      </span>
    </h2>

    <p class="c-hero__description">
      {{ description }}
    </p>
    
    <!-- Ranura para inyectar la lista de features dinámicas -->
    <slot />
  </section>
</template>

<style src="./HeroSection.css" scoped></style>
