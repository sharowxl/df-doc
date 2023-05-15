## 打印模块

### 使用前提
已全局注册BUI组件库的 RuiLangPdf ，注册步骤详见“业务组件-开发指南-快速上手”
<br/>页面存在appInfo参数（当前应用信息）

### 在页面中使用
通过this.$print调用，等价于window.yeWuGyMk.print.action，test.json文件内容见最后

```html
<template>
  <df-button
    :loading="loading1"
    @click="handlePrint"
  >
    测试打印
  </df-button>
  <df-button
    :loading="loading2"
    @click="handleGetPrintData"
  >
    获取打印数据
  </df-button>
</template>
<script>
import { mapState } from 'vuex'
import data from './test.json'

export default {
  name: 'Demo',
  computed: {
    ...mapState({
      appInfo: ({config}) => config.currentYingYongXx // 应用信息
    })
  },
  data () {
    return {
      loading1: false,
      loading2: false
    }
  },
  methods: {
    handlePrint () {
      this.loading1 = true
      this[`$print_${window.appId}`](this, {
        type: 'preview', // 非必传
        data,
        danJuDxMc: '门诊口服标签',
        printEnd: (message) => {
          console.log('message', message)
        }
      }).then(res => {
        // res为confirm或cancel，为cancel说明打印预览取消
        this.loading1 = false
        console.log('rr', res)
      }).catch(e => {
        console.error('print', e)
        this.loading1 = false
      })
    },
    handleGetPrintData () {
      this.loading = true
      window.yeWuGyMk.print.getPrintData(this, {
        data,
        danJuDxMc: '门诊口服标签'
      }).then(res => {
        this.loading = false
        console.log('rr', res)
      }).catch(e => {
        console.error('print', e)
        this.loading = false
      })
    }
  }
}
</script>
```

### print包含以下方法
| 方法名 | 说明 | 入参 |
| ---- | ---- | ---- |
| install | 全局注册方法，在main.js中调用 | Vue(必传), 全局注册名字(可选，默认$print) |
| action | 打印执行方法 | this(必传，当前实例), 打印信息: object，详见下表 |
| getPrintData | 获取打印数据（包含模板内容与数据） | this(必传，当前实例), 打印信息: object，详见下表 |

### action第二个参数内容
| 参数名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| type | string | 打印类型, preview print pdf xls csv txt rtf img grd<br/>不传则默认单据配置的打印类型 |
| danJuDxMc | string | 单据名称，必传 |
| data | ---- | 打印数据，必传，将作为入参传入单据所绑定的方法<br/>(具体什么单据绑定什么方法见gy_danjudxxx表中danjudxlm_web或danjudxlxid) |
| beforePrint | function() | 预览模式下,点击打印前的回调方法,需返回一致boolean值,true表示继续,false表示打断 |
| printEnd | function(打印信息) | 打印完成的回调方法 |
| previewConfig | object | 预览窗口配置 |
| previewConfig.fullscreen | boolean | 是否全屏, 默认true |
| previewConfig.modal | boolean | 是否需要遮罩, 默认true |
| previewConfig.style | object | 预览窗口样式，非全屏模式下有效 |
| previewConfig.style.width | string | 预览窗口宽度， 默认80% |
| previewConfig.style.height | string | 预览窗口高度（需要设置固定值，设置百分比不生效）， 默认600px |

### getPrintData第二个参数内容
| 参数名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| danJuDxMc | string | 单据名称，必传 |
| data | ---- | 打印数据，必传，将作为入参传入单据所绑定的方法<br/>(具体什么单据绑定什么方法见gy_danjudxxx表中danjudxlm_web或danjudxlxid) |

