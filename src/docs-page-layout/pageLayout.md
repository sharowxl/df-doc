## 使用 Layout 组件进行典型页面的布局

df-layout 是 DF-UI 组件库中的一个用于快速进行典型页面布局的一个组件，在大多数页面布局情况中，都可以使用此组件满足页面布局的需求。

### 基础布局

上中下结构布局


:::demo 通过slot="header" 布局顶部 通过slot.default 布局中间 可以通过 headerHeight 设置头部高度 默认为search-bar的高度
```html
<div class="default-layout">
  <df-layout>
    <df-search-bar slot='header' :model="ruleForm">
      <template>
        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">
          <df-input v-model="ruleForm.name"></df-input>
        </df-search-bar-item>
        <template slot="buttons">
          <df-button type="success">插槽按钮</df-button>
          <df-button type="success">插槽按钮</df-button>
        </template>
      </template>
    </df-search-bar>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'total, sizes, prev, pager, next, jumper'"
      :total="400"
    >
      <template slot="header">
          <df-button type="success">
            <i class="df-icon-add-circle"></i>
            开单
          </df-button>
          <df-button plain>打印</df-button>
          <df-button plain icon="df-icon-refresh"></df-button>
      </template>
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="gender" label="性别" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
  </df-layout>
</div>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::

### 左右布局（左右之间竖线分隔）

左右结构布局


:::demo 通过slot="left" 布局左侧 通过slot.default 布局中间 通过slot="right" 布局右侧 可以通过left right设置左右占据的栅格大小 可以通过gutter设置间隔值 left right默认值为6 gutter默认为4
```html
<div class="default-layout">
  <df-layout>
    <div slot='left' class='layout-left'>
      left
    </div>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'sizes, prev, pager, next, jumper'"
      :total="400"
    >
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
  </df-layout>
</div>
<div style="backgroud: #fff; height: 40px"></div>
<div class="default-layout">
  <df-layout>
    <div slot='left' class='layout-left'>
      left
    </div>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'sizes, pager'"
      :total="400"
    >
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="name" label="姓名" width="80" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
    <div slot='right' class='layout-right'>
      right
    </div>
  </df-layout>
</div>
<div style="backgroud: #fff; height: 40px"></div>
<div class="default-layout">
  <df-layout>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'sizes, prev, pager, next, jumper'"
      :total="400"
    >
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
    <div slot='right' class='layout-right'>
      right
    </div>
  </df-layout>
</div>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::

### 左右布局（左右之间模块分隔）

左右结构布局


:::demo 配置`use-division`即可使用模块分隔类型的左右结构，通过slot="left" 布局左侧 通过slot.default 布局中间 通过slot="right" 布局右侧 可以通过left right设置左右占据的栅格大小 可以通过gutter设置间隔值 left right默认值为6 gutter默认为4
```html
<template>
  <div class="default-layout">
    <df-layout use-division>
      <div slot='left' class='layout-left'>
        left
      </div>
      <df-x-table
        :data="tableData"
        :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
        :page-size="20"
        :layout="'sizes, pager'"
        :total="400"
      >
        <df-table-column prop="index" label="序号" width="50" />
        <df-table-column prop="name" label="姓名" width="80" />
        <df-table-column prop="address" label="地址" />
      </df-x-table>
      <div slot='right' class='layout-right'>
        right
      </div>
    </df-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::

### 上下左右布局

上下左右结构布局


:::demo 左右上下结构布局
```html
<div class="default-layout">
  <df-layout>
    <df-search-bar slot='header' :model="ruleForm">
      <template>
        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">
          <df-input v-model="ruleForm.name"></df-input>
        </df-search-bar-item>
      </template>
    </df-search-bar>
    <div slot='left' class='layout-left'>
      left
    </div>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'sizes, prev, pager, next, jumper'"
      :total="400"
    >
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
  </df-layout>
</div>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::

### 混合嵌套使用

混合嵌套使用，生成更丰富的布局。

:::demo 混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响
```html
<div class="default-layout">
  <df-layout>
    <div slot='left' class='layout-left'>
      left
    </div>
    <df-layout use-as-children>
      <df-search-bar slot='header' :model="ruleForm">
        <template>
          <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">
            <df-input v-model="ruleForm.name"></df-input>
          </df-search-bar-item>
        </template>
      </df-search-bar>
    <df-x-table
      :data="tableData"
      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
      :page-size="20"
      :layout="'sizes, prev, pager, next, jumper'"
      :total="400"
    >
      <df-table-column prop="index" label="序号" width="50" />
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-x-table>
    </df-layout>
  </df-layout>
</div>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::

### 复杂用法

制作一个上下左右结构里面再嵌套一个上下结构的布局


:::demo 混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响
```html
<div class="default-layout">
  <df-layout>
    <df-search-bar slot='header' :model="ruleForm">
      <template>
        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">
          <df-input v-model="ruleForm.name"></df-input>
        </df-search-bar-item>
      </template>
    </df-search-bar>
    <div slot='left' class='layout-left'>
      left
    </div>
    <df-layout headerHeight="50%" use-as-children>
      <df-table
        slot="header"
        height="100%"
        :data="tableData">
        <df-table-column prop="index" label="序号" width="50" />
        <df-table-column prop="date" label="日期" width="150" />
        <df-table-column prop="name" label="姓名" width="150" />
        <df-table-column prop="address" label="地址" />
      </df-table>
      <df-x-table
        :data="tableData"
        :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
        :page-size="20"
        :layout="'sizes, prev, pager, next, jumper'"
        :total="400"
      >
        <df-table-column prop="index" label="序号" width="50" />
        <df-table-column prop="date" label="日期" width="150" />
        <df-table-column prop="name" label="姓名" width="150" />
        <df-table-column prop="address" label="地址" />
      </df-x-table>
    </df-layout>
  </df-layout>
</div>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      tableData: new Array(10)
        .fill(0)
        .map((item, index) => ({
          index: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
    }
  }
}
</script>
```
:::


### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 左右栅格间隔 | number | — | 4 |
| left | 左侧插槽占据列数 | number | - | 6 |
| right | 右侧插槽占据列数 | number | - | 6 |
| headerHeight | 自定义头部高度 | string/number | * | 48 |
| use-as-children | 嵌套使用 layout 组件时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响 | boolean | - | false |
| use-division | 是否使用模块分隔式的左右结构 | boolean | - | false |

### Scoped Slot
| 参数      | 说明          |
|---------- |-------------- |
| - | 中间 |
| header | 顶部 |
| left |  左侧 |
| right | 右侧 |
