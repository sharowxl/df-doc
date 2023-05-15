## 安装
DF-BUI 是我们自己开发的组件，安装之前，你需要在你的工程项目的根目录下配置 .npmrc 文件，使得 npm 能够正确的指向安装地址  

在 .npmrc 中写入以下内容：

```javascript

  registry=http://registry.npm.taobao.org/

  @df_scope:registry=http://nexus.df-mic.com/repository/npm-group/

```


### npm 安装

```shell

  npm install @df_scope/df-bui -S

```
### yarn 安装

```shell

  yarn add @df_scope/df-bui -S
  
```

安装完成后，请阅读下一节：[快速上手](/#/component/quickstart)。
