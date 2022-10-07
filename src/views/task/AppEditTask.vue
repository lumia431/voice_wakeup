<template>
  <el-form class='edit' ref="form" :model="form" label-width="80px" :rules="addFormRules">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <el-form-item label="任务名称" prop="taskname">
            <el-input placeholder="请输入任务名称" maxlength="10" v-model="form.taskname"></el-input>
          </el-form-item>
          <!-- <el-form-item class="voice" label="语料文件" prop="voiceFile">
            <el-input placeholder="请选择语料文件" v-model="form.voiceFile"></el-input>
            <form name="voiceForm">
              <input type="file" id="voiceFile" :value="form.voiceFile" style="position:absolute; clip:rect(0 0 0 0);"
                ref="voicefileInput" @change="voiceFileChange">
              <el-button class="voiceButton" size="small" type="primary" plain icon="el-icon-folder"
                onclick="document.voiceForm.voiceFile.click()">选择文件</el-button>
            </form>
          </el-form-item>

          <el-form-item label="噪声文件" prop="noiseFile">
            <el-input placeholder="请选择噪声文件" v-model="form.noiseFile"></el-input>
            <form name="noiseForm">
              <input type="file" id="noiseFile" :value="form.noiseFile" style="position:absolute; clip:rect(0 0 0 0);"
                ref="noisefileInput" @change="noiseFileChange">
              <el-button class="noiseButton" size="small" type="primary" plain icon="el-icon-folder"
                onclick="document.noiseForm.noiseFile.click()">选择文件</el-button>
            </form>
          </el-form-item> -->

          <el-form-item label="语料文件" prop="voiceFile">
            <el-input placeholder="请选择语料文件" v-model="form.voiceFile"></el-input>
          </el-form-item>

          <el-form-item label="噪声文件" prop="noiseFile">
            <el-input placeholder="请选择噪声文件" v-model="form.noiseFile"></el-input>
          </el-form-item>

          <el-form-item label="线程数量" prop="threadNum">
            <el-select v-model="form.threadNum" placeholder="请选择线程数">
              <el-option v-for="n in 100" :label="n" :value="n"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="model" label="模型选择" prop="modelList">
            <el-checkbox-group v-model="form.modelList">
              <el-checkbox label="20031" name="type"></el-checkbox>
              <el-checkbox label="20846" name="type"></el-checkbox>
              <el-checkbox label="21001" name="type"></el-checkbox>
              <el-checkbox label="21005" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item class="project" label="仿真方式" prop="projectList">
            <el-checkbox-group v-model="form.projectList">
              <el-checkbox label="TPR" name="type"></el-checkbox>
              <el-checkbox label="AEC" name="type"></el-checkbox>
              <el-checkbox label="FA" name="type"></el-checkbox>
              <el-checkbox label="IAR" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-col :span="10">
          <el-card shadow="hover">
            <el-table ref="multipleTable" :data="leftVoiceData" :row-style="{height: '0'}" :cell-style="{padding: '0'}"
              max-height="610px" tooltip-effect="dark" style="width: 100%" @selection-change="handleLeftChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="voice" label="未加入语料" width="300">
                <template slot-scope="scope">
                  <div style="font-size:10px">
                    {{ scope.row.voice }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="2">
          <el-button class="highButton" size="medium" type="primary" plain icon="el-icon-right" @click="clickHigh">
          </el-button>
          <el-button class="lowButton" size="medium" type="primary" plain icon="el-icon-back" @click="clickLow">
          </el-button>
        </el-col>
        <el-col :span="10">
          <el-card shadow="hover">
            <el-table ref="multipleTable" :data="rightVoiceData" :row-style="{height: '0'}" :cell-style="{padding: '0'}"
              max-height="610px" tooltip-effect="dark" style="width: 100%" @selection-change="handleRightChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="voice" label="已加入语料" width="300">
                <template slot-scope="scope">
                  <div style="font-size:10px">
                    {{ scope.row.voice }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
    <el-button class="saveButton" size="medium" type="primary" plain icon="el-icon-circle-check"
      @click="clickSave('form')">保存
    </el-button>
    <el-button class="cancelButton" size="medium" type="primary" plain icon="el-icon-circle-close" @click="clickCancel">
      取消</el-button>
  </el-form>
</template>
  
<script>
import { userAddFormRulesMixin } from '@/common/mixin.js'
export default {
  name: 'AppEditTask',
  mixins: [userAddFormRulesMixin],
  data() {
    return {
      form: {
        taskname: '',
        uuid: '',
        createtime: '',
        voiceFile: '',
        noiseFile: '',
        threadNum: '',
        startFlg: false,
        progress: 0,
        interval: 0,
        modelList: [],
        projectList: [],
        TPRConfig: []
      },
      leftVoiceData: [],
      rightVoiceData: [],
      leftSelection: [],
      rightSelection: []
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
      this.$swal({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$store.state.task.taskList.splice(this.$store.state.task.taskList.findIndex(element => element.uuid = this.form.uuid), 1, this.form);
              // this.$router.push({
              //   name: this.$store.state.tab.editableTabs[new Number(this.$store.state.tab.editableTabsValue) - 2].content
              // })
              this.$swal('Saved!', '', 'success')
              // this.$store.commit('removeTab', this.$store.state.tab.editableTabsValue)
            } else {
              this.$swal({
                icon: 'error',
                title: '任务保存失败',
                text: '请检查参数设置!'
              })
              return false;
            }
          });
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info')
        }
      })

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
      })
    },
    clickLow() {
      this.rightSelection.forEach(item => {
        this.leftVoiceData.push(item)
        this.rightVoiceData.splice(this.rightVoiceData.findIndex(p => p.voice == item.voice), 1)
      })
    }
  },
  mounted() {
    this.form = JSON.parse(JSON.stringify(this.$store.state.task.curTask))
    this.$api.user.getVoiceList().then(res => {
      this.leftVoiceData = res.data.voiceData.filter((p) => {
        return this.form.TPRConfig.findIndex(item => item.voice == p.voice) < 0
      });
    })
    this.rightVoiceData = this.form.TPRConfig
  }
}
</script>
  
<style lang="less" scoped>
.edit {
  margin-top: 25px;

  .el-input {
    width: 600px;
  }

  .el-form-item {
    margin-bottom: 60px;
  }
}

.saveButton {
  margin-left: 720px;
  margin-top: 75px;
}

.cancelButton {
  margin-left: 100px;
}

.highButton {
  margin-left: 0px;
}

.lowButton {
  margin-left: 0px;
  margin-top: 5px;
}
</style>
  