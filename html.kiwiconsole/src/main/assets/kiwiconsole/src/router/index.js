import Vue from 'vue'
import Router from 'vue-router'
import KiwiConsole from '@/components/console/KiwiConsole'
import Statistics from '@/components/console/Statis'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/kiwi/console',
      name: 'Kiwi Console',
      component: KiwiConsole
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    }
  ]
})
