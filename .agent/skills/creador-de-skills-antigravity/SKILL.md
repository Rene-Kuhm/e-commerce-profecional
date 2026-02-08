---
name: creador-de-skills-antigravity
description: Crea skills para Antigravity con estructura estandarizada, validaciones y contratos de salida.
---

# Creador de Skills Antigravity

## 🎯 Propósito
Estandarizar la creación de nuevas capacidades (skills) para el agente Antigravity, asegurando que todas cumplan con los contratos de interfaz, documentación, seguridad y calidad definidos por el estándar de ingeniería.

## 🕒 Cuándo usarlo (Triggers)
- Cuando el usuario solicite explícitamente "crear una skill", "enseñar una nueva habilidad" o "generar un módulo de capacidad".
- Cuando se identifique una tarea repetitiva, compleja y bien delimitada que justifique encapsulamiento para su reutilización futura.

## 📥 Entradas (Inputs)

### Requeridas
| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `name` | string | `analisis-logs-python` | `^[a-z0-9-]{3,40}$` | Identificador único. Solo minúsculas, números y guiones. Debe coincidir con la carpeta. |
| `description` | string | "Analiza logs de Python buscando patrones de error." | `length <= 220` | Español, 3ra persona. Sin marketing. Concisa. |
| `instructions` | string | "1. Leer archivo... 2. Filtrar..." | `length > 0` | Pasos lógicos y secuenciales que el skill debe ejecutar. |

### Opcionales (con defaults)
| Nombre | Tipo | Default | Descripción |
|---|---|---|---|
| `subfolders` | array | `[]` | Carpetas extra (ej: `templates`, `scripts`). Solo si aportan valor real. |
| `dependencies` | array | `[]` | Herramientas (ej: `run_command`) o permisos requeridos. |
| `risk_level` | string | `low` | `low` | `medium` | `high`. Define nivel de confirmación antes de actuar. |

## 🛠️ Requisitos (Dependencies)
- Acceso de escritura al sistema de archivos en `agent/skills/`.
- Herramientas básicas de manipulación de archivos (`write_to_file`, `list_dir`).

## 🔄 Workflow

### 1. Planificación
1.  **Analizar Solicitud**: Identificar el propósito core del skill y determinar si es viable.
2.  **Sanitizar Datos**:
    - `name`: Forzar kebab-case.
    - `description`: Truncar a 220 chars si es necesario.
3.  **Verificar Colisiones**: Comprobar si `agent/skills/{name}/` ya existe.

### 2. Validación
1.  **Validar YAML**: Asegurar que `name` y `description` cumplen el formato estricto.
2.  **Validar Estructura**: Confirmar que se generarán todas las secciones obligatorias del SKILL.md.

### 3. Modo Seguridad (Dry-Run / Confirmación)
-   Si el skill ya existe o el `risk_level` es alto:
    1.  Mostrar plan de creación/sobrescritura.
    2.  Pausar y solicitar confirmación explícita (`notify_user`) antes de escribir.
    3.  *(Opcional)* Crear backup de la versión anterior si se está sobrescribiendo.

### 4. Ejecución
1.  **Crear Directorio Raíz**: `agent/skills/{name}/`.
2.  **Crear Subcarpetas**: Solo las especificadas en inputs (ej: `templates/`).
3.  **Escribir SKILL.md**: Generar el contenido markdown combinando el frontmatter y las instrucciones estructuradas.

### 5. Verificación (Smoke Test)
1.  **Leer Archivo Generado**: Verificar que el archivo existe y no está vacío.
2.  **Parsear**: Comprobar que el frontmatter es YAML válido.
3.  **Auditar**: Verificar presencia de secciones obligatorias (Propósito, Inputs, Workflow...).

## ⚠️ Errores Comunes y Soluciones
-   **Error**: "YAML Frontmatter invalido" (ParserError).
    -   *Solución*: Revisar indentación y uso de comillas en strings con caracteres especiales (: o #).
-   **Error**: "Mismatch entre nombre y carpeta".
    -   *Solución*: El campo `name` dentro del md debe ser idéntico al nombre del directorio contenedor.
-   **Error**: "Skill incompleto".
    -   *Solución*: Asegurar que todas las secciones del contrato de salida estén presentes. No dejar secciones "TODO".

## 📦 Contrato de Salida
El agente **SIEMPRE** debe devolver lo siguiente al finalizar:
1.  **Árbol de Archivos**: Visualización de la estructura creada (`agent/skills/...`).
2.  **Contenido SKILL.md**: El contenido completo del archivo generado.
3.  **Checklist de Validación**:
    -   [ ] Estructura de directorios correcta.
    -   [ ] YAML Frontmatter válido y estricto.
    -   [ ] Nombre coincide con carpeta.
    -   [ ] Secciones obligatorias completas.
    -   [ ] Sin anti-patrones.

## 🚫 Anti-patrones (No hacer)
-   **No** inventar paths del usuario; usar siempre `agent/skills/`.
-   **No** crear carpetas vacías (como `lib/` o `tests/`) sin contenido inmediato.
-   **No** usar lenguaje de marketing en la descripción ("Increíble skill que...").
-   **No** dejar el workflow abierto o ambiguo; ser prescriptivo.
-   **No** omitir el manejo de errores en el diseño del nuevo skill.

## 🔒 Modo Seguridad
-   **Confirmación**: Requerida para sobrescribir skills existentes.
-   **Dry-run**: Mostrar siempre qué archivos se crearán antes de la confirmación si la operación es destructiva.

## 🧪 Smoke Test (Preguntas de Verificación)
1.  ¿El trigger está claramente definido?
2.  ¿El output cumple con el Contrato de Salida exacto?
3.  ¿Qué pasaría si falta un input requerido? (El skill debe fallar grácilmente).
4.  ¿Se manejaron correctamente los caracteres especiales en el YAML?

## 📜 Versionado y Compatibilidad
-   `version`: 1.0.0
-   `compatible_with`: Antigravity v1+
-   **Regla**: Si se cambia la estructura obligatoria del SKILL.md, incrementar versión mayor (2.0.0).

## ✅ Definition of Done (Criterios de Éxito)
-   [ ] El archivo `SKILL.md` existe en la ruta correcta.
-   [ ] El frontmatter es válido.
-   [ ] Pasa el checklist de validación automatizado.
-   [ ] El código/texto generado sigue las guías de estilo.
