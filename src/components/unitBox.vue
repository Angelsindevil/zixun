<template>
  <!-- 上级单位选择弹窗 -->
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
        <div class="ztree" id="tree">
          <!-- <div class="treeHeader">
            <span>展开</span>
            <span>单位名称</span> 
            <span>选择</span>
          </div> -->
          <!-- <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          ref="tree"
          :default-expanded-keys="[1]"
          :default-checked-keys="[1]"
          :props="defaultProps">
          </el-tree> -->
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
  import {mapGetters} from 'vuex'
  export default {
    name: 'peopleBox',
    data () {
      return {
        input2:'',//这个值是其他模块的值，用vuex
        radio: 0,
        state2:'',
        isSelect:false,
        titleName:'',
        phtext:'',
        labeltext:'单位名称',
        // restaurants: [],
        commonData:[],
        setting:{
          check:{
            chkStyle:"radio",
            enable:true,
            radioType:'all',
          },
          data:{
            key:{
              children:"children",
              label:"label",
              id:"id"
            }
          },
          view: { 
            showIcon: false,
            showLine: false
          }
        },
        nodeAll:[],
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
        data2: [
        // {
        //   id: '1',
        //   name: '内容管理员',
        //   children: [{
        //     id: '4',
        //     name: '数据与信息中心',
        //   }]
        // }, {
        //   id:'2',
        //   name: '西安交通大学',
        //   children: [{
        //     id: '5',
        //     name: '组织1'
        //   }, {
        //     id: '6',
        //     name: '二级 2-2'
        //   }]
        // }, {
        //   id: '7',
        //   name: '三级',
        //   children: [{
        //     id: '7',
        //     name: '二级 3-1'
        //   }, {
        //     id: '3',
        //     name: '校长办公室'
        //   }]
        //   }
        ],
        defaultProps: {
          children: 'children',
          name: 'name'
        },
        rootObj:{},
        orgid:'',
        flag:'',
      }
    },
    computed: {
      ...mapGetters({
        userState: 'userState',
      })
    },
    watch:{
      userState:{
        handler: function (val, oldVal) {
          if(Object.keys(val).length!=0){
            var that=this;
            this.flag=val.type;
            if(this.flag=='organization'){
              this.titleName="上级单位选择";
              this.phtext="请输入需要搜索的上级单位";
              this.orgid=val.pid;
            }
            else if(this.flag=='user'){
              this.titleName="所属组织选择";
              this.phtext="请输入需要搜索的所属组织";
              this.orgid=val.orgid;//编辑时弹窗的渲染
            }
            else{}
            console.log(this.orgid);
            this.rootObj.expandAll(false);
            for(var i=0;i<this.nodeAll.length;i++){
              if(this.nodeAll[i].id==this.orgid){//编辑的渲染
                this.rootObj.checkNode(this.nodeAll[i], true, true);
                var node= this.nodeAll[i].getParentNode();
                this.rootObj.expandNode(node, true, true, true);
              }
            }
          }
          else{//表示新增
            // this.rootObj.expandNode(this.rootObj.getNodes()[0], true);
            // this.rootObj.checkNode(this.rootObj.getNodes()[0], true, true);
            var that=this;
            $.when(getOrgTree()).done(function(data){
              if(data.state=='0'){
                that.data2=data.data;
                that.initTree();
              }
            })
          }
        },
        deep:true,
        immediate: true,
      },
    },
    methods:{
      hideArtBox:function(){
        $(".mask2,.unitBox").removeClass("showBtn");
        $(".mask1").addClass("showBtn");
      },
      querySearch(queryString, cb) {
        var alltableData = this.alltableData;
        var results = queryString ? alltableData.filter(this.createFilter(queryString)) : alltableData;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      handleSelect(item) {
        for(var i=0;i<this.nodeAll.length;i++){
          if(item.value==this.nodeAll[i].name){
            this.rootObj.expandAll(false);
            this.rootObj.checkNode(this.nodeAll[i], true, true);
            var node= this.nodeAll[i].getParentNode();
            this.rootObj.expandNode(node, true, true, true);
            this.state2="";
          }
        }
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) ===0);
        };
      },
      submit(){
        this.orgid=this.rootObj.getCheckedNodes(true);//新增的时候，是默认第一个的。如果编辑页面，且没有勾选的情况下，显示userstate里面的
        this.$store.dispatch('changeUnitVal',{unitVal:this.orgid}).then(function(resp){});
      },
      initTree(){
        var that=this;
        $.fn.zTree.init($("#tree"), that.setting, that.data2);//insert
        that.rootObj=$.fn.zTree.getZTreeObj("tree");
        that.rootObj.expandNode(that.rootObj.getNodes()[0], true);
        that.rootObj.checkNode(that.rootObj.getNodes()[0], true, true);
        that.nodeAll = that.rootObj.transformToArray(that.rootObj.getNodes());
      },
    },
    mounted() {
      var that=this;
      // this.setCheckedKeys([7,8])
      // this.initTree();
      that.alltableData=that.nodeAll.map(function(value,index){
        return {
          value:value.name,
          id:value.id,
        }
      })
    },
    created(){
      var that=this;
      this.commonData=this.data2;
      $.when(getOrgTree()).done(function(data){
        if(data.state=='0'){
          that.data2=data.data;
          that.initTree();
        }
      })
    }
  }
</script>
<style lang="less">
  @import '../../static/less/tree.less';
  .unitBox{
    height:480px;
    margin-top:-240px;
    .alertContent{
      overflow:auto;
      height:300px;
    }
    .ztree *{
      font-size: 14px;
      color:#333;
    }
    #tree{
      a{
        color:#333;
      }
    }
  }
</style>