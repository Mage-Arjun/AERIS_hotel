import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aeris.com';

  const routes = [
    '',
    '/suites',
    '/dining',
    '/experiences',
    '/wellness',
    '/journal',
    '/about',
    '/contact',
    '/reserve',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}