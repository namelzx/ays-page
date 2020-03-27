import Vue from 'vue'
import VueRouter from 'vue-router'
import Workbench from '../views/Workbench.vue'
import Order from '../views/Order.vue'
import Datas from '../views/Datas.vue'
import Search from '../views/Search.vue'
import Orderdetails from '../views/Orderdetails.vue'
import Message from '../views/Message.vue'
import MessageSou from '../views/MessageSou.vue'
import Demand from '../views/Demand.vue'
import Demandadd from '../views/Demandadd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Workbench',
    component: ()=> import('../views/Workbench.vue'),
    // meta:{
    //   title: '后台管理中心'
    // }
  },
    {
        path: '/:id(\\d+)',
        name: 'edit',
        component: ()=> import('../views/Workbench.vue'),
        // meta: {
        //   title: '首页'
        // }
    },
  {
    path: '/order',
    name: 'Order',
    component: ()=> import('../views/Order.vue'),
    // meta:{
    //   title: '订单列表'
    // }
  },

  {
    path: '/order/orderhistory',
    name: 'OrderHistory',
    component: ()=> import('../views/OrderHistory.vue'),
    // meta:{
    //   title: '订单搜索'
    // }
  },
  {
    path: '/order/install',
    name: 'Install',
    component: ()=> import('../views/Install.vue'),
    // meta:{
    //   title: '订单安装单列表'
    // }
  },
  {
    path: '/order/product',
    name: 'Product',
    component: ()=> import('../views/Product.vue'),
    // meta:{
    //   title: '订单营销单产品详情'
    // }
  },
  {
    path: '/offorder/offordersou',
    name: 'Offordersou',
    component: ()=> import('../views/Offordersou.vue'),
    // meta:{
    //   title: '订单营销单搜索'
    // }
  },
  {
    path: '/datas',
    name: 'Datas',
    component: ()=> import('../views/Datas.vue'),
    // meta:{
    //   title: '门店数据'
    // }
  },
  {
    path: '/search',
    name: 'Search',
    component: ()=> import('../views/Search.vue'),
    // meta:{
    //   title: '订单列表'
    // }
  },
  {
    path: '/order/Orderdetails',
    name: 'Orderdetails',
    component: ()=> import('../views/Orderdetails.vue'),
    // meta:{
    //   title: '订单详情'
    // }
  },
  {
    path: '/message',
    name: 'Message',
    component: ()=> import('../views/Message.vue'),
    // meta:{
    //   title: '订单列表'
    // }
  },
  {
    path: '/message/messageSou',
    name: 'MessageSou',
    component: ()=> import('../views/MessageSou.vue'),
    // meta:{
    //   title: '订单列表'
    // }

  },
  {
    path: '/demand',
    name: 'Demand',
    component: ()=> import('../views/Demand.vue'),
    // meta:{
    //   title: '门店需求'
    // }
  },
  {
    path:'/demandadd',
    name:'Demandadd',
    component: ()=> import('../views/Demandadd.vue'),
    // meta:{
    //   title: '需求添加'
    // }

  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from) {
    return{ x:0, y:0}
  }
})

router.beforeEach((to, from, next) => {

  if(to.meta.title) {
    document.title = to.meta.title;
    next()
  }else {
    next()
  }
})

export default router
