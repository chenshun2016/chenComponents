<template>
    <div class="pageB">
        <div v-for="(item,index) in list" :key="index">{{item.name}}</div>
        <div>播放模式{{loop}}页面B</div>
        <div>当前播放索引：{{currentIndex}}</div>
        <div @click="goBack">goback</div>
        <test></test>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import test from '../components/test'
export default {
    components:{test},
    computed:{
        ...mapGetters(['list','playing','loop','currentIndex'])
    },
    mounted(){
        this.list.push({name:'我的单身狗好风光好'})
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .pageB{
        background: red;
    }
</style>