import request from '@/utils/request'

export function PostDataByAdd(data) {
    return request({
        url: '/Withdrawal/PostDataByAdd',
        method: 'post',
        data
    })
}


