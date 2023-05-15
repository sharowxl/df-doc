## Table 表格编辑

将 table 组件关于编辑的部分集中到这里统一介绍。

### 插槽编辑

使用插槽来自己定义编辑的内容。

:::demo 配置`mode`为`slot`即可，注意在这样的情况下，编辑主要是由插槽来决定的，你需要定义好具名插槽`slots.editing`里的内容，事件及方法参见下方文档。
```html
<template>
  <df-table
    :data="tableData"
    :columnOptions="columnOptions"
    style="width: 100%"
    ref="table"
    @edit-disabled="cellEditDisabled"
    @switch-to-editing-slot="switchToEditingSlot"
    @restore-editing-slot="restoreEditingSlot">
    <df-table-column prop="date" label="日期" width="180">
      <div slot="editing" slot-scope="scope" style="display: flex">
        <df-input v-model="scope.row.date" />
        <df-button type="text" @click="saveEdit(scope.column.property, scope.$index)">保存</df-button>
      </div>
    </df-table-column>
    <df-table-column prop="name" label="姓名" width="180">
      <div slot="editing" slot-scope="scope">
        <df-button type="primary" @click="saveEdit(scope.column.property, scope.$index)">关闭编辑插槽</df-button>
      </div>
    </df-table-column>
    <df-table-column prop="address" label="地址">
      <div slot="editing" slot-scope="scope">
        <df-button @click="saveEdit(scope.column.property, scope.$index)">关闭编辑插槽</df-button>
      </div>
    </df-table-column>
  </df-table>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [0]
            },
            'name',
            'address'
          ]
        }
      },
      tableData: [{
        date: '2016-05-02',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    saveEdit (columnProp, rowIndex) {
      this.$refs.table.restoreEditingSlot(columnProp, rowIndex)
    },
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    }
  }
}
</script>
```
:::

### 插槽编辑(忽略某些单元格或行)

提供回调函数, 便捷的控制单元格或行的编辑禁用。

:::demo 使用 rowDisableFunc 函数直接控制一整行的编辑禁用, 使用 disableRowsIndex 函数控制某些单元格的编辑禁用。
```html
<template>
  <df-table
    :data="tableData"
    :columnOptions="columnOptions"
    style="width: 100%"
    ref="table"
    @edit-disabled="cellEditDisabled"
    @switch-to-editing-slot="switchToEditingSlot"
    @restore-editing-slot="restoreEditingSlot">
    <df-table-column prop="date" label="日期" width="180">
      <div slot="editing" slot-scope="scope" style="display: flex">
        <df-input v-model="scope.row.date" />
        <df-button type="text" @click="saveEdit(scope.column.property, scope.$index)">保存</df-button>
      </div>
    </df-table-column>
    <df-table-column prop="name" label="姓名" width="180">
      <div slot="editing" slot-scope="scope">
        <df-button type="primary" @click="saveEdit(scope.column.property, scope.$index)">关闭编辑插槽</df-button>
      </div>
    </df-table-column>
    <df-table-column prop="address" label="地址">
      <div slot="editing" slot-scope="scope">
        <df-button @click="saveEdit(scope.column.property, scope.$index)">关闭编辑插槽</df-button>
      </div>
    </df-table-column>
  </df-table>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          // rowDisableFunc 函数可以直接控制一整行的编辑禁用, 函数自动接收两个参数(行数据, 行下标)
          rowDisableFunc: (row, rowIndex) => {
            return row.disableRow
          },
          editableColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [2]
            },
            {
              columnProp: 'name',
              // disableRowsIndex 可以写成函数, 来动态的判断某个单元格的编辑禁用, 函数自动接收两个参数(行数据, 行下标)
              disableRowsIndex: (row, rowIndex) => {
                return row.disableName
              }
            },
            'address'
          ]
        }
      },
      tableData: [{
        date: '2016-05-02',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1518 弄',
        disableRow: true
      }, {
        date: '2016-05-04',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1517 弄',
        disableRow: false,
        disableName: true
      }, {
        date: '2016-05-01',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1519 弄',
        disableRow: false
      }, {
        date: '2016-05-03',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1516 弄',
        disableRow: false
      }]
    }
  },
  methods: {
    saveEdit (columnProp, rowIndex) {
      this.$refs.table.restoreEditingSlot(columnProp, rowIndex)
    },
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    }
  }
}
</script>
```
:::
### 表格校验

校验表格的数据是否符合规则，一般和表格编辑一起使用。

