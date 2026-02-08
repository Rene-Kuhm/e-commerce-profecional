import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight mb-4 block">
                            LUXE<span className="text-[var(--color-accent)]">.</span>
                        </Link>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-xs">
                            Curated luxury essentials for the modern lifestyle. Quality over quantity, always.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/products" className="hover:text-[var(--color-text-primary)]">All Products</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-[var(--color-text-primary)]">New Arrivals</Link></li>
                            <li><Link href="/accessories" className="hover:text-[var(--color-text-primary)]">Accessories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/faq" className="hover:text-[var(--color-text-primary)]">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-[var(--color-text-primary)]">Shipping & Returns</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--color-text-primary)]">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Stay Connected</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm outline-none focus:border-[var(--color-text-primary)]"
                            />
                            <button className="btn btn-primary text-sm px-4">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                    <p>&copy; {new Date().getFullYear()} LUXE E-commerce. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-[var(--color-text-primary)]">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[var(--color-text-primary)]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
