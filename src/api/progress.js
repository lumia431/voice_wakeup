/**
 * article模块接口列表
 */

 import axios from './http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const progress = {
     getProgress(params) {
         return axios.post(`/progress/getProgress`, qs.stringify(params))
     }
 }
 
 export default progress;