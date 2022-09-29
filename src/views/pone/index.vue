<template>
  <div class="box">
    <div class="line1">
      <div class="item1">
        <div class="chart1" ref="chart1">

        </div>
        <div class="chaertlabel">
          <div class="chaertlabel_item1 inlineblock" style="margin-left:40px;">2022/10</div>
          <div class="chaertlabel_item1 inlineblock " style="margin-right:40px;float:right">{{totalnum}}</div>
        </div>
      </div>
      <div class="item2">
        <div class="aspect_title">
          Aspect view
        </div>
        <div class="module2">
          <div class="chart2" ref="chart2">
          </div>
          <div class="chart2" ref="chart3">
          </div>
        </div>

      </div>
    </div>
    <div class="line1 space" style="height:525px">
      <div class="item1" ref="chart4">
      </div>
      <div class="item2">
        <h4>Comment analysis by topics</h4>
        <div class="top5">
          <h4>Top 5 aspects for this topic</h4>
          <ul>
            <li class="piecharts" ref="chart5_1"></li>
            <li class="piecharts" ref="chart5_2"></li>
            <li class="piecharts" ref="chart5_3"></li>
            <li class="piecharts" ref="chart5_4"></li>
            <li class="piecharts" ref="chart5_5"></li>
          </ul>
        </div>

        <div class="details">
          <h4>Opinion details for top 3 aspects</h4>
          <ul>
            <li class="barcharts" ref="chart6_1"></li>
            <li class="barcharts" ref="chart6_2"></li>
            <li class="barcharts" ref="chart6_3"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line1 space" style="height:200px">
      <div class="item1">
        <h4 class="chart_title">
          Customizing Statistic
        </h4>
        <div class="select">
          <span style="margin-left:20px">Keyword:</span>
          <el-select v-model="value" placeholder="请选择" style="margin-left:30px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" style="float:right;margin-top:20px;margin-right:20px;">Query</el-button>
        </div>
        <div>

        </div>
      </div>
      <div class="box2" ref="chart7">

      </div>
      <div class="box3">
        <div class="aspect_title">
          Info extraction via Q&A
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择" size="mini" style="width:120px;margin-left:10px;float:left">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" size="mini" style="float:left;width:50px;margin-left:20px;">Ask</el-button>
        </div>
        <div style="margin-top:30px;margin-left:10px;">
          <div class="answer" style="float:left;">
            Answer:
          </div>
          <el-input v-model="input" :disabled="true" size="mini" style="float:left;width:120px;margin-left:15px;">
          </el-input>
        </div>
      </div>
    </div>
    <div class="line1 space" style="height:200px">
      <div class="item1">
        <div class="aspect_title">
          Sample library statistics
        </div>
        <div style="margin:20px auto;height:70px;width:300px;border:1px solid black;border-radius:4px;">
          <div style="width:140px;float:left;text-align:center;margin:15px 5px">
            <p>当期模型已完成</p>
            <p style="color:#03A213">13099条</p>
          </div>
          <div
            style="width:140px;float:left;text-align:center;margin:15px 5px;background-color:#FFDF25;box-shadow: 5px 5px 5px #888888;">
            <p>待人工审核样本数</p>
            <p style="color:#A11F14">145条</p>
          </div>
        </div>
        <div style="margin:20px auto;height:70px;width:300px;">
          <div style="width:160px;float:left;text-align:center;margin:15px 5px">
            <p style=" background-color: #D7D7D7;">当期手动标注已完成</p>
            <p>34</p>
          </div>
          <div style="width:120px;float:left;text-align:center;margin:15px 5px;">
            <p style=" background-color: #D7D7D7;">样本库总数量</p>
            <p>256</p>
          </div>
        </div>
      </div>
      <div class="box2">
        <div class="aspect_title">
          Analysis result display
        </div>
        <el-table :data="tableData" height="200" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="100">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="100">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>

      </div>
      <div class="box3">
        <div class="aspect_title">
          Flexible Learnings
        </div>
        <el-button type="primary" style="margin:30px 20%;">新增主题类别</el-button>
        <el-button type="primary" style="margin-left:20%;">手动维护样本库</el-button>
      </div>

    </div>

  </div>
</template>

<script>
import * as res from './javasctipt/request'; //注意路径


