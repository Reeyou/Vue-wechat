import vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

vue.use(Vuex)

let state = {
  sideBar: {
    open: false,
    docked: true
  },
  //获取json数据保存到全局
  data: { self: {}, friends: [] },
  //控制页面路由转换时topBar出现或隐藏
  topBar: true,
  //控制页面路由转换时footBar出现或隐藏
  footBar: true,
  //通过id来区别personal页面展示对应的页面信息
  personalId : 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

