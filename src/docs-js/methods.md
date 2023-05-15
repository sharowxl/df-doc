## 使用
使用Vue.use后调用install方法将过滤器，工具方法挂载到Vue原型的`$utils`对象上，可通过`vm.prototype.$utils`获取，或直接通过import导出的默认对象获取。过滤器可以跟Vue过滤器一样的使用方式。
```javascript

  // main.js
  import utils from '@df_scope/df-utils'
  Vue.use(utils)

```

## 过滤器
### 根据值和数据源获取另一个相关值

filterValueByKey(text, list, key, value)
参数： 

`{text}[传入的值]` 

`{list}[待过滤的数组]` 

`{key}[传入的值对应的key字段]` 

`{value}[传入的值对应的value字段]`
```javascript

  const arr = [
    { key: 1, value: '数量' }
  ]
  filterValueByKey(1, arr, 'key', 'value')
  // 输出：'数量'

```

### 格式化日期
filterFormatDate(date, format = 'yyyy-MM-DD')
参数：

`{date}[传入的日期值]`

`{format}[格式化方式,默认为'yyyy-MM-DD']`
```javascript

  filterFormatDate(new Date(), 'yyyy-MM-DD')
  // 输出：'2021-06-02'

```

### 格式化时间
filterDateTime(date, format = 'yyyy-MM-DD HH:mm:ss')
参数：

`{date}[传入的日期值]`

`{format}[格式化方式,默认为'yyyy-MM-DD HH:mm:ss']`
```javascript

  filterFormatDate(new Date(), 'yyyy-MM-DD HH:mm:ss')
  // 输出：'2021-06-02 10:40:58'

```

### 格式化小数
filterNumberFloat(num, precision)
参数：

`{num}[传入的数字]`

`{precision}[保留几位小数]`
```javascript

  filterNumberFloat(1, 2)
  // 输出：'1.00'

```


## 公用方法
### 获取一组随机id
uuid
```javascript

  uuid()

```

### 获取localhost.search上的参数，返回参数对象
getUrlParam
```javascript

  // http://localhost:9000/apps/06/XiaoQiGl?a=1&b=2&c=3
  getUrlParam()
  // 输出：{a: '1', b: '2', c: '3'}

```

### 获取localhost.search上的参数，返回参数对象
getUrlQuery  
此方法与 getUrlParam 作用一样，不同的是需要手动传入query字符串
参数：

`{queryStr}[?后的参数]`
```javascript

  const quertStr = 'a=1&b=2&c=3'
  getUrlQuery(quertStr)
  // 输出：{a: '1', b: '2', c: '3'}

```

### 表格合计行设置
getSummaries
参数：

`{param} [传入表格默认合计数据]`

`{config}[合计配置]`
```javascript

  // config配置项
  totalIndex: Number	// 共计x条文字放置的index位置
  totalProp: String	// 共计x条文字放置的字段名位置
  getTotalText: Function(total)	// 返回共计x条文字格式的方法, 默认为: `共有${data.length}条记录`,total参数为总条数
  sumProps: Array		// 需要合计的字段数组
  sumPropsConfig: Array // 需要合计的字段数组配置
  sumTextIndex: Number	// 合计文字放置的index位置
  sumTextProp: String	// 合计文字放置的字段名
  sumText: String		// 合计文字,默认是: '合计：'
  unit: String		// 合计值的单位
  precision: Number	// 小数精确位数，默认到后四位

```
```javascript

  const config = {
    totalIndex: 1,
    getTotalText (num) {
      return `共计${num}条`
    },
    sumProps: ['lingShouJe', 'money', 'people'],
    sumPropsConfig: [
      {
        prop: 'jinJiaJe',
        precision: 2
      }
    ],
    sumTextProp: 'name',
    sumText: '合计:',
    unit: '元'
  }
  this.$utils.getSummaries(param, config)

```
注：当`sumPropsConfig`和`sumProps`同时存在时，优先使用`sumPropsConfig`配置

### 导出成excel
export2Excel 参数：

`{headerList}[表头信息]`

`{dataSource}[数据源]`

`{excelTitle}[顶部表名]`
```javascript

  export2Excel(
    [
      { title: '药品名称', key: 'yaoPinMc' },
      { title: '药品规格', key: 'yaoPinGg' },
      { title: '产地', key: 'chanDi' },
      { title: '单位', key: 'baoZhuangDw' }
    ],
    list,
    '采购计划完成统计'
  )

```

### 剪切板函数，将文本复制到剪切板上
copyText 参数：

`{text}[被复制的文字]`
```javascript

  copyText('复制这一行文字到剪切板')

```

### 数字转大写
ToString 参数：

`{number}[要转换的数字]`
```javascript

  ToString(123.45) // => 壹百贰十叁元肆角伍分

```

### 处理金额小数
formatNum  
对小数位不满 2 位的, 补充小数位的 0 至两位小数, 对小数位大于 4 位的, 四舍五入保留 4 位小数  参数：

`{number}[要转换的数字]`
```javascript

  formatNum(123) // => 123.00
  // 123.4 => 123.40
  // 123.456 => 123.456
  // 123.4567 => 123.4567
  // 123.456789 => 123.4568

```

### 自定义格式化小数位数
formatNumDec  
这个函数可以理解为 处理金额小数formatNum 的扩展, 在处理小数位数的时候, 支持传入至少保留的小数位数和最多保留的小数位数  参数：

