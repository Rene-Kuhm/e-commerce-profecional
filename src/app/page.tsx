import Link from "next/link";
import Image from "next/image";
import { BrandTicker } from '@/components/home/BrandTicker';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Video Background - Premium Lifestyle Style */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920"
          >
            {/* Video local de /public */}
            <source src="/mixkit-woman-modeling-a-short-black-dress-805-hd-ready.mp4" type="video/mp4" />
          </video>
          {/* Premium Dark Overlay with Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-background/70 via-background/80 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80"></div>
          <div className="absolute inset-0 bg-grid opacity-5"></div>
        </div>

        {/* Subtle Accent Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/8 blur-[90px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/8 blur-[80px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10 text-center animate-fade-in">
          <span className="inline-block py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            Nueva Colección 2024
          </span>
          <h1 className="h1 mb-8 max-w-5xl mx-auto leading-tight">
            Transformá tu estilo con <br />
            <span className="text-gradient">Tecnología y Diseño Premium</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubrí una selección curada de esenciales que elevan tu día a día.
            Calidad, estética y funcionalidad en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products" className="btn btn-primary text-lg">
              Ver Colección
            </Link>
            <Link href="/about" className="btn btn-secondary text-lg">
              Nuestra Historia
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Ticker */}
      <BrandTicker />

      {/* Featured Categories */}
      <section className="container">
        <div className="flex justify-between items-end mb-12">
          <h2 className="h2 text-gradient">Categorías Destacadas</h2>
          <Link href="/products" className="text-sm font-bold text-primary hover:text-primary-hover transition-colors uppercase tracking-wider">
            Ver Todo &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', count: '124 Items' },
            { name: 'Accesorios', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800', count: '48 Items' },
            { name: 'Calzado', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800', count: '76 Items' },
          ].map((category) => (
            <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`} className="group relative h-[400px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-muted/20">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
        <h2 className="h2 mb-8 text-center">Indispensables del Momento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mock Products */}
          {Array.from({ length: 4 }).map((_, i) => {
            const productImages = [
              'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
            ];

            return (
              <div key={i} className="card group">
                <div className="relative aspect-[3/4] bg-muted/30 overflow-hidden">
                  <Image
                    src={productImages[i]}
                    alt={`Remera Premium Essential ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge */}
                  {i === 0 && (
                    <span className="absolute top-3 left-3 bg-foreground text-background text-xs font-bold px-2 py-1 uppercase tracking-wider z-10">
                      Más Vendido
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">Remera Premium Essential</h3>
                  <p className="text-muted-foreground text-sm mb-3">Algodón Orgánico</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$45.000</span>
                    <Link href="/products" className="text-xs font-bold uppercase border-b border-transparent hover:border-current transition-all">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Brand Values / Trust Signals */}
      <section className="py-24 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--linear-surface)] opacity-10 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-glow text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
              <h3 className="h3 mb-3">Calidad Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Productos seleccionados bajo los estándares más exigentes. Durabilidad y diseño en cada detalle.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-secondary transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-glow text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4" /><path d="M12 16V8" /></svg>
              </div>
              <h3 className="h3 mb-3">Envío Rápido</h3>
              <p className="text-muted-foreground leading-relaxed">
                Llegamos a todo el país. Recibí tu pedido en tiempo récord y con seguimiento en real.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-glow text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
              </div>
              <h3 className="h3 mb-3">Compra Segura</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tu seguridad es nuestra prioridad. Pagá con confianza a través de plataformas encriptadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
