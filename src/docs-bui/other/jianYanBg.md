
### JianYanBg 检验报告

#### 基础用法


:::demo

```html
<template>
  <div>
    <df-button type="text" @click="open">检验报告</df-button>
    <df-dialog
      title="导入检验报告"
      :visible.sync="visible"
      width="80%"
      use-max-height
      class="jianYanBg"
    >
      <df-jian-yan-bg
        v-if="visible"
        style="height:700px"
        :isDaoRu="true"
        menZhenZyBz="2"
        @exportSave="(name, val) => exportSave(val)"
      />
    </df-dialog>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data() {
    return {
      visible: false
    }
  },
  computed: {
    // ...mapState({
    //   appInfo: ({ config }) => config.currentYingYongXx,
    //   patientInfo: ({config}) => config.patient
    // })
  },
  methods: {
    open () {
      this.visible = true
    },
    exportSave (val) {
      console.log(val)
    }
  }
}
</script>

```

:::


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| isDaoRu | 是否导入，根据这个来控制下面layout是否显示 | boolean | - | false |
| menZhenZyBz | 门诊住院标志 | String | - | - |
| appInfo | 应用信息 | object | - | - |
| patientInfo | 当前病人信息 | object | - | - |

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| exportSave | 导入按钮返回值 | - | type，value |
