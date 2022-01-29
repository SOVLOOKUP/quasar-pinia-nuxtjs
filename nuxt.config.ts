import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }],
    title: 'quasar-nuxt',
  },
  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  build: {
    transpile: ['quasar'],
  },
  buildModules: ['@pinia/nuxt', '@nuxtjs/strapi'],
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      }),
    ],
    define: {
      'process.env': { ...process.env },
    },
  },
})
