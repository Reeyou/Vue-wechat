<template>
  <div class="search">
    <mu-appbar :zDepth="0">
      <mu-icon button value="arrow_back" slot="left" color='#000' class='left' @click='back'></mu-icon>
      <mu-text-field placeholder="搜索好友..." v-model="value" @input='input'/>
      <mu-icon button value="person_outline"  slot="right" color='#000' class='right' @click='toUser'/>
    </mu-appbar>
  
    <!-- <mu-list>
      <div v-for="(item,index) in friends" :key='index'>
        <mu-list-item :title="item.name"
                      @click="showPersonindex_x(item._id)">
          <mu-avatar :src="item.avatar"
                     slot="leftAvatar" />
          <mu-icon value="chat_bubble"
                   slot="right" />
        </mu-list-item>
      </div>
    </mu-list> -->
    <div class="list">
     <mu-list v-for="(item,index) in friends" :key='index'>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img :src='item.avatar'>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>{{item.name}}</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
     </mu-list>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        value: '',
        friends: []
      }
    },
    methods: {
      ...mapMutations(['hideTopBar','hideFootBar']),
      back() {
        this.$router.push('/home')
        this.hideTopBar()
        this.hideFootBar()
      },
      toUser() {
        this.$router.push({path:'/personal',query:{personalId : 0}})
      },
      input(val) {
      // 判断输入的值是否是数字
      if (val === '') {
        this.friend = []
      } else if (isNaN(val)) {
        // 不是数字
        this.friend = this.friends.filter(x => {
          if (x.name.indexOf(val) !== -1) {
            return true
          } else {
            return false
          }
        })
      } else {
        // 是数字
        this.friend = this.friends.filter(x => {
          if (x.phone.indexOf(val) !== -1) {
            return true
          } else {
            return false
          }
        })
      }
    }
    },
    created() {
      axios.get('/user/friends').then(res => {
        if(res.data.code === 0) {
          this.friends = res.data.data;
        }
      })
      console.log(this.value)
    }
  }
</script>

<style lang='stylus'>
.search
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: color-g
  text-align center
  .left
    margin-left 10px
  .right 
    margin-right 10px
  .mu-input
    margin-bottom 0
  .mu-appbar
    color: #000
    background: color-w
    .mu-text-field-input
      font-size 12px
    .mu-appbar-title
      line-height 40px
  .list 
    background #fff
    margin-top 10px
    .mu-list
        padding 0
        border-bottom 1px solid rgba(0,0,0,.04)
        .mu-item-wrapper
          padding 6px 0
      .mu-list:last-child
        border-bottom none
  
</style>