:::demo 传入`columnOptions`，配置`validateConfig`以启用表格数据校验，在某些时机，主动调用校验方法，以验证某些数据是否正确，一般在进行了一次编辑之后，应该校验一下当前行的数据。配置`needErrTips`以实现当某一单元格被检查出问题后，为单元格添加红色背景及鼠标浮动提示。每一列的校验规则`rules`是一个数组，里面放所有的规则，这里和 [表单校验](#/component/form) 是一致的，都是用的 [async-validator](https://github.com/yiminghe/async-validator) 的规则，你也可以将 `rules` 配置为函数以动态设置 `rules`，函数自动接收两个参数(行数据, 行下标)，针对不同行设置不同的规则，具体参见下面表格 `name` 列的校验规则示例
```html
<template>
  <div>
    <df-table
      :data="tableData"
      :columnOptions="columnOptions"
      ref="table"
      style="width: 100%;margin-bottom: 20px"
      @edit-disabled="cellEditDisabled"
      @switch-to-editing-slot="switchToEditingSlot"
      @restore-editing-slot="restoreEditingSlot">
      <df-table-column prop="date" label="日期" width="180">
        <div slot="editing" slot-scope="scope" style="display: flex">
          <df-input v-model="scope.row.date" style="width: 100px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
      <df-table-column prop="name" label="姓名" width="180">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.name" style="width: 100px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
      <df-table-column prop="address" label="地址">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.address" style="width: 200px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
    </df-table>
    <df-button @click="validateCell(0, 'name')">检查第一行name的数据</df-button>
    <df-button @click="validateCell(2, 'name')">检查第三行name的数据</df-button>
    <df-button @click="validateRow(0)">检查第一行的数据</df-button>
    <df-button @click="validateRows([2, 3])">检查后两行的数据</df-button>
    <df-button @click="validateAll">检查表格的所有数据</df-button>
    <div style="height: 10px"></div>
    <df-button @click="clearCellValidate(0, 'name')">清除第一行name的检查</df-button>
    <df-button @click="clearCellValidate(2, 'name')">清除第三行name的检查</df-button>
    <df-button @click="clearRowValidate(0)">清除第一行的检查</df-button>
    <df-button @click="clearRowsValidate([2, 3])">清除后两行的检查</df-button>
    <df-button @click="clearAllValidate">清除表格的所有检查</df-button>
    <div style="height: 10px"></div>
    <df-button @click="saveAllEditThenCheck">保存所有编辑并检查结果</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [0]
            },
            {
              columnProp: 'name'
            },
            {
              columnProp: 'address'
            }
          ]
        },
        validateConfig: {
          needErrTips: true,
          columnRules: [
            {
              columnProp: 'date',
              rules: [
                { required: true, message: '请输入日期' }
              ],
              ignoredRowsIndex: [0]
            },
            {
              columnProp: 'name',
              // 将 rules 配置为函数以动态设置 rules，函数自动接收两个参数(行数据, 行下标)，对于本示例，如果是第一行，校验规则为必输，如果是其它行，则校验规则改为长度最少为 2
              rules: (row, rowIndex) => {
                if (rowIndex === 0) return [{ required: true, message: '请输入姓名' }]
                else return [{ min: 2, message: '姓名长度至少是两个字符' }]
              }
            },
            {
              columnProp: 'address',
              rules: [
                { required: true, message: '请输入地址' },
                { max: 20, message: '地址最多是二十个字符' }
              ]
            }
          ]
        }
      },
      tableData: [{
        date: '',
        name: '',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李',
        address: '四川省武当山普陀区金沙江路 1517 弄 超出的字符',
      }, {
        date: '',
        name: '李',
        address: '四川省武当山普陀区金沙江路 1519 弄 超出的字符'
      }, {
        date: '2016-05-03',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1519 弄 超出的字符'
      }]
    }
  },
  methods: {
    saveEditThenCheckCurrentRow (columnProp, rowIndex) {
      this.$refs.table.restoreEditingSlot(columnProp, rowIndex)
      this.validateRow(rowIndex)
    },
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    },
    validateCell (rowIndex, columnProp) {
      this.$refs.table.validateCell(columnProp, rowIndex).then(checkRes => {
        console.log(`第 ${rowIndex + 1} 行 ${columnProp} 的检查结果:`, checkRes)
      })
    },
    validateRow (rowIndex) {
      this.$refs.table.validateRow(rowIndex).then(checkRes => {
        console.log(`第 ${rowIndex} 行的检查结果:`, checkRes)
      })
    },
    validateRows (rowIndexes) {
      this.$refs.table.validateRows(rowIndexes).then(checkRes => {
        console.log(`第 ${rowIndexes} 行的检查结果:`, checkRes)
      })
    },
    validateAll () {
      this.$refs.table.validateAll().then(checkRes => {
        console.log('所有数据检查结果:', checkRes)
      })
    },
    clearCellValidate (rowIndex, columnProp) {
      this.$refs.table.clearCellValidate(columnProp, rowIndex)
    },
    clearRowValidate (rowIndex) {
      this.$refs.table.clearRowValidate(rowIndex)
    },
    clearRowsValidate (rowIndexes) {
      this.$refs.table.clearRowsValidate(rowIndexes)
    },
    clearAllValidate () {
      this.$refs.table.clearAllValidate()
    },
    saveAllEditThenCheck () {
      this.$refs.table.restoreAllEditingSlot()
      this.validateAll()
    }
  }
}
</script>
```
:::
### 表格校验(忽略某些单元格或行)

提供回调函数, 便捷的控制单元格或行的校验忽略。

:::demo 使用 rowIgnoredFunc 函数直接控制一整行的校验忽略, 使用 ignoredRowsIndex 函数控制某些单元格的校验忽略。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      :columnOptions="columnOptions"
      ref="table"
      style="width: 100%;margin-bottom: 20px"
      @edit-disabled="cellEditDisabled"
      @switch-to-editing-slot="switchToEditingSlot"
      @restore-editing-slot="restoreEditingSlot">
      <df-table-column prop="date" label="日期" width="180">
        <div slot="editing" slot-scope="scope" style="display: flex">
          <df-input v-model="scope.row.date" style="width: 100px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
      <df-table-column prop="name" label="姓名" width="180">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.name" style="width: 100px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
      <df-table-column prop="address" label="地址">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.address" style="width: 200px" />
          <df-button type="text" @click="saveEditThenCheckCurrentRow(scope.column.property, scope.$index)">保存</df-button>
        </div>
      </df-table-column>
    </df-table>
    <df-button @click="validateCell(0, 'name')">检查第一行name的数据</df-button>
    <df-button @click="validateCell(2, 'name')">检查第三行name的数据</df-button>
    <df-button @click="validateRow(0)">检查第一行的数据</df-button>
    <df-button @click="validateRows([2, 3])">检查后两行的数据</df-button>
    <df-button @click="validateAll">检查表格的所有数据</df-button>
    <div style="height: 10px"></div>
    <df-button @click="clearCellValidate(0, 'name')">清除第一行name的检查</df-button>
    <df-button @click="clearCellValidate(2, 'name')">清除第三行name的检查</df-button>
    <df-button @click="clearRowValidate(0)">清除第一行的检查</df-button>
    <df-button @click="clearRowsValidate([2, 3])">清除后两行的检查</df-button>
    <df-button @click="clearAllValidate">清除表格的所有检查</df-button>
    <div style="height: 10px"></div>
    <df-button @click="saveAllEditThenCheck">保存所有编辑并检查结果</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [0]
            },
            {
              columnProp: 'name'
            },
            {
              columnProp: 'address'
            }
          ]
        },
        validateConfig: {
          needErrTips: true,
          // rowIgnoredFunc 函数可以直接控制一整行的校验忽略, 函数自动接收两个参数(行数据, 行下标)
          rowIgnoredFunc: (row, rowIndex) => {
            return row.ignoreRow
          },
          columnRules: [
            {
              columnProp: 'date',
              rules: [
                { required: true, message: '请输入日期' }
              ],
              ignoredRowsIndex: [0]
            },
            {
              columnProp: 'name',
              // 将 rules 配置为函数以动态设置 rules，函数自动接收两个参数(行数据, 行下标)，对于本示例，如果是第一行，校验规则为必输，如果是其它行，则校验规则改为长度最少为 2
              rules: (row, rowIndex) => {
                if (rowIndex === 0) return [{ required: true, message: '请输入姓名' }]
                else return [{ min: 2, message: '姓名长度至少是两个字符' }]
              }
            },
            {
              columnProp: 'address',
              rules: [
                { required: true, message: '请输入地址' },
                { max: 20, message: '地址最多是二十个字符' }
              ],
              // ignoredRowsIndex 可以写成函数, 来动态的判断某个单元格的校验忽略, 函数自动接收两个参数(行数据, 行下标)
              ignoredRowsIndex: (row, rowIndex) => {
                return row.ignoreAddressValidate
              }
            }
          ]
        }
      },
      tableData: [{
        date: '',
        name: '',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李',
        address: '四川省武当山普陀区金沙江路 1517 弄 超出的字符'
      }, {
        date: '',
        name: '李',
        address: '四川省武当山普陀区金沙江路 1519 弄 超出的字符',
        ignoreAddressValidate: true
      }, {
        date: '2016-05-03',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1519 弄 超出的字符',
        ignoreRow: true
      }]
    }
  },
  methods: {
    saveEditThenCheckCurrentRow (columnProp, rowIndex) {
      this.$refs.table.restoreEditingSlot(columnProp, rowIndex)
      this.validateRow(rowIndex)
    },
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    },
    validateCell (rowIndex, columnProp) {
      this.$refs.table.validateCell(columnProp, rowIndex).then(checkRes => {
        console.log(`第 ${rowIndex + 1} 行 ${columnProp} 的检查结果:`, checkRes)
      })
    },
    validateRow (rowIndex) {
      this.$refs.table.validateRow(rowIndex).then(checkRes => {
        console.log(`第 ${rowIndex} 行的检查结果:`, checkRes)
      })
    },
    validateRows (rowIndexes) {
      this.$refs.table.validateRows(rowIndexes).then(checkRes => {
        console.log(`第 ${rowIndexes} 行的检查结果:`, checkRes)
      })
    },
    validateAll () {
      this.$refs.table.validateAll().then(checkRes => {
        console.log('所有数据检查结果:', checkRes)
      })
    },
    clearCellValidate (rowIndex, columnProp) {
      this.$refs.table.clearCellValidate(columnProp, rowIndex)
    },
    clearRowValidate (rowIndex) {
      this.$refs.table.clearRowValidate(rowIndex)
    },
    clearRowsValidate (rowIndexes) {
      this.$refs.table.clearRowsValidate(rowIndexes)
    },
    clearAllValidate () {
      this.$refs.table.clearAllValidate()
    },
    saveAllEditThenCheck () {
      this.$refs.table.restoreAllEditingSlot()
      this.validateAll()
    }
  }
}
</script>
```
:::


### 插槽编辑键盘操作

通过监听输入组件的键盘操作，以实现编辑插槽的切换，各类型输入组件应监听事件见下表。注意，一般来讲键盘操作是需要结合表格检验的，即按下 enter 即将切换到下一单元格时，需要先检验当前单元格的内容是否正确，再进行一下步操作，可参考本示例。
| 组件 | 应监听的 enter 事件名称 | 触发时机 | 举例 |
|------|------|------|------|
| df-input | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |
| df-input-number | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |
| df-select  | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |
| df-page-select  | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |
| df-page-dynamic  | `enterKeyDown` | 输入框聚焦时，按下 enter 键，如果当前有 hoverIndex 或有选中的值，则直接触发，否则会先帮助选择第一个 option，然后再触发 |  |
| df-time-picker  | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |
| df-date-picker  | `enterKeyDown` | 输入框聚焦时，按下 enter 键触发 |  |

:::demo 第一步，监听 slots.editing 里输入框的 enter 事件，第二步，检验当前单元格内容是否符合规则，若不符合规则，需要给予提示，若符合规则，则调用 table 的 getNextEditableSlot 方法找到下一个可编辑的插槽位置，然后开启它的编辑。
```html
<template>
  <df-table
    :data="tableData"
    :columnOptions="columnOptions"
    style="width: 100%"
    ref="table"
    row-key="id"
    @edit-disabled="cellEditDisabled"
    @switch-to-editing-slot="switchToEditingSlot"
    @restore-editing-slot="restoreEditingSlot">
    <df-table-column
      type="index"
    />
    <df-table-column prop="date" label="日期" width="180">
      <div slot="editing" slot-scope="scope">
        <df-input :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.date" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" @blur="saveEdit(scope.column.property, scope.$index)" />
      </div>
    </df-table-column>
    <df-table-column prop="name" label="姓名" width="180">
      <div slot="editing" slot-scope="scope">
        <df-input :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.name" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" @blur="saveEdit(scope.column.property, scope.$index)" />
      </div>
    </df-table-column>
    <df-table-column prop="gender" label="性别" width="180">
      <div slot="editing" slot-scope="scope">
        <df-select :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.gender" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" @blur="saveEdit(scope.column.property, scope.$index)">
          <df-option value="男"></df-option>
          <df-option value="女"></df-option>
        </df-select>
      </div>
    </df-table-column>
    <df-table-column prop="address" label="地址">
      <div slot="editing" slot-scope="scope">
        <df-input :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.address" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" @blur="saveEdit(scope.column.property, scope.$index)" />
      </div>
    </df-table-column>
  </df-table>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [0]
            },
            'name',
            'gender',
            'address'
          ]
        },
        validateConfig: {
          needErrTips: true,
          columnRules: [
            {
              columnProp: 'date',
              rules: [
                { required: true, message: '请输入日期' }
              ]
            },
            {
              columnProp: 'name',
              rules: [
                { required: true, message: '请输入姓名' },
                { min: 2, message: '姓名长度至少是两个字符' }
              ]
            },
            {
              columnProp: 'gender',
              rules: [
                { required: true, message: '请选择性别' }
              ]
            },
            {
              columnProp: 'address',
              rules: [
                { required: true, message: '请输入地址' },
                { max: 20, message: '地址最多是二十个字符' }
              ]
            }
          ]
        }
      },
      tableData: [{
        id: '4',
        date: '2016-05-02',
        name: '李时珍',
        gender: '男',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }, {
        id: '5',
        date: '2016-05-04',
        name: '李时珍',
        gender: '女',
        address: '四川省武当山普陀区金沙江路 1517 弄'
      }, {
        id: '6',
        date: '2016-05-01',
        name: '',
        gender: '',
        address: '四川省武当山普陀区金沙江路 1519 弄'
      }, {
        id: '7',
        date: '2016-05-03',
        name: '李时珍',
        gender: '男',
        address: '四川省武当山普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    saveEdit (columnProp, rowIndex) {
      this.$refs.table.restoreEditingSlot(columnProp, rowIndex)
    },
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
      this.$nextTick(() => {
        this.$refs[`${columnProp}-${rowIndex}`].focus()
      })
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    },
    enterKeyDown (currentColumnProp, currentRowIndex) {
      console.log(`当前按下 enter 键的单元格是第 ${currentRowIndex + 1} 行的 ${currentColumnProp} 列`)
      this.$refs.table.validateCell(currentColumnProp, currentRowIndex)
        .then(res => {
          console.log('当前单元格校验结果', res)
          if (res.message) { // 校验不通过，应给与提示，不要自动切到下一单元格
            this.$message({
              message: res.message,
              type: 'warning'
            })
          } else { // 校验通过，自动切到下一单元格
            const {columnProp, rowIndex, isFirstEditableSlot} = this.$refs.table.getNextEditableSlot(currentColumnProp, currentRowIndex)
            console.log(`它下一个可编辑单元格是第 ${rowIndex + 1} 行的 ${columnProp} 列`)
            if (isFirstEditableSlot) { // isFirstEditableSlot 为 true，表示下一个可编辑插槽位置是整张表的第一个可编辑 slot，换句话说，现在已经到了最后一个可编辑单元格了
              this.$message({
                message: '已经到最后一个可编辑单元格了',
                type: 'warning'
              })
            } else {
              this.$refs.table.addEditingSlot(columnProp, rowIndex)
            }
          }
        })
    }
  }
}
</script>

