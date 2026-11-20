// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jeiminnavaj9.github.io',
  // Emit about.html, projects.html, … so existing links keep working.
  build: { format: 'file' },
  // Keep source whitespace so line breaks before inline tags (<a>, <b>) still render as spaces.
  compressHTML: false,
  trailingSlash: 'never',
  integrations: [sitemap()],
});
