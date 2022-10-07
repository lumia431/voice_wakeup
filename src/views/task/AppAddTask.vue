<template>
  <el-form class='edit' ref="form" :model="form" label-width="80px" :rules="addFormRules">
    <el-row :gutter="18">
      <el-col :span="7">
        <el-card shadow="hover">
          <el-form-item label="任务名称" prop="taskname">
            <el-input placeholder="请输入任务名称" maxlength="10" v-model="form.taskname" :disabled="isCreated"></el-input>
          </el-form-item>
          <el-form-item label="db路径" prop="dbPath">
            <el-input placeholder="请输入db文件路径" v-model="form.dbPath" :disabled="isCreated"></el-input>
          </el-form-item>

          <el-form-item label="语料文件" prop="voiceFile">
            <el-select class="voiSelect" :disabled="isCreated" v-model="form.voiceFile" filterable clearable
              placeholder="请选择语料文件" allow-create default-first-option @change="voiceChange">
              <el-option v-for="item in voiceFiles" :label="item" :value="item"></el-option>
            </el-select>
            <audio class='voiAudio' ref="voiceAudio" :src="voiceSrc" controls="controls"></audio>
          </el-form-item>

          <el-form-item label="噪声文件" prop="noiseFile">
            <el-select v-model="form.noiseFile" :disabled="isCreated" filterable clearable placeholder="请选择噪声文件"
              allow-create default-first-option @change="noiseChange">
              <el-option v-for="item in noiseFiles" :label="item" :value="item"></el-option>
            </el-select>
            <audio class='noiAudio' ref="noiseAudio" :src="noiseSrc" controls="controls"></audio>
          </el-form-item>

          <el-form-item label="线程数量" prop="threadNum">
            <el-select v-model="form.threadNum" :disabled="isCreated" filterable clearable placeholder="请选择线程数"
              allow-create default-first-option>
              <el-option v-for="n in 100" :label="n" :value="n"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="model" label="模型选择" prop="modelList">
            <el-checkbox-group v-model="form.modelList" :disabled="isCreated">
              <el-checkbox label="20031" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="20846" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="21001" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="21005" :checked="true" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item class="project" label="仿真方式" prop="projectList">
            <el-checkbox-group v-model="form.projectList" :disabled="isCreated">
              <el-checkbox label="TPR" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="AEC" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="FA" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="IAR" :checked="true" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item class="project" label="唤醒词语" prop="wordList">
            <el-checkbox-group v-model="form.wordList" :disabled="isCreated">
              <el-checkbox label="heybreeno" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="nihaoxiaobu" :checked="true" name="type"></el-checkbox>
              <el-checkbox label="xiaobuxiaobu" :checked="true" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-button class="makeButton" :disabled="isCreated" size="medium" type="primary" plain
            icon="el-icon-circle-check" @click="clickMake('form')">生成任务
          </el-button>

        </el-card>
      </el-col>
      <el-col :span="3">
        <!-- 搜索与添加区域 -->
        <el-tree :data="treeData" show-checkbox :props="defaultProps" node-key="id" :default-expanded-keys="[1]"
          ref="tree" @check-change="handleCheckChange" @check="handleCheck"></el-tree>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <el-input class='voiceInput' placeholder="请输入关键字" clearable v-model="queryVoice">
            <el-button slot="prepend" icon="el-icon-arrow-left" @click="cancelQuery"></el-button>
            <el-button slot="append" icon="el-icon-search" @click="clickQuery"></el-button>
          </el-input>
          <el-table ref="multipleTable" :data="leftVoiceData" :row-style="{height: '0'}" :cell-style="{padding: '0'}"
            height="700px" tooltip-effect="dark" style="width: 100%" @selection-change="handleLeftChange">

            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="voice" :label="leftVoiceCount">
              <template slot-scope="scope">
                <div style="font-size:10px">
                  {{ scope.row.voice }}
                </div>
              </template>
            </el-table-column>
          </el-table>

        </el-card>
        <el-button class="saveButton" type="primary" plain icon="el-icon-circle-check" @click="clickSave">保存退出
        </el-button>

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
            height="750px" tooltip-effect="dark" style="width: 100%" @selection-change="handleRightChange">
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
        dbPath: 'd:/WakeupTest.db',
        voiceFile: '',
        noiseFile: '',
        threadNum: '',
        startFlg: false,
        progress: 0,
        interval: 0,
        modelList: [],
        projectList: [],
        wordList: [],
        user_email: '',
        TPRConfig: []
      },
      reqForm: {
        taskname: '',
        uuid: '',
        createtime: '',
        dbPath: '',
        voiceFile: '',
        noiseFile: '',
        threadNum: '',
        startFlg: false,
        progress: 0,
        interval: 0,
        modelList: '',
        projectList: '',
        wordList: '',
        user_email: '',
        TPRConfig: ''
      },
      voiceSrc: "",
      noiseSrc: "",
      voiceFiles: [],
      noiseFiles: [],
      leftVoiceCount:`未加入语料（0）`,
      rightVoiceCount:`已加入语料（0）`,
      allVoiceData: [],
      leftVoiceData: [],
      rightVoiceData: [],
      leftSelection: [],
      rightSelection: [],
      queryVoice: '',
      queryVoiceData:[],
      modelValues: [],
      wordValues: [],
      sceneList: [],
      isCreated: false,
      treeData: [
        {
          id: 1,
          layer: 0,
          label: '语料添加',
          children: []
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeNodeChange: false
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
    clickMake(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.reqForm = JSON.parse(JSON.stringify(this.form))
          this.reqForm.user_email = localStorage.getItem('username')
          this.reqForm.modelList = this.reqForm.modelList.join(',')
          this.reqForm.projectList = this.reqForm.projectList.join(',')
          this.reqForm.wordList = this.reqForm.wordList.join(',')
          this.$api.task.addTask(this.reqForm).then(({ data }) => {
            var json = JSON.parse(data);
            if (json.status == 0) {
              this.isCreated = true
              this.makeSceneList()
              this.makeTree()
              this.$swal({
                position: 'top-end',
                icon: 'success',
                title: '任务创建成功',
                showConfirmButton: false,
                timer: 1500
              });

              this.$api.voice.getVoice({
                path: this.form.dbPath,
                modelList: this.form.modelList.join(','),
                wordList: this.form.wordList.join(','),
                sceneList: this.sceneList.join(','),
              }).then(({ data }) => {
                var json = JSON.parse(data);
                if (json.status == 0) {
                  this.leftVoiceData = json.result
                  this.allVoiceData = JSON.parse(JSON.stringify(json.result));
                  this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
                } else {
                  this.$swal({
                    icon: 'error',
                    title: '查询测试样本失败',
                    text: json.msg
                  })
                }
              })
            } else {
              this.$swal({
                icon: 'error',
                title: '创建任务失败,任务名称已存在',
                text: json.msg
              })
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
    clickSave() {
      this.$api.voice.addVoice({
        voice: this.rightVoiceData.map(item => item['voice']).join(','),
        task: this.form.taskname
      }).then(({ data }) => {
        var json = JSON.parse(data);
        if (json.status == 0) {
          this.$swal({
            position: 'top-end',
            icon: 'success',
            title: '保存成功',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
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
      })
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.rightVoiceCount = `已加入语料（${this.rightVoiceData.length}）`
    },
    clickLow() {
      this.rightSelection.forEach(item => {
        this.leftVoiceData.push(item)
        this.rightVoiceData.splice(this.rightVoiceData.findIndex(p => p.voice == item.voice), 1)
      })
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
      this.rightVoiceCount = `已加入语料（${this.rightVoiceData.length}）`
    },
    clickQuery() {
      this.queryVoiceData = this.leftVoiceData
      this.leftVoiceData = this.leftVoiceData.filter(item => item.voice.includes(this.queryVoice))
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
    },
    cancelQuery() {
      this.leftVoiceData = this.queryVoiceData
      this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
    },
    handleCheckChange(data, checked, indeterminate) {
      this.treeNodeChange = checked
    },

    handleCheck(node, checkd) {
      if (this.treeNodeChange) {
        switch (node.layer) {
          case 0:
            this.leftVoiceData = JSON.parse(JSON.stringify(this.allVoiceData));
            this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
            break
          case 1:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList:this.form.modelList.join(','),
              sceneList:this.sceneList.join(',')
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                json.result.forEach(item => {
                  if (this.leftVoiceData.findIndex(p => p.voice == item.voice) == -1)
                    this.leftVoiceData.push(item)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
          case 2:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList: node.model,
              sceneList:this.sceneList.join(',')
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                json.result.forEach(item => {
                  if (this.leftVoiceData.findIndex(p => p.voice == item.voice) == -1)
                    this.leftVoiceData.push(item)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
          case 3:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList: node.model,
              sceneList: node.scene
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                json.result.forEach(item => {
                  if (this.leftVoiceData.findIndex(p => p.voice == item.voice) == -1)
                    this.leftVoiceData.push(item)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
        }
      } else {
        switch (node.layer) {
          case 0:
            this.leftVoiceData = [];
            this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
            break
          case 1:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList:this.form.modelList.join(','),
              sceneList:this.sceneList.join(',')
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                this.leftVoiceData.splice()
                json.result.forEach(item => {
                  this.leftVoiceData.splice(this.leftVoiceData.findIndex(p => p.voice == item.voice), 1)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
          case 2:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList: node.model,
              sceneList:this.sceneList.join(',')
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                json.result.forEach(item => {
                  this.leftVoiceData.splice(this.leftVoiceData.findIndex(p => p.voice == item.voice), 1)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
          case 3:
            this.$api.voice.getVoice({
              path: this.form.dbPath,
              wordList: node.word,
              modelList: node.model,
              sceneList: node.scene
            }).then(({ data }) => {
              var json = JSON.parse(data);
              if (json.status == 0) {
                json.result.forEach(item => {
                  this.leftVoiceData.splice(this.leftVoiceData.findIndex(p => p.voice == item.voice), 1)
                })
                this.leftVoiceCount = `未加入语料（${this.leftVoiceData.length}）`
              }
            })
            break
        }
      }
    },
    makeTree() {
      this.treeData[0].children.length = 0
      var id = 1
      var arr = new Array
      arr.push(1)
      this.form.wordList.forEach((wordItem) => {
        var wordChildren = new Array
        this.treeData[0].children.push({
          id: ++id,
          label: wordItem,
          layer: 1,
          word: wordItem,
          children: wordChildren
        })
        this.form.modelList.forEach((modelItem) => {
          var modelChildren = new Array
          var modelNode = {
            label: modelItem,
            layer: 2,
            word: wordItem,
            model: modelItem,
            children: modelChildren
          }
          wordChildren.push(modelNode)
          this.sceneList.forEach((projItem) => {
            var projNode = {
              label: projItem,
              layer: 3,
              word: wordItem,
              model: modelItem,
              scene: projItem
            }
            modelChildren.push(projNode)
          })
        })
        arr.push(id)
      })
      this.$nextTick(function () {
        this.$refs.tree.setCheckedKeys(arr)
      })
    },
    makeSceneList() {
      this.sceneList.length = 0
      if (this.form.projectList.includes('TPR')) {
        this.sceneList.push('home')
        this.sceneList.push('office')
        this.sceneList.push('market')
        this.sceneList.push('outdoors')
        this.sceneList.push('car_80km')
        this.sceneList.push('car_80km_music')
      }
      if (this.form.projectList.includes('AEC')) {
        this.sceneList.push('AEC_8')
        this.sceneList.push('AEC_16')
      }
      if (this.form.projectList.includes('FA')) {
        this.sceneList.push('FA')
      }
      if (this.form.projectList.includes('IAR')) {
        this.sceneList.push('IAR')
      }
    },
    voiceChange() {
      this.voiceSrc = require('../../voice/' + this.form.voiceFile);
    },
    noiseChange() {
      this.noiseSrc = require('../../noise/' + this.form.noiseFile);
    }
  },
  mounted() {
    this.$api.file.getVoiceFile().then(({ data }) => {
      var json = JSON.parse(data);
      if (json.status == 0) {
        this.voiceFiles = json.result
      }
    })

    this.$api.file.getNoiseFile().then(({ data }) => {
      var json = JSON.parse(data);
      if (json.status == 0) {
        this.noiseFiles = json.result
      }
    })
  }
}
</script>
  
<style lang="less" scoped>
.edit {
  margin-top: 25px;

  .el-form-item {
    margin-bottom: 35px;
  }
}

.makeButton {
  margin-left: 150px;
}

.saveButton {
  margin-top: 20px;
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
  