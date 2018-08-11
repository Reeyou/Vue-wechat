<!-- msg页面样式开始 -->
<template>
  <div class="msg">
    <mu-paper :z-depth="1" class="demo-list-wrap" >
      <mu-list v-for='(item, index) in friends' :key='index' button ripple>
        <mu-list-item avatar button :ripple="true" >
          <mu-list-item-action>
            <mu-avatar color="blue">
              <img :src="item.avatar" alt="">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title>{{msg}}</mu-list-item-sub-title>
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
export default {
  data () {
    return {
      msg: 'message',
      friends: [],
      time: '15:28',
    }
  },
  created() {
    // 数据加载后调用axios获取json数据
    axios.get('/user/friends').then(res => {
      if(res.data.code === 0) {
        this.friends = res.data.data
        console.log(this.friends)
      }
    })
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