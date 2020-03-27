import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function Getcar() {
    return request({
        url: '/car/Getcar',
        method: 'get',
    })
}


export function GetIdBySeries(id) {
    return request({
        url: '/car/GetIdBySeries',
        method: 'get',
        params:{id}
    })
}


export function GetIdByModel(id) {
    return request({
        url: '/car/GetIdByModel',
        method: 'get',
        params:{id}
    })
}

export function GetIdByList(user_id) {
    return request({
        url: '/car/GetIdByList',
        method: 'get',
        params:{user_id}
    })
}


export function GetIdByDelete(id) {
    return request({
        url: '/car/GetIdByDelete',
        method: 'get',
        params:{id}
    })
}



export function PostDataByAdd(data) {
    return request({
        url: '/car/PostDataByAdd',
        method: 'post',
        data
    })
}





