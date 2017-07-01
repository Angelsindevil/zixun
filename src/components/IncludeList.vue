<template>
  <div class="report">
    <div class="rightBar">
      <p>报告中心-收录管理：
        <span>今日收录<span>136</span>篇，选入报告<span>12</span>篇</span>
      </p>
      <!-- <div>
        <input type="" name="" placeholder="搜索已收录的内容">
      </div> -->
      <!-- <div class="admin_ui_input">
        <input type="" name="" placeholder="搜索已收录的内容">
      </div> -->
      <el-input
        placeholder="搜索已收录的内容"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.13="handleInputClick">
      </el-input>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <label for="selAll"><input type="checkbox" id="selAll" @click="checkAll">全选</label>
        <!-- <div class="switchBtn">
          <select name="" id="">
            <option value="">全部内容</option>
            <option value="">已生成报告</option>
            <option value="">未生成报告</option>
          </select>
        </div> -->
        <!-- <div class="admin_ui_select">
          <select id="themeBox">
            <option value="">全部内容</option>
            <option value="">已生成报告</option>
            <option value="">未生成报告</option>
          </select>
        </div> -->
        <el-select v-model="value" placeholder="" @change="optionChangeHandler" class="selectStyle">
        <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
        <span class="includeBtn_" id="reportProduce" @click="showSomething"><img src="../../static/img/report.png" alt=""><span>生成报告</span><span>8</span></span>
      </div>
      <div class="title_content">
        <ul>
          <li>
            <label for="selItem_1">
              <input type="checkbox" class="checkItem" @click="checkItem" id="selItem_1">
            </label>
            <span>2016年度国家科学技术奖正式公布，128所高校获奖 - <span>2016/12/10</span></span>
            <span class="includeBtn_"><span>未生成报告</span></span>
            <span class="includeBtn" @click="includeThis" @mouseover="canceInclude" @mouseout="includeThis_"><img src="../../static/img/plus.png" alt=""><span>收录</span></span>
          </li>
          <li>
            <label for="selItem_2">
              <input type="checkbox" class="checkItem" @click="checkItem" id="selItem_2">
            </label>
            <span>2016年度国家科学技术奖正式公布，128所高校获奖 - <span>2016/12/10</span></span>
            <span class="includeBtn_ grey"><span>已生成报告</span></span>
            <span class="includeBtn" @click="includeThis" @mouseover="canceInclude" @mouseout="includeThis_"><img src="../../static/img/plus.png" alt=""><span>收录</span></span>
          </li>
          <li>
            <label for="selItem_3">
              <input type="checkbox" class="checkItem" @click="checkItem" id="selItem_3">
            </label>
            <span>2016年度国家科学技术奖正式公布，128所高校获奖 - <span>2016/12/10</span></span>
            <span class="includeBtn_"><span>未生成报告</span></span>
            <span class="includeBtn" @click="includeThis" @mouseover="canceInclude" @mouseout="includeThis_"><img src="../../static/img/plus.png" alt=""><span>收录</span></span>
          </li>
        </ul>
      </div>
    </div>  
    <div class="rightBottom">
      <p>
      点击加载更多历史收录内容
      </p>
    </div>
    <!-- <ul v-sortable="{ onUpdate: onUpdate }">
      <li v-for="item in list">{{ item }}</li>
   </ul> -->
    <!-- <draggable :list="list" class="dragArea" @start="dragging=true" @end="dragging=false">
      <div v-for="element in list">{{element.name}}</div>
    </draggable> -->
  </div>
