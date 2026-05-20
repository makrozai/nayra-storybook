import { shallowRef, watch } from 'vue'
import type { Component } from 'vue'
import type { IconProps } from './types'

// Indexado estático de módulos SVG locales en la librería
const svgModules = import.meta.glob('/src/assets/icons/**/*.svg', { query: '?component' })

/**
 * Hook para cargar dinámicamente iconos SVG de forma asíncrona.
 */
export function useIconLoader(props: IconProps) {
  const SvgComponent = shallowRef<Component | null>(null)
  const activeType = shallowRef<string>(props.type || 'solid')

  /**
   * Resuelve la función de carga del SVG verificando la variante o buscando un fallback
   */
  const getSvgLoader = (type: string, icon: string) => {
    const keys = Object.keys(svgModules)
    
    // 1. Buscar variante exacta solicitada
    const exactSuffix = `/src/assets/icons/${type}/${icon}.svg`
    const exactMatch = keys.find(key => key.endsWith(exactSuffix))
    if (exactMatch) {
      return { loader: svgModules[exactMatch], resolvedType: type }
    }

    // 2. Buscar fallbacks si no existe la variante
    const fallbackTypes = ['solid', 'regular', 'brands', 'colorful']
    for (const fallbackType of fallbackTypes) {
      if (fallbackType === type) continue
      const suffix = `/src/assets/icons/${fallbackType}/${icon}.svg`
      const match = keys.find(key => key.endsWith(suffix))
      if (match) {
        return { loader: svgModules[match], resolvedType: fallbackType }
      }
    }

    return null
  }

  watch(
    () => [props.source, props.icon, props.type],
    async ([source, icon, type]) => {
      if (source === 'svg' && icon && type) {
        const match = getSvgLoader(type as string, icon as string)
        if (match) {
          try {
            const module = await match.loader() as { default?: Component }
            SvgComponent.value = module.default ?? (module as unknown as Component)
            activeType.value = match.resolvedType
          } catch (err) {
            console.error(`Failed to load SVG icon: ${icon}`, err)
            SvgComponent.value = null
          }
        } else {
          SvgComponent.value = null
        }
      } else {
        SvgComponent.value = null
      }
    },
    { immediate: true }
  )

  return {
    SvgComponent,
    activeType
  }
}
