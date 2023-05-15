## 安装
DF-UTILS 是我们自己开发的一些常用共用方法库，安装之前，你需要在你的工程项目的根目录下配置 .npmrc 文件，使得 npm 能够正确的指向安装地址  

在 .npmrc 中写入以下内容：

```javascript

  registry=http://registry.npm.taobao.org/

  @df_scope:registry=http://nexus.df-mic.com/repository/npm-group/

```


### npm 安装

```shell

  npm install @df_scope/df-utils -S

```
### yarn 安装

```shell

  yarn add @df_scope/df-utils -S
  
```

### 使用

安装完成后，在项目的 main.js 文件中导入并使用 df-utils 即可

```javascript

  import utils from '@df_scope/df-utils'

  Vue.use(utils)
  
```


df-utils 中具体有哪些方法，请阅读下一节：[共用方法表](/#/js/methods)。

