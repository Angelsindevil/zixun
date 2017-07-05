// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import draggable from 'vuedraggable'
import Echarts from 'vue-echarts'
import ElementUI from 'element-ui'
import store from './vuex/store'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueCookie);
/* eslint-disable no-new */
Vue.component('draggable', require('vuedraggable'));
Vue.component('chart',require('vue-echarts'));
var ECharts = require('vue-echarts');
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  draggable,
})
