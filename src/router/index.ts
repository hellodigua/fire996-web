import { Router, createRouter, createWebHashHistory } from 'vue-router'
const Intro = () => import('@/view/intro/index.vue')
const Result = () => import('@/view/result/index.vue')

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Intro,
      meta: { title: 'code996' },
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
      meta: { title: 'result | code996' },
    },
  ],
})

function changeTitleGuide(router: Router) {
  router.beforeEach((to, from, next) => {
    const title = to.meta.title as string
    document.title = title
    next()
  })
}

changeTitleGuide(router)
