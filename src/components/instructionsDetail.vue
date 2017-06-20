<template>
  <div class="instructionsDetail">
    <div class="rightBar">
      <p>消息反馈-我的批示：
        <span>批示流程详细信息</span>
      </p>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <p><img src="../../static/img/edit_reporter.png" alt="">我的批示流程<span class="time">批示时间：<span>2017-01-26 19:35</span></span></p>
        <p class="grey_font">
          <span>批示文章：<span>国家“双一流”实施方案正式出台，预计2017年上半年公布名单</span> - <span>2017/01/26</span></span>
          <!-- <router-link to="/articleDetail"><span class="includeBtn blue"><span>查看原文</span></span></router-link> -->
          <router-link to="/articleDetail"><el-button type="primary" size="small" class="btn-pos">查看原文</el-button></router-link>
        </p>
        <p class="blue_font">
          <span>批示内容：<span>请发展规划处等抓紧时间研究国家双一流方案的细则，特别是教育部有关部门的解读。</span></span>
          <!-- <span class="includeBtn grey"><span>无附件</span></span> -->
          <el-button type="text" :disabled="true" class="btn-pos btn-pos-1" size="small">无附件</el-button>
        </p>
      </div>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <p><img src="../../static/img/edit_reporter.png" alt="">数据与信息中心分发<span class="time">分发时间：<span>2017-01-26 19:35</span></span></p>
        <p class="blue_font">
          <span>分发内容：<span>已分发至发展规划处张三处长处理</span></span>
          <!-- <span class="includeBtn grey"><span>无附件</span></span> -->
          <el-button type="text" :disabled="true" class="btn-pos btn-pos-1" size="small">无附件</el-button>
        </p>
      </div>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <p><img src="../../static/img/edit_reporter.png" alt="">发展规划处张三反馈<span class="time">反馈时间：<span>2017-01-26 19:35</span></span></p>
        <p class="blue_font">
          <span>反馈内容：<span>发展规划处联合教科院，对双一流政策进行了详细的多角度解读，内容见附件。</span></span>
          <!-- <span class="includeBtn blue"><span>查看附件</span></span> -->
          <el-button type="text" size="small" class="btn-pos btn-pos-1">查看附件</el-button>
        </p>
      </div>
    </div>
    <el-dropdown trigger="click" class="psBtn_new" @command="showSelect();showPSBox()">
      <el-button>
        批示处理<i class="el-icon-caret-bottom el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>分发</el-dropdown-item>
        <el-dropdown-item>反馈</el-dropdown-item>
        <el-dropdown-item>关闭</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-button @click="showPSBox" icon="edit" class="psBtn_new">再次批示</el-button> -->
    <!-- <p class="psBtn" @click="showPSBox">再次批示</p> -->
    <!-- <div class="rightBottom dark_grey">
      <p>
      超过24个小时无新批示和反馈，流程已结束
      </p>
    </div> -->
    <div class="rightBottom">
      <p>
      距离接收到领导批示3个小时，流程还未结束
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'instructionsDetail',
  data () {
    return {
      
    }
  },
  methods:{
    showPSBox:function(){
      console.log("1");
      $(".mask1").addClass("showBtn");
      $(".psBox").addClass("showBtn");
      $(".printPs").removeClass("showBtn");
      $(".psBox").find(".article_btn").attr("disabled",true).addClass("is-disabled");
    },
    showSelect:function(){
      $(".el-row").addClass("show_row");
      $(".psBox").addClass("alertStyle_");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
  .test{
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
      }
    }
  }
  .includeBtn{
    position: absolute;
    right:20px;
    top:16px;
    min-width:60px;
    padding:5px 10px;
    display:inline-block;
    border:1px solid #0099cc;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    font-size: 13px;
    color: #0099cc;
    cursor:pointer;
    z-index:1;
  }
  .btn-pos{
    position: absolute;
    right:20px;
    top:15px;
  }
  .btn-pos-1{
    top:17px;
  }
  .rightContent{
    position: relative;
    width:100%;
    margin-top:25px;
    border:1px solid #eee;
    background-color: #fff;
    border-radius:5px;
    .title_bar{
      font-size:16px;
      position: relative;
      p{
        padding:20px;
        border-bottom:1px solid #e4e4e4;
        position: relative;
      }
      p:first-child{
        font-size: 16px;
        color:#666;
        .time{
          position: absolute;
          right:20px;
          top:25px;
          font-size: 14px;
          color:#666;
        }
      }
      p:last-child{
        padding-right:120px;
        border-bottom:none;
      }
      .blue_font{
        font-size: 14px;
        color:#0099ff;
      }
      .grey_font{
        font-size: 14px;
        color:#5e5e5e;
      }
      img{
        display:inline-block;
        width: 21px;
        height: 21px;
        margin-right: 6px;
        vertical-align:middle;
      }
    }
  }
  .rightContent:after,.psBtn:after,.psBtn_new:after{
    content: '';
    width: 1px;
    border-left: 2px dashed #0099ff;
    height: 18px;
    position: absolute;
    bottom: -22px;
    left: 50%;
    transform: translate(-50%, 0);

  }
  .rightBottom{
    cursor:default;
    // margin-top:15px;
    height:50px;
    text-align: center;
    color:#fff;
    background-color: #0099FF;
    line-height:50px;
    font-size:16px;
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
  .grey{
    border-color:#ccc!important;
    color:#ccc;
  }
  .blue{
    border-color:#3399ff!important;
    color:#3399ff;
  }
  .dark_grey{
    background-color: #bcbcbc;
  }
  .psBtn{
    position: relative;
    width:150px;
    height:35px;
    line-height: 35px;
    background-color: #fff;
    border:2px solid #3399ff;
    color:#3399ff;
    text-align: center;
    font-size: 14px;
    margin:auto;
    margin-top:25px;
    margin-bottom:25px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .psBtn_new{
    position: relative;
    margin:auto;
    text-align: center;
    color:#0099ff;
    // display:block;
    left: 50%;
    transform: translate(-50%,0);
    margin:25px auto;
    button{
      color:#0099ff!important;
    }
  }
  .el-button--primary{
    background: #52baff;
    border-color: #52baff;
  }
  .el-button--primary:focus, .el-button--primary:hover{
    background: #66c8ff;
    border-color: #66c8ff;
  }
  .article_btn{
    color:#0099ff!important;
  }
  .el-dropdown-menu__item{
    text-align: center;
    color:#666;
  }
</style>
