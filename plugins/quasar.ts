import { Quasar } from 'quasar'
import * as All from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    lang: quasarLang,
    iconSet: quasarIconSet,
    components: All,
    plugins: {},
  })
})
