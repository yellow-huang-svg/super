<template>
  <div class="shop">
      <!-- 导航-->
    <nav-bar class="home-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
      <!-- 商品列表-->
      <shop-list class="cart-list">
      </shop-list>
      <!-- 底部汇总-->
    <shop-bottom-bar></shop-bottom-bar>
  </div>
</template>


<script>
  import ShopList from "./childComps/ShopList";
  import {mapGetters} from 'vuex'

  import NavBar from "components/common/navbar/NavBar";
  import shopBottomBar from "./childComps/shopBottomBar";
  export default {
    name: "shop",
    components:{
      NavBar,
      ShopList,
      shopBottomBar
    },
    computed:{
      //两种语法
      // ...mapGetters([
      //   'cartLength',
      //   'cartList'
      // ]),
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
    },
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .shop{
    height: 100vh;
  }


</style>
