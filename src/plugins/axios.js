// axios.js
import axios from 'axios';
import { getToken } from '@/utils/token'

const axiosIns = axios.create({
    baseURL: 'http://localhost:9200', // 前缀路径，会自动拼接到请求的 URL 前面
    timeout: 5000, // 请求超时时间
});

// 请求拦截器。它允许你在发送请求之前对请求进行一些处理，例如添加请求头、验证登录状态、设置请求超时等
axiosIns.interceptors.request.use(
    (config) => {

        // 例如添加请求头、验证登录状态等
        config.headers['Content-Type']='application/json;charset=utf-8'
        config.headers.Authorization = 'Bearer ' + getToken(); // 示例：添加身份验证 token
        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

//响应拦截器。它允许你在接收到后端响应之后对响应进行一些处理，例如处理错误、统一处理响应数据等。
axiosIns.interceptors.response.use(response => {
        return response
    },
    error => {

        const { config, response: { status } } = error
        const originalRequest = config

        if (status === 401) {
            // 刷新token逻辑
            // Make sure to change refresh token API endpoint
            // return axiosIns.post('/auth/refresh-token', {
            //     refreshToken: localStorage.getItem('refreshToken')
            // }).then(({ data }) => {
            //     if (data.accessToken) {
            //
            //         // Make sure localStorage key matches the key/name you use on login & register
            //         localStorage.setItem('accessToken', data.accessToken)
            //         localStorage.setItem('refreshToken', data.refreshToken)
            //
            //
            //         // Update the headers with the new access token
            //         axiosIns.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
            //
            //         // Repeat the original request
            //         return axiosIns(originalRequest)
            //     } else {
            //         // Handle the case where the refresh token is expired or invalid
            //         // You can redirect to login page, show an error message, or whatever you want to do
            //     }
            // })
        }

        return Promise.reject(error)
    }
);


export default axiosIns;
