# LUXE E-commerce Professional

A premium e-commerce application built with Next.js 14, TypeScript, and a custom variable-based CSS design system.

## Features

- **Store Architecture**: Next.js App Router with Server Components.
- **State Management**: React Context (`ShopContext`) with local storage persistence.
- **Styling**: Vanilla CSS Modules / Global CSS Variables for theming (Dark Mode support included).
- **Core Flows**:
    - Product Listing & Filtering
    - Product Detail Pages
    - Add to Cart with Slide-over Drawer
    - Checkout Flow (Mockup)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: UI components (clean separation of concerns).
- `src/context`: Global state logic.
- `src/styles`: (merged into globals.css for simplicity).

## Deployment

Since the repository is ready, simply push the changes to GitHub:

```bash
git add .
git commit -m "feat: Complete e-commerce implementation"
git push origin main
```

Then connect your repository to Vercel for instant deployment.
