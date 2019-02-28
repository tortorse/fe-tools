// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import VueAnalytics from 'vue-analytics'
Vue.config.productionTip = false

Vue.use(VueI18n)

Vue.use(VueAnalytics, {
  id: 'UA-97072659-1',
  router,
  autoTracking: {
    pageviewTemplate (route) {
      return {
        title: route.name,
        page: `/fe-tools/#${route.path}`,
        location: window.location.href
      }
    }
  }
})

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('./locale/zh-cn'),
    'en-US': require('./locale/en-us')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
