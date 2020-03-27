import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getInfo(id) {
    return request({
        url: '/user/GetIdByInfo',
        method: 'get',
        params: { id }
    })
}





export function cheSmsLogin(data) {
    return request({
        url: '/user/cheSmsLogin',
        method: 'post',
        data
    })
}

export function smsLogin(phone) {
    return request({
        url: '/user/smsLogin',
        method: 'get',
        params: { phone }
    })
}


