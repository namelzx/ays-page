export default [
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/shop/Shop'),
    // meta: {
    //   title: '店铺资料'
    // }
  },
  {
    path:'/shop/business',
    name:'Business',
    component: () => import('../views/shop/Business'),
    // meta: {
    //   title: '店铺资料'`
    // }
  },
  {
    path:'/shop/agreement',
    name:'Agreement',
    component: () => import('../views/shop/Agreement'),
    // meta: {
    //   title: '服务协议'
    // }
  },
  {
    path: '/add-shop',
    name: 'AddShop',
    component: () => import('../views/shop/AddShop'),
    // meta: {
    //   title: '店铺资料'
    // }
  },
  {
    path: '/addshop-data',
    name: 'Addshopdata',
    component: () => import('../views/shop/Addshopdata'),
    // meta: {
    //   title: '资料上传成功'
    // }
  },
  {
    path: '/manage-shop',
    name: 'ShopFile',
    component: () => import('../views/shop/ShopFile'),
    // meta: {
    //   title: '店铺管理'
    // }
  },
  {
    path: '/manage-shop-input',
    name: 'InputItem',
    component: () => import('../views/shop/component/InputItem'),
    // meta: {
    //   title: '店铺修改资料'
    // }
  },
  {
    path: '/manage-business',
    name: 'ShopBusiness',
    component: () => import('../views/shop/ShopBusiness'),
    // meta: {
    //   title: '业务管理'
    // }
  },
  {
    path: '/manage-business/safeguard',
    name: 'Safeguard',
    component: () => import('../views/shop/Safeguard'),
    // meta: {
    //   title: '服务保障'
    // }
  },
  {
    path: '/manage-business/slogan',
    name: 'Slogan',
    component: () => import('../views/shop/Slogan'),
    // meta: {
    //   title: '标语'
    // }
  },
  {
    path: '/manage-business/advt',
    name: 'Advt',
    component: () => import('../views/shop/Advt'),
    // meta: {
    //   title: '广告图管理'
    // }
  },
  {
    path: '/manage-business/deduction',
    name: 'Deduction',
    component: () => import('../views/shop/Deduction'),
    // meta: {
    //   title: '抵扣券'
    // }
  },
  {
    path: '/manage-business/deductionAdd',
    name: 'DeductionAdd',
    component: () => import('../views/shop/DeductionAdd'),
    // meta: {
    //   title: '添加抵扣券'
    // }
  },
  {
    path: '/manage-business/hours',
    name: 'Hours',
    component: () => import('../views/shop/Hours'),
    // meta: {
    //   title: '营业时间'
    // }
  },
  {
    path: '/manage-business/mainbuiss',
    name: 'Mainbuiss',
    component: () => import('../views/shop/Mainbuiss'),
    // meta: {
    //   title: '主营业务'
    // }
  },
  {
    path: '/manage-business/mainAmend',
    name: 'MainAmend',
    component: () => import('../views/shop/MainAmend'),
    // meta: {
    //   title: '主营业务修改'
    // }
  },
  // {
  //   path: '/manage-business/category',
  //   name: 'Category',
  //   component: () => import('../views/shop/Category'),
  //   // meta: {
  //   //   title: '服务类目'
  //   // }
  // },
  {
    path: '/shop/product/manage',
    name: 'Manage',
    component: () => import('../views/shop/product/Manage'),
    // meta: {
    //   title: '产品管理'
    // }
  },
  {
    path: '/shop/product/manageAdd',
    name: 'ManageAdd',
    component: () => import('../views/shop/product/ManageAdd'),
    // meta: {
    //   title: '添加产品'
    // }
  },
  {
    path: '/shop/product/manageDetails',
    name: 'ManageDetails',
    component: () => import('../views/shop/product/ManageDetails'),
    // meta: {
    //   title: '产品详情'
    // }
  },
  {
    path: '/shop/dynamic',
    name: 'Dynamic',
    component: () => import('../views/shop/dynamic/Dynamic'),
    // meta: {
    //   title: '门店动态'
    // }
  },
  {
    path: '/shop/dynamic/issue',
    name: 'Issue',
    component: () => import('../views/shop/dynamic/Issue'),
    // meta: {
    //   title: '发布动态'
    // }
  },
  {
    path: '/shop/Guarantee',
    name: 'Guarantee',
    component: () => import('../views/shop/guarantee/Guarantee'),
    // meta: {
    //   title: '保证金'
    // }
  },
  {
    path: '/shop/Guarantee/topup',
    name: 'Topup',
    component: () => import('../views/shop/guarantee/Topup'),
    // meta: {
    //   title: '保证金'
    // }
  },
  {
    path: '/shop/Guarantee/returned',
    name: 'Returned',
    component: () => import('../views/shop/guarantee/Returned'),
    // meta: {
    //   title: '保证金'
    // }
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/coupon/Coupon'),
    // meta: {
    //   title: '优惠券'
    // }
  },
  {
    path: '/coupon/coupondetails',
    name: 'Coupondetails',
    component: () => import('../views/coupon/Coupondetails'),
    // meta: {
    //   title: '优惠券详情'
    // }
  },
  {
    path: '/coupon/coupondexplain',
    name: 'Coupondexplain',
    component: () => import('../views/coupon/Coupondexplain'),
    // meta: {
    //   title: '优惠券详情使用说明'
    // }
  },

  {
    path: '/ticket',
    name: 'Ticket',
    component: () => import('../views/ticket/Index'),
    // meta: {
    //   title: '卡券'
    // }
  },
  {
    path: '/ticket/add',
    name: 'TicketAdd',
    component: () => import('../views/ticket/Add'),
    // meta: {
    //   title: '添加卡券'
    // }
  },
  {
    path: '/ticket/add/voucheradd',
    name: 'Voucheradd',
    component: () => import('../views/ticket/Voucheradd'),
    // meta: {
    //   title: '添加代金券'
    // }Becommonadd
  },
  {
    path: '/ticket/add/becommonadd',
    name: 'Becommonadd',
    component: () => import('../views/ticket/Becommonadd'),
    // meta: {
    //   title: '添加通用券'
    // }
  },
  {
    path: '/ticket/voucher',
    name: 'Voucher',
    component: () => import('../views/ticket/Voucher'),
    // meta: {
    //   title: '代金券详情'
    // }
  },
  {
    path: '/ticket/becommon',
    name: 'Becommon',
    component: () => import('../views/ticket/Becommon'),
    // meta: {
    //   title: '通用券详情'
    // }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Index'),
    // meta: {
    //   title: '服务类目'
    // }
  },
]
