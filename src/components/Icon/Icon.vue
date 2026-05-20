<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { useIconLoader } from './useIconLoader'

defineOptions({ name: 'Icon' })

const props = withDefaults(defineProps<IconProps>(), {
  source: 'font',
  type: 'solid',
})

const { SvgComponent, activeType } = useIconLoader(props)

const dynamicStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.size !== undefined) {
    styles.fontSize = `${props.size}px`
  }
  if (props.rotate !== undefined) {
    styles.transform = `rotate(${props.rotate}deg)`
  }
  return styles
})

const fontAwesomeClasses = computed(() => {
  if (props.source !== 'font') return []
  return [`fa-${props.type}`, `fa-${props.icon}`]
})
</script>

<template>
  <span class="c-icon-wrapper" :style="dynamicStyles">
    <i 
      v-if="source === 'font'" 
      class="c-icon"
      :class="fontAwesomeClasses"
      :aria-label="ariaLabel"
      :aria-hidden="!ariaLabel"
    ></i>
    <component 
      v-else-if="source === 'svg' && SvgComponent"
      :is="SvgComponent" 
      class="c-icon"
      :class="activeType === 'colorful' ? 'c-icon--colorful' : 'c-icon--svg'"
      :aria-label="ariaLabel"
      :aria-hidden="!ariaLabel"
    />
  </span>
</template>

<style src="./Icon.css" scoped></style>
