<template>
  <div class="contentPublish">
     <div class="rightBar">
      <p>发布内容-全部资讯：
        <span>总共发布<span>136</span>篇,今日发布<span>12</span>篇</span>
      </p>
      <el-input
        placeholder="搜索内容"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.13="handleInputClick">
      </el-input>
    </div>
    <div class="rightContent_">
      <span class="includeBtn" @click="clickBtn" @mouseover="overBtn" @mouseout="outBtn"><span>已发布</span></span>
      <router-link to="/articleDetail">
        <div class="rightContent">
          <p class="title_bar">
            <span>2016年度国家科学技术奖正式公布，128所高校获奖<span>
          </p>       
          <p class="title_bottom">
            <span>
              <span class="bottom_item">来源：<span>山东大学新闻网（<span style="color:#0000FF;display:inline" @click="goSomewhere">http://www.news.zju.edu.cn/</span>）</span></span>
              <span class="bottom_item">类别：<span>国家动态</span></span>
              <span class="bottom_item">时间：<span>2014-06-11</span>&nbsp;&nbsp;<span>09:00</span></span>
              <!-- <span class="bottom_item grey" @click="clickDel" @mouseover="overDel" @mouseout="outDel"><img src="../../static/img/alert-delete.png" alt=""><span class="dele-tips">删除</span></span> -->
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="rightContent_">
      <span class="includeBtn" @click="clickBtn" @mouseover="overBtn" @mouseout="outBtn"><span>已发布</span></span>
      <router-link to="/articleDetail">
        <div class="rightContent">
          <p class="title_bar">
            <span>2016年度国家科学技术奖正式公布，128所高校获奖<span>
          </p>       
          <p class="title_bottom">
            <span>
              <span class="bottom_item">来源：<span>山东大学新闻网（<span style="color:#0000FF;display:inline" @click="goSomewhere">http://www.news.zju.edu.cn/</span>）</span></span>
              <span class="bottom_item">类别：<span>国家动态</span></span>
              <span class="bottom_item">时间：<span>2014-06-11</span>&nbsp;&nbsp;<span>09:00</span></span>
              <!-- <span class="bottom_item grey" @click="clickDel" @mouseover="overDel" @mouseout="outDel"><img src="../../static/img/alert-delete.png" alt=""><span class="dele-tips">删除</span></span> -->
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="rightContent_">
      <span class="includeBtn" @click="clickBtn" @mouseover="overBtn" @mouseout="outBtn"><span>已发布</span></span>
      <router-link to="/articleDetail">
        <div class="rightContent">
          <p class="title_bar">
            <span>2016年度国家科学技术奖正式公布，128所高校获奖<span>
          </p>       
          <p class="title_bottom">
            <span>
              <span class="bottom_item">来源：<span>山东大学新闻网（<span style="color:#0000FF;display:inline" @click="goSomewhere">http://www.news.zju.edu.cn/</span>）</span></span>
              <span class="bottom_item">类别：<span>国家动态</span></span>
              <span class="bottom_item">时间：<span>2014-06-11</span>&nbsp;&nbsp;<span>09:00</span></span>
              <!-- <span class="bottom_item grey" @click="clickDel" @mouseover="overDel" @mouseout="outDel"><img src="../../static/img/alert-delete.png" alt=""><span class="dele-tips">删除</span></span> -->
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="rightContent_">
      <span class="includeBtn" @click="clickBtn" @mouseover="overBtn" @mouseout="outBtn"><span>已发布</span></span>
      <router-link to="/articleDetail">
        <div class="rightContent">
          <p class="title_bar">
            <span>2016年度国家科学技术奖正式公布，128所高校获奖<span>
          </p>       
          <p class="title_bottom">
            <span>
              <span class="bottom_item">来源：<span>山东大学新闻网（<span style="color:#0000FF;display:inline" @click="goSomewhere">http://www.news.zju.edu.cn/</span>）</span></span>
              <span class="bottom_item">类别：<span>国家动态</span></span>
              <span class="bottom_item">时间：<span>2014-06-11</span>&nbsp;&nbsp;<span>09:00</span></span>
              <!-- <span class="bottom_item grey" @click="clickDel" @mouseover="overDel" @mouseout="outDel"><img src="../../static/img/alert-delete.png" alt=""><span class="dele-tips">删除</span></span> -->
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="rightBottom">
      <p>
      点击加载更多内容
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentPublish',
  data () {
    return {
      options: [{
        value: '1',
        label: '全部内容'
      }, {
        value: '2',
        label: '国家动态'
      }, {
        value: '3',
        label: '地方动态'
      }],
      value: '1',
      input2:'',
    }
  },
  methods:{
    doThis:function(){

    },
    optionChangeHandler(val){
        // if(val=='2'){
        //   this.articlesFilter=this.articles.filter(this.filterCallback_1);
        // }
        // else if(val=='1'){
        //   this.articlesFilter=this.articles
        // }
        // else if(val=='3'){
        //   this.articlesFilter=this.articles.filter(this.filterCallback_2);
        // }
        // else if(val=='4'){
        //   this.articlesFilter=this.articles.filter(this.filterCallback_3); 
        // }
    },
    outBtn:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('includeBtn_blue');
      if(class_){
        el.removeClass("includeBtn_blue").find("span").text("已发布");
      }
      else{
      }
    },
    overBtn:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('includeBtn_blue');
      if(!class_){
        el.addClass("includeBtn_blue").find("span").text("取消发布");
      }
    },
    clickBtn:function(e){
      console.log(e);
      e.stopPropagation();
      e.preventDefault();
    },
    goSomewhere(e){
      var ele=e.currentTarget;
      e.preventDefault();
      window.open($(ele).text());
    },
    handleInputClick:function(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
  .contentManage{
    margin-bottom:65px;
    >a{
      display: block;
      color: #000;
    }
  }
  .rightBar{
    height:60px;
    width:100%;
    background-color: #0099FF;
    border-radius:8px;
    position: relative;
    p{
      line-height: 60px;
      padding-left: 20px;
      color:#fff;
      font-size: 16px;
      span{
        vertical-align: middle;
        color:#E4E4E4;
        // font-size: 18px;
        // font-size: 16px;
      }
    }
  }
  .includeBtn{
    position: absolute;
    right:30px;
    top:18px;
    width:80px;
    height:30px;
    display:inline-block;
    border:1px solid #cecece;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    // line-height: 30px;
    // font-size: 16px;
    line-height:32px;
    font-size: 12px;
    color: #cecece;
    // color:#4183F0;
    cursor:pointer;
    z-index:1;
    img{
      display:inline-block;
      margin-bottom: -5px;
      margin-right: 10px;
      width: 25px;
      height: 22px;
    }
  }
  .includeBtn_blue{
    background-color: #0099cc;
    color:#fff;
    // border-color:#0099cc;
    // color:#0099cc;
  }
  .rightContent_{
    position:relative;
  }
  a{
    color: #000;
    display: block;
  }
  .rightContent{
    width:100%;
    margin-top:15px;
    border:1px solid #eee;
    background-color: #fff;
    border-radius:5px;
    .title_bar{
      padding:20px 40px;
      // font-size:20px;
      font-size: 18px;
      color:#222;
      position: relative;
      border-bottom:1px solid #eee;
    }
    .title_content{
      margin:20px 40px;
      line-height: 35px;
      .mutilEllipsis(2);
      // color:#000!important;
      color:#666;
      font-size: 14px;
    }
    .title_bottom{
      padding:0 40px;
    }
    .title_bottom>span{
      display: inline-block;
      width: 100%;
      // border-top: 2px dashed #eee;
      padding: 20px 0;
      font-size:0;
      >span{
        color:#868686;
        // font-size:14px;
        font-size: 12px;
        display:inline-block;
        img{
          display:inline-block;
          width: 25px;
          height: 25px;
          vertical-align:middle;
        }
        span{
          display:inline-block;
          vertical-align:middle;
        }
        .dele-tips{
          display:none;
        }
        // width:33.3%;
      }
      .bottom_item:first-child{
        width:60%;
      }
      .bottom_item:nth-child(2){
        width:20%;
      }
      // .bottom_item:nth-child(3){
      //   width:20%;
      // }
      .bottom_item:last-child{
        width:20%;
        text-align:right;
      }
    }
  }
  // .rightContent:last-child{
  //   margin-bottom:15px;
  // }
  .rightBottom{
    cursor:pointer;
    margin-top:15px;
    height:50px;
    text-align: center;
    color:#fff;
    background-color: #0099FF;
    line-height:50px;
    // font-size:18px;
    font-size: 16px;
    border-radius:5px;
    margin-bottom:15px;
    span{
      vertical-align:middle;
    }
  }
  .grey{
    border-color:#C3C7D0!important;
    color:#C3C7D0!important;
  }
  .red{
    border-color:#FF6666!important;
    color:#FF6666!important;
    img{
      width:15px!important;
    }
  }
  .admin_ui_select {
    position: absolute;
    right: 10px;
    top:15px;
    display: inline-block;
    width: 100px;
    line-height: 1;
    background-color: #B2E0FF;
    border-radius:5px;
  }
  .admin_ui_select > select {
      position: relative;
      width: 100%;
      height: 32px;
      line-height:1;
      padding: 6px 20px 6px 8px;
      border: 1px solid #dddddd!important;
      border-radius: 0;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-color: transparent;
      margin-bottom:0;
      color:#797979;
      border-radius:5px;
      font-size:14px;
  }
  .admin_ui_select:before{
      position: absolute;
      right: 8px;
      top: 4px;
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: "\f107";
      color:#bbb;
      font-size:25px;
  }
  .selectStyle{
    position: absolute;
    right: 15px;
    top: 12px;
    width: 120px;
  }
</style>
