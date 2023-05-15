
### XingZhengSq 新增授权

:::demo

```html
<template>
  <div>
    <df-button @click="visible = true">诊间挂号</df-button>
 <df-xin-zeng-shou-quan v-model="visible" />
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
  }
}
</script>

```

:::

### XingZhengSq 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| value / v-model | 绑定值  | boolean |  — |

### Events

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| shuaXin | 就是个通知状态 通知已完成新增授权操作 | - |