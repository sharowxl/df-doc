## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo 当`df-table`元素中注入`data`对象数组后，在`df-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
  <template>
    <df-table
      :data="tableData"
      style="width: 100%">
      <df-table-column
        prop="date"
        label="日期"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="180">
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址">
      </df-table-column>
    </df-table>
  </template>

  <script>
    export default {
      data() {
        return {
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
      }
    }
  </script>
```
:::


### 大数据表格

大数据表格展示用法。

:::demo 当`df-table`元素中注入`data`对象数组后，在`df-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
  <template>
    <df-table
      useVirtual
      :data="tableData"
      height='400px'
      style="width: 100%">
      <df-table-column
        type="index"
        width="80">
      </df-table-column>
      <df-table-column
        prop="date"
        label="日期"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="180">
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址">
      </df-table-column>
    </df-table>
  </template>

  <script>
    export default {
      data() {
        return {
          
          tableData: Array.from({length: 100}, () => ({
            date: '2016-05-02',
            name: '李时珍',
            address: '四川省武当山普陀区金沙江路 1518 弄'
          }))
        }
      }
    }
  </script>
```
:::

### 空数据提示

当表格没有数据时，可定制为空提示。

:::demo 使用`empty-text`属性可以自定义数据为空时的文本提示内容，也可以通过插槽`slot="empty"`来定制更加自定义的提示区域。
```html
<template>
  <div>
    <div class="demonstration">自定义文本提示</div>
    <df-table
      :data="[]"
      style="width: 100%"
      empty-text="这里没有数据了">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" width="1800" />
    </df-table>
    <div class="demonstration">需要图片提示</div>
    <df-table
      :data="[]"
      style="width: 100%"
      :no-empty-img="false">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" width="1800" />
    </df-table>
    <div class="demonstration">自定义提示区域</div>
    <df-table
      :data="[]"
      style="width: 100%">
      <template slot="empty">
        <div class="custom-empty-block">真的没有数据了</div>
      </template>
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" width="1800" />
    </df-table>
  </div>
</template>

```
:::
### 列显隐

切换表格某一列的显示和隐藏。

:::demo 设置`needHideColumns`属性即可开启列显隐功能，配置`default-hidden-columns`以设置默认隐藏的列，此属性是一个数组，元素为列对应的`prop`属性，当某一列的显隐发现变化时，`df-table`将外派事件 `hidden-status-change`，携带一个`Object`类型参数，包括了变化的信息。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      need-hide-columns
      :need-toggle-hidden-button="needToggleHiddenButton"
      :default-hidden-columns="defaultHiddenColumns"
      @hidden-status-change="hiddenStatusChange"
      ref="table"
      style="width: 100%; margin-bottom: 20px">
      <df-table-column prop="date" label="日期" width="150" />
      <df-table-column prop="name" label="姓名" width="150" />
      <df-table-column prop="gender" label="性别" width="150" />
      <df-table-column prop="address" label="地址" />
    </df-table>
    <df-button @click="showDate">显示日期列</df-button>
    <df-button @click="hideDate">隐藏日期列</df-button>
    <df-button @click="toggleName">切换姓名列显隐</df-button>
    <df-button @click="toggleButton">切换控制按钮显隐</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      needToggleHiddenButton: false,
      defaultHiddenColumns: ['date'],
      tableData: [
        {
          date: '2016-05-03',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '李时珍',
          gender: '女',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '李时珍',
          gender: '男',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    hiddenStatusChange (hiddenStatus) {
      console.log(hiddenStatus)
    },
    showDate () {
      this.$refs.table.setColumnShowStatus('date', true)
    },
    hideDate () {
      this.$refs.table.setColumnShowStatus('date', false)
    },
    toggleName () {
      this.$refs.table.toggleColumnShowStatus('name')
    },
    toggleButton () {
      this.needToggleHiddenButton = !this.needToggleHiddenButton
    }
  }
}
</script>

```
:::

### 按钮组操作列

一般用于最后一列的按钮组操作。

:::demo 手动添加一个`df-table-column`，设`type`属性为`buttons`即可；传入`button-type`按钮类型为`text`或`icon`，再传入按钮组数组，使用 text 时，传入文字，使用 icon 时，传入图标的类型，按钮组可以根据不同情况传入不同的按钮，具体参考第二个示例；当某一按钮被点击时，将会派出事件`button-click`，携带按钮的详细信息。支持传入`hidden-buttons`、`loading-buttons`或`disabled-buttons`设置某些按钮的隐藏、禁用或加载，需要注意的是`hidden-buttons`、`loading-buttons`或`disabled-buttons`必须通过 Vue 指定的 [数组更新检测](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B) 方法来改变值，否则将不能监听其变化。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px"
      @button-click='buttonClick'>
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        width='200'
        type="buttons"
        button-type='text'
        :buttons='["删除", "创建", "开单"]'
        :hidden-buttons='hiddenButtons'
      />
    </df-table>
    <df-button @click='hideFirstRowFirstButtons'>隐藏第一行第一个按钮</df-button>
    <df-button @click='showFirstRowFirstButtons'>显示第一行第一个按钮</df-button>
    <df-table
      :data="tableData"
      style="width: 100%;margin: 20px 0"
      @button-click='buttonClick'>
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        width='200'
        type="buttons"
        button-type='text'
        :set-buttons='setButtons'
        :loading-buttons='loadingButtons'
      />
    </df-table>
    <df-button @click='loadingFirstRowButtons'>设置第一行的按钮组为 loading</df-button>
    <df-button @click='unLoadingAllButtons'>清除所有按钮的 loading</df-button>
    <df-table
      :data="tableData"
      style="width: 100%;margin: 20px 0"
      @button-click='buttonClick'>
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        width='200'
        type="buttons"
        button-type='icon'
        :buttons='["add-square", "reduce-square", "content"]'
        :disabled-buttons='disabledButtons'
      />
    </df-table>
    <df-button @click='disableFirstRowFirstButtons'>设置第一行第一个按钮为 disabled</df-button>
    <df-button @click='enableFirstRowFirstButtons'>清除第一行第一个按钮的 disabled</df-button>
    <div style="margin-top: 20px" class='demonstration'>文字类型按钮组的按钮展示数量有上限，默认展示 2 个，但是可以通过属性 display-buttons-length 配置，超出部分使用弹出方式展示，弹出的按钮支持属性 hide-on-click 配置</div>
    <df-table
      :data="tableData"
      style="width: 100%;margin-top: 20px"
      @button-click='buttonClick'
      border>
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        width='200'
        type="buttons"
        button-type='text'
        :display-buttons-length='3'
        :hide-on-click='false'
        :buttons='["删除", "创建", "开单", "编辑", "查看", "更新"]'
      />
    </df-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      }],
      hiddenButtons: [],
      loadingButtons: [],
      disabledButtons: [{buttonIndex: 2, rowIndex: 0}]
    }
  },
  methods: {
    setButtons (row, rowIndex) {
      if (rowIndex === 1) return ['删除', '创建', '开单']
      else return ['编辑', '查看', '更新']
    },
    buttonClick (button, buttonIndex, row, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的按钮组中的第 ${buttonIndex + 1} 个按钮被点击了，这个按钮名称是 ${button}，这一行的信息是`, row)
    },
    hideFirstRowFirstButtons () {
      this.hiddenButtons.push({buttonIndex: 0, rowIndex: 0})
    },
    showFirstRowFirstButtons () {
      const index = this.hiddenButtons.findIndex(hiddenButton => hiddenButton.buttonIndex === 0 && hiddenButton.rowIndex === 0)
      this.hiddenButtons.splice(index, 1)
    },
    loadingFirstRowButtons () {
      this.loadingButtons.push({buttonIndex: 0, rowIndex: 0}, {buttonIndex: 1, rowIndex: 0}, {buttonIndex: 2, rowIndex: 0})
    },
    unLoadingAllButtons () {
      this.loadingButtons.splice(0, this.loadingButtons.length)
    },
    disableFirstRowFirstButtons () {
      this.disabledButtons.push({buttonIndex: 0, rowIndex: 0})
    },
    enableFirstRowFirstButtons () {
      const index = this.disabledButtons.findIndex(disabledButton => disabledButton.buttonIndex === 0 && disabledButton.rowIndex === 0)
      this.disabledButtons.splice(index, 1)
    }
  }
}
</script>
```
:::
### 行更多操作（弹出式）

弹起行的更多操作框。

:::demo 手动添加一个`df-table-column`，设`type`属性为`operation`即可；需要传入`operations`操作项，操作组可以根据不同情况传入不同的操作，具体参考第二个示例；当某一操作被触发时，将会派出事件`operation-click`，携带操作的详细信息。支持传入`hidden-operations`、`loading-operations`或`disabled-operations`设置某些按钮的隐藏、禁用或加载，需要注意的是`hidden-operations`、`loading-operations`或`disabled-operations`必须通过 Vue 指定的 [数组更新检测](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B) 方法来改变值，否则将不能监听其变化。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px"
      @operation-click="operationClick">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        type='operation'
        :operations='["删除", "创建", "开单"]'
        width='55'
        :hidden-operations='hiddenOperations'
      ></df-table-column>
    </df-table>
    <df-button @click.stop='hideFirstRowFirstOperation'>隐藏第一行第一个操作</df-button>
    <df-button @click.stop='showFirstRowFirstOperation'>显示第一行第一个操作</df-button>
    <df-table
      :data="tableData"
      style="width: 100%;margin: 20px 0"
      @operation-click="operationClick">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        type='operation'
        :set-operations='setOperations'
        width='55'
        :loading-operations='loadingOperations'
      ></df-table-column>
    </df-table>
    <df-button @click.stop='loadingFirstRowOperations'>设置第一行的操作组为 loading</df-button>
    <df-button @click.stop='unLoadingAllOperations'>清除所有操作的 loading</df-button>
    <df-table
      :data="tableData"
      style="width: 100%;margin: 20px 0"
      @operation-click="operationClick">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="address" label="地址" />
      <df-table-column
        type='operation'
        :operations='["删除", "创建", "开单"]'
        width='55'
        :disabled-operations='disabledOperations'
      ></df-table-column>
    </df-table>
    <df-button @click.stop='disableFirstRowFirstOperation'>设置第一行第一个操作为 disabled</df-button>
    <df-button @click.stop='enableFirstRowFirstOperation'>清除第一行第一个操作的 disabled</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      }],
      hiddenOperations: [],
      loadingOperations: [],
      disabledOperations: [{operationIndex: 2, rowIndex: 0}]
    }
  },
  methods: {
    setOperations (row, rowIndex) {
      if (rowIndex === 1) return ['删除', '创建', '开单']
      else return ['编辑', '查看', '更新']
    },
    operationClick (operation, operationIndex, row, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的弹出操作组中的第 ${operationIndex + 1} 个操作被点击了，这个操作名称是 ${operation}，这一行的信息是`, row)
    },
    hideFirstRowFirstOperation () {
      this.hiddenOperations.push({operationIndex: 0, rowIndex: 0})
    },
    showFirstRowFirstOperation () {
      const index = this.hiddenOperations.findIndex(hiddenOperation => hiddenOperation.operationIndex === 0 && hiddenOperation.rowIndex === 0)
      this.hiddenOperations.splice(index, 1)
    },
    loadingFirstRowOperations () {
      this.loadingOperations.push({operationIndex: 0, rowIndex: 0}, {operationIndex: 1, rowIndex: 0}, {operationIndex: 2, rowIndex: 0})
    },
    unLoadingAllOperations () {
      this.loadingOperations.splice(0, this.loadingOperations.length)
    },
    disableFirstRowFirstOperation () {
      this.disabledOperations.push({operationIndex: 0, rowIndex: 0})
    },
    enableFirstRowFirstOperation () {
      const index = this.disabledOperations.findIndex(disabledOperation => disabledOperation.operationIndex === 0 && disabledOperation.rowIndex === 0)
      this.disabledOperations.splice(index, 1)
    }
  }
}
</script>


```
:::

### 带按钮的表格


:::demo 因为table表格的 `宽度` 是自适应的,所以若要插入按钮,请使用小号的按钮,或者文字按钮，用法参考 demo。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </df-table-column>
    <df-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </df-table-column>
    <df-table-column label="操作">
      <template slot-scope="scope">
        <df-button @click="handleClick(scope.row)" type="text" size="small">查看</df-button>
        <df-button type="text" size="small"@click="handleDelete">删除</df-button>
      </template>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
      handleClick(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
:::

### 表格大小

Table 组件提供了三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
```html
<template>
  <div>
    <df-radio-group v-model="labelSize" size="small">
      <df-radio-button label="medium"></df-radio-button>
      <df-radio-button label="small"></df-radio-button>
      <df-radio-button label="mini"></df-radio-button>
    </df-radio-group>
    <div style="margin: 20px;"></div>
    <df-table :size="labelSize" :data="tableData" style="width: 100%">
      <df-table-column
        prop="date"
        label="日期"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="180">
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
        labelSize: 'small',
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
    }
  }
</script>
```
:::

### 取消斑马纹表格

为了更容易区分出不同行的数据，表格斑马线是默认启用的，但是可以通过配置来取消使用。

:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`true`，设置为`false`以取消使用。
```html
<template>
  <df-table
    :data="tableData"
    :stripe="false"
    style="width: 100%">
    <df-table-column
      prop="date"
      label="日期"
      width="180">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="180">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
```
:::

### 不带边框表格

:::demo 默认情况下，Table 组件是具有竖直方向的边框的，如果不需要，可以使用`border`属性，它接受一个`Boolean`，设置为`false`即可启用。
```html
<template>
  <df-table
    :data="tableData"
    :border="false"
    style="width: 100%">
    <df-table-column
      prop="date"
      label="日期"
      width="180">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="180">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
```
:::

### 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

:::demo 可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态，注意这种情况下需要取消表格的斑马线配置，否则斑马线将会覆盖表现效果。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :stripe="false">
    <df-table-column
      prop="date"
      label="日期"
      width="180">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="180">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
  </df-table>
</template>

<style>
  .df-table .warning-row {
    background: oldlace;
  }

  .df-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```
:::

### 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要在`df-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。
```html
<template>
  <df-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <df-table-column
      prop="date"
      label="日期"
      width="180">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="180">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```
:::

### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。
```html
<template>
  <df-table
    :data="tableData"
    border
    style="width: 100%">
    <df-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="120">
    </df-table-column>
    <df-table-column
      prop="province"
      label="省份"
      width="120">
    </df-table-column>
    <df-table-column
      prop="city"
      label="市区"
      width="120">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址"
      width="300">
    </df-table-column>
    <df-table-column
      prop="zip"
      label="邮编"
      width="120">
    </df-table-column>
    <df-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <df-button @click="handleClick(scope.row)" type="text" size="small">查看</df-button>
        <df-button type="text" size="small">编辑</df-button>
      </template>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::

### 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%"
    height="250">
    <df-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="120">
    </df-table-column>
    <df-table-column
      prop="province"
      label="省份"
      width="120">
    </df-table-column>
    <df-table-column
      prop="city"
      label="市区"
      width="120">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
    <df-table-column
      prop="zip"
      label="邮编"
      width="120">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

:::demo 通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%"
    max-height="250">
    <df-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="120">
    </df-table-column>
    <df-table-column
      prop="province"
      label="省份"
      width="120">
    </df-table-column>
    <df-table-column
      prop="city"
      label="市区"
      width="120">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址"
      width="300">
    </df-table-column>
    <df-table-column
      prop="zip"
      label="邮编"
      width="120">
    </df-table-column>
    <df-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <df-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </df-button>
      </template>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 只需要在 df-table-column 里面嵌套 df-table-column，就可以实现多级表头。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column
      prop="date"
      label="日期"
      width="150">
    </df-table-column>
    <df-table-column label="配送信息">
      <df-table-column
        prop="name"
        label="姓名"
        width="120">
      </df-table-column>
      <df-table-column label="地址">
        <df-table-column
          prop="province"
          label="省份"
          width="120">
        </df-table-column>
        <df-table-column
          prop="city"
          label="市区"
          width="120">
        </df-table-column>
        <df-table-column
          prop="address"
          label="地址"
          width="300">
        </df-table-column>
        <df-table-column
          prop="zip"
          label="邮编"
          width="120">
        </df-table-column>
      </df-table-column>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::

### 单选

选择单行数据时使用色块表示。

:::demo Table 组件提供了单选的支持，只需要配置`highlight-current-row`属性即可实现单选。之后由`current-change`事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。如果需要显示索引，可以增加一列`df-table-column`，设置`type`属性为`index`即可显示从 1 开始的索引号。
```html
<template>
  <div>
    <df-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <df-table-column
        type="index"
        width="50">
      </df-table-column>
      <df-table-column
        property="date"
        label="日期"
        width="120">
      </df-table-column>
      <df-table-column
        property="name"
        label="姓名"
        width="120">
      </df-table-column>
      <df-table-column
        property="address"
        label="地址">
      </df-table-column>
    </df-table>
    <div style="margin-top: 20px">
      <df-button @click="setCurrent(tableData[1])">选中第二行</df-button>
      <df-button @click="setCurrent()">取消选择</df-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>
```
:::

### 多选

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单: 手动添加一个`df-table-column`，设`type`属性为`selection`即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用`show-overflow-tooltip`属性，它接受一个`Boolean`，为`true`时多余的内容会在 hover 时以 tooltip 的形式显示出来。
```html
<template>
  <div>
    <df-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <df-table-column
        type="selection"
        width="55">
      </df-table-column>
      <df-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="120">
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </df-table-column>
    </df-table>
    <div style="margin-top: 20px">
      <df-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</df-button>
      <df-button @click="toggleSelection()">取消选择</df-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```
:::
### 单列多选

选择单列数据时使用 Checkbox。

:::demo 传入`columnOptions`，配置`multipleConfig`以启用表格单列多选。当某一列的任一项的选中状态发生变化时，会派出事件 `item-checked-changed`，携带四个参数，分别是变化处的列的prop、变化处的行的下标、变化后的值和变化处的行信息。
```html
<template>
  <div>
    <df-table
      ref="multipleTable"
      :data="tableData"
      :columnOptions="columnOptions"
      @item-checked-changed="itemCheckedChanged"
      style="width: 100%">
      <df-table-column prop="date" label="日期" width="180" />
      <df-table-column prop="name" label="姓名" width="180" />
      <df-table-column prop="age" label="年龄" width="180" />
      <df-table-column prop="address" label="地址" />
    </df-table>
    <div style="margin-top: 20px">
      <df-button @click="getCheckedItems('date')">获取日期列已选择项</df-button>
      <df-button @click="getCheckedItems('name')">获取姓名列已选择项</df-button>
      <df-button @click="getCheckedItems('address')">获取地址列已选择项</df-button>
      <br><br>
      <df-button @click="setItemChecked('date', tableData[1])">选择日期列的第二项</df-button>
      <df-button @click="setAllItemsChecked('name')">选择姓名列的所有项</df-button>
      <df-button @click="removeAllItemsChecked('address')">取消选择地址列的所有项</df-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnOptions: {
        multipleConfig: {
          multipleColumns: [
            {
              columnProp: 'date',
              disableRowsIndex: [2]
            },
            'name',
            'age',
            {
              columnProp: 'address'
            }
          ]
        }
      },
      tableData: [
        {
          date: '2016-05-01',
          name: '李时珍',
          age: '20岁',
          address: '四川省武当山普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-02',
          name: '李时珍',
          age: '12岁',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '李时珍',
          age: '34岁',
          address: '四川省武当山普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '李时珍',
          age: '27岁',
          address: '四川省武当山普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods: {
    itemCheckedChanged (columnProp, index, value, rowData) {
      console.log(`${columnProp} 列的第 ${index + 1} 项的 checkbox 选中状态切换到了 ${value}, 切换处的行数据是`, rowData)
    },
    getCheckedItems (columnProp) {
      console.log(this.$refs.multipleTable.getCheckedItems(columnProp))
    },
    setItemChecked (columnProp, row) {
      this.$refs.multipleTable.setItemChecked(columnProp, row, true)
    },
    setAllItemsChecked (columnProp) {
      this.$refs.multipleTable.setAllItemsChecked(columnProp)
    },
    removeAllItemsChecked (columnProp) {
      this.$refs.multipleTable.removeAllItemsChecked(columnProp)
    }
  }
}
</script>
```
:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo 在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 Table 的`default-sort`属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 Table 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
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
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
```
:::

### 筛选

对表格进行筛选，可快速查找到自己想看的数据。

:::demo 在列中设置`filters` `filter-method`属性即可开启该列的筛选，filters 是一个数组，`filter-method`是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。也可以通过配置属性`use-input-filter`来启用 input 框模式的筛选，参见下面`地址`列的筛选示例。
```html
<template>
  <div>
    <df-button @click="resetDateFilter">清除日期过滤器</df-button>
    <df-button @click="clearFilter">清除所有过滤器</df-button>
    <df-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <df-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="180">
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址"
        :filter-method="filterAddress"
        use-input-filter
        >
      </df-table-column>
      <df-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <df-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</df-tag>
        </template>
      </df-table-column>
    </df-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 2 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 3 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 4 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      resetDateFilter () {
        this.$refs.filterTable.clearFilter('date')
      },
      clearFilter () {
        this.$refs.filterTable.clearFilter()
      },
      filterTag (value, row) {
        return row.tag === value
      },
      filterAddress (value, row, column) {
        const property = column.property
        return row[property].includes(value)
      },
      filterHandler (value, row, column) {
        const property = column.property
        return row[property] === value
      }
    }
  }
</script>
```
:::

### 自定义列模板

自定义列的显示内容，可组合其他组件使用。
:::demo 通过 `Scoped slot` 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="df-icon-time-c-o"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </df-table-column>
    <df-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <df-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <df-tag size="medium">{{ scope.row.name }}</df-tag>
          </div>
        </df-popover>
      </template>
    </df-table-column>
    <df-table-column label="操作">
      <template slot-scope="scope">
        <df-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</df-button>
        <df-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</df-button>
      </template>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
:::demo 通过设置 type="expand" 和 `Scoped slot` 可以开启展开行功能，`df-table-column` 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 `Scoped slot` 相同。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column type="expand">
      <template slot-scope="props">
        <df-form label-position="left" inline class="demo-table-expand">
          <df-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </df-form-item>
          <df-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </df-form-item>
          <df-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </df-form-item>
          <df-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </df-form-item>
          <df-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </df-form-item>
          <df-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </df-form-item>
          <df-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </df-form-item>
        </df-form>
      </template>
    </df-table-column>
    <df-table-column
      label="商品 ID"
      prop="id">
    </df-table-column>
    <df-table-column
      label="商品名称"
      prop="name">
    </df-table-column>
    <df-table-column
      label="描述"
      prop="desc">
    </df-table-column>
  </df-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .df-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '李时珍夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '李时珍夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '李时珍夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '李时珍夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>
```
:::

### 展开行(隐藏某些展开图标)

通过`hide-expand-icon`回调函数控制某些展开功能的显隐。
:::demo 通过设置 expand column 的`hide-expand-icon`属性, 来控制某些行的展开图标隐藏, 这个属性是一个函数, 自带三个参数, 行数据, 列数据和行下标, 通过判断这些参数并最终返回`true`来控制某些行的展开图标隐藏。
```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column type="expand" :hide-expand-icon="hideExpandIcon">
      <template slot-scope="props">
        <df-form label-position="left" inline class="demo-table-expand">
          <df-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </df-form-item>
          <df-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </df-form-item>
          <df-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </df-form-item>
          <df-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </df-form-item>
          <df-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </df-form-item>
          <df-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </df-form-item>
          <df-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </df-form-item>
        </df-form>
      </template>
    </df-table-column>
    <df-table-column
      label="商品 ID"
      prop="id">
    </df-table-column>
    <df-table-column
      label="商品名称"
      prop="name">
    </df-table-column>
    <df-table-column
      label="描述"
      prop="desc">
    </df-table-column>
  </df-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .df-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
export default {
  data () {
    return {
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '李时珍夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '李时珍夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '李时珍夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '李时珍夫妻店',
        shopId: '10333'
      }]
    }
  },
  methods: {
    hideExpandIcon (row, column, rowIndex) {
      if (rowIndex === 2) return true
    }
  }
}
</script>
```
:::

### 树形数据与懒加载

:::demo 支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

```html
<template>
  <div>
    <df-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      use-tree
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
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
      </df-table-column>
      <df-table-column
        prop="address"
        label="地址">
      </df-table-column>
    </df-table>

    <df-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      use-tree
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <df-table-column
        prop="date"
        label="日期"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名"
        width="180">
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
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1517 弄'
        }, {
          id: 3,
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
          id: 4,
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '李时珍',
          address: '四川省武当山普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '李时珍',
              address: '四川省武当山普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '李时珍',
              address: '四川省武当山普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>
```
:::

### 自定义表头

表头支持自定义。

:::demo 通过设置 [Scoped slot](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD) 来自定义表头。
```html
<template>
  <df-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <df-table-column
      label="Date"
      prop="date">
    </df-table-column>
    <df-table-column
      label="Name"
      prop="name">
    </df-table-column>
    <df-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <df-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <df-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</df-button>
        <df-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</df-button>
      </template>
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
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
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
```
:::

### 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。
:::demo 将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。你也可以使用自定义合计行插槽，来定制合计行的要展示的内容，具体可以参考本例中的第三个表格。
```html
<template>
  <div>
    <df-table
      :data="tableData"
      border
      show-summary
      style="width: 100%">
      <df-table-column
        prop="id"
        label="ID"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名">
      </df-table-column>
      <df-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </df-table-column>
      <df-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </df-table-column>
      <df-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </df-table-column>
    </df-table>

    <df-table
      :data="tableData"
      border
      height="200"
      :summary-method="getSummaries"
      show-summary
      style="width: 100%; margin-top: 20px">
      <df-table-column
        prop="id"
        label="ID"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名">
      </df-table-column>
      <df-table-column
        prop="amount1"
        label="数值 1（元）">
      </df-table-column>
      <df-table-column
        prop="amount2"
        label="数值 2（元）">
      </df-table-column>
      <df-table-column
        prop="amount3"
        label="数值 3（元）">
      </df-table-column>
    </df-table>

    <df-table
      :data="tableData"
      border
      show-summary
      style="width: 100%; margin-top: 20px">
      <df-table-column
        prop="id"
        label="ID"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名">
      </df-table-column>
      <df-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </df-table-column>
      <df-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </df-table-column>
      <df-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </df-table-column>
      <div slot="customSummary" class="custom-summary">自定义求和（在这里进行任何布局）</div>
    </df-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '李时珍',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '李时珍',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '李时珍',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '李时珍',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '李时珍',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
</script>
```
:::

### 合并行或列

多行或多列共用一个数据时，可以合并行或列。
:::demo 通过给`table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

```html
<template>
  <div>
    <df-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <df-table-column
        prop="id"
        label="ID"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名">
      </df-table-column>
      <df-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </df-table-column>
      <df-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </df-table-column>
      <df-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </df-table-column>
    </df-table>

    <df-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <df-table-column
        prop="id"
        label="ID"
        width="180">
      </df-table-column>
      <df-table-column
        prop="name"
        label="姓名">
      </df-table-column>
      <df-table-column
        prop="amount1"
        label="数值 1（元）">
      </df-table-column>
      <df-table-column
        prop="amount2"
        label="数值 2（元）">
      </df-table-column>
      <df-table-column
        prop="amount3"
        label="数值 3（元）">
      </df-table-column>
    </df-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '李时珍',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '李时珍',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '李时珍',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '李时珍',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '李时珍',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
</script>
```
:::

### 自定义索引

自定义 `type=index` 列的行号。
:::demo 通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 `0` 开始）作为参数，返回值将作为索引展示。

```html
<template>
  <df-table
    :data="tableData"
    style="width: 100%">
    <df-table-column
      type="index"
      :index="indexMethod">
    </df-table-column>
    <df-table-column
      prop="date"
      label="日期"
      width="180">
    </df-table-column>
    <df-table-column
      prop="name"
      label="姓名"
      width="180">
    </df-table-column>
    <df-table-column
      prop="address"
      label="地址">
    </df-table-column>
  </df-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '李时珍',
          province: '上海',
          city: '普陀区',
          address: '四川省武当山普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>
```
:::

### 双列表格(固定高度)

使用两个表格拼接成一个表格, 应对特殊业务需求, 一般来讲左边表格负责奇数行, 右边表格负责偶数行, 需要兼顾好左右表格之间的关系, 且某一个表格滚动时, 另一个表格也需要同步滚动同样的距离。

:::demo 对于固定高度的需求, 外壳需要设定一个高度css样式, 内层的`table`需要设置属性`height`为`100%`, 同时, 需求一般会要求只能显示一个滚动条, 所以我们需要隐藏左边表格的滚动条, 左边的表格设定属性`hide-scroll-bar`即可。另外, 当两侧表格高度不一致时, 需求一般要求补齐缺少的行高, 所以右侧的表格需要设定属性`supplement-row-height`, 生效情况是右边的表格数据少于左边的表格数据时。

```html
<template>
  <div style="display: flex; height: 200px">
    <!-- 左侧表格 -->
    <df-table
      :data="leftTableData"
      hide-scroll-bar
      style="width: 50%"
      :column-options="columnOptions"
      @switch-to-editing-slot="leftSwitchToEditingSlot"
      border
      @button-click="leftButtonClick"
      height="100%"
      @table-body-scroll="leftTableBodyScroll"
      ref="leftTable">
      <df-table-column
        label="序号"
        prop="index"
        width="50">
      </df-table-column>
      <df-table-column
        prop="yaoPinMc"
        label="药品名称"
        width="80">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.yaoPinMc" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="jiLiang"
        label="剂量"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.jiLiang" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="danWei"
        label="单位"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.danWei" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="biaoZhunJia"
        label="标准价"
        width="70">
      </df-table-column>
      <df-table-column
        prop="yiBaoDengJi"
        label="医保等级">
      </df-table-column>
      <df-table-column
        width="80"
        type="buttons"
        button-type="icon"
        :buttons='["remove-circle", "add-circle", "down-circle"]'>
      </df-table-column>
    </df-table>
    <!-- 右侧表格 -->
    <df-table
      :data="rightTableData"
      :supplement-row-height="rightTableData.length < leftTableData.length"
      style="width: 50%"
      :column-options="columnOptions"
      @switch-to-editing-slot="rightSwitchToEditingSlot"
      border
      @button-click="rightButtonClick"
      height="100%"
      @table-body-scroll="rightTableBodyScroll"
      ref="rightTable">
      <df-table-column
        label="序号"
        prop="index"
        width="50">
      </df-table-column>
      <df-table-column
        prop="yaoPinMc"
        label="药品名称"
        width="80">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.yaoPinMc" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="jiLiang"
        label="剂量"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.jiLiang" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="danWei"
        label="单位"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.danWei" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="biaoZhunJia"
        label="标准价"
        width="70">
      </df-table-column>
      <df-table-column
        prop="yiBaoDengJi"
        label="医保等级">
      </df-table-column>
      <df-table-column
        width="80"
        type="buttons"
        button-type="icon"
        :buttons='["remove-circle", "add-circle", "down-circle"]'>
      </df-table-column>
    </df-table>
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
            'yaoPinMc',
            'jiLiang',
            'danWei'
          ]
        }
      },
      tableData: new Array(10).fill().map((row, rowIndex) => ({
        yaoPinMc: `人参${rowIndex + 1}`,
        jiLiang: 1,
        danWei: 'g',
        biaoZhunJia: '0.2011',
        shuLiang: 0,
        yiBaoDengJi: '二级'
      }))
    }
  },
  computed: {
    leftTableData () {
      return this.tableData
        .filter((row, rowIndex) => rowIndex % 2 === 0)
        .map((row, rowIndex) => {
          return {
            index: rowIndex * 2 + 1,
            ...row
          }
        })
    },
    rightTableData () {
      return this.tableData.filter((row, rowIndex) => rowIndex % 2 === 1)
        .map((row, rowIndex) => {
          return {
            index: rowIndex * 2 + 2,
            ...row
          }
        })
    }
  },
  methods: {
    leftButtonClick (button, buttonIndex, row, rowIndex) {
      this.buttonClick(button, rowIndex * 2)
    },
    rightButtonClick (button, buttonIndex, row, rowIndex) {
      this.buttonClick(button, rowIndex * 2 + 1)
    },
    buttonClick (button, rowIndex) {
      switch (button) {
        case 'remove-circle':
          this.tableData.splice(rowIndex, 1)
          break
        case 'add-circle':
          this.tableData.push({
            yaoPinMc: '',
            jiLiang: 1,
            danWei: 'g',
            biaoZhunJia: '0.2011',
            shuLiang: 0,
            yiBaoDengJi: '二级'
          })
          // 添加一行数据之后，找到添加的数据的行下标，也就是最后一行，开启这一行的编辑
          if (this.tableData.length % 2 === 0) {
            const addedRowIndex = (this.tableData.length - 2) / 2
            this.$refs.rightTable.addRowEditingSlot(addedRowIndex)
            this.$nextTick(() => {
              this.$refs[`right-yaoPinMc-${addedRowIndex}`].focus() // 开启新一行的编辑之后自动聚焦到新一行的第一个单元格
            })
          } else {
            const addedRowIndex = (this.tableData.length - 1) / 2
            this.$refs.leftTable.addRowEditingSlot(addedRowIndex)
            this.$nextTick(() => {
              this.$refs[`left-yaoPinMc-${addedRowIndex}`].focus() // 开启新一行的编辑之后自动聚焦到新一行的第一个单元格
            })
          }
          break
        case 'down-circle':
          if (rowIndex === this.tableData.length - 1) return
          const currentRow = this.tableData[rowIndex]
          const nextRow = this.tableData[rowIndex + 1]
          this.tableData.splice(rowIndex, 1, nextRow)
          this.tableData.splice(rowIndex + 1, 1, currentRow)
          break
        default:
          break
      }
    },
    leftTableBodyScroll (scrollTop) {
      this.$refs.rightTable.setTableBodyScrollTop(scrollTop)
    },
    rightTableBodyScroll (scrollTop) {
      this.$refs.leftTable.setTableBodyScrollTop(scrollTop)
    },
    leftSwitchToEditingSlot (columnProp, rowIndex, row, triggerType) {
      this.$refs.rightTable.restoreAllEditingSlot()
      this.$refs.leftTable.addRowEditingSlot(rowIndex) // 当某一单元格被切换到编辑状态时，开启器所在行的所有编辑
      this.$refs.leftTable.restoreAllEditingSlot({excludeMode: 'row', excludeRowIndex: rowIndex}) // 然后关闭其他行的编辑
      triggerType === 'click' && this.$nextTick(() => {
        this.$refs[`left-${columnProp}-${rowIndex}`].focus() // 自动聚焦当前单元格(只有这个单元格是通过点击触发编辑时, 才应该聚焦)
      })
    },
    rightSwitchToEditingSlot (columnProp, rowIndex, row, triggerType) {
      this.$refs.leftTable.restoreAllEditingSlot()
      this.$refs.rightTable.addRowEditingSlot(rowIndex) // 当某一单元格被切换到编辑状态时，开启器所在行的所有编辑
      this.$refs.rightTable.restoreAllEditingSlot({excludeMode: 'row', excludeRowIndex: rowIndex}) // 然后关闭其他行的编辑
      triggerType === 'click' && this.$nextTick(() => {
        this.$refs[`right-${columnProp}-${rowIndex}`].focus() // 自动聚焦当前单元格(只有这个单元格是通过点击触发编辑时, 才应该聚焦)
      })
    }
  }
}
</script>
```
:::

### 双列表格(不固定高度)

高度不要求固定, 即不需要滚动条, 总高度随着数据的增加自由伸展高度。

:::demo 去除外壳的高度css样式和内层`table`的`height`属性即可, 相应的, 所有的关联滚动逻辑也可以去除。

```html
<template>
  <div style="display: flex">
    <!-- 左侧表格 -->
    <df-table
      :data="leftTableData"
      style="width: 50%"
      :column-options="columnOptions"
      @switch-to-editing-slot="leftSwitchToEditingSlot"
      border
      @button-click="leftButtonClick"
      ref="leftTable">
      <df-table-column
        label="序号"
        prop="index"
        width="50">
      </df-table-column>
      <df-table-column
        prop="yaoPinMc"
        label="药品名称"
        width="80">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.yaoPinMc" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="jiLiang"
        label="剂量"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.jiLiang" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="danWei"
        label="单位"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.danWei" :ref="`left-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="biaoZhunJia"
        label="标准价"
        width="70">
      </df-table-column>
      <df-table-column
        prop="yiBaoDengJi"
        label="医保等级">
      </df-table-column>
      <df-table-column
        width="80"
        type="buttons"
        button-type="icon"
        :buttons='["remove-circle", "add-circle", "down-circle"]'>
      </df-table-column>
    </df-table>
    <!-- 右侧表格 -->
    <df-table
      :data="rightTableData"
      :supplement-row-height="rightTableData.length < leftTableData.length"
      style="width: 50%"
      :column-options="columnOptions"
      @switch-to-editing-slot="rightSwitchToEditingSlot"
      border
      @button-click="rightButtonClick"
      ref="rightTable">
      <df-table-column
        label="序号"
        prop="index"
        width="50">
      </df-table-column>
      <df-table-column
        prop="yaoPinMc"
        label="药品名称"
        width="80">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.yaoPinMc" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="jiLiang"
        label="剂量"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.jiLiang" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="danWei"
        label="单位"
        width="50">
        <div slot="editing" slot-scope="scope">
          <df-input v-model="scope.row.danWei" :ref="`right-${scope.column.property}-${scope.$index}`" />
        </div>
      </df-table-column>
      <df-table-column
        prop="biaoZhunJia"
        label="标准价"
        width="70">
      </df-table-column>
      <df-table-column
        prop="yiBaoDengJi"
        label="医保等级">
      </df-table-column>
      <df-table-column
        width="80"
        type="buttons"
        button-type="icon"
        :buttons='["remove-circle", "add-circle", "down-circle"]'>
      </df-table-column>
    </df-table>
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
            'yaoPinMc',
            'jiLiang',
            'danWei'
          ]
        }
      },
      tableData: new Array(10).fill().map((row, rowIndex) => ({
        yaoPinMc: `人参${rowIndex + 1}`,
        jiLiang: 1,
        danWei: 'g',
        biaoZhunJia: '0.2011',
        shuLiang: 0,
        yiBaoDengJi: '二级'
      }))
    }
  },
  computed: {
    leftTableData () {
      return this.tableData
        .filter((row, rowIndex) => rowIndex % 2 === 0)
        .map((row, rowIndex) => {
          return {
            index: rowIndex * 2 + 1,
            ...row
          }
        })
    },
    rightTableData () {
      return this.tableData.filter((row, rowIndex) => rowIndex % 2 === 1)
        .map((row, rowIndex) => {
          return {
            index: rowIndex * 2 + 2,
            ...row
          }
        })
    }
  },
  methods: {
    leftButtonClick (button, buttonIndex, row, rowIndex) {
      this.buttonClick(button, rowIndex * 2)
    },
    rightButtonClick (button, buttonIndex, row, rowIndex) {
      this.buttonClick(button, rowIndex * 2 + 1)
    },
    buttonClick (button, rowIndex) {
      switch (button) {
        case 'remove-circle':
          this.tableData.splice(rowIndex, 1)
          break
        case 'add-circle':
          this.tableData.push({
            yaoPinMc: '',
            jiLiang: 1,
            danWei: 'g',
            biaoZhunJia: '0.2011',
            shuLiang: 0,
            yiBaoDengJi: '二级'
          })
          // 添加一行数据之后，找到添加的数据的行下标，也就是最后一行，开启这一行的编辑
          if (this.tableData.length % 2 === 0) {
            const addedRowIndex = (this.tableData.length - 2) / 2
            this.$refs.rightTable.addRowEditingSlot(addedRowIndex)
            this.$nextTick(() => {
              this.$refs[`right-yaoPinMc-${addedRowIndex}`].focus() // 开启新一行的编辑之后自动聚焦到新一行的第一个单元格
            })
          } else {
            const addedRowIndex = (this.tableData.length - 1) / 2
            this.$refs.leftTable.addRowEditingSlot(addedRowIndex)
            this.$nextTick(() => {
              this.$refs[`left-yaoPinMc-${addedRowIndex}`].focus() // 开启新一行的编辑之后自动聚焦到新一行的第一个单元格
            })
          }
          break
        case 'down-circle':
          if (rowIndex === this.tableData.length - 1) return
          const currentRow = this.tableData[rowIndex]
          const nextRow = this.tableData[rowIndex + 1]
          this.tableData.splice(rowIndex, 1, nextRow)
          this.tableData.splice(rowIndex + 1, 1, currentRow)
          break
        default:
          break
      }
    },
    leftSwitchToEditingSlot (columnProp, rowIndex, row, triggerType) {
      this.$refs.rightTable.restoreAllEditingSlot()
      this.$refs.leftTable.addRowEditingSlot(rowIndex) // 当某一单元格被切换到编辑状态时，开启器所在行的所有编辑
      this.$refs.leftTable.restoreAllEditingSlot({excludeMode: 'row', excludeRowIndex: rowIndex}) // 然后关闭其他行的编辑
      triggerType === 'click' && this.$nextTick(() => {
        this.$refs[`left-${columnProp}-${rowIndex}`].focus() // 自动聚焦当前单元格(只有这个单元格是通过点击触发编辑时, 才应该聚焦)
      })
    },
    rightSwitchToEditingSlot (columnProp, rowIndex, row, triggerType) {
      this.$refs.leftTable.restoreAllEditingSlot()
      this.$refs.rightTable.addRowEditingSlot(rowIndex) // 当某一单元格被切换到编辑状态时，开启器所在行的所有编辑
      this.$refs.rightTable.restoreAllEditingSlot({excludeMode: 'row', excludeRowIndex: rowIndex}) // 然后关闭其他行的编辑
      triggerType === 'click' && this.$nextTick(() => {
        this.$refs[`right-${columnProp}-${rowIndex}`].focus() // 自动聚焦当前单元格(只有这个单元格是通过点击触发编辑时, 才应该聚焦)
      })
    }
  }
}
</script>
```
:::

### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string/number | — | — |
| max-height | Table 的最大高度。合法的值为数字或者单位为 px 的高度。 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | true |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String,Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容，也可以通过 `slot="empty"` 设置 | String | — | 暂无数据 |
| no-empty-img | /*新增*/ 空数据时不信啊是图片提示 | Boolean | — | — |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序| Object | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |
| tooltip-effect | tooltip `effect` 属性 | String | dark/light | | dark |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |
| indent      | 展示树形数据时，树节点的缩进 | Number | — | 16 |
| lazy        | 是否懒加载子节点数据 | Boolean | — | — |
| load        | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | — |
| tree-props  | 渲染嵌套数据的配置选项 | Object | — | { hasChildren: 'hasChildren', children: 'children' } |
| need-hide-columns  | /*新增*/ 是否需要开启列显隐功能 | Boolean | — | false |
| need-toggle-hidden-button  | /*新增*/ 开启列显隐功能后是否需要开启显隐控制按钮 | Boolean | — |  true |
| default-hidden-columns  | /*新增*/ 开启列显隐功能后默认隐藏的列 |  Array | — | — |
| tooltip-attrs | /*新增*/ 配置 column 的 show-overflow-tooltip 之后，通过此属性设置 tooltip 的 attributes，请参考 tooltip 的 [attributes](#/component/tooltip) | Object | — | — |
| use-tree  | /*新增*/ 使用树表格 |  Boolean | — | false |

### Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event, rowIndex |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, column, event, rowIndex |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, column, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性，参数为：当前选中的 row、上一次选中的 row、row 的切换方式（click: 点击切换、set: 主动调用 setCurrentRow 方法切换、auto: 数据更新时自动切换） | currentRow, oldCurrentRow, changeMode |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |
| hidden-status-change  | /*新增*/ 当列显隐时触发 | { currentHiddenColumns, currentDisplayedColumns } |
| edit-disabled  | /*新增*/ 开启表格编辑时，想要编辑被禁用的单元格后触发（参数：禁用处的列信息、禁用处的行下标、禁用处的行信息） | newVal, rowIndex, row, column |
| item-checked-changed  | /*新增*/ 开启表格单列多选时时，任一checkbox 的选中状态发生变化时触发（参数：变化处的列的prop、变化处的行的下标、变化后的值和变化处的行信息） | columnProp, rowIndex, value, row |
| operation-click  | /*新增*/ 使用表格行更多操作时，触发任一操作后触发（参数：操作名称、操作在操作组中的下标、操作处的行和操作处的行下标） | operation, operationIndex, row, rowIndex |
| operation-dblclick  | /*新增*/ 使用表格行更多操作时，双击任一操作后触发（参数：操作名称、操作在操作组中的下标、操作处的行和操作处的行下标） | operation, operationIndex, row, rowIndex |
| button-click  | /*新增*/ 使用表格按钮组操作列时，点击按钮组里的按钮时触发（参数：按钮名称、按钮在按钮组中的下标、按钮处的行和按钮处的行下标） | button, buttonIndex, row, rowIndex |
| button-dblclick  | /*新增*/ 使用表格按钮组操作列时，双击按钮组里的按钮时触发（参数：按钮名称、按钮在按钮组中的下标、按钮处的行和按钮处的行下标） | button, buttonIndex, row, rowIndex |
| table-body-scroll | /*新增*/ 当表格列表发生滚动时触发（参数：竖向滚动坐标和横向滚动坐标） | scrollTop, scrollLeft |

### Table Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | selected（想要切换至的目标状态, 必须是 boolean 类型） |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 | columnKey |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |
| openAllTree | /*新增*/ 用于可展开表格与树形表格，展开所有的树 | — |
| closeAllTree | /*新增*/ 用于可展开表格与树形表格，关闭所有的树 | — |
| getCheckedItems | /*新增*/ 用于获取单列多选中某一列的已选择项 | columnProp |
| setItemChecked | /*新增*/ 用于单列多选中设置某一列的某一行处的选择状态 | columnProp, row, value |
| setAllItemsChecked | /*新增*/ 用于单列多选中设置某一列的选择状态 | columnProp |
| removeAllItemsChecked | /*新增*/ 用于单列多选中移除某一列的选择状态 | columnProp |
| setColumnShowStatus | /*新增*/ 用于列显隐中设置某一列的显隐状态 | columnProp, showStatus |
| toggleColumnShowStatus | /*新增*/ 用于列显隐中切换某一列的显隐状态 | columnProp |
| setColumnShowList | /*新增*/ 用于列显隐中设置当前显示列的数组 | array[columnProp, columnProp, ...] |
| getCurrentRowOffsetTop | /*新增*/ 获取单选行的位置距离表格顶端的距离，如果想要滚动至此距离，你也可以直接使用下面的 scrollToCurrentRow 方法 | — |
| scrollToCurrentRow | /*新增*/ 滚动至单选行所在位置 | — |
| scrollToRowIndex | /*新增*/ 滚动至行下标所在位置 | rowIndex |
| getTreeRowKeysByLevel | /*新增*/ 获取树表某一层级的rowKeys | 层级 |
| setTableBodyScrollTop | /*新增*/ 设置表格的竖向滚动坐标 | scrollTop |
| setTableBodyScrollLeft | /*新增*/ 设置表格的横向滚动坐标 | scrollLeft |

### Table Slot
| name | 说明 |
|------|--------|
| empty | 自定义空数据展示内容。 |
| append | 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 |
| customSummary | 开启合计行之后，自定义合计行内容。 |

### Table-column Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `operation` 则显示更多操作；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮；如果设置了 `buttons` 则显示为一组按钮组 | string | selection/operation/index/expand/buttons | — |
| index | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引 | number, Function(index) | - | - |
| column-key | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | string | — | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 df-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(cellValue, row, column, index) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| align | 对齐方式 | String | left/center/right | left |
| header-align | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | String | left/center/right | — |
| class-name | 列的 className | string | — | — |
| label-class-name | 当前列标题的自定义类名 | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key`） | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-placement | 过滤弹出框的定位 | String | 与 Tooltip 的 `placement` 属性相同 | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |
| use-input-filter | 是否使用 input 框模式的筛选。 | boolean | — | false |
| set-operations | /*新增*/ 动态配置按钮组操作列的按钮组名称，当此项存在时，operations 属性将置为无效 | Function(row, rowIndex) | — | — |
| operations | /*新增*/ 动态配置弹出式操作列的按钮组  | Array | — | — |
| hidden-operations | /*新增*/ 设置弹出操作列的操作隐藏 | Array | — | — |
| loading-operations | /*新增*/ 设置弹出操作列的操作 loading 状态 | Array | — | — |
| disabled-operations | /*新增*/ 设置弹出操作列的操作 disabled 状态 | Array | — | — |
| hide-on-click | /*新增*/ 是否在弹出操作列点击操作项后隐藏弹出框 | boolean          | — | true |
| button-type | /*新增*/ 按钮组操作列的按钮类型 | String | text/icon | text |
| set-buttons | /*新增*/ 动态配置按钮组操作列的按钮组名称，当此项存在时，buttons 属性将置为无效 | Function(row, rowIndex) | — | — |
| buttons | /*新增*/ 按钮组操作列的按钮组名称 | Array | — | — |
| display-buttons-length | /*新增*/ 设置按钮组操作列的按钮展示数量 | Number | — | 2 |
| hidden-buttons | /*新增*/ 设置按钮组操作列的按钮隐藏 | Array | — | — |
| loading-buttons | /*新增*/ 设置按钮组操作列的按钮 loading 状态 | Array | — | — |
| disabled-buttons | /*新增*/ 设置按钮组操作列的按钮 disabled 状态 | Array | — | — |

### Table-column Scoped Slot
| name | 说明 |
|------|--------|
| — | 自定义列的内容，参数为 { row, column, $index } |
| header | 自定义表头的内容. 参数为 { column, $index } |

### columnOptions.multipleConfig 单列多选 参数规则
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| multipleColumns | 多选列选项 | array | — | — |
| item | /*代号*/ 这里用 item 表示 multipleColumns 的每一项 | object | — | — |
| item > columnProp | 多选列的 prop | string | — | — |
| item > disableRowsIndex | 多选列中禁止选择的行的下标，如果你想禁用此列的某一行处的选择功能，把行下标放进去即可 | array | — | — |
