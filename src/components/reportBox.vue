
<template>
    <div class="alertBox alertStyle reporterBox">
        <div class="alertTop">报告顺序确认<span @click="hideBox"><img src="../../static/img/cancel.png"></span></div>
        <div class="alertContent">
          <draggable :list="list" class="dragArea" @start="dragging=true" @end="dragging=false">
            <div v-for="(element,index) in list"  class="dragItem">
              <div class="title_bar">
                <img src="../../static/img/report.png" alt="">
                <span class="title_1">{{element.title}}<span class="dateStyle">收录时间&nbsp;:&nbsp;&nbsp;<span>{{element.date}}</span></span></span> 
                <img src="../../static/img/cancel_1.png" alt="" class="removeItem" @click="removeItem(index)">  
              </div>      
            </div>
          </draggable>
        </div>
        <div class="alertBottom">
          <span class="leftBot">
            <span><span class="rightDot">*</span>拖动即可排序</span>
          </span>
          <span class="rightBot">
            <span class="bg_blue" style="font-size:13px;width:110px" @click="build(),showCommonBox()"><img src="../../static/img/word.png" alt="">生成WORD</span> 
            <span class="bg_red" style="font-size:13px;"><img src="../../static/img/pdf.png" alt="">生成PDF</span> 
            <span @click="hideBox" class="bg_cancle">取消</span>  
          </span>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {scrollFun,matchMenu} from '../../static/js/public.js'
  export default {
    name: 'app',
    data () {
      return {
        list:[
          // {title:"2014年度国家科学技术奖正式公布，128所高校获奖 -",date:'2016/12/10',id:'001'}, 
          // {title:"2015年度国家科学技术奖正式公布，128所高校获奖 -",date:'2016/12/11',id:'002'},
          // {title:"2016年度国家科学技术奖正式公布，128所高校获奖 -",date:'2016/12/12',id:'003'},
        ],
        userSource:{},
        userid:'',
        article_id:[],
      }
    },
    computed: {
      ...mapGetters({
        reportObj: 'reportObj',
      })
    },
    watch:{
      reportObj:{
        handler: function (val, oldVal) {
          // if(Object.keys(val).length!=0){
          if(val&&val.length!=0){
            this.list=val.map(function(value,index){
              return{
                title:value.title,
                date:value.date,
                id:value.id,
              }
            })
          }
        },
        deep:true,
        immediate: true,
      },
    },
    methods:{
      hideBox:function(){
        $(".mask1,.alertBox").removeClass("showBtn");
      },
      removeItem:function(index){
        var self=this;
        if(confirm("确认移除该篇文章？")){
          self.list.splice(index,1);
        }
      },
      build(){
        var that=this;
        console.log(this.list);
        this.article_id=this.list.map(function(value,index){
          return value.id;
        })

        var testData={
          'id':'01',
          'name':'word测试名称',
          'link':'www.baidu.com'
        }//测试

        this.$store.dispatch('changeWord',{wordObj:testData}).then(function(resp){});//测试


        $.when(buildWord(that.userid,that.article_id)).done(function(data){
          if(data.state=="0"){
            this.$store.dispatch('changeWord',{wordObj:data.data}).then(function(resp){});
          }
          else{
            // alert(data.data);
          }
        })
      },
      showCommonBox:function(){
        $(".mask2,.wordBox").addClass("showBtn");
        $(".mask1").removeClass("showBtn");
      },
    },
    mounted() {
    },
    created: function () {
      this.$nextTick(function(){
        matchMenu();
      })
      this.userSource=JSON.parse(localStorage.getItem("userSource"));
      this.userid=this.userSource?this.userSource.id:'';
    }
  }
</script>
<style lang="less">
  .reporterBox{
    .title_1{
      color:#333;
    }
    .dragItem{
      img{
        width:23px;
        height:23px;
      }
    }
    .alertContent{
      max-height: 240px;
      overflow-y:auto;
    }
    .alertBottom{
      border-top: 1px solid #e4e4e4;
      padding-top: 15px;
      .leftBot span{
        width:110px;
        color:#999;
        font-size: 14px;
        .rightDot{
          margin-right:5px;
          float: none;
          color:#f33;
          display: inline;
          vertical-align: -webkit-baseline-middle;
        }
      }
    }
    .dateStyle{
      position: absolute;
      right: 75px;
      top: 25px;
      color:#666!important;
      line-height: 15px;
      span{
        color:#999;
        vertical-align:middle;
      }
    }
  }
</style>