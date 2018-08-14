<template>
  <div id="app">
    <!-- <personal></personal> -->
    <!-- <search></search> -->
    <!-- <topBar></topBar> -->
    <!-- <chat></chat> -->
    <!-- <sideBar></sideBar> -->
    <!-- <footBar v-if="true"></footBar> -->
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
export default {
  name: 'App',
  components: {
    topBar,
    footBar,
    sideBar,
    personal,
    search,
    chat
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
