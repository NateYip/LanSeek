import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
Vue.use(Router)
export default new Router({
    linkExactActiveClass: 'active',
    routes: [
      {
        path: '/',
        redirect: 'dashboard',
        component: DashboardLayout,
        children: [
          {
            path: '/dashboard',
            name: 'dashboard',
            // 这里是 lazy-loaded 
            component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
          },
          {
            path: '/help',
            name: 'help',
            component: () => import(/* webpackChunkName: "demo" */ './views/Help.vue')
          }
        ]
      },
    ]
  })
  