// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.sproutingtech.org',
    trailingSlash: 'never',
    image: {
        responsiveStyles: true,
        layout: 'constrained',
    },
    integrations: [sitemap(), mdx()],
    markdown: {
        shikiConfig: {
            theme: 'rose-pine-dawn',
        },
    },
    prefetch: true,
});
