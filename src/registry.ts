import type { Component } from 'vue'
import Icon from './components/Icon/Icon.vue'
import IconGallery from './components/Icon/IconGallery.vue'

export const componentRegistry = {
  Icon,
  IconGallery,
} as const satisfies Record<string, Component>

export type NayraComponentName = keyof typeof componentRegistry
