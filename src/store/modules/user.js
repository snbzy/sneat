// src/store/modules/user.js
import { login } from '@/utils/api'
import { setToken,getToken } from "@/utils/token";
import {de} from "vuetify/locale";

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
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit }) {
        // 模拟退出登录逻辑
        commit('setUserInfo', null);
    }
};

export default {
    namespaced: true, // 设置为 true，使模块具有命名空间
    state,
    getters,
    mutations,
    actions
};
