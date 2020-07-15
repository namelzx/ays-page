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



export function GetIdByStatus(data) {
    return request({
        url: '/Order/GetIdByStatus',
        method: 'post',
       data
    })
}






export function PostNoteByAdd(data) {
    return request({
        url: '/Order/PostNoteByAdd',
        method: 'post',
        data
    })
}



export function GetIdBy2DayOrder(query) {
    return request({
        url: '/Order/GetIdBy2DayOrder',
        method: 'get',
        params:query

    })
}

export function GetIdBy2DayImagesOrder(query) {
    return request({
        url: 'Order/GetIdBy2DayImagesOrder',
        method: 'get',
        params:query
    })
}


export function PostDataByVideo(data) {
    return request({
        url: '/Order/PostDataByVideo',
        method: 'post',
        data

    })
}


export function GetCodeBycheckCode(query) {
    return request({
        url: '/Order/GetCodeBycheckCode',
        method: 'get',
        params:query

    })
}








