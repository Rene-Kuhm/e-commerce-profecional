'use client';

export function BrandTicker() {
    // Marcas premium de moda y lifestyle
    const brands = [
        'NIKE',
        'ADIDAS',
        'PUMA',
        'REEBOK',
        'NEW BALANCE',
        'CONVERSE',
        'VANS',
        'LACOSTE',
        'TOMMY HILFIGER',
        'CALVIN KLEIN',
        'LEVI\'S',
        'THE NORTH FACE'
    ];

    return (
        <section className="py-12 overflow-hidden border-y border-border bg-muted/30">
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                {/* Scrolling Container */}
                <div className="flex animate-scroll">
                    {/* Primera copia */}
                    {brands.map((brand, index) => (
                        <div
                            key={`brand-1-${index}`}
                            className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
                        >
                            <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap">
                                {brand}
                            </span>
                        </div>
                    ))}
                    {/* Segunda copia para loop infinito */}
                    {brands.map((brand, index) => (
                        <div
                            key={`brand-2-${index}`}
                            className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
                        >
                            <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                    Trabajamos con las mejores marcas del mercado
                </p>
            </div>
        </section>
    );
}
