<!-- 个人信息页开始 -->
<template>
  <div class="personal">
  <!-- 个人头像 -->
    <div class="content">
        <div class="bg">
          <div class="back" @click='back'>
            <mu-icon value="chevron_left" color='#000' class='icon' size='36'></mu-icon>
            <span class="top">返回</span>
          </div>
          <img :src="src" alt="">
          
        </div>
        <div class="con">
          <div class="avatar">
            <img :src="src" alt="">
          </div>
          <div class="name">Reeyou</div>
          <div class="desc">hbsbvjxjsdjjsjjssjsjjs</div>
        </div>
    </div>
  <!-- 个人信息展示 -->
    <mu-list class="list" v-for='(item ,index) in items' :key='index'>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon :value="item.icon"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>电话</mu-list-item-title>
      </mu-list-item>
    </mu-list>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      friends: [],
      src: '/static/img/reeyou.jpg',
      items: [{
        icon: 'person_outline'
      },{
        icon: 'phone_iphone'
      },{
        icon: 'mail'
      },{
        icon: 'location_on'
      },{
        icon: 'sort'
      }]
    }
  },
  name: 'personal',
  methods: {
    back() {
      this.$router.push('/home')
      console.log(11)
    }
  },
 created() {
    // 数据加载后调用axios获取json数据
    axios.get('/user/friends').then(res => {
      if(res.data.code === 0) {
        this.friends = res.data.data
      }
    })
  }
}
</script>
<style lang='stylus'>
body
  line-height 1
  .personal
    .content
      position relative
      margin-bottom 100px
      z-index 333
      .bg
        max-width 100%
        position relative
        .back
          position absolute
          top 0
          left 0
          display flex
          align-items center
          z-index 999
          .top
            font-size: 1rem
            font-weight 600
            margin-left -2px
            margin-top 2px
        &:after
            content ''
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            background rgba(0,0,0,.18)
            z-index 2
        img
          max-width 100% 
          min-width 100% 
          height 230px
      .con
        position absolute
        bottom -50px
        left 50%
        width 200px
        height 100px
        margin-left -100px
        text-align center
        z-index 9999
        .avatar
          max-width 100%
          img
            max-width 80px
            border 2px solid #fff
            border-radius 50%
            
        .name 
          margin-top 10px
          font-size 20px
          color #000
        .desc 
          margin-top 10px
          color rgba(0,0,0,.68)
    .list
      margin-top -20px
      
</style>