### 当前print模块内置的数据处理方法(药房)
| 方法名 | 页面实例中所需内容 |
| ---- | ---- |
| PRT_GY_CaoYaoMZFYQDDy | appInfo: 当前应用信息 |
| PRTGYCaoYaoDy | appInfo: 当前应用信息;duLiFlList: 毒理分类字典 |
| PRT_GY_KouFuBq_Ds | appInfo: 当前应用信息; |
| PRT_GY_MenZhenGyDyd | appInfo: 当前应用信息;windowInfo: 窗口信息 |
| PRT_GY_FaYaoQdDy_HeNanSZ | appInfo: 当前应用信息;windowInfo: 窗口信息 |
| PRT_GY_TuiYaoDanDy | appInfo: 当前应用信息; |
| PRTGYMenZhenFyDyDaLingHe | appInfo: 当前应用信息; |
| PRT_GY_YongYaoZDD | appInfo: 当前应用信息; |
| PRT_ZYFY_BingQuHz_DaLingHe | appInfo: 当前应用信息;ziDian: 字典（包含zhiGongList职工list） |
| PRT_ZYFY_BingQuMx_DaLingHe | appInfo: 当前应用信息;ziDian: 字典（包含zhiGongList职工list） |
| PRT_ZYFY_CaoYaoBq | appInfo: 当前应用信息; |
| PRT_ZYFY_CaoYaoCf_ZzSzFcYy | appInfo: 当前应用信息;ziDian: 字典（包含zhiGongList职工list） |
| PRT_GY_CaoYaoZYFYQDDy_HeNanSZ | appInfo: 当前应用信息; |


### 当前print模块内置的数据处理方法(挂号收费)
| 方法名 | 页面实例中所需内容 |
| ---- | ---- |
| PRT_MzGh_MzSf_Dlh | appInfo: 当前应用信息 |
| PRT_MzGh_MzSf_XfPz_HnSz | appInfo: 当前应用信息; keShi 字典里科室 zhiGongList 字典里职工列表
| PRT_ZJ_DianZiJcd_DaiShan | appInfo: 当前应用信息; |
| PRT_ZJ_MenZhenDxd_DaiShan | appInfo: 当前应用信息;windowInfo: 窗口信息 |
| PRT_MzGh_GuaHaoJs_DaLingHe | appInfo: 当前应用信息;heSuanXmList 核算项目

