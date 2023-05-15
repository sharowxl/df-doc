const state = {
  isWinMax: false,
  title: 'DFbui',
  version: '1.0.0',
  keywordList: []
}

const mutations = {
  SET_IS_WIN_MAX (state, bool) {
    state.isWinMax = bool
  },
  SET_TITLE (state, title) {
    state.title = title
  },
  SET_VERSION (state, version) {
    state.version = version
  },
  SET_KEYWORD_LIST (state, list) {
    state.keywordList = list
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
