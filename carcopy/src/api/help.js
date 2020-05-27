import request from '@/utils/request'

export function GetDataByList(data) {
    return request({
        url: '/Help/GetDataByList',
        method: 'post',
        data
    })
}



export function GetIdByInfo(id) {
    return request({
        url: '/Help/GetIdByInfo',
        method: 'get',
        params:{id}
    })
}


