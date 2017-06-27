<template>
  <!-- 批示管理中心 -->
  <div class="test">
    <div class="rightBar">
      <p>平台管理-管理中心：
        <span>共计处理了<span>136</span>份批示，今日收到批示和反馈<span>12</span>份</span>
      </p>
      <!-- <div class="admin_ui_input">
        <input type="" name="" placeholder="搜索批示和反馈的内容">
      </div> -->
      <el-input
        placeholder="搜索批示和反馈的内容"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.13="handleInputClick">
      </el-input>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <p>
          <span><img src="../../static/img/edit_reporter.png" alt="">收到的批示和反馈</span>
          <el-button type="success" class="button_style" @click="showPSBox">发起新流程</el-button>
          <!-- <span class="includeBtn_ green">发起新流程</span> -->
          <el-select v-model="value" placeholder="" @change="optionChangeHandler">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- <div class="admin_ui_select">
            <select id="themeBox">
              <option value="">全部内容</option>
              <option value="">已收录</option>
              <option value="">未收录</option>
            </select>
          </div> -->
        </p>
      </div>
      <div class="title_content">
        <ul>
          <li v-for="(item,index) in articlesFilter">
            <span>批示内容：<span>{{item.name}}</span>  - <span>{{item.time}}</span></span>
            <span class="includeBtn_" :class="(item.state!=0)?'orange':'grey'"><span>{{item.btn_con}}</span></span>
            <!-- <router-link to="/instructionsDetail"><span class="includeBtn"><span>查看</span><img src="../../static/img/arrow_blue.png" alt=""></span></router-link> -->
            <!-- <el-tag type="primary" class="label_style">有新反馈</el-tag> -->
            <router-link to="/instructionsDetail" :data-id="index"><el-button type="primary" class="button_style">{{(item.state!=0)?"批示处理":"查看详情"}}</el-button></router-link>
          </li>
          
        </ul>
      </div>
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
  name: 'test',
  data () {
    return {
       options: [{
          value: '1',
          label: '全部内容'
        }, {
          value: '2',
          label: '流程已结束'
        }, {
          value: '3',
          label: '新反馈'
        }, {
          value: '4',
          label: '新批示'
        }],
        value: '1',
        input2: '',
        articles:[
        {name:'国家“双一流”实施方案正式出台，预计2017年上半年公布名单',time:"2016/12/10",state:'0',btn_con:'流程已结束'},
        {name:'国家“111计划”基地5年评估一次，运行良好可滚动支持',time:"2016/12/10",state:'1',btn_con:'新反馈'},
        {name:'江苏省公布十三五期间重点学科名单，21所高校313个学科入选',time:"2016/12/10",state:'2',btn_con:'新批示'},
        {name:'测试文章1',time:"2016/12/10",state:'0',btn_con:'流程已结束'},
        {name:'测试文章2',time:"2016/12/10",state:'0',btn_con:'流程已结束'},
        {name:'测试文章3',time:"2016/12/10",state:'0',btn_con:'流程已结束'},
        ],
        articlesFilter:[]
    }
  },
  methods:{
    showPSBox:function(){
      $(".mask1").addClass("showBtn");
      $(".psBox").addClass("showBtn");
      $(".psBox").find(".article_btn").attr("disabled",false).removeClass("is-disabled");
      this.$store.dispatch('changeAlertBox',{"type":'0'}).then(function(resp){});
    },
    handleInputClick() {
      console.log("1");
      　this.articlesFilter=this.articles.filter(this.filterCallback_4); 
    },
    optionChangeHandler(val){
        if(val=='2'){
          this.articlesFilter=this.articles.filter(this.filterCallback_1);
        }
        else if(val=='1'){
          this.articlesFilter=this.articles
        }
        else if(val=='3'){
          this.articlesFilter=this.articles.filter(this.filterCallback_2);
        }
        else if(val=='4'){
          this.articlesFilter=this.articles.filter(this.filterCallback_3); 
        }
    },
    filterCallback_1(item,index,array){
      if(item.state=='0'){
        return true;
      }
    },
    filterCallback_2(item,index,array){
      if(item.state=='1'){
        return true;
      }
    },
    filterCallback_3(item,index,array){
      if(item.state=='2'){
        return true;
      }
    },
    filterCallback_4(item,index,array){//搜索过滤
      if(item.name.indexOf(this.input2)!=-1){
        return true;
      }
    }
  },
  mounted(){
    this.articlesFilter=this.articles;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../static/less/init.less';
  @import '../../static/less/instructions.less';
</style>
