// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET, POST' } },
    'http://191.101.70.209:4000/**': { cors: true, headers: { 'access-control-allow-methods': 'GET, POST' } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Philosopher&display=swap' },
        { rel: 'stylesheet', href: 'https://kit.fontawesome.com/da2962ce7f.js' }
     ],
      meta: [
        { name: 'theme-color', content: '#ff0000' },
        { name: 'theme-color', content: '#ff0000' },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }

      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '~/assets/main.css'
  ],
  modules: [
  '@nuxt/content',
  'nuxt-icon',
  '@nuxtjs/color-mode',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
