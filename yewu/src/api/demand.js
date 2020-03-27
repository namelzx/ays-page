import request from '@/utils/request'

export function PostDataByAdd(data) {
    return request({
        url: '/demand/PostDataByAdd',
        method: 'post',
        data
    })
}


export function GetDataByList(query) {
    return request({
        url: '/demand/GetDataByList',
        method: 'get',
        params: query
    })
}
