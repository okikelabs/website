// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
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
  css: ['~/assets/css/tailwind.css'],
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
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  site: {
    url: 'https://okikelabs.com',
    name: 'Okikelabs | Proud makers of great software',
    description:
      'Okikelabs is a startup studio that specializes in building products with a global reach.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
})
