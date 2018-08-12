<!-- 个人信息侧边栏样式开始 -->
<template>
  <div class="slider">
  <mu-drawer :open="sideBar.open" :docked="sideBar.docked" @close="showSideBar()" width='80%'>
     <mu-card-media :title="self.name" :sub-title="self.explain">
      <img :src="self.avatar">
    </mu-card-media>
    <mu-list>
      <mu-list-item button v-for='(item, index) in list' :key='index'>
        <mu-icon :value='item.icon' color='#000'></mu-icon>
        <mu-list-item-title>{{item.title}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title></mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-flex justify-content="start">
    <mu-badge content="" circle color="transparent"  class="demo-badge-content ">
      <div class='icon'>
      <mu-icon value="subject"></mu-icon>
      <p>设置</p>
      </div>
    </mu-badge>
    <mu-badge class="demo-badge-content" circle color="transparent">
      <div class='icon'>
        <mu-icon value="cloud_queue"></mu-icon>
        <p>云盘</p>
      </div>
    </mu-badge>
    <mu-badge class="demo-badge-content" color="transparent">
      <div class='icon'>
      <mu-icon value="folder_open"></mu-icon>
      <p>文件</p>
      </div>
    </mu-badge>
  </mu-flex>
  </mu-drawer>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import axios from 'axios'
  export default {
    data() {
      return{
        self: [],
        list: [{
            title: '我的收藏',
            icon: 'bookmark_border'
          },{
            title: '个性装扮',
            icon: 'av_timer'
          },{
            title: '我的相册',
            icon: 'crop_original'
          },{
            title: '我的音乐',
            icon: 'headset'
          },{
            title: '我的钱包',
            icon: 'credit_card'
          }]
      }
    },
    computed: {
      ...mapState(['sideBar'])
    },
    methods: {
      ...mapMutations(['showSideBar'])
    },
    created() {
     axios.get('/user/self').then(res => {
      if(res.data.code === 0) {
        this.self= res.data.data
      }
    })
    }
  }
</script>
<style lang='stylus'>
.slider 
  .mu-paper
    z-index: 20144444
  .mu-list
    margin-top 10px
    margin-bottom 56px
    .material-icons
      margin-right 20px
  .badge-list-wrap 
    width: 100%;
    max-width: 360px;
    background-color: #fff;
    margin: 0 auto;

  .demo-badge-content 
    padding: 12px;
    margin-left: 8px;
    margin-right: 8px;
    .icon
      text-align center
      p
       font-size 10px 
       color rgba(0,0,0,.68)
    .mu-badge-float
      top -5px
      right -12px

</style>

