<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tap-control :titles="['新款','流行','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixed">
    </tap-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-view></feature-view>
      <tap-control :titles="['新款','流行','精选']"
                   @tabClick="tabClick"
                   ref="tabControl2">
      </tap-control>
      <good-list :goods="showgoods"></good-list>
     </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import tapControl from "components/content/tabControl/TapControl";
  import GoodList from "components/content/goods/GoodsList";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  import HomeSwiper from "./childHome/HomeSwiper";
  import RecommendView from "./childHome/RecommendView";
  import FeatureView from "./childHome/FeatureView";

  import Scroll from "components/common/scroll/Scroll";
  import {backTopMixin, itemListenerMixin} from "../../Common/mixin";

  export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      tapControl,
      GoodList,
      Scroll,
    },
    mixins:[itemListenerMixin,backTopMixin],
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page: 0,list: []},
          'new':{page: 0,list: []},
          'sell':{page: 0,list: []}
        },
        currentType:'pop',
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    computed:{
      showgoods(){
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      //保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      //取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType ='pop'
            break
          case 1:
            this.currentType ='new'
            break
          case 2:
            this.currentType ='sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
    },
      getHomeGoods(type){
        const page = this.goods[type].page+1
          getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1
            //完成上拉加载更多
            this.$refs.scroll.finishPullUp()
          })
        },
      contentScroll(position){
        //判断BackTop是否显示
        this.listenShowBackTop(position)
        //决定tabControl是否吸顶（position:fixed)
        this.isTabFixed = (-position.y) >this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        //获取tabControl的offsetTop
        //所有组件都有一个属性$el:用于获取组件的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
      }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
  }

  .content{
    /*height: 300px;*/
    overflow-y: hidden;
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
  }

  .fixed{
    position: fixed;
    left:0;
    right:0;
    top:44px;
  }
  /*.content{*/
  /*  height:calc(100% - 93px);*/
  /*  overflow-y: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
