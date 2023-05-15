import { getCanShuXxList } from '@/apis/gy-jichufw/canShuXxWh'
import groupBy from 'lodash/groupBy'

const state = {
  currentYingYongXx: {
    'diaoYongCs': null,
    'dtoState': 'UnChange',
    'gongYongBz': 0,
    'keShiId': '6344',
    'kuCunGlLx': '1100',
    'menZhenJgTx': 1,
    'menZhenSfBz': null,
    'openTrack': false,
    'originalValues': {},
    'shouQuanRq': '2006-08-01 00:00:00',
    'xiTongId': '23',
    'xiuGaiRen': 'DBA',
    'xiuGaiSj': '2006-08-01 00:00:00',
    'yaoPinFlLb': '1',
    'yiYuanJc': '大凌河医院',
    'yiYuanQc': '凌海大凌河医院',
    'yingYongFl': null,
    'yingYongId': '230101',
    'yingYongJc': '挂号收费(南）',
    'yingYongMc': '挂号收费(南）',
    'yingYongXh': null,
    'yongHuId': 'DBA',
    'yongHuXm': '系统管理员-dev',
    'yuanQuId': '1',
    'yuanQuMc': 'df-凌海大凌河医院',
    'zhuYuanJgTx': 1,
    'xiTongMc': 'df-web-guahaosf'
  }, // 当前应用
  currentKeShi: {
    'keShiId': '6401',
    'keShiMc': '测试科室',
    'paiBanBz': '1',
    'guaHaoGl': '1',
    'zuoZhenLb': '1',
    'mengJiZhuBz': '1'
  }, // 当前科室
  activeAppId: null,
  activeCaiDan: null,
  keepAliveList: [], // 需要缓存的tabs
  canShuList: [], // 参数list
  fullYaoPinLxList: [
    { yaoPinLxId: '1', yaoPinLxMc: '西药' },
    { yaoPinLxId: '2', yaoPinLxMc: '成药' },
    { yaoPinLxId: '3', yaoPinLxMc: '草药' },
    { yaoPinLxId: '4', yaoPinLxMc: '卫材' }
  ],
  windowInfo: {},
  gongZuoZhanXx: {}
}

const getters = {
  yaoPinLxList (state) {
    const kuCunGlLxList = state.currentYingYongXx
      ? state.currentYingYongXx.kuCunGlLx.split('')
      : [0, 0, 0, 0]
    const list = state.fullYaoPinLxList
    return list.filter((item, index) => {
      return kuCunGlLxList[index] === '1'
    })
  },
  yaoPinTiaoJiaList (state) {
    if (state.shunJiaZjList.length === 0 || state.shunJiaZjList.length === 0) {
      return []
    } else {
      return state.shunJiaZjList.filter(item => {
        return item.GONGSHI === Number(state.tiaoJiaGs.canShuZhi)
      })
    }
  }
}

const mutations = {
  SET_CURRENT_YING_YONG_XX (state, app) {
    state.currentYingYongXx = app
  },
  SET_ACTIVE_APP_ID (state, id) {
    state.activeAppId = id
  },
  SET_ACTIVE_CAI_DAN (state, caiDan) {
    state.activeCaiDan = caiDan
  },
  ADD_CAN_SHU (state, list) {
    state.canShuList = state.canShuList.concat(list)
  },
  SET_KEEP_ALIVE_LIST (state, list) {
    if (list && list.length) {
      state.keepAliveList = list.map(item => {
        const name = item.path.substring(1)
        return name[0].toUpperCase() + name.substring(1)
      })
    } else {
      state.keepAliveList = []
    }
  },
  SET_WINDOW_INFO (state, windowInfo) {
    state.windowInfo = windowInfo
  },
  SET_GONG_ZUO_ZHAN_XX (state, gongZuoZhanXx) {
    state.gongZuoZhanXx = gongZuoZhanXx
  }
}
function formatCanShuList (list) {
  const canShuList = {}
  list.forEach(canShu => {
    canShuList[canShu.canShuId] = canShu.canShuZhi
  })
  return canShuList
}
const actions = {
  getCanShuList ({ commit, state }, list) {
    return new Promise((resolve, reject) => {
      // 已缓存条件
      const cacheCondition = (canShu, queryItem) => canShu.yingYongId === queryItem.yingYongId && canShu.canShuId === queryItem.canShuId
      // 获取查询参数在缓存中的index
      const getCacheIndex = (queryItem) => state.canShuList.findIndex(canShu => cacheCondition(canShu, queryItem))
      // 获取查询的所有参数
      const getQueryCanShu = (apiRes = {}) => list.map(queryItem => {
        const i = getCacheIndex(queryItem)
        return i === -1 ? apiRes[queryItem.canShuId]?.[0] : state.canShuList[i]
      })
      // 未缓存的list
      const noCacheList = list.filter(queryItem => {
        const i = getCacheIndex(queryItem)
        return i === -1
      })
      if (noCacheList.length) {
        getCanShuXxList(noCacheList).then(res => {
          commit('ADD_CAN_SHU', res)
          const postResult = groupBy(res, 'canShuId')
          const canShuList = getQueryCanShu(postResult)
          resolve(formatCanShuList(canShuList))
        }).catch(error => {
          reject(error)
        })
      } else {
        const canShuList = getQueryCanShu()
        resolve(formatCanShuList(canShuList))
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
