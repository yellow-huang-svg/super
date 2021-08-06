<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="ActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed:{
      isActive(){
        // /home -> item1(/home) =true
        // /home -> item1(/category) =false
        // /home -> item1(/shop) =false
        // /home -> item1(/profile) =false
        return this.$route.path == this.path
        //return this.$route.path.indexOf(this.path) !==-1
      },
      ActiveStyle(){
        //如果isActive为活跃的话，如果为true则color为this.activeColor，否则为空对象
        return this.isActive ? {color:this.activeColor} :{}
      }
    },
    //父传子，在子组件加props
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'blue',
      }
    },
    methods:{
      itemClick:function () {
        this.$router.replace(this.path)//防止点击2次出现报错加.catch(err=>{})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
