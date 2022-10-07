/**
 * article模块接口列表
 */

 import axios from './http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const files = {
     getVoiceFile(params) {
         return axios.get(`/file/voice`, qs.stringify(params))
     },
     getNoiseFile(params) {
         return axios.get(`/file/noise`, qs.stringify(params))
     }
 }
 
 export default files;