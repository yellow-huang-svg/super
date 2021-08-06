<template>
  <div class="tap-control">
    <div v-for="(item,index) in titles"
         class="tap-control-item" :class="{active:index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TapControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)

      }
    }
  }
</script>

<style scoped>
  .tap-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tap-control-item{
    flex:1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom :3px solid var(--color-tint);
  }
  .tap-control-item span{
    padding:5px;
  }
</style>
