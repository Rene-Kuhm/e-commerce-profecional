import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-16">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="h1 mb-6">Sobre Nosotros</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Somos <span className="text-gradient font-bold">TECNODESPEGUE</span>, tu partner en estilo de vida digital y productos premium.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    <section>
                        <h2 className="h3 mb-4">Nuestra Misión</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Creemos que la calidad no es negociable. Por eso, seleccionamos cada producto bajo los estándares más exigentes del mercado.
                            No vendemos productos; ofrecemos experiencias que elevan tu día a día.
                        </p>
                    </section>

                    <section>
                        <h2 className="h3 mb-4">Lo Que Nos Diferencia</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-2">Curación Experta</h3>
                                <p className="text-sm text-muted-foreground">
                                    Cada artículo pasa por un proceso de selección riguroso. Solo lo mejor llega a nuestro catálogo.
                                </p>
                            </div>
                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-2">Atención Local</h3>
                                <p className="text-sm text-muted-foreground">
                                    Soporte en español, envíos rápidos a todo el país y un equipo que entiende tus necesidades.
                                </p>
                            </div>
                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-2">Diseño Consciente</h3>
                                <p className="text-sm text-muted-foreground">
                                    Apostamos por productos duraderos y sostenibles. Menos desperdicio, más valor real.
                                </p>
                            </div>
                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-2">Tecnología Primero</h3>
                                <p className="text-sm text-muted-foreground">
                                    Plataforma segura, pagos encriptados y una experiencia de compra fluida y moderna.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="h3 mb-4">Nuestro Compromiso</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Nos comprometemos a mantenerte informado en cada etapa: desde el momento que hacés tu pedido hasta que llega a tus manos.
                            Tu confianza es nuestro activo más valioso.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            ¿Tenés preguntas? <Link href="/contact" className="text-primary hover:underline">Contactanos</Link> y te respondemos al toque.
                        </p>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href="/products" className="btn btn-primary text-lg">
                        Explorá Nuestros Productos
                    </Link>
                </div>
            </div>
        </div>
    );
}
