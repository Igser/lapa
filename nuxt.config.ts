import process from 'node:process'
import { isDevelopment } from 'std-env'
import primevue from './config/prime-vue.config'
import svgo from './config/svgo.config'
import veeValidate from './config/vee-validate.config'

export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiUrl: process.env.API_BASE_URL,
    },
  },

  css: [
    '~/assets/styles/main.scss',
  ],

  typescript: {
    strict: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/theme/_variables.scss"; @import "@/assets/styles/_mixins.scss"; @import "@/assets/styles/theme/_common.scss";',
        },
      },
    },
  },

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  components: {
    dirs: [
      './features',
      './entities',
      './widgets',
      './shared/components',
    ],
  },

  imports: {
    dirs: [
      './features/**',
      './entities/**',
      './widgets/**',
      './shared/components/**',
      './shared/composables',
      './shared/constants',
      './shared/types',
      './shared/stores',
      './shared/utils',
    ],
    injectAtEnd: true,
  },

  dir: {
    plugins: './app/plugins',
  },

  vue: {
    defineModel: true,
  },

  sourcemap: isDevelopment,

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'example app description' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],

    },
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', 'nuxt-primevue', 'nuxt-svgo', '@vee-validate/nuxt'],

  /* Конфиги для модулей */
  primevue,
  svgo,
  veeValidate,
})
