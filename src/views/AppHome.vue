<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userinfo">
              <p class="name">{{ username }}</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col style="margin-top: 20px" :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
            <div class="detail">
              <p class="title">{{ item.title }}</p>
              <p class="value">{{ item.value }}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6" style="margin-top: 50px">
        <p style="text-align: center">未开始任务</p>

        <el-card shadow="hover">
          <div class="wrap_01">
            <CircleProgress :id="2" :radius="20" barColor="blue" content="测试任务一" progress="0" :isAnimation="true">
            </CircleProgress>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" style="margin-top: 50px">
        <p style="text-align: center">运行中任务</p>

        <el-card shadow="hover">
          <div class="wrap_01">
            <CircleProgress :id="3" :radius="20" barColor="yellow" content="测试任务二" :progress="value"
              :isAnimation="true"></CircleProgress>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" style="margin-top: 50px">
        <p style="text-align: center">暂停中任务</p>

        <el-card shadow="hover">
          <div class="wrap_01">
            <CircleProgress :id="4" :radius="20" barColor="red" content="测试任务三" :progress="value" :isAnimation="true">
            </CircleProgress>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" style="margin-top: 50px">
        <p style="text-align: center">已完成任务</p>

        <el-card shadow="hover">
          <div class="wrap_01">
            <CircleProgress :id="5" :radius="20" barColor="green" content="测试任务四" progress="100" :isAnimation="true">
            </CircleProgress>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CircleProgress from "@/components/CircleProgress";
export default {
  name: 'AppHome',
  data() {
    return {
      userImg: require('@/assets/images/user.png'),
      username: localStorage.getItem('username'),
      value: 50,
      countData: [
        {
          title: "未开始任务数量",
          value: 1234,
          icon: "video-play",
          color: "#1b01fe",
        },
        {
          title: "运行中任务数量",
          value: 1234,
          icon: "loading",
          color: "#f2f484",
        },
        {
          title: "暂停中任务数量",
          value: 210,
          icon: "video-pause",
          color: "#fe0303",
        },
        {
          title: "已完成任务数量",
          value: 1234,
          icon: "circle-check",
          color: "#087a02fa",
        },
      ],
    }
  },
  mounted() {
    this.$api.progress.getProgress({
      task: "task1"
    }).then((res) => {
      console.log(res.data)
      var json = JSON.parse(res.data)
      if (json.status == 0) {
        this.$swal({
          position: 'top-end',
          icon: 'success',
          title: '测试成功',
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        this.$swal({
          icon: 'error',
          title: '测试失败',
          text: json.msg
        })
      }
    })
  },
  components: {
    CircleProgress
  }
}
</script>
<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }

    &info {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }

      .access {
        color: #999999;
      }
    }
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
      width: 24%;
      margin-bottom: 20px;
    }

    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: rgb(255, 255, 255);
    }

    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 27px;
        margin-bottom: 10px;
      }

      .value {
        font-size: 35px;
        color: #050505fa;
      }
    }
  }
}
</style>