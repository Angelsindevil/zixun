// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import draggable from 'vuedraggable'
import AllInfomation from './components/AllInfomation'
import Article from './components/Article'
import IncludeList from './components/IncludeList'
import reportList from './components/reportList'
import messageBox from './components/messageBox'
import DataStatistics from './components/DataStatistics'
import instructions from './components/instructions'
import feedback from './components/feedback'
import test from './components/test'
import managementCenter from './components/managementCenter'
import instructionsDetail from './components/instructionsDetail'
import Echarts from 'vue-echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = AllInfomation;
// const Bar = { template: '<div>bar</div>' };
// const article_ = Article;
// const include_ = IncludeList;
// const report_ = reportList;
// const message_ = messageBox;
// const statistics_ = DataStatistics;
// const instructions_=instructions;
// const instructionsDetail_=instructionsDetail;
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {path: '/consultation', component: AllInfomation},
  // {path: '/bar', component: Bar },
  {path:'/articleDetail',component:Article},
  {path:'/IncludeList',component:IncludeList},
  {path:'/ReportList',component:reportList},
  {path:'/messageBox',component:messageBox},
  {path:'/DataStatistics',component:DataStatistics},
  {path:'/instructions',component:instructions},
  {path:'/instructionsDetail',component:instructionsDetail},
  {path:'/feedback',component:feedback},
  {path:'/managementCenter',component:managementCenter},
  {path:'/test',component:test}
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
Vue.component('draggable', require('vuedraggable'));
Vue.component('chart',require('vue-echarts'));
var ECharts = require('vue-echarts');
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  draggable,
})
