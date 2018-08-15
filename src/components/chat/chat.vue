<!-- 聊天界面样式 -->
<template>
  <div class="chat">
    <mu-appbar style="width: 100%;" color="#fff">
      <mu-button icon slot="left"
      @click='backToMsg'>
        <mu-icon value="keyboard_backspace" color='rgba(0,0,0,.68)'></mu-icon>
      </mu-button>
      <p>{{userData.name}}</p>
      <mu-button icon slot="right">
        <mu-icon value="person" color='rgba(0,0,0,.68)'></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="chatLog">
      <chat-view></chat-view>
    </div>
    <div class="footer">
      <mu-appbar >
      <mu-icon button value="mic_none" slot="left" color='#000' class='left' ></mu-icon>
      <mu-text-field placeholder="" class="input"/>
        <mu-icon value="tag_faces"  slot="right" color='#2a2a2a' class='right face'/>
      <mu-icon value="send"  slot="right" color='#000' class='right send'/>
    </mu-appbar>

    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations,mapState,mapGetters } from "vuex";
import chatView from './chatView'
export default {
  components: {
    chatView
  },
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
    ...mapMutations(["getData",'hideTopBar']),
    ...mapActions(['getMyData']),
    backToMsg() {
      this.$router.push('/msg');
      this.hideTopBar()
    }
  },
  created() {
    console.log(this.self)
  }
};
</script>
<style lang='stylus'>
  .chat
    .mu-elevation-4
      box-shadow 0px 0px 1px #f5f5f6
    p
      color #000
    .footer 
      display flex 
      justify-content center
      background-color #fff
      position absolute 
      bottom 0
      left 0
      width 100%
      box-shadow -2 -2px 5px #f5f5f6
      .mu-appbar 
        background-color #fff
        .input
          flex 6
        .send,.face,.left 
          flex 1
        .face,.send
          padding-left 14px
      

</style>
