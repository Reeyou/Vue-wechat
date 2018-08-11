import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import message from '@/components/message/message'
import user from '@/components/user'
import museUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';

Vue.use(Router)
Vue.use(museUi)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/msg',
      component: message
    },
    {
      path: '/home',
      component: home
    },{
      path: '/user',
      component: user
    }
  ]
})
