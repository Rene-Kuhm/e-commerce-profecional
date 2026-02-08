'use client';

import { useState, useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-bg-primary)] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
                        <h2 className="text-lg font-bold">Shopping Cart ({cart.length})</h2>
                        <button onClick={onClose} className="p-2 hover:bg-[var(--color-bg-tertiary)] rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {cart.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-[var(--color-text-secondary)] mb-4">Your cart is empty.</p>
                                <button onClick={onClose} className="btn btn-secondary">
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-24 bg-[var(--color-bg-tertiary)] rounded overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium line-clamp-1">{item.name}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)]">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-2 border border-[var(--color-border)] rounded px-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] px-1"
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] px-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-[var(--color-error)] hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className="border-t border-[var(--color-border)] p-4 bg-[var(--color-bg-secondary)]">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                                <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-[var(--color-text-secondary)] mb-4 text-center">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <Link
                                href="/checkout"
                                onClick={onClose}
                                className="btn btn-primary w-full py-3"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
