<template>
  <div id="app">
    <!-- <personal></personal> -->
    <!-- <search></search> -->
    <topBar v-if="topBar"></topBar>
    <!-- <chat></chat> -->
    <sideBar></sideBar>
    <footBar v-if="footBar"></footBar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar'
import footBar from './components/footBar'
import sideBar from './components/sideBar'
import personal from './components/personal'
import search from './components/search'
import chat from './components/chat/chat'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    topBar,
    footBar,
    sideBar,
    personal,
    search,
    chat
  },
  //获取全局保存的state数据，不然此处数据无定义
  computed: mapState(['topBar','footBar'])
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
