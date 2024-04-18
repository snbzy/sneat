// api.js
import axios from '@axios'; // 引入上面创建的 Axios 实例

export const fetchData = () => {
    return axios.get('/data'); // 发送 GET 请求
};

export const login = (data) => {
    return axios.post('/login', data); // 发送 POST 请求
};
