<template>
  <!-- 批示人选择弹窗 -->
  <div class="peopleBox alertStyle" style="z-index:5">
    <div class="alertTop">{{titleName}}<span @click="hideArtBox"><img src="../../static/img/cancel.png"></span></div>
    <div class="alertContent">
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        :placeholder="phtext"
        :trigger-on-focus="false"
        @select="handleSelect"
      ><el-button slot="append" icon="search"></el-button></el-autocomplete>
      <el-table
        class="article_table"
        :data="commonData"
        highlight-current-row
        @current-change="handleTableCurrentChange"
        style="width: 100%">
        <el-table-column
          label="选择"
          width="20%"
          >
          <template scope="scope">
            <el-radio class="radio" v-model="radio" :label="scope.row.i"></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="value"
          :label="labeltext"
          width="80%">
        </el-table-column>
      </el-table>
    </div>
    <div class="alertBottom">
      <span class="bg_green" @click="hideArtBox(),submit()">确定</span> 
      <span @click="hideArtBox" class="bg_cancle">取消</span>    
    </div>
  </div>
</template>
<script>
  export default {
    name: 'peopleBox',
    data () {
      return {
        input2:'',//这个值是其他模块的值，用vuex
        radio: 0,
        state2:'',
        isSelect:false,
        titleName:'批示人选择',
        phtext:'请输入批示人姓名',
        labeltext:'人员姓名',
        // restaurants: [],
        commonData:[],
        alltableData:[
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
        peopleObj:{},
      }
    },
    methods:{
      hideArtBox:function(){
        $(".mask2,.peopleBox").removeClass("showBtn");
        $(".mask1").addClass("showBtn");
      },
      querySearch(queryString, cb) {
        var alltableData = this.commonData;
        var results = queryString ? alltableData.filter(this.createFilter(queryString)) : alltableData;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) ===0);
        };
      },
      handleSelect(item) {
        // var el=event.currentTarget;
        console.log(item.value);
        for (var i=0;i<this.commonData.length;i++) {
          if(this.commonData[i].value==item.value){
            if(this.isSelect){
              this.commonSelHandler('.multiBox',i,item);
            }
            else{
              this.commonSelHandler('.articleBox',i,item);
            }
          }
        }
      },
      commonSelHandler(selector,i,item){
        $(selector).find(".article_table tbody").children("tr").removeClass("current-row");
        $(selector).find(".article_table tbody").children("tr").eq(i).addClass("current-row");
        this.radio=i;
        if(this.commonData==this.alltableData){
          this.currentRow=item.value;
          // this.radio1=this.radio;
        }
        else if(!this.isSelect){
          console.log("success");
          this.input2=item.value;
          // this.radio2=this.radio;
        }
        var height=$(selector).find(".article_table tbody").children("tr").eq(i).position().top;
        $(selector).find(".alertContent .el-table__body-wrapper").scrollTop(height)
      },
      handleTableCurrentChange(val){//点击具体表格中的条目
        console.log(val);
        if(val){
          if(this.commonData==this.alltableData){
            this.currentRow=val.value;
            // this.radio1=val.i;
          }
          else{
          }
          this.radio=val.i;
          this.peopleObj=val;
        }
      },
      handlePreData:function(val1){
        for (var i=0;i<val1.length;i++) {
          val1[i].i=i;
        }
        // var val2=val1.slice(0,6);
        // return val2;
        return val1;
      },
      submit(){
        this.$store.dispatch('changePleObj',{peopleObj:this.peopleObj}).then(function(resp){});
      },
    },
    mounted() {
      this.commonData=this.handlePreData(this.alltableData);
    }
  }
</script>