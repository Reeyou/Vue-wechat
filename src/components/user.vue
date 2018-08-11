<!-- user页面样式开始 -->
<template>
  <div class="user">
    <div class="top">
      <mu-tabs inverse text-color="rgba(0, 0, 0, .54)" indicator-color='transparent' full-width>
    <mu-tab>
      <mu-icon value="camera" color='#64dd17'></mu-icon>
      朋友圈</mu-tab>
    <mu-tab>
      <mu-icon value="near_me" color="#d84315" ></mu-icon>
      附近</mu-tab>
    <mu-tab>
      <mu-icon value="favorite" color="#1976d2" disabled></mu-icon>
      兴趣</mu-tab>
  </mu-tabs>
  </div>
  <div class="content">
   <mu-list v-for='(item,index) in items' :key='index' class='item'>
      <mu-list-item>
        <mu-list-item-action>
          <mu-icon :value="item.icon" :color="item.color"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{item.title}}</mu-list-item-title>
        <mu-icon value="keyboard_arrow_right"></mu-icon>
      </mu-list-item>
    </mu-list>
  </div>
  
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [{
        'title': 'live',
        'icon': 'videocam',
        'color': "#64dd17"
      },
      {
        'title': 'Video',
        'icon': 'video_library',
        'color': "#d84315"
      },
      {
        'title': 'music',
        'icon': 'headset',
        'color': "#1976d2"
      },
      {
        'title': 'Book',
        'icon':'book',
        'color':"#1e88e5"
      },
      {
        'title': 'News',
        'icon': 'whatshot',
        'color':"#ef6c00"
      },
      {
        'title': 'Game',
        'icon':'videogame_asset',
        'color':"#00e5ff"
      },
      {
        'title': 'Shopping',
        'icon': 'shopping_cart',
        'color': "#1e88e5"
      }]
    }
  }
};
</script>

<style lang="stylus">
  .user
    margin 76px 0 48px 0
    .top
      .mu-tabs
        z-index 1
      .mu-tabs-inverse
        background-color #fff
    .content
      margin-top 20px
      .mu-list
        background-color #fff
        padding 0
      .mu-list:nth-child(4),.mu-list:nth-child(7)
        margin-top 16px
      .item
        border-bottom 1px solid rgba(0,0,0,.08)
      .item:last-child,.mu-list:nth-child(3),.mu-list:nth-child(6)
        border-bottom none
   
    
      
</style>