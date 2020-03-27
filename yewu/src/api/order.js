import request from '@/utils/request'


export function GetDataByList(query) {
    return request({
        url: '/Order/GetDataByList',
        method: 'get',
        params:query
    })
}



export function GetIdBydetails(id) {
    return request({
        url: '/Order/GetIdBydetails',
        method: 'get',
        params:{id}
    })
}



export function GetIdByStatus(id) {
    return request({
        url: '/Order/GetIdByStatus',
        method: 'get',
        params:{id}
    })
}




export function PostNoteByAdd(data) {
    return request({
        url: '/Order/PostNoteByAdd',
        method: 'post',
        data
    })
}




