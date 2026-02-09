# SEO & Production Assets Guide

## 📋 Archivos Creados

### 1. **robots.ts** ✅
Configura qué pueden indexar los motores de búsqueda.

**Ubicación:** `src/app/robots.ts`

**Genera:** `/robots.txt` automáticamente

### 2. **sitemap.ts** ✅
Mapa del sitio para mejor indexación SEO.

**Ubicación:** `src/app/sitemap.ts`

**Genera:** `/sitemap.xml` automáticamente

**Páginas incluidas:**
- `/` (Homepage)
- `/products` (Catálogo)
- `/new-arrivals` (Novedades)
- `/about` (Nosotros)
- `/checkout` (Checkout)

### 3. **manifest.ts** ✅
Configuración PWA (Progressive Web App).

**Ubicación:** `src/app/manifest.ts`

**Genera:** `/manifest.json` automáticamente

### 4. **Metadata SEO** ✅
Metadata completa en `layout.tsx` con:
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Keywords y descripción
- Verificación de buscadores

---

## 🎨 Favicons e Íconos Faltantes

Necesitás crear estas imágenes (puedo generarlas si querés):

### Favicons Básicos
- `src/app/favicon.ico` - ✅ Ya existe
- `public/icon-16.png` - 16x16px
- `public/icon-32.png` - 32x32px

### Íconos Apple
- `public/apple-icon.png` - 180x180px
- `public/apple-icon-180.png` - 180x180px

### Íconos PWA
- `public/icon-192.png` - 192x192px
- `public/icon-512.png` - 512x512px
- `public/icon-192-maskable.png` - 192x192px (con safe zone)
- `public/icon-512-maskable.png` - 512x512px (con safe zone)

### Open Graph Images
- `public/og-image.png` - 1200x630px (Facebook/LinkedIn)
- `public/twitter-image.png` - 1200x600px (Twitter)

### Screenshots PWA
- `public/screenshot-wide.png` - 1280x720px
- `public/screenshot-narrow.png` - 750x1334px

---

## 🔧 Configuración Pendiente

### 1. Cambiar el Dominio
En los siguientes archivos, cambiar `https://tecnodespegue.com` por tu dominio real:

- `src/app/robots.ts` (línea 4)
- `src/app/sitemap.ts` (línea 4)
- `src/app/layout.tsx` (línea 20)

### 2. Verificación de Buscadores (Opcional)
En `src/app/layout.tsx`, descomentar y agregar códigos de verificación:

```typescript
verification: {
  google: 'tu-codigo-google',
  yandex: 'tu-codigo-yandex',
}
```

### 3. Twitter Handle
En `src/app/layout.tsx`, cambiar `@tecnodespegue` por tu cuenta de Twitter.

---

## 🚀 Comandos para Verificar

```bash
# Verificar que se generan correctamente
npm run build

# Verificar archivos generados en .next/
- .next/robots.txt
- .next/sitemap.xml
- .next/manifest.json
```

**En producción, accedé a:**
- `https://tudominio.com/robots.txt`
- `https://tudominio.com/sitemap.xml`
- `https://tudominio.com/manifest.json`

---

## 📊 Próximos Pasos

1. **Generar íconos** - ¿Querés que los genere con tu marca?
2. **Configurar dominio** - Cambiar URLs en archivos
3. **Testing SEO** - Probar con herramientas como:
   - Google Search Console
   - PageSpeed Insights
   - Twitter Card Validator
   - Facebook Sharing Debugger

---

**Estado:** Configuración base completa ✅  
**Falta:** Generar imágenes de íconos y OG
