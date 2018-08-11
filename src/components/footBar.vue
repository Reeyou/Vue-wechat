<!-- 底层样式开始 -->
<template>
  <div class="foot_wrapper">
    <mu-bottom-nav @change='handleChange'>
      <mu-bottom-nav-item title="消息" icon="sms" value='msg'>
      </mu-bottom-nav-item>
      <mu-bottom-nav-item title="联系人" icon="person" value='home'></mu-bottom-nav-item>
      <mu-bottom-nav-item title="动态" icon="star" value='user'></mu-bottom-nav-item>
  </mu-bottom-nav>
  </div>
</template>

<script>
  export default {
    name: 'footBar',
    data() {
      return {
        title: 'footBar',
       
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
        this.$router.push(val)
      }
    }
  }
</script>

<style lang='stylus'>
@import '../assets/stylus/index';
.foot_wrapper {
  position fixed
  width 100%
  height 48px
  left 0
  bottom 0
  z-index 2
}
a {
  color: rgba(0,0,0,.54);
}
</style>