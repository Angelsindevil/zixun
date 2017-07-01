<template>
  <div class="hello">
    <div class="content">
      <div class="leftMenu" id="leftMenu">
        <!-- <ul>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/consultation">
                <img src="../../static/img/home.png" alt="">平台主页
              </router-link>
          </li>
        </ul> -->
        <ul>
          <li class="noClickStyle">
              <router-link to="">
                <img src="../../static/img/platform.png" alt="">内容管理
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/contentManage">
              内容筛选
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/contentAdd">
              新增内容
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/contentPublish">
              已发布内容
              </router-link>
          </li>
        </ul>
        <ul>
          <li class="noClickStyle">
              <router-link to="">
                <img src="../../static/img/platform.png" alt="">资讯数据
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle" v-for="(item,index) in options">
              <!-- <router-link to="/homePage/consultation"> -->
              <router-link :to="{ path: '/homePage/articleList', query: {type:item.value}}">
              {{item.value}}
              </router-link>
          </li>
        </ul>
        <ul>
          <li class="noClickStyle">
              <router-link to="">
                <img src="../../static/img/mes_white.png" alt="" style="height:15px;">消息中心
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <!-- <router-link to="/homePage/instructions"> -->
              <router-link to="/homePage/managementCenter">
              <!-- <el-badge :value="3" :max="10" class="item">我的批示</el-badge> -->
              批示内容
              <span>3</span> 
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/mesManage">
              消息管理
              <!-- <span>3</span>  -->
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/messageBox">
              系统消息
              </router-link>
          </li>
        </ul>
        <ul>
          <li class="noClickStyle">
              <router-link to="">
                <img src="../../static/img/settings_1.png" alt="">平台管理
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/orgManage">
              组织信息
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/userManage">
              用户管理
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/managementCenter">
              <span>2</span> 
              批示管理
              </router-link>
          </li>
        </ul>
        <ul>
          <li class="noClickStyle">
              <router-link to="">
                <img src="../../static/img/multiReporter.png" alt="">报告中心
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/IncludeList">
              收录管理
              </router-link>
          </li>
          <li @click="changeColor" class="clickStyle">
              <router-link to="/homePage/ReportList">
              报告列表
              </router-link>
          </li>
          <!-- <li @click="changeColor" class="clickStyle">
              <router-link to="">
              消息中心
              </router-link>
          </li> -->
        </ul>
        <ul>
          <li class="clickStyle" @click="changeColor">
              <router-link to="/homePage/DataStatistics">
                <img src="../../static/img/reporter.png" alt="">数据统计
              </router-link>
          </li>
        </ul>
      </div>
      <div class="rightBox" :style="styleObject">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      height_:"",
      styleObject: {
        minHeight: "800px",
      },
      // options: [],
      options: [
      {
        value: '全部内容',
        label: '全部内容'
      }, 
      {
        value: '动态资讯',
        label: '动态资讯'
      }, 
      {
        value: '校内信息',
        label: '校内信息'
      }],
    }
  },
  methods:{
    changeColor:function(e){
      $(".clickStyle a").removeClass("blue");
      $(e.target).addClass("blue");
    },
  },
  created(){
    $.when(getArticleType()).done(function(data){
      if(data.state=="0"){
        var res=data.data;
        that.options=res.map(function(value,index){
          return {
            // "value":index+1,
            "value":value,
            "label":value,
          }
        })
        that.options.splice(0,0,{value:"全部内容",label:"全部资讯"});
      }
      else{
        alert(data.data);
      }
    })
  }
  // beforeMount(){
  //   var self=this;
  //   self.styleObject.minHeight=window.screen.height-74;
  //   console.log(self.styleObject.minHeight);
  // },
  // created:function(){
  //   var self=this;
  //   self.styleObject.minHeight=window.screen.height-74;
  //   console.log(self.styleObject.minHeight);
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
  .hello{
    width:100%;
    background-color: #F7F7F7;
  }
  .content{
    width:1100px;
    margin:auto;
    padding-top: 20px;
    padding-bottom: 80px;
    .leftMenu{
      margin-bottom:80px;
      background-color: #001726;
      width: 19%;
      color: #fff;
      border-radius:5px;
      float: left;
      ul{
        margin:0;
        li{
          text-align: center;
          padding:15px 0;
          a{
            position: relative;
            >span{
              position: absolute;
              display: inline-block;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              top: -5px;
              right: -10px;
              font-size: 12px;
              background-color: #ff6666;
              color: #fff;
            }
          }
          img{
            margin-bottom: -2px;
            display:inline-block;
            padding-right:10px;
            width:21px;
            height:18px;
          }
        }
        .noClickStyle>a{
          cursor:default;
        }
      }
      ul:nth-child(1){
        li:nth-child(1){
          padding-top:30px;
        }
      }
      ul{
        position: relative;
        margin-bottom:20px;
        li:nth-child(1){
          padding-right:31px;
        }
      }
      ul:after{
        content:'';
        background-color: #fff;
        height:1px;
        position: absolute;
        width:100%;
        left:0;
        bottom:-10px;
      }
      ul:last-child:after{
        height:0;
      }
    }
    .rightBox{
      float:left;
      width:79%;
      margin-left:20px;
    }
   .after;
  }
  .blue{
    color:#0099cc;
  }
  .item{
    sup{
      right:5px;
      border:none!important;
    }
  }
</style>
