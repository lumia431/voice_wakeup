<template>
    <div>
        <el-row class="row" :gutter="24">
            <el-col :span="8" style="margin-top: 20px">
                <el-card style="height: 500px">
                    <div style="height: 500px" ref="left"></div>
                </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 20px">
                <el-card style="height: 500px">
                    <div style="height: 500px" ref="middle"></div>
                </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 20px">
                <el-card style="height: 500px">
                    <div style="height: 500px" ref="right"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
  <script>
import { EleResize } from '@/utils/esresize'// 图表自适应
export default {
    name: 'AppReport21005',
    data() {
        return {

        }
    },
    mounted() {
        const series = []
        this.$store.state.task.curTask.modelList.forEach(element => {
            series.push({
                name: element,
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            })
        });
        // 初始画图
        const xAxis = { data: ['home', 'market', 'office', 'outdoors', 'car_80km', 'car_80km_r', 'AEC_8', 'AEC_16', 'IAR', 'FA', 'Qoe'] }
        const yAxis = [{}]

        this.initChart(this.$refs.left, '销量图', xAxis, yAxis, series)
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