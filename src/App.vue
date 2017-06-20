<template>
  <div id="app">
    <div class="topBar">
      <div class="topContent">
        <p><span>H</span><span>I</span><span>N</span>高教信息平台<span>pro</span></p>
        <p>
          <input type="text" placeholder="输入关键词，搜索你想要的">
          <a href="">
            <img src="../static/img/search.png">
          </a>
          <!-- <el-input placeholder="输入关键词，搜索你想要的" v-model="input5">
            <el-button slot="append" icon="search"></el-button>
          </el-input> -->
        </p>
        <p>
          <router-link to="/messageBox"><img src="../static/img/message.png" alt=""></router-link>
          <img src="../static/img/user.png" alt="">
          <span>3</span>
        </p>
      </div>
    </div>
    <div class="bottomBar">
      <div class="bottomContent">
        <p>
          <span>©&nbsp;2016&nbsp;青塔</span>
          <span>平台说明</span>
          <span>联系我们</span>
          <span>关于青塔</span>
        </p>
        <p>
          <span>浙ICP备15004817号-2</span>
          <span>浙公网安备33010502000513号</span>
        </p>
      </div>
    </div>
    <hello></hello>
    <reportBox></reportBox>
    <psBox></psBox>
    <articleBox></articleBox>
    <multiBox></multiBox>
    <userBox></userBox>
    <peopleBox></peopleBox>
    <div class="mask mask1"></div>
    <div class="mask mask2"></div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import reportBox from './components/reportBox.vue'
import psBox from './components/psBox.vue'
import articleBox from './components/articleBox.vue'
import multiBox from './components/multiBox.vue'
import userBox from './components/userBox.vue'
import peopleBox from './components/peopleBox.vue'
export default {
  name: 'app',
  components: {
    Hello,reportBox,psBox,articleBox,multiBox,userBox,peopleBox},
  data () {
    return {
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style lang="less">
@import '../static/less/init.less';
@import '../static/less/tinymce.less';
@import '../static/less/alertStyle.less';
body{
  margin:0;
  position: relative;
  // margin-bottom:50px;
}
#app {
 }
.topBar{
   // height: 80px;
   background-color: #fff;
   width: 100%;
   border-bottom: 1px solid #C9C9C9;
}
.topContent{
    width:1100px;
    // height:80px;
    margin:auto;
    p{
      float:left;
    }
    p:nth-child(1){
      color:#797979;
      font-size: 24px;
      position: relative;
      margin: 21px;
      margin-right: 40px;
      margin-left: 0;
      font-weight:400;
      span{
        vertical-align: middle;
      }
      span:nth-child(1){
        color:#0099FF;
        font-size: 32px;
      }
      span:nth-child(2){
        color:#FFCC00;
        font-size: 32px;
      } 
      span:nth-child(3){
        color:#00CC99;
        font-size: 32px;
        display:inline-block;
        margin-right:10px;
      }
      span:nth-child(4){
        position: absolute;
        top: -5px;
        right: -20px;
        font-size: 14px;
        color: #F74937;
      }
    }
    p:nth-child(2){
      position: relative;
      width:520px;
      // padding-top: 20px;
      // padding-bottom: 20px;
      line-height:86px;
      a{
        display: block;
        position: absolute;
        right: 0;
        // top: 20px;
        top:23px;
        width: 80px;
        height: 40px;
        background-color: #0099ff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      img{
        display: block;
        width: 26px;
        height: 26px;
        margin: auto;
        margin-top: 10px;
      }
      input{
        padding: 0 10px;
        height:40px;
        width: 440px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border:none;
        border:1px solid #ccc;
        background-color: #f2f2f2;
      }
    }
    p:nth-child(3){
      float:right;
      height:42px;
      position: relative;
      padding-top:20px;
      img{
        display:block;
        width:30px;
        height:30px;
        float:left;
        margin-top:8px;
      }
      img:nth-child(1){
        margin-right:15px;
      }
      span{
        display:inline-block;
        background-color: #ff6666;
        width:16px;
        height:16px;
        text-align: center;
        color:#fff;
        font-size:10px;
        border-radius: 50%;
        line-height: 16px;
        position: absolute;
        left: 20px;
        top: 25px;
      }
    }
    .after;
}
.bottomBar{
  font-size:13px;
  z-index:2;
  width:100%;
  height:50px;
  line-height:50px;
  background-color: #001726;
  position: absolute;
  bottom: 0;
  left:0;
  color:#fff;
  .bottomContent{
    width:85%;
    margin:auto;
    p{
      float:left;
    }
    p:nth-child(2){
      float:right;
    }
    span{
      display:inline-block;
      margin:0 10px;
    }
    .after;
  }
}
</style>
