## 业务组件字典

###  使用方式
需要用到时，按需引入即可
```javascript
import { KFChuRuKFS, GYKeShiYP, GYKuFangSY, YaoPinLX } from '@df_scope/df-bui/lib/dict'
```

###  出入库方式字典
```js
export const KFChuRuKFS = {
  QingLing: '04', // 请领
  ZhiLiangYS: '02', // 质量验收
  CaiGouJH: '03', // 采购计划
  YaoKuBR: '01', // 药库拨入
  TiaoJia: '21', // 调价
  PanCun: '22', // 盘存
  BaoSun: '23', // 报损
  WeiChaTZ: '81', // 尾差调整
  ShangYueJC: '82', // 上月结存
  BenYueJC: '83', // 本月结存
  YingFuKuan: '51', // 应付款
  MenZhenFY: '61', // 门诊发药
  MenZhenTY: '59', // 门诊退药
  GuiGeZHRK: '98', // 规格转换入库
  GuiGeZHCK: '99', // 规格转换出库
  YiChangCF: '60', // 异常处方
  BingQuLY: '62', // 病区领药
  BingQuFY: '67', // 病区发药
  BingQuTY: '68', // 病区退药
  ShouGongYZFY: '71', // 手工医嘱发药
  ShouGongYZTY: '72', // 手工医嘱退药
  TuiHuoCEFS: '08', // 退货差额方式
  JieYao: '31', // 借药
  HuanYao: '32', // 还药
  ShengChanRK: '96', // 生产入库
  ShengChanCK: '97' // 生产出库
}
```

###  GYKeShiYP 字典
```js
export const GYKeShiYP = {
  WeiSheZhi: 0, // 未设置
  ZhunRuFa: 1, // 准入法
  PaiChuFa: -1 // 排除法
}
```

###  GYKuFangSY 字典
```js
export const GYKuFangSY = {
  YaoKu: 1, // 药库使用
  MenYao: 2, // 门药使用
  BingYao: 3, // 病药使用
  MenYao_ZY: 4, // 门药使用_住院
  BingYao_MZ: 5, // 病药使用_门诊
  JingMaiP: 6, // 静脉配
  ZhiJi: 7, // 制剂(全部)
  ZhiJiCP: 8, // 制剂(成品)
  ZhiJiFCP: 9, // 制剂(非成品)
  ZhongYaoKLSY: 10,	// 中药散配颗粒
  MenYao_BingYao: 11, // 根据应用ID的前两位，自动取门药使用或病药使用
  ZhongYaoKLZBSY: 12,	// 中药颗粒整包使用  HR3-13306(171599)
  ZhongYaoKLSY_MenYao_ZY: 13, // 住院用的散配颗粒
  ZhongYaoKLZBSY_MenYao_ZY: 14, // 住院用的整包颗粒
  YinPianXBZ: 15, // 门诊饮片小包装
  YinPianXBZ_ZY: 16// 住院饮片小包装
}
```

###  药品类型字典
```js
export const YaoPinLX = {
  QuanBu: {label: '全部', key: -1},
  Xi: {label: '西药', key: 1},
  Cheng: {label: '成药', key: 2},
  Cao: {label: '草药', key: 3},
  Wei: {label: '卫材', key: 4},
  Zhi: {label: '制剂', key: 5},
  Shi: {label: '试剂', key: 6}
}
```