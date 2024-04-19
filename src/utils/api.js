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

// 查询公告详细
// export function getProject(projectId) {
//     return request({
//         url: '/project/query/' + projectId,
//         method: 'get'
//     })
// }
//
// // 新增公告
// export function addProject(data) {
//     return request({
//         url: '/project/add',
//         method: 'post',
//         data: data
//     })
// }
//
// // 修改公告
// export function updateProject(data) {
//     return request({
//         url: '/project/update',
//         method: 'put',
//         data: data
//     })
// }
//
// // 删除公告
// export function delNotice(projectId) {
//     return request({
//         url: '/project/delete/' + projectId,
//         method: 'delete'
//     })
// }
