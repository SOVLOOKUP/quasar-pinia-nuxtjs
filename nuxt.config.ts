import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const nuxtConfig = defineNuxtConfig({
  ssr: false,
  meta: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }],
    title: 'GraphIntelligence',
  },
  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  buildModules: ['@pinia/nuxt'],
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

export default {
  ...nuxtConfig,
  strapi: {
    url: process.env.STRAPI_URL ?? 'https://api.lingthink.com:4443',
  },
}
