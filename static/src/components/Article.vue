<template>
  <div class="article">
    <div class="title_bar">
      <p>湖南：每年遴选30名院士推荐名单，重点培养45岁以下人才！
      <span>
        <span>来源：<span>山东大学新闻网</span></span>
        <span>类别：<span>国家动态</span></span>
        <span>时间：<span>2014-06-11</span>&nbsp;&nbsp;<span>09:00</span></span>
      </span> 
      </p>
      <span class="includeBtn" @click="includeThis" @mouseover="canceInclude" @mouseout="includeThis_"><img src="../../static/img/plus.png" alt=""><span>收录</span></span>
    </div>
    <div class="content_bar">
      <div class="article_content">
        <p>
         今天上午，湖南省科协第十次全省代表大会闭幕。会议中《湖南省科协事业发展“十三五”规划纲要》（下称《规划》)获通过，明确了我省科协事业“十三五”期间的发展目标和主要任务。“十二五”是我省科协事业快速发展、成效明显的五年。《全民科学素质行动计划纲要》深入实施，全省公民具备科学素质比例达到5.14%，比“十一五”末提高2.96个百分点。根据《规划》，“十三五”时期我省将健全科协组织、创新创业服务和科学普及三大体系，并建设科技工作者之家、科普主题公园、科技传播中心等三大服务平台。同时，实施科技人才托举、创新驱动助力、科普惠民提升和精准扶贫科技助力等四大工程，打造“科技湘军”“科普湖南”“湖湘智库”“湖南智造”四大品牌建设。力争到“十三五”末，基本形成符合科技创新规律和湖南发展需要的科协事业发展体制机制。《规划》还提出，我省将继续深入实施《全民科学素质行动计划纲要(20162020年)》，创新科普机制，形成全方位联合协作的社会化科普大格局，力争到“十三五”末，全省公民具备科学素质
      </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'article',
  data () {
    return {
    }
  },
  methods:{
    doThis:function(){

    },
    includeThis_:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('grey');
      if(class_){
        el.removeClass("red").addClass("grey").find("span").text("已收录");
        el.find("img").attr("src","../../static/img/plus_grey.png");
      }
      else{
      }
    },
    canceInclude:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('grey');
      if(class_){
        el.addClass("red").find("span").text("取消收录");
        el.find("img").attr("src","../../static/img/reduce.png");
      }
    },
    includeThis:function(e){
      // store.includeThis_(e);
      e.stopPropagation();
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('red');
      if(class_){
        el.removeClass("grey red").find("span").text("收录");
        el.find("img").attr("src","../../static/img/plus.png");
      }
      else{
        el.addClass("grey").find("span").text("已收录");
        el.find("img").attr("src","../../static/img/plus_grey.png");
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../static/less/init.less';
  .article{
    width:100%;
    background-color: #fff;
  }
  .title_bar{
    position: relative;
    border-bottom: 1px solid #eee;
    padding:20px 40px;
    p{
      // font-size: 20px;
      font-size: 18px;
      color:#222;
      >span{
        display:block;
        width: 100%;
        padding: 20px 0;
        font-size:0;
        padding-bottom:0;
        >span{
          color:#868686;
          // font-size:14px;
          font-size: 12px;
          display:inline-block;
          width:25%;
        }
      }
    }
    img{
      display:inline-block;
      margin-bottom: -5px;
      margin-right: 10px;
      width: 25px;
      height: 22px;
    }
    .includeBtn{
      position: absolute;
      right:30px;
      top:30px;
      width:100px;
      height:30px;
      display:inline-block;
      border:1px solid #0099cc;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      text-align: center;
      // line-height: 30px;
      // font-size: 16px;
      font-size: 14px;
      line-height:32px;
      color: #0099cc;
      // color:#4183F0;
      cursor:pointer;
    }
  }
  .content_bar{
    width:100%;
    .article_content{
      padding:20px 40px;
      p{
        color:#656565;
        width: 100%;
        line-height: 35px;
        text-indent: 2em;
      }
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
</style>
