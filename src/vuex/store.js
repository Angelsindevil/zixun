import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)
const state = {
	selectArr:[],
	peopleObj:{
		value:'',
		radio:0,
	},
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store


