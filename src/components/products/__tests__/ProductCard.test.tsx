import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { Providers } from '@/components/layout/Providers';
import type { Product } from '@/context/ShopContext';

const mockProduct: Product = {
    id: 'test-1',
    name: 'Test Product',
    price: 99.99,
    image: '/test-image.jpg',
    category: 'Remeras',
    description: 'Test description',
    isNew: true,
};

function renderWithProviders(ui: React.ReactElement) {
    return render(<Providers>{ui}</Providers>);
}

describe('ProductCard', () => {
    it('renders product information correctly', () => {
        renderWithProviders(<ProductCard product={mockProduct} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(screen.getByText('Remeras')).toBeInTheDocument();
        expect(screen.getByText('Nuevo')).toBeInTheDocument();
    });

    it('displays the "Nuevo" badge only for new products', () => {
        const nonNewProduct = { ...mockProduct, isNew: false };
        const { rerender } = renderWithProviders(<ProductCard product={mockProduct} />);

        expect(screen.getByText('Nuevo')).toBeInTheDocument();

        rerender(<Providers><ProductCard product={nonNewProduct} /></Providers>);
        expect(screen.queryByText('Nuevo')).not.toBeInTheDocument();
    });

    it('has accessible aria-label for add to cart button', () => {
        renderWithProviders(<ProductCard product={mockProduct} />);

        const addButton = screen.getByLabelText('Agregar Test Product al carrito');
        expect(addButton).toBeInTheDocument();
    });

    it('formats price correctly', () => {
        const productWithWholePrice = { ...mockProduct, price: 100 };
        renderWithProviders(<ProductCard product={productWithWholePrice} />);

        expect(screen.getByText('$100.00')).toBeInTheDocument();
    });
});
