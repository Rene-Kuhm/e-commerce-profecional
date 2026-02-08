'use client';

import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { useState } from 'react';
import { CartDrawer } from '@/components/cart/CartDrawer';

export function Navbar() {
    const { cartCount } = useShop();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-md">
                <div className="container h-[var(--header-height)] flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-xl font-bold tracking-tight">
                            LUXE<span className="text-[var(--color-accent)]">.</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
                            <Link href="/products" className="hover:text-[var(--color-text-primary)] transition-colors">
                                Collection
                            </Link>
                            <Link href="/new-arrivals" className="hover:text-[var(--color-text-primary)] transition-colors">
                                New Arrivals
                            </Link>
                            <Link href="/about" className="hover:text-[var(--color-text-primary)] transition-colors">
                                Our Story
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                            {/* Search Icon Placeholder */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative"
                        >
                            {/* Cart Icon Placeholder */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-black animate-fade-in">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
