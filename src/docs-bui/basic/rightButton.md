
### RightButton 权限按钮

基于普通按钮组件封装的用于给定的权限值判断显示隐藏的按钮组件。

:::demo使用`right-key`属性给按钮添加一个权限值, store内的权限数据源会根据传入的`right-key` 判断当前按钮显示或隐藏。
```html
<template>
  <df-right-button
    type="primary"
    right-key="myKey"
    @click="handleClick"
  >
    权限按钮
  </df-right-button>
</template>
<script>
export default {
  methods: {
    handleClick () {
      console.log('权限按钮点击')
    }
  }
}
</script>
```
:::


:::tip
数据源默认获取位置为`store.state.config.activeCaiDan.anNiuList`。此外普通按钮组件可用的属性权限按钮全部可用。
:::

### DfRightButton属性
RightButton 完整保留了 [Button](#/component/button) 的所有属性。
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| right-key | 权限值 | String | - |  