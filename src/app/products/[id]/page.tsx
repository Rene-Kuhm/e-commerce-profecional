'use client';

import { useParams } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
    const params = useParams();
    const { products, addToCart } = useShop();

    // In a real app, you'd fetch by ID. Here we find in the static array.
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return (
            <div className="container py-24 text-center">
                <h1 className="h2 mb-4">Product Not Found</h1>
                <p className="mb-8">The product you are looking for does not exist.</p>
                <Link href="/products" className="btn btn-primary">
                    Back to Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Gallery Section */}
                <div className="space-y-4">
                    <div className="relative aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden rounded-lg">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Mock Thumbnails */}
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="relative aspect-square bg-[var(--color-bg-tertiary)] rounded cursor-pointer ring-1 ring-transparent hover:ring-[var(--color-text-primary)] transition-all">
                                {/* Thumbnail placeholder */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div>
                    <div className="mb-6">
                        <Link href="/products" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
                            &larr; Back to Collection
                        </Link>
                    </div>

                    <h1 className="h2 mb-4">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                        <span className="bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-xs font-bold px-2 py-1 uppercase tracking-wider rounded">
                            In Stock
                        </span>
                    </div>

                    <div className="prose text-[var(--color-text-secondary)] mb-8 max-w-lg">
                        <p>{product.description}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    {/* Variants Selector Mock */}
                    <div className="mb-8">
                        <span className="block text-sm font-bold mb-2">Size</span>
                        <div className="flex gap-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <button key={size} className="w-10 h-10 border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-text-primary)] transition-colors">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 mb-12">
                        <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary flex-1 py-4 text-lg"
                        >
                            Add to Cart
                        </button>
                        <button className="btn btn-secondary p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 4.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        </button>
                    </div>

                    <div className="border-t border-[var(--color-border)] pt-8 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            <span>Free shipping on all global orders</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                            <span>30-day return policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
