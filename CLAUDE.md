# Reglas del proyecto — Nayra UI

## Inicio de cada tarea

Al comenzar cualquier tarea nueva, ejecutar siempre:

```bash
git checkout master && git pull origin master
git checkout develop && git pull origin develop
```

Luego crear la rama de trabajo desde `develop` actualizado. No omitir este paso aunque la rama parezca al día.

## Commits y PRs

- Al finalizar cualquier tarea (y antes de subir cambios o generar/actualizar un Pull Request), ejecutar obligatoriamente `git pull origin master` y `git pull origin develop` (o `git merge origin/master` y `git merge origin/develop` respectivamente) sobre la rama de trabajo para evitar conflictos de integración.
- No agregar `Co-Authored-By` ni ninguna atribución a Claude en commits ni en descripciones de PR.
- No ejecutar `git add`, `git commit` ni `git push` sin instrucción explícita del usuario.

## Ramas

- Todo trabajo nuevo parte de `develop`.
- Las ramas se nombran con el patrón `tipo/descripcion-corta` (ej. `feat/nuevo-componente`, `fix/nombre-del-bug`, `docs/actualizar-readme`).
- El PR a `master` se genera manualmente desde GitHub Actions → "Auto PR to master" → Run workflow, nunca automáticamente en cada push a develop.
