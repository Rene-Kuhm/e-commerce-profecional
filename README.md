# TECNODESPEGUE E-Commerce

> **Premium e-commerce platform** built with Next.js 19, React 19, and modern web technologies

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Premium UI/UX
- **Nike/Adidas inspired design** - Clean, modern, premium aesthetic
- **Responsive layouts** - Mobile-first design with fluid breakpoints
- **Advanced filtering** - Category sidebar with price range filters
- **Infinite brand ticker** - Animated brand showcase
- **Loading skeletons** - Shimmer effects for optimal perceived performance
- **ARIA labels** - Full accessibility support (WCAG 2.1 AA)

### 🛒 E-Commerce Core
- **Product catalog** - Dynamic product grid with categories
- **Shopping cart** - Persistent cart with localStorage
- **Smart filtering** - Real-time product filtering by category and price
- **Product details** - Individual product pages
- **Checkout flow** - Secure validation with Zod schemas

### 🔒 Production-Ready
- **Error boundaries** - Graceful error handling with fallback UI
- **TypeScript strict mode** - Full type safety
- **Performance optimizations** - React.memo, useCallback
- **Testing infrastructure** - Vitest + React Testing Library
- **Validation** - Zod schemas for form validation
- **SEO optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/e-commerce-profecional.git

# Navigate to project
cd e-commerce-profecional

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
e-commerce-profecional/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── about/             # About Us page
│   │   ├── checkout/          # Checkout flow
│   │   ├── new-arrivals/      # New products page
│   │   ├── products/          # Product listing + detail
│   │   ├── layout.tsx         # Root layout with Error Boundary
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── ErrorBoundary.tsx  # Global error handler
│   │   ├── home/              # Homepage components
│   │   ├── layout/            # Navbar, Footer, Cart
│   │   └── products/          # Product cards, filters, skeletons
│   ├── context/
│   │   └── ShopContext.tsx    # Global state (cart, products)
│   ├── schemas/
│   │   └── checkout.schema.ts # Zod validation schemas
│   ├── test/
│   │   └── setup.ts           # Vitest configuration
│   └── types/
│       └── index.ts           # TypeScript interfaces
├── vitest.config.ts           # Test configuration
└── package.json
```

## 🧪 Testing

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm test:ui

# Generate coverage report
npm test:coverage
```

**Current Coverage:** Testing infrastructure complete with ProductCard tests

## 🛠️ Tech Stack

### Core
- **Next.js 16.1** - React framework with App Router
- **React 19.2** - UI library with latest features
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **CSS Custom Properties** - Design tokens
- **CSS Layers** - Organized architecture

### State Management
- **React Context** - Global state
- **localStorage** - Cart persistence
- **useCallback/useMemo** - Performance optimizations

### Testing
- **Vitest** - Fast unit testing
- **React Testing Library** - Component testing
- **jsdom** - DOM simulation

### Validation & Security
- **Zod** - Schema validation
- **TypeScript strict mode** - Type safety
- **Error boundaries** - Runtime error handling

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm test:ui` | Open Vitest UI |
| `npm test:coverage` | Generate coverage report |

## 🎯 Key Features Breakdown

### Error Handling
- **ErrorBoundary component** wraps entire app
- Premium fallback UI matching brand
- Development mode shows detailed errors
- Production mode shows user-friendly messages

### Accessibility
- ARIA labels on interactive elements
- Semantic HTML throughout
- Keyboard navigation support
- Screen reader tested

### Performance
- React.memo on ProductCard prevents unnecessary renders
- useCallback on ShopContext methods
- Image optimization with Next.js Image
- Loading skeletons for perceived performance

### Validation
```typescript
// Checkout form validation with Zod
const checkoutSchema = z.object({
  email: z.string().email().toLowerCase(),
  firstName: z.string().min(2).max(50),
  phone: z.string().regex(/^[0-9+\-\s()]+$/),
  address: z.string().min(10).max(200),
  // ... more fields
});
```

## 🚧 Roadmap

### Phase 3 (Optional)
- [ ] Observability & logging
- [ ] JSDoc documentation
- [ ] URL state for filters (shareable links)
- [ ] Context separation (Product + Cart)
- [ ] Environment variables

### Future Enhancements
- [ ] Payment integration (Stripe/MercadoPago)
- [ ] User authentication
- [ ] Order history
- [ ] Product reviews
- [ ] Wishlist functionality

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**TECNODESPEGUE**

---

Built with ❤️ using Next.js and modern React patterns
