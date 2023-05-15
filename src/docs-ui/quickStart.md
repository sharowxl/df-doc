## 快速上手

本节将介绍如何在项目中使用 DF-UI

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
            "libraryName": "@df_scope/df-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }

```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript

    import Vue from 'vue';
    import { Button, Select } from '@df_scope/df-ui';
    import App from './App.vue';

    Vue.component(Button.name, Button);
    Vue.component(Select.name, Select);
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

    import Vue from 'vue';
    import {
      SelectColumn,
      SearchBar,
      SearchBarItem,
      PageSelect,
      Pagination,
      Dialog,
      Autocomplete,
      Dropdown,
      DropdownMenu,
      DropdownItem,
      Menu,
      Submenu,
      MenuItem,
      MenuItemGroup,
      Input,
      InputNumber,
      Radio,
      RadioGroup,
      RadioButton,
      Checkbox,
      CheckboxButton,
      CheckboxGroup,
      Switch,
      Select,
      Option,
      OptionGroup,
      Button,
      ButtonGroup,
      Table,
      TableColumn,
      DatePicker,
      TimeSelect,
      TimePicker,
      Popover,
      Tooltip,
      Breadcrumb,
      BreadcrumbItem,
      Form,
      FormItem,
      Tabs,
      TabPane,
      Tag,
      Tree,
      TreeSelect,
      Alert,
      Slider,
      Icon,
      Row,
      Col,
      Upload,
      Progress,
      Spinner,
      Badge,
      Card,
      Rate,
      Steps,
      Step,
      Carousel,
      Scrollbar,
      CarouselItem,
      Collapse,
      CollapseItem,
      Cascader,
      ColorPicker,
      Transfer,
      Container,
      Header,
      Aside,
      Main,
      Footer,
      Timeline,
      TimelineItem,
      Link,
      Divider,
      Image,
      Calendar,
      Backtop,
      PageHeader,
      CascaderPanel,
      Avatar,
      Drawer,
      Popconfirm,
      CollapseTransition,
      XTable,
      Layout,
      Status,
      Empty,
      SuperSelect,
      BloodPressureInput,
      PatientInfo,
      XCharts,
      PainInput,
      DateRangePicker,
      TimeRangePicker,
      DatetimeRangePicker,
      TreeTable,
      TreeTableSelect,
      GraffitiBoard,
      IconPicker
    } from '@df_scope/df-ui';

    const components = [
      SelectColumn,
      SearchBar,
      SearchBarItem,
      PageSelect,
      Pagination,
      Dialog,
      Autocomplete,
      Dropdown,
      DropdownMenu,
      DropdownItem,
      Menu,
      Submenu,
      MenuItem,
      MenuItemGroup,
      Input,
      InputNumber,
      Radio,
      RadioGroup,
      RadioButton,
      Checkbox,
      CheckboxButton,
      CheckboxGroup,
      Switch,
      Select,
      Option,
      OptionGroup,
      Button,
      ButtonGroup,
      Table,
      TableColumn,
      DatePicker,
      TimeSelect,
      TimePicker,
      Popover,
      Tooltip,
      Breadcrumb,
      BreadcrumbItem,
      Form,
      FormItem,
      Tabs,
      TabPane,
      Tag,
      Tree,
      TreeSelect,
      Alert,
      Slider,
      Icon,
      Row,
      Col,
      Upload,
      Progress,
      Spinner,
      Badge,
      Card,
      Rate,
      Steps,
      Step,
      Carousel,
      Scrollbar,
      CarouselItem,
      Collapse,
      CollapseItem,
      Cascader,
      ColorPicker,
      Transfer,
      Container,
      Header,
      Aside,
      Main,
      Footer,
      Timeline,
      TimelineItem,
      Link,
      Divider,
      Image,
      Calendar,
      Backtop,
      PageHeader,
      CascaderPanel,
      Avatar,
      Drawer,
      Popconfirm,
      CollapseTransition,
      XTable,
      Layout,
      Status,
      Empty,
      SuperSelect,
      BloodPressureInput,
      PatientInfo,
      XCharts,
      PainInput,
      DateRangePicker,
      TimeRangePicker,
      DatetimeRangePicker,
      TreeTable,
      TreeTableSelect,
      GraffitiBoard,
      IconPicker
    ]

    components.forEach(component => Vue.use(component))

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;  

```

