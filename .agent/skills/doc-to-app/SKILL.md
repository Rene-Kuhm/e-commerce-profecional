---
name: doc-to-app
description: Convierte instantáneamente un documento de texto estructurado en una mini-aplicación web interactiva, navegable y estética.
version: 1.0.0
compatible_with: antigravity
---

# Doc to App

## 🎯 Propósito
Transformar contenido estático (manuales, guías, reportes) en una experiencia digital dinámica sin frameworks complejos. Genera una SPA (Single Page Application) ligera, rápida y responsive automáticamente.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "convertir este doc en una app", "hacer web este texto" o "crear documentación navegable".
- Para crear prototipos rápidos de contenido o wikis personales.
- Cuando se necesita visualizar datos estructurados JSON de forma amigable.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `source_content` | string | "# Manual de Usuario..." | `length > 50` | El contenido original (Markdown o Texto Plano). |
| `app_title` | string | "Wiki de Procesos" | `length > 3` | El título visible de la aplicación. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `theme` | string | `dark` | `light` | Preferencia de estilo visual. |

## 🔄 Workflow

1.  **Parsing Estructural**: Analizar `source_content` para identificar secciones, títulos y tags.
2.  **Generación de Datos**: Crear `data.json` con esquema fijo (`metadata` + `sections`).
3.  **Construcción de Interfaz**: Generar `index.html` con HTML5 semántico + CSS inline (o archivo aparte) para estilos.
4.  **Implementación de Lógica**: Inyectar Script para búsqueda, filtrado y navegación dinámica sin dependencias externas.
5.  **Sanitización**: Asegurar que ningún input del usuario se ejecute como script en la app final.
6.  **Empaquetado**: Guardar todo en carpeta única `miniapp_[TEMA]_[FECHA]`.

## 🚫 No hacer (Anti-patrones)
-   **No** usar React, Vue o Angular. Mantenerlo Vanilla JS para portabilidad total (run anywhere).
-   **No** requerir servidor (debe funcionar con abrir el HTML localmente).
-   **No** dejar el diseño "crudo"; aplicar estilos mínimos estéticos (tipografía, espaciado).

## 🛠️ Manejo de errores y correcciones
-   **Error**: Estructura de documento irreconocible.
    -   *Corrección*: Tratar todo como una sola sección "General" y avisar.
-   **Error**: Caracteres especiales rompen el JSON.
    -   *Corrección*: Escapar strings correctamente antes de escribir `data.json`.

## 🔒 Seguridad
-   **Sanitización**: Prevenir XSS al renderizar contenido. Usar `textContent` o librerías ligeras de markdown sanitizado si es necesario.

## 📦 Output Exacto
```text
=== MINI-APP GENERADA: [TITULO] ===

📂 UBICACIÓN: agent/apps/miniapp_[clean_title]_[timestamp]/

📄 ARCHIVOS CREADOS:
- index.html (App Core + UI)
- data.json (Contenido estructurado)
- README.txt (Instrucciones de uso)

🚀 CÓMO USAR:
1. Abrir la carpeta.
2. Hacer doble click en index.html.
3. Disfrutar.

✨ FEATURES INCLUIDAS:
- Búsqueda en tiempo real.
- Menú de navegación lateral.
- Modo oscuro/claro (según OS o preferencia).
```

## 📝 Ejemplos

### Ejemplo 1: Manual de Empleado
**Input**: `source_content`: "# Bienvenido...", `app_title`: "Onboarding 2026".
**Output**:
```text
=== MINI-APP GENERADA: Onboarding 2026 ===

📂 UBICACIÓN: agent/apps/miniapp_onboarding_20260512_1030/

📄 ARCHIVOS CREADOS:
- index.html
- data.json
- README.txt

🚀 CÓMO USAR:
1. Abrir index.html en Chrome/Edge.
```
