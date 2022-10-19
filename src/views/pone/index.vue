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
          Sentiment Anylysis in Topic View
        </div>
        <div class="module2">
          <div class="chart2" ref="chart4_1">
          </div>
          <div class="chart2" ref="chart4">
          </div>
        </div>

      </div>
    </div>
    <div class="line1" style="height:525px;margin-top:1px;">
      <div class="item2" style="width:99%;margin-left:0">
        <h4>Deep Dive in Sentiment Analysis for Topics</h4>
        <div class="top5">
          <h4>Sentimental Polarity for Top 5 Aspects</h4>
          <ul>
            <li class="piecharts" ref="chart5_1"></li>
            <li class="piecharts" ref="chart5_2"></li>
            <li class="piecharts" ref="chart5_3"></li>
            <li class="piecharts" ref="chart5_4"></li>
            <li class="piecharts" ref="chart5_5"></li>
          </ul>
        </div>

        <div class="details">
          <h4>Top 5 Opinions for Top 5 Aspects</h4>
          <ul>
            <li class="barcharts" ref="chart6_1"></li>
            <li class="barcharts" ref="chart6_2"></li>
            <li class="barcharts" ref="chart6_3"></li>
            <li class="barcharts" ref="chart6_4"></li>
            <li class="barcharts" ref="chart6_5"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line1" style="height:220px;margin-top:1px;">
      <div class="item3">

        <h4 class="chart_title">
          Sentiment Anylysis in Keyword View
        </h4>
        <div style="width:40%;float:left">
          <div class="select">
            <span style="margin-left:20px">Keyword:</span>
            <el-select v-model="value" placeholder="请选择" style="margin-left:30px">
              <el-option v-for="item in keywords" :key="item.value" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
            <el-button type="primary" @click="drawChart" style="margin-top:5%;margin-right:10%;float:right">Query
            </el-button>
          </div>
          <div>

          </div>
        </div>
        <div class="box4" ref="chart7">

        </div>
      </div>
      <div class="box3">
        <div class="aspect_title">
          Information Extraction via Q&A
        </div>
        <!-- <h6 style="text-align:center;margin-top:10px;font-weight:400;">
          对抽取出的观点进行深入挖掘
        </h6> -->
        <div class="select" style="margin-top:30px">
          <el-select v-model="questionSelect" placeholder="请选择" size="mini"
            style="width:50%;margin-left:15%;float:left">
            <el-option v-for="item in questions" :key="item.value" :label="item.label" :value="item.label">
            </el-option>
          </el-select>
          <el-button type="primary" @click="getAnswer" size="mini" style="float:left;width:50px;margin-left:20px;">Ask
          </el-button>
        </div>
        <div style="margin-top:30px;margin-left:15%;">
          <div class="answer" style="float:left;">
            Answer:
          </div>
          <el-input v-model="input" type="textarea" resize="none" readonly size="mini"
            style="float:left;width:50%;margin-left:15px;">
          </el-input>
        </div>
      </div>
    </div>
    <div class="line1" style="height:130px;margin-top:1px;">
      <div class="item1" style="width:99%">
        <div class="aspect_title">
          Model View : Training & Iteration
        </div>
        <div class="flexbox">
          <div class="xunlianbox">
            <p>Total Trainning Sample</p>
            <p class="num">120</p>
          </div>

          <div class="xunlianbox">
            <p>Data Predicted for Current Period</p>
            <p class="num">984</p>
          </div>

          <div class="xunlianbox">
            <p>Total Data Predicted</p>
            <p class="num">{{totalnum}}</p>
          </div>

          <!-- <div style="margin:20px;height:70px;width:300px;border:1px solid black;border-radius:4px;float:left">
            <div style="width:140px;float:left;text-align:center;margin:15px 5px">
              <p>当期模型已完成</p>
              <p style="color:#03A213">13099条</p>
            </div>
            <div
              style="width:140px;float:left;text-align:center;margin:15px 5px;background-color:#FFDF25;box-shadow: 5px 5px 5px #888888;float:left">
              <p>待人工审核样本数</p>
              <p style="color:#A11F14">145条</p>
            </div>
          </div>

          <div style="float:left;text-align:center;margin:35px 5px">
            <p style=" background-color: #D7D7D7;">当期手动标注已完成</p>
            <p>34</p>
          </div>
          <div style="float:left;text-align:center;margin:35px 5px;">
            <p style=" background-color: #D7D7D7;">样本库总数量</p>
            <p>256</p>
          </div> -->

          <div>
            <el-button type="primary" @click="dialog.grid2.dialogTableVisible = true"
              style="float:right;margin-top:35px">Sample Pool Maitence
            </el-button>
          </div>

          <div class="rengongbox">
            <p class="rengong">Manually Sample Review</p>
            <div class="dangqi">
              <div>
                <p>Done</p>
                <p class="blue">231</p>
              </div>
              <div class="grey">
                <p>Todo</p>
                <p class="blue">163</p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <!-- <div class="box2">
        <div class="aspect_title">
          Analysis result display
        </div>
        <el-table :data="tableData" height="150" border style="width: 100%">
          <el-table-column prop="aspect" label="Aspect">
          </el-table-column>
          <el-table-column prop="label" label="Label">
          </el-table-column>
          <el-table-column prop="opinions" label="Opinion">
          </el-table-column>
          <el-table-column prop="text" label="Text">
          </el-table-column>
        </el-table>
        <el-pagination small @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-size="10" layout=" prev, pager, next" :total=totalCount>
        </el-pagination>

      </div> -->
      <!-- <div class="box3">
        <div class="aspect_title">
          Flexible Learnings
        </div>
     
        <el-button type="primary" style="margin-left:30%;">手动维护样本库</el-button>
      </div> -->
    </div>




    <el-dialog title="Sample Pool Maitence" @open="getData2" :visible.sync="dialog.grid2.dialogTableVisible">
      <el-button type="primary" @click="dialog.form1.innerVisible = true">New Topic Category</el-button>
      <el-button type="primary" @click="dialog.form2.display = true">New Sample</el-button>
      <el-button type="warning" plain @click="openFullScreen1" v-loading.fullscreen.lock="fullscreenLoading"
        element-loading-text="Model training is in progress, please wait patiently...">Training Model
      </el-button>
      <el-dialog width="30%" title="New Topic Category" @close="resetForm('topicForm')" :visible.sync="dialog.form1.innerVisible"
        append-to-body>
        <el-form :model="dialog.form1.form" ref="topicForm">
          <el-form-item label="Topic Name:" :label-width="dialog.form1.formLabelWidth" prop="name">
            <el-input v-model="dialog.form1.form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="resetForm('topicForm')">cancel</el-button>
          <el-button type="primary" @click="addClass">confirm</el-button>
        </div>
      </el-dialog>


      <el-dialog title="New Sample" @open=datainit @close="resetForm2('dynamicValidateForm')"
        :visible.sync="dialog.form2.display" append-to-body>
        <el-form :model="dialog.form2.dynamicValidateForm" ref="dynamicValidateForm" label-width="100px"
          :rules="dialog.form2.rules" class="demo-dynamic">
          <el-form-item label="topic" prop="topic">
            <el-select v-model="dialog.form2.dynamicValidateForm.topic" placeholder="">
              <el-option v-for="item in dialog.form2.topics" :key="item.value" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-for="(domain, index) in dialog.form2.dynamicValidateForm.domains" :label="'sample' + index"
            :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
              required: true, message: 'The sample can\'t be empty', trigger: 'blur'
            }">
            <el-input v-model="domain.value" style="width:80%"></el-input>
            <el-button style="margin-left:5%" @click.prevent="removeDomain(domain)">delete</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">submit</el-button>
            <el-button @click="addDomain">new sample</el-button>
            <el-button @click="resetForm2('dynamicValidateForm')">reset</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-table :data="dialog.grid2.gridData" max-height="600">
        <el-table-column property="sample" label="sample" width="600"></el-table-column>
        <el-table-column property="topic" label="topic" width="200"></el-table-column>
        <el-table-column fixed="right" label="operation" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">edit</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="edit" @open=datainit :visible.sync="dialog.form3.display" append-to-body>
        <el-form :model="dialog.form3.form" ref="form3" label-width="100px" :rules="dialog.form2.rules"
          class="demo-dynamic">
          <el-form-item label="topic" prop="topic">
            <el-select v-model="dialog.form3.form.topic" placeholder="">
              <el-option v-for="item in dialog.form2.topics" :key="item.value" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="sample" prop="sample" :rules="{
            required: true, message: 'The sample can\'t be empty', trigger: 'blur'
          }">
            <el-input v-model="dialog.form3.form.sample" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="update('form3')">submit</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

    </el-dialog>
  </div>

