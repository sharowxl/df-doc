### yiBaoXxBa 医保信息备案

#### 基础用法

:::demo

```html
<template>
  <div>
    <df-button @click="openDialog">打开</df-button>
    <df-yi-bao-xx-ba 
      v-model='showInfo' 
      :benAntype='benAntype'
      :jiuZhenIdList='jiuZhenIdList'
      :bingRenXxXx='bingRenXxXx'
      :yingYongId='yingYongId'
      :duKaEventArgs='duKaEventArgs'
      :yiBaoDjIn='yiBaoDjIn'
      :guaHao='guaHao'
      @getInfo='getInfo'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yiBaoDjIn:{
        "yiBaoBrXx": "422802&02&熊芷萱|女|土家族|2004-11-04|无|422802200411040086&42280000000000100050459174|01|422802200411040086|熊芷萱|2|15|2004-11-04|17&0|390|156001|2021-11-28|1|null|0|422802|都亭居民&||||&390&&",
        "yiLiaoBxId": "105",
        "bingRenId": "137071",
        "feiYongLb": "6259",
        "feiYongXz": "390",
        "guaHaoKs": "6479",
        "guaHaoKsMc": "中医科",
        "guaHaoYs": "112534",
        "guaHaoYsXm": "蒲娟",
        "guaHaoMzBz": 1,
        "jiuZhenKh": "00009979",
        "yiLiaoLb": "11"
      },// 医保登记所需入参
      yingYongId: '230101',
      benAntype: '1', // '1' 为医保相关备案1 '2'为临床需使用的
      showInfo: false,
      jiuZhenIdList:[1],
      guaHao:false, // 挂号标志 为true无法更改
      duKaEventArgs:{
        "caoZuoZt": 1,
        "message": "",
        "yiBaoMsg": "",
        "ziFeiBz": "",
        "dto_GY_BingRenXx": {},
        "yiBaoClient": {},
        "renYuanXxOut": {
        "xingMing": "熊芷萱",
        "xingBie": "2",
        "xingBieMc": "女",
        "minZu": "15",
        "minZuMc": "土家族",
        "chuShengRq": "2004-11-04",
        "zhengJianHm": "422802200411040086",
        "danWeiLx": "",
        "renYuanXz": "390",
        "dangNianZhYe": "0",
        "renYuanLb": "156001",
        "danWeiMc": "都亭居民",
        "toKen": "",
        "yiBaoKh": "422802200411040086",
        "geRenBh": "42280000000000100050459174",
        "yiBaoBrXx": "422802&02&熊芷萱|女|土家族|2004-11-04|无|422802200411040086&42280000000000100050459174|01|422802200411040086|熊芷萱|2|15|2004-11-04|17&0|390|156001|2021-11-28|1|null|0|422802|都亭居民&||||&390&&",
        "xianZhongList": [{
          "balc": 0,
          "insutype": "390",
          "psn_insu_stas": "1",
          "psn_insu_date": "2021-11-28",
          "paus_insu_date": null,
          "psn_type": "156001",
          "cvlserv_flag": "0",
          "insuplc_admdvs": "422802",
          "emp_name": "都亭居民"
        }],
        "renYuanList": []
        },
        "bingRenId": "137071",
        "yiBaoKh": "422802200411040086",
        "jiuZhenKh": null,
        "conType": 0
        }, // 读卡信息
      bingRenXxXx:{
        "baoMiJb": null,
        "bingAnHao": null,
        "bingRenDh": null,
        "bingRenDz": null,
        "bingRenId": "137071",
        "bingRenLb": null,
        "bingRenZyId": null,
        "chanJianSqDh": null,
        "chuShengDiDm_Sheng": "24075",
        "chuShengDiDm_Shi": "25500",
        "chuShengDiDm_Xian": "25519",
        "chuShengDiMc_Sheng": "湖北省",
        "chuShengDiMc_Shi": "恩施土家族苗族自治州",
        "chuShengDiMc_Xian": "利川市",
        "chuShengDi_Ssx": "湖北省恩施土家族苗族自治州利川市",
        "chuShengRq": "2004-11-04 08:00:00",
        "danBaoLxId": null,
        "danBaolxMc": null,
        "danWeiDh": null,
        "danWeiYb": null,
        "dtoGyJieZhiList": null,
        "dtoState": "UnChange",
        "empId": "137071",
        "feiYongLbId": "6259",
        "feiYongLbMc": "湖北医保",
        "feiYongXzId": "390",
        "feiYongXzMc": "城乡居民基本医疗保险",
        "geRenBh": "42280000000000100050459174",
        "gongFeiDw": null,
        "gongFeiDwMc": null,
        "gongFeiZh": null,
        "gongZuoDw": "都亭居民",
        "guanXiDm": null,
        "guanXiMc": "",
        "guiDingBzSpBh": null,
        "guiZeId": null,
        "guiZeMc": null,
        "guiZePpd": null,
        "guoJiDm": null,
        "guoJiMc": null,
        "guoMingShiWb": null,
        "heBingZt": 0,
        "heiMingDanBz": null,
        "huKouDz": "xx",
        "huKouDzDm_Sheng": "24075",
        "huKouDzDm_Shi": "25500",
        "huKouDzDm_Xian": null,
        "huKouDzMc_Sheng": "湖北省",
        "huKouDzMc_Shi": "恩施土家族苗族自治州",
        "huKouDzMc_Ssx": "湖北省恩施土家族苗族自治州",
        "huKouDzMc_Xian": null,
        "huKouDzYb": "445000",
        "huKouXxDz": "湖北省恩施土家族苗族自治州xx",
        "hunYinDm": null,
        "hunYinMc": "",
        "icXx": null,
        "jiGuanDm_Sheng": "24075",
        "jiGuanDm_Shi": "25500",
        "jiGuanDm_Xian": "25519",
        "jiGuanMc_Sheng": "湖北省",
        "jiGuanMc_Shi": "恩施土家族苗族自治州",
        "jiGuanMc_Xian": "利川市",
        "jiGuan_Ssx": "湖北省恩施土家族苗族自治州利川市",
        "jiLuLy": "0",
        "jianDangRen": "DBA",
        "jianDangRenXm": "系统管理员",
        "jianDangRq": "2022-08-17 16:23:36",
        "jianKangKXx": null,
        "jianKangKh": null,
        "jieShaoRen": null,
        "jiuZhenKh": "00009979",
        "lianXiRDh": null,
        "lianXiRdZ": null,
        "lianXiRen": null,
        "lianXiRenSfZh": null,
        "lianXiRyB": null,
        "lvSeTdBz": 0,
        "lvSeTdJsSj": null,
        "lvSeTdKsSj": null,
        "menZhenCs": 1,
        "minZuDm": "15",
        "minZuMc": "土家族",
        "moCiYueJingSj": null,
        "muQinSfZh": null,
        "muQinXm": null,
        "muQinXmQp": null,
        "nianLing": "17岁",
        "openTrack": false,
        "originalValues": {},
        "qiangZhiPpBz": null,
        "rH": null,
        "rHDm": null,
        "sheBaoBh": null,
        "sheQuBh": null,
        "shenFenZh": "422802200411040086",
        "shengYuBxSpBh": null,
        "shuRuMa1": "XZX",
        "shuRuMa2": "CAA",
        "shuRuMa3": "344",
        "waiBuId": null,
        "waiBuZhId": null,
        "xianZhuZhi": "xx",
        "xianZhuZhiDh": "13511111111",
        "xianZhuZhiDm_Jd": null,
        "xianZhuZhiDm_Sheng": "24075",
        "xianZhuZhiDm_Xian": null,
        "xianZhuZhiMc_Jd": null,
        "xianZhuZhiMc_Sheng": "湖北省",
        "xianZhuZhiMc_Ssx": "湖北省恩施土家族苗族自治州",
        "xianZhuZhiMc_Xian": null,
        "xianZhuZhiSDm_Shi": "25500",
        "xianZhuZhiSMc_Shi": "恩施土家族苗族自治州",
        "xianZhuZhiXxDz": "湖北省恩施土家族苗族自治州xx",
        "xianZhuZhiYb": "445000",
        "xiangSiBrId": null,
        "xingBieDm": "2",
        "xingBieMc": "女",
        "xingMing": "熊芷萱",
        "xingMingQp": "XIONGZHIXUAN",
        "xiuGaiRen": "DBA",
        "xiuGaiRenXm": "系统管理员",
        "xiuGaiSj": "2022-08-17 16:23:36",
        "xueXingDm": null,
        "xueXingMc": "",
        "yiBaoBrXx": "422802&02&熊芷萱|女|土家族|2004-11-04|无|422802200411040086&42280000000000100050459174|01|422802200411040086|熊芷萱|2|15|2004-11-04|17&0|390|156001|2021-11-28|1|null|0|422802|都亭居民&||||&390&&",
        "yiBaoKh": "422802200411040086",
        "yiBaoKiD": null,
        "yiBaoNKh": null,
        "youHuiLbDm": null,
        "youHuiLbGhDm": null,
        "youHuiLbGhMc": null,
        "youHuiLbLb": "",
        "youHuiLbLbMc": "",
        "youHuiLbMc": null,
        "yuShouQBz": null,
        "yuShouQJe": null,
        "yuanShiEmpId": "137071",
        "zhangHuId": null,
        "zhaoPianWj": null,
        "zhengJianLx": "1",
        "zhiYeDm": null,
        "zhiYeMc": "",
        "zhuSuoYinBz": 1,
        "zhuYuanCs": 0,
        "zuiHouJzRq": null,
        "guiDingBzBz": "0",
        "yiBaoXsXx": "当年账户余额：0；历年账户余额：",
        "isYiBao": true,
        "zhuanZiFeiBz": 0,
        "danBaoZt": 0,
        "danBaoJe": 0
    }
    }
  },
  created() {
    this.duKaEventArgs = window.duKaEventArgs
  },
  methods: {
    openDialog () {
      this.jiuZhenIdList = [1]
      this.showInfo = true
    },
    getInfo(val){
      console.log(val,'val')
    }
  }
}
</script>

```

:::

### 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| yiBaoXx | 医保相关 | Object | - | - |
| benAntype | 备案类型 | String | - | - |
| showInfo | 是否展示 | Boolean | - | - |
| jiuZhenIdList | 就诊id列表 | Array | - | - |

### Events

| 事件名称 | 说明 | 回调参数|
| ---- | ---- |----|
| getInfo | 获取备案结果 | ---- |

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| getInfo | 获取备案结果 | ---- | ---- |
