// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Replace with your site URL
  site: 'https://example.com',

  integrations: [
    tailwind(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },

  adapter: cloudflare()
});