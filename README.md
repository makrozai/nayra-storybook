# Nayra UI

**Nayra UI** es una librería de componentes de interfaz de usuario moderna, reactiva y escalable para **Vue 3**. Construida bajo el paradigma de *Clean Architecture* e inspirada en *Atomic Design*, utiliza **Tailwind CSS v4**, la **Composition API** de Vue 3.5+ y tipado estricto en **TypeScript**.

Proporciona un sistema de diseño agnóstico centralizado, preparado para implementaciones *white-label* mediante Design Tokens como variables CSS.

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
| vite-svg-loader | ^5.1.1 | Importación de SVGs como componentes Vue |
| FontAwesome Free | ^7.2.0 | Iconos de fuente |

---

## Arquitectura y filosofía

La librería impone reglas estrictas para garantizar escalabilidad y coherencia a largo plazo.

### 1. Prefijo unificado `Na`

Todos los componentes registrados globalmente llevan el prefijo `Na` (ej. `<NaButton>`, `<NaHeader>`). Internamente, en `src/components/`, los archivos omiten el prefijo (ej. `Button.vue`) pero lo declaran explícitamente con la macro:

```ts
defineOptions({ name: 'NaButton' })
```

### 2. Modularización de tipos

Las interfaces de Props y Emits **nunca** residen dentro del `.vue`. Cada componente tiene su propio `types.ts`:

```
Button/
├── Button.vue       ← solo template + binding
├── Button.stories.ts
├── Button.css
└── types.ts         ← ButtonProps, ButtonEmits
```

### 3. Composables para lógica compleja

La lógica reactiva, asíncrona o de estado profundo se externaliza en composables locales:

```
Icon/
├── Icon.vue
└── useIconLoader.ts   ← lógica de carga SVG/font

InteractiveCounter/
├── InteractiveCounter.vue
└── useCounter.ts      ← lógica del contador
```

### 4. Diseño Atómico

| Nivel | Componentes |
|---|---|
| Átomos | `Button`, `Icon` |
| Moléculas | `CounterControls`, `FeatureCard` |
| Organismos | `Header`, `Footer`, `HeroSection`, `InteractiveCounter` |

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
| `label` | `string` | — | Texto visible dentro del botón |
| `variant` | `'decrement' \| 'reset' \| 'increment'` | `'reset'` | Variante visual que define colores de foco y hover |
| `disabled` | `boolean` | `false` | Desactiva el botón |
| `ariaLabel` | `string` | — | Etiqueta para lectores de pantalla |

**Emits**

| Evento | Payload | Descripción |
|---|---|---|
| `click` | — | Emitido al hacer clic |

**Ejemplo**

```vue
<template>
  <NaButton label="Guardar" variant="increment" @click="handleSave" />
  <NaButton label="Cancelar" variant="decrement" @click="handleCancel" />
  <NaButton label="Restablecer" variant="reset" @click="handleReset" />
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
  <NaIcon source="svg" icon="logo" type="brands" :size="32" ariaLabel="Logo de Nayra" />

  <!-- Con rotación -->
  <NaIcon source="font" icon="arrow-right" :rotate="90" />
</template>
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

Tarjeta de característica con icono, título y descripción.

**Props**

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Título de la feature (requerido) |
| `description` | `string` | Descripción de la feature (requerido) |
| `iconColorClass` | `string` | Clase CSS de color para el icono (requerido) |

**Ejemplo**

```vue
<template>
  <NaFeatureCard
    title="Accesible"
    description="Componentes con atributos aria y soporte de lectores de pantalla"
    iconColorClass="text-indigo-500"
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
| `setTheme` | `(theme: 'light' \| 'dark') => void` | Cambia el tema y actualiza el DOM |
| `initTheme` | `(initialTheme?: 'light' \| 'dark' \| 'auto') => void` | Inicializa el tema con detección de sistema |

### Comportamiento de `initTheme`

1. Si `data-nayra-theme` ya existe en `<html>` (ej. SSR, pre-render, Storybook), lo respeta y sincroniza el `ref` con ese valor.
2. Si `initialTheme === 'auto'`, detecta `prefers-color-scheme` y registra un listener para cambios de sistema operativo.
3. Si `initialTheme === 'light' | 'dark'`, aplica ese valor y elimina el listener de sistema si existía.

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
npm install

# Iniciar Storybook (puerto 6006)
npm run storybook
```

### Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Compila la librería + genera tipos `.d.ts` |
| `npm run storybook` | Storybook en modo desarrollo (puerto 6006) |
| `npm run storybook:build` | Build estático de Storybook |

---

## Integración con Storybook

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

### Añadir stories

Las stories siguen el patrón estándar de Storybook + CSF3. Ninguna story necesita gestionar el tema directamente: el preview global lo maneja.

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
npm run build
```

Vue se excluye del bundle (peer dependency). Los consumidores deben tener Vue 3.5+ instalado.

### Alias de paths

El alias `~` apunta a `src/`:

```ts
// Equivalente a src/composables/useNayraTheme.ts
import { useNayraTheme } from '~/composables/useNayraTheme'
```
