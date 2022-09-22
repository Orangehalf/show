<template>
  <div class="fit">
    <div class="ai-module-section ai-module-introduce">
      <div class="ai-module-header">
        功能介绍
      </div>
      <div class="ai-module-introduce-container">
        <div class="ai-layout-a-list">
        <div class="ai-layout-a-col-8 ai-layout-a-item">
        <div class="ai-layout-a-info-hasLink ai-layout-a-info">
          <div class="ai-layout-a-title">
            情感分析通用版
          </div>
          <div class="ai-layout-a-des">
            针对通用场景下带有主观描述的中文文本，自动判断该文本的情感极性类别并给出相应的置信度，情感极性分为积极、消极、中性
          </div>
          <div class="ai-layout-a-links"></div>
        </div>
      </div>
      <div class="ai-layout-a-col-8 ai-layout-a-item">
        <div class="ai-layout-a-info-hasLink ai-layout-a-info">
          <div class="ai-layout-a-title">
            多实体情感分析
          </div>
          <div class="ai-layout-a-des">
            针对特定场景下带有主观描述的篇章文本，自动识别文本中的核心实体词，并分别判断每个实体词对应的情感和对应置信度
          </div>
          <div class="ai-layout-a-links"></div>
        </div>
      </div>
      <div class="ai-layout-a-col-8 ai-layout-a-item">
        <div class="ai-layout-a-info-hasLink ai-layout-a-info">
          <div class="ai-layout-a-title">
            定制情感倾向分析
          </div>
          <div class="ai-layout-a-des">
            支持用户使用适合自身应用场景的情感极性标注语料，在通用模型基础上进行优化训练，满足专属场景的更高准确率要求
          </div>
          <div class="ai-layout-a-links"></div>
        </div>
      </div>
      </div>
    </div>
  </div>

  <div class="ai-module-section ai-module-introduce">
    <div class="ai-module-header">功能演示</div>
    <div>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入一段想分析的文本："
        v-model="textarea">
      </el-input>
    </div>
    <div style="width: auto;height: 400px" id="main">
  </div>
  </div>
   
</div>


</template>

<script>



export default {
  name: 'three',
  mounted(){
        // 在通过mounted调用即可
        this.echartsInit()
    },
  data() {
    return {
      textarea :''
    }
  },
  methods: {
        //初始化echarts
        echartsInit() {
            //柱形图
            //因为初始化echarts 的时候，需要指定的容器 id='main'
            this.$echarts.init(document.getElementById('main')).setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
                }]
            })
        }
            
    }
};


</script>

<style>
.ai-module-section {
  padding-top: 70px;
}

.ai-module-introduce {
  width: 1180px;
  margin: 0 auto;
}

.ai-module-header {
  line-height: 46px;
  font-size: 30px;
  color: #000;
  letter-spacing: 0;
  text-align: center;
}

.ai-module-introduce-container {
  max-width: 100%;
  display: block;
  margin: 40px auto 0;
}

.ai-layout-a-list {
  display: table;
  overflow: hidden;
  margin-top: 44px;
}

.ai-layout-a-col-8 {
  width: 330px;
  padding-right: 95px;
}

.ai-layout-a-item {
  display: table-cell;
  position: relative;
}

.ai-layout-a-info-hasLink {
  padding-bottom: 34px;
}

.ai-layout-a-info {
  position: relative;
  margin-left: 50px;
  color: #000;
  letter-spacing: 0;
}

.ai-layout-a-title {
  font-size: 22px;
  height: 38px;
  line-height: 38px;
  font-weight: 700;
}

.ai-layout-a-des {
  font-size: 14px;
  line-height: 24px;
  margin-top: 10px;
}

.ai-layout-a-links {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
}
</style>