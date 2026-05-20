# CI/CD y despliegue

## Estrategia de ramas

| Rama | Propósito | Protección |
|---|---|---|
| `develop` | Desarrollo activo. Todo el trabajo nuevo parte de aquí | PR obligatorio — sin aprobación requerida |
| `master` | Producción. Cada merge dispara el pipeline de deploy | PR + aprobación de Code Owner |
| `gh-pages` | Generada automáticamente por CI — nunca se toca manualmente | Solo escritura del bot |

## Flujo de trabajo

```
1. Sincronizar develop y master localmente
   git checkout develop && git pull origin develop
   git checkout master  && git pull origin master

2. Crear rama desde develop
   git checkout develop && git checkout -b feature/mi-cambio

3. Desarrollar con Conventional Commits
   git commit -m "feat(componente): descripción del cambio"

4. Crear PR → develop (sin aprobación requerida)
   → merge inmediato si CI pasa

5. Acumular features/fixes en develop (repetir pasos 2-4)

6. Cuando el entregable esté listo → disparar el PR a master manualmente
   GitHub → Actions → "Auto PR to master" → Run workflow

7. Revisar, aprobar y mergear el PR a master
   → deploy.yml despliega Storybook y publica el paquete
```

## Workflows (GitHub Actions)

### `auto-pr.yml` — PR manual a master

Se dispara **manualmente** desde GitHub Actions (`workflow_dispatch`). Genera el PR de release con:

- **Versión semántica** calculada desde Conventional Commits:
  - `BREAKING CHANGE` / `tipo!:` → bump **major**
  - `feat:` → bump **minor**
  - `fix:` / `ci:` / `docs:` / `chore:` → bump **patch**
- **Versión override** opcional: si se especifica en el input del workflow, prevalece sobre el cálculo automático
- **Changelog** agrupado por tipo de commit
- **Reviewer** `@makrozai` asignado automáticamente

**Cómo dispararlo:**

```
GitHub → Actions → "Auto PR to master" → Run workflow
  → (opcional) version_override: 2.0.0
  → Run workflow
```

### `deploy.yml` — CI + Deploy + Publish

Se ejecuta en cada push a `master` (tras el merge del PR de release):

```
push a master
  └─ pnpm install --frozen-lockfile
  └─ pnpm lint
  └─ pnpm test
  └─ pnpm build
  └─ pnpm storybook:build
       └─ deploy a gh-pages → GitHub Pages actualizado
  └─ verificar si la versión ya está en GitHub Packages
       └─ si no existe → pnpm publish
       └─ si existe    → skip (previene E409)
```

### `dependency-review.yml` — Auditoría de dependencias

Se ejecuta en cada PR a `master`. Escanea `pnpm-lock.yaml` en busca de CVEs y bloquea el merge si detecta paquetes inseguros.

## Protección de ramas

### `master`
- Push directo bloqueado
- Force push bloqueado
- Requiere PR con 1 aprobación del Code Owner (`@makrozai`)
- Reviews se descartan automáticamente al añadir nuevos commits

### `develop`
- Push directo bloqueado
- Force push bloqueado
- Requiere PR — sin aprobaciones requeridas (merge inmediato)

## CODEOWNERS

`.github/CODEOWNERS` define a `@makrozai` como propietario de todo el código. GitHub solicita su revisión automáticamente en cualquier PR a `master`.

## Publicación del paquete

El paquete se publica en **GitHub Packages** (`npm.pkg.github.com`) como `@makrozai/nayra-storybook`. La publicación ocurre automáticamente en cada merge a `master`, siempre que la versión en `package.json` no haya sido publicada previamente.

Para instalar desde GitHub Packages en otro proyecto:

```
# .npmrc del proyecto consumidor
@makrozai:registry=https://npm.pkg.github.com
```

```bash
npm install @makrozai/nayra-storybook
```
