// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-10-30',
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  nitro: {
    preset: 'static',
  },
  // hooks: {
  //   close: () => {
  //     process.exit(0)
  //   },
  // },
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
    name: 'Okikelabs | A startup studio',
    description:
      'Okikelabs is a startup studio committed to building products with a global reach.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    documentDriven: true,
    // markdown: {
    //   anchorLinks: false,
    // },
    // navigation: {
    // fields: ['slug', 'title'],
    // },
  },
})
