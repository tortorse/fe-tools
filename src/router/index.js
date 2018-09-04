import Vue from 'vue'
import Router from 'vue-router'
import Css from '@/pages/css'
import Javascript from '@/pages/javascript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'css',
      component: Css
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: Javascript
    }
  ]
})
