import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

const svgModules = import.meta.glob('/src/assets/icons/**/*.svg', { query: '?component' })

export type IconVariant = 'solid' | 'regular' | 'brands' | 'colorful'

export interface IconEntry {
  name: string
  variants: IconVariant[]
  primaryVariant: IconVariant
}

const VARIANT_ORDER: IconVariant[] = ['solid', 'regular', 'brands', 'colorful']

function buildIconRegistry(): IconEntry[] {
  const map = new Map<string, Set<IconVariant>>()

  for (const path of Object.keys(svgModules)) {
    const match = path.match(/\/src\/assets\/icons\/([\w-]+)\/([\w-]+)\.svg$/)
    if (!match) continue
    const [, variant, name] = match
    if (!map.has(name)) map.set(name, new Set())
    map.get(name)!.add(variant as IconVariant)
  }

  return Array.from(map.entries())
    .map(([name, variantSet]) => {
      const variants = VARIANT_ORDER.filter(v => variantSet.has(v))
      return { name, variants, primaryVariant: variants[0] }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

// Se construye una sola vez: los módulos glob son estáticos en build time
const iconRegistry = buildIconRegistry()

export interface UseIconGalleryReturn {
  icons: readonly IconEntry[]
  query: Ref<string>
  filtered: ComputedRef<IconEntry[]>
  total: number
}

export function useIconGallery(): UseIconGalleryReturn {
  const query = ref('')

  const filtered = computed<IconEntry[]>(() => {
    const q = query.value.toLowerCase().trim()
    if (!q) return iconRegistry
    return iconRegistry.filter(icon => icon.name.toLowerCase().includes(q))
  })

  return {
    icons: iconRegistry,
    query,
    filtered,
    total: iconRegistry.length,
  }
}
