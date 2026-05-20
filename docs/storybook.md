# Integración con Storybook

## Acceso al catálogo

El Storybook de Nayra UI está publicado en GitHub Pages:

**[makrozai.github.io/nayra-storybook](https://makrozai.github.io/nayra-storybook/)**

Para ejecutarlo localmente:

```bash
pnpm storybook   # disponible en http://localhost:6006
```

## Fondo del canvas y modo oscuro

El canvas usa los colores neutros de Storybook (`#F8F8F8` light · `#333333` dark), gestionados por `storybook-dark-mode` aplicando la clase `dark`/`light` al body del iframe (`stylePreview: true`). Los tokens de los componentes se sincronizan por separado vía `data-nayra-theme` en `<html>`. Ambos sistemas operan en paralelo sin interferirse.

## Flujo de inicialización del tema

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

## Source transform automático (Show Code)

El panel **Show Code** muestra los nombres de componentes con el prefijo `Na` (ej. `<NaButton>`) en lugar de los nombres internos. Este transform se deriva automáticamente del `componentRegistry`, por lo que cualquier componente nuevo añadido al registry queda incluido sin configuración adicional.

## Añadir stories

Las stories siguen el patrón CSF3. Ninguna story necesita gestionar el tema ni importar configuración de prefijos — el preview global lo maneja.

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

### Stories con renders personalizados

Para stories que requieren composición o slots, usa el patrón `render` con los componentes registrados globalmente (`NaButton`, `NaIcon`, etc.):

```ts
export const WithIcon: Story = {
  render: (args) => ({
    setup() { return { args } },
    template: `
      <NaButton v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/></svg>
        </template>
      </NaButton>
    `
  })
}
```

No es necesario declarar `components: { ... }` — el plugin `NayraUI` del preview registra todos los componentes globalmente en la app Vue de Storybook.
