// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Platzhalter-Domain – vor dem Livegang durch die echte Domain ersetzen (auch in src/data/site.ts)
  site: 'https://www.chopfundchrage.ch',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/danke/')
    })
  ]
});
