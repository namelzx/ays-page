import request from '@/utils/request'


export function Topup(data) {
    return request({
        url: 'Topup',
        method: 'post',
        data
    })
}



