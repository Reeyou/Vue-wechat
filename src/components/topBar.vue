<!-- 顶部样式开始 -->
<template>
  <div class="top_wrapper">
    <mu-appbar z-depth='0' color='#fff'>
      <mu-flex justify-content='between' align-items='center'>
        <mu-avatar slot='left' @click='showSlide' value='slide'>
          <img :src="avatar" alt="">
        </mu-avatar>
        <mu-icon value='search' color='rgba(0,0,0,.68)'></mu-icon>
      </mu-flex>
    </mu-appbar>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data() {
      return {
        avatar: '/static/img/reeyou.jpg'
      }
    },
    methods: {
      showSlide(val) {
        this.$router.push(val)
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
