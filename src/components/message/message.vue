<!-- msg页面样式开始 -->
<template>
  <div class="msg">
    <mu-paper :z-depth="1" class="demo-list-wrap" >
      <mu-list v-for='(item, index) in friends' :key='index' button ripple @click='toChat(item._id)'>
        <mu-list-item avatar button :ripple="true" >
          <mu-list-item-action>
            <mu-avatar color="blue">
              <img :src="item.avatar" alt="">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title>{{item.msg}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-list-item-after-text>{{time}}</mu-list-item-after-text>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data () {
    return {
      time: '15:28'
    }
  },
  computed: {
    ...mapState({
      friends: state => state.data.friends,
    })
  },
  methods: {
    ...mapMutations(['hideTopBar','getPersonalId']),
    ...mapActions(['getMyData']),
    toChat(val) {
      this.$router.push('/chat'),
      this.hideTopBar()
      this.getPersonalId(val)
    }
  }
};
</script>

<style lang="stylus">
body
  background-color rgba(0,0,0,.04)
  .msg
    margin 76px 0 88px 0
    .mu-elevation-1
      box-shadow none
      .mu-list
        padding 0
        border-bottom 1px solid rgba(0,0,0,.04)
        .mu-item-wrapper
          padding 6px 0
      .mu-list:last-child
        border-bottom none
</style>