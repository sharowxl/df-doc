## Status 标签

用于状态展示。

### 基础用法

:::demo 由`type`属性来选择status的类型，也可以通过`color`属性来自定义颜色色。

```html
<template>
  <div>
    <df-status>默认</df-status>
    <df-status type="success">通过</df-status>
    <df-status type="info">信息</df-status>
    <df-status type="warning">警告</df-status>
    <df-status type="danger">危险</df-status>
    <df-status color="#9933FF">自定义颜色</df-status>
  </div>
</template>
```
:::

### 不同尺寸

Status 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
  <div>
    <df-status>默认尺寸</df-status>
    <df-status size="small">小型尺寸</df-status>
    <df-status size="medium">中等尺寸</df-status>
  </div>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | success/info/warning/danger | — |
| size | 尺寸 | string | medium / small / mini | — |
| point | 是否有左边圆点 | boolean | — | true |
| color | 自定义颜色 | string | — | — |