export default {
  name: 'commentAnalysis',
  mounted() {
    // 在通过mounted调用即可
    this.echartsInit()
  },
  data() {
    return {
      totalnum: '',
      mychart1: null,
      option1: {
        title: {
          text: 'Overview',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '28',
                fontWeight: 'bold',
                formatter: '{d}%' //只要百分比
              }
            },
            labelLine: {
              show: false
            },
            data: this.chart1

          }
        ]
      },
      chart1: [],
      mychart2: null,
      option2: {
        title: {
          text: 'Top 10 Positive Aspects',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item'
        },
        color: ['#FFD384']
        ,
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      chart2: [],
      mychart3: null,
      chart3: [],
      option3: {
        title: {
          text: 'Top 10 Negative Aspects',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item'
        },
        color: ['#5EDDE0'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      mychart4: null,
      chart4: [],
      option4: {
        title: {
          text: 'Topic view',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          },
          formatter: '{c}%'

        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: 100
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: []
        },

        series: [
          {
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              formatter: '{c}%'
            },
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      },
      mychart5_1: null,
      mychart5_2: null,
      mychart5_3: null,
      mychart5_4: null,
      mychart5_5: null,
      option5_1: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
             
            ]
          }
        ]
      },
      option5_2: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
             
            ]
          }
        ]
      },
      option5_3: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
             
            ]
          }
        ]
      },
      option5_4: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
             
            ]
          }
        ]
      },
      option5_5: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
             
            ]
          }
        ]
      },


      chart5: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],

    }
  },
  methods: {
    echartsInit() {
      this.mychart1 = this.$echarts.init(this.$refs.chart1);
      this.mychart1.setOption(this.option1);

      this.mychart2 = this.$echarts.init(this.$refs.chart2);
      this.mychart2.setOption(this.option2)

      this.mychart3 = this.$echarts.init(this.$refs.chart3);
      this.mychart3.setOption(this.option3)

      this.mychart4 = this.$echarts.init(this.$refs.chart4);
      this.mychart4.setOption(this.option4);
      //  mychart.on('click', function (params) {
      //   console.log(params);
      // });
      this.mychart5_1 = this.$echarts.init(this.$refs.chart5_1);
      this.mychart5_1.setOption(this.option5_1);
      this.mychart5_2 = this.$echarts.init(this.$refs.chart5_2);
      this.mychart5_2.setOption(this.option5_2);
      this.mychart5_3 = this.$echarts.init(this.$refs.chart5_3);
      this.mychart5_3.setOption(this.option5_3);
      this.mychart5_4 = this.$echarts.init(this.$refs.chart5_4);
      this.mychart5_4.setOption(this.option5_4);
      this.mychart5_5 = this.$echarts.init(this.$refs.chart5_5);
      this.mychart5_5.setOption(this.option5_5);

      this.$echarts.init(this.$refs.chart6_1).setOption(option6);
      this.$echarts.init(this.$refs.chart6_2).setOption(option6);
      this.$echarts.init(this.$refs.chart6_3).setOption(option6);
      this.$echarts.init(this.$refs.chart7).setOption(option7);
      res.getChart1().then(response => {
        let one = response.chartOne
        this.totalnum = one.total;
        this.chart1[0] = {
          value: one.postiveNum,
          name: 'positive'
        }
        this.chart1[1] = {
          value: one.nagetiveNum,
          name: 'negative'
        }
        this.option1.series[0].data = this.chart1
        this.mychart1.setOption(this.option1);

        let two = response.chartTwo;
        this.chart2 = two;
        this.option2.series[0].data = this.chart2;
        this.option2.xAxis.data = getArray(two);
        this.mychart2.setOption(this.option2);

        let three = response.chartThree;
        this.chart3 = three;
        this.option3.series[0].data = this.chart3;
        this.option3.xAxis.data = getArray(three);
        this.mychart3.setOption(this.option3);

        let four = response.chartFour;
        this.chart4 = four;
        this.option4.series[0].data = this.chart4;
        this.option4.yAxis.data = getArray(four);
        this.mychart4.setOption(this.option4);

        let five = response.chartFive;
        this.chart5 = five;
        console.log(this.chart5);


      });
    }
  }


};


function getArray(list) {
  var c = []
  list.forEach((item) => { c.push(item.name) })
  return c;
}








var option6 = {
  color: ['#5EDDE0'],
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 100, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

var option7 = {
  title: {
    text: 'Customizing view',
    x: 'center',
    textStyle: {
      fontSize: 16
    }
  },
  color: ['#FFD384']
  ,
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

</script>

<style>
@import "./styles/style.css";
</style>