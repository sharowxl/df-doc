import request from '../index.js'

/**
 * 获取参数信息
 * getCanShuList
 * @param {Array} data 参数名list
 * @returns {Array} 参数值list
 */
export const getCanShuXxList = data => request({
  url: '/gy-jichufw/canShuXxWh/getList',
  method: 'post',
  data
})
