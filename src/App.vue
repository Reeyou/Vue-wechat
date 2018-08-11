<template>
  <div id="app">
    <topBar></topBar>
    <footBar></footBar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar'
import footBar from './components/footBar'
export default {
  name: 'App',
  components: {
    topBar,
    footBar
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
