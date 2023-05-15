import { getShuJuList } from '@/apis/winbff-jichufw/DongTaiCx'

const state = {
  // 账簿类别
  zhangBuLb: [],
  // 剂型
  jiXing: [],
  // 单位
  danWeiList: [],
  // 应付款等级
  yingFuKuDj: [],
  // 毒理分类
  duLiFl: [],
  // 价值分类
  jiaZhiFl: [],
  // 职工
  zhiGongList: [],
  // 药品分类
  yaoPinFl: [],
  // 资质证书
  ziZhiZs: [],
  // 医保等级
  yiBaoDj: [],
  // 当前应用出入库方式
  chuRuKuFs: [],
  // 所有出入库方式
  allChuRuKuFs: [],
  // 支付方式
  zhiFuFs: [],
  // 产地
  chanDi: [],
  // 科室
  keShi: [],
  // 业务科室
  yeWuKsList: [],
  // 科室病区
  keShiBQ: [],
  // 给药方式
  geiYaoFs: [],
  // 性别
  xingBie: [],
  // 价格体系
  jiaGeTx: [],
  // 频次
  pinCi: [],
  // 存储类型
  cunChuLx: [],
  // 存储温度
  cunChuWd: [],
  // 服药顺序
  fuYaoSx: [],
  // 院区
  yuanQu: [],
  // 警示标识
  jingShiBs: [],
  // 费用性质
  feiYongXzList: [],
  // 应用
  yingYongList: [],
  // 警示标识
  jingShiBsList: [],
  // 费用类别
  feiYongLbList: [],
  // 费用性质
  feiYongXz: [],
  // 民族
  minZu: [],
  // 公用参数
  gongYongCs: [],
  // 读卡类别
  duKaLbList: [],
  // 医疗类别
  yiLiaoLb: [],
  // 公费单位（门诊使用）
  menZhenGongFeiDw: [],
  // 优惠类别
  youHuiLb: [],
  // 证件类型
  zhengJianLx: [],
  // 公费证号
  gongFeiZh: [],
  // 担保类型
  danBaoLx: [],
  // 年龄单位
  nianLingDw: [],
  // 国籍
  guoJi: [],
  // 血型
  xueXing: [],
  // 婚姻
  hunYin: [],
  // 职业
  zhiYe: []

}

const getters = {
  ruKuFsList ({ chuRuKuFs }) {
    const chuRuKuFsList = chuRuKuFs.filter(item => item.CHURUKBZ === '1')
    chuRuKuFsList.forEach((item, index) => {
      if (item.FANGSHIMC === '采购入库') {
        chuRuKuFsList.splice(index, 1)
        chuRuKuFsList.unshift(item)
      }
    })
    return chuRuKuFsList
  },
  chuKuFsList ({ chuRuKuFs }) {
    return chuRuKuFs.filter(item => item.CHURUKBZ === '2')
  },
  currentYyDwList (state, getters, rootState) {
    return state.danWeiList.filter(item => {
      return item.YINGYONGID === rootState.config.currentYingYongXx.yingYongId && item.ZUOFEIBZ !== '1'
    })
  }
}

const mutations = {
  SET_CAN_SHU_LIST (state, { key, payload }) {
    state[key] = payload
  }
}

