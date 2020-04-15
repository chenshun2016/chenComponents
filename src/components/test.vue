<template>
    <div>
        <div>模仿模式：{{mode}}</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['list','playing','loop','currentIndex']),
        mode(){
            console.log('尼玛炸了')
            return this.loop===0?'单曲循环':this.loop===1?'顺序播放':'随机播放'
        }
    },
}
</script>