
### zhuYuanShouFeiHelper 住院收费工具类

#### 基础用法


:::demo

```html
<template>
  <div>
    <df-zhu-yuan-shou-fei-helper
      ref='zhuYuanHelper'
    >
    </df-zhu-yuan-shou-fei-helper>
    <df-button @click='getYiBaoIntance'>调用</df-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bingRenZyId: '18847',
      chongSuanFw: '1',
      paramsObj:{
        bingRenZyId: '18847',
        chuYuanRq: '2022-06-01',
        yuJieSuanLx: '1',
        jieSuanFs: '0',
        chongSuanFw: '1'
      }
    }
  },
  methods: {
    async getYiBaoIntance() {
      // const info = await this.$refs.zhuYuanHelper.FeiYongZyInfo(this.bingRenZyId)
      // console.log(info,'last费用转移')
      
      // const info = await this.$refs.zhuYuanHelper.FeiYongScInfo(this.bingRenZyId)
      // console.log(info,'last费用上传')

      // const info = await this.$refs.zhuYuanHelper.FeiYongCsInfo(this.bingRenZyId,this.chongSuanFw)
      // console.log(info,'last费用重算')

       const info = await this.$refs.zhuYuanHelper.zhuYuanYjsInfo(this.paramsObj)
      console.log(info,'last住院预结算')
    }
  }
}
</script>
```
:::


### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| FeiYongZyInfo | 费用转移 |bingRenZyId|----|
| FeiYongScInfo | 费用上传 |bingRenZyId|----|
| FeiYongCsInfo | 费用重算 |bingRenZyId，chongSuanFw|----|
| zhuYuanYjsInfo | 住院预结算 |paramsObj|----|




### params 参数

| 参数 | 名称 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ---- | ---- | ---- |
| bingRenZyId | 病人住院ID | string | - | - |
| chongSuanFw | 重算范围 | string | - | - |
| chuYuanRq | 出院日期 | string | - | - |
| yuJieSuanLx | 预结算类型 | string | - | - |
| jieSuanFs | 结算方式 | string | - | - |
| chongSuanFw | 重算范围 | string | - | - |
| shangChuangBz | 上传标志 | string | 0 | 否 |
| chongSuanBz | 重算标志 | string | 0 | 否 |
| yiBaoJcBz | 医保检测标志 | string | 0 | 否 |
| zhangHuBz | 账户标志 | number | 0 | 否 |
