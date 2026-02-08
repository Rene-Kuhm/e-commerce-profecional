import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-[var(--color-bg-secondary)] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black"></div>

        {/* Abstract Background Element (placeholder for high-res image) */}
        <div className="absolute inset-0 z-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>

        <div className="container relative z-10 text-center animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6">
            New Collection 2024
          </span>
          <h1 className="h1 mb-6 max-w-4xl mx-auto">
            Redefine Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-text-tertiary)]">Everyday Luxury</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Discover a curated selection of premium essentials designed to elevate your lifestyle.
            Meticulously crafted, timelessly designed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn btn-primary text-lg px-8">
              Shop Collection
            </Link>
            <Link href="/about" className="btn btn-secondary text-lg px-8">
              Explore Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container">
        <div className="flex justify-between items-end mb-8">
          <h2 className="h2">Curated Categories</h2>
          <Link href="/products" className="text-sm font-medium border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-text-secondary)] transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Apparel', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800', count: '124 Items' },
            { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800', count: '48 Items' },
            { name: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800', count: '76 Items' },
          ].map((category) => (
            <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`} className="group relative h-[400px] overflow-hidden rounded-lg">
              {/* Use Next.js Image for production, simplified here with unoptimized for external URLs without config */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                {/* <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                /> */}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Now / Best Sellers */}
      <section className="container">
        <h2 className="h2 mb-8 text-center">Trending Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mock Products */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card group">
              <div className="relative aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-tertiary)]">
                  Item {i + 1} Image
                </div>
                {/* Badge */}
                {i === 0 && (
                  <span className="absolute top-3 left-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 group-hover:text-[var(--color-primary)] transition-colors">Premium Essential Tee</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-3">Organic Cotton Blend</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$45.00</span>
                  <button className="text-xs font-bold uppercase border-b border-transparent hover:border-current transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values / Trust Signals */}
      <section className="bg-[var(--color-bg-secondary)] py-20 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="bg-[var(--color-bg-primary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Premium Quality</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Sourced from the finest materials to ensure lasting durability and comfort.
              </p>
            </div>
            <div>
              <div className="bg-[var(--color-bg-primary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Sustainable Sourcing</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Committed to ethical production and minimizing our environmental footprint.
              </p>
            </div>
            <div>
              <div className="bg-[var(--color-bg-primary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Secure Payment</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Your data is protected with state-of-the-art encryption standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
