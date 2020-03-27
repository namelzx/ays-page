import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue'),
        // meta:{
        //   title: '会员注册登录'
        // }
    },
    {
        path: '/tels',
        name: 'Tels',
        component: () => import('../views/tels/Tels.vue'),
        // meta:{
        //   title:'测试'
        // }
    },

    {
        path: '/:id(\\d+)',
        name: 'edit',
        component: () => import('../views/Order.vue'),
        // meta: {
        //   title: '首页'
        // }
    },
    {
        path: '/',
        name: 'Order',
        component: () => import('../views/Order.vue'),
        // meta:{
        //   title:'会员后台管理'
        // }
    },
    {
        path: '/order/orderdetails',
        name: 'Orderdetails',
        component: () => import('../views/Orderdetails.vue'),
        // meta:{
        //   title:'会员后台管理'
        // }
    },
    {
        path: '/order/prepared',
        name: 'Prepared',
        component: () => import('../views/Prepared.vue'),
        // meta:{
        //   title:'已安装评价'
        // }
    },
    {
        path: '/order/prepared/succeed',
        name: 'Ordersucceed',
        component: () => import('../views/Ordersucceed.vue'),
        // meta:{
        //   title:'已核销评价'
        // }
    },
    {
        path: '/order/prepared/orderrefund',
        name: 'Orderrefund',
        component: () => import('../views/Orderrefund.vue'),
        // meta:{
        //   title:'退款申请'
        // }
    },
    {
        path: '/order/ordersou',
        name: 'Ordersou',
        component: () => import('../views/Ordersou.vue'),
        // meta:{
        //   title:'订单--安装单搜索'
        // }
    },
    {
        path: '/order/offordersou',
        name: 'Offordersou',
        component: () => import('../views/Offordersou.vue'),
        // meta:{
        //   title:'订单--营销单搜索'
        // }
    },
    {
        path: '/order/product',
        name: 'Product',
        component: () => import('../views/Product.vue'),
        // meta:{
        //   title:'订单--营销单产品详情'
        // }
    },

    {
        path: '/quality',
        name: 'Quality',
        component: () => import('../views/quality/Quality.vue'),
        // meta:{
        //   title:'会员后台管理'
        // }
    },
    {
        path: '/quality/qualiyadd',
        name: 'Qualiyadd',
        component: () => import('../views/quality/Qualiyadd.vue'),
        // meta:{
        //   title: '添加质保卡'
        // }
    },
    {
        path: '/quality/qualiyadd/qualityfill',
        name: 'Qualityfill',
        component: () => import('../views/quality/Qualityfill.vue'),
        // meta:{
        //   title:'填写质保卡信息'
        // }
    },
    {
        path: '/quality/qualiyadd/qualitysucee',
        name: 'Qualitysucee',
        component: () => import('../views/quality/Qualitysucee.vue'),
        // meta:{
        //   title:'添加提示'
        // }
    },
    {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/My.vue'),
        // meta:{
        //   title:'会员后台管理'
        // }
    },
    {
        path: '/my/mycar',
        name: 'Mycar',
        component: () => import('../views/my/Mycar.vue'),
        // meta:{
        //   title:'我的--爱车'
        // }
    },
    {
        path: '/my/mydatum',
        name: 'Mydatum',
        component: () => import('../views/my/Mydatum.vue'),
        // meta:{
        //   title:'编辑我的资料---更新版本'
        // }
    },
    {
        path: '/my/myphone',
        name: 'Myphone',
        component: () => import('../views/my/Myphone.vue'),
        // meta:{
        //   title:'编辑我的资料'
        // }
    },
    {
        path: '/my/mycompile',
        name: 'Mycompile',
        component: () => import('../views/my/Mycompile.vue'),
        // meta:{
        //   title:'编辑我的资料'
        // }
    },

    {
        path: '/my/myphone/mycode',
        name: 'Mycode',
        component: () => import('../views/my/Mycode.vue'),
        // meta:{
        //   title:'编辑我的资料'
        // }
    },
    {
        path: '/my/myaddcar',
        name: 'Myaddcar',
        component: () => import('../views/my/Myaddcar.vue'),
        // meta:{
        //   title: '添加车辆'
        // }
    },
    {
        path: '/data',
        name: 'Data',
        component: () => import('../views/data/Data.vue')
    },
    {
        path: '/data/datadetails',
        name: 'Datadetails',
        component: () => import('../views/data/Datadetails.vue')
    },
    {
        path: '/data/datapublish',
        name: 'Datapublish',
        component: () => import('../views/data/Datapublish.vue')
    },
    {
        path: '/data/datasucceed',
        name: 'Datasucceed',
        component: () => import('../views/data/Datasucceed.vue')
    },
    {
        path: '/data/datasou',
        name: 'Datasou',
        component: () => import('../views/data/Datasou.vue')
    },
    // 安装单提交
    {
        path: '/install',
        name: 'Install',
        component: () => import('../views/install/Install.vue'),
    },
    {
        path: '/install/:id(\\d+)',
        name: 'Installedit',
        component: () => import('../views/install/Install.vue'),
        // meta: {
        //   title: '带参数'
        // }
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from) {
        // console.log(to, from)
        return {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = to.meta.title;
        next()
    } else {
        next()
    }
})

export default router
