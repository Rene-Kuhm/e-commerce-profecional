'use client';

import { useState } from 'react';

interface CategorySidebarProps {
    onFilterChange: (filters: FilterState) => void;
    activeFilters: FilterState;
}

export interface FilterState {
    categories: string[];
    priceRange: [number, number];
    searchQuery: string;
}

const CATEGORIES = {
    'Ropa': ['Remeras', 'Pantalones', 'Sweaters', 'Hoodies', 'Camisas', 'Joggers', 'Polos', 'Blazers'],
    'Calzado': ['Zapatillas', 'Botas', 'Sandalias'],
    'Accesorios': ['Relojes', 'Bolsos', 'Billeteras', 'Cinturones', 'Gafas', 'Gorros', 'Bufandas', 'Pulseras', 'Neceseres']
};

const PRICE_RANGES = [
    { label: 'Menos de $50.000', min: 0, max: 50000 },
    { label: '$50.000 - $100.000', min: 50000, max: 100000 },
    { label: '$100.000 - $200.000', min: 100000, max: 200000 },
    { label: 'Más de $200.000', min: 200000, max: Infinity },
];

export function CategorySidebar({ onFilterChange, activeFilters }: CategorySidebarProps) {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['Ropa', 'Calzado', 'Accesorios']);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleCategoryToggle = (subCategory: string) => {
        const newCategories = activeFilters.categories.includes(subCategory)
            ? activeFilters.categories.filter(c => c !== subCategory)
            : [...activeFilters.categories, subCategory];

        onFilterChange({
            ...activeFilters,
            categories: newCategories
        });
    };

    const handlePriceRangeChange = (min: number, max: number) => {
        onFilterChange({
            ...activeFilters,
            priceRange: [min, max]
        });
    };

    const clearAllFilters = () => {
        onFilterChange({
            categories: [],
            priceRange: [0, Infinity],
            searchQuery: ''
        });
    };

    const hasActiveFilters = activeFilters.categories.length > 0 ||
        activeFilters.priceRange[0] > 0 ||
        activeFilters.priceRange[1] < Infinity;

    return (
        <aside className="w-full lg:w-64 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold">Filtros</h2>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                        Limpiar todo
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="space-y-4">
                {Object.entries(CATEGORIES).map(([mainCategory, subCategories]) => (
                    <div key={mainCategory} className="border-b border-border pb-4">
                        <button
                            onClick={() => toggleCategory(mainCategory)}
                            className="flex items-center justify-between w-full text-left font-medium text-foreground hover:text-primary transition-colors"
                        >
                            <span>{mainCategory}</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${expandedCategories.includes(mainCategory) ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {expandedCategories.includes(mainCategory) && (
                            <div className="mt-3 space-y-2 pl-2">
                                {subCategories.map((subCategory) => (
                                    <label
                                        key={subCategory}
                                        className="flex items-center gap-2 cursor-pointer group"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={activeFilters.categories.includes(subCategory)}
                                            onChange={() => handleCategoryToggle(subCategory)}
                                            className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                                        />
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {subCategory}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Price Range */}
            <div className="space-y-3 border-b border-border pb-4">
                <h3 className="font-medium text-foreground">Rango de Precio</h3>
                <div className="space-y-2">
                    {PRICE_RANGES.map((range) => (
                        <label
                            key={range.label}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
                            <input
                                type="radio"
                                name="priceRange"
                                checked={
                                    activeFilters.priceRange[0] === range.min &&
                                    activeFilters.priceRange[1] === range.max
                                }
                                onChange={() => handlePriceRangeChange(range.min, range.max)}
                                className="w-4 h-4 border-border text-primary focus:ring-primary focus:ring-offset-0"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                {range.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Active Filters Count */}
            {hasActiveFilters && (
                <div className="text-sm text-muted-foreground">
                    {activeFilters.categories.length} {activeFilters.categories.length === 1 ? 'filtro activo' : 'filtros activos'}
                </div>
            )}
        </aside>
    );
}
