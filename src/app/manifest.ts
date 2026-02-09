import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TECNODESPEGUE E-Commerce',
        short_name: 'TECNODESPEGUE',
        description: 'Premium e-commerce platform with curated lifestyle products',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#6366f1',
        orientation: 'portrait',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icon-192-maskable.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512-maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['shopping', 'lifestyle'],
        screenshots: [
            {
                src: '/screenshot-wide.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
            },
            {
                src: '/screenshot-narrow.png',
                sizes: '750x1334',
                type: 'image/png',
                form_factor: 'narrow',
            },
        ],
    }
}
