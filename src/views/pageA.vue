<template>
    <div class="pageA">
        <div @click="pageAClick">A</div>
        <div>播放模式{{loop}}</div>
        <div class="play-list" v-for="(item,index) in list" :key="index" @click="setPlayingIndex(index)">{{item.name}}</div>
        <div @click="changeData">改变数据</div>
        <div @click="toPageB">B页面</div>
        <div>当前播放：{{currentIndex}}</div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
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
</style>