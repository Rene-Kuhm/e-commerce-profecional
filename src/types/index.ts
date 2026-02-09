export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    isNew?: boolean;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface FilterState {
    categories: string[];
    priceRange: [number, number];
}
