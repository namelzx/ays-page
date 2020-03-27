import request from '@/utils/request'



export function Citylist(id) {
    return request({
        url: '/CityTools/Citylist',
        method: 'get',
        params:{id}
    })
}