```
:::


### 插槽编辑 + 键盘操作 + 单元格校验 + 行编辑

插槽编辑 + 键盘操作 + 单元格校验 + 行编辑的示例。

:::demo
```html
<template>
  <df-table
    :data="tableData"
    :columnOptions="columnOptions"
    style="width: 100%"
    ref="table"
    @edit-disabled="cellEditDisabled"
    @switch-to-editing-slot="switchToEditingSlot"
    @restore-editing-slot="restoreEditingSlot"
    @button-click="onButtonClick">
    <df-table-column prop="name" label="姓名" width="180">
      <div slot="editing" slot-scope="scope">
        <df-input :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.name" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" />
      </div>
    </df-table-column>
    <df-table-column prop="date" label="日期" width="180">
      <div slot="editing" slot-scope="scope">
        <df-date-picker
          type="date"
          placeholder="选择日期"
          :ref="`${scope.column.property}-${scope.$index}`"
          v-model="scope.row.date"
          @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)"
        />
      </div>
    </df-table-column>
    <df-table-column prop="gender" label="性别" width="180">
      <div slot="editing" slot-scope="scope">
        <df-select :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.gender" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)">
          <df-option value="男"></df-option>
          <df-option value="女"></df-option>
        </df-select>
      </div>
    </df-table-column>
    <df-table-column prop="address" label="地址">
      <div slot="editing" slot-scope="scope">
        <df-input :ref="`${scope.column.property}-${scope.$index}`" v-model="scope.row.address" @enterKeyDown="enterKeyDown(scope.column.property, scope.$index)" />
      </div>
    </df-table-column>
    <df-table-column
      width="150"
      type="buttons"
      button-type="text"
      :buttons="['新增', '编辑']"
    />
  </df-table>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        editConfig: {
          trigger: 'click',
          mode: 'slot',
          editableColumns: [
            'name',
            'date',
            'gender',
            'address'
          ]
        },
        validateConfig: {
          needErrTips: true,
          columnRules: [
            {
              columnProp: 'name',
              rules: [
                { required: true, message: '请输入姓名' },
                { min: 2, message: '姓名长度至少是两个字符' }
              ]
            },
            {
              columnProp: 'date',
              rules: [
                { required: true, message: '请输入日期' }
              ]
            },
            {
              columnProp: 'gender',
              rules: [
                { required: true, message: '请选择性别' }
              ]
            },
            {
              columnProp: 'address',
              rules: [
                { required: true, message: '请输入地址' },
                { max: 20, message: '地址最多是二十个字符' }
              ]
            }
          ]
        }
      },
      tableData: [{
        name: '李',
        date: '2016-05-02',
        gender: '',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    cellEditDisabled (column, rowIndex, row) {
      this.$message('此单元格禁止编辑！')
    },
    switchToEditingSlot (columnProp, rowIndex, row, triggerType) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列切换到了编辑插槽`)
      this.$refs.table.addRowEditingSlot(rowIndex) // 当某一单元格被切换到编辑状态时，开启器所在行的所有编辑
      this.$refs.table.restoreAllEditingSlot({excludeMode: 'row', excludeRowIndex: rowIndex}) // 然后关闭其他行的编辑
      triggerType === 'click' && this.$nextTick(() => {
        this.$refs[`${columnProp}-${rowIndex}`].focus() // 自动聚焦当前单元格(只有这个单元格是通过点击触发编辑时, 才应该聚焦)
      })
    },
    restoreEditingSlot (columnProp, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的 ${columnProp} 列从编辑插槽切回了原始渲染结构`)
    },
    enterKeyDown (currentColumnProp, currentRowIndex) {
      console.log(`当前按下 enter 键的单元格是第 ${currentRowIndex + 1} 行的 ${currentColumnProp} 列`)
      this.$refs.table.validateCell(currentColumnProp, currentRowIndex)
        .then(res => {
          console.log('当前单元格校验结果', res)
          if (res.message) { // 校验不通过，应给与提示，不要自动切到下一单元格
            this.$message({
              message: res.message,
              type: 'warning'
            })
          } else { // 校验通过，自动切到下一单元格
            const {columnProp, rowIndex, isFirstEditableSlot} = this.$refs.table.getNextEditableSlot(currentColumnProp, currentRowIndex)
            console.log(`它下一个可编辑单元格是第 ${rowIndex + 1} 行的 ${columnProp} 列`)
            if (isFirstEditableSlot) { // isFirstEditableSlot 为 true，表示下一个可编辑插槽位置是整张表的第一个可编辑 slot，换句话说，现在已经到了最后一个可编辑单元格了
              this.$message({ message: '当前是最后一个可编辑插槽了，所以自动新增一行' })
              this.add()
            } else {
              this.$refs.table.addEditingSlot(columnProp, rowIndex) // 这里调用一下添加编辑方法，主要是处理：当一行的最后一个 input 按下 enter 时，要保证能够开启到下一行
              this.$nextTick(() => {
                this.$refs[`${currentColumnProp}-${currentRowIndex}`] && this.$refs[`${currentColumnProp}-${currentRowIndex}`].blur() // focus 下一个 input 之前，先 blur 当前单元格input
                this.$refs[`${columnProp}-${rowIndex}`].focus()
              })
            }
          }
        })
    },
    onButtonClick (button, buttonIndex, row, rowIndex) {
      if (button === '新增') this.add()
      if (button === '编辑') this.$refs.table.addRowEditingSlot(rowIndex)
    },
    add () {
      this.tableData.push({
        date: '2016-05-02',
        name: '李时珍',
        gender: '男',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      })
      // 添加一行数据之后，找到添加的数据的行下标，也就是最后一行，开启这一行的编辑
      const addedRowIndex = this.tableData.length - 1
      this.$refs.table.addRowEditingSlot(addedRowIndex)
      this.$nextTick(() => {
        this.$refs[`name-${addedRowIndex}`].focus() // 开启新一行的编辑之后自动聚焦到新一行的第一个单元格
      })
    }
  }
}
</script>
```
:::

### 树形编辑表格

:::demo 支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

```html
<template>
  <div>
    <df-button @click="handleClick">获取树各层级rowKey</df-button>
    <df-table
      ref="table"
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      useTree
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :columnOptions="columnOptions"
    >
      <df-table-column
        type="index"
        :index="indexMethod"
      />
      <df-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
        <template slot="editing"  slot-scope="scope">
          <df-input v-model="scope.row.name" style="width: 100px" />
        </template>
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址">
      </df-table-column>
    </df-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columnOptions: {
          editConfig: {
            trigger: 'click',
            mode: 'slot',
            editableColumns: [
              {
                columnProp: 'name',
                disableRowsIndex: []
              }
            ]
          }
        },
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          id: 22,
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1517 弄'
        }, {
          id: 33,
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '李时珍',
              address: '四川省武当山普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '李时珍',
              address: '四川省武当山普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 44,
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleClick () {
        const level1 = this.$refs.table.getTreeRowKeysByLevel(1)
        const level2 = this.$refs.table.getTreeRowKeysByLevel(2)
        console.log('获取第一层id', level1)
        console.log('获取第二层id', level2)
        this.$set(this.columnOptions.editConfig.editableColumns[0], 'disableRowsIndex', level1)
        this.$nextTick(() => this.$refs.table.addAllEditingSlot(true))
      },
      indexMethod(index) {
        return index
      }
    }
  }
