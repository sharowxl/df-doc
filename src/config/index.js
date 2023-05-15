const envConfig = process.env.NODE_ENV !== 'production' ? require('./config.dev.js') : require('./config.prod.js')
const config = {
  tokenField: 'Authorization', // 登录后 header 里默认携带token的字段 //默认值为 ‘Access-Token’
  // msgCode:'code',//判断ajax请求成功失败的状态码字段，默认值是 returnCode 判断 === 1 为成功 无特殊变化不需要配置
  // successCode:0,//判断ajax请求成功失败的状态码值，默认值是 0 判断 === 1 为成功 无特殊变化不需要配置
  // resData:'result',//ajax 返回的 数据字段 默认值为 ‘returnData’ 无特殊变化不需要配置
  // errMsg:'message',//ajax请求失败时提示的错误信息 默认值为 returnMessage 无特殊变化不需要配置
  oauthUrl: ':8100/login',
  yingYongMc: '信息集成平台', // 应用名称
  yingYongId: '190101', // 应用id
  xiTongId: '19', // 系统id
  openCheck: false // 是否开启验证
}
export default {
  ...config,
  ...envConfig
}
