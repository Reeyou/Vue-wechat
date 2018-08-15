
const getters = {
  friend: (state) => {
    return state.data.friends.filter(user => user._id === state.personalId)[0]
    //getters筛选数据，即返回符合当前friends中_id值与personalId相等的数组，由于数组只有一位，获取数组第一位的json数据
  }
}

export default getters