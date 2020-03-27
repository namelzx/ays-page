import request from '@/utils/request'

export function PostDataByAdd(data) {
    return request({
        url: '/Demand/PostDataByAdd',
        method: 'post',
        data
    })
}


