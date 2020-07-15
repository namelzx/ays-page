import request from '@/utils/request'

export function PostAddByData(data) {
    return request({
        url: '/Marketing/PostAddByData',
        method: 'post',
        data
    })
}


export function GetInfoById(user_id) {
    return request({
        url: '/Marketing/GetInfoById',
        method: 'get',
        params: {user_id}
    })
}

export function GetImagesTextItmeByWhere(query) {
    return request({
        url: '/Marketing/GetImagesTextItmeByWhere',
        method: 'get',
        params: query
    })
}



