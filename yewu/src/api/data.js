import request from '@/utils/request'


export function GetDataByList(query) {
    return request({
        url: '/data/GetDataByList',
        method: 'get',
        params: query
    })
}


export function GetQueryBydownload(query) {
    return request({
        url: '/data/GetQueryBydownload',
        method: 'get',
        params: query
    })
}


