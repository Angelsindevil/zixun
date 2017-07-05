<template>
  <div class="message">
    <div class="rightBar">
      <p>
        系统维护-消息管理
      </p>
      <el-button class="btn_position" @click="showMesBox">发送新消息</el-button>
      <!-- <el-input
        placeholder="搜索消息标题"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.native.enter='handleInputClick'>
      </el-input> -->
      <el-select v-model="value" placeholder="" @change="optionChangeHandler" class="selectStyle">
        <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="rightContent">
      <table>
        <thead>
          <tr>
            <td>消息内容</td>
            <td>接收时间</td>
            <td>发送人</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filterArray" @click="showDetail(item.id)" :class="item.isRead=='1'?'grey':''">
            <td>{{item.title}}</td>
            <td>{{item.time}}</td>
            <td>{{item.sender}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="rightBottom" ref="rightBottom" @click="loadMore">
      <p>
      点击加载更多内容
      </p>
    </div>
  </div>
</template>
<script>
import {scrollFun,matchMenu} from '../../static/js/public.js'
export default {
  name: 'report',
  components: {
   app
  },
  // props:['isActive'],
  data () {
    return {
        input2:'',
        options: [{
          value: '0',
          label: '全部消息'
        }, {
          value: '1',
          label: '已读消息'
        }, {
          value: '2',
          label: '未读消息'
        }],
        value: '1',
        filterArray:[],
        type:'',
        userId:'',
        userSource:{},
        testData:{
          list:[
             {
              'id':'001',
              'time':'2016-12-13 16:24',
              'sender':'Admin ',
              'title':"今日更新文章31篇！可点击海外动态进行查看！",
              'isRead':'0',
            },
            {
              'id':'002',
              'time':'2016-12-13 16:24',
              'sender':'Admin ',
              'title':"今日更新文章32篇！可点击海外动态进行查看！",
              'isRead':'1',
            }
          ],
          totalNum:'139',
          todayNum:'12',
        },
        pageNo:1,
        category:'2',
      }
  },
  watch: { 
    '$route': 'searchThis'
  },
  methods: {
    showSomething:function(){
      $(".mask").addClass("showBtn");
      $(".alertBox").addClass("showBtn");
    },
    optionChangeHandler:function(val){
      this.category=val;
      $.when(getMessageList(this.userId,this.type,this.pageNo,this.category)).done(function(data){
        if(data.state=="0"){
          that.insertData(data.data);
          // that.filterArray=data.data.results;有用
        }
        else{
          alert(data.data);
        }
      })
    },
    handleInputClick:function(val){
      this.pageNo=1,
      $.when(getSearchMesList(this.userId,this.type,this.pageNo,val)).done(function(data){
        if(data.state=="0"){
          that.insertData(data.data);
          // that.filterArray=data.data.results;有用
        }
        else{
          alert(data.data);
        }
      })
    },
    showMesBox(){
      $(".mask1").addClass("showBtn");
      $(".mesBox").addClass("showBtn");
    },
    showDetail(id){
      $(".mask1").addClass("showBtn");
      $(".mesDetailBox").addClass("showBtn");
      this.$store.dispatch('changeMesId',{mesId:id}).then(function(resp){});
    },
    searchThis(){
      this.pageNo=1,
      this.type = this.$route.query.type;//type=0-消息管理（只有系统管理员可见），type=1-系统消息
      this.userSource=JSON.parse(localStorage.getItem("userSource"));
      this.userId=this.userSource?this.userSource.id:'';
      if(this.type=='0'){//消息管理页面可以新增消息
        this.$nextTick(function(){
          $(".btn_position").show();
        })
      }
      else{//系统消息
        this.$nextTick(function(){
          $(".btn_position").hide();
        })
      }
      this.filterArray=this.testData.list;
      var that=this;
      $.when(getMessageList(this.userId,this.type,this.pageNo,this.category)).done(function(data){
        if(data.state=="0"){
          that.insertData(data.data);
          // that.filterArray=data.data.results;有用
        }
        else{
          alert(data.data);
        }
      })
    },
    insertData(data){
      var that=this;
      var res=data;
      var len=that.filterArray.length;
      that.totalNum=res.totalNum;
      that.todayNum=res.todayNum; 
      if(res.list&&res.list.length!=0){
        $(that.$refs.rightBottom).children('p').text('点击加载更多消息');
        res.list.map(function(value,index){
          that.filterArray.push(value);
        })
      }
      else{
        if(that.pageNo==1){//只一页
          $(that.$refs.rightBottom).children('p').text('暂无消息');
          that.filterArray=[];
        }
        else{//多余一页
          $(that.$refs.rightBottom).children('p').text('暂无更多消息');
        }
      }
    },
    loadMore(){
      this.pageNo=this.pageNo+1;
      console.log(this.pageNo);
      var that=this;
      if(this.input2==""){
        $.when(getMessageList(this.userId,this.type,this.pageNo,this.category)).done(function(data){
          if(data.state=="0"){
            that.insertData(data.data);
          }
          else{
            alert(data.data);
          }
        })
      }
      else{
        $.when(getSearchMesList(this.userId,this.type,this.pageNo,this.input2)).done(function(data){
          if(data.state=="0"){
            that.insertData(data.data);
          }
          else{
            alert(data.data);
          }
        })
      }
    },
  },
  created: function () {
    this.$nextTick(function(){
      matchMenu();
    })
    this.searchThis();

    // this.insertData(this.testData);//localTest

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
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
        font-size: 18px;
      }
    }
    .btn_position{
      right:150px!important;
    }
  }
  .rightContent{
    border: 1px solid #ccc;
    margin-top:15px;
    border-radius:5px;
    position: relative;
    background-color: #fff;
  }
  table{
    width:100%;
    border-collapse:collapse;
    thead{
      tr{
        border-bottom: 1px solid #ccc;
        font-weight: 600;
      }
      td{
        padding:20px;
        text-align: center;
      }
    }
    tbody{
      tr{
        cursor:pointer;
        font-size:15px;
        color:#333;
        td{
          padding: 30px 20px;
          text-align: center;
        }
        td:nth-child(1){
          text-align: left;
        }
      }
      tr:after{
        // content: '';
        // position: absolute;
        // left: 20px;
        // right: 20px;
        // height: 1px;
        // background-color: #ccc;
        content: '';
        position: absolute;
        left: 20px;
        right: 20px;
        border-bottom: 2px dashed #e4e4e4;
      }
      tr:first-child{
        &:after{
          content: '';
          position: absolute;
          left: 20px;
          right: 20px;
          border-bottom:none;
        }
      }
      .readAlready{
        color:#ccc;
      }
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
    width: 120px;
    position: absolute;
    right: 10px;
    // top: 12px;
    font-size: 12px;
  }

  .input_position{
    width: 150px;
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 12px;
    input{
      background-color: #fafafa!important;
    }
  }
  .btn_position{
    position: absolute;
    right:80px;
    top:12px;
    color:#0099FF;
    font-size: 12px;
    background-color: #fafafa!important;
    padding:11px 15px;
  }
  .grey{
    color:#ccc;
  }
  .selectStyle{
    width: 120px;
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 12px;
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
</style>
