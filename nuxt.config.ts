// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '|',
        siteName: 'This is the Site Name',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
        },
      ],
      script: [
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          async: true,
          'data-key': 'wTGN1dZtZc19DXJ7mLEhDw',
        },
        {
          src: 'https://analytics.okikelabs.com/script.js',
          defer: true,
          'data-website-id': 'f4801ef0-8521-41dc-a016-785c64e608ff',
        }
      ],
    },
  },
  modules: [
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/tailwind.css', '~/assets/css/styles.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  content: {
    build: {
      markdown: {
        rehypePlugins: {
          'rehype-external-links': {
            options: {
              target: '_blank',
              rel: ['nofollow', 'noopener', 'noreferrer'],
            },
          },
        },
      },
    },
  },
  $production: {
    routeRules: {
      '/': { prerender: true, swr: 900 },
      '/blog': { swr: 900 },
      '/blog/**': { prerender: true, swr: 900 },
      // '/api/**': { isr: false, swr: 900  },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "~/components/ui"
     */
    componentDir: '~/components/ui',
  },
  hooks: {
    'content:file:afterParse'(ctx) {
      const { file, content } = ctx;

      const wordsPerMinute = 180;
      const text = typeof file.body === 'string' ? file.body : '';
      const wordCount = text.split(/\s+/).length;

      content.readingTime = Math.ceil(wordCount / wordsPerMinute);
    }
  },
  site: {
    url: 'https://okikelabs.com',
    name: 'Okike Labs | Proud makers of great software',
    description:
      'Okike Labs is a product lab that specializes in building products with a global reach.',
    defaultLocale: 'en',
  },
})
