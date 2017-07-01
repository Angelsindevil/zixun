<template>
  <div class="report">
    <div class="rightBar">
      <p>报告中心-报告列表：
        <span>共计生成<span>{{totalNum}}</span>篇报告</span>
      </p>
      <el-button class="btn_position">
        <input type="file" name="" class="file_" @change="linkChange">上传报告
      </el-button>
      <el-input
        placeholder="搜索已生成的报告"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.13="handleInputClick">
      </el-input>
    </div>
    <div class="reporterContainer">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="系统报告" name="first">
          <div class="rightContent" v-for="(item,index) in listFilter_1">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span>{{item.title}}</span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_" :data-id='item.id'>
              <a :href="item.link"><span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span></a>
            </div>
          </div>
          <!-- <div class="rightContent">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span><span>高等教育信息动态-20161208-V02</span>&nbsp;&nbsp;&nbsp;<span>生成日期：<span>2016/12/08 16：45</span></span></span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_">
              <span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span>
            </div>
          </div>
          <div class="rightContent">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span><span>高等教育信息动态-20161208-V03</span>&nbsp;&nbsp;&nbsp;<span>生成日期：<span>2016/12/08 16：45</span></span></span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_">
              <span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span>
            </div>
          </div>   -->
          <div class="rightBottom" @click="loadMore">
            <p>
            点击加载更多历史报告
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="手工报告" name="second">
          <div class="rightContent" v-for="(item,index) in listFilter_2">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span>{{item.title}}</span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_" :data-id='item.id'>
              <a :href="item.link"><span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span></a>
            </div>
          </div>
          <!-- <div class="rightContent">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span><span>高等教育信息动态-20161208-V04</span>&nbsp;&nbsp;&nbsp;<span>生成日期：<span>2016/12/08 16：45</span></span></span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_">
              <span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span>
            </div>
          </div>
          <div class="rightContent">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span><span>高等教育信息动态-20161208-V05</span>&nbsp;&nbsp;&nbsp;<span>生成日期：<span>2016/12/08 16：45</span></span></span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_">
              <span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span>
            </div>
          </div>
          <div class="rightContent">
            <div class="title_bar">
              <img src="../../static/img/multi-report.png" alt="">
              <span><span>高等教育信息动态-20161208-V06</span>&nbsp;&nbsp;&nbsp;<span>生成日期：<span>2016/12/08 16：45</span></span></span>
              <img src="../../static/img/delete.png" alt="" class="delete" @click="delete_">
              <span class="includeBtn"><img src="../../static/img/download.png" alt=""><span>下载报告</span></span>
            </div>
          </div>   -->
          <div class="rightBottom" @click="loadMore">
            <p>
            点击加载更多历史报告
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'report',
  data () {
    return {
      input2:'',
      activeName: 'first',
      userId:'d733ed4b5afd11e79ea400269e28ab11',
      userName:'系统管理员',//想一想 先存哪里去 登录的时候存
      type:'系统报告',
      totalNum:'136',
      todayNum:'',
      listFilter:[],
      listFilter_1:[
        {
          'id':'001',
          'link':'http://www.baidu.com',
          'title':'高等教育信息动态-20161208-V01   生成日期：2016/12/08 16：45',
        },
        {
          'id':'002',
          'link':'http://www.baidu.com',
          'title':'高等教育信息动态-20161208-V02   生成日期：2016/12/08 16：45',
        },
      ],
      listFilter_2:[
        {
          'id':'003',
          'link':'http://www.baidu.com',
          'title':'高等教育信息动态-20161208-V03   生成日期：2016/12/08 16：45',
        },
        {
          'id':'004',
          'link':'http://www.baidu.com',
          'title':'高等教育信息动态-20161208-V04   生成日期：2016/12/08 16：45',
        },
      ],
      pageCount_1:1,
      pageCount_2:1,
    }
  },
  methods:{
    delete_:function(e){
      $(e.target).closest(".rightContent").remove();
    },
    handleClick(tab, event) {
      // console.log(tab, event);
      console.log(tab.label);
      $.when(getIncludedList(this.userId,tab.label)).done(function(data){
        if(data.state=="0"){
          var res=data.data;
          that.totalNum=res.totalNum;
          // that.listFilter=res.list;
          if(tab.label=="手工报告"){
            that.listFilter_2=res.list;
            that.type="手工报告";
          }
          else if(tab.label=='系统报告'){
            that.listFilter_1=res.list;
            that.type="系统报告";
          }
          else{}
        }
        else{
          alert(data.data);
        }
      })
    },
    handleInputClick:function(){},
    linkChange:function(e){
      var file = e.target.files; //获取图片资源
      if(file[0]){
        this.fileFlag=true;
        this.file=file[0];
        this.linkName=file[0].name;
        $(this.$refs.linkBot).text(file[0].name);
      }
    },
    loadMore(){
      if(this.activeName=='first'){
        this.pageCount_1++;
        $.when(getIncludedList(that.userId,that.type,that.pageCount_1)).done(function(data){
          if(data.state=="0"){
            var res=data.data;
            that.totalNum=res.totalNum;
            that.listFilter=res.list;
          }
          else{
            alert(data.data);
          }
        })
      }
      else if(this.activeName=='second'){
        this.pageCount_2++;
        $.when(getIncludedList(that.userId,that.type,that.pageCount_2)).done(function(data){
          if(data.state=="0"){
            var res=data.data;
            that.totalNum=res.totalNum;
            that.listFilter=res.list;
          }
          else{
            alert(data.data);
          }
        })
      }
      else{}
    },
  },
  create(){
    var that=this;
    that.listFilter_1=that.listFilter_1;
    $.when(getIncludedList(that.userId,that.type,that.pageCount)).done(function(data){
      if(data.state=="0"){
        var res=data.data;
        that.totalNum=res.totalNum;
        that.listFilter=res.list;
      }
      else{
        alert(data.data);
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
  .report{
    margin-bottom:65px;
    >a{
      display: block;
      color: #000;
    }
    .file_{
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 110px;
      height: 32px;
      cursor:pointer;
    }
    .btn_position{
      font-size: 13px;
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
      // font-size:18px;
      font-size: 16px;
      color:#fff;
      span{
        vertical-align: middle;
        color:#E4E4E4;
        // font-size: 18px;
        font-size: 16px;
      }
    }
    // >div{
    //   position: absolute;
    //   right:20px;
    //   top:15px;
    //   height:30px;
    //   background-color: #D2E5F5;
    //   border-radius:5px;
    //   width: 230px;
    //   line-height: 28px;
    //   >div{
    //     width:30px;
    //     height:30px;
    //     position: absolute;
    //     right:-3px;
    //     top:0px;
    //     background-color: #D2E5F5;
    //     border-radius:5px;
    //   }
    //   img{
    //     margin-top:4px;
    //     display:inline-block;
    //     width:23px;
    //     height:23px;       
    //   }
    //   input{
    //     width:100%;
    //     height:100%;
    //     border:none;
    //     background-color:transparent;
    //     text-indent:1em;
    //   }
    // }
    // &:before{
    //   z-index: 1;
    //   content: '';
    //   position: absolute;
    //   right: 20px;
    //   top: 19px;
    //   width: 30px;
    //   height: 23px;
    //   display: inline-block;
    //   background-image: url('../../static/img/search.png');
    //   background-size: 23px 23px;
    //   background-color: #D2E5F5;
    //   background-repeat: no-repeat;
    // }
  }
  .rightContent{
    width:100%;
    margin-top:10px;
    border:1px solid #ccc;
    background-color: #fff;
    border-radius:8px;
    .title_bar{
      font-size:16px;
      padding:20px;
      position: relative;
      // border-bottom:1px solid #eee;
      img{
        display:inline-block;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        vertical-align:middle;
      }
      span{
        vertical-align:middle;
      }
      span:first-child{
        // font-size:16px;
        font-size: 15px;
        color:#333;
      }
      span:last-child{
        font-size:14px;
        color:#999;
        span{
          font-size:14px;
            color:#999;
        }
      }
      .delete{
        position: absolute;
        right:140px;
        top:22px;
        cursor:pointer;
      }
      .includeBtn{
        position: absolute;
        right:20px;
        top:20px;
        width:110px;
        height:30px;
        display:inline-block;
        border:1px solid #0099cc;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        // color: #0099cc!important;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        img{
           display:inline-block;
            margin-right: 10px;
            width: 25px;
            height: 25px;
        }
        span{
          color: #0099cc!important;
          vertical-align:inherit;
        }
      }
    }
  }
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
    border-color:#C3C7D0;
    color:#C3C7D0;
  }
  .red{
    border-color:#FF6666;
    color:#FF6666;
  }
  .admin_ui_input{
    position:absolute;
    right:20px;
    top:15px;
    left:auto;
    background-color: #D2E5F5;
    width: 230px;
    display: inline-block;
    line-height: 1;
    border-radius:5px;
  }
  .admin_ui_input>input{
    position: relative;
    width: 100%;
    height: 32px;
    line-height:1;
    font-size:12px;
    padding: 6px 30px 6px 12px;
    border: 1px solid #ccc!important;
    border-radius: 0;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: transparent;
    margin-bottom:0;
    color:#797979;
    border-radius:5px;
  }
  .admin_ui_input:before{
    position: absolute;
    right: 8px;
    top: 6px;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content:'\f002';
    color:#ebebeb;
    font-size:18px;
  }
  .input_position{
    width: 230px;
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 13px;
    input{
      background-color: #fafafa!important;
    }
  }
</style>
