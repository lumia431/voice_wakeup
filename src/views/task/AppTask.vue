<template>

  <div class="users">
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
          <el-input placeholder="请输入内容" clearable v-model="queryInfo.query" @clear="getTaskData">
            <el-button slot="append" icon="el-icon-search" @click="getTaskData"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <!-- 添加用户区域 -->
          <el-button type="primary" @click="clickAddTask">任务添加</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table :data="taskData.taskList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="taskname" label="任务名称"></el-table-column>
        <el-table-column prop="createtime" label="创建时间"></el-table-column>
        <el-table-column prop="dbPath" label="db路径"></el-table-column>
        <el-table-column prop="projectList" label="项目内容">
          <template slot-scope="scope">
            <div v-for="s in scope.row.projectList" :key="s">
              {{ s }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="modelList" label="电声模型">
          <template slot-scope="scope">
            <div v-for="s in scope.row.modelList" :key="s">
              {{ s }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="progress" label="状态">
          <template v-slot="scope">
            <el-progress :percentage=scope.row.progress></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="启停操作">
          <template v-slot="scope">
            <!-- 启动任务按钮 -->
            <el-tooltip effect="dark" content="启动任务" placement="top" :enterable="false">
              <el-button type="success" icon="el-icon-thumb" size="mini" @click="startTask(scope.row)">
              </el-button>
            </el-tooltip>
            <!-- 暂停按钮 -->
            <el-tooltip effect="dark" content="暂停任务" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-video-pause" size="mini" @click="pauseTask(scope.row)">
              </el-button>
            </el-tooltip>
            <!-- 结束任务按钮 -->
            <el-tooltip effect="dark" content="结束任务" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-switch-button" size="mini" @click="stopTask(scope.row)">
              </el-button>
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column label="任务操作">
          <template v-slot="scope">

            <!-- 修改任务 -->
            <el-tooltip effect="dark" content="编辑任务" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditView(scope.row)"></el-button>
            </el-tooltip>
            <!-- 删除任务 -->
            <el-tooltip effect="dark" content="删除任务" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeView(scope.row)"></el-button>
            </el-tooltip>
            <!-- 查看报告 -->
            <el-tooltip effect="dark" content="查看报告" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-document" size="mini" @click="showReportView(scope.row)">
              </el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination @current-change="handleCurrentChange" :current-page="queryInfo.pagenum"
        @size-change="handleSizeChange" :page-size="queryInfo.pagesize" :page-sizes="[5, 9, 13, 15]"
        layout="total, sizes, prev, pager, next, jumper" :total="taskData.total">
      </el-pagination>
    </el-card>

  </div>
</template>
  
<script>
import { userAddFormRulesMixin } from '@/common/mixin.js'
export default {
  name: 'AppTask',
  mixins: [userAddFormRulesMixin],
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        user: localStorage.getItem('username'),
        // 搜索值
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每次显示多少条数据
        pagesize: 5
      },
      // 存放用户的数据和数量
      taskData: {
        taskList: [],
        total: 0
      }
    }
  },
  mounted() {
    this.getTaskData()
  },
  methods: {
    async getTaskData() {
      this.$api.task.getTaskList(this.queryInfo).then(({ data }) => {
        var json = JSON.parse(data);
        if (json.status == 0) {
          this.taskData.total = json.result.total
          this.taskData.taskList = json.result.data
        } else {
          this.$swal({
            icon: 'error',
            title: '获取任务列表失败',
            text: json.msg
          })
        }
      })
    },
    // 监听 pagesize 改变事件 每页显示的个数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getTaskData()
    },
    // 监听 页码值 改变的事件 当前页面值
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getTaskData()
    },
    clickAddTask() {
      this.$router.push({
        name: 'addTask'
      })
      this.$store.commit('addTab', {
        content: 'addTask',
        title: '添加任务'
      })
    },
    showEditView(task) {
      this.$store.state.task.curTask = task
      this.$router.push({
        name: 'editTask'
      })
      this.$store.commit('addTab', {
        content: 'editTask',
        title: '编辑任务'
      })
    },
    showReportView(task) {
      this.$store.state.task.curTask = task
      this.$store.state.task.testData.uuid = task.uuid
      this.$router.push({
        name: 'report'
      })
      this.$store.commit('addTab', {
        content: 'report',
        title: '测试报告'
      })
    },
    removeView(task) {
      this.$swal({
        title: 'Are you sure?',
        text: "此操作将永久删除该任务, 是否继续?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          if (task.startFlg) {
            this.$swal("请先结束任务，再删除")
            return
          }
          this.$swal(
            'Deleted!',
            '任务删除成功！',
            'success'
          )
          this.$store.state.task.taskList.splice(this.$store.state.task.taskList.findIndex(item => item.uuid === task.uuid), 1)
          this.taskData.taskList = this.$store.state.task.taskList
          this.taskData.total = this.taskData.taskList.length
        }
      })
    },
    startTask(task) {
      if (task.startFlg) {
        this.$swal("任务已经开始，请勿重复执行!")
        return
      }
      this.$api.voice.getTaskVoice({ task: task.taskname }).then(({ data }) => {
        var json = JSON.parse(data);
        if (json.status == 0) {
          task.startFlg = true
          task.progress = 100
          this.$store.state.task.curReport.set(task.taskname,{
            voiceList:json.result,
            progress:0,
            reportData:[]
          })
          console.log(this.$store.state.task.curReport)
          task.interval = setInterval(() => {
            this.$store.state.task.testData.data[0].voiceData[0].modelData[0].sceneRate++
          }, 1000);
        } else {
          this.$swal({
            icon: 'error',
            title: '启动任务失败',
            text: json.msg
          })
          return
        }
      })

    },
    pauseTask(task) {
      task.startFlg = false
      clearInterval(task.interval)
    },
    stopTask(task) {
      task.startFlg = false
      clearInterval(task.interval)
      task.progress = 0
    }
  }
}
</script>
  
<style lang="less" scoped>
.el-table {
  margin-top: 15px;
}
</style>
  