import request from '@/utils/request'



export function GetDataByList(query) {
    return request({
        url: '/Coupon/GetDataByList',
        method: 'get',
        params: query
    })
}


