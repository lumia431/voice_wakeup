<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" contain height="100px" width="150px">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2022-8-29</span></p>
                    <p>上次登录地点：<span>南京</span></p>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'AppHome',
    data() {
        return {
            userImg: require('../assets/images/user.png'),
        }
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

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

  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;

      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
</style>