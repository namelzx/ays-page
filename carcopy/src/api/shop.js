import request from '@/utils/request'

export function PostDataAdd(data) {
    return request({
        url: '/shop/PostDataAdd',
        method: 'post',
        data
    })
}

export function GetUserIdByCheck(user_id) {
    return request({
        url: '/shop/GetUserIdByCheck',
        method: 'get',
        params: {
            user_id
        }
    })
}


export function GetShopIdByInfo(temp) {
    return request({
        url: '/shop/GetShopIdByInfo',
        method: 'post',
        params: temp
    })
}


export function GetShopIdByInfoBind(temp) {
    return request({
        url: '/shop/GetShopIdByInfoBind',
        method: 'post',
        params: temp
    })
}

/**
 * 绑定门店员工
 * @param temp
 * @constructor
 */
export function PostBindByShop(temp) {
    return request({
        url: '/shop/PostBindByShop',
        method: 'post',
        params: temp
    })
}

export function GetRoleByList(user_id) {
    return request({
        url: '/shop/GetRoleByList',
        method: 'get',
        params: {user_id}
    })
}




export function PostDataBySave(temp) {
    return request({
        url: '/shop/PostDataBySave',
        method: 'post',
        params: temp
    })
}
export function GetIdByShop(query) {
    return request({
        url: '/shop/GetIdByShop',
        method: 'get',
        params: query
    })
}
export function GetDataByList(user_id) {
    return request({
        url: '/shop/GetDataByList',
        method: 'get',
        params: {
            user_id
        }
    })
}


export function PostDataByfield(data) {
    return request({
        url: '/shop/PostDataByfield',
        method: 'post',
        data
    })
}


export function PostDataShopImg(data) {
    return request({
        url: '/shop/PostDataShopImg',
        method: 'post',
        data
    })
}


export function GetIdByenv(id) {
    return request({
        url: '/shop/GetIdByenv',
        method: 'get',
        params: {
            id
        }

    })
}


export function PostBusingessByAdd(data) {
    return request({
        url: '/shop/PostBusingessByAdd',
        method: 'post',
        data
    })
}

export function GetBusingessByList(id) {
    return request({
        url: '/shop/GetBusingessByList',
        method: 'GET',
        params: {
            id
        }
    })
}


export function GetIdByDelete(query) {
    return request({
        url: '/shop/GetIdByDelete',
        method: 'GET',
        params:query
    })
}


//home轮播图
export function Gethomebanner() {
    return request({
        url: 'home/GetShopByHome',
        method: 'post'
    })
}


//
// export function PostDataByfield(data) {
//     return request({
//         url: '/shop/PostDataByfield',
//         method: 'post',
//         data
//     })
// }