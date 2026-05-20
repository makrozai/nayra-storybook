# Getting Started

## Requisitos

- Vue 3.5+
- Entorno Vite (recomendado)

## Instalación

```bash
npm install @makrozai/nayra-storybook
```

O con pnpm:

```bash
pnpm add @makrozai/nayra-storybook
```

El paquete se publica en **GitHub Packages**. Asegúrate de tener el registry configurado en tu `.npmrc`:

```
@makrozai:registry=https://npm.pkg.github.com
```

## Configuración global (`main.ts`)

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { NayraUI } from '@makrozai/nayra-storybook'
import '@makrozai/nayra-storybook/style.css'

const app = createApp(App)

app.use(NayraUI, { theme: 'auto' })

app.mount('#app')
```

## Opciones del plugin

| Opción | Tipo | Default | Descripción |
|---|---|---|---|
| `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Tema inicial de la aplicación |
| `prefix` | `string` | `'Na'` | Prefijo para el registro global de componentes |

**Ejemplo con prefijo personalizado:**

```typescript
// Los componentes quedan disponibles como <MiButton>, <MiIcon>…
app.use(NayraUI, { theme: 'dark', prefix: 'Mi' })
```

## Modo del tema

| Valor | Comportamiento |
|---|---|
| `'auto'` (defecto) | Detecta la preferencia del sistema operativo y se sincroniza automáticamente |
| `'dark'` | Fuerza modo oscuro al iniciar |
| `'light'` | Fuerza modo claro al iniciar |

## Importación individual de componentes

Además del plugin global, puedes importar componentes de forma individual:

```ts
import { Button, Icon, Header } from '@makrozai/nayra-storybook'
```

Los componentes importados individualmente no llevan prefijo y se registran con su nombre intrínseco.

## Tipos disponibles

```ts
import type {
  NayraUIOptions,
  NayraComponentName,
  NayraConfig,
  ThemeValue,
  ButtonProps, ButtonEmits,
  IconProps,
  HeaderProps,
  FooterProps,
  HeroSectionProps,
  FeatureCardProps, FeatureCardColor,
  InteractiveCounterProps, InteractiveCounterEmits,
  CounterControlsProps, CounterControlsEmits,
  IconEntry, IconVariant, UseIconGalleryReturn,
} from '@makrozai/nayra-storybook'
```
