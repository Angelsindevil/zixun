<template>
	<div class="userBox alertStyle">
      <div class="alertTop">用户编辑<span @click="hideUserBox"><img src="../../static/img/cancel.png"></span></div>
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
                <el-input v-model="form.account" :disabled="accountState"></el-input>
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
          <el-row :gutter="20" class="stateRow">
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
        <span class="leftBot">
          <span class="user-wf" @click="cancelUser"><img src="../../static/img/zhuxiao.png">注销</span>   
          <span class="user-dele" @click="deleteUser"><img src="../../static/img/alert-delete.png">删除</span> 
        </span>
        <span class="rightBot">
          <span class="bg_green" @click="hideUserBox(),operateUser()" >确定</span> 
          <span @click="hideUserBox" class="bg_cancle">取消</span> 
        </span>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
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
		    form: {
		      org:'',
		      account: '',
		      name: '',
		      level: '1',
		      state:'正常'
		    },
        userid:'',
        orgid:'',
        accountState:false,
		  }
		},
    computed: {
      ...mapGetters({
        userState: 'userState',
        unitVal: 'unitVal',
      })
    },
    watch:{
      userState:{
        handler: function (val, oldVal) {//
          if(Object.keys(val).length!=0){
            var level=this.levelJudge(val.level); 
            // this.$set()
            this.form.org=val.org;
            this.form.account=val.account;
            this.form.name=val.name;
            this.form.level=level;
            this.form.state=val.state;
            this.userid=val.id;
            this.orgid=val.orgid;
            this.accountState=true;
          }
          else{//表示新增
            this.form={
              org:'',
              account: '',
              name: '',
              level: '1',
              state:'正常',
            };
            this.userid="";
            this.orgid="";
            this.accountState=false;
          }
        },
        deep:true,
        immediate: true,
      },
      unitVal:{
        handler: function (val, oldVal) {//获得组织id
          console.log(val);
          this.orgid=val;
        },
        deep:true,
        immediate: true,
      }
    },
		methods:{
      levelJudge(value){
        if(value=='系统管理员'){
          return "0";
        }
        else if(value=='内容管理员'){
          return "1";
        }
        else if(value=='批示用户'){
          return "2";
        }
        else if(value=='普通用户'){
          return "3";
        }
        else{}
      },
		  hideUserBox:function(){
		    $(".mask1,.userBox").removeClass("showBtn userBoxAdd");
		  },
		  showCommonBox:function(){
		    this.state2='';
		    $(".mask2").addClass("showBtn");
		    $(".mask1").removeClass("showBtn");
		  },
		  solvePeople:function(){
		    $(".unitBox").addClass("showBtn");
		  },
		  optionChangeHandler(val){
		  },
      operateUser(){
        if(this.userid==""){//userid哪里来的
          $.when(addUsers(this.orgid,this.form.account,this.form.name,this.form.level)).done(function(data){
            if(data.state=="0"){
              var res=data.data;
            }
          })
        }
        else{
          $.when(addUsers(this.userid,this.orgid,this.form.account,this.form.name,this.form.level)).done(function(data){
            if(data.state=="0"){
              var res=data.data;
            }
          })
        }
      },
      cancelUser(){
        $.when(cancelUsers(this.userid)).done(function(data){
          if(data.state=="0"){
            var res=data.data;
          }
        })
      },
      deleteUser(){
        $.when(deleteUsers(this.userid)).done(function(data){
          if(data.state=="0"){
            var res=data.data;
          }
        })
      }
		},
		mounted() {
		},
    created(){
    }
	}
</script>