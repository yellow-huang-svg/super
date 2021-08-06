import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'
export default {
  addCart(context,payload){
    //payLoad新添加的商品
    //数组常用的方法有哪些
    // let oldProduct = null;
    // for(let item of state.cartList){
    //   if(item.iid == payload.iid){
    //     oldProduct = item
    //   }
    // }
   return new Promise((resolve,reject)=>{
     //查找之前数组中是否有这个商品
     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

     //判断oldProduct
     if(oldProduct){//数量加1
       // oldProduct.count += 1
       context.commit(ADD_COUNTER,oldProduct)
       resolve('当前商品数量加1')
     }else{//添加新的商品
       payload.count = 1
       // context.state.cartList.push(payload)
       context.commit(ADD_TO_CART,payload)
       resolve('添加了新的商品')
     }
   })
  }
}
