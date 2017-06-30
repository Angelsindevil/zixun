<template>
  <!-- 批示人选择弹窗 -->
  <div class="unitBox alertStyle" style="z-index:5">
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
      <!-- <el-table
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
        </el-table-column> -->
        <div class="treeBox">
          <!-- <div class="treeHeader">
            <span>展开</span>
            <span>单位名称</span> 
            <span>选择</span>
          </div> -->
          <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          ref="tree"
          :default-expanded-keys="[1]"
          :default-checked-keys="[1]"
          :props="defaultProps">
          </el-tree>
        </div>
      </el-table>
    </div>
    <div class="alertBottom">
      <span class="rightBot">
        <span class="bg_green" @click="hideArtBox(),submit()">确定</span> 
        <span @click="hideArtBox" class="bg_cancle">取消</span>    
      </span>
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
        titleName:'上级单位选择',
        phtext:'请输入需要搜索的上级单位',
        labeltext:'单位名称',
        // restaurants: [],
        commonData:[],
        // alltableData:[
        //   {value:'张三',i:0},
        //   {value:'李四',i:1},
        //   {value:'赵五',i:2},
        //   {value:'王六',i:3},
        //   {value:'关七',i:4},
        //   {value:'李四1',i:5},
        //   {value:'李四2',i:6},
        //   {value:'李四3',i:7},
        //   {value:'李四4',i:8},
        //   {value:'李四5',i:9},
        //   {value:'李四6',i:10},
        //   {value:'李四7',i:11},
        //   {value:'李四8',i:12},
        //   {value:'李四9',i:13},
        // ],
        // peopleObj:{},
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods:{
      hideArtBox:function(){
        $(".mask2,.unitBox").removeClass("showBtn");
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
      },
      getCheckedKeys(leafOnly) {//接受一个值为true的参数（表示仅接受叶子结点）
        return this.$refs.tree.getCheckedKeys(leafOnly);
      },
      setCheckedKeys(keys) {//可以deep向上到父节点
        this.$refs.tree.setCheckedKeys(keys);
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
      submit(){
        var orgid=this.getCheckedKeys(true);
        console.log(orgid);
        this.$store.dispatch('changeUnitVal',{unitVal:orgid}).then(function(resp){});
      },
    },
    mounted() {
      this.setCheckedKeys([7,8])
    },
    created(){
      var that=this;
      $.when(getOrgTree()).done(function(data){
        if(data.state=='0'){
          that.data2=data.data;
        }
      })
    }
  }
</script>