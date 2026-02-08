---
name: planificacion-pro
description: Crea un plan de trabajo detallado y profesional, desglosando un objetivo en fases, tareas y entregables claros.
version: 1.0.0
compatible_with: antigravity
---

# Planificación Pro

## 🎯 Propósito
Estructurar la ejecución de cualquier proyecto transformando una idea vaga en una hoja de ruta accionable. Define el alcance, estima esfuerzos y detecta riesgos antes de empezar a trabajar.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "un plan", "roadmap", "fases", "tiempos" o "cómo lo hacemos".
- Antes de iniciar un proyecto complejo (MVP, nueva feature grande).
- Para organizar un caos de tareas sueltas.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `goal` | string | "Crear un MVP de marketplace" | `length > 10` | El objetivo final a lograr. |
| `constraints` | string | "En 2 semanas, sin backend complejo" | `any` | Limitaciones de tiempo o recursos. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `detail_level` | string | `high` | `medium` | Nivel de desglose de tareas (low/medium/high). |

## 🔄 Workflow

1.  **Definición de Fase 0 (Preparación)**: Listar requisitos previos, config de entorno y diseño.
2.  **Desglose de Ejecución (Fases 1-N)**: Dividir el trabajo en bloques lógicos (Frontend, Backend, Integración).
3.  **Definición de QA y Entrega**: Agendar pruebas y despliegue.
4.  **Análisis de Riesgos**: Identificar qué puede salir mal y cómo mitigarlo.
5.  **Estimación**: Asignar "tallas de camiseta" (S, M, L) o días a cada fase.

## 🚫 No hacer (Anti-patrones)
-   **No** planificar tareas de micro-gestión (ej: "escribir una línea de código").
-   **No** ignorar la fase de QA o Testing.
-   **No** prometer fechas exactas sin margen de error.

## 🛠️ Manejo de errores y correcciones
-   **Error**: Objetivo demasiado grande ("Hacer Google").
    -   *Corrección*: Proponer un MVP acotado primero y preguntar si le parece bien.
-   **Error**: Falta de claridad en constraints.
    -   *Corrección*: Asumir "Estándar de industria" y declararlo.

## 🔒 Seguridad
-   **Validación**: No confirmar planes que violen políticas de seguridad (ej: "Subir claves a GitHub").

## 📦 Output Exacto
```text
=== PLAN DE PROYECTO: [OBJETIVO] ===

📅 RESUMEN EJECUTIVO:
- Duración estimada: [X] semanas
- Enfoque: [MVP / Full / Fase 1]

🚧 FASES Y TAREAS:

### FASE 1: PREPARACIÓN
- [ ] [Tarea 1] (S) - [Descripción]
- [ ] [Tarea 2] (M) - [Descripción]

### FASE 2: EJECUCIÓN CORE
- [ ] [Tarea 3] (L) - [Descripción]
...

⚠️ RIESGOS Y MITIGACIÓN:
1. [Riesgo A]: [Plan B]
2. [Riesgo B]: [Plan B]

✅ DEFINITION OF DONE (DoD):
- [ ] Tests unitarios pasando.
- [ ] Deploy en staging verificado.
- [ ] Documentación actualizada.
```

## 📝 Ejemplos

### Ejemplo 1: Plan MVP Web
**Input**: `goal`: "Landing page básica", `constraints`: "1 día".
**Output**:
```text
=== PLAN DE PROYECTO: Landing Page MVP ===

📅 RESUMEN EJECUTIVO:
- Duración estimada: ~6 horas
- Enfoque: Single Page + Formulario

🚧 FASES Y TAREAS:

### FASE 1: SETUP (1h)
- [ ] Configurar Repo y Hosting (Vercel).
- [ ] Instalar Tailwind y dependencias.

### FASE 2: DESARROLLO (4h)
- [ ] Maquetar Hero y Features.
- [ ] Integrar formulario de contacto.

### FASE 3: ENTREGA (1h)
- [ ] Validar en móvil.
- [ ] Deploy producción.

⚠️ RIESGOS:
1. Retraso en DNS: Usar dominio temporal .vercel.app.

✅ DoD:
- [ ] Lighthouse score > 90.
- [ ] Formulario envía email correctamente.
```
