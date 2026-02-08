'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useShop, Product } from '@/context/ShopContext';

export function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useShop();

    return (
        <div className="card group flex flex-col h-full bg-[var(--color-bg-primary)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-tertiary)]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs font-bold px-2 py-1 uppercase tracking-wider z-10">
                        New Arrival
                    </span>
                )}

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black/50 to-transparent">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full btn btn-accent text-sm py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <Link href={`/products/${product.id}`} className="block">
                    <h3 className="text-base font-medium mb-1 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3 capitalize">{product.category}</p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
