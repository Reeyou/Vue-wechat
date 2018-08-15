<!-- 对话内容样式 -->
<template>
  <div class="chatView">
    <mu-list>
    <mu-list-item avatar button :ripple="false">
        <mu-avatar>
          <img :src="userData.avatar">
        </mu-avatar>
        <span class='log'>{{userData.msg}}</span>
      </mu-list-item>
    </mu-list>
  </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      props: ['personalId']
    }
  },
  computed: {
    ...mapGetters(['friend']),
    userData() {
      return this.friend
    }
  }
}
</script>
<style lang='stylus'>
  .chatView 
    position absolute 
    top 70px;
    .log 
      padding 12px 20px
      margin-left 20px
      background-color #fff
      border 1px solid #f5f5f6
      border-radius 10px
</style>
