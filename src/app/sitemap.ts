import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tecnodespegue.com' // Cambiar a tu dominio
    const currentDate = new Date()

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/new-arrivals`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/checkout`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]

    // TODO: Add dynamic product pages when you have real data
    // const products = await fetchAllProducts()
    // const productPages = products.map(product => ({
    //   url: `${baseUrl}/products/${product.id}`,
    //   lastModified: product.updatedAt,
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.6,
    // }))

    return [...staticPages]
}
