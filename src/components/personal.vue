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
          <img :src="userData.avatar" alt="">
          
        </div>
        <div class="con">
          <div class="avatar">
            <img :src="userData.avatar" alt="">
          </div>
          <div class="name">{{userData.name}}</div>
          <div class="desc">{{userData.explain}}</div>
        </div>
    </div>
  <!-- 个人信息展示 -->
    <mu-list class="list">
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon class='person' value="person_outline"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{userData.name}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon class='phone' value="phone_iphone"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{userData.phone}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon class='mail' value="mail"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{userData.email}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon class='loaction' value="location_on"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{userData.address}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon class='sort' value="sort"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{userData.about}}</mu-list-item-title>
      </mu-list-item>
    </mu-list>

  </div>
</template>
<script>
import axios from 'axios'
import {mapMutations,mapState,mapGetters} from 'vuex'
export default {
  data() {
    return {
      avatar: '/static/img/reeyou.jpg',
    }
  },
  name: 'personal',
  computed: {
    ...mapState(['personalId','data']),
    ...mapGetters(['friend']),
    userData() {
      if(this.personalId === 0) {
        return this.data.self
      } else {
        return this.friend
      }
    }
  },
  methods: {
    ...mapMutations(['hideFootBar','hideTopBar']),
    back() {
      this.$router.push('/home')
      this.hideFootBar()
      this.hideTopBar()
    }
  },
}
</script>
<style lang='stylus'>
body
  line-height 1
  .personal
    .content
      position relative
      margin-bottom 100px
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
            font-weight 500
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
        width 400px
        height 100px
        margin-left -200px
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
      margin-top 20px
      
</style>

