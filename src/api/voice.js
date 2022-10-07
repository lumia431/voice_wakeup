/**
 * article模块接口列表
 */

import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const voice = {
   getAllVoice(params) {
      return axios.post(`/voice/getAllVoice`, qs.stringify(params))
   },
   getVoice(params) {
      return axios.post(`/voice/getVoice`, qs.stringify(params))
   },
   addVoice(params){
      return axios.post(`/voice/addVoice`, qs.stringify(params))
   },
   getTaskVoice(params){
      return axios.post(`/voice/getTaskVoice`, qs.stringify(params))
   },
}

export default voice;