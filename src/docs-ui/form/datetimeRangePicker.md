
## DateTimeRangePicker 日期时间范围选择器

用于选择或输入日期时间范围

###  选择日期时间范围

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <df-datetime-range-picker
      v-model="value"
      :props1="props1"
      :props2="props2"
    ></df-datetime-range-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        props1: {
          placeholder: '开始日期时间'
        },
        props2: {
          placeholder: '结束日期时间'
        },
        value: []
      };
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| props1 | 开始日期时间的配置项 | object | 见[DateTimePicker](#/component/datetimePicker#attributes) | — |
| props2 | 结束日期时间的配置项 | object | 见[DateTimePicker](#/component/datetimePicker#attributes) | — |
| isReturnAllValue | 是否在开始日期时间和结束日期时间都选择后返回结果 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致 |
| blur | 当开始日期时间的 input 失去焦点时触发 | 组件实例、失去焦点的日期时间组件（值 '1' : 表示失去焦点的日期时间组件是开始日期时间组件） |
| blur2 | 当结束日期时间的 input 失去焦点时触发 | 组件实例 |
| focus | 当开始日期时间的 input 获得焦点时触发 | 组件实例、获得焦点的日期时间组件（值 '1' : 表示获得焦点的日期时间组件是开始日期时间组件） |
| focus2 | 当结束日期时间的 input 获得焦点时触发 | 组件实例 |
| enterKeyDown | 开始日期时间按下 enter 键时 | 按下 enter 键的日期时间组件（值 '1' : 表示按下 enter 键的日期时间组件是开始日期时间组件） |
| enterKeyDown2 | 结束日期时间按下 enter 键时 | — |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使开始日期时间的 input 获取焦点 | — |
| focus2 | 使结束日期时间的 input 获取焦点 | — |
| getRefPicker | 获取开始日期时间的组件实例 | — |
| getRefPicker2 | 获取结束日期时间的组件实例 | — |
