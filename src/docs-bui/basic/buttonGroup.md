
### ButtonGroup

适用于插入至表格操作列中提供丰富的按钮组合,可通过对应属性来进行一个按钮控制


:::demo在很多表格中有增删改的需求提供丰富的按钮供选择




```html
<template>
  <df-page-dynamic :parameter="parameter" v-model="value" :props="props" @change="change"></df-page-dynamic>
</template>
<script>
const params = {
  'peiZhiId': '药库房字典_药品名称',
  'fuWuTjMc': '药品ID',
  'dangQianYe': 1,
  'shiFouFy': null,
  'meiYeTs': 5,
  'chaXunCs': {
    'KUCUNGLLX': '1100',
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': ''
  }
}

export default {
  data () {
    return {
      parameter: params,
      value: {YAOPINMC: '这是默认值', YAOPINID: 88},
      props: {
        key: 'YAOPINID',
        value: 'YAOPINMC'
      }
    }
  },
  methods: {
    change (val) {
      console.log(this.value, val)
    }
  }
}
</script>

```
:::



### ButtonGroup属性
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 选中项 | - | - |
| placeholder | 占位符设置 | - | - |
| parameter | 请求参数提 | - | - |
| props | {key,value} key是数据中的唯一标识 value是想要获取的label数据| Object | - |
| width | 组件dynamic的宽度 | String | - |
| isShow | 组件销毁数据清空 | Boolean | true |
### ButtonGroup Events
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | event |
| blur | 使 input 失去焦点，并隐藏下拉框 | event |
| change | 当选中option值发生改变时 | value |


             