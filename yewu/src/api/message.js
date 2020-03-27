import request from '@/utils/request'

export function GetIdByList(query) {
    return request({
        url: '/Message/GetIdByList',
        method: 'get',
        params: query
    })
}


