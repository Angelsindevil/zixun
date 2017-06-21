i<template>
  <div class="message">
    <div class="rightBar">
      <p>
        组织信息
      </p>
      <el-button class="btn_position" @click="showUserBox">新增</el-button>
      <el-input
        placeholder="搜索组织名称、上级单位"
        icon="search"
        v-model="input2"
        class="input_position" :on-icon-click="handleInputClick" @keyup.13="handleInputClick">
      </el-input>
    </div>
    <div class="rightContent">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="index"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="org"
          label="组织名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="level"
          label="层次"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="上级单位"
          >
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template scope="scope">
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>  
      </el-table>    
    </div>
    <div class="M-box"></div>
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
        input2:'',
        options: [{
          value: '1',
          label: '全部消息'
        }, {
          value: '2',
          label: '已读消息'
        }, {
          value: '3',
          label: '未读消息'
        }],
        value: '1',
        tableData: [
        {
          index: '1',
          org: '西安交通大学',
          level: '1',
          name: '西安交通大学',
        }, 
        {
          index: '2',
          org: '数据与信息中心',
          level:'2',
          name: '西安交通大学',
        }, 
      ]
      }
  },
  methods: {
    showSomething:function(){
      $(".mask").addClass("showBtn");
      $(".alertBox").addClass("showBtn");
    },
    optionChangeHandler:function(){

    },
    handleInputClick:function(){},
    showUserBox(){
      $(".mask1").addClass("showBtn");
      $(".orgBox").addClass("showBtn");
    },
  },
   created: function () {
      $('.M-box').pagination({
          totalData:100,
          showData:10,
          coping:true,
          homePage:'首页',
          endPage:'末页',
          prevContent:'上页',
          nextContent:'下页'
      });
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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
    .input_position{
      width: 240px!important;
      position: absolute!important;
      right: 10px;
      top: 12px;
      font-size: 12px;
      input{
        background-color: #fafafa!important;
      }
    }
    .btn_position{
      position: absolute;
      right:270px;
      top:12px;
      color:#0099FF;
      font-size: 12px;
      background-color: #fafafa!important;
      padding:11px 15px;
    }
  }
  .rightContent{
    border:none;
    // border: 1px solid #ccc;
    margin-top:15px;
    border-radius:5px;
    position: relative;
    background-color: #fff;
    .el-table{
      font-size: 13px!important;
    }
    .el-table .cell{
      font-size:  13px!important;
    }
    .el-table th{
      font-weight:500!important;
    }
  }
  .selectStyle{
    width: 120px;
    position: absolute;
    right: 10px;
    // top: 12px;
    font-size: 12px;
  }

</style>
