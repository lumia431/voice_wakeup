<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import global from '@/common/global.js'
export default {
  name: 'App',
  mounted() {
    const that = this
    window.addEventListener("visibilitychange", function () {
      if (document.hidden == false && global.mutex != localStorage.getItem('username')) {
        global.mutex = localStorage.getItem('username')
        that.$swal({
          icon: 'error',
          title: 'Something went wrong!',
          text: '已登录其他用户，即将退出登录'
        }).then(() => {
          that.$router.push({
            name: 'login'
          })
        })
      }
    });
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
}
</style>
