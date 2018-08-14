//由于开发过程中许多页面都需要返回json值，每次调用axios时感觉太重复
//由于actions可以异步操作数据，我们利用actions获取提交到mutations中,创建全局数据
//actions跟axios绑定，一种是定义在Vue原型中，一种是创建axios实例暴露出来
//首先在vue的原型上引入axios，然后Vue.prototype.$ajax = axios
const actions = {
  //注意：一定要在组件创建前获取到ajax请求的数据，不然都为空，切记啊
  //在main.js调用beforeCreate()方法分发actions中请求到的数据
  getMyData: async ({ commit }, that) => {
    let friends = []
    let self = {}
    await that.$ajax.get('/user/friends').then(res => {
      if (res.data.code === 0) {
        friends = res.data.data
        console.log(friends)
      }
    })
    await that.$ajax.get('/user/self').then(res => {
      self = res.data.data
    })
    commit('getData', {self,friends})
  }
}

export default actions