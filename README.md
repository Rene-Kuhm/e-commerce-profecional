# 🛍️ TecnoDespegue E-commerce

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

Aplicación e-commerce profesional construida con Next.js 15, TypeScript y Tailwind CSS. Diseño premium inspirado en marcas líderes como Nike y Adidas.

## ✨ Características Principales

### 🎨 Diseño Premium
- **Video Background Hero** - Hero dinámico con video de fondo y efectos de overlay
- **Infinite Brand Ticker** - Banner infinito mostrando marcas premium
- **Glassmorphism UI** - Efectos de cristal esmerilado y transparencias
- **Animaciones Suaves** - Transiciones y micro-interacciones fluidas
- **Dark Mode** - Tema oscuro elegante con paleta Deep Navy + Cyan + Violet

### 🛒 Funcionalidades E-commerce
- **Catálogo de Productos** - Grid responsive con 24 productos curados
- **Sistema de Filtrado** - Sidebar con categorías y rango de precios
- **Carrito de Compras** - Persistencia en localStorage
- **Checkout Flow** - Proceso de compra completo
- **Páginas de Producto** - Detalle individual de productos
- **Novedades** - Página dedicada a productos nuevos

### 🎯 UX/UI Patterns
- **Category Sidebar** - Filtros colapsables multi-selección (estilo Nike/Adidas)
- **Active Filter Chips** - Visualización de filtros activos removibles
- **Mobile-First** - Drawer de filtros en mobile, sidebar en desktop
- **Search Integration** - Búsqueda en tiempo real de productos
- **Responsive Grid** - 1→2→3→4 columnas según viewport

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **State Management:** React Context API
- **Typography:** Space Grotesk + Inter (Google Fonts)
- **Icons:** SVG inline
- **Deployment Ready:** Vercel-optimized

## 📦 Estructura del Proyecto

```
src/
├── app/
│   ├── about/              # Página Nosotros
│   ├── checkout/           # Flujo de checkout
│   ├── new-arrivals/       # Página Novedades
│   ├── products/           # Listado y detalle de productos
│   ├── globals.css         # Estilos globales y variables
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Home page
├── components/
│   ├── home/
│   │   └── BrandTicker.tsx # Banner infinito de marcas
│   ├── layout/
│   │   ├── Footer.tsx      # Footer global
│   │   ├── Navbar.tsx      # Navbar con glassmorphism
│   │   └── Providers.tsx   # Context providers
│   └── products/
│       ├── CategorySidebar.tsx  # Sidebar de filtros
│       └── ProductCard.tsx      # Card de producto
└── context/
    └── ShopContext.tsx     # Estado global de productos y carrito
```

## 🎨 Design System

### Paleta de Colores
```css
--color-deep-navy: #0a1929     /* Background principal */
--color-cyan: #00d4ff          /* Accent primario */
--color-violet: #a855f7        /* Accent secundario */
--color-muted: #64748b         /* Textos secundarios */
```

### Tipografía
- **Display/Headers:** Space Grotesk (Bold, 700)
- **Body/UI:** Inter (Regular, 400)

### Componentes
- **Cards:** Glassmorphism con `backdrop-blur`
- **Buttons:** Primary (Cyan), Secondary (Violet)
- **Inputs:** Transparent con border sutil

## 🚦 Getting Started

### Prerequisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/e-commerce-profecional.git
cd e-commerce-profecional

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

## 📱 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home page con hero, ticker de marcas y categorías |
| `/products` | Catálogo completo con sidebar de filtros |
| `/products/[id]` | Detalle de producto individual |
| `/new-arrivals` | Productos marcados como nuevos |
| `/about` | Página institucional |
| `/checkout` | Proceso de compra |

## 🎯 Funcionalidades Destacadas

### Sistema de Filtrado
- Filtrado por categorías específicas (Remeras, Zapatillas, etc.)
- Filtrado por rango de precio
- Búsqueda en tiempo real
- Combinación de múltiples filtros
- Active filter chips removibles

### Carrito de Compras
- Agregar/remover productos
- Actualizar cantidades
- Cálculo automático de totales
- Persistencia en localStorage
- Indicador en navbar

### Video Background
- Reproducción automática en loop
- Overlay con gradientes radiales
- Optimizado para performance
- Fallback a imagen estática

## 🔧 Configuración

### Tailwind Config
El archivo `tailwind.config.ts` extiende el tema con:
- Colores personalizados del brand
- Font families (Space Grotesk, Inter)
- Animaciones custom (float, scroll)

### PostCSS
Configurado con `autoprefixer` para compatibilidad cross-browser.

## 📈 Performance

- **Bundle Size:** Optimizado con tree-shaking
- **Images:** Next.js Image optimization automática
- **Fonts:** Google Fonts con `next/font`
- **CSS:** Tailwind JIT compiler

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0 (2026-02-08)
- ✅ Diseño completo TecnoDespegue brand
- ✅ Sistema de filtrado avanzado
- ✅ Video background hero
- ✅ Infinite brand ticker
- ✅ 24 productos con categorías específicas
- ✅ Carrito funcional con persistencia
- ✅ Páginas: Home, Products, About, New Arrivals, Checkout
- ✅ Responsive design (mobile-first)

## 📄 Licencia

Este proyecto es privado y propiedad de TecnoDespegue.

## 👨‍💻 Desarrollado por

**TecnoDespegue Team**  
Con asistencia de Antigravity AI

---

**⚡ Built with passion using Next.js & Tailwind CSS**
