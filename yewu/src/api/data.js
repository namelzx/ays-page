import request from '@/utils/request'


export function GetDataByList(query) {
    return request({
        url: '/data/GetDataByList',
        method: 'get',
        params: query
    })
}
