## XTable 分页表格

当表格数据量过多时，使用分页表格分解数据。

### 基础用法

:::demo x-table 组件内部封装了 pagination 分页组件和 table 表格组件，保留了它们的所有功能，你可以像下面的例子那样使用它来进行常规的表格数据分页。内置的匿名插槽的功能同 table，这使得你可以像使用 table 组件一样使用 table-column 组件来渲染表格的列。需要注意的是，x-table 需要设定有效的高度 css 样式，这样 table 才能撑满中间区域。
```html
<template>
  <df-x-table
    :data="tableData"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :layout="layout"
    :total="total"
    :small="false"
    style='height: 413px'
    @pagination-change="handlePaginationChange"
  >
    <df-table-column prop="index" label="序号" width="50" />
    <df-table-column prop="date" label="日期" width="150" />
    <df-table-column prop="name" label="姓名" width="150" />
    <df-table-column prop="gender" label="性别" width="150" />
    <df-table-column prop="address" label="地址" />
  </df-x-table>
</template>

<script>
// 生成大量数据
const total = 1000
const tableData = new Array(total)
  .fill(0)
  .map((item, index) => ({
    index: index + 1,
    date: '2016-05-03',
    name: '李时珍',
    gender: '女',
    address: '四川省武当山普陀区金沙江路 1518 弄'
  }))

// 这里的方法可以看做接口模拟，用来获取表格数据和总长度的
const getData = (page, pageSize) => {
  console.log(`开始查询表格数据，当前页是第 ${page} 页，每一页请求 ${pageSize} 条数据`)
  const result = tableData.slice(
    pageSize * (page - 1),
    pageSize * page
  )
  console.log('本次查询的结果是', result)
  return result
}
const getTotal = () => total

export default {
  name: 'Demo',
  data () {
    return {
      tableData: [],
      total: 1,
      pageSizes: [5, 10, 20, 50, 100, 200, 300, 400],
      pageSize: 10,
      currentPage: 1,
      layout: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    getTotal () {
      this.total = getTotal()
    },
    getData () {
      this.tableData = getData(this.currentPage, this.pageSize)
    },
    handlePaginationChange (paginationStatus) {
      this.currentPage = paginationStatus.currentPage
      this.pageSize = paginationStatus.pageSize
      this.getData()
    }
  },
  created () {
    this.getTotal()
    this.getData()
  }
}
</script>
```
:::

### pagination 可选

:::demo 若不需要底部的 `pagination`，则配置 `needPagination` 为 `false`即可，所以 `x-table` 可以作为纯净的 `table` 组件来使用。
```html
<template>
  <df-x-table
    :data="tableData"
    :needPagination="false"
    style="height: 353px"
  >
    <df-table-column prop="index" label="序号" width="50" />
    <df-table-column prop="date" label="日期" width="150" />
    <df-table-column prop="name" label="姓名" width="150" />
    <df-table-column prop="gender" label="性别" width="150" />
    <df-table-column prop="address" label="地址" />
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
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

### 头部插槽

:::demo 合理利用头部插槽，以实现业务需求。
```html
<template>
  <df-x-table
    :data="tableData"
    :needPagination="false"
    style="height: 387px"
  >
   <template slot="header">
      <df-button type="success">
        <i class="df-icon-add"></i>
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
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
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

### 尾部插槽

:::demo 合理利用尾部插槽，以实现业务需求。
```html
<template>
  <df-x-table
    :data="tableData"
    :needPagination="false"
    style="height: 387px"
  >
    <df-table-column prop="index" label="序号" width="50" />
    <df-table-column prop="date" label="日期" width="150" />
    <df-table-column prop="name" label="姓名" width="150" />
    <df-table-column prop="gender" label="性别" width="150" />
    <df-table-column prop="address" label="地址" />
   <template slot="footer">
      <df-button type="success">
        <i class="df-icon-add"></i>
        开单
      </df-button>
      <df-button plain>打印</df-button>
      <df-button plain icon="df-icon-refresh"></df-button>
   </template>
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
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

### 一级表头
传入columns=[column={}]配置直接渲染表格，column的内容与df-table-column的属性配置一致
:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    has-index
    :data="data"
    :columns="columns"
    :needPagination="false"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      data: new Array(10)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        })),
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }]
    }
  }
}
</script>
```
:::

