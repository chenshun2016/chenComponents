import Router from 'vue-router'
import vue from 'vue'
import index from '../views/index.vue'
import vuexRouter from './vuex'
import vueAnimation from './animation'

vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[{
        path:'/index',
        component:index
    },...vuexRouter,...vueAnimation]
})