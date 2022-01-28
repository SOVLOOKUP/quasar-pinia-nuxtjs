import { defineStore } from 'pinia'
import { ConfigStore } from './types'
import { Router } from 'vue-router'

const AutoHideAppBarAtPath = ['/model/', '/auth']

export const useConfigStore = defineStore('user', {
  state: (): ConfigStore => ({
    mode: 'build',
  }),
  actions: {
    async autoHideBar(router: Router) {
      await router.isReady()
      if (
        AutoHideAppBarAtPath.some((p) =>
          router.currentRoute.value.fullPath.startsWith(p)
        )
      ) {
        this.showBar = false
      } else {
        this.showBar = true
      }
    },
  },
})

export * from './types'
