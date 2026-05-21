<script setup lang="ts">
import type { HeaderProps } from './types'
import NaIcon from '../Icon/Icon.vue'

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
        <NaIcon source="svg" icon="bolt" type="solid" :size="24" class="text-white" />
      </div>
      <div>
        <h1 class="c-header__title">{{ title }}</h1>
        <span class="c-header__subtitle">{{ subtitle }}</span>
      </div>
    </div>

    <div class="c-header__actions">
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
