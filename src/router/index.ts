import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/Vue3-demo/'),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/pj',
      name: 'peijian',
      component: () => import('@/views/peijian.vue')
    },
    {
      path: '/cgq',
      name: 'chuanganqi',
      component: () => import('@/views/chuanganqi.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash, // 对应 RouterLink 中的 #target-id
        top: 80, // 偏移量：避开顶部固定导航栏（根据你的导航高度调整）
        behavior: 'smooth' // 平滑滚动，体验更好
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
