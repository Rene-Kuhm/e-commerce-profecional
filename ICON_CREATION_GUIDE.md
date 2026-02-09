# Guía para Crear Íconos y Imágenes SEO

## 🎨 Logo TECNODESPEGUE

**Colores de marca:**
- Indigo principal: `#6366f1`
- Indigo claro: `#818cf8`
- Negro: `#000000`

## 📱 1. Favicons (Básicos)

### Opción A: Favicon Generator Online
Usar: https://realfavicongenerator.net/

1. Subir tu logo en alta resolución (PNG, al menos 512x512)
2. Customizar para cada plataforma
3. Descargar el paquete completo

### Opción B: Crear Manualmente

#### `public/icon-16.png` (16x16px)
- Fondo negro #000000
- Logo TECNODESPEGUE en indigo #6366f1
- Muy simple (solo "T" o símbolo mínimo)

#### `public/icon-32.png` (32x32px)
- Fondo negro #000000
- Logo TECNODESPEGUE en indigo #6366f1
- Simple pero reconocible

---

## 🍎 2. Íconos Apple

### `public/apple-icon.png` (180x180px)
- Fondo negro sólido
- Logo centrado en indigo
- Safe zone de 20px en los bordes

### `public/apple-icon-180.png` (180x180px)
- Igual al anterior (duplicado para compatibilidad)

---

## 📲 3. Íconos PWA

### `public/icon-192.png` (192x192px)
- Fondo negro #000000
- Logo TECNODESPEGUE con gradiente indigo
- Safe zone de 20px

### `public/icon-512.png` (512x512px)
- Alta resolución
- Fondo negro #000000
- Logo TECNODESPEGUE con gradiente indigo (#6366f1 → #818cf8)
- Safe zone de 40px en los bordes

### Maskable Icons (con safe zone amplio)

#### `public/icon-192-maskable.png` (192x192px)
- Safe zone de 48px (25% en cada lado)
- Logo más pequeño y centrado
- Cualquier forma se ve bien (círculo, cuadrado, etc.)

#### `public/icon-512-maskable.png` (512x512px)
- Safe zone de 128px (25% en cada lado)
- Logo más pequeño y centrado

**Herramienta:** https://maskable.app/editor

---

## 🌐 4. Open Graph Images (Social Sharing)

### `public/og-image.png` (1200x630px)
**Para:** Facebook, LinkedIn, WhatsApp

**Diseño sugerido:**
```
┌─────────────────────────────────┐
│                                 │
│  Logo TECNODESPEGUE             │
│                                 │
│  Premium E-Commerce Platform    │
│  Curated Lifestyle Products     │
│                                 │
│  Fondo: negro degradado         │
│  Acentos: indigo #6366f1        │
└─────────────────────────────────┘
```

### `public/twitter-image.png` (1200x600px)
**Para:** Twitter/X

Similar al OG image pero con proporción 2:1

**Herramienta:** Canva (plantilla "Twitter Post")

---

## 📸 5. Screenshots PWA

### `public/screenshot-wide.png` (1280x720px)
- Captura de pantalla del sitio en desktop
- Página principal (homepage)
- Muestra productos y diseño premium

### `public/screenshot-narrow.png` (750x1334px)
- Captura de pantalla en móvil
- Página de productos o checkout
- Muestra cart y filtros

**Herramienta:** 
- Desktop: F12 → Device Mode → Screenshot
- Mobile: Emulador de Chrome

---

## 🛠️ Herramientas Recomendadas

### Para Logos e Íconos
1. **Figma** (gratis) - https://figma.com
2. **Canva** - https://canva.com
3. **GIMP** (gratis) - https://gimp.org

### Para Favicon Completo
1. **RealFaviconGenerator** - https://realfavicongenerator.net/
2. **Favicon.io** - https://favicon.io/

### Para Maskable Icons
1. **Maskable.app** - https://maskable.app/editor

### Para OG Images
1. **Canva** - Templates "Facebook Post" (1200x630)
2. **Figma** - Custom canvas

---

## ✅ Checklist de Archivos

```
public/
├── favicon.ico ✅ (ya existe en src/app)
├── icon-16.png ⏳
├── icon-32.png ⏳
├── apple-icon.png ⏳
├── apple-icon-180.png ⏳
├── icon-192.png ⏳
├── icon-512.png ⏳
├── icon-192-maskable.png ⏳
├── icon-512-maskable.png ⏳
├── og-image.png ⏳
├── twitter-image.png ⏳
├── screenshot-wide.png ⏳
└── screenshot-narrow.png ⏳
```

---

## 🎯 Plantilla Rápida (Figma/Canva)

### Para Íconos Cuadrados
1. Crear canvas 512x512px
2. Fondo negro #000000
3. Texto "TECNODESPEGUE" con gradiente:
   - Color 1: #6366f1
   - Color 2: #818cf8
   - Dirección: Diagonal
4. Font: Inter Bold o similar
5. Exportar en todos los tamaños necesarios

### Para OG Image
1. Canvas 1200x630px
2. Fondo: Negro con gradiente sutil
3. Logo arriba
4. Título: "TECNODESPEGUE"
5. Subtítulo: "Premium E-Commerce Platform"
6. Decoración: Líneas o formas en indigo

---

## 🚀 Después de Crear los Archivos

1. Colocar todos en la carpeta `public/`
2. Verificar build:
   ```bash
   npm run build
   ```
3. Verificar en navegador:
   - `/icon-192.png`
   - `/og-image.png`
   - etc.

4. Testear SEO:
   - **Facebook:** https://developers.facebook.com/tools/debug/
   - **Twitter:** https://cards-dev.twitter.com/validator
   - **LinkedIn:** https://www.linkedin.com/post-inspector/

---

**Necesitás ayuda con algún paso específico?**
