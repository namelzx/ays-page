export default [
    {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my/My'),
        // meta: {
        //   title: '我的'
        // }
    },



    {
        path: '/my/mydatum',
        name: 'Mydatum',
        component: () => import('@/views/my/mydatum'),
        // meta:{
        //   title:'编辑我的资料---更新版本'
        // }

    },
    {
        path: '/my/myphone',
        name: 'Myphone',
        component: () => import('@/views/my/myphone'),
        // meta:{
        //   title:'编辑我的资料'
        // }
    },
]
