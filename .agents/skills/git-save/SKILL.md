---
name: git-save
description: 'Sube los cambios locales de la rama de trabajo siguiendo la estructura GitFlow del proyecto. Ejecuta secuencialmente: (1) Pruebas unitarias de Vitest y de Playwright E2E, (2) Pull/Merge de develop y master para mitigar conflictos de integración, (3) Git push de la rama, (4) Creación o actualización del Pull Request semántico hacia develop usando GitHub MCP, incluyendo un checklist de aprobación interactivo.'
license: MIT
allowed-tools: Bash
---

# Git Save — Sincronización y Envío en GitFlow

Este skill automatiza y garantiza que todos los envíos de cambios (`git-save`) se realicen bajo los más altos estándares de calidad de código del proyecto Nayra UI. Se activa al recibir comandos como `manually/git-save`, `/git-save`, o cuando el usuario solicita "subir cambios de forma segura".

## Flujo de Trabajo Secuencial

El agente debe ejecutar y validar de forma estricta los siguientes pasos de forma secuencial:

### 1. Ejecución de la Suite de Pruebas
Antes de subir cualquier código, se debe verificar que todo funcione perfectamente.
* **Pruebas Unitarias y de Componentes:** Ejecutar `pnpm test`.
* **Pruebas de Integración E2E:** Ejecutar `pnpm test:e2e` (Playwright levantará automáticamente Storybook).
* **Calidad de Código (Linter):** Ejecutar `pnpm lint`.

> [!CAUTION]
> Si cualquiera de estas pruebas o el linting falla, **el flujo debe detenerse inmediatamente**. Se deben reportar los errores encontrados y no proceder con la sincronización hasta corregirlos.

---

### 2. Sincronización Local con GitFlow
Para evitar conflictos de fusión en el servidor remoto, se debe integrar el estado actual de `master` y `develop`:
```bash
# Descargar el estado actual de todas las ramas
git fetch origin

# Fusionar develop (la rama de integración activa)
git merge origin/develop --no-edit

# Fusionar master (la rama de producción)
git merge origin/master --no-edit
```

> [!WARNING]
> En caso de presentarse conflictos de merge locales:
> 1. Detener el flujo automático.
> 2. Presentar los archivos en conflicto al usuario.
> 3. Resolver los conflictos de forma interactiva antes de proceder.

---

### 3. Push a la Rama Remota
Una vez sincronizado y validado el código local, enviar los commits a GitHub:
```bash
# Obtener el nombre de la rama actual de forma automática
git push origin HEAD
```

---

### 4. Creación o Actualización del Pull Request Semántico
Utilizando las herramientas integradas del **GitHub MCP** (o mediante curl contra la API de GitHub si fuera necesario), gestionar el PR hacia la rama `develop`:

#### A. Verificar PR Existente
Buscar si ya existe un PR abierto desde nuestra rama de trabajo hacia `develop`.
* Si ya existe: Comentar las actualizaciones de pruebas y sincronización en el hilo de comentarios del PR (o actualizar la descripción si es necesario).
* Si no existe: Crear un nuevo PR hacia `develop`.

#### B. Estructura Semántica del PR
* **Título Semántico:** Usar Conventional Commits (`feat(ámbito): descripción`, `fix(ámbito): descripción`, `docs: descripción`).
* **Cuerpo del PR:**
  * **Resumen**: Explicación clara y concisa de qué soluciona o implementa.
  * **Cambios Técnicos**: Lista de archivos creados, modificados o eliminados principales.
  * **Checklist de Aprobación**: Incluir el siguiente checklist interactivo en markdown para validación por parte de Code Owners.

```markdown
### 📋 Checklist de Aprobación

- [ ] **Pruebas Unitarias:** Ejecutadas localmente y 100% exitosas (Vitest).
- [ ] **Pruebas E2E:** Ejecutadas y validadas con Playwright en el navegador.
- [ ] **Calidad Estática:** Formato y linting libres de advertencias o errores (`pnpm lint`).
- [ ] **Integración GitFlow:** Rama sincronizada localmente con `origin/master` y `origin/develop`.
- [ ] **Atribución de IA:** Confirmado que no existen firmas `Co-Authored-By` de Claude en commits.
- [ ] **Documentación:** Modificaciones pertinentes en `README.md`, `.gitignore` y carpeta `docs/` realizadas.
```

---

## Directrices Críticas de Seguridad y Calidad
* **Sin firmas de IA:** No incluir ninguna atribución automatizada a Claude u otras IAs en la descripción ni comentarios del PR.
* **No force-push:** Nunca realizar un push forzado (`git push --force` o `git push -f`) a menos que el usuario lo solicite explícitamente en situaciones de recuperación excepcionales.
