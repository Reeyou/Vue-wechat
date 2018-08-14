const mutations = {
  showSideBar: (state, { flag } = {}) => {
    state.sideBar.open = !state.sideBar.open
    state.sideBar.docked = !flag
  },
  getData: (state, data) => {
    state.data = data;
    state.isAjax = true
  }
}

export default mutations;