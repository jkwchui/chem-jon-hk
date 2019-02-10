<template>
  <v-chart :options="pie"/>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  /* height: 100%; */
}
</style>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie'

export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      pie: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['Personal \nEngagement','Exploration','Analysis','Conclusion & \n Evaluation','Communication']
        },
        series: [
            {
                name:'IA criteria',
                type:'pie',
                color: ['#0064a6', '#009b90', '#e6a23c', '#ad1644', '#909399', '#741669', '#de6328'],
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:2, name:'Personal \nEngagement'},
                    {value:6, name:'Exploration'},
                    {value:6, name:'Analysis'},
                    {value:6, name:'Conclusion & \n Evaluation'},
                    {value:4, name:'Communication'}
                ]
            }
        ]
          }
      // polar: {
      //   title: {
      //     text: '极坐标双数值轴'
      //   },
      //   legend: {
      //     data: ['line']
      //   },
      //   polar: {
      //     center: ['50%', '54%']
      //   },
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: {
      //       type: 'cross'
      //     }
      //   },
      //   angleAxis: {
      //     type: 'value',
      //     startAngle: 0
      //   },
      //   radiusAxis: {
      //     min: 0
      //   },
      //   series: [
      //     {
      //       coordinateSystem: 'polar',
      //       name: 'line',
      //       type: 'line',
      //       showSymbol: false,
      //       data: data
      //     }
      //   ],
      //   animationDuration: 2000
      // }
    }
  }
}
</script>