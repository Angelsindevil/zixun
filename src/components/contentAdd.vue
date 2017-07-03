<template>
  <div class="contentAdd">
    <div class="rightBar">
      <p>内容编辑
      </p>
      <el-button class="btn_position">发布</el-button>
    </div>
    <div class="rightContent">
      <div class="title_bar">
        <el-form ref="form" :model="form">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
              <el-form-item label="类别：">
                <el-select v-model="form.type" placeholder="" @change="optionChangeHandler">
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="来源：">
                <el-input v-model="form.source" placeholder="请输入来源"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="来源链接：">
                <el-input v-model="form.link" placeholder="请输入链接"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="标题：">
            <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="公布日期：">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期"
             >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="正文：" class="item_new">
            <div class="editBox">
              <!-- <textarea id="tinymce"></textarea>
              <input type="file" name="" class="file_" id="my_form" style="display:none;">
               -->
                <div id="toolbar">
                  <span class="ql-formats">
                    <select class="ql-size">
                      <option value="10px">12px</option>
                      <option value="13px" selected>14px</option>
                      <option value="18px">16px</option>
                      <option value="32px">18px</option>
                    </select>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                    <button class="ql-underline"></button>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-list" value="ordered" type="button"></button>
                    <button class="ql-list" value="bullet" type="button"></button>
                    <select class="ql-align">
                      <option selected=""></option>
                      <option value="center"></option>
                      <option value="right"></option>
                      <option value="justify"></option>
                    </select>
                  </span>
                </div>
               <div id="editor"></div>
            </div>
          </el-form-item>
        </el-form>
        <div class="newBottom">
          <span class="rightBot">
            <span class="bg_blue">保存</span> 
            <span class="bg_cancle">取消</span> 
          </span>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import {matchMenu} from '../../static/js/public.js'
export default {
  name: 'test',
  data () {
    return {
       options: [{
          value: '0',
          label: '动态资讯'
        }, {
          value: '1',
          label: '学校新闻'
        }],
        form: {
          type:'0',
          source: '浙江省教育厅',
          link: 'http://www.news.zju.edu.cn/',
          title: '',
          date:'2016-05-11'
        },
    }
  },
  methods:{
    handleInputClick:function(){},
    optionChangeHandler(){},
  },
  mounted() {
    var quill = new Quill('#editor', {
      modules: {
        toolbar: '#toolbar',
      },
      theme: 'snow'
    });
  },
  created:function(){
    this.$nextTick(function(){
      matchMenu();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .contentAdd{
    .ql-editor{
      height:400px!important;
    }
    .rightContent{
      border:1px solid #eee;
    }
    .rightBar{
      position: relative;
      .btn_position{
        width:80px;
        position: absolute;
        right:20px;
        top:12px;
        color:#0099FF;
        font-size: 13px;
        background-color: #fafafa!important;
        padding:11px 15px;
      }
    }
    .title_bar{
      padding:20px;
    }
    .editBox{
      // border:1px solid rgba(0,0,0,0.2);
      // border-bottom:none;
      iframe{
        height:450px!important;
      }
      #editor{
        min-height:400px;
      }
      // border-radius:5px;

    }
    .el-form{
      height:auto;
      .el-form-item__label{
        width:85px;
      }
      .el-form-item__content{
        margin-left: 85px;
        .el-select{
          margin-left: 0;
          width: 100%;
        }
      }
      .el-date-editor.el-input{
        width:100%;
      }
      .el-row{
        .el-col{
          .el-form-item__label{
            width:85px;
          }
          .el-form-item__content{
            margin-left: 85px;
            .el-select{
              margin-left: 0;
              width: 100%;
            }
          }
        }
        .el-col:first-child{
          width:23%;
        }
        .el-col:nth-child(2){
          width:33%;
        }
        .el-col:last-child{
          width:44%;
          label{
            width:120px;
          }
          .el-form-item__content{
            margin-left: 120px;
          }
        }
      }
    }
  }
  .newBottom{
    width:100%;
    height:50px;
    position: relative;
    .rightBot{
      position: absolute;
      right: 0px;
      bottom: 0px;
      >span{
        vertical-align:middle;
        display:inline-block;
        margin:0 10px;
        height:32px;
        line-height:32px;
        width: 100px;
        float:right;
        font-size: 14px;
        color:#fff;
        text-align: center;
        border-radius:5px;
        cursor:pointer;
      }
    }  
    .bg_blue{
      background-color: #0099FF;
    }
    .bg_cancle{
      background-color: #ccc;
    }
  }
  .item_new{
    .el-form-item__content{
      line-height:1;
    }
  }
</style>
