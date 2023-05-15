
### YiBaoHelper 医保工具类

#### 基础用法


:::demo

```html
<template>
  <div>
    示例代码
  </div>
</template>

<script>
// import { DfYiBaoHelper } from '@df_scope/df-bui'
export default {
  methods: {
    async getYiBaoIntance() {
      // const yiBaoHelper = new DfYiBaoHelper()
      // await yiBaoHelper.shiFouYB('6255') // 是否医保 true
      // await yiBaoHelper.getYiLiaoBxId('6255') // 获取医保ID 100
      // const yiBaoInstance = await yiBaoHelper.getYiBaoBizByYBID('100') // 获取辽宁医保实例 LiaoNingYb {}
      // const yibaolb = await yiBaoInstance.getYbBxLbXx() // 获取所有启用的保险类别信息 [{},{}]
    }
  }
}
</script>

```

:::

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| shiFouYB | 根据费用类别判断是否医保 | (feiYongLb: string) |feiYongLb: 费用类别|
| getYiLiaoBxId | 根据费用类别获取保险ID | (feiYongLb: string) |feiYongLb: 费用类别|
| getYiBaoBizByKuaiJieMa | 根据快捷码获取对应医保实例 | (kuaiJieMa: string) |kuaiJieMa: 快捷码|
| getYiBaoKfZtByFeiYongLb | 根据费用类别获取医保开放状态 | (feiYongLb: string) |feiYongLb: 费用类别|
| getYiBaoKfZtByYiLiaoBxId | 根据医疗保险ID获取医保开放状态 | (yiLiaoBxId: string) |yiLiaoBxId: 医疗保险ID|
| getYiBaoBizByBaoXianLb | 根据保险类别获取对应医保实例 | (value: object) |value: 保险类别对象|
| getYiBaoBizByYBID | 根据医保ID获取对应医保实例，主要为对照系统使用 | (yiBaoID: object) |yiBaoID: 医保ID|
| getYiBaoSetting | 获取配置 | (xiangMuMing: string, defaultValue: string, jieDianMC: string) |xiangMuMing: 项目名, defaultValue: 默认值, jieDianMC: 节点名称|

### YiBaoInstance 实例方法

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| jiBingMlXz | - | (yiLiaoBxId: string) |yiLiaoBxId: 医疗保险ID|
| guaHaoJs | 挂号结算 | (dtoYbGuaHaoJsIn: object) |dtoYbGuaHaoJsIn|
| menZhenJs | 门诊结算 | (dtoYbMenZhenYjsIn: object) |dtoYbMenZhenYjsIn|
| zhuYuanJs | 住院结算 | (dtoYbZhuYuanYjsIn: object) |dtoYbZhuYuanYjsIn|
| zhuYuanDj | 住院登记 | (dtoYbZhuYuanDjIn: object) |dtoYbZhuYuanDjIn|
| getRenYuanXx | 人员信息 | (dtoYbRenYuanXxIn: object) |dtoYbRenYuanXxIn|
| zhuYuanDjQx | 住院登记取消 | (dtoYbZhuYuanDjQxIn: object) |dtoYbZhuYuanDjQxIn|
| ruYuanXxBg | 住院登记修改 | (dtoYbZhuYuanDjIn: object) |dtoYbZhuYuanDjIn|
| guaHaoTh | 挂号退号 | (dtoYbGuaHaoThIn: object) |dtoYbGuaHaoThIn|
| menZhenTf | 门诊退费 | (dtoYbMenZhenTfIn: object) |dtoYbMenZhenTfIn|
| menZhenTf_out | - | (dtoYbMenZhenTfIn: object) |dtoYbMenZhenTfIn|
| zhuYuanJsQx | 住院结算取消 | (dtoYbZhuYuanTfIn: object) |dtoYbZhuYuanTfIn|
| zhuYuanJsCx | 住院结算撤销 | (dtoYbZhuYuanTfIn: object) |dtoYbZhuYuanTfIn|
| teShuJy | - | (dtoYbGuaHaoThIn: object) |dtoYbGuaHaoThIn|
| waiPeiCfTj | - | (dtoYbWaiPeiCfTjIn: object) |dtoYbWaiPeiCfTjIn|
| tuiFeiJcDk | - | (yiBaoJsId: string, yiLiaoBxId:strng ) |yiBaoJsId: 医保结算ID, yiLiaoBxId: 医疗保险ID |
| waiPeiCfZf | - | (dtoYbWaiPeiCfZfIn: object) |dtoYbWaiPeiCfZfIn|
| duKa | 读卡 | (kaLeiXing: string, kaXinXi:string,canBaoXZQY:string ) |kaLeiXing: 卡类型, kaXinXi: 卡信息, canBaoXZQY: 参保行政区域|
| BenDiJY | 本地交易 | (moNi) |moNi|
| getZhuYuanDjXx | 获取住院登记信息 |(yiLiaoBxId: string, yiYuanZyHm: sting, yiYuanJyId: string, dengJiFyDm: string, zyDjZt: string, yiBaoQrBz: string )  ||
| jiuZhenXxCx | 就诊信息查询 |(yiLiaoBxId: string )  ||
| getRuYuanLx | 获取人员类型 |(ruYuanTj: string) ||
| getAutoNumber | 获取序列 |(seqName: string) ||
| getRenYuanLbDz | 人员类别对照 |(yiLiaoBxId: string, renYuanLbDm: string) ||
| getMenZhenFeiYongMx | 获取门诊费用明细 |(dtoYbMenZhenJsIn: object, yaoPinXxList: array) ||
| getWaiPeiChuFangMx | - |(dtoYbWaiPeiCfTjIn: object, yaoPinXxList: array) ||
| getGuaHaoFeiYongMx | 获取挂号费用明细 |(dtoYbGuaHaoJsIn: object) ||
| getXiangMuDWDM | 根据处方类型和单位获取对应单位代码 |(chuFangLX: string, danWei: string) ||
| getybksdm | 获取医保科室代码 |(ylbxid: sting, yyksdm: string, throwex: boolean) ||
| getYBZCBH | 获得医保政策号 |(yiLiaoBxId: string, zhengCeQyRq:string) ||
| getYbBxLbXx | 获取所有启用的保险类别信息 |-  ||
| getYbyydm | 获得医保医院代码 |(yiLiaoBxId: string, yiYuanJgDm: string)  ||
| getYbJgXx | 通过医保医院代码获取机构信息 |(yiLiaoBxId:string, yiBaoYyDm:string)  ||
| getYbyymc | 通过医保医院代码获取医保医院名称 |(yiLiaoBxId:string, yiBaoYyDm:string)  ||
| getYBFABH | 获取医保政策编号 |(yiLiaoBxId:string, yiBaoYyDm:string, yiBaoMlLb:string, zhengCeQyRq: string )  ||
