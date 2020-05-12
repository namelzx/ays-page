export default [
  {
    path: '/order-detail',
    name: 'Detail',
    component: () => import('../components/Detail/Detail'),
    // meta: {
    //   title: '安装单列表'
    // }
  },
  {
    path: '/voucher',
    name: 'Voucher',
    component: () => import('../components/Detail/Voucher'),
    // meta: {
    //   title: '确认安装'
    // }
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('../views/detail/Bill'),
    // meta: {
    //   title: '账单'
    // }
  },
  {
    path: '/bill/withdraw',
    name: 'withdraw',
    component: () => import('../views/detail/Withdraw'),
    // meta: {
    //   title: '账单详情'
    // }
  },
  {
    path: '/bill/billdetails',
    name: 'billdetails',
    component: () => import('../components/Bill/Billdetails'),
    // meta: {
    //   title: '账单详情'
    // }
  },
  {
    path: '/bill/billtime',
    name: 'Billtime',
    component: () => import('../components/Bill/Billtime'),
    // meta: {
    //   title: '账单选择时间'
    // }
  },
  {
    path: '/bill/billofficial',
    name: 'billofficial',
    component: () => import('../components/Bill/Billofficial'),
    // meta: {
    //   title: '账单搜索'
    // }
  },
  {
    path: '/bill/billsearch',
    name: 'billsearch',
    component: () => import('../components/Bill/Billsearch'),
    // meta: {
    //   title: '账单'
    // }
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import('../views/detail/Install'),
    // meta: {
    //   title: '安装单列表'
    // }
  },
  {
    path: '/install/history',
    name: 'History',
    component: () => import('../views/install/History'),
    // meta: {
    //   title: '订单列表'
    // }
  },
  {
    path: '/install/grabble',
    name: 'Grabble',
    component: () => import('../views/install/Grabble'),
    // meta: {
    //   title: '订单列表'
    // }
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import('../views/detail/Official'),
    // meta: {
    //   title: '官派单'
    // }
  },
  {
    path: '/offorder',
    name: '0fforder',
    component: ()=> import('../views/detail/Offorder.vue'),
    // meta:{
    //   title:'营销单'
    // }
  },
  {
    path: '/offorder/offordersou',
    name: 'offordersou',
    component: ()=> import('../components/Offoreder/Offordersou.vue'),
    // meta:{
    //   title:'营销单'
    // }
  },
  {
    path: '/offorder/offordercriteria',
    name: 'offordercriteria',
    component: ()=> import('../components/Offoreder/Offordercriteria.vue'),
    // meta:{
    //   title:'营销单'
    // }
  },
  {
    path: '/slip',
    name: 'Slip',
    component: () => import('../views/detail/Slip'),
    // meta: {
    //   title: '核销'
    // }
  },

  {
    path:'/slip-voucher',
    component: () => import('../views/detail/Slipvoucher'),
    // meta: {
    //   title: '确认核销'
    // }
  },

  {
    path:'/slip-succ',
    component: () => import('../views/detail/SlipSucc'),
    // meta: {
    //   title: '核销成功'
    // }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/detail/Upload'),
    // meta: {
    //   title: '上传视频'
    // },
  },
    {
        path: '/imagetext',
        name: 'imagetext',
        component: () => import('../views/detail/imagetext'),
        // meta: {
        //   title: '图文上传'
        // },
    },
  {
    path: '/case',
    name: 'case',
    component: () => import('../views/case/Case'),
    // meta: {
    //   title: '我的案例-改装前'
    // },
  },
  {
    path: '/casecentre',
    name: 'casecentre',
    component: () => import('../views/case/CaseCentre'),
    // meta: {
    //   title: '我的案例-改装中'
    // },
  },
  {
    path: '/caseover',
    name: 'caseover',
    component: () => import('../views/case/CaseOver'),
    // meta: {
    //   title: '我的案例-改装后'
    // },
  },
  {
    path: '/imagetext/seeklist',
    name: 'seeklist',
    component: () => import('../views/detail/imagetext/seeklist'),
    // meta: {
    //   title: '营销推广搜索结果'
    // },
  },
  {
    path: '/imagetext/case',
    name: 'case',
    component: () => import('../views/detail/imagetext/case'),
    // meta: {
    //   title: '营销推广案例详情'
    // },
  },
  {
    path: '/imagetext/record',
    name: 'record',
    component: () => import('../views/detail/imagetext/record'),
    // meta: {
    //   title: '营销推广记录'
    // },
  },

  {
    path: '/upload-video',
    name: 'UploadVideo',
    component: () => import('../views/detail/UploadVideo'),
    // meta: {
    //   title: '上传视频'
    // },
  },
  {
    path: '/upload-succ',
    name: 'UploadSucc',
    component: () => import('../views/detail/UploadSucc'),
    // meta: {
    //   title: '上传视频结果'
    // },
  }
]
