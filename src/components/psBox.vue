<template>
  <div class="psBox alertStyle">
    <div class="alertTop">信息批示<span @click="hidePSBox"><img src="../../static/img/cancel.png"></span></div>
    <div class="alertContent">
      <el-button class="article_btn" @click="showAllArticle();showCommonBox()"><img src="../../static/img/report.png" alt="">批示文章：<span>{{currentRow}}</span></el-button>
      <div class="editContainer">
        <p>输入批示内容</p>
        <div class="editBox">
          <textarea id="tinymce"></textarea>
          <input type="file" name="" class="file_" id="my_form" style="display:none;">
        </div>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple">
          <span class="typeLabel">类型：</span>
          <el-select v-model="value" placeholder="请选择" class="typeChoose">
            <el-option
              v-for="item in type"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light" @click="psPeople();showCommonBox()">
          <span class="typeLabel">批示人：</span>
          <el-input
            placeholder="请选择"
            icon="menu"
            v-model="input2"
            class="typeChoose_"
            >
          </el-input>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" @click="solvePeople();showCommonBox()">
          <span class="typeLabel">处理人：</span>
          <el-input
            placeholder="请选择"
            icon="menu"
            v-model="input3"
            class="typeChoose_">
          </el-input>
        </div></el-col>
      </el-row>
    </div>
    <div class="alertBottom">
        <div>
          <span><img src="../../static/img/link.png" alt="">上传附件</span>
          <span><span>附件：</span>双一流政策研究报告</span>
        </div>
        <div>
          <span class="bg_green" @click="hidePSBox">确定</span> 
          <span class="bg_blue printPs"><img src="../../static/img/print.png" alt="">打印批示</span> 
          <span @click="hidePSBox" class="bg_cancle">取消</span> 
        </div>
      </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
     name: 'app',
  data () {
    return {
      type:[
      {value:'0',
      label:'批示'},
      {value:'1',
      label:'批示1'},
      {value:'2',
      label:'批示2'},
      ],
      value:'0',
      input2:'',
      input3:'',
      state2:'',
      currentRow:'国家“111计划”基地5年评估一次，运行良好可滚动支持',
    }
  },
  computed: {
    ...mapGetters({
      selectArr: 'selectArr',
      peopleObj:'peopleObj',
    })
  },
  watch:{
    selectArr:{
      handler: function (val, oldVal) {//监听学校和指标数组，只要学科id没有变化，则不变化
        console.log(val);
        // for (var i=0;i<val.length;i++) {
        //   this.input3+=val[i]+' ';
        // }
        if(val.length<2){
          this.input3=val[0];
        }
        else{
          this.input3=val[0]+'...';
        }
      },
      deep:true,
      immediate: true,
    },
    peopleObj:{
      handler: function (val, oldVal) {//监听学校和指标数组，只要学科id没有变化，则不变化
        console.log(val);
        this.input2=val.value;
      },
      deep:true,
      immediate: true,
    }
  },
  methods:{
    hidePSBox:function(){
      $(".mask1,.psBox").removeClass("showBtn");
      $(".psBox").removeClass("alertStyle_");
      $(".el-row").removeClass("show_row");
    },
    showAllArticle:function(){
      $(".articleBox").addClass("showBtn");
      $(".printPs").addClass("showBtn");
    },
    showCommonBox:function(){
      this.state2='';
      $(".mask2").addClass("showBtn");
      $(".mask1").removeClass("showBtn");
    },
    psPeople:function(){
      $(".peopleBox").addClass("showBtn");
      $(".printPs").removeClass("showBtn");
    },
    solvePeople:function(){
      $(".multiBox").addClass("showBtn");
      $(".printPs").removeClass("showBtn");
    },
  },
    mounted() {
      editor.render();
      // tinymce.get('tinymce').setContent('请发展规划处等抓紧时间研究国家双一流方案的细则，特别是教育部有关部门的解读（如批示是由纸质材料批示，则由数据与信息中心发起流程并人工输入）');
    }
  }
  var editor =  new tinymce.Editor('tinymce', {
  selector: '#tinymce',
  height: 200,
  theme: 'modern',
  language: 'zh_CN',
  menubar: false,
  plugins: [
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      // 'searchreplace wordcount visualblocks visualchars code fullscreen',dsd
      'insertdatetime media nonbreaking save table contextmenu directionality',
      'emoticons template paste textcolor colorpicker textpattern imagetools'
  ],
  toolbar1: 'insertfile undo redo | fontsizeselect styleselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image print | preview media',
  // toolbar2: 'print preview media | forecolor backcolor | example',
  setup: function(ed) {
  },
  fontsize_formats: "12px 14px 18px 24px 36px 48px 60px 72px 84px 96px 108px 120px",
  image_advtab: true,
  relative_url: false,
  templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' }
  ],
  content_css: [
      './static/css/tinymce.css'
  ],
  file_browser_callback: function(field_name, url, type, win) {
      if(type=='image') 
      {
          $('#my_form').click();
          $("#my_form").on("change", function(e){
              type_arr=[];
              var file = e.target.files; //获取图片资源
              for(var i=0; i< file.length; i++){
                  var formData = new FormData();  
                  formData.append("file" , file[i]);
                  $.when(getImgUrl(formData)).done(function(data){
                      if(data.state==0){
                          var order=data.order;
                          var photo_=order[0].file;
                          win.document.getElementById(field_name).value = photo_;
                      }
                  })
              }
          });
      };

  },
}, tinymce.EditorManager);
</script>