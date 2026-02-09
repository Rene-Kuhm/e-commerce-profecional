import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tecnodespegue.com'), // Cambiar a tu dominio
  title: {
    default: 'TECNODESPEGUE - Premium E-Commerce Platform',
    template: '%s | TECNODESPEGUE',
  },
  description: 'Discover curated premium lifestyle products. Quality, aesthetics, and functionality in one place. Next.js e-commerce with modern design.',
  keywords: ['e-commerce', 'premium products', 'lifestyle', 'shopping', 'nike inspired', 'modern design', 'next.js'],
  authors: [{ name: 'TECNODESPEGUE' }],
  creator: 'TECNODESPEGUE',
  publisher: 'TECNODESPEGUE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://tecnodespegue.com',
    siteName: 'TECNODESPEGUE',
    title: 'TECNODESPEGUE - Premium E-Commerce Platform',
    description: 'Discover curated premium lifestyle products with modern design',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TECNODESPEGUE E-Commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECNODESPEGUE - Premium E-Commerce',
    description: 'Discover curated premium lifestyle products',
    images: ['/twitter-image.png'],
    creator: '@tecnodespegue', // Cambiar a tu Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} flex flex-col min-h-screen font-body`}>
        <ErrorBoundary>
          <Providers>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
