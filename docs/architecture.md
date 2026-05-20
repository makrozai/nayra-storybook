# Arquitectura y filosofía

La librería impone reglas estrictas para garantizar escalabilidad y coherencia a largo plazo.

## 1. Registry como única fuente de verdad

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

## 2. Prefijo `Na` — responsabilidad exclusiva del plugin

El prefijo es una decisión de **registro**, no de componente. Los componentes declaran su nombre intrínseco (sin prefijo) y el plugin decide cómo registrarlos:

```ts
// Button.vue — nombre intrínseco
defineOptions({ name: 'Button' })

// index.ts — el plugin aplica el prefijo
for (const [name, component] of Object.entries(componentRegistry)) {
  app.component(`${prefix}${name}`, component) // → NaButton, NaIcon…
}
```

El prefijo es configurable al instalar el plugin. Ver [Getting Started](./getting-started.md).

## 3. Modularización de tipos

Las interfaces de Props y Emits **nunca** residen dentro del `.vue`. Cada componente tiene su propio `types.ts`:

```
Button/
├── Button.vue         ← solo template + binding
├── Button.stories.ts
├── Button.css
└── types.ts           ← ButtonProps, ButtonEmits
```

## 4. Composables para lógica compleja

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

## 5. Diseño Atómico

| Nivel | Componentes |
|---|---|
| Átomos | `Button`, `Icon` |
| Moléculas | `CounterControls`, `FeatureCard` |
| Organismos | `Header`, `Footer`, `HeroSection`, `InteractiveCounter` |

## 6. Añadir un componente nuevo (zero friction)

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

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| Vue 3 | ^3.5.0 | Framework base (peer dependency) |
| TypeScript | ^5.7.0 | Tipado estricto en toda la librería |
| Tailwind CSS | ^4.3.0 | Utilidades CSS y sistema de tokens |
| Vite | ^6.4.2 | Build tool y servidor de desarrollo |
| Storybook | ^8.6.18 | Documentación visual interactiva |
| storybook-dark-mode | ^4.0.2 | Toggle de tema en Storybook |
| Vitest | ^3.2.4 | Tests unitarios y de componentes |
| Playwright | ^1.60.0 | Tests E2E sobre Storybook |
| ESLint | ^10.4.0 | Linting con flat config + TypeScript + Vue |
| vite-svg-loader | ^5.1.1 | Importación de SVGs como componentes Vue |
| FontAwesome Free | ^7.2.0 | Iconos de fuente |
