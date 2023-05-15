import request from '../index.js'

/**
 * 动态查询
 *
 * @param {*} data
 */
export const getShuJuList = data => request({
  url: 'winbff-jichufw/DongTaiCx/getShuJuList',
  method: 'post',
  data
})
