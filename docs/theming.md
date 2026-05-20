# Sistema de temas y Design Tokens

## Cómo funciona el tema

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

## Composable `useNayraTheme`

Gestiona el estado del tema. Implementa un **singleton de módulo**: el `ref` reactivo es compartido globalmente.

```ts
import { useNayraTheme } from '@makrozai/nayra-storybook'

const { theme, setTheme, initTheme } = useNayraTheme()
```

### Retorno

| Propiedad | Tipo | Descripción |
|---|---|---|
| `theme` | `Ref<'light' \| 'dark'>` | Estado reactivo del tema actual |
| `setTheme` | `(theme: 'light' \| 'dark') => void` | Cambia el tema y desactiva el listener de sistema |
| `initTheme` | `(initialTheme?: 'light' \| 'dark' \| 'auto') => void` | Inicializa el tema con detección de sistema |

### Comportamiento de `initTheme`

1. Si `data-nayra-theme` ya existe en `<html>` (ej. SSR, pre-render), lo respeta y sincroniza el `ref`.
2. Si `initialTheme === 'auto'`, detecta `prefers-color-scheme` y registra un listener para cambios del SO.
3. Si `initialTheme === 'light' | 'dark'`, aplica ese valor directamente.

### Comportamiento de `setTheme`

Cuando se llama manualmente, elimina el listener de `prefers-color-scheme` activo. El override del usuario prevalece sobre el modo automático hasta llamar de nuevo a `initTheme('auto')`.

### Ejemplo: toggle de tema

```vue
<script setup lang="ts">
import { useNayraTheme } from '@makrozai/nayra-storybook'

const { theme, setTheme } = useNayraTheme()
const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')
</script>

<template>
  <button @click="toggleTheme">Tema actual: {{ theme }}</button>
</template>
```

## Design Tokens disponibles

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

## White-labeling

Nayra UI no hardcodea colores en sus componentes. Sobreescribe los tokens en el `:root` de tu aplicación:

```css
/* tu-app.css */
:root {
  --theme-primary: #1d4ed8;
  --theme-primary-hover: #1e40af;
  --theme-primary-active: #1e3a8a;

  --theme-surface-base: #0f172a;
  --theme-surface-raised: #1e293b;

  --theme-content-base: #f1f5f9;
  --theme-content-body: #cbd5e1;
}
```
