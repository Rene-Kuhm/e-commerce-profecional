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
        name: 'Remera Premium Essential',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        category: 'Remeras',
        description: 'Remera de algodón orgánico 100%, suave y transpirable.',
        isNew: true,
    },
    {
        id: '2',
        name: 'Zapatillas Minimalistas Cuero',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800',
        category: 'Zapatillas',
        description: 'Zapatillas de cuero cosidas a mano, diseñadas para comodidad diaria.',
    },
    {
        id: '3',
        name: 'Reloj Cronógrafo Clásico',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
        category: 'Relojes',
        description: 'Reloj atemporal con cristal de zafiro y correa de cuero genuino.',
    },
    {
        id: '4',
        name: 'Pantalón Chino Slim Fit',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
        category: 'Pantalones',
        description: 'Chinos versátiles con corte slim moderno, perfectos para oficina o casual.',
    },
    {
        id: '5',
        name: 'Bolso de Viaje Cuero',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
        category: 'Bolsos',
        description: 'Amplio y duradero, este bolso de cuero es tu compañero de viaje perfecto.',
        isNew: true,
    },
    {
        id: '6',
        name: 'Sweater Lana Merino',
        price: 95000,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
        category: 'Sweaters',
        description: 'Liviano pero abrigado, hecho de lana merino extra fina.',
    },
    {
        id: '7',
        name: 'Campera Bomber Negra',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
        category: 'Hoodies',
        description: 'Bomber clásica con forro satinado y detalles premium.',
        isNew: true,
    },
    {
        id: '8',
        name: 'Gafas de Sol Polarizadas',
        price: 75000,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
        category: 'Gafas',
        description: 'Lentes polarizadas con protección UV400 y marco de acetato.',
    },
    {
        id: '9',
        name: 'Mochila Urbana Minimalista',
        price: 95000,
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
        category: 'Bolsos',
        description: 'Mochila resistente al agua con compartimento para laptop.',
    },
    {
        id: '10',
        name: 'Jean Slim Dark Wash',
        price: 70000,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
        category: 'Pantalones',
        description: 'Jeans de denim premium con corte slim y lavado oscuro.',
    },
    {
        id: '11',
        name: 'Billetera Cuero Minimalista',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
        category: 'Billeteras',
        description: 'Billetera compacta de cuero genuino con espacio para 8 tarjetas.',
    },
    {
        id: '12',
        name: 'Hoodie Premium Oversize',
        price: 80000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
        category: 'Hoodies',
        description: 'Hoodie de algodón francés con corte oversize y capucha reforzada.',
    },
    {
        id: '13',
        name: 'Botas Chelsea Cuero',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800',
        category: 'Botas',
        description: 'Botas Chelsea de cuero pulido con suela de goma flexible.',
        isNew: true,
    },
    {
        id: '14',
        name: 'Cinturón Cuero Italiano',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800&id=belt',
        category: 'Cinturones',
        description: 'Cinturón de cuero italiano con hebilla de acero inoxidable.',
    },
    {
        id: '15',
        name: 'Camisa Oxford Blanca',
        price: 65000,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
        category: 'Camisas',
        description: 'Camisa de algodón Oxford con corte regular y botones nácar.',
    },
    {
        id: '16',
        name: 'Gorro Beanie Lana',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800&id=beanie',
        category: 'Gorros',
        description: 'Gorro de lana merino con logo bordado discreto.',
    },
    {
        id: '17',
        name: 'Joggers Premium',
        price: 70000,
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800',
        category: 'Joggers',
        description: 'Joggers de algodón con cintura elástica y bolsillos laterales.',
    },
    {
        id: '18',
        name: 'Pulsera Cuero Trenzado',
        price: 30000,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        category: 'Pulseras',
        description: 'Pulsera artesanal de cuero trenzado con cierre magnético.',
    },
    {
        id: '19',
        name: 'Zapatillas Running Tech',
        price: 130000,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        category: 'Zapatillas',
        description: 'Zapatillas técnicas con tecnología de amortiguación avanzada.',
        isNew: true,
    },
    {
        id: '20',
        name: 'Bufanda Cachemira',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800',
        category: 'Bufandas',
        description: 'Bufanda de cachemira 100% suave y abrigada.',
    },
    {
        id: '21',
        name: 'Polo Piqué Premium',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
        category: 'Polos',
        description: 'Polo de algodón piqué con cuello y puños acanalados.',
    },
    {
        id: '22',
        name: 'Sandalias Cuero Premium',
        price: 90000,
        image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800',
        category: 'Sandalias',
        description: 'Sandalias de cuero con suela de corcho natural.',
    },
    {
        id: '23',
        name: 'Neceser Viaje Impermeable',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800&id=bag',
        category: 'Neceseres',
        description: 'Neceser compacto e impermeable con múltiples compartimentos.',
    },
    {
        id: '24',
        name: 'Blazer Slim Marino',
        price: 195000,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
        category: 'Blazers',
        description: 'Blazer de lana con corte slim y forro de satén.',
        isNew: true,
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
