'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cart, cartTotal } = useShop();

    if (cart.length === 0) {
        return (
            <div className="container py-24 text-center">
                <h1 className="h2 mb-4">Your Cart is Empty</h1>
                <p className="mb-8 text-[var(--color-text-secondary)]">Add some items to your cart to proceed with checkout.</p>
                <Link href="/products" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <h1 className="h2 mb-12">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <input type="email" placeholder="Email address" className="w-full border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="newsletter" />
                                <label htmlFor="newsletter" className="text-sm text-[var(--color-text-secondary)]">Email me with news and offers</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="w-full border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <input type="text" placeholder="Last Name" className="w-full border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <input type="text" placeholder="Address" className="w-full md:col-span-2 border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <input type="text" placeholder="Apartment, suite, etc." className="w-full md:col-span-2 border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <input type="text" placeholder="City" className="w-full border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                            <input type="text" placeholder="Postal Code" className="w-full border border-[var(--color-border)] rounded p-3 bg-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-text-primary)]" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Payment</h2>
                        <div className="border border-[var(--color-border)] rounded p-4 text-center bg-[var(--color-bg-secondary)] mb-4">
                            <p className="text-sm text-[var(--color-text-secondary)]">Mock Payment Gateway</p>
                        </div>
                        <button className="btn btn-primary w-full py-4 text-lg">
                            Pay Now ${cartTotal.toFixed(2)}
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-[var(--color-bg-secondary)] p-8 rounded-lg h-fit">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center">
                                <div className="relative w-16 h-16 bg-[var(--color-bg-tertiary)] rounded overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <span className="absolute top-0 right-0 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-sm">{item.name}</h3>
                                    <p className="text-xs text-[var(--color-text-secondary)]">{item.category}</p>
                                </div>
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-[var(--color-border)] pt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                            <span className="font-medium">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[var(--color-text-secondary)]">Shipping</span>
                            <span className="font-medium">Calculated at next step</span>
                        </div>
                    </div>
                    <div className="border-t border-[var(--color-border)] pt-4 mt-4 flex justify-between items-center">
                        <span className="font-bold text-lg">Total</span>
                        <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
