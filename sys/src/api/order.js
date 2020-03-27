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




export function PostDataByAdd(data) {
    return request({
        url: '/Order/PostDataByAdd',
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


export function PostDataByVideo(data) {
    return request({
        url: '/Order/PostDataByVideo',
        method: 'post',
        data

    })
}


export function PostEavByAdd(data) {
    return request({
        url: '/Order/PostEavByAdd',
        method: 'post',
        data

    })
}




export function GetCodeBycheckCode(code) {
    return request({
        url: '/Order/GetCodeBycheckCode',
        method: 'get',
        params:{code}

    })
}