</script>
```
:::

### 表头插槽编辑

使用插槽来自己定义表头编辑的内容。

:::demo 表头编辑一般被用来跳转到此列的某一位置，编辑主要是由插槽来决定的，你需要定义好具名插槽`slots.headerEditing`里的内容，事件及方法参见下方文档。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      :column-options="columnOptions"
      style="width: 100%"
      height="300"
      ref="table">
      <df-table-column type="expand">
        <template slot-scope="props">
          <df-form label-position="left" inline class="demo-table-expand">
            <df-form-item label="编号">
              <span>{{ props.row.id }}</span>
            </df-form-item>
            <df-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </df-form-item>
            <df-form-item label="性别">
              <span>{{ props.row.gender }}</span>
            </df-form-item>
            <df-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </df-form-item>
          </df-form>
        </template>
      </df-table-column>
      <df-table-column prop="id" label="编号" width="180">
        <df-select slot="headerEditing" slot-scope="scope" v-model="valueId" placeholder="请选择" @change="onIdChange" @blur="restoreHeaderEditingSlot('id')">
          <df-option
            v-for="item in optionsId"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </df-option>
        </df-select>
      </df-table-column>
      <df-table-column prop="name" label="姓名" width="180">
        <df-input slot="headerEditing" slot-scope="scope" v-model="valueName" placeholder="输入行数并按下enter" @enterKeyDown="onNameEnterKeyDown" @blur="restoreHeaderEditingSlot('name')"></df-input>
      </df-table-column>
      <df-table-column prop="gender" label="性别" width="180" />
      <df-table-column prop="address" label="地址">
        <df-button slot="headerEditing" slot-scope="scope" @click="scrollToRowWithRowIndex(23)">跳转到第24行</df-button>
      </df-table-column>
    </df-table>
    <df-button @click="addHeaderEditingSlot('address')" style="margin: 8px">开启地址列的表头编辑</df-button>
    <df-button @click="restoreHeaderEditingSlot('address')" style="margin: 8px">关闭地址列的表头编辑</df-button>
    <df-button @click="addAllHeaderEditingSlot" style="margin: 8px">开启所有的表头编辑</df-button>
    <df-button @click="restoreAllHeaderEditingSlot" style="margin: 8px">关闭所有的表头编辑</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        headerEditConfig: {
          editableHeaders: ['id', 'name', 'address']
        }
      },
      tableData: new Array(40).fill().map((item, index) => ({
        id: `第 ${index + 1} 号`,
        name: `李时珍 ${index + 1} 号`,
        gender: '男',
        address: `四川省武当山普陀区金沙江路 ${index + 1} 弄`
      })),
      optionsId: [],
      valueId: 4,
      valueName: ''
    }
  },
  created () {
    this.optionsId = this.tableData.map((row, rowIndex) => {
      return {
        value: rowIndex,
        label: `跳转到${row.id}`
      }
    })
  },
  methods: {
    onIdChange (rowIndex) {
      this.scrollToRowWithRowIndex(rowIndex)
    },
    onNameEnterKeyDown () {
      let rowIndex = Number(this.valueName)
      if (this.valueName < 0)rowIndex = 0
      if (this.valueName > this.tableData.length) rowIndex = this.tableData.length
      this.scrollToRowWithRowIndex(rowIndex - 1)
    },
    scrollToRowWithRowIndex (rowIndex) {
      // 如果表格中含有展开行, 则使用 scrollToRowIndex 跳转之前, 需要先收起所有的展开行
      this.$refs.table.closeAllTree()
      this.$refs.table.scrollToRowIndex(rowIndex)
    },
    addHeaderEditingSlot (columnProp) {
      this.$refs.table.addHeaderEditingSlot(columnProp)
    },
    restoreHeaderEditingSlot (columnProp) {
      this.$refs.table.restoreHeaderEditingSlot(columnProp)
    },
    addAllHeaderEditingSlot () {
      this.$refs.table.addAllHeaderEditingSlot()
    },
    restoreAllHeaderEditingSlot () {
      this.$refs.table.restoreAllHeaderEditingSlot()
    }
  }
}
</script>
```
:::

### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| column-options | 列配置 | array | — | — |

### Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| edit-disabled  | 开启表格编辑时，想要编辑被禁用的单元格后触发（参数：禁用处的列信息、禁用处的行下标、禁用处的行信息） | newVal, rowIndex, row, column |
| switch-to-editing-slot  | 插槽情况下，某一单元格切换到了编辑插槽时触发（参数：切换处的列prop、切换处的行下标、切换处的行信息、触发方式(如果是点击触发的就是 click, 否则是 undefined)） | columnProp, rowIndex, row, triggerType |
| restore-editing-slot  | 插槽情况下，某一单元格从编辑插槽切回了原始渲染结构时触发（参数：切换处的列prop、切换处的行下标和切换处的行信息） | columnProp, rowIndex, row |
| switch-to-editing-header  | /*新增*/ 配置了表头筛选之后，某一表头切换到了筛选状态时触发（参数：切换处的列的prop） | columnProp |
| restore-editing-header  | /*新增*/ 配置了表头筛选之后，某一表头从筛选状态切回正常状态时触发（参数：切换处的列的prop） | columnProp |

### Table Methods
| 方法名 | 说明 | 传入参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| addEditingSlot | 用于开启某单元格的编辑插槽 | columnProp, rowIndex | - |
| restoreEditingSlot | 用于关闭某单元格的编辑插槽 | columnProp, rowIndex | - |
| addRowEditingSlot | 用于开启某行的编辑插槽 | rowIndex | - |
| restoreRowEditingSlot | 用于关闭某行的编辑插槽 | rowIndex | - |
| addAllEditingSlot | 开启所有的编辑插槽 | {excludeMode: 排除方式(row/column/cell/rowAndColumn), excludeColumnProp: 排除列prop, excludeRowIndex: 排除行下标} | - |
| restoreAllEditingSlot | 关闭所有的编辑插槽 | {excludeMode: 排除方式(row/column/cell/rowAndColumn), excludeColumnProp: 排除列prop, excludeRowIndex: 排除行下标} | - |
| validateCell | 检查某一单元格 | columnProp, rowIndex | promise.reslove 返回检查的结果，没有 reject |
| validateRow | 检查某一行 | rowIndex | promise.reslove 返回检查的结果，没有 reject |
| validateRows | 检查某些行 | rowIndexes | promise.reslove 返回检查的结果，没有 reject |
| validateAll | 检查表格的所有数据 | — | promise.reslove 返回检查的结果，没有 reject |
| clearCellValidate | 清除某一单元格 | columnProp, rowIndex | - |
| clearRowValidate | 清除某一行的检查 | rowIndex | - |
| clearRowsValidate | 清除某些行的检查  | rowIndexes | - |
| clearAllValidate | 清除表格的所有检查 | — | - |
| getNextEditableSlot | 寻找下一个可编辑单元格的位置（如果传入当前位置，则找当前位置的下一个，如果不传入当前位置，则找当前最后一个正在开启的编辑插槽的下一个，以上条件都不满足，则找所有可编辑插槽的第一个，如果仍然找不到，则返回空对象） | columnProp, rowIndex | {columnProp, rowIndex, isFirstEditableSlot(是否是第一个可编辑 slot)} |
| addHeaderEditingSlot | 用于开启某列的表头编辑插槽 | columnProp | - |
| restoreHeaderEditingSlot | 用于关闭某列的表头编辑插槽 | columnProp | - |
| addAllHeaderEditingSlot | 开启所有的表头编辑插槽，传入某一列的 prop，可以在开启时忽略此列 | columnProp | - |
| restoreAllHeaderEditingSlot | 关闭所有的表头编辑插槽，传入某一列的 prop，可以在关闭时忽略此列 | columnProp | - |

