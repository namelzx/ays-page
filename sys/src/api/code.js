import request from '@/utils/request'

export function GetCodebyCheck(code) {
    return request({
        url: '/WarrantCode/GetCodebyCheck',
        method: 'get',
        params:{code}
    })
}

export function PostDataByAdd(data) {
    return request({
        url: '/WarrantCode/PostDataByAdd',
        method: 'post',
        data
    })
}


export function GetUserbyList(user_id) {
    return request({
        url: '/WarrantCode/GetUserbyList',
        method: 'get',
        params:{user_id}
    })
}


