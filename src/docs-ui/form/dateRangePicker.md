
## DateRangePicker 日期范围选择器

用于选择或输入日期范围

###  选择日期范围

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <df-date-range-picker
      v-model="value"
      :props1="props1"
      :props2="props2"
    ></df-date-range-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        props1: {
          placeholder: '开始日期'
        },
        props2: {
          placeholder: '结束日期'
        },
        value: []
      };
    }
  };
</script>
```
:::

###  拓展组件的功能

df-date-range-picker 组件是由两个 df-date-picker 组件构成的，可以通过属性 prop1 向第一个 df-date-picker 组件单独注入属性，也可以通过属性 prop2 向第二个 df-date-picker 组件单独注入属性，df-date-picker 的[所有属性](#/component/datePicker#attributes)都可以用这种方式注入，从而扩展组件的功能

:::demo 在这个例子里，我们通过`prop1`向第一个`df-date-picker`组件注入`pickerOptions`属性，以实现快捷选项`shortcuts`的功能，可以快速的选择一个周期，同样的方法，第二个`df-date-picker`组件也可以这么做，你可以根据实际业务需求添加自己需要的属性
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <df-date-range-picker
      v-model="value"
      :props1="props1"
      :props2="props2"
    ></df-date-range-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      props1: {
        placeholder: '开始日期',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick: () => {
              const now = new Date()
              const weekAgo = new Date(now.getTime() - 3600 * 1000 * 24 * 7)
              this.value = [weekAgo, now]
            }
          }, {
            text: '最近一个月',
            onClick: () => {
              const now = new Date()
              const monthAgo = new Date(now.getTime() - 3600 * 1000 * 24 * 30)
              this.value = [monthAgo, now]
            }
          }, {
            text: '点击试试',
            onClick: () => {
              this.$message({message: '试试就试试'})
            }
          }]
        }
      },
      props2: {
        placeholder: '结束日期'
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
| props1 | 开始日期的配置项 | object | 见[DatePicker](#/component/datePicker#attributes) | — |
| props2 | 结束日期的配置项 | object | 见[DatePicker](#/component/datePicker#attributes) | — |
| isReturnAllValue | 是否在开始日期和结束日期都选择后返回结果 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致 |
| blur | 当开始日期的 input 失去焦点时触发 | 组件实例、失去焦点的日期组件（值 '1' : 表示失去焦点的日期组件是开始日期组件） |
| blur2 | 当结束日期的 input 失去焦点时触发 | 组件实例 |
| focus | 当开始日期的 input 获得焦点时触发 | 组件实例、获得焦点的日期组件（值 '1' : 表示获得焦点的日期组件是开始日期组件） |
| focus2 | 当结束日期的 input 获得焦点时触发 | 组件实例 |
| enterKeyDown | 开始日期按下 enter 键时 | 按下 enter 键的日期组件（值 '1' : 表示按下 enter 键的日期组件是开始日期组件） |
| enterKeyDown2 | 结束日期按下 enter 键时 | — |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使开始日期的 input 获取焦点 | — |
| focus2 | 使结束日期的 input 获取焦点 | — |
| getRefPicker | 获取开始日期的组件实例 | — |
| getRefPicker2 | 获取结束日期的组件实例 | — |
