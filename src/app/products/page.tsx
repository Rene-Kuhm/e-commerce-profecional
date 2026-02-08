'use client';

import { useShop } from '@/context/ShopContext';
import { ProductCard } from '@/components/products/ProductCard';
import { CategorySidebar, FilterState } from '@/components/products/CategorySidebar';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
    const { products } = useShop();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, Infinity],
        searchQuery: ''
    });

    useEffect(() => {
        const query = searchParams.get('search') || '';
        setSearchQuery(query);
        setFilters(prev => ({ ...prev, searchQuery: query }));
    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Search query filter
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());

            // Category filter - exact match now that products have specific categories
            const matchesCategory = filters.categories.length === 0 ||
                filters.categories.includes(product.category);

            // Price range filter
            const matchesPrice = product.price >= filters.priceRange[0] &&
                product.price <= filters.priceRange[1];

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [products, searchQuery, filters]);

    const removeFilter = (category: string) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.filter(c => c !== category)
        }));
    };

    const hasActiveFilters = filters.categories.length > 0 ||
        filters.priceRange[0] > 0 ||
        filters.priceRange[1] < Infinity;

    return (
        <div className="container py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="h2 mb-4">Todos los Productos</h1>
                    <p className="text-muted-foreground max-w-xl">
                        Explorá nuestra colección curada de esenciales premium.
                    </p>
                </div>

                {/* Search Input */}
                <div className="flex gap-4 w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 md:w-64 bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden mb-6 btn btn-secondary w-full flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtros {hasActiveFilters && `(${filters.categories.length})`}
            </button>

            {/* Active Filters */}
            {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap gap-2">
                    {filters.categories.map(category => (
                        <button
                            key={category}
                            onClick={() => removeFilter(category)}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm hover:bg-primary/20 transition-colors"
                        >
                            {category}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ))}
                </div>
            )}

            {/* Main Layout: Sidebar + Products */}
            <div className="flex gap-8">
                {/* Sidebar - Desktop */}
                <div className="hidden lg:block">
                    <CategorySidebar
                        activeFilters={filters}
                        onFilterChange={setFilters}
                    />
                </div>

                {/* Sidebar - Mobile Drawer */}
                {mobileFiltersOpen && (
                    <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Filtros</h2>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <CategorySidebar
                            activeFilters={filters}
                            onFilterChange={setFilters}
                        />
                        <button
                            onClick={() => setMobileFiltersOpen(false)}
                            className="btn btn-primary w-full mt-6"
                        >
                            Ver {filteredProducts.length} productos
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                <main className="flex-1">
                    <div className="mb-6 text-sm text-muted-foreground">
                        Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg mb-4">
                                No se encontraron productos
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Intentá ajustar tus filtros o búsqueda
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
