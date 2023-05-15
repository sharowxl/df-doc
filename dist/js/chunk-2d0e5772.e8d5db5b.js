(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5772"],{9533:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,n=t._self._c;return n("section",{staticClass:"content df-doc"},[n("h2",{attrs:{id:"shou-fei-jie-suan-mo-kuai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shou-fei-jie-suan-mo-kuai"}},[t._v("¶")]),t._v(" 收费结算模块")]),n("h3",{attrs:{id:"ru-can-shi-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ru-can-shi-li"}},[t._v("¶")]),t._v(" 入参示例")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("  // 流程1 queRenSfShow传true  病人信息 -> 门诊预结算 -> 门诊结算 \n  // 流程2 queRenSfShow传false  zhiJieJsShow 默认false 病人信息 -> 诊间预结算 -> 门诊预结算 ->诊间结算\n  // 第一个入参 需要相关病人信息，费用1，费用2\n  // 第二个入参 当前实例\n  // 第三个入参 通过callBack获取门诊预结算数据，如不需要可不传\n  // 流程1 门诊预结算 -> 门诊结算 res返回的预结算数据  res1返回结算数据\n  // 流程2 zhiJieJsShow为false 诊间结算->门诊预结算 res1返回的result有 结算需要的入参jieSuanParams\n  // 流程2 zhiJieJsShow为true 诊间结算->门诊预结算-> 门诊结算  res返回的预结算数据 res1返回结算数据\n  this.$shouFeiJieSuan.action({\n    initBingRenXx,\n    bingRenXx,\n    duKaEventArgs,\n    userInfo,\n    feiYong1List,\n    feiYong2List,\n    queRenSfShow,\n    jieSuanCgShow,\n    faPiaoDyShow,\n    zhiJieJsShow,\n    gongZuoZhanId\n  }, this, {\n    callBack: (res) => {\n      console.log(res, '789987') // \n    }\n  }).then(res1=>{\n    console.log(res1) // 这里接收门诊结算后的数据 || 或者调用诊间预结算，门诊预结算后的数据 \n  })\n  // \n  // 整合病人信息\n  // initBingRenXx= {\n  //   jiuZhenKh,\n  //   jiuZhenId,\n  //   guaHaoId,\n  //   jiZhenBz,\n  //   zhuanZiFeiBz,\n  //   shouFeiLx,\n  //   youHuiLb,\n  //   youHuiLbLbMc,\n  //   piaoJuLyId,\n  //   yiBaoZhSyBz,\n  //   linChuangZd\n  // } \n  // userInfo // 当前应用sessionStorage 存储的用户信息\n\n\n  // 门诊收费打印(通过结算ID)\n  this.$shouFeiJieSuan.menZhenSfDy(jieSuanId, this)\n  // 门诊收费打印(通过外部入参)\n  this.$shouFeiJieSuan.menZhenSfDyByInfo(dataInfo, yiBaoJsId, this)\n  // dataInfo = {\n  //   jieSuanFp,\n  //   yiBaoJsXxList,\n  //   faPiaoXmList,\n  // }\n\n  // 消费凭证打印\n  this.$shouFeiJieSuan.xiaoFeiPzDy(jieSuanId, this)\n\n  // 检查单打印\n  this.$shouFeiJieSuan.jianChaDy(yiZhuBhList, this)\n\n  // 门诊导向单打印\n  this.$shouFeiJieSuan.menZhenDxdDy(yiZhuBhList, jiuZhenKh, this)\n\n  // 医保发票打印\n  this.$shouFeiJieSuan.yiBaoFpDyInfo(jieSuanId, this)\n\n  // 挂号结算票据\n  this.$shouFeiJieSuan.guHaoJsFpDyInfo(dataInfo, this)\n  // dataInfo = {\n  //   guaHaoXx,\n  //   bingRenXx,\n  //   chongDaBz,\n  // }\n\n  // 诊间结算 (先判断下这个 dataInfo 存不存在)\n  // 这个dataInfo 从门诊预结算获取到的数据，这个结算完成后记得置空\n  this.$shouFeiJieSuan.zhenJianJs(dataInfo, zhiFuFs, vm).then(res => {\n    console.log('诊间结算', res)\n  })\n  // dataInfo // 门诊预结算返回的出参  action走流程2且不直接结算 result.jieSuanParams\n  // zhiFuFs 支付方式\n\n  // 单独调用电子账户信息\n  this.$shouFeiJieSuan.ziJinZh(zhangHuId, shiShouje).then(res => {\n    console.log('res', res) // 获取相关的电子账户信息\n  })\n")])]),n("h3",{attrs:{id:"shi-yong-shoufeijiesuan-xiang-guan-fang-fa-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-shoufeijiesuan-xiang-guan-fang-fa-methods"}},[t._v("¶")]),t._v(" 使用shouFeiJieSuan 相关方法（Methods）")]),n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")]),n("th",[t._v("使用参数")])])]),n("tbody",[n("tr",[n("td",[t._v("action")]),n("td",[t._v("门诊预结算正常流程")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("menZhenSfDy")]),n("td",[t._v("门诊收费打印(通过结算ID)")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(heSuanXmList)")])]),n("tr",[n("td",[t._v("menZhenSfDyByInfo")]),n("td",[t._v("门诊收费打印(外部传参)")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(heSuanXmList)")])]),n("tr",[n("td",[t._v("xiaoFeiPzDy")]),n("td",[t._v("消费凭证打印")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(keShi 科室、zhiGongList 职工列表)")])]),n("tr",[n("td",[t._v("jianChaDy")]),n("td",[t._v("检查单打印")]),n("td",[t._v("appInfo: 当前应用信息")])]),n("tr",[n("td",[t._v("menZhenDxdDy")]),n("td",[t._v("门诊导向单打印")]),n("td",[t._v("appInfo: 当前应用信息")])]),n("tr",[n("td",[t._v("yiBaoFpDyInfo")]),n("td",[t._v("医保发票打印")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(heSuanXmList)")])]),n("tr",[n("td",[t._v("guHaoJsFpDyInfo")]),n("td",[t._v("挂号收费发票打印")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(heSuanXmList)")])]),n("tr",[n("td",[t._v("zhenJianJs")]),n("td",[t._v("诊间结算")]),n("td",[t._v("appInfo: 当前应用信息;ziDian 字典(heSuanXmList)")])]),n("tr",[n("td",[t._v("ziJinZh")]),n("td",[t._v("单独调用电子账户信息")]),n("td",[t._v("-")])])])]),n("h3",{attrs:{id:"shi-yong-shoufeijiesuan-ru-can-shuo-ming-parameter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-shoufeijiesuan-ru-can-shuo-ming-parameter"}},[t._v("¶")]),t._v(" 使用shouFeiJieSuan 入参说明（Parameter）")]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")]),n("th",[t._v("是否必填")])])]),n("tbody",[n("tr",[n("td",[t._v("initBingRenXx")]),n("td",[t._v("整合病人信息")]),n("td",[t._v("object")]),n("td"),n("td")]),n("tr",[n("td",[t._v("bingRenXx")]),n("td",[t._v("病人信息")]),n("td",[t._v("object")]),n("td",[t._v("null")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("duKaEventArgs")]),n("td",[t._v("读卡信息")]),n("td",[t._v("object")]),n("td",[t._v("null")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("userInfo")]),n("td",[t._v("用户信息")]),n("td",[t._v("object")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("feiYong1List")]),n("td",[t._v("费用1")]),n("td",[t._v("array")]),n("td",[t._v("[]")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("feiYong2List")]),n("td",[t._v("费用2")]),n("td",[t._v("array")]),n("td",[t._v("[]")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("queRenSfShow")]),n("td",[t._v("确认收费弹框")]),n("td",[t._v("boolean")]),n("td",[t._v("true")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("jieSuanCgShow")]),n("td",[t._v("结算成功弹框")]),n("td",[t._v("boolean")]),n("td",[t._v("true")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("faPiaoDyShow")]),n("td",[t._v("是否发票打印")]),n("td",[t._v("boolean")]),n("td",[t._v("true")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("zhiJieJsShow")]),n("td",[t._v("是否直接结算")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("非必填")])]),n("tr",[n("td",[t._v("gongZuoZhanId")]),n("td",[t._v("工作站ID")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填且不能为空")])]),n("tr",[n("td",[t._v("jieSuanId")]),n("td",[t._v("结算ID")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("yiZhuBhList")]),n("td",[t._v("医嘱编号列表")]),n("td",[t._v("array")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("jiuZhenKh")]),n("td",[t._v("就诊卡号")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("dataInfo")]),n("td",[t._v("外部入参")]),n("td",[t._v("object")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("yiBaoJsId")]),n("td",[t._v("医保结算ID")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("zhangHuId")]),n("td",[t._v("账户ID")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("shiShouje")]),n("td",[t._v("实收金额")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("必填")])]),n("tr",[n("td",[t._v("this")]),n("td",[t._v("当前实例")]),n("td",[t._v("object")]),n("td",[t._v("-")]),n("td",[t._v("必填")])])])]),n("h3",{attrs:{id:"shi-yong-shoufeijiesuan-chu-can-shuo-ming-out-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-shoufeijiesuan-chu-can-shuo-ming-out-reference"}},[t._v("¶")]),t._v(" 使用shouFeiJieSuan 出参说明（Out reference）")]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("isSuccessJS")]),n("td",[t._v("结算是否成功")]),n("td",[t._v("boolean")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("result")]),n("td",[t._v("结算成功返回的数据")]),n("td",[t._v("object或string")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("jieSuanMsg")]),n("td",[t._v("结算信息")]),n("td",[t._v("string")]),n("td",[t._v("-")])])])])])}],d=i("2877"),s={},h=Object(d["a"])(s,e,a,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0e5772.e8d5db5b.js.map