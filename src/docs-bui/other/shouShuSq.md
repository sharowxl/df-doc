
### ShouShuSq 手术申请

此组件需要引入df-ui的PatientInfo和PatientInfoDynamic组件，以及引入公用zd-select诊断选择组件。

因组件部分数据无法直接从组件库获取，故使用时需打开注释部分，获取字典数据、应用信息、病人信息、当前科室，字典数据具体参考getAllFenLeiXx方法，确保字典集合字段对应上。

#### 基础用法


:::demo

```html
<template>
  <div>
    <df-button type="text" @click="open">手术申请</df-button>
    <DfShouShuSq
      ref="shouShuSq"
      @submit="handleOperationSubmit"
    />
    <!-- 完整示例
    <DfShouShuSq
      ref="shouShuSq"
      :kai-dan-ks-bq="kaiDanKsBq"
      :patient-info="patient"
      :app-info="appInfo"
      :current-ke-shi="dangQianKsBq"
      @submit="handleOperationSubmit"
    /> -->
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    // ...mapState({
    //   appInfo: ({ config }) => config.currentYingYongXx,
    //   patientInfo: ({ config }) => config.patient,
    //   currentKeShi: ({ config }) => config.currentKeShi
    // })
  },
  create () {
    // this.getAllFenLeiXx()
  },
  methods: {
    // ...mapActions({
    //   getAllFenLeiList: 'ziDian/getAllFenLeiList'
    // }),
    open () {
      this.$refs.shouShuSq.open('create')
    },
    handleOperationSubmit (val) {
      console.log(val)
    },
    getAllFenLeiXx () {
      // 组件需要的字典数据
      const list = [
        'shouShuLb',  // 手术类别
        'shouShuJb',  // 手术等级
        'maZuiFs',    // 麻醉方式
        'qieKouDj',   // 切口等级
        'shouShuGlCs',// 手术隔离措施
        'shouShuJian' // 手术间
      ]
      this.getAllFenLeiList(list)
    },
  }
}
</script>

```

:::


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| isSave | 是否直接保存 | boolean | - | false |
| isLinChuangLj | 是否临床路径进入 | boolean | - | false |
| kaiDanKsBq | 开单科室病区 | object | - | - |
| patientInfo | 当前病人信息 | object | - | - |
| appInfo | 应用信息 | object | - | - |
| currentKeShi | 当前科室 | object | - | - |

### Events

| 事件名称 | 说明 | 回调参数|
| ---- | ---- |----|
| submit | 点击确定后触发,配合isSave为false的时候使用 | 手术医嘱 |

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| open | 打开会诊申请窗口 | openStatus: string, bingRenYz: object, shouShuSqd?: object | openStatus可选create,edit,view; bingRenYz病人医嘱：编辑时必传; 手术申请单  |

