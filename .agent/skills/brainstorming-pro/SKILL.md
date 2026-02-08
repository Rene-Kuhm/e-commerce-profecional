---
name: brainstorming-pro
description: Genera ideas creativas, nombres y alternativas en múltiples rondas, priorizando las mejores con un sistema de scoring objetivo.
version: 1.0.0
compatible_with: antigravity
---

# Brainstorming Pro

## 🎯 Propósito
Superar el bloqueo creativo mediante un proceso estructurado de divergencia y convergencia. Genera un alto volumen de ideas, las filtra, las pule y entrega las mejores opciones clasificadas por viabilidad e impacto.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "ideas", "nombres", "sugerencias" o "alternativas".
- Al inicio de un proyecto (Fase de Ideación).
- Para resolver un problema técnico buscando enfoques laterales.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `topic` | string | "Nombre para app de delivery de drones" | `length > 5` | El tema central o problema a resolver. |
| `constraints` | string | "Corto, en español, disponible .com" | `any` | Limitaciones creativas. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `rounds` | number | `4` | `4` | Cantidad de rondas de iteración. |

## 🔄 Workflow

1.  **Fase A (Volumen)**: Generar 10 ideas rápidas sin filtro.
2.  **Fase B (Mejora)**: Seleccionar las 5 mejores de A y refurzar (scamper, combinar, invertir).
3.  **Fase C (Lateral)**: Generar 5 ideas "locas" o disruptivas fuera de la caja.
4.  **Fase D (Pulido)**: Seleccionar las 3 finalistas absolutas y detallarlas.
5.  **Scoring**: Evaluar el TOP 5 final (1-5) en Impacto, Claridad, Novedad, Esfuerzo, Viabilidad.
6.  **Recomendación**: Seleccionar la ganadora técnica.

## 🚫 No hacer (Anti-patrones)
-   **No** juzgar ideas en la Fase A.
-   **No** ignorar las constraints del usuario (ej: si pide español, no dar inglés).
-   **No** entregar un muro de texto sin formato; usar tablas y listas.

## 🛠️ Manejo de errores y correcciones
-   **Error**: Ideas demasiado genéricas.
    -   *Corrección*: Aplicar técnica de "inversión" (¿cómo sería lo opuesto?) para generar contraste.
-   **Error**: El tema es muy vago.
    -   *Corrección*: Asumir un contexto estándar y declararlo ("Asumiendo sector Tech...").

## 🔒 Seguridad
-   **Contenido**: Filtrar ideas ofensivas o inseguras.
-   **Propiedad Intelectual**: Recordar verificar disponibilidad de marcas (nota legal).

## 📦 Output Exacto
```text
=== RESULTADOS DE BRAINSTORMING: [TEMA] ===

💡 TOP 5 SELECCIONADAS:

| # | Idea / Nombre | Impacto | Viabilidad | Score Total | Racional |
|---|---|---|---|---|---|
| 1 | [Idea A] | 5 | 4 | 9 | [Por qué funciona] |
| 2 | [Idea B] | 4 | 5 | 9 | [Por qué funciona] |
| ... | ... | ... | ... | ... | ... |

🏆 RECOMENDACIÓN FINAL: [Idea A]
- Justificación: ...
- Riesgos Principales: [1. Riesgo A, 2. Riesgo B]
- Alternativa Low-Risk: [Idea secundaria más segura]

🧠 EXTENDIDO (Ideas descartadas interesantes):
- [Idea C]
- [Idea D]
```

## 📝 Ejemplos

### Ejemplo 1: Nombres para SaaS
**Input**: `topic`: "SaaS de contabilidad para freelancers", `constraints`: "Moderno, corto".
**Output**:
```text
=== RESULTADOS DE BRAINSTORMING: Nombres SaaS Contabilidad ===

💡 TOP 5 SELECCIONADAS:

| # | Idea / Nombre | Impacto | Viabilidad | Score Total | Racional |
|---|---|---|---|---|---|
| 1 | "Fisco" | 5 | 3 | 8 | Corto, memorable, pero dominio difícil. |
| 2 | "CuentasClaras" | 3 | 5 | 8 | Clásico, confiable, disponible. |
| ... | ... | ... | ... | ... | ... |

🏆 RECOMENDACIÓN FINAL: "Fisco"
- Justificación: Potencial de marca premium.
- Riesgos: Costo de dominio .com.
- Alternativa Low-Risk: "TuContador"
```