</template>

<script>
import { getChart1, getOpinion, getAnswer, listPage } from './javasctipt/request'; //注意路径

var vue;


export default {
  name: 'commentAnalysis',
  mounted() {
    // 在通过mounted调用即可
    vue = this;
    this.echartsInit()
  },
  data() {
    return {
      totalnum: '',
      mychart1: null,

      option1: {
        title: {
          text: 'Sentiment Anylysis Overview',
          left: 'left',
          top: 10
        },
        legend: {
          orient: 'horizontal',
          right: 'center',
          top: 'bottom',
          icon: 'circle'

        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: '{b}:{c}' + '\n\r' + '({d}%)'
              }
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
        legend: {
          top: 40
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
            name: 'Positive',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              formatter: '{c}%'
            },
            emphasis: {
              focus: 'series'
            },
            data: [],
            barWidth: 25,
            color: ['#D0E17D']
          },
          {
            name: 'Negative',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              formatter: '{c}%'
            },
            emphasis: {
              focus: 'series'
            },
            data: [],
            barWidth: 25,
            color: ['#FFB8D9']
          }
        ]
      },

      mychart4_1: null,
      chart4_1: [],
      option4_1: {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
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
            name: 'Positive',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series'
            },
            data: [],
            barWidth: 25,
            color: ['#0088FF'],
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
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
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
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
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
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
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
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
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
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}:&nbsp;&nbsp;&nbsp;&nbsp;{d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
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
      mychart6_1: null,
      mychart6_2: null,
      mychart6_3: null,
      mychart6_4: null,
      mychart6_5: null,
      option6_1: {
        title: {
          text: '',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        grid:
        {
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        color: ['#0088FF'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}%'  //y轴数值，带百分号
          },
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      option6_2: {
        title: {
          text: '',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        grid:
        {
          bottom: 0,
          containLabel: true
        },
        color: ['#0088FF'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}%'  //y轴数值，带百分号
          },
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      option6_3: {
        title: {
          text: '',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        grid:
        {
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        color: ['#0088FF'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}%'  //y轴数值，带百分号
          },
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      option6_4: {
        title: {
          text: '',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        grid:
        {
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        color: ['#0088FF'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}%'  //y轴数值，带百分号
          },
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      option6_5: {
        title: {
          text: '',
          x: 'center',
          y: 20,
          textStyle: {
            fontSize: 12
          }
        },
        grid:
        {
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        color: ['#0088FF'],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}%'  //y轴数值，带百分号
          },
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      chart6: [],
      mychart7: null,
      chart7: [],
      option7: {
        title: {
          text: 'Top-10 Positive Opinions for Keyword',
          x: 'center',
          textStyle: {
            fontSize: 12
          }
        },
        grid:
        {
          height:160,
          bottom: 40,
          containLabel: true
        },
        color: ['#FFD384']
        ,
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            rotate:38
          },
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

      keywords: [],
      questions: [],
      value: '',
      questionSelect: '',
      input: '',
      // 总数据
      tableData: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [10, 20, 50, 100],
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      fullscreenLoading: false,
      dialog: {
        grid2: {
          dialogTableVisible: false,
          gridData: [],
        },
        form1: {
          innerVisible: false,
          formLabelWidth: '120px',
          form: {
            name: ''
          },
        },
        form2: {
          rules: {
            topic: [
              { required: true, message: '请选择主题', trigger: 'change' }
            ],
          },
          topics: [],
          display: false,
          dynamicValidateForm: {
            domains: [{
              value: ''
            }],
            topic: ''
          }
        },
        form3: {
          display: false,
          form: {
            topic: '',
            sample: '',
            id: ''
          }

        }
      }



    }
  },
  methods: {
    echartsInit() {
      this.mychart1 = this.$echarts.init(this.$refs.chart1);
      this.mychart1.setOption(this.option1);

      // this.mychart2 = this.$echarts.init(this.$refs.chart2);
      // this.mychart2.setOption(this.option2)

      // this.mychart3 = this.$echarts.init(this.$refs.chart3);
      // this.mychart3.setOption(this.option3)

      this.mychart4 = this.$echarts.init(this.$refs.chart4);
      this.mychart4.setOption(this.option4);

      this.mychart4_1 = this.$echarts.init(this.$refs.chart4_1);
      this.mychart4_1.setOption(this.option4_1);

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

      this.mychart6_1 = this.$echarts.init(this.$refs.chart6_1);
      this.mychart6_1.setOption(this.option6_1);
      this.mychart6_2 = this.$echarts.init(this.$refs.chart6_2);
      this.mychart6_2.setOption(this.option6_2);
      this.mychart6_3 = this.$echarts.init(this.$refs.chart6_3);
      this.mychart6_3.setOption(this.option6_3);
      this.mychart6_4 = this.$echarts.init(this.$refs.chart6_4);
      this.mychart6_4.setOption(this.option6_4);
      this.mychart6_5 = this.$echarts.init(this.$refs.chart6_5);
      this.mychart6_5.setOption(this.option6_5);

      this.mychart7 = this.$echarts.init(this.$refs.chart7);
      this.mychart7.setOption(this.option7);

      getChart1().then(response => {
        let one = response.chartOne
        this.totalnum = one.total;
        this.chart1[0] = {
          value: one.postiveNum,
          name: 'positive',
          itemStyle: {
            color: '#11BA5D'
          }

        }
        this.chart1[1] = {
          value: one.nagetiveNum,
          name: 'negative',
          itemStyle: {
            color: '#FA586D'
          }

        }
        this.option1.series[0].data = this.chart1
        this.mychart1.setOption(this.option1);

        // let two = response.chartTwo;
        // this.chart2 = two;
        // this.option2.series[0].data = this.chart2;
        // this.option2.xAxis.data = getArray(two);
        // this.mychart2.setOption(this.option2);

        // let three = response.chartThree;
        // this.chart3 = three;
        // this.option3.series[0].data = this.chart3;
        // this.option3.xAxis.data = getArray(three);
        // this.mychart3.setOption(this.option3);

        let four = response.chartFour;
        this.chart4 = four;
        this.option4.series[0].data = this.chart4;
        let temp = []
        let temppn = []
        let nntemp = []
        let total = []
        this.chart4.forEach((item) => {
          temp.push(100 - item.value)
          temppn.push(item.pn)
          nntemp.push(item.nn)
          total.push(item.pn + item.nn)
        })

        this.option4.series[1].data = temp;
        let namearr = getArray(four)
        this.option4.yAxis.data = namearr;
        this.mychart4.setOption(this.option4);

        this.option4_1.series[0].data = total;
        this.option4_1.yAxis.data = namearr;
        this.mychart4_1.setOption(this.option4_1);


        let five = response.chartFive;
        this.chart5 = five;

        this.mychart4.on('click', function (params) {
          vue.chart5.forEach((element) => {
            if (element.label == params.name) {
              reCharts(vue.option5_1, element, vue.mychart5_1, 0);
              reCharts(vue.option5_2, element, vue.mychart5_2, 1);
              reCharts(vue.option5_3, element, vue.mychart5_3, 2);
              reCharts(vue.option5_4, element, vue.mychart5_4, 3);
              reCharts(vue.option5_5, element, vue.mychart5_5, 4);
            }
          });

          vue.chart6.forEach((element) => {
            if (element.label == params.name) {
              reChartsSix(vue.option6_1, element, vue.mychart6_1, 0);
              reChartsSix(vue.option6_2, element, vue.mychart6_2, 1);
              reChartsSix(vue.option6_3, element, vue.mychart6_3, 2);
              reChartsSix(vue.option6_4, element, vue.mychart6_4, 3);
              reChartsSix(vue.option6_5, element, vue.mychart6_5, 4);
            }
          });

        });

        this.mychart4_1.on('click', function (params) {
          vue.chart5.forEach((element) => {
            if (element.label == params.name) {
              reCharts(vue.option5_1, element, vue.mychart5_1, 0);
              reCharts(vue.option5_2, element, vue.mychart5_2, 1);
              reCharts(vue.option5_3, element, vue.mychart5_3, 2);
              reCharts(vue.option5_4, element, vue.mychart5_4, 3);
              reCharts(vue.option5_5, element, vue.mychart5_5, 4);
            }
          });

          vue.chart6.forEach((element) => {
            if (element.label == params.name) {
              reChartsSix(vue.option6_1, element, vue.mychart6_1, 0);
              reChartsSix(vue.option6_2, element, vue.mychart6_2, 1);
              reChartsSix(vue.option6_3, element, vue.mychart6_3, 2);
              reChartsSix(vue.option6_4, element, vue.mychart6_4, 3);
              reChartsSix(vue.option6_5, element, vue.mychart6_5, 4);
            }
          });

        });
        this.option5_1.series[0].data = this.chart5[this.chart5.length - 1].list[0].list;
        this.option5_1.title.text = this.chart5[this.chart5.length - 1].list[0].title
        this.mychart5_1.setOption(this.option5_1);

        this.option5_2.series[0].data = this.chart5[this.chart5.length - 1].list[1].list;
        this.option5_2.title.text = this.chart5[this.chart5.length - 1].list[1].title
        this.mychart5_2.setOption(this.option5_2);

        this.option5_3.series[0].data = this.chart5[this.chart5.length - 1].list[2].list;
        this.option5_3.title.text = this.chart5[this.chart5.length - 1].list[2].title
        this.mychart5_3.setOption(this.option5_3);

        this.option5_4.series[0].data = this.chart5[this.chart5.length - 1].list[3].list;
        this.option5_4.title.text = this.chart5[this.chart5.length - 1].list[3].title
        this.mychart5_4.setOption(this.option5_4);

        this.option5_5.series[0].data = this.chart5[this.chart5.length - 1].list[4].list;
        this.option5_5.title.text = this.chart5[this.chart5.length - 1].list[4].title
        this.mychart5_5.setOption(this.option5_5);

        let six = response.chartSix;
        this.chart6 = six;
        reChartsSix(this.option6_1, this.chart6[this.chart6.length - 1], this.mychart6_1, 0);
        reChartsSix(this.option6_2, this.chart6[this.chart6.length - 1], this.mychart6_2, 1);
        reChartsSix(this.option6_3, this.chart6[this.chart6.length - 1], this.mychart6_3, 2);
        reChartsSix(this.option6_4, this.chart6[this.chart6.length - 1], this.mychart6_4, 3);
        reChartsSix(this.option6_5, this.chart6[this.chart6.length - 1], this.mychart6_5, 4);

        this.keywords = response.keywords;
        this.value = this.keywords[0].label;
        this.drawChart();

        this.questions = response.questions;
        this.questionSelect = this.questions[0].label;
        this.getAnswer();





      });
    },
    drawChart() {
      getOpinion(this.value).then(response => {
        let seven = response;
        this.chart7 = seven;
        this.option7.series[0].data = this.chart7;
        this.option7.xAxis.data = getArray(seven);
        this.mychart7.setOption(this.option7);
      });
    },
    getAnswer() {
      getAnswer(this.questionSelect).then(response => {
        this.input = response;
      });
    },
    getData(a, b) {
      // 这里使用axios，使用时请提前引入
      listPage(a, b).then(reponse => {

        // 将数据赋值给tableData
        this.tableData = reponse.list
        // 将数据的长度赋值给totalCount
        this.totalCount = reponse.total

      })
    },
    getData2() {
      this.$axios({
        url: '/proxy/dashboard/getSamples.htm'
      }).then(res => {
        this.dialog.grid2.gridData = res.data.data
      }
      )
    },
    // 分页
    handleSizeChange(val) {
      console.log('改变页数' + val);
      // 改变每页显示的条数 
      this.PageSize = val
      // 点击每页显示的条数时，显示第一页
      this.getData(1, val,)
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1
    },
    // 显示第几页
    handleCurrentChange(val) {
      this.currentPage = val
      // 切换页码时，要获取每页显示的条数

      this.getData((val), this.PageSize)
    },
    addClass() {
      if (this.dialog.form1.form.name == '') { this.$message.error("Topic name can't be empty"); }
      else {
        this.$axios({
          url: '/proxy/dashboard/addTopic.htm',
          params: {
            topic: this.dialog.form1.form.name
          }
        }).then(res => {
          this.$message({
            type: 'success',
            message: res.data.msg,
          })
          this.dialog.form1.form.name = '';
          this.dialog.form1.innerVisible = false;
        })
      }


    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialog.form1.innerVisible = false
    },
    addDomain() {
      this.dialog.form2.dynamicValidateForm.domains.push({
        value: ''
      });
    },
    datainit() {
      this.$axios({
        url: '/proxy/dashboard/getTopic.htm'
      }).then(res => {
        this.dialog.form2.topics = res.data.data
      })
    },
    removeDomain(item) {
      var index = this.dialog.form2.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dialog.form2.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let arr = [];
          this.dialog.form2.dynamicValidateForm.domains.forEach((item) => { arr.push(item.value) })
          if (arr.length < 1) {
            this.$message.error("The sample can't be empty")
            return;
          }
          this.$axios({
            method: "POST",
            url: '/proxy/dashboard/addSample.htm',
            data: {
              topic: this.dialog.form2.dynamicValidateForm.topic,
              samples: arr
            }
          }).then(res => {
            this.$message({
              type: 'success',
              message: res.data.msg,
            })
            this.resetForm2('dynamicValidateForm');
            this.getData2()
          })
        } else {
          return false;
        }
      });
    },
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: "GET",
            url: '/proxy/dashboard/update.htm',
            params: {
              topic: this.dialog.form3.form.topic,
              sample: this.dialog.form3.form.sample,
              id: this.dialog.form3.form.id
            }
          }).then(res => {
            this.$message({
              type: 'success',
              message: res.data.msg,
            })
            this.dialog.form3.display = false
            this.getData2()
          })
        } else {
          return false;
        }
      });
    },
    resetForm2(formName) {
      this.$refs[formName].resetFields();
      this.dialog.form2.dynamicValidateForm.domains = [{
        value: ''
      }]
    },
    handleClick(row) {
      this.dialog.form3.display = true;
      this.dialog.form3.form.topic = row.topic;
      this.dialog.form3.form.sample = row.sample;
      this.dialog.form3.form.id = row.id;
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.$notify({
          title: 'Success',
          message: 'Training completed, please refresh the homepage',
          type: 'success'
        });
      }, 2000);

    }

  },
  created: function () {
    // this.getData(this.currentPage, this.PageSize)
  }


};


function getArray(list) {
  var c = []
  list.forEach((item) => { c.push(item.name) })
  return c;
}

function reCharts(a, b, c, d) {
  a.series[0].data = b.list[d].list;
  a.title.text = b.list[d].title
  c.setOption(a);
}

function reChartsSix(a, b, c, d) {
  a.series[0].data = b.list[d];
  a.title.text = b.list[d][0].title
  a.xAxis.data = getArray(b.list[d]);
  c.setOption(a);
}












</script>

<style>
@import "./styles/style.css";
</style>