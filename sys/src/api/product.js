import request from '@/utils/request'

export function GetProductBylist(pid) {
    return request({
        url: '/Product/GetProductBylist',
        method: 'get',
        params:{pid}
    })
}
