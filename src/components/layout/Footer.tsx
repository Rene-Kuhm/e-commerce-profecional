'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight mb-4 block">
                            TECNODESPEGUE<span className="text-[var(--color-accent)]">.</span>
                        </Link>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-xs">
                            Esenciales premium curados para el estilo de vida moderno. Calidad sobre cantidad, siempre.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Tienda</h3>
                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/products" className="hover:text-[var(--color-text-primary)]">Todos los Productos</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-[var(--color-text-primary)]">Novedades</Link></li>
                            <li><Link href="/accessories" className="hover:text-[var(--color-text-primary)]">Accesorios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Soporte</h3>
                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/faq" className="hover:text-[var(--color-text-primary)]">Preguntas Frecuentes</Link></li>
                            <li><Link href="/shipping" className="hover:text-[var(--color-text-primary)]">Envíos y Devoluciones</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--color-text-primary)]">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Mantenete Conectado</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                            Suscribite para recibir novedades, acceso a ofertas exclusivas y más.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm outline-none focus:border-[var(--color-text-primary)]"
                            />
                            <button className="btn btn-primary text-sm px-4">
                                Unirme
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                    <p>&copy; {new Date().getFullYear()} TECNODESPEGUE E-commerce. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-[var(--color-text-primary)]">Privacidad</Link>
                        <Link href="/terms" className="hover:text-[var(--color-text-primary)]">Términos de Servicio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
