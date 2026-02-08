'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    isNew?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

interface ShopContextType {
    products: Product[];
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    cartTotal: number;
    cartCount: number;
}

// Mock Data
const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Premium Cotton Tee',
        price: 45,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        category: 'apparel',
        description: 'Crafted from 100% organic cotton for ultimate breathability and softness.',
        isNew: true,
    },
    {
        id: '2',
        name: 'Minimalist Leather Sneaker',
        price: 120,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800',
        category: 'footwear',
        description: 'Hand-stitched leather sneakers designed for daily comfort and style.',
    },
    {
        id: '3',
        name: 'Classic Chronograph Watch',
        price: 250,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
        category: 'accessories',
        description: 'A timeless timepiece featuring a sapphire crystal face and genuine leather strap.',
    },
    {
        id: '4',
        name: 'Slim Fit Chino Pant',
        price: 85,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
        category: 'apparel',
        description: 'Versatile chinos with a modern slim fit, perfect for office or casual wear.',
    },
    {
        id: '5',
        name: 'Leather Weekend Bag',
        price: 320,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
        category: 'accessories',
        description: 'Spacious and durable, this leather bag is your perfect travel companion.',
        isNew: true,
    },
    {
        id: '6',
        name: 'Merino Wool Sweater',
        price: 95,
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800',
        category: 'apparel',
        description: 'Lightweight yet warm, made from extra-fine merino wool.',
    },
];

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [products] = useState<Product[]>(MOCK_PRODUCTS);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Hydrate cart from localStorage on mount
    useEffect(() => {
        setIsClient(true);
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e: unknown) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Persist cart
    useEffect(() => {
        if (isClient) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isClient]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart((prev) =>
            prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
        );
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount }}>
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
}
