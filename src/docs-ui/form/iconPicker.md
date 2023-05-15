## IconPicker 图标选择器

用于选择一个 UI 库中的图标。

### 基础用法

:::demo 打开选择器, 选择一个图标, 点击确定后会外派事件`confirm`, 监听此事件来获取选中的图标对应的类名。
```html
<template>
  <df-icon-picker @confirm="onConfirm" />
</template>
<script>
export default {
  methods: {
    onConfirm (classString) {
      this.$confirm(classString, '选中的图标对应的类名是:')
    }
  }
}
</script>
```
:::

### 使用插槽触发选择

:::demo 打开选择器的触发区域可以使用插槽来自定义。
```html
<template>
  <df-icon-picker @confirm="onConfirm">
    <df-link type="primary">使用插槽触发选择</df-link>
  </df-icon-picker>
</template>
<script>
export default {
  methods: {
    onConfirm (classString) {
      this.$confirm(classString, '选中的图标对应的类名是:')
    }
  }
}
</script>
```
:::

### 选择器关闭后不清除已选中的图标

:::demo 选择器关闭后, 默认将会清除已选中的图标, 除非设置`clear-chosen-on-close`属性为`false`。
```html
<template>
  <df-icon-picker :clear-chosen-on-close="false" @confirm="onConfirm">
    <df-link type="primary">选择器关闭后不要清除已选中的图标</df-link>
  </df-icon-picker>
</template>
<script>
export default {
  methods: {
    onConfirm (classString) {
      this.$confirm(classString, '选中的图标对应的类名是:')
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| clear-chosen-on-close | 是否在选择器关闭后清除已选中的图标 | boolean | — |  true |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| confirm | 选中一个图标并点击确定时 | 当前选中图标对应的类名 |

###  Slot
| name | 说明 |
|------|--------|
| — | 打开选择器的触发区域 |
