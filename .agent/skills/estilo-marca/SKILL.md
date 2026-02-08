---
name: estilo-marca
description: Garantiza la consistencia visual y narrativa de TecnoDespegue mediante reglas estrictas de UI, tono y assets.
version: 1.0.0
compatible_with: antigravity
---

# Estilo Marca

## 🎯 Propósito
Centralizar y aplicar las definiciones de identidad de TecnoDespegue. Este skill es la "fuente de verdad" para decisiones de diseño y copy, evitando la improvisación.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el router detecta intención de `branding`.
- Al crear nuevos componentes UI o páginas.
- Al redactar textos para la web, emails o marketing.
- Cuando el usuario pregunta por colroes, fuentes o tono.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `asset_type` | string | `visual` | `enum: visual, copy, tech` | Tipo de activo a generar o consultar. |
| `context` | string | "Hero section de la home" | `length > 5` | Dónde se aplicará el estilo. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `format` | string | `css` | `json` | Formato de salida deseado (css, tailwind, texto). |

## 🔄 Workflow

1.  **Consulta de Recursos**: Leer `recursos/estilo-visual.json` y `guia-de-textos.md` según `asset_type`.
2.  **Validación de Contexto**: Verificar si el pedido contradice alguna regla (ej: usar Comic Sans).
3.  **Generación de Reglas**: Extraer tokens específicos (colores, fuentes) aplicables al caso.
4.  **Aplicación**:
    -   Si es visual: Generar CSS/Tailwind o instrucciones de diseño.
    -   Si es copy: Redactar o corregir texto según tono.
5.  **Verificación**: Contrastar output contra checklist de marca.

## 🚫 No hacer (Anti-patrones)
-   **No** inventar colores fuera de la paleta oficial (salvo derivados matemáticos).
-   **No** mezclar tecnologías (ver `reglas-tecnicas.md`).
-   **No** usar tono "corporativo aburrido" ni "demasiado informal" (seguir `voice: cercana-profesional`).

## 🛠️ Manejo de errores y correcciones
-   **Error**: Pedido de colores fuera de marca.
    -   *Corrección*: Sugerir el color de la paleta más cercano y explicar por qué.
-   **Error**: Falta de definición para un componente nuevo.
    -   *Corrección*: Extrapolar estilos de componentes existentes (radio -> consistencia).

## 🔒 Seguridad
-   **Read-only**: Este skill fundamentalmente lee definiciones. No modifica la guía de estilo sin autorización explícita (que requeriría otro proceso).

## 📦 Output Exacto
```text
=== REGLAS DE ESTILO: [CONTEXTO] ===

🎨 VISUAL (si aplica):
- Colores primarios: [Hex codes]
- Tipografía: [Familia, pesos]
- Espaciado: [Regla]
- UI Tokens: [Border-radius, shadows]

✍️ COPY (si aplica):
- Tono: [Adjetivos]
- Keywords obligatorias: [...]
- Ejemplo redactado: "[Texto]"

✅ CHECKLIST DE APLICACIÓN:
- [ ] Usar Space Grotesk solo en títulos.
- [ ] Contraste accesible en textos.
- [ ] No usar sombras negras puras.
```

## 📝 Ejemplos

### Ejemplo 1: Consulta de botones
**Input**: `asset_type`: "visual", `context`: "Botón principal de compra"
**Output**:
```text
=== REGLAS DE ESTILO: Botón principal de compra ===

🎨 VISUAL:
- Background: Linear Gradient (90deg, #00D4FF -> #7C3AED)
- Text Color: #EAF0FF (White text primary)
- Font: Inter, Weight 600
- Radius: xl (24px)
- Shadow: sm (0 6px 18px rgba(0,0,0,.25))

✅ CHECKLIST DE APLICACIÓN:
- [ ] Usar padding horizontal amplio (24px+).
- [ ] Efecto hover: Brightness 110% o primary.hover.
- [ ] Texto en mayúsculas solo si es muy corto (< 3 palabras).
```
