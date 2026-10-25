import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://zipsolutions.org';
  const docs = await getCollection('docs');
  const lastmod = '2026-10-21';

  const bilingualStaticPages = [
    '',
    'products',
    'zipcaptions',
    'use-cases',
    'use-cases/education',
    'use-cases/places-of-worship',
    'use-cases/healthcare',
    'use-cases/live-events',
    'use-cases/public-sector',
    'use-cases/broadcast-and-streaming',
    'easyspeak',
    'pricing',
    'contact-us',
    'events',
    'live-event-quotes',
    'zipmath',
    'testimonial',
    'press',
    'pressrelease',
    'about-us',
    'story',
    'advisory',
    'zippanel',
    'zipconnect',
    'zipvmix',
    'zipspeech',
    'zipcaptionscompanion',
    'equibrowse',
  ];

  const bilingualSet = new Set(bilingualStaticPages);
  const docSlugs = docs
    .map((doc) => doc.id.replace(/\.md$/, ''))
    .filter((slug) => !bilingualSet.has(slug));

  const formatUrl = (path: string) => (path === '' ? `${baseUrl}/` : `${baseUrl}/${path}`);

  const urlEntries: string[] = [];

  // 1. Bilingual static pages (EN + FR with reciprocal xhtml:link hreflang tags)
  for (const enSlug of bilingualStaticPages) {
    const frSlug = enSlug === '' ? 'fr' : `fr/${enSlug}`;
    const enUrl = formatUrl(enSlug);
    const frUrl = formatUrl(frSlug);
    const isHome = enSlug === '';
    const isPriorityProduct = ['products', 'zipcaptions', 'use-cases', 'easyspeak', 'zipmath', 'live-event-quotes', 'events'].includes(enSlug) || enSlug.startsWith('use-cases/');
    const priority = isHome ? '1.0' : isPriorityProduct ? '0.9' : '0.8';
    const changefreq = isHome ? 'daily' : 'weekly';

    for (const currentUrl of [enUrl, frUrl]) {
      urlEntries.push(`  <url>
    <loc>${currentUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />
  </url>`);
    }
  }

  // 2. English-only markdown documentation pages
  for (const slug of docSlugs) {
    const docUrl = formatUrl(slug);
    urlEntries.push(`  <url>
    <loc>${docUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
