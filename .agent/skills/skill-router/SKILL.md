---
name: skill-router
description: Clasifica la intención del usuario y selecciona el skill más apropiado para ejecutar la tarea.
version: 1.0.0
compatible_with: antigravity
---

# Skill Router

## 🎯 Propósito
Actuar como la puerta de entrada inteligente para Antigravity. Analiza el prompt del usuario, determina la intención (intent) dominante y delega la ejecución al skill especializado correspondiente, asegurando que se cumplan los requisitos previos y las reglas de seguridad.

## 🕒 Cuándo usar este skill (Triggers)
- Al inicio de una interacción compleja donde la intención no es obvia.
- Cuando el usuario utiliza lenguaje natural ambiguo ("ayúdame con esto", "mejora la web").
- Para orquestar flujos de trabajo que requieren múltiples etapas (ej: Branding -> Planificación).

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `user_prompt` | string | "Mejora los colores de la home" | `length > 5` | El texto completo de la solicitud del usuario. |
| `context_summary` | string | "Usuario trabajando en landing page" | `any` | Breve estado actual del proyecto o workspace. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `strict_mode` | boolean | `true` | `false` | Si es true, fuerza la selección de UN solo skill sin ambigüedad. |

## 🔄 Workflow

1.  **Análisis Semántico**: Escanear `user_prompt` buscando palabras clave definidas en `recursos/router-map.json`.
2.  **Identificación de Intención**:
    -   Comparar contra la lista de intents (`qa_fix`, `branding`, etc.).
    -   Calcular score de relevancia por keywords.
3.  **Resolución de Conflictos**:
    -   Si hay empate en el top 2 y `strict_mode` es false, devolver ambos como opciones.
    -   Aplicar `priority_rules` del mapa para desempatar (ej: `qa_fix` prioriza sobre `planning`).
4.  **Validación de Seguridad**: Verificar `safety_flags` para el skill seleccionado (ej: ¿Requiere confirmación?).
5.  **Generación de Plan**: Construir los pasos necesarios para invocar el skill destino.

## 🚫 No hacer (Anti-patrones)
-   **No** ejecutar la tarea final. El router solo *enruta*, no *hace*.
-   **No** inventar skills que no existen en el directorio.
-   **No** asumir "modo-produccion" si el usuario solo pide "ver" o "revisar".
-   **No** ignorar el contexto; si el usuario está en medio de un refactor, priorizar skills técnicos.

## 🛠️ Manejo de errores y correcciones
-   **Error**: Intención desconocida o score bajo.
    -   *Corrección*: Devolver intent `unknown` y sugerir los 3 skills más genéricos (`planning`, `brainstorming`).
-   **Error**: Ambigüedad crítica (ej: "Arregla el diseño" -> ¿QA o Branding?).
    -   *Corrección*: Solicitar desempate al usuario con una pregunta específica.

## 🔒 Seguridad
-   **Dry-run**: No aplica (solo análisis).
-   **Confirmación**: No requerida para el enrutamiento per se, pero debe reportar si el skill destino la necesita.
-   **Rollback**: No aplica.

## 📦 Output Exacto
```text
1) INTENCIÓN DETECTADA: [INTENT_CODE]
2) SKILL SELECCIONADO: [SKILL_NAME]
3) POR QUÉ:
   - [Razón 1 basada en keywords]
   - [Razón 2 basada en contexto]
   - [Razón 3 basada en reglas]
4) INPUTS BLOQUEANTES FALTANTES: [Lista de inputs o "ninguno"]
5) PLAN DE EJECUCIÓN:
   1. [Paso 1]
   2. [Paso 2]
6) SEGURIDAD: [Requiere confirmación / Dry-run automático / No aplica]
7) SECUENCIA RECOMENDADA: [Skill A -> Skill B (si aplica)]
```

## 📝 Ejemplos

### Ejemplo 1: Solicitud de Branding
**Input**: `user_prompt`: "Necesito un logo más moderno y colores neon"
**Output**:
```text
1) INTENCIÓN DETECTADA: branding
2) SKILL SELECCIONADO: estilo-marca
3) POR QUÉ:
   - Palabras clave detectadas: "logo", "colores neon", "moderno".
   - Coincide con categoría de identidad visual.
   - No implica código ni infraestructura.
4) INPUTS BLOQUEANTES FALTANTES: ninguno
5) PLAN DE EJECUCIÓN:
   1. Invocar skill estilo-marca.
   2. Consultar recursos/estilo-visual.json.
6) SEGURIDAD: No aplica
7) SECUENCIA RECOMENDADA: N/A
```
