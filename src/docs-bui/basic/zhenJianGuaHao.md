
### ZhenJianGuaHao 诊间挂号

:::demo

```html
<template>
  <div>
    <df-button @click="visible = true">诊间挂号</df-button>
    <df-zhen-jian-gua-hao v-model="visible"  @change="jiuZhenXxChagne"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    jiuZhenXxChagne(val) {
      console.log('就诊信息：'+ JSON.stringify(val))
    }
  }
}
</script>

```

:::

### ZhenJianGuaHao 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| value / v-model | 绑定值  | boolean |  — |

### Events

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 挂号成功是返回就诊信息 | - |
