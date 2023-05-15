## 快速上手

本节将介绍如何在项目中使用 DF-BUI

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash

    npm install babel-plugin-component -D

```

然后，将 .babelrc 修改为：

```json

    {
      "presets": [
        "@vue/cli-plugin-babel/preset"
      ],
      "plugins": [
        [
          "component",
          {
            "libraryName": "@df_scope/df-bui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }

```

接下来，如果你只希望引入部分组件，比如 PageDynamic，那么需要在 main.js 中写入以下内容：

```javascript

    import Vue from 'vue';
    import { PageDynamic } from '@df_scope/df-bui';
    import App from './App.vue';

    Vue.component(PageDynamic.name, PageDynamic);
    /* 或写为
    * Vue.use(Button)
    * Vue.use(Select)
    */

    new Vue({
      el: '#app',
      render: h => h(App)
    });

```

完整组件列表和引入方式

```javascript

    import Vue froPageDynamicm 'vue';
    import {
      PageDynamic
    } from '@df_scope/df-bui';

    const components = [
      PageDynamic
    ]

    components.forEach(component => Vue.use(component))


```

