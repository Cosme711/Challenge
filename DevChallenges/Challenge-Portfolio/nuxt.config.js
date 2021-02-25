import redirectSSL from 'redirect-ssl'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cosme Gressier - Développeur Web Junior',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Développeur Web Junior spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.' },
      { property: 'og:title', content: 'Cosme Gressier - Développeur Web Junior' },
      { property: 'og:description', content: 'Développeur Web Junior spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.'},
      { property: 'og:type', content: 'website'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome', {
          imports: [
           {
             set: '@fortawesome/free-solid-svg-icons',
             icons: ['fas']
           },
           {
             set:'@fortawesome/free-brands-svg-icons',
             icons: ['fab']
           }
         ]
        }
      ]
  ],

  sitemap: {
    hostname: 'https://www.cosme-gressier.com',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     }),
  ]
}
