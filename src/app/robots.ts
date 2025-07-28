import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://simbadispatchservices.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/services',
          '/services/*',
          '/contact',
          '/quote',
          '/pricing',
          '/how-it-works',
          '/faq',
          '/support',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
          '/private/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}