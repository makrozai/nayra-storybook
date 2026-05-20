<script setup lang="ts">
import type { HeaderProps } from './types'

defineOptions({ name: 'Header' })

/**
 * @component Header
 * @description Encabezado principal que muestra el título, subtítulo y un badge de estado.
 */
defineProps<HeaderProps>()
</script>

<template>
  <header class="c-header">
    <div class="c-header__logo-container">
      <div class="c-header__logo-icon">
        <svg
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h1 class="c-header__title">{{ title }}</h1>
        <span class="c-header__subtitle">{{ subtitle }}</span>
      </div>
    </div>

    <div style="display: flex; align-items: center; gap: 1rem;">
      <!-- Estatus de Pruebas Unitarias -->
      <div class="c-header__badge" role="status" :aria-label="badgeText">
        <span class="c-header__badge-dot">
          <span class="c-header__badge-dot-ping"></span>
          <span class="c-header__badge-dot-core"></span>
        </span>
        <span class="c-header__badge-text">{{ badgeText }}</span>
      </div>

      <!-- Slot opcional para acciones de usuario (ej. cambiar tema) -->
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<style src="./Header.css" scoped></style>
