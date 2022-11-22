export const userAddFormRulesMixin = {
  data() {
    // 验证邮箱的规则
    var checkPath = (rule, value, callback) => {
      const regPath = /^\w$/ // 验证邮箱的正则表达式
      if (regPath.test(value)) {
        return callback() // 合法邮箱
      }
      // 返回一个错误提示
      callback(new Error('请输入合法的路径'))
    }
    return {
      // 添加表单的验证规则对象
      addFormRules: {
        taskname: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
        dbPath: [
          { required: true, message: '请输入db文件路径', trigger: 'blur' }
        ],
        threadNum: [
          { required: true, message: '请输入线程数量', trigger: 'blur' },
        ],
        modelList: [
          { required: true, message: '请输入模型', trigger: 'blur' },
        ],
        psList: [
          { required: true, message: '请输入场景', trigger: 'blur' },
        ],
        wordList: [
          { required: true, message: '请输入唤醒词语', trigger: 'blur' },
        ]
      }
    }
  }
}

