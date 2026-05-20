# Nayra UI

**Nayra UI** es una librería de componentes de interfaz de usuario moderna, reactiva y escalable para **Vue 3**. Construida bajo el paradigma de *Clean Architecture* e inspirada en *Atomic Design*, utiliza **Tailwind CSS v4**, la **Composition API** de Vue 3.5+ y tipado estricto en **TypeScript**.

Proporciona un sistema de diseño agnóstico centralizado, preparado para implementaciones *white-label* mediante Design Tokens como variables CSS.

**Storybook en vivo:** [makrozai.github.io/nayra-storybook](https://makrozai.github.io/nayra-storybook/)

---

## Tabla de contenidos

- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura y filosofía](#arquitectura-y-filosofía)
- [Instalación y configuración](#instalación-y-configuración)
- [Sistema de temas](#sistema-de-temas)
- [API de componentes](#api-de-componentes)
- [Composable `useNayraTheme`](#composable-usenayratheme)
- [White-labeling con Design Tokens](#white-labeling-con-design-tokens)
- [Entorno de desarrollo local](#entorno-de-desarrollo-local)
- [Integración con Storybook](#integración-con-storybook)
- [Build y publicación](#build-y-publicación)
- [CI/CD y despliegue](#cicd-y-despliegue)

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| Vue 3 | ^3.5.0 | Framework base (peer dependency) |
| TypeScript | ^5.7.0 | Tipado estricto en toda la librería |
| Tailwind CSS | ^4.3.0 | Utilidades CSS y sistema de tokens |
| Vite | ^5.2.0 | Build tool y servidor de desarrollo |
| Storybook | ^8.6.18 | Documentación visual interactiva |
| storybook-dark-mode | ^4.0.2 | Toggle de tema en Storybook |
| Vitest | ^2.1.9 | Tests unitarios y de componentes |
| Playwright | ^1.60.0 | Tests E2E sobre Storybook |
| ESLint | ^10.4.0 | Linting con flat config + TypeScript + Vue |
| vite-svg-loader | ^5.1.1 | Importación de SVGs como componentes Vue |
| FontAwesome Free | ^7.2.0 | Iconos de fuente |

---

## Arquitectura y filosofía

La librería impone reglas estrictas para garantizar escalabilidad y coherencia a largo plazo.

### 1. Registry como única fuente de verdad

Todos los componentes se declaran en `src/registry.ts`. El plugin, los tipos exportados y el transform de Storybook derivan de ahí automáticamente. **Añadir un componente nuevo es una sola línea.**

```ts
// src/registry.ts
export const componentRegistry = {
  Button,
  Icon,
  Header,
  // → añadir aquí y queda disponible en todo el sistema
} as const satisfies Record<string, Component>

export type NayraComponentName = keyof typeof componentRegistry
```

### 2. Prefijo unificado `Na` — responsabilidad exclusiva del plugin

El prefijo `Na` es una decisión de **registro**, no de componente. Los componentes declaran su nombre intrínseco (sin prefijo) y el plugin decide cómo registrarlos:

```ts
// Button.vue — nombre intrínseco
defineOptions({ name: 'Button' })

// index.ts — el plugin aplica el prefijo
for (const [name, component] of Object.entries(componentRegistry)) {
  app.component(`${prefix}${name}`, component) // → NaButton, NaIcon…
}
```

El prefijo es configurable al instalar el plugin (ver [Instalación y configuración](#instalación-y-configuración)).

### 3. Modularización de tipos

Las interfaces de Props y Emits **nunca** residen dentro del `.vue`. Cada componente tiene su propio `types.ts`:

```
Button/
├── Button.vue         ← solo template + binding
├── Button.stories.ts
├── Button.css
└── types.ts           ← ButtonProps, ButtonEmits
```

### 4. Composables para lógica compleja

La lógica reactiva, asíncrona o de estado profundo se externaliza en composables locales:

```
Icon/
├── Icon.vue
├── useIconLoader.ts   ← carga dinámica SVG/font
└── useIconGallery.ts  ← catálogo reactivo de iconos locales

InteractiveCounter/
├── InteractiveCounter.vue
└── useCounter.ts      ← lógica reactiva del contador
```

### 5. Diseño Atómico

| Nivel | Componentes |
|---|---|
| Átomos | `Button`, `Icon` |
| Moléculas | `CounterControls`, `FeatureCard` |
| Organismos | `Header`, `Footer`, `HeroSection`, `InteractiveCounter` |

### 6. Añadir un componente nuevo (zero friction)

```
1. Crear src/components/MiNuevo/MiNuevo.vue
   → defineOptions({ name: 'MiNuevo' })   ← SIN prefijo

2. Añadir a src/registry.ts:
   import MiNuevo from './components/MiNuevo/MiNuevo.vue'
   export const componentRegistry = { ...existentes, MiNuevo }

3. El plugin lo registra como <NaMiNuevo> automáticamente
4. El source transform de Storybook lo incluye automáticamente
5. La story puede usar <NaMiNuevo> sin ningún import adicional
```

---

## Instalación y configuración

### Requisitos

- Vue 3.5+
- Entorno Vite (recomendado)

### Instalación

```bash
npm install nayra-storybook
```

### Configuración global (`main.ts`)

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { NayraUI } from 'nayra-storybook'
import 'nayra-storybook/style.css'

const app = createApp(App)

app.use(NayraUI, { theme: 'auto' })

app.mount('#app')
```

El plugin `NayraUI` acepta las siguientes opciones:

| Opción | Tipo | Default | Descripción |
|---|---|---|---|
| `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Tema inicial de la aplicación |
| `prefix` | `string` | `'Na'` | Prefijo para el registro global de componentes |

**Ejemplo con prefijo personalizado:**

```typescript
// Los componentes quedan disponibles como <MiButton>, <MiIcon>…
app.use(NayraUI, { theme: 'dark', prefix: 'Mi' })
```

El plugin `NayraUI` recibe una opción `theme`:

| Valor | Comportamiento |
|---|---|
| `'auto'` (defecto) | Detecta la preferencia del sistema operativo y se sincroniza automáticamente |
| `'dark'` | Fuerza modo oscuro al iniciar |
| `'light'` | Fuerza modo claro al iniciar |

---

## Sistema de temas

### Cómo funciona

El tema se aplica mediante el atributo `data-nayra-theme` en la etiqueta `<html>`. Todos los Design Tokens CSS reaccionan a este atributo:

```css
/* Modo claro */
:root, [data-nayra-theme="light"] {
  --theme-primary: var(--color-indigo-600);
  --theme-surface-base: var(--color-white);
}

/* Modo oscuro */
[data-nayra-theme="dark"] {
  --theme-primary: var(--color-indigo-500);
  --theme-surface-base: var(--color-slate-950);
}
```

### Estado reactivo del tema

El composable `useNayraTheme` implementa un **singleton a nivel de módulo** (una única fuente de verdad para toda la app). El `ref` reactivo `activeTheme` permanece sincronizado tanto con el DOM como con cualquier cambio externo (Storybook toolbar, llamadas a `setTheme`).

Cuando se llama a `setTheme` manualmente, el listener de `prefers-color-scheme` se elimina automáticamente para que el override del usuario prevalezca sobre el sistema operativo.

---

## API de componentes

Todos los componentes están disponibles globalmente tras instalar el plugin, y también pueden importarse individualmente:

```ts
import { Button, Icon, Header } from 'nayra-storybook'
```

### `NaButton`

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

  <!-- Con aria-label explícito (cuando label no es suficientemente descriptivo) -->
  <NaButton variant="increment" ariaLabel="Incrementar contador de pasajeros" @click="increment">
    <template #icon><PlusIcon /></template>
  </NaButton>
</template>
```

---

### `NaIcon`

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

#### Iconos SVG locales disponibles

Los iconos locales se almacenan en `src/assets/icons/{variante}/{nombre}.svg`. La librería incluye los siguientes iconos de fábrica:

| Nombre | Variantes disponibles | Uso |
|---|---|---|
| `custom-star` | `solid`, `regular` | `<NaIcon source="svg" icon="custom-star" type="solid" />` |
| `tech-vue` | `colorful` | `<NaIcon source="svg" icon="tech-vue" type="colorful" />` |

**Resolución automática de variantes:** Si solicitas una variante que no existe para un icono, el componente resuelve automáticamente a la primera variante disponible (orden: `solid` → `regular` → `brands` → `colorful`).

#### Agregar nuevos iconos SVG

Coloca el archivo `.svg` en el directorio correspondiente a su variante:

```
src/assets/icons/
  solid/         ← íconos monocromáticos rellenos (usan currentColor)
  regular/       ← íconos monocromáticos de contorno (usan currentColor)
  brands/        ← íconos de marcas (usan currentColor)
  colorful/      ← íconos multicolor (preservan sus colores originales)
```

El catálogo se actualiza automáticamente — no es necesario modificar ningún archivo de configuración.

#### Galería interactiva en Storybook

El componente `IconGallery` lista todos los SVGs locales disponibles con su nombre y variantes. Incluye un buscador en tiempo real para encontrar iconos por nombre.

```
pnpm storybook
# Navegar a: Atoms → Icon → Galería de Iconos Locales
```

La galería usa el composable `useIconGallery`, que también puede usarse de forma independiente:

```ts
import { useIconGallery } from 'nayra-storybook'

const { icons, query, filtered, total } = useIconGallery()
// icons    → todos los iconos locales (nombre + variantes)
// query    → ref reactivo para el término de búsqueda
// filtered → computed filtrado por query
// total    → número total de iconos
```

---

### `NaHeader`

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
  <NaHeader title="Nayra UI" subtitle="Design System" badgeText="v1.0.0" />
</template>
```

---

### `NaFooter`

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

### `NaHeroSection`

Sección hero con título, palabra destacada, descripción y badge de versión.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Texto previo al highlight (requerido) |
| `highlight` | `string` | Palabra destacada visualmente (requerido) |
| `description` | `string` | Descripción de la sección (requerido) |
| `versionBadge` | `string` | Texto del badge (ej. `'Beta'`, `'v1.0'`) (requerido) |

**Ejemplo**

```vue
<template>
  <NaHeroSection
    title="Bienvenido a"
    highlight="Nayra"
    description="Librería de componentes escalables para Vue 3"
    versionBadge="v1.0.0"
  />
</template>
```

---

### `NaFeatureCard`

Tarjeta de característica con icono, título y descripción. El color del icono se especifica mediante un nombre semántico — el componente gestiona internamente el mapeo a clases CSS.

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

### `NaInteractiveCounter`

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

### `NaCounterControls`

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

---

## Composable `useNayraTheme`

Gestiona el estado del tema de la aplicación. Implementa un **singleton de módulo**: el `ref` reactivo es compartido globalmente, garantizando una única fuente de verdad.

```ts
import { useNayraTheme } from 'nayra-storybook'

const { theme, setTheme, initTheme } = useNayraTheme()
```

### Retorno

| Propiedad | Tipo | Descripción |
|---|---|---|
| `theme` | `Ref<'light' \| 'dark'>` | Estado reactivo del tema actual |
| `setTheme` | `(theme: 'light' \| 'dark') => void` | Cambia el tema y desactiva el listener de sistema |
| `initTheme` | `(initialTheme?: 'light' \| 'dark' \| 'auto') => void` | Inicializa el tema con detección de sistema |

### Comportamiento de `initTheme`

1. Si `data-nayra-theme` ya existe en `<html>` (ej. SSR, pre-render, Storybook), lo respeta y sincroniza el `ref` con ese valor.
2. Si `initialTheme === 'auto'`, detecta `prefers-color-scheme` y registra un listener para cambios del sistema operativo.
3. Si `initialTheme === 'light' | 'dark'`, aplica ese valor directamente.

### Comportamiento de `setTheme`

Cuando se llama manualmente, elimina el listener de `prefers-color-scheme` activo (si existía). El override del usuario prevalece sobre el modo automático hasta que se vuelva a llamar a `initTheme('auto')`.

### Ejemplo: toggle de tema

```vue
<script setup lang="ts">
import { useNayraTheme } from 'nayra-storybook'

const { theme, setTheme } = useNayraTheme()

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}
</script>

<template>
  <button @click="toggleTheme">
    Tema actual: {{ theme }}
  </button>
</template>
```

---

## White-labeling con Design Tokens

Nayra UI no hardcodea colores en sus componentes. Toda la paleta se basa en variables CSS que pueden sobreescribirse en el `:root` de tu aplicación.

### Tokens disponibles

| Token | Descripción |
|---|---|
| `--theme-primary` | Color primario de la marca |
| `--theme-primary-hover` | Color primario en hover |
| `--theme-primary-active` | Color primario en estado activo |
| `--theme-secondary` | Color secundario |
| `--theme-secondary-hover` | Color secundario en hover |
| `--theme-surface-base` | Fondo base de la aplicación |
| `--theme-surface-raised` | Fondo de tarjetas y elementos elevados |
| `--theme-surface-overlay` | Fondo de modales y overlays |
| `--theme-surface-muted` | Fondo atenuado para elementos desactivados |
| `--theme-content-base` | Color de texto principal |
| `--theme-content-body` | Color de texto de cuerpo |
| `--theme-content-muted` | Color de texto atenuado |
| `--theme-border` | Color de bordes |
| `--theme-ring-focus` | Color del anillo de foco (accesibilidad) |
| `--theme-success` | Semántico: éxito |
| `--theme-error` | Semántico: error |
| `--theme-warning` | Semántico: advertencia |
| `--theme-info` | Semántico: información |

### Personalización

```css
/* tu-app.css */
:root {
  /* Marca personalizada */
  --theme-primary: #1d4ed8;
  --theme-primary-hover: #1e40af;
  --theme-primary-active: #1e3a8a;

  /* Superficie en dark mode */
  --theme-surface-base: #0f172a;
  --theme-surface-raised: #1e293b;

  /* Tipografía */
  --theme-content-base: #f1f5f9;
  --theme-content-body: #cbd5e1;
}
```

---

## Entorno de desarrollo local

### Requisitos previos

- Node.js 18+
- pnpm (recomendado) o npm

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/makrozai/nayra-storybook.git
cd nayra-storybook

# Instalar dependencias
pnpm install

# Iniciar Storybook (puerto 6006)
pnpm storybook
```

### Scripts disponibles

| Script | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo Vite |
| `pnpm build` | Compila la librería + genera tipos `.d.ts` |
| `pnpm storybook` | Storybook en modo desarrollo (puerto 6006) |
| `pnpm storybook:build` | Build estático de Storybook |
| `pnpm test` | Ejecuta los tests unitarios con Vitest |
| `pnpm test:watch` | Tests en modo watch (desarrollo) |
| `pnpm test:coverage` | Tests con reporte de cobertura |
| `pnpm test:e2e` | Tests E2E con Playwright (requiere Storybook en :6006) |
| `pnpm lint` | Analiza el código con ESLint |
| `pnpm lint:fix` | Corrige automáticamente problemas de lint |

### Tests

El proyecto usa **Vitest** para tests unitarios y de componentes, y **Playwright** para E2E.

```bash
# Tests unitarios (rápido, sin browser)
pnpm test

# Tests con cobertura
pnpm test:coverage

# Tests E2E (requiere Storybook corriendo)
pnpm storybook &   # en una terminal
pnpm test:e2e      # en otra terminal
```

La suite actual cubre **124 tests unitarios** distribuidos en todos los componentes y composables:

| Ámbito | Archivo de tests | Tests |
|---|---|---|
| `Button` | `Button.spec.ts` | 15 |
| `Icon Gallery` | `IconGallery.spec.ts` | 14 |
| `useIconGallery` | `useIconGallery.spec.ts` | 12 |
| `InteractiveCounter` | `InteractiveCounter.spec.ts` | 14 |
| `useCounter` | `useCounter.spec.ts` | 15 |
| `CounterControls` | `CounterControls.spec.ts` | 9 |
| `FeatureCard` | `FeatureCard.spec.ts` | 12 |
| `Footer` | `Footer.spec.ts` | 10 |
| `Header` | `Header.spec.ts` | 8 |
| `HeroSection` | `HeroSection.spec.ts` | 7 |
| `useNayraTheme` | `useNayraTheme.spec.ts` | 8 |

Los tests unitarios se encuentran en `src/components/**/__tests__/` y `src/composables/__tests__/`. Los tests E2E en `e2e/`.

### Linting

El proyecto usa ESLint con **flat config** y soporte nativo para TypeScript y Vue SFCs:

```bash
# Comprobar
pnpm lint

# Corregir automáticamente
pnpm lint:fix
```

La configuración (`eslint.config.mjs`) aplica:
- `@typescript-eslint` con reglas estrictas para `.ts` y `.vue`
- `eslint-plugin-vue` con `flat/recommended` + reglas alineadas al design system
- Exclusión automática de `dist/`, stories, tests y configs

---

## Integración con Storybook

### Fondo del canvas y modo oscuro

El canvas usa los colores neutros por defecto de Storybook (`#F8F8F8` light · `#333333` dark), gestionados mediante la clase `dark`/`light` que `storybook-dark-mode` aplica al body del iframe (`stylePreview: true`). Los tokens de los componentes se sincronizan por separado vía `data-nayra-theme` en `<html>`. Ambos sistemas operan en paralelo sin interferirse.

### Arquitectura de la integración

La librería usa `storybook-dark-mode` para el toggle de tema en el toolbar. La integración en `.storybook/preview.ts` está diseñada para mantener el ref reactivo `activeTheme` del composable siempre sincronizado con el DOM.

**Flujo de inicialización:**

```
preview.ts carga
  └─ Lee preferencia de localStorage / matchMedia
  └─ useNayraTheme().setTheme('dark'|'light')
       ├─ activeTheme.value sincronizado   ✅
       └─ data-nayra-theme en <html>       ✅

Vue app se crea (setup callback)
  └─ app.use(NayraUI, { theme: 'dark' })
       └─ initTheme → encuentra atributo pre-existente
            └─ sincroniza ref con DOM       ✅

Usuario cambia toolbar
  └─ DARK_MODE_EVENT_NAME
       └─ useNayraTheme().setTheme(...)
            ├─ activeTheme.value           ✅
            └─ DOM                         ✅
```

### Source transform automático

El panel **Show Code** de Storybook muestra los nombres de componentes con el prefijo `Na` (ej. `<NaButton>`) en lugar de los nombres internos. Este transform se deriva automáticamente del `componentRegistry`, por lo que cualquier componente nuevo añadido al registry queda incluido sin configuración adicional.

### Añadir stories

Las stories siguen el patrón estándar de Storybook + CSF3. Ninguna story necesita gestionar el tema ni importar configuración de prefijos directamente: el preview global lo maneja.

```ts
// src/components/MiComponente/MiComponente.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import MiComponente from './MiComponente.vue'

const meta: Meta<typeof MiComponente> = {
  title: 'Components/MiComponente',
  component: MiComponente,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // props del componente
  },
}
```

---

## Build y publicación

El build genera un único módulo ES en `dist/`:

```
dist/
├── nayra-storybook.js   ← módulo principal (ES)
├── index.d.ts           ← tipos TypeScript
└── style.css            ← hoja de estilos compilada
```

```bash
pnpm build
```

Vue se excluye del bundle (peer dependency). Los consumidores deben tener Vue 3.5+ instalado.

### Tipos exportados

Todos los tipos de la API pública están disponibles para importación directa:

```ts
import type {
  // Plugin
  NayraUIOptions,          // opciones del plugin (theme, prefix)
  NayraComponentName,      // 'Button' | 'Icon' | 'Header' | …
  NayraConfig,             // { prefix: string }

  // Tema
  ThemeValue,              // 'light' | 'dark'

  // Props de componentes
  ButtonProps, ButtonEmits,
  IconProps,
  HeaderProps,
  FooterProps,
  HeroSectionProps,
  FeatureCardProps, FeatureCardColor,
  InteractiveCounterProps, InteractiveCounterEmits,
  CounterControlsProps, CounterControlsEmits,

  // Galería de iconos
  IconEntry, IconVariant, UseIconGalleryReturn,
} from 'nayra-storybook'
```

### Alias de paths

El alias `~` apunta a `src/`:

```ts
// Equivalente a src/composables/useNayraTheme.ts
import { useNayraTheme } from '~/composables/useNayraTheme'
```

---

## CI/CD y despliegue

### Estrategia de ramas

| Rama | Propósito | Acceso |
|---|---|---|
| `develop` | Desarrollo activo. Todo el trabajo nuevo parte de aquí | Push directo |
| `master` | Producción. Cada merge dispara el pipeline de deploy | Solo via PR aprobado |
| `gh-pages` | Generada automáticamente por CI. Nunca se toca manualmente | Solo escritura del bot |

### Pipeline (GitHub Actions)

El archivo `.github/workflows/deploy.yml` se ejecuta en cada push a `master`:

```
push a master
  └─ pnpm install --frozen-lockfile
  └─ pnpm lint
  └─ pnpm test
  └─ pnpm build          ← valida que dist/ compila correctamente
  └─ pnpm storybook:build
       └─ peaceiris/actions-gh-pages
            └─ publica storybook-static/ en gh-pages
                 └─ GitHub Pages sirve el sitio en producción
```

### Flujo de trabajo diario

```bash
# 1. Trabajar en develop
git checkout develop
# ... cambios, commits ...
git push origin develop

# 2. Crear PR de develop → master en GitHub
# 3. Revisar y aprobar el PR
# 4. Merge → el pipeline despliega automáticamente
```

El Storybook actualizado queda disponible en:
`https://makrozai.github.io/nayra-storybook/`
