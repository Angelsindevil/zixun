<template>
	<div class="orgBox alertStyle">
      <div class="alertTop">新增消息<span @click="hideUserBox"><img src="../../static/img/cancel.png"></span></div>
      <div class="alertContent">
        <el-form ref="form" :model="form" label-width="100px">
          <el-row :gutter="20">
            <el-form-item label="组织名称：">
            <el-input v-model="form.org"></el-input>
          </el-form-item>
          <el-form-item label="上级单位：">
          <el-input
              placeholder="请选择"
              icon="menu"
              v-model="form.unit"
              @click="solvePeople();showCommonBox()"
              @focus="solvePeople();showCommonBox()"
              >
            </el-input>
          </el-form-item>
        </el-row>
          <!-- 这应该是编辑的时候才有的字段 -->
        </el-form>
      </div>
      <div class="alertBottom">
      	  <span class="leftBot">
	        <span class="user-dele"><img src="../../static/img/alert-delete.png">删除</span> 
	      </span>
	      <span class="rightBot">
	        <span class="bg_green" @click="hideUserBox">确定</span> 
        	<span @click="hideUserBox" class="bg_cancle">取消</span> 
	      </span>
      </div>
    </div>
</template>
<script>
	export default {
		name: 'app',
		data () {
		  return {
		    form: {
		      org:'',
		      unit: '',
		    },
		  }
		},
		methods:{
		  hideUserBox:function(){
		    $(".mask1,.orgBox").removeClass("showBtn");
		  },
		  showCommonBox:function(){
		    this.state2='';
		    $(".mask2").addClass("showBtn");
		    $(".mask1").removeClass("showBtn");
		    // $(".articleBox").addClass("showBtn");
		  },
		  solvePeople:function(){
		    $(".unitBox").addClass("showBtn");
		  },
		  optionChangeHandler(val){

		  },
		},
		mounted() {
		}

	}
</script>
<style lang="less">
	.orgBox{
		label{
			width:100px;
		}
		.el-form-item__content{
			margin-left:100px;
		}
		.el-input{
			width:95%;
		}
	}
</style>