`{number}[要转换的数字]`  
`{minLength}[至少保留的小数位数]`  
`{maxLength}[最多保留的小数位数]`  
```javascript

  formatNumDec(123, 1, 4) // 至少保留 1 位小数, 最多保留 4 位小数 => 123.0
  formatNumDec(123.2, 2, 4) // 至少保留 2 位小数, 最多保留 4 位小数 => 123.20
  formatNumDec(123.456789, 1, 3) // 至少保留 1 位小数, 最多保留 3 位小数 => 123.457
  formatNumDec(123, 3, 3) // 至少保留 3 位小数, 最多保留 3 位小数 => 123.000

```

### 动态加载JS脚本
loadJs 参数：

`{url}[脚本链接]`   
```javascript

  loadJs('http://gymk.df-mic.com/heLiKongFei.js')
    .then(() => { console.log('加载成功') })
    .catch(e => { console.error(e) })

```
## 打印相关
### 执行打印操作
webapp_ws_ajax_run

```javascript

  print () {
    const args = {
      type: 'preview', // 设置不同的属性可以执行不同的任务，如：preview print pdf xls csv txt rtf img grd
      report: this.$utils.urlAddRandomNo('/moban/1a.grf'),
      data: {
        recordset: [
          {
            CustomerID: 'ALFKI',
            CompanyName: '三川实业有限公司',
            ContactName: '刘小姐',
            Address: '大崇明路 50 号',
            City: '天津',
            Region: '华北',
            PostalCode: '343567',
            Phone: '(030) 30074321'
          },
          {
            CustomerID: 'ANATR',
            CompanyName: '东南实业',
            ContactName: '王先生',
            Address: '承德西路 80 号',
            City: '天津',
            Region: '华北',
            PostalCode: '234575',
            Phone: '(030) 35554729'
          }
        ]
      },
      reportid: 'ws_data_from_object' // 这个参数不是必须的，只是用于回发消息标识报表身份
    }
    this.$utils.webapp_ws_ajax_run(args)
  }

```

### 打印纸张设置
```javascript

  print () {
    const args = {
      type: 'preview', // 设置不同的属性可以执行不同的任务，如：preview print pdf xls csv txt rtf img grd
      report: report,
      data: data,
      // 自定义纸张大小
      PaperSize: 256,
      PaperWidth: 21.0,
      PaperLength: 14.85
       // 打印方向
      PaperOrientation: "landscape",
      // 按A4产生的报表，以A5方式打印，实现缩小打印。如果按A3打印，实现放大打印
      SheetPaperSize: 11, //缩放打印 A3 - 8, A4 - 9, A5 - 11
      // 打印次数
      Collate: true,
      Copies: 3,
      reportid: 'ws_data_from_object' // 这个参数不是必须的，只是用于回发消息标识报表身份
    }
    this.$utils.webapp_ws_ajax_run(args)
  }

```

### 无模板自动生成模板打印
noReportPrint  

`{tableRef}[df-table的ref]`  

`{data}[表格数据]`  

`{tableName}[报表名]`  

`{type}[模式 print 打印 preview 打印预览]`  

`{isLandscape}[是否是横向]`
```javascript

  // 无模板打印
  /**
   * noReportPrint
   * @param {ref} tableRef df-table的ref
   * @param {array} data 表格数据
   * @param {string} tableName 报表名
   * @param {string} type 模式 print 打印 preview 打印预览
   * @param {boolean} isLandscape 是否是横向
  */
  this.$utils.noReportPrint(tableRef, data, tableName, type, isLandscape)

```

### 多模板打印
webapp_ws_ajax_together  

`{args}[打印参数]`  

`{reports}[打印数据]`  
```javascript

  this.$utils.webapp_ws_ajax_together(args, reports)

```


## 仅挂在utils上的方法
  使用时直接从引入的utils获取

request
创建请求实例方法
参数：

`{config}[初始化配置]`
```javascript

  // config配置项
  baseURL: String	// 请求根路径
  timeout: Number	// 超时时间,默认10000
  headers: Object	// 请求头设置
  requestPipe: Function	// 请求config注入，参考axios的config可配置项
  whiteList: Array	// 请求白名单
  authorization: String	// 请求头token字段，默认'Authorization'
  tokenKey: String	// sessionStorage内存储token的字段，请求接口时会根据此字段获取token，默认 ：'token'
  codeKey: String	// 请求响应的code字段，配合successCode用于判断是否是成功的响应体
  successCode: Number	// 请求响应的code值，配合codeKey用于判断是否是成功的响应体
  resDataKey: String	// 请求响应的data字段
  msgKey: String	// 请求响应的message字段
  showError: Boolean	// 是否显示错误信息

```
```javascript

  import request from '@df_scope/df-utils/request'

  const instance = request({
    baseURL: '/api',
    timeout: 10000,
    headers: {},
    requestPipe (config) {
      // 在这修改请求的config
      return config
    },
    codeKey: 'returnCode',
    successCode: 1,
    resDataKey: 'returnData',
    msgKey: 'returnMessage'
  })

  export default instance

```


cookies
操作cookies的方法对象
方法：

`getsec(str)`:字符串转时间戳, 可转如 `'1000s', '2h', '1d'`的字符串,分别代表单位为:秒, 小时, 天

`getCookie(key)`: 获取值

`setCookie(key, value)`: 设置值

`delCookie(key)`: 删除值


下列方法获取方式同上, 使用方式与源库保持一致: axios、moment、lodash