### 多级表头
传入columns=[column={}]配置直接渲染表格，column的内容与df-table-column的属性配置一致
:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    has-index
    :data="data"
    :columns="columns"
    :needPagination="false"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      data: new Array(10)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        })),
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '人员信息',
        children: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'gender'
        }, {
          label: '地址',
          prop: 'address',
          minWidth: 250
        }]
      }]
    }
  }
}
</script>
```
:::

### 树表
传入columns=[column={}]配置直接渲染表格，column的内容与df-table-column的属性配置一致
:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    :data="data"
    :columns="columns"
    :needPagination="false"
    row-key="id"
    border
    use-tree
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      data: new Array(5)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          children: [{
            id: Number(`${index + 1}${index + 1}`),
            date: '2016-05-03',
            name: '李时珍',
            gender: '女',
            address: '四川省武当山普陀区金沙江路 1518 弄'
          }, {
            id: Number(`${index + 1}${index + 2}`),
            date: '2016-05-03',
            name: '李时珍',
            gender: '女',
            address: '四川省武当山普陀区金沙江路 1518 弄'
          }]
        }))
    }
  }
}
</script>
```
:::

### 带操作列、工具栏表格
使用operationButtons时，需设置has-operation为true

:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    :data="data"
    :columns="columns"
    has-index
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :toolbar-list="toolbarList"
    :needPagination="false"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      data: new Array(10)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        })),
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      operationButtons: [{ // 操作列
        name: '编辑',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }],
      toolbarList: [{ // 工具栏
        name: '新增',
        icon: 'df-icon-add',
        type: 'success',
        click: () => {}
      }]
    }
  }
}
</script>
```
:::

### 分页表格-自定义分页数据(diyPageData为true)
diyPageData为true时，需要自行计算total（数据总数）、pageSize（每页条数）、currentPage（当前页）、切换页数后分割表格数据；

:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    :data="pageData"
    :columns="columns"
    has-index
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :toolbar-list="toolbarList"
    need-pagination
    :total="total"
    :pageSize="pageSize"
    :currentPage="currentPage"
    :pageSizes="pageSizes"
    :defaultPageSizeIndex="1"
    @pagination-change="handlePaginationChange"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      data: new Array(18)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        })),
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      operationButtons: [{ // 操作列
        name: '编辑',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }],
      toolbarList: [{ // 工具栏
        name: '新增',
        icon: 'df-icon-add',
        type: 'success',
        click: () => {}
      }],
      pageSize: 10,
      currentPage: 1,
      pageSizes: [5, 10, 20, 50]
    }
  },
  computed: {
    total () {
      return this.data.length
    },
    pageData () {
      const start = (this.currentPage - 1) * this.pageSize
      const end = this.currentPage * this.pageSize
      return this.data.slice(start, end)
    }
  },
  methods: {
    // 分页器的change事件
    handlePaginationChange (paginationStatus) {
      this.currentPage = paginationStatus.currentPage || 1
      this.pageSize = paginationStatus.pageSize || 10
    }
  }
}
</script>
```
:::

### 分页表格-使用内置分页计算(diyPageData为false)

