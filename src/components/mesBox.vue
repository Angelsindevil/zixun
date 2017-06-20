<template>
  <div class="mesBox alertStyle">
    <div class="alertTop">新增消息<span @click="hideMesBox"><img src="../../static/img/cancel.png"></span></div>
    <div class="alertContent">
      <el-form ref="form" :model="form" label-width="85px">
        <el-form-item label="消息标题：">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="消息内容：">
          <el-input type="textarea" v-model="form.area"></el-input>
        </el-form-item>
        <el-form-item label="接收人：">
          <el-input
            placeholder="请选择"
            icon="menu"
            v-model="form.accept"
            @click="solvePeople();showCommonBox()"
            @focus="solvePeople();showCommonBox()"
            >
          </el-input>
        </el-form-item>
        <el-form-item label="发送人：">
          <el-input v-model="form.send"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="alertBottom">
      <span class="bg_green" @click="hideMesBox">确定</span> 
      <span @click="hideMesBox" class="bg_cancle">取消</span> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        form: {
          title: '',
          area: '',
          accept: '',
          send: '',
        },
        state2:'',
        isSelect:false,
      }
    },
    methods:{
      hideMesBox:function(){
        $(".mask1,.mesBox").removeClass("showBtn");
      },
      showCommonBox:function(){
        this.state2='';
        $(".mask2").addClass("showBtn");
        $(".mask1").removeClass("showBtn");
      },
    },
    mounted() {
    }

  }
</script>