</template>
<script>
export default {
  name: 'report',
  components: {
   app
  },
  // props:['isActive'],
  data () {
    return {
       list:[{name:"Foo"}, 
          {name:"Bar"}, 
          {name:"Baz"},
           ],
        input2:'',
        options: [{
          value: '1',
          label: '全部内容'
        }, {
          value: '2',
          label: '已生成报告'
        }, {
          value: '3',
          label: '未生成报告'
        }],
        value: '3',
        }
    },
  methods: {
    showSomething:function(){
      $(".mask1").addClass("showBtn");
      $(".alertBox").addClass("showBtn");
    },
    checkAll:function(e){
      var flag=$(e.target).prop("checked");
      if(flag){
        $(".checkItem").prop("checked",true);
      }
      else{
        $(".checkItem").prop("checked",false);
      }
    },
    checkItem:function(e){
      var flag=$(e.target).prop("checked");
      var item=$('.checkItem');
      var count=0;
      if(flag){
        for (var i=0;i<item.length;i++) {
          var flag_=item.eq(i).prop("checked");
          if(flag_){
            count++;
          }
        }
        if(count==item.length){
          $("#selAll").prop("checked",true);
        }
      }
      else{
        $("#selAll").prop("checked",false);
      }
    },
    includeThis_:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('grey');
      if(class_){
        el.removeClass("red").addClass("grey").find("span").text("已收录");
        el.find("img").attr("src","./static/img/plus_grey.png");
      }
      else{
      }
    },
    canceInclude:function(e){
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('grey');
      if(class_){
        el.addClass("red").find("span").text("取消收录");
        el.find("img").attr("src","./static/img/reduce.png");
      }
    },
    includeThis:function(e){
      // store.includeThis_(e);
      e.stopPropagation();
      var el=$(e.target).closest(".includeBtn");
      var class_=el.hasClass('red');
      if(class_){
        el.removeClass("grey red").find("span").text("收录");
        el.find("img").attr("src","./static/img/plus.png");
      }
      else{
        el.addClass("grey").find("span").text("已收录");
        el.find("img").attr("src","./static/img/plus_grey.png");
      }
    },
    handleInputClick:function(){},
    optionChangeHandler(val){
    },
  }
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
  label{
    color:#777;
    font-size:16px;
    input{
      margin-right:15px;
    }
  }
  // .switchBtn{
  //   position: absolute;
  //   left: 100px;
  //   top:15px;
  //   border:1px solid #aaa;
  //   border-radius:5px;
  //   width:120px;
  //   line-height:1;
  //   select{
  //     border: none;
  //     background-color: transparent;
  //     height: 30px;
  //     width: 100px;
  //     background-color: #fff;
  //     color:#797979;
  //     text-indent: 1em;
  //     width:100%;
  //     padding: 6px 20px 6px 4px;
  //     appearance: none;
  //     -moz-appearance: none;
  //     -webkit-appearance: none;
  //   }
  //   &:before{
  //     // content:url('../../static/img/arrow.png');
  //     content:'';
  //     position: absolute;
  //     right:4px;
  //     top:7px;
  //     width:20px;
  //     height:16px;
  //     display:inline-block;
  //     background-image: url('../../static/img/arrow.png');
  //     background-size:16px 16px;
  //     background-repeat: no-repeat;
  //   }
  // }
  .rightContent{
    width:100%;
    margin-top:15px;
    border:1px solid #eee;
    background-color: #fff;
    border-radius:5px;
    .title_bar{
      padding:20px;
      font-size:20px;
      position: relative;
      border-bottom:1px solid #eee;
      img{
        display:inline-block;
        width: 17px;
        height: 17px;
        margin-right: 6px;
      }
      >label{
        color:#777;
        font-size:16px;
        input{
          margin-right:15px;
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
  .includeBtn,.includeBtn_{
    position: absolute;
    right:30px;
    top:22px;
    width:110px;
    height:30px;
    display:inline-block;
    border:1px solid #0099cc;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: #0099cc;
    border-radius:5px;
    >span:nth-child(3){
      display:inline-block;
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #FF6666;
      color: #fff;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      top: -8px;
      right: -6px;
    }
    img{
       display:inline-block;
        margin-bottom: -5px;
        margin-right: 15px;
        width: 25px;
        height: 22px;
    }
  }
  .title_content{
    ul{
      padding:0 20px;
      margin:0;
      li{
        font-size:14px;
        color:#333;
        width:100%;
        padding:30px 0;
        border-bottom:2px dashed #eee;
        position: relative;
        .includeBtn,.includeBtn_{
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        .includeBtn_{
          font-size: 13px;
          width: 80px;
          height: 25px;
          line-height: 25px;
          position: absolute;
          right:130px;
          top:28px;
        }
        .includeBtn{
          width:100px;
          position: absolute;
          right:0px;
          top:25px;
          cursor:pointer;
          font-size: 14px;
        }
      }
      li:last-child{
        border:none;
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
body.dragging, body.dragging * {
  cursor: move !important;
}

.dragged {
  position: absolute;
  opacity: 0.5;
  z-index: 2000;
}

ul.list-group li.placeholder {
  position: relative;
  /** More li styles **/
}
ul.list-group li.placeholder:before {
  position: absolute;
  /** Define arrowhead **/
}
#reportProduce{
  cursor:pointer;
}
.admin_ui_select,.admin_ui_input{
  position: absolute;
  left: 100px;
  top:15px;
  display: inline-block;
  width: 120px;
  line-height: 1;
  background-color: #fff;
  border-radius:5px;
}
.admin_ui_select > select,.admin_ui_input>input{
    position: relative;
    width: 100%;
    height: 32px;
    line-height:1;
    padding: 6px 20px 6px 12px;
    border: 1px solid #ccc!important;
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
.admin_ui_select:before,.admin_ui_input:before{
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
.admin_ui_input{
  position:absolute;
  right:20px;
  top:15px;
  left:auto;
  background-color: #D2E5F5;
  width: 230px;
}
.admin_ui_input>input{
  font-size:12px;
   padding: 6px 30px 6px 12px;
}
.admin_ui_input:before{
  content:'\f002';
  color:#fff;
  font-size:18px;
  top:6px;
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
.el-select{
  width:120px;
  margin-left:20px;
}
</style>
