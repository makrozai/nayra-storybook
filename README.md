# Nayra UI

**Nayra UI** es una librería de componentes moderna, reactiva y escalable para **Vue 3**. Construida bajo *Clean Architecture* e inspirada en *Atomic Design*, con Tailwind CSS v4, Composition API y TypeScript estricto.

![Version](https://img.shields.io/badge/version-1.0.1-6366f1?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.5%2B-42b883?style=flat-square&logo=vuedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0%2B-3178c6?style=flat-square&logo=typescript)
![Vitest](https://img.shields.io/badge/Vitest-4.1%2B-76b900?style=flat-square&logo=vitest)
![Playwright](https://img.shields.io/badge/Playwright-1.60%2B-2e8b57?style=flat-square&logo=playwright)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

**Storybook en vivo:** [makrozai.github.io/nayra-storybook](https://makrozai.github.io/nayra-storybook/)

---

## Instalación rápida

```bash
# .npmrc — apuntar al registry de GitHub Packages
echo "@makrozai:registry=https://npm.pkg.github.com" >> .npmrc

# Instalar
npm install @makrozai/nayra-storybook
```

```typescript
// main.ts
import { NayraUI } from '@makrozai/nayra-storybook'
import '@makrozai/nayra-storybook/style.css'

app.use(NayraUI, { theme: 'auto' })
```

Los componentes quedan disponibles globalmente como `<NaIcon>`, `<NaIconGallery>`…

---

## Documentación

| Documento | Contenido |
|---|---|
| [Getting Started](./docs/getting-started.md) | Instalación, configuración del plugin, opciones, tipos |
| [Arquitectura](./docs/architecture.md) | Registry, prefijo, Atomic Design, añadir componentes, stack |
| [Componentes](./docs/components.md) | API completa: props, emits y ejemplos de cada componente |
| [Temas y Tokens](./docs/theming.md) | Sistema de temas, Design Tokens CSS, white-labeling |
| [Desarrollo local](./docs/development.md) | Setup, scripts, tests, linting, build, convenciones |
| [Storybook](./docs/storybook.md) | Integración y cómo añadir stories |
| [CI/CD](./docs/ci-cd.md) | Workflows, protección de ramas, flujo de trabajo, publicación |
| [Guía MCP](./docs/mcp-guide.md) | Integración, herramientas MCP de GitHub y automatizaciones de flujos |

---

## Componentes incluidos

| Componente | Nivel | Descripción |
|---|---|---|
| `NaIcon` | Átomo | Iconos FontAwesome + SVGs locales con galería interactiva |
