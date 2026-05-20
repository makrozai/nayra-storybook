# Guía de Integración con GitHub MCP

Esta guía describe cómo utilizar el servidor de **Model Context Protocol (MCP)** para GitHub configurado en el entorno de desarrollo de **Nayra UI**. Esta integración permite a los asistentes y agentes de inteligencia artificial interactuar de forma segura y directa con los servicios de GitHub.

---

## 1. Configuración del Servidor MCP

El servidor de GitHub MCP está configurado a nivel global en el IDE a través del archivo de configuración centralizado:

👉 **[mcp_config.json](file:///Users/makrozai/.gemini/antigravity-ide/mcp_config.json)**

### Estructura de la configuración:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "github_pat_..."
      }
    }
  }
}
```

> [!IMPORTANT]
> **Token de Acceso Personal (PAT):** El token requiere permisos específicos para operar. Si usas un token tradicional (*Classic*), se recomienda otorgar los alcances `repo`, `workflow`, `read:user` y `read:org`. Si usas un token de grano fino (*Fine-grained*), asegúrate de otorgar acceso de **Lectura y Escritura** a *Contents*, *Pull Requests* e *Issues*.

---

## 2. Herramientas MCP Disponibles

Una vez cargado el servidor, el asistente de desarrollo obtiene acceso a un catálogo de herramientas nativas de GitHub:

*   **Repositorios:** Buscar repositorios, listar ramas, ver detalles del árbol de archivos.
*   **Issues (Incidencias):** Listar, crear, comentar y cerrar issues de forma contextual.
*   **Pull Requests (PR):** Crear PRs, listar PRs abiertos, solicitar revisiones y verificar cambios.
*   **Commits y Contenido:** Obtener o escribir contenidos de archivos directamente en el repositorio remoto, y realizar commits/push.

---

## 3. Flujos de Trabajo Automatizados (Ejemplos)

Con esta conexión activa, puedes pedirle directamente al asistente que ejecute acciones complejas en GitHub utilizando lenguaje natural:

### Flujo A: Creación de Issues y Ramas
> **Usuario:** *"Crea un issue en GitHub titulado 'Optimizar caché de Tailwind v4' y luego crea una rama local `feat/optimizar-cache-tailwind` para trabajar en ello."*
> **Acción del Agente:** El agente usará la herramienta MCP para crear la incidencia en GitHub, obtendrá el ID del issue y luego ejecutará comandos de Git para crear la rama local de forma coordinada.

### Flujo B: Generación y Seguimiento de Pull Requests
> **Usuario:** *"Terminé el cambio. Haz una revisión, escribe el commit convencional y abre un Pull Request hacia la rama `develop`."*
> **Acción del Agente:** Creará el commit, lo subirá al remoto y creará el Pull Request utilizando la API de GitHub de manera inmediata sin necesidad de que salgas del editor.

### Flujo C: Monitoreo de Pipelines (CI/CD)
> **Usuario:** *"¿Pasó la build del último Pull Request?"*
> **Acción del Agente:** Consultará el estado de las ejecuciones de los flujos de GitHub Actions (`workflow_runs`) asociados al commit más reciente y te reportará el resultado (si falló o fue exitoso).

---

## 4. Mejores Prácticas y Seguridad

> [!WARNING]
> - **Nunca comprometas el archivo `mcp_config.json` en Git.** Este archivo reside fuera de tu espacio de trabajo del proyecto (en tu directorio de configuración local de la aplicación) precisamente para mantener tu token de GitHub a salvo.
> - **Rotación periódica:** Se recomienda configurar el token de GitHub con fecha de expiración y renovarlo de forma periódica en el archivo de configuración.
