import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Cbasics from '@/components/Cbasics'
import WebBasics from '@/components/WebBasics'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/cbasics',
      name: 'Cbasics',
      component: Cbasics
    },
    {
      path: '/webbasics',
      name: 'WebBasics',
      component: WebBasics
    }
  ]
})
