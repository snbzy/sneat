// src/store/index.js

import { createStore } from 'vuex';
import userModule from './modules/user';



const store = createStore({
    modules: {
        user: userModule // 注册 user 模块
    }
});

export default store;
