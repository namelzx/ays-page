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