test.json内容
```json
{
  "baoMiCfBz": null,
  "beiYaoBz": 0,
  "beiYaoCkId": null,
  "beiYaoDyBz": 0,
  "beiZhu": "精二处方",
  "bingRenDh": "17633501018",
  "bingRenDz": "辽宁省锦州市凌海市辽宁省锦州市",
  "bingRenGms": "青霉素类,★注射用青霉素钠,★注射用青霉素钠,★注射用苄星青霉素,★破伤风抗毒素,★注射用青霉素钠",
  "bingRenId": "74918",
  "bingRenXm": "测某病人李四",
  "chaiFenBz": null,
  "chuFangDyXh": "1288",
  "chuFangHm": "202203240018",
  "chuFangId": "1145",
  "chuFangLx": 1,
  "chuFangMc": "精二处方",
  "chuFangTs": 1,
  "chuShengRq": "1971-09-18 00:00:00",
  "chuangKouId": null,
  "daYinBz": null,
  "daiJianTs": null,
  "dianPingDm": null,
  "dianPingRen": null,
  "dianPingRenXm": null,
  "dianPingSj": null,
  "dianPingZt": null,
  "dtoMzYiZhuKlList": [
    {
      "baoMiCfBz": null,
      "baoZhuangDw": "支",
      "baoZhuangLiang": 1,
      "beiYaoBz": 1,
      "beiYaoCkId": null,
      "beiYaoDyBz": null,
      "beiYaoDySj": null,
      "beiZhu": "",
      "benYuanZsCs": null,
      "biGuangBz": null,
      "biaoZhunJe": 4.8,
      "biaoZhunJia": 4.8,
      "bieMing": "盐酸曲马多注射液",
      "bieMingId": "296912",
      "bingRenId": "74918",
      "bingRenXm": "测某病人李四",
      "chaiFenBz": null,
      "chanDi": "24154",
      "chanDiMc": "多多药业有限公司",
      "chengZuYzId": "5017",
      "chongXiaoBz": 0,
      "chuFangHm": null,
      "chuFangId": "1145",
      "chuFangTs": null,
      "chuGuoDyBz": null,
      "chuLiYj": null,
      "chuLiYjMc": "",
      "chuangKouId": "6804",
      "daYinBz": 0,
      "daYinJl": "2",
      "daYinMc": null,
      "daiJianBz": 0,
      "danBaoLx": null,
      "diSu": null,
      "diSuDw": "",
      "dtoMzYiZhuFyList": null,
      "dtoState": "UnChange",
      "dtoYjJianChaSqdBwList": null,
      "duLiFl": "5",
      "duLiKdBz": null,
      "duMaKh": null,
      "faPiaoHm": "00778260",
      "faPiaoId": "956578241534607361",
      "faYaoBz": 0,
      "faYaoCkId": null,
      "faYaoFhRen": null,
      "faYaoFhRenXm": null,
      "faYaoRen": null,
      "faYaoRenXm": null,
      "faYaoShRen": null,
      "faYaoShRenXm": null,
      "faYaoShSj": null,
      "faYaoSj": null,
      "faYaoSmNr": null,
      "faYaoSmSl": null,
      "feiYongKz": "65~~0||0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|1|0|2|XN02AXQ098B002010103729|1|0|4.8000|0|0|0||0||||0||||||0||1|0|0|0|0|0|0|0|0|0|0|0|0|||0|0|0|0",
      "feiYongLbId": "01",
      "feiYongLbMc": "自费",
      "feiYongXzId": "01",
      "feiYongXzMc": "自费",
      "feiYongYjYxBz": 0,
      "fuYaoSx": null,
      "fuYiZhuId": "",
      "fuZhiYzId": null,
      "geiYaoFsId": "3",
      "geiYaoFsJfBz": null,
      "geiYaoFsLx": "1",
      "geiYaoFsMc": "口服",
      "guanLianCfId": null,
      "guanLianGyFsId": null,
      "guiDingBzBh": null,
      "guiDingBzBz": null,
      "guiDingBzZd": null,
      "guiGeId": "238639",
      "heSuanKs": "00085",
      "heSuanKsMc": null,
      "heSuanXm": "01",
      "isDengJi": null,
      "jiLiang": 100,
      "jiLiangDw": "mg",
      "jiLuLy": 1,
      "jiXing": "25",
      "jiZhenBz": 0,
      "jiaGeId": "360558",
      "jiaGeTx": 1,
      "jianYanTcId": "",
      "jiaoJieShBz": null,
      "jiaoJieShRen": null,
      "jiaoJieShRenXm": null,
      "jiaoJieShSj": null,
      "jiaoYiLx": 1,
      "jieSuanId": "956578241480081408",
      "jieSuanJe": 4.8,
      "jieSuanJia": 4.8,
      "jieSuanLb": "",
      "jinJia": 4.2,
      "jinJiaJe": 4.2,
      "jingShiBs": "100000000",
      "jingShiYs": null,
      "jiuZhenId": "93",
      "jiuZhenKh": "00001023",
      "kaiDanKs": "6401",
      "kaiDanKsMc": "测试科室",
      "kaiDanRq": "2022-03-24 15:39:56",
      "kaiDanYs": "DBA",
      "kaiDanYsXm": "系统管理员-dev",
      "kaiShiSj": "2022-03-24 15:39:56",
      "kangJunYlY": "",
      "kangJunYxJ": 0,
      "kangShengSsYsM": "",
      "keShiYyBz": null,
      "keTuiSl": 1,
      "keZhiXingBz": 1,
      "kuCunSl": 46,
      "kuFangYyId": "050101",
      "lingYaoRlXdH": null,
      "lingYaoRnL": null,
      "lingYaoRsFzH": null,
      "lingYaoRxB": null,
      "lingYaoRxM": null,
      "nianLing": "50岁",
      "oTCbZ": null,
      "openTrack": false,
      "originalValues": {},
      "peiYaoBz": null,
      "peiYaoRen": null,
      "peiYaoRenXm": null,
      "peiYaoShRen": null,
      "peiYaoShRenXm": null,
      "peiYaoShSj": null,
      "peiYaoSj": null,
      "piCiKcXx": "ZSL,901662625316139008,1.0,4.2000,4.8000^",
      "piFaJe": 0,
      "piFaJia": null,
      "piShiBz": 0,
      "piShiCfSl": null,
      "piShiJg": null,
      "piShiJgMc": "",
      "piShiLx": "0",
      "piShiXzShKs": "",
      "piShiXzShKsMc": "",
      "piShiXzShR": "",
      "piShiXzShRxm": "",
      "piShiXzShSj": null,
      "piShiZt": null,
      "pinCi": "ONCE",
      "qiTaSx": "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "qiangZhiBz": 0,
      "quYaoSj": null,
      "quYaoXh": null,
      "quZhengFs": null,
      "renShiKs": null,
      "renShiKsMc": null,
      "shenHeJg": null,
      "shenPiBh": null,
      "shenPiLx": null,
      "shenQingDanZt": null,
      "shiBaFSJW": "",
      "shiWuFfYf": "050101",
      "shiYongYlYbDm": null,
      "shouFeiBz": 1,
      "shouFeiFs": "0",
      "shouFeiId": "956578241190674432",
      "shouFeiLb": "0",
      "shouFeiRq": "2022-03-24 15:40:24",
      "shouFeiXmId": "01",
      "shouFeiXmLxId": "1",
      "shuJuLy": 11,
      "shuJuLyId": "0",
      "shuLiang": 1,
      "shuLiangDw": "支",
      "shunXuHao": 1,
      "sumSL": null,
      "taoCanId": "",
      "taoCanMc": "",
      "taoCanMxId": null,
      "tiJi": 2,
      "tiJiDw": "ml",
      "tiZhong": null,
      "tuWenJpfBz": null,
      "tuiFeiBz": null,
      "tuiYaoQrBz": null,
      "tuiYaoSl": null,
      "tuiYaoYy": "",
      "weiShouXfBz": 0,
      "wuTongPsBz": null,
      "xianJia": 0,
      "xiangMuId": "360558",
      "xiangMuMc": "盐酸曲马多注射液",
      "xieDingBz": null,
      "xieDingCfId": "",
      "xinZengWqyBz": null,
      "xingBie": "1",
      "xiuGaiBz": "0",
      "xiuGaiRen": "DBA",
      "xiuGaiSj": "2022-03-24 15:39:48",
      "xiuGaiYyId": "040101",
      "yaoPinBm": "盐酸曲马多注射液",
      "yaoPinGg": "100mg /2ml *1支",
      "yaoPinLx": "1",
      "yaoPinMc": "盐酸曲马多注射液",
      "yaoPinXl": "",
      "yiBaoDj": "2",
      "yiBaoDm": "XN02AXQ098B002010103729",
      "yiBaoQYhJe": 0,
      "yiBaoTsBzXx": "",
      "yiBaoXx": null,
      "yiBaoZlBl": 0,
      "yiChangBz": 0,
      "yiCiJl": 2,
      "yiCiJlDw": "ml",
      "yiLiaoZm": "",
      "yiLiaoZu": "6393",
      "yiShengQm": "",
      "yiShengYwKs": "",
      "yiShengZt": null,
      "yiYuanJc": null,
      "yiZhuBh": "5017",
      "yiZhuFy": null,
      "yiZhuFyBh": "6062",
      "yiZhuFyId": "6062",
      "yiZhuFyXmMc": null,
      "yiZhuId": "5017",
      "yiZhuJieSuanJinE": null,
      "yiZhuLx": 11,
      "yiZhuMc": "盐酸曲马多注射液",
      "yiZhuXmId": "360558",
      "yiZhuXmMc": "盐酸曲马多注射液",
      "yingJiSfBz": 0,
      "yingYongId": "040101",
      "yongYaoJySm": null,
      "yongYaoTs": 1,
      "yongYaoYy": "",
      "youHuiBl": null,
      "youHuiJg": null,
      "youHuiLb": null,
      "yuYueSj": null,
      "yuanQuId": "1",
      "yuanTuiFeiYzFyId": null,
      "yuanYiZhuId": "5017",
      "yueJiQk": "",
      "zhenJiDsyBz": 2,
      "zhengZuJieSuanJinE": null,
      "zhiDanRXm": "系统管理员-dev",
      "zhiDanRen": "DBA",
      "zhiDanRq": "2022-03-24 15:39:56",
      "zhiXingBz": null,
      "zhiXingKs": "6350",
      "zhiXingKsMc": "门诊药局",
      "zhiXingRen": "",
      "zhiXingRenXm": "",
      "zhiXingRq": null,
      "zhuSheCs": null,
      "zhuYaoBz": 1,
      "zhuanHuanBl": 0,
      "zhuanHuanDw": null,
      "ziBeiBz": 0,
      "ziFeiBz": 0,
      "ziFeiJe": 0,
      "ziLiBl": null,
      "ziLiJe": 4.8,
      "zuHao": null,
      "zuiXiaoDw": "支",
      "zuiXiaoDwJl": "1",
      "zuoFeiBz": null,
      "jingShiBsList": [
        "高警示"
      ],
      "chuFangLx": 1
    }
  ],
  "dtoState": "UnChange",
  "duLiFl": "5",
  "duMaKh": null,
  "faYaoBz": 0,
  "faYaoCkId": null,
  "faYaoFhRen": null,
  "faYaoFhRenXm": null,
  "faYaoRen": null,
  "faYaoRenXm": null,
  "faYaoShBz": null,
  "faYaoShRen": null,
  "faYaoShRenXm": null,
  "faYaoShSj": null,
  "faYaoSj": null,
  "feiYongLbId": "01",
  "feiYongLbMc": "自费",
  "feiYongXzId": "01",
  "feiYongXzMc": "自费",
  "fuFangBz": null,
  "geiYaoFsId": null,
  "geiYaoFsMc": null,
  "guiDingBzBh": null,
  "guiDingBzBz": null,
  "guiDingBzZd": null,
  "jiZhenBz": 0,
  "jianYanFsMc": null,
  "jianYaoFsId": null,
  "jiaoJieShBz": null,
  "jiaoJieShRen": null,
  "jiaoJieShRenXm": null,
  "jiaoJieShSj": null,
  "jiuZhenId": "93",
  "jiuZhenKh": "00001023",
  "kaiDanKs": "6401",
  "kaiDanKsMc": "测试科室",
  "kaiDanRq": "2022-03-24 15:39:48",
  "kaiDanYs": "DBA",
  "kaiDanYsXm": "系统管理员-dev",
  "keTuiSl": null,
  "keZhiXingBz": 1,
  "kuFangYyId": "050101",
  "lingYaoRlXdH": null,
  "lingYaoRnL": null,
  "lingYaoRsFzH": null,
  "lingYaoRxB": null,
  "lingYaoRxM": null,
  "manXingBcFbZ": null,
  "nianLing": "50岁",
  "openTrack": false,
  "originalValues": {},
  "peiYaoBz": null,
  "peiYaoRen": null,
  "peiYaoRenXm": null,
  "peiYaoShRen": null,
  "peiYaoShRenXm": null,
  "peiYaoShSj": null,
  "peiYaoSj": null,
  "piShiZt": 0,
  "qiangZhiBz": 0,
  "quYaoSj": null,
  "quYaoXh": null,
  "shenFenZh": "123567890",
  "shenHeJg": null,
  "shenHeJgR": null,
  "shenHeJgRxM": null,
  "shenHeJgSj": null,
  "shiWuFfYf": null,
  "shouFeiBz": 1,
  "shouFeiId": null,
  "suPeiXdBz": null,
  "suPeiXdJsRq": null,
  "suPeiXdKsRq": null,
  "teShuFfId": null,
  "teShuFfMc": null,
  "tiZhong": null,
  "tuiYaoQrBz": null,
  "waiPeiBaBh": null,
  "waiPeiBz": 0,
  "weiShouXfBz": 0,
  "xieDingBz": null,
  "xieDingCfId": null,
  "xingBie": "1",
  "xiuGaiRen": "DBA",
  "xiuGaiSj": "2022-03-24 15:39:48",
  "xiuGaiYyId": null,
  "yiLiaoZm": null,
  "yiLiaoZu": null,
  "yiShengZt": null,
  "yingJiSfBz": null,
  "yingYongId": "040101",
  "yongYaoLy": null,
  "yuanQuId": "1",
  "yunYaoFangBz": null,
  "yunYaoFangYcBz": null,
  "zhenDuan": "畏光",
  "zhenDuanMc": "畏光",
  "zhiDanRXm": "系统管理员-dev",
  "zhiDanRen": "DBA",
  "zhiDanRq": "2022-03-24 15:39:48",
  "zhiDanRqM": null,
  "zhiXingKs": "6350",
  "zhiXingKsMc": "门诊药局",
  "zhiXingRen": null,
  "zhiXingRenXm": null,
  "zhiXingRq": null,
  "zhongXinLsh": null,
  "zhongYaoCfLx": null
}
```