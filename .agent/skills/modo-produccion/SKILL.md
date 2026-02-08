---
name: modo-produccion
description: Ejecuta cambios en el código de forma segura, aplicando fixes, optimizaciones y correcciones con validación previa.
version: 1.0.0
compatible_with: antigravity
---

# Modo Producción

## 🎯 Propósito
Realizar modificaciones al código (Fix & Feature) con un estándar de calidad de producción. Minimiza riesgos mediante dry-runs obligatorios y validación estricta antes de aplicar cambios destructivos.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "arreglar", "corregir", "optimizar" o "implementar".
- Tras detectar un bug confirmado en `control-de-calidad`.
- Para refactorizar código existente.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `task` | string | "Corregir bug en login" | `length > 5` | La tarea técnica a realizar. |
| `files` | list | `["src/auth.js"]` | `not_empty` | Archivos involucrados (o pattern). |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `test_command` | string | `npm test` | `null` | Comando para verificar el fix. |

## 🔄 Workflow

1.  **Análisis de Impacto**: Revisar qué archivos se tocarán y dependencias.
2.  **Consulta de Estilo**: Verificar si aplica `estilo-marca` (si es frontend).
3.  **Planificación del Cambio**: Diseñar la modificación (diff).
4.  **Dry-Run (Obligatorio)**: Mostrar exactamente qué líneas cambiarán antes de ejecutar.
5.  **Confirmación**: Solicitar aprobación al usuario (`notify_user`) si el cambio es riesgoso o destructivo.
6.  **Ejecución**: Aplicar cambios.
7.  **Verificación Post-Cambio**: Correr tests o verificar síntaxis.

## 🚫 No hacer (Anti-patrones)
-   **No** modificar archivos sin entender su contexto completo.
-   **No** saltarse el paso de confirmación en cambios masivos (delete, overwrite).
-   **No** dejar "TODOs" o código comentado muerto.
-   **No** romper la build (si falla test, revertir o avisar).

## 🛠️ Manejo de errores y correcciones
-   **Error**: Conflicto de merge o archivo no encontrado.
    -   *Corrección*: Abortar operación y pedir ruta correcta.
-   **Error**: Fix introduce regresión.
    -   *Corrección*: Rollback inmediato a versión anterior.

## 🔒 Seguridad
-   **Confirmación**: Siempre requerida para `overwrite` o `delete`.
-   **Backup**: Sugerir copia de seguridad en refactors grandes.

## 📦 Output Exacto
```text
=== REPORTE DE EJECUCIÓN: [TAREA] ===

🛠️ ARCHIVOS MODIFICADOS:
- [src/utils.js] (Modificado)
- [src/old_utils.js] (Eliminado - Confirmado)

✅ CAMBIOS APLICADOS:
- [Descripción del cambio técnico 1]
- [Descripción del cambio técnico 2]

🚫 NO TOCADO:
- [src/config.js] (Fuera de alcance)

🧪 ESTADO FINAL:
- Sintaxis: OK
- Tests (si aplica): [Pass/Fail]
```

## 📝 Ejemplos

### Ejemplo 1: Fix bug de null pointer
**Input**: `task`: "Evitar crash si user es null en Header", `files`: ["comp/Header.jsx"].
**Output**:
```text
=== REPORTE DE EJECUCIÓN: Fix Null Pointer en Header ===

🛠️ ARCHIVOS MODIFICADOS:
- comp/Header.jsx

✅ CAMBIOS APLICADOS:
- Agregado Optional Chaining (user?.name).
- Renderizado condicional para estado 'guest'.

🚫 NO TOCADO:
- Estilos CSS.

🧪 ESTADO FINAL:
- Sintaxis: OK
```
