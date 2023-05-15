## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<df-container>`：外层容器。当子元素中包含 `<df-header>` 或 `<df-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<df-header>`：顶栏容器。

`<df-aside>`：侧边栏容器。

`<df-main>`：主要区域容器。

`<df-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<df-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<df-container>`。
:::

### 常见页面布局

:::demo
```html
<template>
  <div>
    <df-container>
      <df-header>Header</df-header>
      <df-main>Main</df-main>
    </df-container>
    <br/>
    <df-container>
      <df-header>Header</df-header>
      <df-main>Main</df-main>
      <df-footer>Footer</df-footer>
    </df-container>
    <br/>
    <df-container>
      <df-aside width="200px">Aside</df-aside>
      <df-main>Main</df-main>
    </df-container>
    <br/>
    <df-container>
      <df-header>Header</df-header>
      <df-container>
        <df-aside width="200px">Aside</df-aside>
        <df-main>Main</df-main>
      </df-container>
    </df-container>
    <br/>
    <df-container>
      <df-header>Header</df-header>
      <df-container>
        <df-aside width="200px">Aside</df-aside>
        <df-container>
          <df-main>Main</df-main>
          <df-footer>Footer</df-footer>
        </df-container>
      </df-container>
    </df-container>
    <br/>
    <df-container>
      <df-aside width="200px">Aside</df-aside>
      <df-container>
        <df-header>Header</df-header>
        <df-main>Main</df-main>
      </df-container>
    </df-container>
    <br/>
    <df-container>
      <df-aside width="200px">Aside</df-aside>
      <df-container>
        <df-header>Header</df-header>
        <df-main>Main</df-main>
        <df-footer>Footer</df-footer>
      </df-container>
    </df-container>
  </div>
</template>

<style>
  .df-header, .df-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .df-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .df-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .df-container {
    margin-bottom: 40px;
  }
  
  .df-container:nth-child(5) .df-aside,
  .df-container:nth-child(6) .df-aside {
    line-height: 260px;
  }
  
  .df-container:nth-child(7) .df-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<template>
  <df-container style="height: 500px; border: 1px solid #eee">
    <df-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <df-menu :default-openeds="['1', '3']">
        <df-submenu index="1">
          <template slot="title"><i class="df-icon-mail-o"></i>导航一</template>
          <df-menu-item-group>
            <template slot="title">分组一</template>
            <df-menu-item index="1-1">选项1</df-menu-item>
            <df-menu-item index="1-2">选项2</df-menu-item>
          </df-menu-item-group>
          <df-menu-item-group title="分组2">
            <df-menu-item index="1-3">选项3</df-menu-item>
          </df-menu-item-group>
          <df-submenu index="1-4">
            <template slot="title">选项4</template>
            <df-menu-item index="1-4-1">选项4-1</df-menu-item>
          </df-submenu>
        </df-submenu>
        <df-submenu index="2">
          <template slot="title"><i class="df-icon-4square"></i>导航二</template>
          <df-menu-item-group>
            <template slot="title">分组一</template>
            <df-menu-item index="2-1">选项1</df-menu-item>
            <df-menu-item index="2-2">选项2</df-menu-item>
          </df-menu-item-group>
          <df-menu-item-group title="分组2">
            <df-menu-item index="2-3">选项3</df-menu-item>
          </df-menu-item-group>
          <df-submenu index="2-4">
            <template slot="title">选项4</template>
            <df-menu-item index="2-4-1">选项4-1</df-menu-item>
          </df-submenu>
        </df-submenu>
        <df-submenu index="3">
          <template slot="title"><i class="df-icon-settings"></i>导航三</template>
          <df-menu-item-group>
            <template slot="title">分组一</template>
            <df-menu-item index="3-1">选项1</df-menu-item>
            <df-menu-item index="3-2">选项2</df-menu-item>
          </df-menu-item-group>
          <df-menu-item-group title="分组2">
            <df-menu-item index="3-3">选项3</df-menu-item>
          </df-menu-item-group>
          <df-submenu index="3-4">
            <template slot="title">选项4</template>
            <df-menu-item index="3-4-1">选项4-1</df-menu-item>
          </df-submenu>
        </df-submenu>
      </df-menu>
    </df-aside>
    
    <df-container>
      <df-header style="text-align: right; font-size: 12px">
        <df-dropdown>
          <i class="df-icon-settings" style="margin-right: 15px"></i>
          <df-dropdown-menu slot="dropdown">
            <df-dropdown-item>查看</df-dropdown-item>
            <df-dropdown-item>新增</df-dropdown-item>
            <df-dropdown-item>删除</df-dropdown-item>
          </df-dropdown-menu>
        </df-dropdown>
        <span>王小虎</span>
      </df-header>
      
      <df-main>
        <df-table :data="tableData">
          <df-table-column prop="date" label="日期" width="140">
          </df-table-column>
          <df-table-column prop="name" label="姓名" width="120">
          </df-table-column>
          <df-table-column prop="address" label="地址">
          </df-table-column>
        </df-table>
      </df-main>
    </df-container>
  </df-container>
</template>

<style>
  .df-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .df-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `df-header` 或 `df-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |