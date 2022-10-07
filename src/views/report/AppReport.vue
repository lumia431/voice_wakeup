<template>
    <div>
        <div class="block">
            <span class="demonstration"></span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'AppReport',
    data() {
        return {
            value: ['report'],
            options: [
                {
                    value: 'report',
                    label: '整体报告'
                },
                {
                    value: 'moxingtu',
                    label: '各模型测试报告',
                    children: []
                },
                {
                    value: 'fangzhentu',
                    label: '各场景测试报告',
                    children: [
                        {
                            value:'reportHome',
                            label: 'home',
                        },
                        {
                            value:'market',
                            label: 'market',
                        },
                        {
                            value:'office',
                            label: 'office',
                        },
                        {
                            value:'outdoors',
                            label: 'outdoors',
                        },
                        {
                            value:'car_80km',
                            label: 'car_80km',
                        },
                        {
                            value:'car_80km_r',
                            label: 'car_80km_r',
                        },
                        {
                            value:'AEC_8',
                            label: 'AEC_8',
                        },
                        {
                            value:'AEC_16',
                            label: 'AEC_16',
                        },
                        {
                            value:'IAR',
                            label: 'IAR',
                        },
                        {
                            value:'FA',
                            label: 'FA',
                        }
                    ]
                },
            ]
        };
    },
    methods: {
        handleChange(value) {
            this.$router.push({
                name: value.length > 1 ? value[1] : value[0]
            })
        }
    },
    mounted() {
        this.$store.state.task.curTask.modelList.forEach(element => {
            this.options[1].children.push({
                value: element,
                label: element
            })
        });
    }
}
</script>
<style lang="less" scoped>
.block {
    margin-top: 10px;
}
</style>