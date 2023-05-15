import request from '@df_scope/df-utils/request'

const instance = request({
  baseURL: '/api',
  timeout: 30000,
  requestPipe (config) {
    const user = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
    config.headers.MAC = '00-01-6C-06-A6-29'
    config.headers.DangQianYhId = user.yongHuId
    config.headers.YuanQuId = '1'
    return config
  },
  whiteList: [
    '/winbff-jichufw/Login/getItemWuYanZheng',
    '/winbff-jichufw/Login/danDianDl',
    '/winbff-jichufw/Login/getYongHuYuanQuYyList',
    '/df-authorization/jwtToken/getJwtToken',
    '/df-authorization/jwtToken/getAuthCode'
  ],
  codeKey: 'returnCode',
  successCode: 1,
  resDataKey: 'returnData',
  msgKey: 'returnMessage',
  toLogin: () => { location.href = '/#/login' }
})

export default instance
