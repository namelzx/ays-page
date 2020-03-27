import axios from 'axios'
import store from '@/store'
import myconfig from '@/config'
import { Toast } from 'vant';

// create an axios instance
const service = axios.create({
    baseURL: myconfig.baseUrl.pro, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        config.headers['x-access-appid'] = myconfig.appid

        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = getToken()
        }


        return config
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000||res.errorCode===999||res.errorCode===10001) {
            Toast(res.msg)

            // Message({
            //     message: res.message || 'Error',
            //     type: 'error',
            //     duration: 5 * 1000
            // })
            //10301-10399 ，用户相关
            if(res.code === 10309||res.code===10310){
                return res;
            }

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // // to re-login
                // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                //     confirmButtonText: 'Re-Login',
                //     cancelButtonText: 'Cancel',
                //     type: 'warning'
                // }).then(() => {
                //     store.dispatch('user/resetToken').then(() => {
                //         location.reload()
                //     })
                // })
            }
            // Toast(res.msg)
            // return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        // Toast('服务器不可用')
        // console.log('服务器异常')
        return Promise.reject(error)
    }
)

export default service
