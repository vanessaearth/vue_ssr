import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)
// 导出工厂函数，他可以返回新的router实例,每个用户需要创建一个实例
export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  })
}
