import { defineNuxtPlugin } from '#app'
import Strapi from 'strapi-sdk-js'

export default defineNuxtPlugin(() => {
  const strapi = new Strapi({
    url: process.env.STRAPI_URL ?? 'https://api.lingthink.com:4443',
    store: {
      key: 'strapi_jwt',
      useLocalStorage: true,
    },
    axiosOptions: {},
  })
  return {
    provide: {
      strapi,
    },
  }
})
