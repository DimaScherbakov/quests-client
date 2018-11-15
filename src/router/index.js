import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainPage from '@/components/mainPage/mainPage'
import questPage from '@/components/questPage/questPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
    path: '/quest/:alias/:globalId',
    name: 'questPage',
    component: questPage
  }

  ]
})
