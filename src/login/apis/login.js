import request from './index'

export function getYongHuIdByZhiGongGh (zhiGongGh) {
  return request({
    url: '/winbff-jichufw/Login/getItemWuYanZheng',
    method: 'post',
    params: {
      zhiGongGh
    }
  })
}

export function ddLogin ({ yongHuId, password }) {
  return request({
    url: '/winbff-jichufw/Login/danDianDl',
    method: 'post',
    params: {
      networkList: JSON.stringify({'mac': '00-01-6C-06-A6-29', 'ip': '127.0.0.1'}),
      yongHuId,
      password
    }
  })
}

export function getYongHuYuanQuYyList (yongHuId) {
  return request({
    url: '/winbff-jichufw/Login/getYongHuYuanQuYyList',
    method: 'post',
    params: {
      yongHuId
    }
  })
}

export function getJwtToken (code) {
  return request({
    url: '/df-authorization/jwtToken/getJwtToken',
    method: 'post',
    params: {
      code
    }
  })
}

export function getAuthCode (code) {
  return request({
    url: '/df-authorization/jwtToken/getAuthCode',
    method: 'post',
    params: {
      code
    }
  })
}

/**
 *
 *
 * @export
 * @param {*} {newPwd, oldPwd}
 * @return {*}
 */
export function updateZhiGongMm ({newPwd, oldPwd}) {
  const userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
  const zhiGongId = userInfo.yongHuId
  return request({
    url: '/gy-jichufw/zhiGongGl/updateZhiGongMm',
    method: 'post',
    params: {
      isCheck: 1,
      newPwd,
      oldPwd,
      zhiGongId
    }
  })
}