const actions = {
  getAllFenLeiList ({ state, commit, rootState }, list) {
    return new Promise((resolve, reject) => {
      const canShuList = [
        {
          canShuMc: '药库房字典_账簿类别',
          canShuKey: 'zhangBuLb',
          canShu: {
            'peiZhiId': '药库房字典_账簿类别',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_剂型',
          canShuKey: 'jiXing',
          canShu: {
            'peiZhiId': '药库房字典_剂型',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房信息_单位',
          canShuKey: 'danWeiList',
          canShu: {
            'peiZhiId': '药库房信息_单位',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_应付款等级',
          canShuKey: 'yingFuKuDj',
          canShu: {
            'peiZhiId': '药库房字典_应付款等级',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_毒理分类',
          canShuKey: 'duLiFl',
          canShu: {
            'peiZhiId': '药库房字典_毒理分类',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_价值分类',
          canShuKey: 'jiaZhiFl',
          canShu: {
            'peiZhiId': '药库房字典_价值分类',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_职工',
          canShuKey: 'zhiGongList',
          canShu: {
            'peiZhiId': '基础公用_职工',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_药品分类',
          canShuKey: 'yaoPinFl',
          canShu: {
            'peiZhiId': '药库房字典_药品分类',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房信息_资质证书',
          canShuKey: 'ziZhiZs',
          canShu: {
            'peiZhiId': '药库房信息_资质证书',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_出入库方式',
          canShuKey: 'chuRuKuFs',
          canShu: {
            'peiZhiId': '基础公用_出入库方式',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_医保等级',
          canShuKey: 'yiBaoDj',
          canShu: {
            'peiZhiId': '基础公用_医保等级',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_支付方式',
          canShuKey: 'zhiFuFs',
          canShu: {
            'peiZhiId': '基础公用代码_支付方式',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_产地',
          canShuKey: 'chanDi',
          canShu: {
            'peiZhiId': '药库房字典_产地',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_科室',
          canShuKey: 'keShi',
          canShu: {
            'peiZhiId': '基础公用_科室',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_科室',
          canShuKey: 'yeWuKsList',
          canShu: {
            'peiZhiId': '基础公用_科室',
            'fuWuTjMc': '按业务科室'
          }
        },
        {
          canShuMc: '基础公用_科室和病区',
          canShuKey: 'keShiBQ',
          canShu: {
            'peiZhiId': '基础公用_科室和病区',
            'fuWuTjMc': '未作废'
          }
        },
        {
          canShuMc: '基础公用_给药方式',
          canShuKey: 'geiYaoFs',
          canShu: {
            'peiZhiId': '基础公用_给药方式',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_性别',
          canShuKey: 'xingBie',
          canShu: {
            'peiZhiId': '基础公用代码_性别',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_频次',
          canShuKey: 'pinCi',
          canShu: {
            'peiZhiId': '基础公用_频次',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_药品价格体系',
          canShuKey: 'jiaGeTx',
          canShu: {
            'peiZhiId': '基础公用代码_药品价格体系',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_存储条件',
          canShuKey: 'cunChuLx',
          canShu: {
            'peiZhiId': '药库房字典_存储条件',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '药库房字典_药品存储温度',
          canShuKey: 'cunChuWd',
          canShu: {
            'peiZhiId': '药库房字典_药品存储温度',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_服药顺序',
          canShuKey: 'fuYaoSx',
          canShu: {
            'peiZhiId': '基础公用_服药顺序',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_院区',
          canShuKey: 'yuanQu',
          canShu: {
            'peiZhiId': '基础公用_院区',
            'fuWuTjMc': '未作废'
          }
        },
        {
          canShuMc: '基础公用_应用',
          canShuKey: 'yingYongList',
          canShu: {
            'peiZhiId': '基础公用_应用',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_警示标识',
          canShuKey: 'jingShiBs',
          canShu: {
            'peiZhiId': '基础公用代码_警示标识',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_费用性质',
          canShuKey: 'feiYongXzList',
          canShu: {
            'peiZhiId': '基础公用_费用性质',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_药品警示标识',
          canShuKey: 'jingShiBsList',
          canShu: {
            'peiZhiId': '基础公用_药品警示标识',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_费用类别',
          canShuKey: 'feiYongLbList',
          canShu: {
            'peiZhiId': '基础公用_费用类别',
            'fuWuTjMc': '未作废'
          }
        },
        {
          canShuMc: '基础公用_费用性质',
          canShuKey: 'feiYongXz',
          canShu: {
            'peiZhiId': '基础公用_费用性质',
            'fuWuTjMc': '未作废'
          }
        },
        {
          canShuMc: '基础公用代码_民族',
          canShuKey: 'minZu',
          canShu: {
            'peiZhiId': '基础公用代码_民族',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_参数',
          canShuKey: 'gongYongCs',
          canShu: {
            'peiZhiId': '基础公用_参数',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_读卡列表',
          canShuKey: 'duKaLbList',
          canShu: {
            'peiZhiId': '基础公用_读卡列表',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_医疗类别',
          canShuKey: 'yiLiaoLb',
          canShu: {
            'peiZhiId': '基础公用代码_医疗类别',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_公费单位',
          canShuKey: 'menZhenGongFeiDw',
          canShu: {
            'peiZhiId': '基础公用_公费单位',
            'fuWuTjMc': '门诊使用'
          }
        },
        {
          canShuMc: '基础公用_优惠类别',
          canShuKey: 'youHuiLb',
          canShu: {
            'peiZhiId': '基础公用_优惠类别',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_证件类型',
          canShuKey: 'zhengJianLx',
          canShu: {
            'peiZhiId': '基础公用代码_证件类型',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_公费证号',
          canShuKey: 'gongFeiZh',
          canShu: {
            'peiZhiId': '基础公用_公费证号',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用_担保类型',
          canShuKey: 'danBaoLx',
          canShu: {
            'peiZhiId': '基础公用_担保类型',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_年龄单位',
          canShuKey: 'nianLingDw',
          canShu: {
            'peiZhiId': '基础公用代码_年龄单位',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_血型代码',
          canShuKey: 'xueXing',
          canShu: {
            'peiZhiId': '基础公用代码_血型代码',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_婚姻',
          canShuKey: 'hunYin',
          canShu: {
            'peiZhiId': '基础公用代码_婚姻',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_职业代码',
          canShuKey: 'zhiYe',
          canShu: {
            'peiZhiId': '基础公用代码_职业代码',
            'fuWuTjMc': '所有'
          }
        },
        {
          canShuMc: '基础公用代码_国籍',
          canShuKey: 'guoJi',
          canShu: {
            'peiZhiId': '基础公用代码_国籍',
            'fuWuTjMc': '所有'
          }
        }

      ]
      const result = {}
      let isCurrentYy = false

      const queryList = canShuList.filter(item => {
        const his = list.findIndex(i => i === item.canShuKey) !== -1 && state[item.canShuKey].length === 0
        if (list.findIndex(i => i === item.canShuKey) !== -1) {
          result[item.canShuKey] = state[item.canShuKey]
        }
        if (item.canShuKey === 'chuRuKuFs' && state[item.canShuKey].length > 0 && state[item.canShuKey][0].YINGYONGID !== rootState.config.currentYingYongXx.yingYongId) {
          isCurrentYy = true
        }
        return his
      })
      const query = queryList.map(item => {
        return item.canShu
      })
      if (isCurrentYy) {
        const payload = state.allChuRuKuFs.filter(item => item.YINGYONGID === rootState.config.currentYingYongXx.yingYongId)
        commit('SET_CAN_SHU_LIST', { key: 'chuRuKuFs', payload })
      }
      if (query.length) {
        getShuJuList(query).then(res => {
          queryList.forEach((item, index) => {
            const payload = item.canShuKey === 'chuRuKuFs'
              ? res[index].data.filter(item => item.YINGYONGID === rootState.config.currentYingYongXx.yingYongId)
              : res[index].data
            commit('SET_CAN_SHU_LIST', { key: item.canShuKey, payload })
            if (item.canShuKey === 'chuRuKuFs') {
              commit('SET_CAN_SHU_LIST', { key: 'allChuRuKuFs', payload: res[index].data })
            }
            result[item.canShuKey] = res[index].data
          })
          resolve(result)
        })
      } else {
        resolve(result)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
