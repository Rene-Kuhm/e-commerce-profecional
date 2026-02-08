---
name: ofertas-y-embudo
description: Define ofertas empaquetadas, lead magnets y embudo DM→WhatsApp para convertir contenido en clientes.
version: 1.0.0
compatible_with: antigravity
---

# Ofertas y Embudo

## 🎯 Propósito
Estructurar y estandarizar la oferta comercial de TecnoDespegue, facilitando la conversión de tráfico social en leads calificados mediante lead magnets atractivos y un embudo claro hacia WhatsApp.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "armar una oferta", "qué vender", "cómo captar leads" o "embudo de ventas".
- Al planificar contenido para redes sociales (necesita un CTA claro).
- Cuando hay dudas sobre precios o alcances de servicios.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `objetivo` | string | "leads por WhatsApp" | `length > 5` | Qué se busca lograr con la oferta. |
| `oferta` | enum | `web_landing` | `web_landing, ecommerce, apps_sistemas, mixto` | Tipo de servicio principal a vender. |
| `audiencia` | enum | `pymes` | `pymes, profesionales, comercios, emprendedores, todos` | Público objetivo. |
| `plataforma` | enum | `instagram` | `instagram, tiktok, facebook, multi` | Red social principal. |
| `CTA_objetivo` | enum | `dm` | `dm, whatsapp, comentario` | Acción deseada del usuario. |
| `idioma` | string | `es-AR` | `default: es-AR` | Idioma de la comunicación. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `incluir_mantenimiento` | bool | `true` | `true` | Si se ofrece soporte post-venta. |
| `nivel_detalle` | enum | `pro` | `agencia` | Nivel de profundidad del output. |
| `restricciones` | string | "Solo CABA" | `""` | Limitaciones geográficas o técnicas. |
| `plazos_preferidos` | string | "Rápido" | `"rango"` | Preferencia de tiempos. |
| `notas` | string | "Enfocarse en diseño" | `""` | Comentarios extra. |

## 🔄 Workflow

### 1. Planificación
1.  **Cargar Estilo**: Importar tono y voz desde `estilo-marca` (si disponible).
2.  **Selección de Paquetes**: Filtrar `recursos/paquetes.json` según `oferta` y `audiencia`.
3.  **Estrategia de Captación**: Elegir Lead Magnets de `recursos/lead-magnets.md` que resuelvan problemas de la audiencia seleccionada.

### 2. Validación
1.  **Guardrails**: Verificar que no se prometan resultados garantizados ("Ventas x 10") ni tiempos irreales.
2.  **Coherencia**: Asegurar que el CTA (`dm`, `whatsapp`) coincida con la plataforma (ej: TikTok prefiere link en bio o comentario).

### 3. Ejecución
1.  **Construir Mensajes**: Redactar textos para Bio y CTAs usando `recursos/ctas-por-objetivo.json`.
2.  **Definir Embudo**: Trazar el camino del usuario (Video -> DM -> WhatsApp -> Cierre) según `recursos/embudo.md`.
3.  **Generar Output**: Ensamblar todo en el formato exacto requerido.

## 🚫 No hacer (Anti-patrones)
-   **No** usar palabras como "garantizado", "explosión de ventas", "hack secreto".
-   **No** pedir una llamada o reunión como primer paso (fricción alta).
-   **No** ofrecer "presupuesto sin cargo" como único gancho (es débil).
-   **No** mezclar peras con manzanas (ej: ofrecer e-commerce a un abogado).

## 🛠️ Manejo de errores y correcciones
-   **Error**: Falta tipo de oferta.
    -   *Corrección*: Asumir `mixto` y usar keyword "RUBRO" para que el cliente se autocalifique.
-   **Error**: Plataforma no especificada.
    -   *Corrección*: Asumir `multi` y dar opciones para todas.
-   **Error**: Audiencia no definida.
    -   *Corrección*: Asumir `todos` (generlaista).

