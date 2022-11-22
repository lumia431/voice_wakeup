/**
 * article模块接口列表
 */

 import axios from './http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const task = {
     getTaskList(params) {
         return axios.post(`/task/getTaskList`, qs.stringify(params))
     },
     addTask(params) {
        return axios.post(`/task/addTask`, qs.stringify(params))
    },
    editTask(params) {
        return axios.post(`/task/editTask`, qs.stringify(params))
    },
    deleteTask(params) {
        return axios.post(`/task/deleteTask`, qs.stringify(params))
    }
 }
 
 export default task;