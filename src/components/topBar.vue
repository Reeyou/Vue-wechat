<!-- 顶部样式开始 -->
<template>
  <div class="top_wrapper">
    <mu-appbar z-depth='0' color='#fff'>
      <mu-flex justify-content='between' align-items='center'>
        <mu-avatar slot='left' value='slide'>
          <img :src="avatar" alt="" @click='showSideBar_left(true)'>
        </mu-avatar>
        <mu-icon value='search' color='rgba(0,0,0,.68)' @click='toSearch'></mu-icon>
      </mu-flex>
    </mu-appbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    name: 'topBar',
    data() {
      return {
        avatar: '/static/img/reeyou.jpg'
      }
    },
    methods: {
      ...mapMutations(['showSideBar']),
      showSideBar_left(flag) {
        this.showSideBar({ flag })
        console.log(flag)
      },
      toSearch() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang='stylus'>
@import '../assets/stylus/index';
  .top_wrapper
    position fixed
    width 100%
    top 0
    left 0
    z-index 2
</style>
