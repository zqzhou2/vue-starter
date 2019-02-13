import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/Home'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/Home'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      component: resolve => require(['@/views/About'], resolve)
    }
  ]
})
