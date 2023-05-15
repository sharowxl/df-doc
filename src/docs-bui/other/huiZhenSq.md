### HuiZhenSq 会诊申请

此组件需要引入df-ui的PatientInfo和PatientInfoDynamic组件，且需要引入公用ks-select科室选择组件。

#### 基础用法

:::demo

```html
<template>
  <div>
    <df-button @click="openDialog">会诊申请</df-button>
    <df-hui-zhen-sq ref="huiZhenSq"></df-hui-zhen-sq>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async openDialog () {
      this.$refs.huiZhenSq.open('create')
    }
  }
}
</script>

```

:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| kaiDanKsBq | 开单科室病区 | Object | - | - |
| yiZhuId | 医嘱id | String | - | - |
| patientInfo | 病人信息：包含住院、就诊、门急住标志信息 | Object | - | - |
| appInfo | 应用信息 | Object | - | - |
| currentKeShi | 当前科室 | Object | - | - |
| keShiList | 字典科室list | Array | - | - |
| isLinChuangLj | 是否临床路径打开 | Boolean | - | false |

### Events

| 事件名称 | 说明 | 回调参数|
| ---- | ---- |----|
| submit | 点击确定后触发 | 返回会诊医嘱 |
| openImportDialog | 打开病情概要导入窗口 | - |

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| open | 打开会诊申请窗口 | openStatus: Boolean, bingRenYz: Object, huiZhenDan?: Object | 打开方式必传，可选create|edit|view； 病人医嘱编辑时必传 |
