'use client';

import { useShop } from '@/context/ShopContext';
import { ProductCard } from '@/components/products/ProductCard';

export default function ProductsPage() {
    const { products } = useShop();

    return (
        <div className="container py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h1 className="h2 mb-4">All Products</h1>
                    <p className="text-[var(--color-text-secondary)] max-w-xl">
                        Explore our meticulously curated collection of premium essentials.
                        Each piece is designed with quality, functionality, and timeless style in mind.
                    </p>
                </div>

                {/* Filter/Sort Placeholder */}
                <div className="flex gap-4">
                    <select className="bg-transparent border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-text-primary)]">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
