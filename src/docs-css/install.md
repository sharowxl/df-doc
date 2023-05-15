## 如何使用共用样式类
[DF-UI](#/component) 中封装了一些常用的样式类，安装 [DF-UI](#/component) 之后，在项目中通过以下方式引入共用样式类，就可以使用这些共用样式类了

### 引入样式 css 类
样式 css 类可以在项目全局的 main.js 中直接引入使用
```javascript

  import '@df_scope/df-ui/lib/theme-chalk/classes.css'

```

### 样式颜色 js 版本
除了样式 css 类之外，DF-UI 还提供了 js 版本的颜色变量，在需要时引入使用即可
```javascript

  import dfColors from '@df_scope/df-ui/lib/colors'

```

样式 css 类和样式颜色 js 的查询表，请阅读下一节：[基础样式表](/#/css/classes)。
