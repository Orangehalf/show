<template>
  <div class="box">
    <div class="line1">
      <div class="item1">
        <div class="chart1" ref="chart1">

        </div>
        <div class="chaertlabel">
          <div class="chaertlabel_item1 inlineblock" style="margin-left:40px;">统计周期</div>
          <div class="chaertlabel_item1 inlineblock " style="margin-right:40px;float:right">当期数据量</div>
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
    <div class="line1 space" style="height:500px">
      <div class="item1" ref="chart4">

      </div>
      <div class="item2">

      </div>
    </div>
    <div class="line1 space">
      <div class="item1">

      </div>
      <div class="item2">

      </div>
    </div>
    <div class="line1 space">
      <div class="item1">

      </div>
      <div class="item2">

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'commentAnalysis',
  mounted() {
    // 在通过mounted调用即可
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      this.$echarts.init(this.$refs.chart1).setOption(option1);
      this.$echarts.init(this.$refs.chart2).setOption(option2);
      this.$echarts.init(this.$refs.chart3).setOption(option3);
      let mychart = this.$echarts.init(this.$refs.chart4);
      mychart.setOption(option4);
      mychart.on('click', function (params) {
        console.log(params);
      });
    }
  }


};

var option1 = {
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
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' }
      ]
    }
  ]
}

var option2 = {
  title: {
    text: 'Top 10 Positive Aspects',
    x: 'center',
    y: 20,
    textStyle: {
      fontSize: 12
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

var option3 = {
  title: {
    text: 'Top 10 Negative Aspects',
    x: 'center',
    y: 20,
    textStyle: {
      fontSize: 12
    }
  },
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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

var option4 = {
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
      data: [32, 30, 30, 33, 39, 33, 32]
    }
  ]
};

</script>

<style>
.inlineblock {
  display: inline-block;
}

.box {
  width: 1200px;
  height: 800px;
  margin: 5% auto;
}

.line1 {
  height: 250px;
}

.item1 {
  width: 400px;
  height: 100%;
  display: inline-block;
  border: 1px solid #000;
}

.item2 {
  width: 600px;
  height: 100%;
  display: inline-block;
  border: 1px solid #000;
  margin-left: 5%;
  overflow: hidden;
}

.space {
  margin-top: 2%;
}

.chart1 {
  height: 80%;
  width: 100%;
}

.chaertlabel {
  height: 20%;
  width: 100%;
  overflow: hidden;
}

.chaertlabel_item1 {
  background-color: #D7D7D7;
  width: 30%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 30px;

}

.floatleft {
  float: left;
}

.aspect_title {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}

.chart2 {
  display: inline-block;
  width: 50%;
  height: 100%;
}

.module2 {
  width: 100%;
  height: 100%;
}
</style>