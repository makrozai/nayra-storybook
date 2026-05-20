# Entorno de desarrollo local

## Requisitos previos

- Node.js 22+
- pnpm 10+

## Setup

```bash
# Clonar el repositorio
git clone https://github.com/makrozai/nayra-storybook.git
cd nayra-storybook

# Instalar dependencias
pnpm install

# Iniciar Storybook (puerto 6006)
pnpm storybook
```

## Scripts disponibles

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

## Tests

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

### Suite de tests (124 tests)

| Ámbito | Archivo | Tests |
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

Los tests unitarios están en `src/components/**/__tests__/` y `src/composables/__tests__/`. Los E2E en `e2e/`.

## Linting

El proyecto usa ESLint con **flat config** y soporte nativo para TypeScript y Vue SFCs:

```bash
pnpm lint       # comprobar
pnpm lint:fix   # corregir automáticamente
```

La configuración (`eslint.config.mjs`) aplica:
- `@typescript-eslint` con reglas estrictas para `.ts` y `.vue`
- `eslint-plugin-vue` con `flat/recommended` + reglas alineadas al design system
- Exclusión automática de `dist/`, stories, tests y configs

## Build

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

## Convenciones de commits

El proyecto sigue **Conventional Commits**. El workflow de CI usa los mensajes para calcular la versión semántica del próximo release:

| Tipo | Efecto en versión | Ejemplo |
|---|---|---|
| `feat:` | bump **minor** | `feat(icon): soporte para SVG animados` |
| `fix:` | bump **patch** | `fix(button): corregir estado disabled` |
| `chore:` / `docs:` / `ci:` | bump **patch** | `chore: actualizar dependencias` |
| `tipo!:` / `BREAKING CHANGE` | bump **major** | `feat!: nueva API de temas` |
