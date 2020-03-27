import request from '@/utils/request'

export function upload(data) {
    return request({
        url: '/common/upload',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        data
    })
}

export function getInfo(id) {
    return request({
        url: '/user/GetIdByInfo',
        method: 'get',
        params: { id }
    })
}


