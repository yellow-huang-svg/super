<template>
  <div class="shop-list">
    <scroll class="content" ref="scroll">
      <shop-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></shop-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import ShopListItem from "./ShopListItem";
  import {mapGetters} from 'vuex'
  export default {
    components:{
      ShopListItem,
      Scroll
    },
    name: "ShopList",
    computed:{
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  /*.shop-list{*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  width: 100%;*/
  /*}*/

  .content{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
</style>
