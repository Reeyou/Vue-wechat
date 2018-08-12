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
  search: 1
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

