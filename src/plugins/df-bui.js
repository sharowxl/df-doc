import {
  PageDynamic,
  RightButton,
  RightTableColumn,
  CityAreaSelect,
  RuiLangPdf,
  BingRenXx,
  CardReader,
  zhuYuanBingRenXz,
  PiaoJuHeDui,
  ZhenJianGuaHao,
  zhuYuanShouFeiHelper,
  zhuYuanBingRenList,
  zhenDuanForm,
  DuMaJinDy,
  HuiZhenSq,
  YiBaoXxBa,
  JianChaBg,
  JianYanBg,
  ShouShuSq,
  TeShuZf,
  FuHeYiZhuSouSuo,
  JiBingXz,
  ChangYongYuXz,
  BingLiJianSuo,
  BingAnFuJiaXx
} from '@df_scope/df-bui'
import PiaoJuHelper from '@df_scope/df-bui/lib/piao-ju-helper'
import IdCardValidation from '@df_scope/df-bui/lib/id-card-validation'
import IdentityCard from '@df_scope/df-bui/lib/identity-card'

const components = [
  PageDynamic,
  RightButton,
  RightTableColumn,
  CityAreaSelect,
  RuiLangPdf,
  BingRenXx,
  CardReader,
  zhuYuanBingRenXz,
  PiaoJuHeDui,
  ZhenJianGuaHao,
  zhuYuanShouFeiHelper,
  zhuYuanBingRenList,
  zhenDuanForm,
  DuMaJinDy,
  HuiZhenSq,
  YiBaoXxBa,
  JianChaBg,
  JianYanBg,
  ShouShuSq,
  TeShuZf,
  FuHeYiZhuSouSuo,
  JiBingXz,
  ChangYongYuXz,
  BingLiJianSuo,
  BingAnFuJiaXx
]

const DfBUI = {
  install (Vue) {
    Object.values(components).forEach(component => Vue.use(component))
    Vue.prototype.$DfPiaoJuHelper = new PiaoJuHelper()
    Vue.prototype.$IdCardValidation = IdCardValidation
    Vue.prototype.$IdentityCard = IdentityCard
  }
}

export default DfBUI
