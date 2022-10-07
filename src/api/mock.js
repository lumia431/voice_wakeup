import Mock from 'mockjs'
import homeApi from './mockServeData/task'
import voiceApi from './mockServeData/voice'

Mock.mock('/api/getTaskList', homeApi.getStatisticalData)
Mock.mock('/api/getVoiceList', voiceApi.getVoiceData)
