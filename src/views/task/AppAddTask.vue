<template>
  <el-form class='edit' ref="form" :model="form" label-width="80px" :rules="addFormRules">
    <el-row :gutter="18">
      <el-col :span="7">
        <el-card shadow="hover">
          <el-form-item label="任务名称" prop="taskname">
            <el-input placeholder="请输入任务名称" maxlength="10" v-model="form.taskname"></el-input>
          </el-form-item>

          <el-form-item label="db路径" prop="dbPath">
            <el-select v-model="form.dbPath" filterable clearable placeholder="请选择db文件" allow-create
              default-first-option>
              <el-option v-for="item in dbFiles" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="线程数量" prop="threadNum">
            <el-select v-model="form.threadNum" filterable clearable placeholder="请选择线程数" allow-create
              default-first-option>
              <el-option v-for="n in 100" :label="n" :value="n"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="场景选择" prop="psList">
            <el-cascader v-model="form.psList" :options="options" :props="props" collapse-tags clearable></el-cascader>
          </el-form-item>

          <el-form-item class="model" label="模型选择" prop="modelList">
            <el-checkbox-group v-model="form.modelList">
              <el-checkbox label="20031" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="20846" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="21001" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="21005" :checked="true" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="唤醒词语" prop="wordList">
            <el-checkbox-group v-model="form.wordList">
              <el-checkbox label="heybreeno" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="nihaoxiaobu" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="xiaobuxiaobu" :checked="true" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-button class="saveButton" size="medium" type="primary" plain icon="el-icon-circle-check"
            @click="clickSave('form')">保存
          </el-button>
          <el-button class="cancelButton" size="medium" type="primary" plain icon="el-icon-circle-close"
            @click="clickCancel('form')">取消
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover">
          <el-input class='voiceInput' placeholder="请输入关键字" clearable v-model="queryVoice">
            <el-button slot="prepend" icon="el-icon-arrow-left" @click="cancelQuery"></el-button>
            <el-button slot="append" icon="el-icon-search" @click="clickQuery"></el-button>
          </el-input>
          <el-table ref="multipleTable" :data="leftVoiceData" :row-style="{height: '0'}" :cell-style="{padding: '0'}"
            height="820px" tooltip-effect="dark" style="width: 100%" @selection-change="handleLeftChange">

            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="voice" :label="leftVoiceCount">
              <template slot-scope="scope">
                <div style="font-size:10px">
                  {{ scope.row.voice }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="voice">
              <template slot-scope="scope">
                <audio tyme="mini" class='audio' :src="require('../../../server/train/' + scope.row.voice)"
                  controls="controls"></audio>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="1">
        <el-button class="highButton" size="medium" type="primary" plain icon="el-icon-right" @click="clickHigh">
        </el-button>
        <el-button class="lowButton" size="medium" type="primary" plain icon="el-icon-back" @click="clickLow">
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <el-table ref="multipleTable" :data="rightVoiceData" :row-style="{height: '0'}" :cell-style="{padding: '0'}"
            height="850px" tooltip-effect="dark" style="width: 100%" @selection-change="handleRightChange">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="voice" :label="rightVoiceCount">
              <template slot-scope="scope">
                <div style="font-size:10px">
                  {{ scope.row.voice }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </el-form>
</template>
  
<script>
import { userAddFormRulesMixin } from '@/common/mixin.js'

export default {
  name: 'AppAddTask',
  mixins: [userAddFormRulesMixin],
  data() {
    return {
      form: {
        taskname: '',
        uuid: '',
        createtime: '',
        dbPath: '',
        threadNum: '',
        startFlg: false,
        progress: 0,
        interval: 0,
        modelList: [],
        sceneList: [],
        psList: [],
        projectList: [],
        wordList: [],
        user_email: '',
        voiceList: []
      },
      dbFiles: [],
      leftVoiceCount: `未加入语料（0）`,
      rightVoiceCount: `已加入语料（0）`,
      leftVoiceData: [],
      rightVoiceData: [],
      leftSelection: [],
      rightSelection: [],
      queryVoice: '',
      remainVoiceData: [],
      modelValues: [],
      wordValues: [],
      sceneList: [],
      props: { multiple: true },
      options: [{
        value: 'TPR',
        label: 'TPR',
        children: [
          {
            value: 'home',
            label: 'home',
          },
          {
            value: 'office',
            label: 'office',
          },
          {
            value: 'market',
            label: 'market',
          },
          {
            value: 'outdoors',
            label: 'outdoors',
          },
          {
            value: 'car_80km',
            label: 'car_80km',
          },
          {
            value: 'car_80km_r',
            label: 'car_80km_r',
          },
        ]
      },
      {
        value: 'AEC',
        label: 'AEC',
        children: [
          {
            value: 'AEC_8',
            label: 'AEC_8'
          },
          {
            value: 'AEC_16',
            label: 'AEC_16'
          }]
      },
      {
        value: 'IAR',
        label: 'IAR',
        children: [
          {
            value: 'IAR',
            label: 'IAR',
          }]
      },
      {
        value: 'FA',
        label: 'FA',
        children: [
          {
            value: 'FA',
            label: 'FA',
          }]
      }]
    }
  },
  computed: {
    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

  },
  methods: {
    clickSave(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.rightVoiceData.length == 0) {
            this.$swal({
              icon: 'error',
              title: '任务创建失败',
              text: '请至少加入一个语料!'
            });
            return false;
          }
          var form = JSON.parse(JSON.stringify(this.form))
          var projectList = new Array
          var sceneList = new Array
          form.psList.forEach(item => {
            if (!projectList.includes(item[0]))
              projectList.push(item[0])
            sceneList.push(item[1])
          })

          form.user_email = localStorage.getItem('username')
          form.modelList = form.modelList.join(',')
          form.projectList = projectList.join(',')
          form.sceneList = sceneList.join(',')
          form.wordList = form.wordList.join(',')
          this.$api.task.addTask(form).then(({ data }) => {
            var json = JSON.parse(data);
            if (json.status == 0) {
              this.$api.voice.addTaskVoice({
                voice: this.rightVoiceData.map(item => item['voice']).join(','),
                task: form.taskname
              }).then(({ data }) => {
                var json = JSON.parse(data);
                if (json.status == 0) {
                  this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: '任务创建成功',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  this.$router.push({
                    name: this.$store.state.tab.editableTabs[new Number(this.$store.state.tab.editableTabsValue) - 2].content
                  })
                  this.$store.commit('removeTab', this.$store.state.tab.editableTabsValue)
                }
              })
            } else {
              this.$swal({
                icon: 'error',
                title: '创建任务失败,任务名称已存在',
                text: json.msg
              })
              return false;
            }
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '任务创建失败',
            text: '请检查参数设置!'
          });
          return false;
        }
      });
    },
    clickCancel() {
      this.$router.push({
        name: this.$store.state.tab.editableTabs[new Number(this.$store.state.tab.editableTabsValue) - 2].content
      })
      this.$store.commit('removeTab', this.$store.state.tab.editableTabsValue)
    },
    handleLeftChange(val) {
      this.leftSelection = val;
    },
    handleRightChange(val) {
      this.rightSelection = val;
    },
    clickHigh() {
      this.leftSelection.forEach(item => {
        this.rightVoiceData.push(item)
        this.leftVoiceData.splice(this.leftVoiceData.findIndex(p => p.voice == item.voice), 1)
        this.remainVoiceData.splice(this.remainVoiceData.findIndex(p => p.voice == item.voice), 1)
      })
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.rightVoiceCount = `已加入语料（${this.rightVoiceData.length}）`
      this.bubbleSort(this.leftVoiceData)
      this.bubbleSort(this.rightVoiceData)
    },
    clickLow() {
      this.rightSelection.forEach(item => {
        this.leftVoiceData.push(item)
        this.remainVoiceData.push(item)
        this.rightVoiceData.splice(this.rightVoiceData.findIndex(p => p.voice == item.voice), 1)
      })
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.rightVoiceCount = `已加入语料（${this.rightVoiceData.length}）`
      this.bubbleSort(this.leftVoiceData)
      this.bubbleSort(this.rightVoiceData)
    },
    clickQuery() {
      this.leftVoiceData = this.remainVoiceData.filter(item => item.voice.includes(this.queryVoice))
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.bubbleSort(this.leftVoiceData)
    },
    cancelQuery() {
      this.leftVoiceData = JSON.parse(JSON.stringify(this.remainVoiceData))
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.bubbleSort(this.leftVoiceData)
    },
    bubbleSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          // 如果前一个比后一个大,则交换位置
          if (parseInt(arr[j].voice.split('_')[0]) > parseInt(arr[j + 1].voice.split('_')[0])) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
      }
      return arr
    }
  },
  mounted() {
    this.$api.file.getTrainFile().then(({ data }) => {
      var json = JSON.parse(data);
      if (json.status == 0) {
        this.leftVoiceData = json.result
        this.remainVoiceData = JSON.parse(JSON.stringify(json.result))
        this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
        this.bubbleSort(this.leftVoiceData)
      }
    })

    this.$api.file.getDbFile().then(({ data }) => {
      var json = JSON.parse(data);
      if (json.status == 0) {
        this.dbFiles = json.result
      }
    })
  }
}
</script>
  
<style lang="less" scoped>
.edit {
  margin-top: 25px;

  .el-form-item {
    margin-bottom: 80px;
  }


  .audio {
    height: 20px;
  }
}

.saveButton {
  margin-left: 100px;
}

.cancelButton {
  margin-left: 50px;
}

.highButton {
  margin-left: 0px;
  margin-top: 280px;
}

.lowButton {
  margin-left: 0px;
  margin-top: 5px;
}
</style>
  