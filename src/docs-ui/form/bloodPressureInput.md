## BloodPressureInput  血压输入框

用于体温单血压输入框。

### 基础用法

:::demo 血压输入框是一个组合式的组件, 是由左边的 `df-input` 组件, 中间的 `df-input` 组件和右边 `df-select` 组件联合组成的, 分别通过传入的 sync 类型的 `value1`, `value2`, `valueRight` 控制各自 v-model 绑定的值,  `optionsRight` 表示右边 select 的选项, 右边 select 绑定的 v-model 是 optionsRight 里的 `value`, 如果想要控制左中右三个组件的 attributes, 则分别传入 `leftProps`, `middleProps` 和 `rightProps` 来控制

```html
<template>
  <df-blood-pressure-input
    :value1.sync="value1"
    :value2.sync="value2"
    :valueRight.sync="valueRight"
    :optionsRight="optionsRight"
    :max1="140"
    :min1="70"
    :normalMax1="120"
    :normalMin1="80"
    :max2="70"
    :min2="10"
    :normalMax2="90"
    :normalMin2="60"
    abnormalColor="#f00"
    @change="handleChange"
    @changeValue1="handleChange1"
    @changeValue2="handleChange2"
    @changeValueRight="handleChangeRight"
  >
  </df-blood-pressure-input>
</template>

<script>
export default {
  data () {
    return {
      optionsRight: [{
        value: 'juce',
        label: '拒测'
      }, {
        value: 'buzai',
        label: '不在'
      }, {
        value: 'waichu',
        label: '外出'
      }, {
        value: 'busheng',
        label: '不升'
      }],
      value1: '',
      value2: '',
      valueRight: ''
    }
  },
  methods:{
    handleChange({value1, value2, valueRight}){
      console.log('change',value1, value2, valueRight)
    },
    handleChange1(value1){
      console.log(value1)
    },
    handleChange2(value2){
      console.log(value2)
    },
    handleChangeRight(valueRight){
      console.log(valueRight)
    }
  }
}
</script>
```

:::

### 尾部插槽

:::demo 使用`slots.suffix`激活尾部插槽

```html
<template>
  <df-blood-pressure-input
    style="width: 220px"
    :value1.sync="value1"
    :value2.sync="value2"
    :valueRight.sync="valueRight"
    :optionsRight="optionsRight"
    :max1="140"
    :min1="70"
    :normalMax1="120"
    :normalMin1="80"
    :max2="70"
    :min2="10"
    :normalMax2="90"
    :normalMin2="60"
    abnormalColor="#f00"
  >
    <div slot="suffix" style="height: 100%; display: flex; align-items: center">mmHg</div>
  </df-blood-pressure-input>
</template>

<script>
export default {
  data () {
    return {
      optionsRight: [{
        value: 'juce',
        label: '拒测'
      }, {
        value: 'buzai',
        label: '不在'
      }, {
        value: 'waichu',
        label: '外出'
      }, {
        value: 'busheng',
        label: '不升'
      }],
      value1: '106',
      value2: '68',
      valueRight: ''
    }
  }
}
</script>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value1 | input1 的值（务必使用 .sync） | number | — | — |
| value2 | input2 的值（务必使用 .sync） | number | — | — |
| valueRight | 右侧 select 的值（务必使用 .sync） | boolean / string / number | — | — |
| optionsRight | 右侧 select 的 options | array | — | — |
| noRight | 移除右侧的 select | boolean | — | false |
| size |  尺寸 | string | medium / small / mini | small |
| max1 | 最大值1 | number | — |
| min1 | 最小值1 | number | — |
| message1 | 值1错误提示 | string | — | 值1
| message2 | 值2错误提示 | string | — | 值2
| normalMax1 | 正常最大值1 | number | — |
| normalMin1 | 正常最小值1 | number | — |
| max2 | 最大值2 | number | — |
| min2 | 最小值2 | number | — |
| normalMax2 | 正常最大值2 | number | — |
| normalMin2 | 正常最小值2 | number | — |
| abnormalColor | 异常时颜色 | string | #f00 |
| leftProps | 左边 input 组件的 props | object | — |
| middleProps | 中间 input 组件的 props | object | — |
| rightProps | 右边 select 组件的 props | object | — |

### Events

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 值改变时触发 | {value1, value2, valueRight} |
| changeValue1 | 值1改变时触发 | value1 |
| changeValue2 | 值2改变时触发 | value2 |
| changeValueRight | 右侧 select 的值改变时触发 | valueRight |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getRefLeft | 获取左边 select 组件实例 | — |
| getRefMiddle | 获取中间 input 组件实例 | — |
| getRefRight | 获取右边 select 组件实例 | — |
| focusLeft | 使左边 select 组件获取焦点 | — |
| focusMiddle | 使中间 input 组件获取焦点 | — |
| focusRight | 使右边 select 组件获取焦点 | — |
| focus | 同 focusMiddle | — |
| blurLeft | 使左边 select 组件失去焦点 | — |
| blurMiddle | 使中间 input 组件失去焦点 | — |
| blurRight | 使右边 select 组件失去焦点 | — |
| blur | 同 blurMiddle | — |
