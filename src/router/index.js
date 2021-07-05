import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  // 路由懒加载
  {
    path: '/login',
    name: 'LoginIndex',
    component: () => import('@/views/login/')
  },
  // 擁有子路由 父路由可以不配置name属性  导航部分
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/')

      },
      {
        path: '/quiz',
        name: 'quiz',
        component: () => import('@/views/quiz/')

      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')

      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/me/')

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
