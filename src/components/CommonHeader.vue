<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" @tab-click="clickTap">
                <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title"
                    :name="item.name" :closable="item.content !== 'home'">
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
export default {
    name: 'CommonHeader',
    data() {
        return {
            userImg: require('../assets/images/user.png'),
        }
    },
    computed: {
        editableTabsValue: {
            get() {
                return this.$store.state.tab.editableTabsValue
            },
            set() { }
        },
        editableTabs: {
            get() {
                return this.$store.state.tab.editableTabs
            },
            set() { }
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        removeTab(targetName) {
            if (targetName == this.$store.state.tab.editableTabsValue) {
                this.$router.push({
                    name: this.$store.state.tab.editableTabs[new Number(this.$store.state.tab.editableTabsValue) - 2].content
                })
                this.$store.commit('removeTab', targetName)
            } else {
                this.$store.commit('removeTab', targetName)
            }
        },
        clickTap(tab) {
            if (this.$router.currentRoute.name != this.$store.state.tab.editableTabs[new Number(tab.name) - 1].content) {
                this.$router.push({
                    name: this.$store.state.tab.editableTabs[new Number(tab.name) - 1].content
                })
            }
            this.$store.state.tab.editableTabsValue = tab.name
        },
        logOut() {
            this.$store.dispatch('UserLogout')
            if (!this.$store.state.token) {
                this.$router.push('/login')
            } else {
                this.$message.error('退出失败');
            }

        }
    }
}
</script>
<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px
    }

    .el-tabs {
        height: 40px;
        background: white;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>