### Table-column Slot
| name | 说明 |
|------|--------|
| editing | 单元格的编辑插槽。 |

### columnOptions.editConfig 表格编辑 参数规则
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | 编辑触发方式 | string | hover(mode 为 slot 时不可用)/click/dblclick | — |
| mode | 编辑形式 | string | cell | cell/slot |
| unEditableColumns | 不可编辑列选项，这是一个快速反向配置编辑列的属性，放入不可编辑列的 prop，则表示除了这些列之外的其它列都需要编辑，如果不放任何元素，则表示所有列都可编辑。当此属性存在时，editableColumns 属性将会被忽略 | array | — | — |
| editableColumns | 编辑列选项 | array | — | — |
| item | /*代号*/ 这里用 item 表示 editableColumns 的每一项，可以直接放入 column 的 prop，也可以放入一个对象进行更详细的配置，参见下方的对象配置说明 | object/string | — | — |
| item > columnProp | 可编辑列的 prop | string | — | — |
| item > type (mode 为 slot 时不可用) | 可编辑列的输入类型 | string | input/inputNumber/select | input |
| item > disableRowsIndex | 可编辑列中禁止编辑的行的下标，如果你想禁用此列的某一行处的编辑功能，把行下标放进去即可 | array | — | — |
| item > attrs (mode 为 slot 时不可用) | 编辑时使用的输入组件的 attributes，可以自由配置除 size 之外的所有组件属性值 | object | — | — |
| item > options (mode 为 slot 时不可用) | 当输入类型是 select 时，通过此值配置 select 的 options | array | — | — |

### columnOptions.validateConfig 表格校验 参数规则
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| needErrTips | 是否需要错误提示 | boolean | — | false |
| columnRules | 检查列规则 | array | — | — |
| item | /*代号*/ 这里用 item 表示 columnRules 的每一项 | object | — | — |
| item > columnProp | 检查列的 prop | string | — | — |
| item > rules | 检查列的检查规则 | array/function(row, rowIndex) | — | — |
| item > ignoredRowsIndex | 检查列中忽略检查的行的下标，如果你想忽略此列的某一行处的检查功能，把行下标放进去即可 | array | — | — |

### columnOptions.headerEditConfig 表头筛选 参数规则
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| editableHeaders | 表示可筛选的列，将列的 prop 放进去即可，例如 ['date', 'name'] | array[string] | — | — |
