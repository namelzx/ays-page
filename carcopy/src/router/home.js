export default [
    {path: '/index', redirect: '/'},
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/Home.vue'),
        // meta: {
        //   title: '首页'
        // }
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/index.vue'),
        // meta: {
        //   title: '首页'
        // }
    },
    {
        path: '/:id(\\d+)',
        name: 'edit',
        component: () => import('@/views/home/Home.vue'),
        // meta: {
        //   title: '首页'
        // }
    },
    {
        path: '/home/name',
        name: 'Storename',
        component: () => import('@/views/home/storename/StoreName.vue'),
        // meta: {
        //   title: '店铺选择'
        // }
    },
    {
        path: '/home/details',
        name: 'Details',
        component: () => import('@/views/home/details.vue'),
        // meta: {
        //   title: '首页轮播详情'
        // }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        // meta: {
        //   title: '关于我们'
        // }
    },
    {
        path: '/embody',
        name: 'embody',
        component: () => import('../views/embody/Embody.vue'),
        // meta: {
        //   title: '提现'
        // }
    },

    {
        path: '/embody/deposit',
        name: 'deposit',
        component: () => import('../views/embody/Deposit.vue'),
        // meta: {
        //   title: '余额提现'
        // }
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('../views/help/Help.vue'),
        // meta: {
        //   title: '帮助'
        // }
    },
    {
        path: '/help/intrper',
        name: 'intrper',
        component: () => import('../views/help/IntrPer.vue'),
        // meta: {
        //   title: '如何完善信息'
        // }
    },
    {
        path: '/help/intrOper',
        name: 'intrOper',
        component: () => import('../views/help/IntrOper.vue'),
        // meta: {
        //   title: '如何操作接单'
        // }
    },
    {
        path: '/help/intrTurm',
        name: 'intrTurm',
        component: () => import('../views/help/IntrTurm.vue'),
        // meta: {
        //   title: '如何驳回接单'
        // }
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('../views/message/Message.vue'),
        // meta: {
        //   title: '消息'
        // }
    },
    {
        path: '/message/messageSou',
        name: 'MessageSou',
        component: () => import('../views/message/MessageSou.vue'),
        // meta: {
        //   title: '消息'
        // }
    },
    {
        path: '/message/messageResult',
        name: 'MessageResult',
        component: () => import('../views/message/MessageResult.vue'),
        // meta: {
        //   title: '消息'
        // }
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('../views/product/Product.vue'),
        // meta: {
        //   title: '产品详情'
        // }
    }
]
