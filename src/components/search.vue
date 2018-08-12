<template>
  <div class="search">
    <mu-appbar :zDepth="0">
      <mu-icon button value="arrow_back" slot="left" color='#000' class='left' @click='back'></mu-icon>
      <mu-text-field placeholder="搜索好友..." v-model="value" />
      <mu-icon button value="search"  slot="right" color='#000' class='right'/>
    </mu-appbar>
  
    <mu-list>
      <div v-for="(item,index) in friend" :key='index'>
        <mu-list-item :title="item.name"
                      @click="showPersonindex_x(item._id)">
          <mu-avatar :src="item.avatar"
                     slot="leftAvatar" />
          <mu-icon value="chat_bubble"
                   slot="right" />
        </mu-list-item>
      </div>
    </mu-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      back() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang='stylus'>
.search
  position: absolute
  z-index: 102
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
  .mu-list 
    padding 0

</style>

