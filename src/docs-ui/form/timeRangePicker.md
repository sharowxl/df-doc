
## TimeRangePicker 时间范围选择器

用于选择或输入时间范围

###  选择时间范围

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <df-time-range-picker
      v-model="value"
      :props1="props1"
      :props2="props2"
    ></df-time-range-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        props1: {
          placeholder: '开始时间'
        },
        props2: {
          placeholder: '结束时间'
        },
        value: []
      };
    }
  };
</script>
```
:::

###  拓展组件的功能

df-time-range-picker 组件是由两个 df-time-picker 组件构成的，可以通过属性 prop1 向第一个 df-time-picker 组件单独注入属性，也可以通过属性 prop2 向第二个 df-time-picker 组件单独注入属性，df-time-picker 的[所有属性](#/component/timePicker#attributes)都可以用这种方式注入，从而扩展组件的功能

:::demo 在这个例子里，我们通过`prop1`向第一个`df-time-picker`组件注入`format`和`valueFormat`属性，以实现格式化的功能，并使用同样的方法，对第二个`df-time-picker`组件也做了同样的事情，你可以根据实际业务需求添加自己需要的属性
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <df-time-range-picker
      v-model="value"
      :props1="props1"
      :props2="props2"
    ></df-time-range-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      props1: {
        placeholder: '开始时间',
        format: 'HH:mm',
        valueFormat: 'HH:mm'
      },
      props2: {
        placeholder: '结束时间',
        format: 'HH:mm',
        valueFormat: 'HH:mm'
      },
      value: []
    }
  }
}
</script>

```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| props1 | 开始时间的配置项 | object | 见[TimePicker](#/component/timePicker#attributes) | — |
| props2 | 结束时间的配置项 | object | 见[TimePicker](#/component/timePicker#attributes) | — |
| isReturnAllValue | 是否在开始时间和结束时间都选择后返回结果 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致 |
| blur | 当开始时间的 input 失去焦点时触发 | 组件实例、失去焦点的时间组件（值 '1' : 表示失去焦点的时间组件是开始时间组件） |
| blur2 | 当结束时间的 input 失去焦点时触发 | 组件实例 |
| focus | 当开始时间的 input 获得焦点时触发 | 组件实例、获得焦点的时间组件（值 '1' : 表示获得焦点的时间组件是开始时间组件） |
| focus2 | 当结束时间的 input 获得焦点时触发 | 组件实例 |
| enterKeyDown | 开始时间按下 enter 键时 | 按下 enter 键的时间组件（值 '1' : 表示按下 enter 键的时间组件是开始时间组件） |
| enterKeyDown2 | 结束时间按下 enter 键时 | — |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使开始时间的 input 获取焦点 | — |
| focus2 | 使结束时间的 input 获取焦点 | — |
| getRefPicker | 获取开始时间的组件实例 | — |
| getRefPicker2 | 获取结束时间的组件实例 | — |
