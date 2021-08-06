<template>
  <div id="detail">
<!--    属性：topImages 传入值：top-images-->
    <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type=3 @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
<!--    <toast :message="message" :show="show"></toast>-->
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import DetailBottomBar from "./childComps/DetailBottomBar";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  // import Toast from "components/common/toast/Toast";

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";

  import {debounce} from "../../Common/utils";
  import {backTopMixin, itemListenerMixin} from "../../Common/mixin";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
        // message:'',
        // show:false
      }
    },
    mixins:[itemListenerMixin,backTopMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      // Toast
    },
    created() {
      //1.保存iid
      this.iid = this.$route.params.iid

      //2.根据传入的iid请求详情数据
      getDetail(this.iid).then(res=>{
        const data = res.result
        //获取顶部的轮播图片
        this.topImages = data.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //创建店铺信息对象
        this.shop = new Shop(data.shopInfo)

        //保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)


        //取出评论信息
        if(data.rate.cRate !==0){
          this.commentInfo = data.rate.list[0];
        }

        //请求推荐信息
        getRecommend().then(res =>{
          this.recommends = res.data.list
        })

        //给getThemeTopY进行赋值(对this.getThemeTopY进行防抖）
        this.getThemeTopY = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        },)
        //第一次获取：不对
        //原因：this.$refs.params.$el没有渲染
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

        //第二次获取：不对
        //根据最新的数据，对应的Dom是已经被渲染完二零
        //但是图片依然没有被加载完（目前的offsetTop是不准确的）
        //offsetTop值不对的时候，都是图片问题
        this.$nextTick(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        })
      })
    },
    methods:{
      ...mapActions(['addCart']),
      imageLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        this.listenShowBackTop(position)
        //1.获取y值
        const PositionY = -position.y
        //2.position和主题中值进行对比
        //[0,7983,9120,9452]
        //positionY 在 0到7983之间，index = 0
        //positionY 在 7983到9120之间，index = 1
        //positionY 在 9120到9452之间，index = 2

        //positionY 超过等于9452时，index = 3

        let length = this.themeTopYs.length
        for(let i = 0;i < length;i++){
          if(this.currentIndex!==i && ((i < length-1 && PositionY >=this.themeTopYs[i] && PositionY<this.themeTopYs[i+1]) || (i === length-1
            && PositionY >= this.themeTopYs[i]))){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addToCart(){
        //1.获取购物车显示的内容
        const product = {}
        product.img = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.detailInfo.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        //2.将商品添加到购物车(Promise,mapActions)
        // this.$store.commit('addCart',product)
        //
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res);
        // })
        this.addCart(product).then(res=>{
          // this.message=res;
          // this.show=true;
          //
          // setTimeout(()=>{
          //   this.message = '';
          //   this.show = false;
          // },1500)
          this.$toast.show(res)
        })
        //3.添加到购物车成功


      }
    },
    mounted() {

    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 15;
    background-color: #fff;
    height: 100vh;
  }

  .content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index:9;
    background-color: #fff;
  }
</style>
