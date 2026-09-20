import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://zipsolutions.org';
  const docs = await getCollection('docs');

  const staticPages = [
    '',
    'products',
    'zipcaptions',
    'easyspeak',
    'pricing',
    'contact-us',
    'testimonial',
    'testimonials',
    'press',
    'pressrelease',
    'press-releases',
    'about-us',
    'team',
    'advisory',
    'zippanel',
    'zipconnect',
    'zipvmix',
    'zipspeech',
    'zipcaptionscompanion',
    'equibrowse',
  ];

  const docSlugs = docs.map((doc) => doc.id.replace(/\.md$/, ''));
  const allPaths = Array.from(new Set([...staticPages, ...docSlugs]));

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map((path) => {
    const url = path === '' ? `${baseUrl}/` : `${baseUrl}/${path}/`;
    const priority = path === '' ? '1.0' : path === 'products' || path === 'zipcaptions' || path === 'easyspeak' ? '0.9' : '0.8';
    const changefreq = path === '' ? 'daily' : 'weekly';
    return `  <url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
