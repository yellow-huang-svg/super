<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-active="isSelectAll" @click.native="selectClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex'
  import CheckButton from "components/content/checkbutton/CheckButton";
  export default {
    name: "shopBottomBar",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥' + this.cartList.filter(item =>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue + item.price * item.count
        },0).toFixed(2)
        },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if(this.cartList.length===0) return false
        //1.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)
        //2.使用find
        // return !this.cartList.find(item => !item.checked)
        //3.使用遍历
        // for(let item of this.cartList){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
        return this.cartList.every(item=>item.checked)
      }
      },
    methods: {
      selectClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item=>item.checked=false)
        }
        else{
          this.cartList.forEach(item=>item.checked=true)
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品')
        }
      }
    }
  }
</script>

<style scoped>

  .bottom-bar{
    display: flex;
    position: fixed;
    bottom: 50px;
    line-height: 40px;
    height: 40px;
    width: 100%;
    background-color: #eee;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .price{
    margin-left:20px;
    flex: 1;
  }

  .calculate{
    width: 90px;
    background: red;
    color: #fff;
    text-align: center;
  }
</style>
