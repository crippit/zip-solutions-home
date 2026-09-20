import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkRewriteLinks],
  },
});
