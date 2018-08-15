const mutations = {
  showSideBar: (state, { flag } = {}) => {
    state.sideBar.open = !state.sideBar.open
    state.sideBar.docked = !flag
  },
  getData: (state, data) => {
    state.data = data;
  },
  getPersonalId: (state, personalId) => {
    state.personalId = personalId
  },
  hideTopBar: (state) => {
    state.topBar = !state.topBar
  },
  hideFootBar: (state) => {
    state.footBar = !state.footBar
  }
}

export default mutations;