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

El proyecto usa **Vitest** para tests unitarios y de componentes, y **Playwright** para pruebas de integración de extremo a extremo (E2E).

### Tests Unitarios y de Componentes

Ejecutados con Vitest en un entorno virtual ultra-rápido (sin necesidad de levantar un navegador real):

```bash
# Ejecutar tests unitarios una sola vez
pnpm test

# Ejecutar tests unitarios en modo desarrollo (watch)
pnpm test:watch

# Generar reporte de cobertura de código
pnpm test:coverage
```

### Tests E2E (Playwright)

Los tests E2E prueban la integración real en el navegador de los componentes montados en Storybook.

> [!NOTE]
> Gracias a la configuración de Playwright `webServer`, al ejecutar `pnpm test:e2e` se levantará automáticamente un servidor de Storybook de forma aislada en el puerto `6006` si no está ya en ejecución. Si ya tienes Storybook corriendo en dicho puerto, Playwright lo reutilizará directamente para agilizar la prueba.

```bash
# Ejecutar suite completa de tests E2E
pnpm test:e2e
```

### Suite de Tests Unitarios (124 tests)

| Ámbito / Componente | Archivo | Tests |
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

Los tests unitarios están ubicados junto a sus respectivos componentes en `src/components/**/__tests__/` y `src/composables/__tests__/`.

### Suite de Tests E2E (13 tests)

| Ámbito / Componente | Archivo | Cobertura de Pruebas | Tests |
|---|---|---|---|
| `Icon Gallery` | `e2e/icon-gallery.spec.ts` | Comportamiento del buscador interactivo, filtrado reactivo de iconos, contador de resultados y estados vacíos. | 9 |
| `InteractiveCounter` | `e2e/interactive-counter.spec.ts` | Flujo de incremento/decremento de valores, reinicio al estado inicial y asignación de clases dinámicas BEM (`neutral`, `positive`, `negative`). | 4 |

Las especificaciones E2E se encuentran en la carpeta raíz `e2e/` y se ejecutan sobre las historias de Storybook.

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
