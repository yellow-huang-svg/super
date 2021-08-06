import {debounce} from "./utils";
import BackTop from "components/common/backTop/BackTop";

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted() {
    //图片加载完成的事件监听
    const newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener = ()=>{
      newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    listenShowBackTop(position){
      //判断BackTop是否显示
      this.isShowBackTop = (-position.y) >1000
    }
  }
}
