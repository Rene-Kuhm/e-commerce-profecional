---
name: control-de-calidad
description: Realiza auditorías exhaustivas de código, detectando bugs, malas prácticas y problemas de rendimiento sin modificar archivos.
version: 1.0.0
compatible_with: antigravity
---

# Control de Calidad

## 🎯 Propósito
Actuar como un auditor imparcial que diagnostica la salud del proyecto. Identifica deuda técnica, errores lógicos y violaciones de estándares, generando sugerencias accionables para que `modo-produccion` las ejecute.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "auditar", "revisar", "evaluar", "analizar" o "checkear".
- Antes de un deploy importante.
- Para verificar el cumplimiento de `estilo-marca` en código final.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `scope` | string | "Toda la carpeta src/" | `any` | El alcance de la revisión. |
| `focus` | string | "Performance y Seguridad" | `any` | Áreas prioritarias a inspeccionar. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `deep_scan` | boolean | `true` | `false` | Si es true, revisa lógica compleja línea por línea. |

## 🔄 Workflow

1.  **Escaneo Estático**: Revisar estructura de archivos, naming conventions y dependencias.
2.  **Análisis de Código**: Detectar anti-patrones (código duplicado, funciones gigantes, hardcoding).
3.  **Auditoría de Seguridad**: Buscar credenciales expuestas o inyecciones potenciales.
4.  **Revisión de Performance**: Identificar cuellos de botella obvios (bucles anidados, renders innecesarios).
5.  **Generación de Reporte**: Clasificar hallazgos por severidad.
6.  **Recomendación**: Sugerir acciones correctivas (Quick Wins vs Plan a Largo Plazo).

## 🚫 No hacer (Anti-patrones)
-   **No** modificar, borrar ni crear archivos. Este skill es de SOLO LECTURA.
-   **No** reportar falsos positivos triviales (ej: falta de punto y coma si no es estricto).
-   **No** ser vago ("El código está feo"); ser específico ("Función X tiene 300 líneas").

## 🛠️ Manejo de errores y correcciones
-   **Error**: Código ofuscado o minificado.
    -   *Corrección*: Reportar como "No auditale" y saltar.
-   **Error**: Demasiados errores encontrados (>100).
    -   *Corrección*: Agrupar por categorías y mostrar solo el Top 10 crítico.

## 🔒 Seguridad
-   **Read-only**: Garantizado por diseño. No tiene permisos de escritura.

## 📦 Output Exacto
```text
=== REPORTE DE AUDITORÍA: [ALCANCE] ===

🚨 HALLAZGOS CRÍTICOS (Severidad Alta):
1. [Archivo]: [Descripción del problema] -> [Impacto]
2. ...

⚠️ ADVERTENCIAS (Severidad Media):
1. [Archivo]: [Sugerencia de mejora]

✅ PUNTOS FUERTES:
- ...

💡 PLAN SUGERIDO:
1. Prioridad 1: Corregir hallazgos críticos (usar modo-produccion).
2. Prioridad 2: Refactorizar advertencias.

⚡ QUICK WINS (Fácil implementación):
- [Acción rápida 1]
```

## 📝 Ejemplos

### Ejemplo 1: Auditoría de seguridad básica
**Input**: `scope`: "server/index.js", `focus`: "Seguridad".
**Output**:
```text
=== REPORTE DE AUDITORÍA: server/index.js ===

🚨 HALLAZGOS CRÍTICOS:
1. server/index.js:15: API Key hardcodeada en variable. -> Riesgo de exposición total.

⚠️ ADVERTENCIAS:
1. No hay rate limiting configurado.

✅ PUNTOS FUERTES:
- Usa HTTPS.

💡 PLAN SUGERIDO:
1. Mover API Key a .env inmediatamente.
2. Implementar express-rate-limit.
```
