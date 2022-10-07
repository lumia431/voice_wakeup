<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
    name: 'AppHome',
    components: {
        CommonAside,
        CommonHeader
    },
    data() {
        return {}
    },
    methods: {
        beforeunloadFn(e) {
            console.log('刷新或关闭')
            // ...
        }
    },
    destroyed() {
        console.log('刷新或关闭')
        window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
    },
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: #333;
}

.el-main {
    padding-top: 0;
}
</style>
