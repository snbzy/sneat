// api.js
import axios from '@axios'; // 引入上面创建的 Axios 实例

export const fetchData = () => {
    return axios.get('/data'); // 发送 GET 请求
};

export const login = (data) => {
    return axios.post('/login', data); // 发送 POST 请求
};

export const logout = () => {
    return axios.post('/logout'); // 发送 POST 请求
};


export function listProject(query) {
    return axios.get('/project/list')
}

// 查询项目详情
export function getProject(projectId) {
    return axios.get('/project/'+projectId)
}

//新增项目
export const addProject = (data) => {
    return axios.post('/project/add', data);
};
