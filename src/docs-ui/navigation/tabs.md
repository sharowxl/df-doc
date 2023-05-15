## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```html
<template>
  <df-tabs v-model="activeName" @tab-click="handleClick">
    <df-tab-pane label="用户管理" name="first">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理" name="second">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理" name="third">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 头部右侧插槽

头部右侧插槽。

:::demo 配置 slots header-right 来使用头部右侧插槽，根据业务需求插入 dom，配合`header-right-inject-style`属性来配置插槽外层的样式。

```html
<template>
  <df-tabs v-model="activeName" :header-right-inject-style='{right: "2px"}'>
    <div slot='header-right'>头部右侧插槽</div>
    <df-tab-pane label="用户管理" name="first">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理" name="second">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理" name="third">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  }
}
</script>
```
:::

### 卡片式标签切换

选项卡样式的标签页。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项改变为卡片式标签风格，传入 card-title 以标识卡片的固定标题。

```html
<template>
  <df-tabs v-model="activeName" type="card" card-title="卡片标题" @tab-click="handleClick">
    <df-tab-pane label="用户管理" name="first">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理" name="second">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理" name="third">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 页面标签切换

页面标签化的标签页。

:::demo 将`type`设置为`tag`。
```html
<template>
  <df-tabs type="tag">
    <df-tab-pane label="用户管理">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
```
:::

### 按钮组类型切换

按钮组类型的标签页。

:::demo 将`type`设置为`boxes`。
```html
<template>
  <df-tabs type="boxes">
    <df-tab-pane label="用户管理">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
```
:::

### 按钮组类型切换(圆角)

使用按钮组类型的圆角样式。

:::demo 在`type`设置为`boxes`的情况下, 给 tabs 标签设置属性`circle-border`即可。
```html
<template>
  <df-tabs type="boxes" circle-border>
    <df-tab-pane label="用户管理">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
```
:::

### 带边线的卡片化

带边线的卡片化的标签页。

:::demo 将`type`设置为`border-card`。
```html
<template>
  <df-tabs type="border-card">
    <df-tab-pane label="用户管理">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
```
:::

### 位置

可以通过 `tab-position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```html
<template>
  <div>
    <df-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <df-radio-button label="top">top</df-radio-button>
      <df-radio-button label="right">right</df-radio-button>
      <df-radio-button label="bottom">bottom</df-radio-button>
      <df-radio-button label="left">left</df-radio-button>
    </df-radio-group>

    <df-tabs :tab-position="tabPosition" style="height: 200px;">
      <df-tab-pane label="用户管理">用户管理</df-tab-pane>
      <df-tab-pane label="配置管理">配置管理</df-tab-pane>
      <df-tab-pane label="角色管理">角色管理</df-tab-pane>
      <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
    </df-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
```
:::

### 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

:::demo
```html
<template>
  <df-tabs type="border-card">
    <df-tab-pane>
      <span slot="label"><i class="df-icon-calendar"></i> 我的行程</span>
      我的行程
    </df-tab-pane>
    <df-tab-pane label="消息中心">消息中心</df-tab-pane>
    <df-tab-pane label="角色管理">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
```
:::

### 动态增减标签页

动态增减标签页

:::demo
```html
<template>
  <df-tabs v-model="editableTabsValue" type="card" card-title="卡片标题" editable @edit="handleTabsEdit">
    <df-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      {{item.content}}
    </df-tab-pane>
  </df-tabs>
</template>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
```
:::

### 自定义增加标签页触发器

:::demo
```html
<template>
  <div>
    <div style="margin-bottom: 20px;">
      <df-button
        size="small"
        @click="addTab(editableTabsValue)"
      >
        add tab
      </df-button>
    </div>
    <df-tabs v-model="editableTabsValue" type="card" card-title="卡片标题" closable @tab-remove="removeTab">
      <df-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{item.content}}
      </df-tab-pane>
    </df-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
```
:::

### 自定义右键菜单内容

:::demo

