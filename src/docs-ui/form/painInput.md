## PainInput 疼痛输入框

用于体温单录入。

### 基础用法

:::demo 疼痛输入框是一个组合式的组件, 是由左边的 `df-input` 组件, 中间的 `df-input` 组件和右边 `df-select` 组件联合组成的, 分别通过传入的 sync 类型的 `value1`, `value2`, `valueRight` 控制各自 v-model 绑定的值,  `optionsRight` 表示右边 select 的选项, 右边 select 绑定的 v-model 是 optionsRight 里的 `value`, 如果想要控制左中右三个组件的 attributes, 则分别传入 `leftProps`, `middleProps` 和 `rightProps` 来控制

```html

<template>
  <df-pain-input
    :valueLeft.sync="valueLeft"
    :valueMiddle.sync="valueMiddle"
    :valueRight.sync="valueRight"
    :optionsRight="optionsRight"
    :normalMax="4"
    :normalMin="0"
    abnormalColor="#f00"
    @change="handleChange"
    @changeValueLeft="handleChangeLeft"
    @changeValueMiddle="handleChangeMiddle"
    @changeValueRight="handleChangeRight"
  />
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
      valueLeft: 'PIPP',
      valueMiddle: '',
      valueRight: ''
    }
  },
  methods:{
    handleChange({valueLeft,valueMiddle,valueRight}){
      console.log('change',valueLeft,valueMiddle,valueRight)
    },
    handleChangeLeft(val){
      console.log(val)
    },
    handleChangeMiddle(val){
      console.log(val)
    },
    handleChangeRight(val){
      console.log(val)
    }
  }
}
</script>

```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| valueLeft | 左侧 select 的值（务必使用 .sync） | string / number | — | — |
| valueMiddle | 中间 input 的值（务必使用 .sync） | string / number | — | — |
| valueRight | 右侧 select 的值（务必使用 .sync） | string / number | — | — |
| optionsRight | 右侧 select 的 options | array | — | — |
| noLeft | 移除左侧的 select | boolean | — | false |
| noRight | 移除右侧的 select | boolean | — | false |
| noPainTypes | 移除疼痛类型选择区 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | small |
| referenceClass | reference 插槽的 class | — |
| normalMax | 正常最大值 | number | — |
| normalMin | 正常最小值 | number | — |
| abnormalColor | 异常时颜色 | string | #f00 |
| leftProps | 左边 input 组件的 props | object | — |
| middleProps | 中间 input 组件的 props | object | — |
| rightProps | 右边 select 组件的 props | object | — |

### Events

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 当左中右三个组件的值发生变化时触发 | {valueLeft,valueMiddle,valueRight} |
| changeValueLeft | 当左边 select 的值发生变化时触发 | valueLeft |
| changeValueMiddle | 当中间 input 的值发生变化时触发 | valueMiddle |
| changeValueRight | 当右边 select 的值发生变化时触发 | valueRight |

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
