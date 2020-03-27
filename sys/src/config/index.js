export default {

    // 应用appid
    appid: 'ty9fd2848a039ab554',

    // 应用秘钥
    appSecret: 'ec32286d0718118861afdbf6e401ee81',

    // 配置显示在浏览器标签的title
    title: '安亿士-后台',
    oss_url: 'https://j-code.oss-cn-hangzhou.aliyuncs.com/',

    url_href: 'http://sys.gstate.cn/', //前端地址

    // token在Cookie中存储的天数，默认1天
    cookieExpires: 1,

    // api请求基础路径,注意和代理配合使用
    baseUrl: {
        dev: '',
        pro: 'http://pd.aesups.com/api/owner/'
    },
    // 上传路径
    uploadUrl: {
        img: 'http://pd.aesups.com/api/shop/base/upload',
        video: '',
        file: ''
    }

}
