import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/IndexPage'
import VueResource from 'vue-resource'
import OrderList from '@/pages/orderList'
import Detail from '@/pages/detail'
import Analysis from '@/pages/detail/analysis'
import Count from '@/pages/detail/count'
import Forecast from '@/pages/detail/forecast'
import Publish from '@/pages/detail/publish'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderList
    },
    {
      path: '/detail',
      redirect: '/detail/analysis',
      component: Detail,
      children: [
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
