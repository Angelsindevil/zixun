
<template>
    <div class="alertBox alertStyle">
        <div class="alertTop">报告顺序确认<span @click="hideBox"><img src="../../static/img/cancel.png"></span></div>
        <div class="alertContent">
          <draggable :list="list" class="dragArea" @start="dragging=true" @end="dragging=false">
            <div v-for="(element,index) in list"  class="dragItem">
              <div class="title_bar">
                <img src="../../static/img/report.png" alt="">
                <span>{{element.title}}<span>{{element.time}}</span></span> 
                <img src="../../static/img/cancel_1.png" alt="" class="removeItem" @click="removeItem(index)">  
              </div>      
            </div>
          </draggable>
        </div>
        <div class="alertBottom">
          <span class="bg_blue"><img src="../../static/img/word.png" alt="">生成WORD</span> 
          <span class="bg_red"><img src="../../static/img/pdf.png" alt="">生成PDF</span> 
          <span @click="hideBox" class="bg_cancle">取消</span> 
        </div>
    </div>
</template>
<script>
    export default {
      name: 'app',
      data () {
        return {
          list:[{title:"2014年度国家科学技术奖正式公布，128所高校获奖 -",time:'2016/12/10'}, 
              {title:"2015年度国家科学技术奖正式公布，128所高校获奖 -",time:'2016/12/11'},
              {title:"2016年度国家科学技术奖正式公布，128所高校获奖 -",time:'2016/12/12'},
               ],
        }
      },
      methods:{
        hideBox:function(){
          $(".mask1,.alertBox").removeClass("showBtn");
        },
        removeItem:function(index){
          var self=this;
          self.list.splice(index,1);
        },
      },
      mounted() {
      }
    }
</script>