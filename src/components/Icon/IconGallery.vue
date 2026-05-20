<script setup lang="ts">
import { useIconGallery } from './useIconGallery'

defineOptions({ name: 'IconGallery' })

const { filtered, query, total } = useIconGallery()
</script>

<template>
  <div class="c-icon-gallery">
    <div class="c-icon-gallery__toolbar">
      <input
        v-model="query"
        class="c-icon-gallery__search"
        type="search"
        placeholder="Buscar icono..."
        aria-label="Buscar iconos locales"
      >
      <span class="c-icon-gallery__count" aria-live="polite">
        {{ filtered.length }} / {{ total }}
      </span>
    </div>

    <p v-if="filtered.length === 0" class="c-icon-gallery__empty">
      No se encontró ningún icono con "{{ query }}"
    </p>

    <ul v-else class="c-icon-gallery__grid" role="list">
      <li
        v-for="icon in filtered"
        :key="icon.name"
        class="c-icon-gallery__item"
      >
        <NaIcon
          source="svg"
          :icon="icon.name"
          :type="icon.primaryVariant"
          :size="40"
          :aria-label="icon.name"
        />
        <span class="c-icon-gallery__name">{{ icon.name }}</span>
        <div class="c-icon-gallery__variants">
          <span
            v-for="v in icon.variants"
            :key="v"
            class="c-icon-gallery__badge"
          >{{ v }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src="./IconGallery.css" scoped></style>
