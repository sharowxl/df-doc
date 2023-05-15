## 安装
业务公用模块是通过动态加载js脚本来动态加载对应的模块方法
<br/>使用前提：@df_scope/df-utils版本需大于等于0.7.1

在 .main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import config from '../package.json'
// @df_scope/df-utils版本需大于等于0.7.1
import { loadJs } from '@df_scope/df-utils/methods'

// 业务公用模块地址
let gymkAddress = null
// 需要加载的模块名称
const gymkList = [
  // 'print',
  // 'heLiKongFei',
  // 'shouFeiJieSuan'
]

/**
 * 加载公用模块内容
 * @param {array} list 模块名称list
 * @param {*} parentEl script插入的容器
 */
function loadGyMk (list = [], parentEl) {
  if (!gymkAddress) {
    console.error('读取主应用的gymkAddress公用模块地址失败，请检查')
  } else {
    loadJs(`http://${gymkAddress}/install.js`, parentEl)
      .then(() => window.yeWuGyMkInstall(
        window,
        Vue,
        { modules: list, address: gymkAddress, $el: parentEl, appId: config.appId}
      ))
      .catch(err => console.error(err))
  }
}


export async function mount (props) {
  // 子应用挂载时，接收主应用解析出来的公用模块地址
  gymkAddress = props.gymkAddress
  // instance.$root.$el对应应用的根元素
  // 开始载入公用模块内容
  loadGyMk(gymkList, instance.$root.$el)
  window.appId = config.appId
}


```

### window.yeWuGyMkInstall方法参数说明
| 参数名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| window | object | 子应用window对象，必传 |
| Vue | - | 子应用vue实例，必传 |
| config | object | 参数 |
| config.modules | array | 需要加载的方法模块 |
| config.address | string | 加载方法模块的地址 |
| config.$el | string | 加载方法模块的容器 |
| config.params | object | 方法模块的全局参数，需在方法模块中定义并传出setGlobalData |

### 开发说明

```shell
// 1. 如果未安装anywhere，先安装anywhere；如果已安装，直接进入第二步
// 2. 执行yarn dev
// 3. 修改文件内容后，需要在使用页面查看效果时，需要重新yarn build

// 已安装anywhere了的话，忽略
npm install anywhere -g
// 启动命令
yarn dev
```
