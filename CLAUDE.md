# Reglas del proyecto — Nayra UI

## Inicio de cada tarea

Al comenzar cualquier tarea nueva, ejecutar siempre:

```bash
git checkout master && git pull origin master
git checkout develop && git pull origin develop
```

Luego crear la rama de trabajo desde `develop` actualizado. No omitir este paso aunque la rama parezca al día.

## Commits, Sincronización y PRs

- **Subir cambios (`git-save`):** Para finalizar y subir cualquier tarea, se debe ejecutar obligatoriamente el skill `manually/git-save` (o invocar `/git-save`). Este skill automatiza:
  1. Ejecución de pruebas unitarias (`pnpm test`) y E2E (`pnpm test:e2e`).
  2. Sincronización mediante fusión de las ramas remotas `origin/master` y `origin/develop` para resolver conflictos locales.
  3. Envío (`git push`) a la rama remota de trabajo.
  4. Creación o actualización del Pull Request semántico hacia `develop` usando el MCP de GitHub, incorporando un checklist de aprobación interactivo.
- Al realizar fusiones manuales antes de subir cambios, ejecutar `git fetch origin` seguido de `git merge origin/master` y `git merge origin/develop` en lugar de pulls ciegos.
- No agregar `Co-Authored-By` ni ninguna atribución a Claude en commits ni en descripciones de PR.
- No ejecutar `git add`, `git commit` ni `git push` sin instrucción explícita del usuario (salvo mediante la ejecución directa de la herramienta `manually/git-save`).

## Ramas

- Todo trabajo nuevo parte de `develop`.
- Las ramas se nombran con el patrón `tipo/descripcion-corta` (ej. `feat/nuevo-componente`, `fix/nombre-del-bug`, `docs/actualizar-readme`).
- El PR a `master` se genera manualmente desde GitHub Actions → "Auto PR to master" → Run workflow, nunca automáticamente en cada push a develop.
