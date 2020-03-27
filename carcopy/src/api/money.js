import request from '@/utils/request'

export function GetShopidByList(query) {
    return request({
        url: '/Money/GetShopidByList',
        method: 'get',
        params:query
    })
}

export function GetUserByBalance(id) {
    return request({
        url: '/Money/GetUserByBalance',
        method: 'get',
        params: {id}
    })
}




export function GetBillBydetails(id) {
    return request({
        url: '/Money/GetBillBydetails',
        method: 'get',
        params: {id}
    })
}


export function GetShopByHome(id) {
    return request({
        url: '/home/GetShopByHome',
        method: 'get',
        params: {id}
    })
}




