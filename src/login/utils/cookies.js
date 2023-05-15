export function getsec (str) {
  const time = str.substring(0, str.length - 1) * 1 // 时间
  const danWei = str.substring(str.length - 1) // 单位
  if (danWei === 's') {
    return time * 1000
  } if (danWei === 'h') {
    return time * 60 * 60 * 1000
  } if (danWei === 'd') {
    return time * 24 * 60 * 60 * 1000
  }
  return str
}

export function getCookie (name) {
  const search = `${name}=`// 查询检索的值
  let returnvalue = null// 返回值
  if (document.cookie.length > 0) {
    let sd = document.cookie.indexOf(search)
    if (sd !== -1) {
      sd += search.length
      let end = document.cookie.indexOf(';', sd)
      if (end === -1) { end = document.cookie.length }
      // unescape() 函数可对通过 escape() 编码的字符串进行解码。
      returnvalue = unescape(document.cookie.substring(sd, end))
    }
  }
  return returnvalue
}

export function setCookie (name, value, expTime) {
  const strsec = getsec(expTime)
  const exp = new Date()
  exp.setTime(exp.getTime() + strsec * 1)
  document.cookie = `${name}=${escape(value)};expires=${exp.toUTCString()}`
}

export function delCookie (name) {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(name)
  if (cval != null) {
    document.cookie = `${name}=${cval};expires=${exp.toUTCString()}`
  }
}
