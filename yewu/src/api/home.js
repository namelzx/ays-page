import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function GetSaleByHome(id) {
    return request({
        url: '/home/GetSaleByHome',
        method: 'get',
        params: { id }
    })
}


