import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('../views/home/home.vue')
const Category =()=> import('../views/category/category.vue')
const Shop =()=> import('../views/shop/shop.vue')
const Profile =()=> import('../views/profile/profile.vue')
const Detail =()=> import('../views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    // meta:{
    //   title:'首页'
    // }
  },
  {
    path: '/category',
    component: Category,
    // meta:{
    //   title:'分类'
    // }
  },
  {
    path: '/shop',
    component: Shop, meta:{
      title:'购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    component: Detail,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
