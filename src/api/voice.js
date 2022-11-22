/**
 * article模块接口列表
 */

import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const voice = {
   addTaskVoice(params){
      return axios.post(`/voice/addTaskVoice`, qs.stringify(params))
   },
   getTaskVoice(params){
      return axios.post(`/voice/getTaskVoice`, qs.stringify(params))
   },
   editTaskVoice(params){
      return axios.post(`/voice/editTaskVoice`, qs.stringify(params))
   },
   deleteTaskVoice(params){
      return axios.post(`/voice/deleteTaskVoice`, qs.stringify(params))
   }
}

export default voice;