```html
<template>
  <df-tabs
    v-model="activeName"
    show-right-menu
    :right-menu-list="rightMenuList"
    @right-menu-click="handleRightMenuClick"
  >
    <df-tab-pane
      v-for="tab in tabList"
      :key="tab.name"
      :label="tab.label"
      :name="tab.name"
    >
      {{tab.label}}
    </df-tab-pane>
  </df-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        rightMenuList: ['关闭其他'],
        tabList: [
          {label: '用户管理', name: 'first'},
          {label: '配置管理', name: 'second'},
          {label: '角色管理', name: 'third'},
          {label: '定时任务补偿', name: 'fourth'}
        ]
      };
    },
    methods: {
      handleRightMenuClick (menu, tab) {
        const tabItem = this.tabList[tab.index]
        this.$set(this, 'activeName', tab.name)
        this.$set(this, 'tabList', [tabItem])
      }
    }
  };
</script>
```
:::

### 更多菜单

这是为医生站框架定做的更多菜单功能，一般情况下是用不到的，无需关注。

:::demo 传入属性 `moreMenu` 开启更多菜单。

```html
<template>
  <df-tabs v-model="activeName" :more-menu="moreMenu">
    <df-tab-pane label="用户管理" name="first">用户管理</df-tab-pane>
    <df-tab-pane label="配置管理" name="second">配置管理</df-tab-pane>
    <df-tab-pane label="角色管理" name="third">角色管理</df-tab-pane>
    <df-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</df-tab-pane>
  </df-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second',
      moreMenu: [
        {
          title: '菜单标题1',
          children: [
            {
              name: '1-1',
              label: '更多菜单1'
            },
            {
              name: '1-2',
              label: '更多菜单2'
            },
            {
              name: '1-3',
              label: '更多菜单3'
            }
          ]
        },
        {
          title: '菜单标题2',
          children: [
            {
              name: '2-1',
              label: '更多菜单1'
            },
            {
              name: '2-2',
              label: '更多菜单2'
            },
            {
              name: '2-3',
              label: '更多菜单3'
            }
          ]
        },
        {
          title: '菜单标题3',
          children: [
            {
              name: '3-1',
              label: '更多菜单1'
            },
            {
              name: '3-2',
              label: '更多菜单2'
            },
            {
              name: '3-3',
              label: '更多菜单3'
            }
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### Tabs Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model  | 绑定值，选中选项卡的 name  | string   |  —  |  第一个选项卡的 name |
| type     | 风格类型   | string   | card/tag/boxes/border-card  |     —    |
| card-title     |  卡片类型的标题   | string   | —  |     —    |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| addable  | 标签是否可增加   | boolean   | — |  false  |
| editable  | 标签是否同时可增加和关闭   | boolean   | — |  false  |
| tab-position  | 选项卡所在位置 | string   |  top/right/bottom/left  |  top |
| stretch  | 标签的宽度是否自撑开 | boolean   |  -  |  false |
| before-leave | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | — | — |
| header-inject-style  | tabs 头部的注入样式 | object   |  -  |  - |
| content-inject-style  | tabs 内容的注入样式 | object   |  -  |  - |
| header-right-inject-style  | tabs 头部右侧插槽的注入样式 | object   |  -  |  - |
| show-right-menu  | /新增/ tab头部右键点击后,显示自定义右键菜单 | boolean   |  -  |  false |
| right-menu-list  | /新增/ 自定义的右键菜单,值为字符串数组 | array   |  -  | [] |
| more-menu  | /新增/ 这是为医生站框架定做的更多菜单功能，一般情况下是用不到的，无需关注 | array   |  -  | [] |

### Tabs Slots
| name | 说明 |
|------|--------|
| header-right | tabs 头部右侧插槽 |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中时触发 | 被选中的标签 tab 实例 |
| tab-remove  | 点击 tab 移除按钮后触发  | 被删除的标签的 name |
| tab-add  | 点击 tabs 的新增按钮后触发  | — |
| edit  | 点击 tabs 的新增按钮或 tab 被关闭后触发  | (targetName, action) |
| right-menu-click  | /新增/ 自定义的右键菜单点击后触发  | (menu, 被点击的标签 tab 实例) |
| tab-more-click  | /新增/ 更多菜单点击后触发  | (被点击的更多菜单对象) |

### Tab-pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| disabled | 是否禁用 | boolean | — | false |
| name      | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| lazy  | 标签是否延迟渲染   | boolean   | — |  false  |
