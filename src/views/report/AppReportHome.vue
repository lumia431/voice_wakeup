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
    name: 'AppReportAec',
    data() {
        return {

        }
    },
    mounted() {
        const seriesLeft = []
        this.$store.state.task.testData.data[0].voiceData.forEach(element => {
            seriesLeft.push({
                name: element.model,
                type: 'bar',
                data: [element.modelData[0].first,element.modelData[0].second,element.modelData[0].third,element.modelData[0].liangping,element.modelData[0].sceneRate]
            })
        });
        const xAxisLeft = { data: ['一级唤醒率', '二级唤醒率', '三级唤醒率', '亮屏率', '总唤醒率'] }
        const yAxisLeft = [{}]
        this.initChart(this.$refs.left, 'heybreeno仿真报告', xAxisLeft, yAxisLeft, seriesLeft)

        const seriesMiddle = []
        this.$store.state.task.testData.data[1].voiceData.forEach(element => {
            seriesMiddle.push({
                name: element.model,
                type: 'bar',
                data: [element.modelData[0].first,element.modelData[0].second,element.modelData[0].third,element.modelData[0].liangping,element.modelData[0].sceneRate]
            })
        });
        const xAxisMiddle = { data: ['一级唤醒率', '二级唤醒率', '三级唤醒率', '亮屏率', '总唤醒率'] }
        const yAxisMiddle = [{}]
        this.initChart(this.$refs.middle, 'nihaoxiaobu仿真报告', xAxisMiddle, yAxisMiddle, seriesMiddle)

        const seriesRight = []
        this.$store.state.task.testData.data[2].voiceData.forEach(element => {
            seriesRight.push({
                name: element.model,
                type: 'bar',
                data: [element.modelData[0].first,element.modelData[0].second,element.modelData[0].third,element.modelData[0].liangping,element.modelData[0].sceneRate]
            })
        });
        const xAxisRight = { data: ['一级唤醒率', '二级唤醒率', '三级唤醒率', '亮屏率', '总唤醒率'] }
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