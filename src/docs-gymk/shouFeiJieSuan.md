## 收费结算模块

### 入参示例

```javascript
  // 流程1 queRenSfShow传true  病人信息 -> 门诊预结算 -> 门诊结算 
  // 流程2 queRenSfShow传false  zhiJieJsShow 默认false 病人信息 -> 诊间预结算 -> 门诊预结算 ->诊间结算
  // 第一个入参 需要相关病人信息，费用1，费用2
  // 第二个入参 当前实例
  // 第三个入参 通过callBack获取门诊预结算数据，如不需要可不传
  // 流程1 门诊预结算 -> 门诊结算 res返回的预结算数据  res1返回结算数据
  // 流程2 zhiJieJsShow为false 诊间结算->门诊预结算 res1返回的result有 结算需要的入参jieSuanParams
  // 流程2 zhiJieJsShow为true 诊间结算->门诊预结算-> 门诊结算  res返回的预结算数据 res1返回结算数据
  this.$shouFeiJieSuan.action({
    initBingRenXx,
    bingRenXx,
    duKaEventArgs,
    userInfo,
    feiYong1List,
    feiYong2List,
    queRenSfShow,
    jieSuanCgShow,
    faPiaoDyShow,
    zhiJieJsShow,
    gongZuoZhanId
  }, this, {
    callBack: (res) => {
      console.log(res, '789987') // 
    }
  }).then(res1=>{
    console.log(res1) // 这里接收门诊结算后的数据 || 或者调用诊间预结算，门诊预结算后的数据 
  })
  // 
  // 整合病人信息
  // initBingRenXx= {
  //   jiuZhenKh,
  //   jiuZhenId,
  //   guaHaoId,
  //   jiZhenBz,
  //   zhuanZiFeiBz,
  //   shouFeiLx,
  //   youHuiLb,
  //   youHuiLbLbMc,
  //   piaoJuLyId,
  //   yiBaoZhSyBz,
  //   linChuangZd
  // } 
  // userInfo // 当前应用sessionStorage 存储的用户信息


  // 门诊收费打印(通过结算ID)
  this.$shouFeiJieSuan.menZhenSfDy(jieSuanId, this)
  // 门诊收费打印(通过外部入参)
  this.$shouFeiJieSuan.menZhenSfDyByInfo(dataInfo, yiBaoJsId, this)
  // dataInfo = {
  //   jieSuanFp,
  //   yiBaoJsXxList,
  //   faPiaoXmList,
  // }

  // 消费凭证打印
  this.$shouFeiJieSuan.xiaoFeiPzDy(jieSuanId, this)

  // 检查单打印
  this.$shouFeiJieSuan.jianChaDy(yiZhuBhList, this)

  // 门诊导向单打印
  this.$shouFeiJieSuan.menZhenDxdDy(yiZhuBhList, jiuZhenKh, this)

  // 医保发票打印
  this.$shouFeiJieSuan.yiBaoFpDyInfo(jieSuanId, this)

  // 挂号结算票据
  this.$shouFeiJieSuan.guHaoJsFpDyInfo(dataInfo, this)
  // dataInfo = {
  //   guaHaoXx,
  //   bingRenXx,
  //   chongDaBz,
  // }

  // 诊间结算 (先判断下这个 dataInfo 存不存在)
  // 这个dataInfo 从门诊预结算获取到的数据，这个结算完成后记得置空
  this.$shouFeiJieSuan.zhenJianJs(dataInfo, zhiFuFs, vm).then(res => {
    console.log('诊间结算', res)
  })
  // dataInfo // 门诊预结算返回的出参  action走流程2且不直接结算 result.jieSuanParams
  // zhiFuFs 支付方式

  // 单独调用电子账户信息
  this.$shouFeiJieSuan.ziJinZh(zhangHuId, shiShouje).then(res => {
    console.log('res', res) // 获取相关的电子账户信息
  })
```

### 使用shouFeiJieSuan 相关方法（Methods）

| 方法名 | 说明 | 使用参数 |
| ---- | ---- | ---- |
| action | 门诊预结算正常流程 | - |
| menZhenSfDy | 门诊收费打印(通过结算ID) |  appInfo: 当前应用信息;ziDian 字典(heSuanXmList) |
| menZhenSfDyByInfo | 门诊收费打印(外部传参) |  appInfo: 当前应用信息;ziDian 字典(heSuanXmList) |
| xiaoFeiPzDy | 消费凭证打印 |  appInfo: 当前应用信息;ziDian 字典(keShi 科室、zhiGongList 职工列表)|
| jianChaDy | 检查单打印 | appInfo: 当前应用信息 |
| menZhenDxdDy | 门诊导向单打印 | appInfo: 当前应用信息 |
| yiBaoFpDyInfo | 医保发票打印 |  appInfo: 当前应用信息;ziDian 字典(heSuanXmList) |
| guHaoJsFpDyInfo | 挂号收费发票打印 |  appInfo: 当前应用信息;ziDian 字典(heSuanXmList) |
| zhenJianJs | 诊间结算 |  appInfo: 当前应用信息;ziDian 字典(heSuanXmList) |
| ziJinZh | 单独调用电子账户信息 |  - |


### 使用shouFeiJieSuan 入参说明（Parameter）

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ---- | ---- | ---- |
| initBingRenXx | 整合病人信息 | object |  |   |
| bingRenXx | 病人信息 | object | null |  非必填 |
| duKaEventArgs | 读卡信息 | object | null |  非必填 |
| userInfo | 用户信息 | object | - |  必填 |
| feiYong1List | 费用1 | array | [] |  非必填 |
| feiYong2List | 费用2 | array | [] |  必填 |
| queRenSfShow | 确认收费弹框 | boolean | true |  非必填 |
| jieSuanCgShow | 结算成功弹框 | boolean | true |  非必填 |
| faPiaoDyShow | 是否发票打印 | boolean | true |  非必填 |
| zhiJieJsShow | 是否直接结算 | boolean | false |  非必填 |
| gongZuoZhanId | 工作站ID | string | - |  必填且不能为空 |
| jieSuanId | 结算ID | string | - |  必填|
| yiZhuBhList | 医嘱编号列表 | array | - |  必填 |
| jiuZhenKh | 就诊卡号 | string | - |  必填 |
| dataInfo | 外部入参 | object | - |  必填 |
| yiBaoJsId | 医保结算ID | string | - |  必填 |
| zhangHuId | 账户ID | string | - |  必填 |
| shiShouje | 实收金额 | string | - |  必填 |
| this | 当前实例 | object | - |  必填 |


### 使用shouFeiJieSuan 出参说明（Out reference）

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| isSuccessJS | 结算是否成功 | boolean | - |
| result | 结算成功返回的数据 | object或string | - |
| jieSuanMsg | 结算信息 | string | - |
