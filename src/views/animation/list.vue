<template>
    <div>
        <button @click="addItem">添加</button>
        <!-- <button @click="deleteItem">删除</button> -->
        <scroll class="list-item" ref="listview" :data="lists" :listen-scroll="listenScroll" :probe-type="probeType">
            <transition-group tag="ul" name="list">
                    <li v-for="item in lists" :key="item.id" @click="deleteItem(item)">{{item.name}}</li>
            </transition-group>
        </scroll>
    </div>
</template>

<script>
/**
 * @description 列表动画
 */
import scroll from '../../baseComponents/scroll'
export default {
    components:{
        scroll
    },
    data(){
        return{
            lists:[{id:1,name:'sdfdsfds'},{id:2,name:'324234234'},{id:3,name:'dshfhdsjkfhdsjk'},{id:4,name:43264532},{id:5,name:8837284},{id:6,name:'sdfdsfds'},{id:7,name:'324234234'},{id:8,name:'dshfhdsjkfhdsjk'},{id:9,name:43264532},{id:10,name:8837284}],
        }
    },
    created(){
        this.num = 6,
        this.probeType = 3
        this.listenScroll=true
    },
    mounted(){
        // this.$nextTick(()=>{
        //     this.$refs.listview.refresh()
        // })
    },
    methods:{
        addItem(){
            const obj = {}
            obj.id = this.num
            obj.name = '陈舜'
            this.lists.unshift(obj)
            this.num++
        },
        deleteItem(it){
            const deleteIndex = this.lists.findIndex(item=>{
                return item.id === it.id
            })
            this.lists.splice(deleteIndex,1)
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        list-style-type: none;
    }
    .list-enter{
        opacity: 0;
        // transform: translate(100px);
    }
    .list-enter-active{
        transition: all .5s;
    }
    .list-leave-active{
        transition: all .5s;
    }
    .list-leave-to{
        opacity: 0;
        // transform: translate(100px);
    }
    .list-item{
        height: 200px;
    }
</style>