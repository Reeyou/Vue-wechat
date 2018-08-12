const mutations = {
  showSideBar: (state, { flag } = {}) => {
    state.sideBar.open = !state.sideBar.open
    state.sideBar.docked = !flag
  },
  add: (state) => {
    state.search += 1
  }
}

export default mutations;