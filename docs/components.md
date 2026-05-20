# API de Componentes

Todos los componentes están disponibles globalmente tras instalar el plugin con el prefijo `Na` (configurable). También pueden importarse individualmente desde el paquete.

## `NaButton`

Botón de acción con variantes visuales y semánticas.

**Props**

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `label` | `string` | `''` | Texto visible dentro del botón |
| `variant` | `'decrement' \| 'reset' \| 'increment'` | `'reset'` | Variante visual que define colores de foco y hover |
| `disabled` | `boolean` | `false` | Desactiva el botón |
| `ariaLabel` | `string` | — | Etiqueta para lectores de pantalla. Si se omite, usa `label` como fallback |

**Emits**

| Evento | Payload | Descripción |
|---|---|---|
| `click` | — | Emitido al hacer clic o al activar con teclado (Enter / Space nativos) |

**Ejemplo**

```vue
<template>
  <NaButton label="Guardar" variant="increment" @click="handleSave" />
  <NaButton label="Cancelar" variant="decrement" @click="handleCancel" />
  <NaButton label="Restablecer" variant="reset" @click="handleReset" />

  <!-- Con slot de icono y aria-label explícito -->
  <NaButton variant="increment" ariaLabel="Incrementar contador de pasajeros" @click="increment">
    <template #icon><PlusIcon /></template>
  </NaButton>
</template>
```

---

## `NaIcon`

Renderiza iconos desde FontAwesome o desde SVGs locales como componentes Vue.

**Props**

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `icon` | `string` | — | Nombre del icono (requerido) |
| `source` | `'font' \| 'svg'` | `'font'` | Origen del icono |
| `type` | `'solid' \| 'regular' \| 'brands' \| 'colorful'` | `'solid'` | Variante/directorio del icono |
| `size` | `number` | — | Tamaño en píxeles. Sin valor hereda `1em` del padre |
| `ariaLabel` | `string` | — | Etiqueta accesible |
| `rotate` | `number` | — | Grados de rotación (ej. `90`, `180`) |

**Ejemplo**

```vue
<template>
  <!-- Icono de fuente (FontAwesome) -->
  <NaIcon source="font" icon="house" type="solid" :size="20" />

  <!-- Icono SVG local -->
  <NaIcon source="svg" icon="custom-star" type="solid" :size="32" ariaLabel="Estrella" />

  <!-- Icono SVG colorido (preserva colores originales) -->
  <NaIcon source="svg" icon="tech-vue" type="colorful" :size="40" />

  <!-- Con rotación -->
  <NaIcon source="font" icon="arrow-right" :rotate="90" />
</template>
```

### Iconos SVG locales disponibles

Los iconos locales se almacenan en `src/assets/icons/{variante}/{nombre}.svg`.

| Nombre | Variantes disponibles |
|---|---|
| `custom-star` | `solid`, `regular` |
| `tech-vue` | `colorful` |

**Resolución automática de variantes:** Si solicitas una variante inexistente, el componente resuelve a la primera disponible (`solid` → `regular` → `brands` → `colorful`).

### Agregar nuevos iconos SVG

Coloca el archivo `.svg` en el directorio correspondiente:

```
src/assets/icons/
  solid/         ← monocromáticos rellenos (usan currentColor)
  regular/       ← monocromáticos de contorno (usan currentColor)
  brands/        ← íconos de marcas (usan currentColor)
  colorful/      ← multicolor (preservan colores originales)
```

El catálogo se actualiza automáticamente — no se requiere configuración adicional.

### Galería interactiva en Storybook

El componente `IconGallery` lista todos los SVGs locales con su nombre y variantes. Incluye buscador en tiempo real.

```bash
pnpm storybook
# Navegar a: Atoms → Icon → Galería de Iconos Locales
```

### Composable `useIconGallery`

```ts
import { useIconGallery } from '@makrozai/nayra-storybook'

const { icons, query, filtered, total } = useIconGallery()
// icons    → todos los iconos locales (nombre + variantes)
// query    → ref reactivo para el término de búsqueda
// filtered → computed filtrado por query
// total    → número total de iconos
```

