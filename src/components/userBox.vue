<template>
	<div class="userBox alertStyle" style="height:300px;">
      <div class="alertTop">新增消息<span @click="hideUserBox"><img src="../../static/img/cancel.png"></span></div>
      <div class="alertContent">
        <el-form ref="form" :model="form" label-width="85px">
          <el-row :gutter="20">
            <el-col :span="6">
               <el-form-item label="所属组织：">
                <el-input
                  placeholder="请选择"
                  icon="menu"
                  v-model="form.org"
                  @click="solvePeople();showCommonBox()"
                  @focus="solvePeople();showCommonBox()"
                  >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="用户账号：">
                <el-input v-model="form.account"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="用户姓名：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="角色权限：">
                <!-- <el-input
                  placeholder="请选择"
                  icon="menu"
                  v-model="form.accept"
                  @click="solvePeople();showCommonBox()"
                  @focus="solvePeople();showCommonBox()"
                  >
                </el-input> -->
                <el-select v-model="form.level" placeholder="" @change="optionChangeHandler">
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="状态：">
                <span>{{form.state}}</span> 
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 这应该是编辑的时候才有的字段 -->
        </el-form>
      </div>
      <div class="alertBottom">
        <span class="bg_green" @click="hideUserBox">确定</span> 
        <span @click="hideUserBox" class="bg_cancle">取消</span> 
      </div>
    </div>
</template>
<script>
	export default {
		name: 'app',
		data () {
		  return {
		    options: [{
		      value: '0',
		      label: '系统管理员'
		    }, {
		      value: '1',
		      label: '内容管理员'
		    }, {
		      value: '3',
		      label: '批示用户'
		    }, {
		      value: '4',
		      label: '普通用户'
		    }],
		    value2: '1',
		    form: {
		      org:'',
		      account: '',
		      name: '',
		      level: '1',
		      state:'正常'
		    },
		    input2:'',
		    input3:'',
		    radio: 0,
		    radio1:0,
		    radio2:0,
		    state2:'',
		    isSelect:false,
		    titleName:'文章选择',
		    phtext:'请输入文章标题',
		    labeltext:'文章标题',
		    // restaurants: [],
		    commonData:[],
		    allpsData:[
		      {value:'张三',i:0},
		      {value:'李四',i:1},
		      {value:'赵五',i:2},
		      {value:'王六',i:3},
		      {value:'关七',i:4},
		      {value:'李四1',i:5},
		      {value:'李四2',i:6},
		      {value:'李四3',i:7},
		      {value:'李四4',i:8},
		      {value:'李四5',i:9},
		      {value:'李四6',i:10},
		      {value:'李四7',i:11},
		      {value:'李四8',i:12},
		      {value:'李四9',i:13},
		    ],
		    psData:[],
		  }
		},
		methods:{
		  hideUserBox:function(){
		    $(".mask1,.userBox").removeClass("showBtn");
		  },
		  showCommonBox:function(){
		    this.state2='';
		    $(".mask2").addClass("showBtn");
		    $(".mask1").removeClass("showBtn");
		    // $(".articleBox").addClass("showBtn");
		  },
		  solvePeople:function(){
		    this.commonData=this.allpsData;
		    this.titleName='处理人选择';
		    this.phtext="请输入处理人姓名";
		    this.labeltext="人员姓名";
		    this.isSelect=true;
		    $(".multiBox").addClass("showBtn");
		    $(".printPs").removeClass("showBtn");
		    // this.currentView=AComponent;
		  },
		  optionChangeHandler(val){

		  },
		},
		mounted() {
		}

	}
</script>