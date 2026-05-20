<script setup lang="ts">
import type { FooterProps } from './types'

defineOptions({ name: 'NaFooter' })
/**
 * @component Footer
 * @description Pie de página que contiene información de copyright y enlaces de interés.
 *
 * @property {string} copyright - Texto principal de derechos de autor.
 * @property {Array<{text: string, url: string}>} links - Enlaces útiles.
 */
defineProps<FooterProps>()
</script>

<template>
  <footer class="c-footer">
    <p>{{ copyright }}</p>
    <div class="c-footer__links">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="c-footer__link"
        :aria-label="`Visitar ${link.text}`"
      >
        {{ link.text }}
      </a>
    </div>
  </footer>
</template>

<style src="./Footer.css" scoped></style>
