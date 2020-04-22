<template>
    <div class="pageA">
        <div @click="pageAClick">A</div>
        <div>播放模式{{loop}}</div>
        <div class="play-list" v-for="(item,index) in list" :key="index" @click="setPlayingIndex(index)">{{item.name}}</div>
        <div @click="changeData">改变数据</div>
        <div @click="toPageB">B页面</div>
        <div>当前播放：{{currentIndex}}</div>
        <button @click="controlHide">hide</button>
        <transition name="fade">
            <img v-if="show" src="http://img5.imgtn.bdimg.com/it/u=3790014455,2670545218&fm=26&gp=0.jpg">
        </transition>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        ...mapActions(['changeList','setCurrentIndex']),
        pageAClick(){
            this.changeList({
              list:[{name:'爱你'},{name:'岁月神偷'},{name:'起风了'}],
              loop:2
            })
            // this.$router.push('/pageB')
        },
        changeData(){
            this.changeList({
              list:[{name:'爱你11'},{name:'岁月神偷11'},{name:'起风了11'}],
              loop:1
            })
        },
        toPageB(){
            this.$router.push('/pageB')
        },
        setPlayingIndex(index){
            this.setCurrentIndex(index)
        },
        controlHide(){
            this.show = !this.show
        }
    },
    computed:{
        ...mapGetters(['list','playing','loop','currentIndex']),
        mode(){
            return this.loop===0?'单曲循环':this.loop===1?'顺序播放':'随机播放'
        }
    },
    mounted(){
        console.log(this.list,3333,this.playing,this.loop)
    }
}
</script>

<style scoped>
    .pageA{
        background: yellow;
    }
    .fade-enter-active{
        animation: bounce-in .5s;
    }
    .fade-leave-active{
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in{
        0% {
            transform:rotate(0deg);
        }
        50% {
            transform:skew(20deg,30deg);
        }
        100% {
            transform:skew(130deg,40deg);
        }
    }
</style>