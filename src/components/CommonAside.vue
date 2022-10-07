<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" unique-opened :collapse="isCollapse"
      :collapse-transition="false">
      <h3>{{  isCollapse ? '' : '语音唤醒仿真测试系统'  }}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{  item.label  }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{  item.label  }}</span>
        </template>
        <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">{{  subItem.label  }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<style lang="less" scoped>
.el-aside {
  width: 200px;
  min-height: 100%;
  background-color: #545c64;
}

// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }

.el-menu {
  height: 100%;
  border: none;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/task',
          name: 'task',
          label: '任务中心',
          icon: 'document'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      if(this.$router.currentRoute.name != item.name){
        this.$router.push({
        name: item.name
      })
      }
      this.$store.commit('addTab', {
        content:item.name,
        title:item.label
      })
    }
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asyncMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    asyncMenu() {
      return this.menu
    }
  }
}
</script>