<template>
    <div class="bar-wrapper">
        <loading></loading>
        <progress-bar @percentChange="percentChange"></progress-bar>
    </div>
</template>

<script>

export default {
  data(){
      return {
          
      }
  },
  computed: {
    
  },
  methods: {
     percentChange(percent){
        console.log('当前进度',percent)
     }
  }  
}
</script>

<style lang="scss" scoped>
    .bar-wrapper{
        width: 80%;
        margin: 0 auto;
    }
</style>