## 🔒 Seguridad
-   **Sin Promesas Falsas**: Todo claim debe ser verificable (ej: "Entregamos en 5 días" es verificable; "Vas a vender más" no lo es).
-   **Privacidad**: No pedir datos sensibles en el primer contacto.

## 📦 Output Exacto

```text
=== ESTRATEGIA DE OFERTA: [OFERTA] ===

📦 PAQUETES RECOMENDADOS:
1. [Nombre Paquete]
   - Ideal para: [Audiencia]
   - Incluye: [3 highlights]
   - Tiempo: [Rango]
2. ...

🛡️ GUARDRAILS (Qué NO prometer):
- "Resultados garantizados en 24h".
- "Diseño premiado internacionalmente" (si no es real).
- "Ventas automáticas sin hacer nada".

📣 CTA PRINCIPAL (+ Variantes):
- Opción 1 (Directa): "[Texto CTA]"
- Opción 2 (Suave): "[Texto CTA]"
- Trigger Keyword: "[KEYWORD]"

🧲 LEAD MAGNETS SUGERIDOS:
1. [Nombre LM] -> Hook: "[Hook]"
2. [Nombre LM] -> Hook: "[Hook]"

🌪️ EMBUDO DE VENTAS:
1. Tráfico: [Plataforma] (Reels/TikTok)
2. Captura: DM con keyword '[KEYWORD]'
3. Puente: Link a WhatsApp (https://tecnodespegue.com/whatsapp)
4. Conversión: Diagnóstico -> Propuesta

🔗 MENSAJES PARA BIO / PERFIL:
- [IG]: "[Texto Bio IG] 👇 https://tecnodespegue.com/whatsapp"
- [TT]: "[Texto Bio TT] 👇 https://tecnodespegue.com/whatsapp"
- [FB]: "[Texto Bio FB] 👇 https://tecnodespegue.com/whatsapp"

🔑 KEYWORDS DE SEGUIMIENTO:
- Oferta Principal: [KEYWORD]
- Consulta Precio: PRECIO
- Urgencia: URGENTE

⏭️ SIGUIENTE PASO:
- Usar 'reels-capcut-pro' para crear contenido con guiones basados en estos Lead Magnets.
- Usar 'contenido-social-pro' para armar el calendario mensual.
```

## 📝 Ejemplos

### Ejemplo 1: Venta de Webs para Abogados
**Input**: `objetivo`: "leads WhatsApp", `oferta`: "web_landing", `audiencia`: "profesionales", `plataforma`: "instagram".
**Output**:
```text
=== ESTRATEGIA DE OFERTA: Web Landing ===

📦 PAQUETES RECOMENDADOS:
1. Web Landing Express
   - Ideal para: Abogados que necesitan presencia ya.
   - Incluye: One-page, WhatsApp directo, Hosting 1 año.
   - Tiempo: 3-5 días.

🛡️ GUARDRAILS:
- No prometer "primera página de Google en 1 semana".

📣 CTA PRINCIPAL:
- Directa: "Comentá 'WEB' y te paso el plan para abogados."
- Trigger Keyword: "WEB"

🧲 LEAD MAGNETS:
1. Auditoría Express -> Hook: "Mandame tu web actual y te digo 3 errores."

🌪️ EMBUDO:
1. Reels (Tips legales) -> 2. DM 'WEB' -> 3. WhatsApp -> 4. Propuesta Express.

🔗 BIO IG:
"Webs para Abogados en 5 días. ⚖️
Escribime acá 👇
https://tecnodespegue.com/whatsapp"

🔑 KEYWORDS: WEB, PRECIO.

⏭️ SIGUIENTE PASO: Ir a 'reels-capcut-pro'.
```

### Ejemplo 2: E-commerce General
**Input**: `objetivo`: "ventas tienda", `oferta`: "ecommerce", `plataforma`: "multi".
**Output**: ... (similiar estructura)

## 🚦 Router Rules
- Si pide "scripts de venta" o "cerrar cliente" -> Ir a `dm-whatsapp-cierre`.
- Si pide "ideas de videos" -> Ir a `reels-capcut-pro`.
