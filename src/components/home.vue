<!-- 主界面 -->
<template>
  <div class="homeView">
    <div class="topList">
      <mu-list classs='mu-list'>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="group_add"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title @click='add'>新的朋友{{count}}</mu-list-item-title>
        </mu-list-item>
         <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="group"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>群聊</mu-list-item-title>
        </mu-list-item>
         <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-action> 
            <mu-icon value="person" color='blue'></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>公众号</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="title">
      <div class="title_1">
        <span style="color: rgba(0, 0, 0, .8)">我的设备</span>
      </div>
      <div class="title_con">
        <mu-icon value='airplay' class="com" size='24'></mu-icon>
        <div class="desc">
          <p style='font-size: 16px'>我的电脑</p>
          <p style='font-size: 12px;color: rgba(0,0,0,.68)'>[{{load}}]无需连接数据线，手机轻松传文件到电脑</p>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="title_1">
        <span style="color: rgba(0, 0, 0, .8)">好友</span>
      </div>
      <div class="list" v-for='(item, index) in friends' :key='index'>
        <mu-list classs='mu-list'>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="item.avatar" alt="" @click="toPersonal(item._id)">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios' //引入axios插件
// import bsScroll from 'better-scroll'//引入better-scroll 插件
import { mapMutations, mapState } from 'vuex'
export default {
  name: "topBar",
  data() {
    return {
      avatar: '/static/img/reeyou.jpg',
      friends: [],
      load: '离线'
    }
  },
  computed: {
    ...mapState({
      count: state => state.search
  })
  },
  methods: {
    ...mapMutations(['add','hideFootBar','hideTopBar','getPersonalId']),
   toPersonal(val) {
     this.$router.push('/personal'),
     this.hideFootBar()
     this.hideTopBar()
     this.getPersonalId(val)
   }
  },
  created() {
    // 数据加载后调用axios获取json数据
    axios.get('/user/friends').then(res => {
      if(res.data.code === 0) {
        this.friends = res.data.data
        // console.log(this.friends)
      }
    })
  }
}
</script>

<style lang='stylus'>
@import '../assets/stylus/index';

  .homeView
    margin 76px 0 68px 0
    .topList
      background color-w
      .mu-list
        padding 0
    .title 
      .title_1
        margin 10px 0 10px 16px
      .title_con
        display flex
        align-items center
        padding 8px 0
        background color-w
        .com
          flex 1
          margin-left 16px
          min-width 56px
          height 100%
        .desc
          flex 6
          line-height 1.2rem
      .list 
        background color-w
        padding 4px 0 
        border-bottom 1px solid color-g
        .mu-list
          padding 0
          // border-1px-top(color-g)
      .list:last-child
        border-bottom none
        
          
        
          
          
        
</style>