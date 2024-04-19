// src/store/modules/user.js
import {login, logout} from '@/utils/api'
import {setToken, getToken, removeToken} from "@/utils/token";

const state = {
    userInfo: null,
    token: getToken(),
};

const getters = {
    getUserInfo: state => state.userInfo
};

const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    setToken(state, token)  {
        state.token = token
    },
};

const actions = {

    login({ commit }, userInfo) {
        const username = userInfo.username.trim()
        const password = userInfo.password

        return new Promise((resolve, reject) => {
            login({username, password}).then(res => {
                setToken(res.data.token)
                commit('setToken', res.data.token)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit }) {
        // 模拟退出登录逻辑
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('setToken', '')
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
};

export default {
    // namespaced: false, // 设置为 true，使模块具有命名空间
    state,
    getters,
    mutations,
    actions
};
