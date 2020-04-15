import vue from 'vue'
import vuex from 'vuex'
import * as actions from './action'
import * as getters from './getters'
import mutations from './mutation'
import state from './state'

vue.use(vuex)

export default new vuex.Store({
    actions,
    getters,
    mutations,
    state
})




