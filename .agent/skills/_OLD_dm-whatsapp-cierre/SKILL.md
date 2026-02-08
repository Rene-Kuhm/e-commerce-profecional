---
name: dm-whatsapp-cierre
description: Provee scripts de DM y WhatsApp para calificar, enviar propuesta corta y cerrar clientes de TecnoDespegue.
version: 1.0.0
compatible_with: antigravity
---

# DM WhatsApp Cierre

## 🎯 Propósito
Estandarizar y optimizar la comunicación directa con leads. Convierte interesados (DM) en prospectos calificados (WhatsApp) y cierra ventas mediante guiones probados, manejo de objeciones y propuestas ágiles.

## 🕒 Cuándo usar este skill (Triggers)
- Cuando el usuario pide "scripts de venta", "responder mensajes", "cómo cerrar", "manejo de objeciones" o "seguimiento".
- Cuando llega un mensaje directo (DM) o consulta a través de redes sociales.
- Para calificar un lead antes de pasar presupuesto.

## 📥 Inputs Requeridos

| Nombre | Tipo | Ejemplo | Validación | Descripción |
|---|---|---|---|---|
| `keyword` | enum | `WEB` | `WEB, TIENDA, SISTEMA, RUBRO, PRECIO, URGENTE` | Palabra clave identificada en la consulta. |
| `plataforma_origen` | enum | `instagram` | `instagram, tiktok, facebook, desconocido` | De dónde viene el lead. |
| `oferta` | enum | `web_landing` | `web_landing, ecommerce, apps_sistemas, mixto` | Qué le interesa comprar. |
| `idioma` | string | `es-AR` | `default: es-AR` | Idioma de la respuesta. |

## 📥 Inputs Opcionales

| Nombre | Tipo | Ejemplo | Default | Descripción |
|---|---|---|---|---|
| `urgencia` | bool | `true` | `false` | Si el cliente manifiesta prisa. |
| `presupuesto_mencionado` | bool | `true` | `false` | Si ya dijo cuánto quiere gastar. |
| `plazo_mencionado` | bool | `false` | `false` | Si especificó deadline. |
| `info_previa` | string | "Ya tiene logo" | `""` | Datos adicionales conocidos. |
| `estado_lead` | enum | `nuevo` | `nuevo, calificado, propuesta_enviada, cerrado, perdido` | Estado actual en el funnel. |

## 🔄 Workflow

### 1. Planificación
1.  **Diagnóstico de Estado**: Determinar si es un lead nuevo (DM -> WhatsApp) o en seguimiento (WhatsApp -> Cierre).
2.  **Selección de Script**: Elegir el guion de `recursos/scripts-dm.md` o `recursos/scripts-whatsapp.md` según `keyword` y `plataforma_origen`.

### 2. Validación
1.  **Check de Enlace**: Verificar que todo mensaje de salida hacia WhatsApp incluya `https://tecnodespegue.com/whatsapp` (WHATSAPP_LINK).
2.  **Check de Tag**: Asegurar que el primer mensaje en WhatsApp tenga el tag `[PLATAFORMA]`.
3.  **Check de Calificación**: Confirmar que no se envíe precio sin antes hacer las 5 preguntas (`calificacion-5q.md`).

### 3. Ejecución
1.  **Generar Respuestas**: Construir los mensajes exactos para copiar y pegar.
2.  **Manejo de Objeciones**: Si `estado_lead` es 'propuesta_enviada' y hay objeción, buscar respuesta en `recursos/objeciones.md`.
3.  **Definir Próximo Paso**: Indicar claramente la acción siguiente (ej: "Esperar 24h").

## 🚫 No hacer (Anti-patrones)
-   **No** enviar testamentos de texto por DM (máx 2 líneas).
-   **No** pasar precios "a ojo" sin calificar mínimamente (riesgo de perder dinero o cliente).
-   **No** spamear a quien no responde (respetar la regla de 24h/72h/7d).
-   **No** prometer resultados mágicos ("Vendés seguro").

## 🛠️ Manejo de errores y correcciones
-   **Error**: `keyword` no reconocida.
    -   *Corrección*: Asumir `RUBRO` y usar script de diagnóstico general.
-   **Error**: `plataforma_origen` desconocida.
    -   *Corrección*: Usar tag `[??]` o preguntar "¿Por dónde nos viste?".
-   **Error**: Lead pide precio insistentemente ("PRECIO").
    -   *Corrección*: Usar flujo `PRECIO` en scripts-dm (rango amplio + invitación a calificar).

## 🔒 Seguridad
-   **Sin Falsas Promesas**: Scripts enfocados en el servicio y entregables, no en el resultado comercial del cliente.
-   **Privacidad**: No pedir datos de tarjeta ni claves por chat.

## 📦 Output Exacto

```text
=== GESTIÓN DE LEAD: [KEYWORD] ([ORIGEN]) ===

💬 RESPUESTA DM (Copiar y Pegar):
1. Principal: "[Script seleccionado]"
2. Variante Corta: "[Variante]"
3. Variante Urgente: "[Variante]"

🚀 PASO A WHATSAPP:
- Mensaje Puente: "Te paso el link... 👉 https://tecnodespegue.com/whatsapp"

📋 CALIFICACIÓN 5Q (Para WhatsApp):
1. Objetivo: ...
2. Oferta: ...
3. Plazo: ...
4. Contenido: ...
5. Contacto: ...

🛡️ MANEJO DE OBJECIONES (Top 3 Probables):
1. Precio -> "[Respuesta]"
2. Tiempo -> "[Respuesta]"
3. Competencia -> "[Respuesta]"

⏰ SEGUIMIENTO RECOMENDADO:
- 24h: "[Script]"
- 72h: "[Script]"
- 7d: "[Script]"

📝 PLANTILLA PROPUESTA 1P:
(Ver archivo recursos/propuesta-1p-template.md)

📊 ESTADO ACTUAL: [ESTADO]
⏭️ SIGUIENTE PASO: [ACCIÓN]
```

## 📝 Ejemplos

### Ejemplo 1: Consulta Web en Instagram
**Input**: `keyword`: "WEB", `plataforma_origen`: "instagram", `estado`: "nuevo".
**Output**:
```text
=== GESTIÓN DE LEAD: WEB (INSTAGRAM) ===

💬 RESPUESTA DM:
1. Principal: "Hola! 👋 Si querés mejorar tu web, escribime acá: https://tecnodespegue.com/whatsapp"
2. Puente: "Te paso el link y te hago 3 preguntas clave 👉 https://tecnodespegue.com/whatsapp"

📋 CALIFICACIÓN 5Q:
1. Obj: ¿Qué querés lograr hoy con la web?
...

📊 ESTADO ACTUAL: nuevo
⏭️ SIGUIENTE PASO: Enviar DM y esperar click.
```

## 🚦 Router Rules
- Si pide "crear oferta/lead magnet" -> Ir a `ofertas-y-embudo`.
- Si el lead ya es cliente cerrado -> Ir a `planificacion-pro`.
