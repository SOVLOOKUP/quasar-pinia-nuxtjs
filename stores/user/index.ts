import { defineStore } from 'pinia'
import { UserStore } from './types'

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    email: '',
    username: '',
    confirmed: false,
  }),
  actions: {
    // 登录
    // async signin(userAuth: UserAuth) {
    //   await userLogin(userAuth)
    //   this.user = userState
    // },
    // // 登出
    // signout() {
    //   state.user = null
    // },
  },
})

export * from './types'
