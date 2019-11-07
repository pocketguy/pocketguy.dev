export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/reset.css', '@/assets/stylus/main.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-P78R8DT' }],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '56104291',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    stylus: ['@/assets/stylus/vars.styl']
  },
  webfontloader: {
    google: {
      families: ['Anonymous+Pro:400,700&display=swap&subset=cyrillic']
    }
  },
  sitemap: {
    hostname: 'https://pocketguy.dev'
  },
  router: {
    trailingSlash: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}