import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';

function remarkRewriteLinks() {
  return (tree) => {
    function visit(node) {
      if (!node) return;
      if (node.type === 'link' && typeof node.url === 'string') {
        // Only rewrite internal links
        if (
          !node.url.startsWith('http://') &&
          !node.url.startsWith('https://') &&
          !node.url.startsWith('mailto:') &&
          !node.url.startsWith('tel:') &&
          !node.url.startsWith('#')
        ) {
          // Normalize leading path
          let url = node.url;
          // Handle relative dot prefixes: ./pricing.html -> /pricing, ../foo.md -> /foo
          url = url.replace(/^\.\//, '/');
          url = url.replace(/\.md(#.*)?$/, '$1');
          url = url.replace(/\.html(#.*)?$/, '$1');
          if (url === '' || url === '.') url = '/';
          node.url = url;
        }
      }
      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://zipsolutions.org',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkRewriteLinks] }),
  },
  redirects: {
    '/privacy.html': '/privacy',
    '/terms.html': '/terms',
    '/terms-of-service.html': '/terms',
    '/cookies.html': '/cookies',
    '/contact.html': '/contact-us',
    '/contact-us.html': '/contact-us',
    '/about.html': '/about-us',
    '/about-us.html': '/about-us',
    '/team.html': '/team',
    '/products.html': '/products',
    '/pricing.html': '/pricing',
    '/story.html': '/story',
    '/testimonial.html': '/testimonial',
    '/testimonials.html': '/testimonial',
    '/press.html': '/press',
    '/pressrelease.html': '/pressrelease',
    '/press-releases.html': '/press-releases',
    '/events.html': '/events',
    '/live-event-quotes.html': '/live-event-quotes',
    '/quote.html': '/quote',
    '/zipmath.html': '/zipmath',
    '/math-remediation.html': '/zipmath',
    '/zip-math-remediator.html': '/zipmath',
    '/remediator.html': '/zipmath',
    '/zip-solutions-remediator.html': '/zipmath',
    '/zipcaptions.html': '/zipcaptions',
    '/zipcaptionscompanion.html': '/zipcaptionscompanion',
    '/easyspeak.html': '/easyspeak',
    '/easyspeakguide.html': '/easyspeakguide',
    '/zippanel.html': '/zippanel',
    '/zipconnect.html': '/zipconnect',
    '/zipvmix.html': '/zipvmix',
    '/zipspeech.html': '/zipspeech',
    '/equibrowse.html': '/equibrowse',
    '/giveaway.html': '/giveaway',
    '/givingback.html': '/givingback',
    '/get-started.html': '/get-started',
    '/slideomatic.html': '/slideomatic',
    '/classstudiosync.html': '/classstudiosync',
    '/soundcard.html': '/soundcard',
    '/advisory.html': '/advisory',
  },
});
