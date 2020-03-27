import request from '@/utils/request'

export function GetIdByList(id) {
    return request({
        url: '/Message/GetIdByList',
        method: 'get',
        params: { id }
    })
}


