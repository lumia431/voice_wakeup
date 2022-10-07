<template>
    <div>
        <el-col class="col" :gutter="24">
            <el-row :span="8" style="margin-top: 20px">
                <el-card style="height: 250px">
                    <div style="height: 250px" ref="left"></div>
                </el-card>
                <el-row :span="8" style="margin-top: 20px">
                    <el-card style="height: 250px">
                        <div style="height: 250px" ref="middle"></div>
                    </el-card>
                </el-row>
                <el-row :span="8" style="margin-top: 20px">
                    <el-card style="height: 250px">
                        <div style="height: 250px" ref="right"></div>
                    </el-card>
                </el-row>
            </el-row>
        </el-col>
    </div>
</template>
  <script>
import { EleResize } from '@/utils/esresize'// 图表自适应
export default {
    name: 'AppReport20031',
    data() {
        return {

        }
    },
    mounted() {
        const seriesLeft = []

        seriesLeft.push({
            name: '一级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[0].voiceData[0].modelData.map(item => item['first'])
        })
        seriesLeft.push({
            name: '二级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[0].voiceData[0].modelData.map(item => item['second'])
        })
        seriesLeft.push({
            name: '三级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[0].voiceData[0].modelData.map(item => item['third'])
        })
        seriesLeft.push({
            name: '亮屏率',
            type: 'bar',
            data: this.$store.state.task.testData.data[0].voiceData[0].modelData.map(item => item['liangping'])
        })
        seriesLeft.push({
            name: '总唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[0].voiceData[0].modelData.map(item => item['sceneRate'])
        })
        const xAxisLeft = { data: ['home', 'market', 'office', 'outdoors', 'car_80km', 'car_80km_r', 'AEC_8', 'AEC_16', 'IAR', 'FA', 'Qoe'] }
        const yAxisLeft = [{}]
        this.initChart(this.$refs.left, 'heybreeno仿真报告', xAxisLeft, yAxisLeft, seriesLeft)

        const seriesMiddle = []

        seriesMiddle.push({
            name: '一级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[1].voiceData[0].modelData.map(item => item['first'])
        })
        seriesMiddle.push({
            name: '二级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[1].voiceData[0].modelData.map(item => item['second'])
        })
        seriesMiddle.push({
            name: '三级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[1].voiceData[0].modelData.map(item => item['third'])
        })
        seriesMiddle.push({
            name: '亮屏率',
            type: 'bar',
            data: this.$store.state.task.testData.data[1].voiceData[0].modelData.map(item => item['liangping'])
        })
        seriesMiddle.push({
            name: '总唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[1].voiceData[0].modelData.map(item => item['sceneRate'])
        })
        const xAxisMiddle = { data: ['home', 'market', 'office', 'outdoors', 'car_80km', 'car_80km_r', 'AEC_8', 'AEC_16', 'IAR', 'FA', 'Qoe'] }
        const yAxisMiddle = [{}]
        this.initChart(this.$refs.middle, 'nihaoxiaobu仿真报告', xAxisMiddle, yAxisMiddle, seriesMiddle)

        const seriesRight = []

        seriesRight.push({
            name: '一级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[2].voiceData[0].modelData.map(item => item['first'])
        })
        seriesRight.push({
            name: '二级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[2].voiceData[0].modelData.map(item => item['second'])
        })
        seriesRight.push({
            name: '三级唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[2].voiceData[0].modelData.map(item => item['third'])
        })
        seriesRight.push({
            name: '亮屏率',
            type: 'bar',
            data: this.$store.state.task.testData.data[2].voiceData[0].modelData.map(item => item['liangping'])
        })
        seriesRight.push({
            name: '总唤醒率',
            type: 'bar',
            data: this.$store.state.task.testData.data[2].voiceData[0].modelData.map(item => item['sceneRate'])
        })
        const xAxisRight = { data: ['home', 'market', 'office', 'outdoors', 'car_80km', 'car_80km_r', 'AEC_8', 'AEC_16', 'IAR', 'FA', 'Qoe'] }
        const yAxisRight = [{}]
        this.initChart(this.$refs.right, 'xiaobuxiaobu仿真报告', xAxisRight, yAxisRight, seriesRight)

    },
    methods: {
        initChart(domName, titile, xAxis, yAxis, series) {
            var myChart = this.$echarts.init(domName)
            // 图表自适应
            const listener = function () {
                myChart.resize()
            }
            EleResize.on(domName, listener)
            var option = {
                title: {
                    text: titile
                },
                tooltip: {
                    trigger: "axis"
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataView: {},
                        myFull: { // 全屏
                            show: true,
                            title: '全屏',
                            icon: 'path://M163.2 94.08a48 48 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m145.28 279.04a48 48 0 0 0 67.84 0 48 48 0 0 0 0-67.84L308.48 373.12z m-213.12-211.2l213.12 211.2 67.84-67.84-213.12-211.2-67.84 67.84zM95.36 859.52a48 48 0 0 0 67.84 68.48l-67.84-68.48z m280.96-142.72a48 48 0 0 0-67.84-68.48l67.84 68.48z m-213.12 211.2l213.12-211.2-67.84-68.48-213.12 211.2 67.84 68.48zM863.36 928a48 48 0 0 0 67.84-67.84l-67.84 67.84z m-143.36-279.04a47.36 47.36 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m211.2 211.2l-211.2-211.2-67.84 67.84 211.2 211.2 67.84-67.84zM929.28 161.92a48 48 0 0 0 0-67.84 49.28 49.28 0 0 0-68.48 0l68.48 67.84z m-279.68 143.36a48 48 0 0 0 0 67.84 49.28 49.28 0 0 0 68.48 0l-68.48-67.84z m211.2-211.2l-211.2 211.2 68.48 67.84 211.2-211.2-68.48-67.84z',
                            onclick: () => {
                                // 全屏查看
                                if (domName.requestFullScreen) { // HTML W3C 提议
                                    domName.requestFullScreen()
                                } else if (domName.msRequestFullscreen) { // IE11
                                    domName.msRequestFullScreen()
                                } else if (domName.webkitRequestFullScreen) { // Webkit
                                    domName.webkitRequestFullScreen()
                                } else if (domName.mozRequestFullScreen) { // Firefox
                                    domName.mozRequestFullScreen()
                                }
                                // 退出全屏
                                if (domName.requestFullScreen) {
                                    document.exitFullscreen()
                                } else if (domName.msRequestFullScreen) {
                                    document.msExitFullscreen()
                                } else if (domName.webkitRequestFullScreen) {
                                    document.webkitCancelFullScreen()
                                } else if (domName.mozRequestFullScreen) {
                                    document.mozCancelFullScreen()
                                }
                            }
                        }
                    }
                },
                legend: {
                },
                xAxis,
                yAxis,
                series
            }
            option && myChart.setOption(option)
        }
    }
}
</script>
  <style lang="less" scoped>
  .row {
      margin-top: 50px;
  }
  </style>