---

## `NaHeader`

Cabecera de la aplicación con título, subtítulo y badge de versión.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Nombre principal (requerido) |
| `subtitle` | `string` | Subtítulo descriptivo (requerido) |
| `badgeText` | `string` | Texto del badge (ej. versión, estado) (requerido) |

**Ejemplo**

```vue
<template>
  <NaHeader title="Nayra UI" subtitle="Design System" badgeText="v1.0.1" />
</template>
```

---

## `NaFooter`

Pie de página con copyright y enlaces configurables.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `copyright` | `string` | Texto de copyright (requerido) |
| `links` | `Array<{ text: string; url: string }>` | Lista de enlaces (requerido) |

**Ejemplo**

```vue
<template>
  <NaFooter
    copyright="© 2025 Nayra UI"
    :links="[
      { text: 'Documentación', url: 'https://example.com/docs' },
      { text: 'GitHub', url: 'https://github.com/makrozai/nayra-storybook' }
    ]"
  />
</template>
```

---

## `NaHeroSection`

Sección hero con título, palabra destacada, descripción y badge de versión.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Texto previo al highlight (requerido) |
| `highlight` | `string` | Palabra destacada visualmente (requerido) |
| `description` | `string` | Descripción de la sección (requerido) |
| `versionBadge` | `string` | Texto del badge (ej. `'Beta'`, `'v1.0.1'`) (requerido) |

**Ejemplo**

```vue
<template>
  <NaHeroSection
    title="Bienvenido a"
    highlight="Nayra"
    description="Librería de componentes escalables para Vue 3"
    versionBadge="v1.0.1"
  />
</template>
```

---

## `NaFeatureCard`

Tarjeta de característica con icono, título y descripción. El color del icono se especifica mediante un nombre semántico.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Título de la feature (requerido) |
| `description` | `string` | Descripción de la feature (requerido) |
| `color` | `FeatureCardColor` | Color semántico del icono (requerido) |

**`FeatureCardColor`**

```ts
type FeatureCardColor = 'indigo' | 'purple' | 'pink' | 'teal' | 'amber' | 'emerald' | 'rose' | 'sky'
```

**Ejemplo**

```vue
<template>
  <NaFeatureCard
    title="Accesible"
    description="Componentes con atributos aria y soporte de lectores de pantalla"
    color="indigo"
  />
  <NaFeatureCard
    title="Tipado"
    description="API completamente tipada con TypeScript estricto"
    color="teal"
  />
</template>
```

---

## `NaInteractiveCounter`

Organismo completo de contador con estado reactivo interno, controles y evento de cambio.

**Props**

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `initialValue` | `number` | `0` | Valor inicial del contador |
| `title` | `string` | — | Título del contador |
| `description` | `string` | — | Descripción del contador |

**Emits**

| Evento | Payload | Descripción |
|---|---|---|
| `change` | `number` | Emitido cada vez que cambia el valor |

**Ejemplo**

```vue
<template>
  <NaInteractiveCounter
    :initialValue="5"
    title="Pasajeros"
    description="Número de personas viajando"
    @change="(val) => passengers = val"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const passengers = ref(5)
</script>
```

El contador es **reactivo al prop `initialValue`**: si el padre actualiza el valor, el contador se reinicia automáticamente.

---

## `NaCounterControls`

Molécula de controles del contador (decrement, reset, increment). Diseñada para uso dentro de `NaInteractiveCounter`, pero reutilizable de forma independiente.

**Props**

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Deshabilita todos los controles |

**Emits**

| Evento | Payload | Descripción |
|---|---|---|
| `decrement` | — | Botón de decrementar |
| `reset` | — | Botón de restablecer |
| `increment` | — | Botón de incrementar |

**Ejemplo**

```vue
<template>
  <NaCounterControls
    :disabled="isLocked"
    @decrement="count--"
    @reset="count = 0"
    @increment="count++"
  />
</template>
```
