import { MetadataRoute } from 'next';
import { talentsData } from '@/data/talentsData';
import { eventsData } from '@/data/eventsData';
import { blogData } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://managementputribali.com';

  const staticPages = ['', '/about', '/talents', '/events', '/gallery', '/blog', '/faq', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  const talentPages = talentsData.map((t) => ({
    url: `${baseUrl}/talents/${t.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const eventPages = eventsData.map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages = blogData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...talentPages, ...eventPages, ...blogPages];
}