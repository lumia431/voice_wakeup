/**
 * article模块接口列表
 */

import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {
    //注册
    register(params) {
        return axios.post(`/user/register`, qs.stringify(params))
    },
    //登录
    login(params) {
        return axios.post(`/user/login`, qs.stringify(params))
    },
    //登录
    exit(params) {
        return axios.post(`/user/exit`, qs.stringify(params))
    }
}

export default user;