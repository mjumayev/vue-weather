import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import WeatherDetail from '@/components/WeatherDetail'
import Search from '@/components/Search'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/weather/:woeid',
      name: 'WeatherDetail',
      component: WeatherDetail
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    },
    {
      path: '/notfound',
      name: 'NotFound',
      component: NotFound
    }
  ]

  
})
