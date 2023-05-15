## BlueHeader 标签

用于带左边蓝条的标题。

### 基础用法

:::demo

```html
<template>
  <div>
    <df-blue-header>标题</df-blue-header>
  </div>
</template>
```
:::

### 不同尺寸

BlueHeader 组件支持更改左边蓝条的颜色。

:::demo 通过属性`barColor`属性来配置。

```html
<template>
  <div>
    <df-blue-header barColor="red">标题</df-blue-header>
  </div>
</template>
```
:::

### 应用场景

在表格中使用 BlueHeader 组件, 注意 UI 样式给出的下间距, 给 x-table 赋合适的 headerHeight。

:::demo。

```html
<template>
  <div>
    <df-x-table
      :data="tableData"
      :needPagination="false"
      style="height: 387px"
      :headerHeight="28"
    >
    <template slot="header">
        <df-blue-header>标题</df-blue-header>
    </template>
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="gender" label="性别" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>

```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| barColor | 左边蓝条的颜色 | string | — | — |
