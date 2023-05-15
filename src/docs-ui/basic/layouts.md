## Layout 布局

通过slot快速布局页面

### 基础布局

上中下结构布局

:::demo 通过`slot.header`布局顶部空间, 通过`slot.default`布局中间, 头部高度可以通过`headerHeight`属性设置, 默认为`search-bar`的高度

```html
<template>
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

### 左右布局（左右之间竖线分隔）

左右结构布局, 这种布局原本默认是有竖线的, 后来 UI 改动, 改成了默认不带竖线了, 所以需要把属性`no-mid-line`置为`false`

:::demo 通过`slot.left`布局左侧空间, 通过`slot.default`布局中间, 通过`slot.right`布局右侧空间, 可以通过`left`和`right`分别设置左右占据的栅格大小, 默认值均为 6, 可以通过`gutter`设置间隔值, 默认为 4

```html
<template>
  <div>
    <div class="default-layout">
      <df-layout :no-mid-line="false">
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
      <df-layout :no-mid-line="false">
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
      <df-layout :no-mid-line="false">
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

### 左右布局（左右之间不用竖线分隔）

移除左右结构布局中间的虚线

:::demo 设置属性`no-mid-line`即可, 这个属性现在默认就是`true`了, 所以默认就是这种模式, 如果想要竖线, 则需要把此属性改为`false`

```html
<template>
  <div>
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

### 左右布局（左右之间模块分隔）

左右结构布局

:::demo 配置`use-division`即可使用模块分隔类型的左右结构

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

### 左边可收起

左边区域支持收起

:::demo 设置属性`mini-left`属性表示收起时的左边占比, 正常情况下左边的默认占比是 6, 可以通过`left`属性修改, 当左边收起时, 会外派事件`change-to-mini-left`, 当左边收起完成后, 会外派事件`changed-to-mini-left`, 当左边展开时, 会外派事件`restore-to-normal-left`, 当左边展开完成后, 会外派事件`restored-to-normal-left`

```html
<template>
  <div>
    <div class="default-layout">
      <df-layout :mini-left="0" :left="left" @restore-to-normal-left="restoreLeft">
        <div slot='left' class='layout-left' >
          left
        </div>
        <div class='layout-middle'>
          middle
        </div>
      </df-layout>
    </div>
    <div style="backgroud: #fff; height: 40px"></div>
    <div class="default-layout">
      <df-layout :mini-left="0" no-mid-line>
        <div slot='left' class='layout-left'>
          left
        </div>
        <div class='layout-middle'>
          middle
        </div>
      </df-layout>
    </div>
    <div style="backgroud: #fff; height: 40px"></div>
    <div class="default-layout">
      <df-layout :mini-left="3" no-mid-line>
        <div slot='left' class='layout-left'>
          left
        </div>
        <div class='layout-middle'>
          middle
        </div>
        <div slot='right' class='layout-right'>
          right
        </div>
      </df-layout>
    </div>
    <div style="backgroud: #fff; height: 40px"></div>
    <div class="default-layout">
      <df-layout :mini-left="4" :left="8" use-division>
        <div slot='left' class='layout-left'>
          left
        </div>
        <div class='layout-middle'>
          middle
        </div>
        <div slot='right' class='layout-right'>
          right
        </div>
      </df-layout>
    </div>
    <div style="backgroud: #fff; height: 40px"></div>
    <div class="default-layout">
      <df-layout :mini-left="0" :left="8" use-division>
        <div slot='left' class='layout-left'>
          left
        </div>
        <div class='layout-middle'>
          middle
        </div>
        <div slot='right' class='layout-right'>
          right
        </div>
      </df-layout>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      left: 0
    }
  },
  methods: {
    restoreLeft() {
      console.log('restoreLeft')
      this.left = 6
    }
  }
}
</script>
```

:::

### 上下左右布局

上下左右结构布局

:::demo

```html
<template>
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

### 混合嵌套使用

混合嵌套使用，生成更丰富的布局。

:::demo 混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置`use-as-children`属性，以防止其默认的边距对周围元素产生影响

```html
<template>
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

### 复杂用法

制作一个上下左右结构里面再嵌套一个上下结构的布局

:::demo 混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置`use-as-children`属性，以防止其默认的边距对周围元素产生影响

```html
<template>
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

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 左右栅格间隔 | number | — | 4 |
| left | 左侧插槽占据列数 | number | - | 6 |
| right | 右侧插槽占据列数 | number | - | 6 |
| headerHeight | 自定义头部高度 | string/number | * | 48 |
| use-as-children | 嵌套使用 layout 组件时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响 | boolean | - | false |
| use-division | 是否使用模块分隔式的左右结构 | boolean | - | false |
| no-mid-line | 是否取消左右布局的中间分隔虚线 | boolean | - | false |
| mini-left| 设置此属性表示左边可收起, 属性值为收起时的左边占比 | boolean | - | false |
| no-padding-top | 设置此属性可以去除个模块间之间的上下间距 | boolean | - | false |
| hide-header-slot | 使用此属性以更精准的控制头部插槽的隐藏, 传入 Boolean 值, true 为隐藏, false 为显示 | boolean | - | false |

### Scoped Slot

| 参数      | 说明          |
|---------- |-------------- |
| - | 中间 |
| header | 顶部 |
| left |  左侧 |
| right | 右侧 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change-to-mini-left | 当左边收起时 | - |
| changed-to-mini-left | 当左边收起完成时 | - |
| restore-to-normal-left | 当左边展开时 | - |
| restored-to-normal-left | 当左边展开完成时 | - |
