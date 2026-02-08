'use client';

import { ProductCard } from '@/components/products/ProductCard';
import { useShop } from '@/context/ShopContext';

export default function NewArrivalsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full"></div>
                </div>

                <div className="container max-w-6xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-sm font-medium text-primary">Recién Llegados</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        Novedades
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Descubrí las últimas incorporaciones a nuestra colección. Tendencias frescas, diseño atemporal.
                    </p>
                </div>
            </section>

            {/* New Products Grid */}
            <NewProductsGrid />
        </div>
    );
}

function NewProductsGrid() {
    const { products } = useShop();
    const newProducts = products.filter(product => product.isNew);

    return (
        <section className="container py-16">
            <div className="mb-8">
                <h2 className="h3 mb-2">Últimos Lanzamientos</h2>
                <p className="text-muted-foreground">
                    {newProducts.length} {newProducts.length === 1 ? 'producto nuevo' : 'productos nuevos'}
                </p>
            </div>

            {newProducts.length === 0 ? (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">No hay novedades por el momento</h3>
                    <p className="text-muted-foreground mb-6">Volvé pronto para descubrir nuevos productos</p>
                    <a href="/products" className="btn btn-primary">
                        Ver toda la colección
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {newProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
}
