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
    'events',
    'quote',
    'live-event-quotes',
    'zipmath',
    'testimonial',
    'testimonials',
    'press',
    'pressrelease',
    'press-releases',
    'about-us',
    'story',
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
  const allEnPaths = Array.from(new Set([...staticPages, ...docSlugs]));
  const allFrPaths = allEnPaths.map((path) => (path === '' ? 'fr' : `fr/${path}`));
  const allPaths = [...allEnPaths, ...allFrPaths];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map((path) => {
    const url = path === '' ? `${baseUrl}/` : `${baseUrl}/${path}/`;
    const isHome = path === '' || path === 'fr';
    const isPriorityProduct = path === 'products' || path === 'zipcaptions' || path === 'easyspeak' || path === 'fr/products' || path === 'fr/zipcaptions' || path === 'fr/easyspeak';
    const priority = isHome ? '1.0' : isPriorityProduct ? '0.9' : '0.8';
    const changefreq = isHome ? 'daily' : 'weekly';
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
