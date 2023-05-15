import request from '@df_scope/df-utils/request'

const instance = request({
  baseURL: '/api',
  timeout: 60000,
  headers: {},
  requestPipe (config) {
    return config
  },
  codeKey: 'returnCode',
  successCode: 1,
  resDataKey: 'returnData',
  msgKey: 'returnMessage',
  toLogin: () => { location.href = '/#/login' }
})

export default instance
