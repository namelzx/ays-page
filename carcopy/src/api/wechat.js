import request from '@/utils/request'

export function getToken(data) {
    return request({
        url: 'getToken',
        method: 'post',
        data
    })
}
