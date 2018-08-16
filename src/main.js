// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../mock/index'
import axios from 'axios'
import store from './store'
import museUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(museUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    //组件创建前执行ajax请求获取到数据
    this.$store.dispatch('getMyData', this)
  }
})
