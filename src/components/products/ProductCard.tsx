'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useShop, Product } from '@/context/ShopContext';

export function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useShop();

    return (
        <div className="card group flex flex-col h-full relative border-border/50">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted/30">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 rounded-[var(--radius-sm)] shadow-sm">
                        Nuevo
                    </span>
                )}

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black/50 to-transparent">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full btn btn-primary text-sm shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                    >
                        Agregar al Carrito
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
        </div >
    );
}
