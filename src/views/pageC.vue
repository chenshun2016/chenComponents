<template>
    <div class="bar-wrapper">
        <progress-bar></progress-bar>
    </div>
</template>

<script>

import progressBar from '../components/bar'
export default {
  components:{progressBar},
  data(){
      return {
          
      }
  },
  computed: {
    
  },
  methods: {
     
  }  
}
</script>

<style lang="scss" scoped>
    .bar-wrapper{
        width: 80%;
        margin: 0 auto;
    }
</style>