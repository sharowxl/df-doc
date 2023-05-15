
### chuYuanJc 出院检测

#### 基础用法


:::demo

```html
<template>
  <div>
    <df-chu-yuan-jc ref='chuYuanJc' :paramsInfo='paramsInfo' :width='width' :height='height'/>
    <df-button class='df-mt8' @click='clickBtn'>测试病人</df-button>
    <df-button class='df-mt8' @click='getResult'>获取结果</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return{
      width: '100%',
      height: '300px',
      paramsInfo:{}
    }
  },
  methods: {
    clickBtn(){
     this.paramsInfo =  {
        bingRenZyId:'18885', // 病人住院ID
        yeWuLx:'1',
        yuChuYrQ:'2022-06-20 13:57:02'
      }
    },
    getResult(){
      console.log(111,this.$refs.chuYuanJc.getResult())
    }
  }
}

</script>

```

:::

### params 参数

| 参数 | 名称 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ---- | ---- | ---- |
| width | 宽度 | string | 100% | 否 |
| height | 高度 | string | 250px | 否 |
| paramsInfo | 住院检测入参 | object | - | - |




### methods 方法

| 方法 | 名称 | 类型 | - | - |
| ---- | ---- | ---- | ---- | ---- |
| getResult | 获取结果 | function | 100% | 否 |