:::demo
```html
<template>
  <df-x-table
    v-loading="loading"
    ref="table"
    style="height: 387px"
    :data="data"
    :columns="columns"
    has-index
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :toolbar-list="toolbarList"
    need-pagination
    :diyPageData="false"
    :pageSizes="pageSizes"
    :defaultPageSizeIndex="1"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      loading: false,
      data: [],
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      operationButtons: [{ // 操作列
        name: '编辑',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }],
      toolbarList: [{ // 工具栏
        name: '刷新',
        icon: 'df-icon-refresh',
        type: 'success',
        click: () => {
          this.$refs.table.updateCurrentPage(1)
          this.getTableData()
        }
      }],
      pageSizes: [5, 10, 20, 50]
    }
  },
  methods: {
    getTableData () {
      const data = new Array(27)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }))
      this.loading = true
      setTimeout(() => {
        this.$set(this, 'data', data)
        this.loading = false
      }, 2000)
    }
  },
  created () {
    this.getTableData()
  }
}
</script>
```
:::

### 传入接口方法获取表格数据
开启使用接口模式needApi: true，传入接口方法apiFunc，则表格在切换分页信息时，将自动更新表格数据；

:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    :columns="columns"
    has-index
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :toolbar-list="toolbarList"
    need-pagination
    :diyPageData="false"
    :pageSizes="pageSizes"
    :defaultPageSizeIndex="1"
    needApi
    :apiFunc="getData"
    :finishPostApi="handleFollowUp"
    :resPonseKey="resPonseKey"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      operationButtons: [{ // 操作列
        name: '编辑',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          console.log(row, buttonIndex, rowIndex)
        }
      }],
      toolbarList: [{ // 工具栏
        name: '刷新',
        type: 'success',
        icon: 'df-icon-refresh',
        click: () => {
          this.$refs.table.getTableData()
        }
      }],
      pageSizes: [5, 10, 20, 50],
      // 若接口返回的是一个对象，则需要定义对象里哪个字段作为表格数据，哪个字段作为表格总数
      // 若接口返回的是数组，则应该直接通过data传入表格数据
      resPonseKey: {
        dataKey: 'list',
        totalKey: 'totalRows'
      }
    }
  },
  methods: {
    getData (pageInfo, xtable) {
      // pageInfo = {pageSize, pageIndex} 分页信息, xtable 表格实例
      function rand (min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
      }
      const sex = ['男', '女']
      const data = new Array(pageInfo.pageSize)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: sex[Number(rand(0, 2))],
          address: `四川省武当山普陀区金沙江路 ${rand(100, 9999)} 弄`
        }))
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            list: data,
            totalRows: 30
          })
        }, 2000)
      })
    },
    handleFollowUp (data, pageInfo, xtable) {
      // 处理接口调完后续
      // data 表格数据, pageInfo = {pageSize, pageIndex} 分页信息, xtable 表格实例
    }
  }
}
</script>
```
:::

### 简单的可编辑表格
在column.form里配置对应每列的的表单类型与表单项配置

:::demo
```html
<template>
  <df-x-table
    v-loading="loading"
    ref="table"
    style="height: 387px"
    :data="data"
    :columns="columns"
    :column-options="columnOptions"
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :need-pagination="false"
    @enter="handleFormEnter"
    @formChange="handleFormChange"
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      loading: false,
      data: [],
      columns: [{
        label: '日期',
        prop: 'date',
        form: {
          formType: 'date-picker'
        }
      }, {
        label: '姓名',
        prop: 'name',
        form: {
          type: 'input',
          modelKey: 'nickName'
        }
      }, {
        label: '性别',
        prop: 'gender',
        form: {
          type: 'select',
          itemType: 'option',
          labelKey: 'label',
          valueKey: 'value',
          bindObj: true, // 选项值是否绑定为整个对象
          dicData: [
            { label: '男', value: 0 },
            { label: '女', value: 1 }
          ]
        }
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250,
        form: {
          type: 'input'
        }
      }],
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: ['date', 'name', 'gender', 'address']
        }
      },
      operationButtons: [{ // 操作列
        name: '新增',
        showable: (row, rowIndex) => rowIndex === (this.data.length - 1),
        click: (row, buttonIndex, rowIndex) => {
          this.addRow()
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          this.data.splice(rowIndex, 1)
        }
      }]
    }
  },
  methods: {
    getData () {
      function rand (min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
      }
      const data = new Array(5)
        .fill(0)
        .map((item, index) => ({
          date: '2016-05-03 00:00:00',
          name: '李时珍',
          nickName: '小珍',
          // gender: rand(0, 2),
          gender: {value: rand(0, 2)},
          address: `四川省武当山普陀区金沙江路 ${rand(100, 9999)} 弄`
        }))
      return new Promise((resolve) => {
        this.loading = true
        setTimeout(() => {
          this.$set(this, 'data', data)
          this.$nextTick(() => this.openEdit())
          this.loading = false
        }, 2000)
      })
    },
    // 开启编辑
    openEdit (index) {
      const _XTable = this.$refs.table
      _XTable.openEdit(index)
      // 开启某一行时，聚焦第一个输入框
      if (index || index === 0) this.$nextTick(() => _XTable.editFocus('date', index))
    },
    // 新增行
    addRow () {
      this.data.push({
        date: '',
        name: '',
        nickName: '',
        gender: null,
        address: ''
      })
      const newRowIndex = this.data.length - 1
      this.openEdit(newRowIndex)
    },
    handleFormEnter (prop, value, row, index) {
      const _XTable = this.$refs.table
      const _Table = _XTable.getRefTable()
      const {columnProp, rowIndex, isFirstEditableSlot} = _Table.getNextEditableSlot(prop, index)
      isFirstEditableSlot ? this.addRow() : _XTable.editFocus(columnProp, rowIndex)
    },
    handleFormChange (prop, value, row, rowIndex) {
      console.log('prop', row)
      this.handleFormEnter(prop, value, row, rowIndex)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
```
:::

### 每个单元格的下拉选项独立
需要配置independent为true

:::demo
```html
<template>
  <df-x-table
    v-loading="loading"
    ref="table"
    style="height: 387px"
    :data="data"
    :columns="columns"
    :column-options="columnOptions"
    has-operation
    :operation-buttons="operationButtons"
    :operation-width="120"
    :need-pagination="false"
    border
  >
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      loading: false,
      data: [],
      columns: [{
        label: '日期',
        prop: 'date',
        form: {
          formType: 'date-picker'
        }
      }, {
        label: '人员信息',
        children: [{
          label: '姓名',
          prop: 'name',
          form: {
            type: 'input'
          }
        }, {
          label: '性别',
          prop: 'gender',
          form: {
            type: 'select',
            itemType: 'option',
            labelKey: 'label',
            valueKey: 'value',
            selectLabel: 'label',
            dicData: [],
            bindObj: true,
            independent: true, // 开启独立管理下拉选项
            filterable: true,
            remote: true,
            events: {
              'focus': (e, {row, vm, $index}) => {
                const value = row.gender // 记录下当前值（为了在获取选项后，将下拉框里的值显示成label，需要在获取选项后重置一下当前值）
                this.$set(row, 'gender', '')
                vm.loading = true
                setTimeout(() => {
                  const options = row.name ? [
                    {label: '男', value: 0},
                    {label: '女', value: 1}
                  ] : []
                  this.$set(vm, 'options', options)
                  this.$nextTick(() => this.$set(row, 'gender', value))
                  vm.loading = false
                }, 1000)
              },
              'blur': (e, {row, vm}) => {
                this.$set(vm, 'options', [])
              }
            }
          }
        }, {
          label: '地址',
          prop: 'address',
          minWidth: 250,
          form: {
            type: 'input'
          }
        }]
      }],
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: ['date', 'name', 'gender', 'address']
        }
      },
      operationButtons: [{ // 操作列
        name: '新增',
        showable: (row, rowIndex) => rowIndex === (this.data.length - 1),
        click: (row, buttonIndex, rowIndex) => {
          this.addRow()
        }
      }, {
        name: '删除',
        click: (row, buttonIndex, rowIndex) => {
          this.data.splice(rowIndex, 1)
        }
      }]
    }
  },
  methods: {
    getData () {
      function rand (min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
      }
      const data = new Array(5)
        .fill(0)
        .map((item, index) => ({
          date: '2016-05-03 00:00:00',
          name: '李时珍',
          gender: {label: '男', value: 0},
          address: `四川省武当山普陀区金沙江路 ${rand(100, 9999)} 弄`
        }))
      return new Promise((resolve) => {
        this.loading = true
        setTimeout(() => {
          this.$set(this, 'data', data)
          this.$nextTick(() => this.openEdit())
          this.loading = false
        }, 2000)
      })
    },
    // 开启编辑
    openEdit (index) {
      const _XTable = this.$refs.table
      _XTable.openEdit(index)
      // 开启某一行时，聚焦第一个输入框
      if (index || index === 0) this.$nextTick(() => _XTable.editFocus('date', index))
    },
    // 新增行
    addRow () {
      this.data.push({
        date: '',
        name: '',
        gender: null,
        address: ''
      })
      const newRowIndex = this.data.length - 1
      this.openEdit(newRowIndex)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
```
:::

### 可编辑表头
表头编辑一般被用来跳转到此列的某一位置，编辑主要是由插槽来决定的，你需要定义好具名插槽slots[列字段名+HeaderEditing]里的内容，并且配置columnOptions.headerEditConfig，事件及方法参见下方文档。
:::demo
```html
<template>
  <df-x-table
    ref="table"
    style="height: 387px"
    has-index
    :data="data"
    :columns="columns"
    :needPagination="false"
    :column-options="columnOptions"
    :toolbar-list="toolbarList"
  >
    <df-select slot="dateHeaderEditing" slot-scope="scope" v-model="headerData.date" placeholder="请选择" @change="scrollToRowWithRowIndex" @blur="closeHeaderEdit('date')">
      <df-option
        v-for="item in optionsId"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </df-option>
    </df-select>
    <df-input slot="nameHeaderEditing" slot-scope="scope" v-model.number="headerData.name" placeholder="输入行数并按下enter" @change="scrollToRowWithRowIndex(headerData.name - 1)" @blur="closeHeaderEdit('name')"></df-input>
  </df-x-table>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      data: new Array(30)
        .fill(0)
        .map((item, index) => ({
          id: index + 1,
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        })),
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name',
        minWidth: 120
      }, {
        label: '性别',
        prop: 'gender'
      }, {
        label: '地址',
        prop: 'address',
        minWidth: 250
      }],
      toolbarList: [{
        name: '开启全部表头编辑',
        click: () => {
          this.openHeaderEdit()
        }
      }, {
        name: '关闭全部表头编辑',
        click: () => {
          this.closeHeaderEdit()
        }
      }],
      columnOptions: {
        headerEditConfig: {
          editableHeaders: ['date', 'name']
        }
      },
      headerData: {
        date: null,
        name: ''
      },
      optionsId: []
    }
  },
  methods: {
    scrollToRowWithRowIndex (rowIndex) {
      const _Table = this.$refs.table.getRefTable()
      _Table.scrollToRowIndex(rowIndex)
    },
    openHeaderEdit (columnProp) {
      this.$refs.table.openHeaderEdit(columnProp)
    },
    closeHeaderEdit (columnProp) {
      this.$refs.table.closeHeaderEdit(columnProp)
    }
  },
  created () {
    this.optionsId = this.data.map((row, rowIndex) => {
      return {
        value: rowIndex,
        label: `跳转到${row.id}`
      }
    })
  },
  mounted () {
    this.$nextTick(() => this.openHeaderEdit())
  }
}
</script>
```
:::



### 属性和配置

x-table 完整地保留了 pagination 和 table 的属性和事件，请前往 [pagination](#/component/pagination) 和 [table](#/component/table) 查看详细属性和事件，以下列举它们的一些区别：

1.x-table 的匿名插槽同 table，用于存放 table-column，具名插槽 header/footer 用于存放头部/尾部区域，一般来说，这里会放置一些按钮，像上面的例子那样；  
2.x-table 提供了一个名为 `pagination-change` 的事件，这是一个整合了 pagination 中 `size-change` 和 `current-change` 事件的事件，即当 `currentPage` 或 `pageSize` 中任一项发生变化都会触发此事件，携带的参数是一个对象，包含当前的`currentPage` 和 `pageSize`；  
3.x-table 必须配置一个有效的高度，否则 table 组件的高度的计算将出现问题；  
4.x-table 也完整地保留了 pagination 和 table 的方法，但是由于它们被封装在了内部，所以你需要先取到它们的实例，才能使用对应的方法，方法名参见下方 Methods。

### XTable 额外的 Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| header-height | 自定义头部高度 | string/number | * | 34 |
| hide-header-slot | 是否需要隐藏头部插槽(在头部插槽存在的情况下) | boolean | * | fasle |
| need-pagination |  是否需要 pagination 组件 | boolean | * | true |
| pagination-height | 自定义分页组件高度 | string/number | * | 36 |
| footer-height | 自定义尾部高度 | string/number | * | 34 |
| hide-footer-slot | 是否需要隐藏尾部插槽(在尾部插槽存在的情况下) | boolean | * | fasle |
| data | 表格数据 | array | * | [] |
| columns | 列配置，详见下方 | array | * | [] |
| columnStrict | 是否开启列配置严格隔离模式,开启后,columns需要变化时,需要手动更新调用renderColumns | boolean | * | true |
| hasIndex | 是否需要序号列 | boolean | * | false |
| hasSelection | 是否需要开启多选 | boolean | * | false |
| hasOperation | 是否需要操作列 | boolean | * | false |
| operationWidth | 操作列宽度 | string/number | * | 120 |
| operationConfig | 操作列的其他配置 | object | * | {} |
| operationButtons | 操作列按钮配置，详见下方 | array | * | [] |
| toolbarList | 工具栏按钮配置，详见下方 | array | * | [] |
| pageSizes | 可选每页条数 | array | * | [10, 20, 50, 100] |
| defaultPageSizeIndex | 默认每页条数，对应pageSizes的索引 | number | * | 1 |
| defaultCurrentPage | 默认当前页码 | number | * | 1 |
| diyPageData | 是否自定义分页数据 | boolean | * | true |
| total | 数据总数（diyPageData：true时有效） | number | * | 0 |
| pageSize | 每页数（diyPageData：true时有效） | number | * | 20 |
| currentPage | 当前页数（diyPageData：true时有效） | number | * | 1 |
| needApi | 是否需要调用api | boolean | * | false |
| apiFunc | 请求表格数据方法,参数为分页信息 | function | * | function (pageInfo) { Promise.resolve({}) } |
| finishPostApi | apiFunc请求完成并数据回填表格后的方法，参数依次为表格数据，分页信息，表格实例 | function | * | function (data, pageInfo, vm) {} |
| resPonseKey | 当接口返回数据格式为object时，作为表格数据的key名； | object | * | { dataKey: 'list', totalKey: 'totalRows' } |
| getDataAtOnce | 在配置了接口的情况下，是否在挂载完成后立刻请求接口 | Boolean | * | true |

### 操作列按钮配置
| name | 类型 | 说明 |
|------|--------|--------|
| name | string | 按钮名称/图标类名（按钮默认以文本显示，若需要显示成图标，需在将operationConfig里配置buttonType: icon） |
| showable | Function(button, buttonIndex, row, rowIndex)/Boolean | 是否显示 |
| click | Function(button, buttonIndex, row, rowIndex) | 按钮点击事件 |

### 工具栏按钮配置
| name | 类型 | 说明 |
|------|--------|--------|
| — | — | 按钮的内容，同 button |
| name | string | 按钮名称 |
| click | Function(button) | 按钮点击事件 |

### 列配置
| name | 类型 | 说明 | 默认值 |
|------|--------|--------|--------|
| — | — | 列的内容，同 Table-column | — |
| useSlotForm | boolean | 使用插槽编辑项 | — |
| form | object | 单元格表单配置（支持表单项本身的属性配置，具体配置详见对应的文档） | — |
| form.diyType | boolean | 是否使用自定义表单组件 | — |
| form.type | string | 表单组件；diyType为false时，支持组件库所有表单组件，去除‘df-’前缀即可(例如：input/select/input-number)；diyType为true时，为自定义表单组件的名字 | — |
| form.itemType | string | type里面的子表单组件，用于需要两个标签搭配使用的表单组件；例如select搭配option | — |
| form.modelKey | string | 表单绑定字段，无则默认绑定column.prop | '' |
| form.disabled | boolean/function(value, row, column) | 表单是否禁用 | - |
| form.dicData | array | 选项数组 | [] |
| form.filterDic | function(dicData, row) | 选项数组过滤方法 | - |
| form.labelKey | string | 选项绑定的名称字段 | 'label' |
| form.valueKey | string | 选项绑定的值字段 | 'value' |
| form.bindObj | boolean | 选项值是否绑定为整个对象（仅适用于select） | - |
| form.independent | boolean | 否开启独立管理下拉选项，开启后，需要手动通过表单实例设置下拉选项options（仅适用于select） | - |
| form.events | {event: function} | 表单项的事件（change、foucus、blur...），回调参数为：事件原本的回调参数+{row: 当前行数据, vm: 当前单元格表单项示例, $index: 当前rowIndex} | - |

### Slot
| name | 说明 |
|------|--------|
| — | 表格的内容，同 table |
| 列的属性名+Header | 自定义具体某一列的表头内容 |
| 列的属性名+HeaderEditing | 自定义具体某一列的表头内容 |
| 列的属性名+Edit | 自定义具体某一列的打开编辑插槽后的内容 |
| 列的属性名 | 自定义具体某一列的内容 |
| pre | 插入columns配置的列前面 |
| empty | 自定义空数据展示内容，同 table。 |
| append | 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上，同 table。 |
| customSummary | 开启合计行之后，自定义合计行内容，同 table。 |
| header | 头部内容 |
| footer | 尾部内容 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getRefTable | 获取 table 组件，以使用其方法 | — |
| getRefPagination | 获取 pagination 组件，以使用其方法 | — |
| getFormRef | 获取某一行某一列表单项的ref | prop, rowIndex |
| openEdit | 开启编辑,有传入rowIndex时，则仅开启对应行的编辑项，反之开启全部 | rowIndex |
| closeEdit | 关闭编辑,有传入rowIndex时，则仅关闭对应行的编辑项，反之关闭全部 | rowIndex |
| editFocus | 编辑项聚焦 | prop, rowIndex |
| editFocusSelect | 编辑项聚焦并全选内容 | prop, rowIndex |
| editBlur | 编辑项失焦 | prop, rowIndex |
| getTableData | 获取表格数据,传入keepFirstPage时,将从第一页开始搜索 | 'keepFirstPage' |
| updateColumns | 手动更新表格列配置（可在当列配置发生变化后手动调用） | — |
| openHeaderEdit | 开启表头编辑,有传入columnProp时，则仅开启对应列表头的编辑项，反之开启全部 | columnProp |
| closeHeaderEdit | 关闭表头编辑,有传入columnProp时，则仅关闭对应列表头的编辑项，反之关闭全部 | columnProp |
| updatePageSize | 更新每页条数, 入参需为数字 | size |
| updateCurrentPage | 更新当前页数, 入参需为数字 | pageNumber |

### XTable 额外的 Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| pagination-change | 启用`pagination`后，当`pagination`的`currentPage`或`pageSize`中任一项发生变化都会触发此事件，携带的参数是一个对象，包含当前的`currentPage` 和 `pageSize` | {currentPage, pageSize} |
| getData | 表格接口请求成功后触发该事件 | tableData |
| formChange | 表格内的表单的change事件 | prop, value, row, rowIndex |
