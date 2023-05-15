## TreeTableSelect 树形表格下拉选

用清晰的层级结构展示下拉选信息，可展开或折叠。  
 
### 支持键盘操作

输入框聚焦时按 ↓ 键可跳入树结构, 在树结构内可使用上下切换聚焦项, 使用左右可展开和收起, 使用空格选中, 使用 enter 来确认。  

输入框聚焦时按 enter 键, 如果当前已有选中的树节点, 则收起下拉树, 如果当前没有已选中的树节点, 则默认选中第一个节点。  

按 esc 键收起下拉树。

### 基础用法

基础的下拉选树形结构展示。

:::demo 基础的单选下拉树，传入`data`用于下拉树的结构数据渲染。使用`filterNodeMethod`设置输入框输入的文字的实时搜索匹配规则。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::

### 多选

下拉树支持多选。

:::demo 将`multiple`配置为`true`，即可开启多选。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::

### 可编辑

树节点的内容支持编辑。

:::demo 配置`column.editable`来指定哪些节点需要编辑，这个属性是一个函数，自动带入两个参数，树节点的 node 和 data， 你可以根据节点的实际情况来决定是否要开启节点的编辑，对于需要编辑的节点，在函数的最后返回 true 即可。配合属性`click-outside-to-submit`可以实现点击外层时确定操作。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        click-outside-to-submit
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√'
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√'
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√'
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }]
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200,
        editable: (node, data) => {
          if (data.price === '38' || data.price === '35') return true
          else return false
        }
      },
      {
        label: '位置',
        prop: 'position',
        width: 150,
        editable: (node, data) => {
          if (data.price === '38' || data.price === '35') return false
          else return true
        }
      },
      {
        label: '价格',
        prop: 'price',
        width: 150,
        editable: (node, data) => {
          return true
        }
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }

}
</script>
```
:::

### 可编辑 + 动态设置节点禁用选择

在树节点的内容编辑的同时, 通过回调函数的形式设置某些节点设置为禁用选择状态。

:::demo 给 tree-table-select 传递函数`node-disabled-func`, 该函数自带两个参数, 节点的 node 和 data, 通过对节点数据的判断, 返回是否禁用。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        click-outside-to-submit
        :node-disabled-func="nodeDisabledFunc"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√'
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: 'x'
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: 'x'
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }]
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200,
        editable: (node, data) => {
          if (data.price === '38' || data.price === '35') return true
          else return false
        }
      },
      {
        label: '位置',
        prop: 'position',
        width: 150,
        editable: (node, data) => {
          if (data.price === '38' || data.price === '35') return false
          else return true
        }
      },
      {
        label: '价格',
        prop: 'price',
        width: 150,
        editable: (node, data) => {
          return true
        }
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    nodeDisabledFunc (node, data) {
      return data.size !== '√'
    }
  }

}
</script>
```
:::

### 默认选择·单选

使用`value`和`valueType`来设置单选情况下的选择下拉树的默认选择项。  
*`valueType`为`id`*

:::demo 单选模式下，如果`valueType`为`id`，则`value`需要配置为`String`类型或者让`Number`类型，对应`data`中的某一项的`id`。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: 2,
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::

*`valueType`为`data`*

:::demo 单选模式下，如果`valueType`为`data`，则`value`需要配置为`data`中的某一项。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: {
        id: 2,
        label: '胸透'
      },
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false,
      valueType: 'data',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::

### 默认选择·多选

使用`value`和`valueType`来设置多选情况下的选择下拉树的默认选择项。  
*`valueType`为`id`*

:::demo 多选模式下，`value`必须是数组类型，如果`valueType`为`id`，则`value`中的项需要配置为`String`类型或者让`Number`类型，对应`data`中的`id`。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: [2, 9],
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'id',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::


*`valueType`为`data`*

:::demo 多选模式下，`value`必须是数组类型，`valueType`为`data`时，则`value`中的项需要配置为`data`中的某些项。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-table-select</p>
      <df-tree-table-select
        :data="data"
        :value="value"
        :multiple="multiple"
        :valueType="valueType"
        :column="column"
        :filterNodeMethod="filterNode"
        ref="treeTableSelect"
      ></df-tree-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      valueKey: '001',
      label: '胸部左侧X光',
      price: '38',
      size: '√',
      children: [{
        id: 6,
        valueKey: '021',
        label: '头部检测',
        price: '25',
        size: '√'
      }, {
        id: 7,
        valueKey: '022',
        label: '核酸检测',
        position: '西湖区',
        price: '22',
        size: '√'
      }]
    },
    {
      id: 2,
      valueKey: '002',
      label: '胸透',
      price: '36',
      size: '√',
      children: [{
        id: 8,
        valueKey: '023',
        label: '血液检测',
        price: '21',
        size: '√'
      }]
    },
    {
      id: 3,
      valueKey: '003',
      label: '胸部右侧X光',
      price: '35',
      size: '√',
      children: [{
        id: 9,
        valueKey: '024',
        label: '酒精检测',
        price: '29',
        size: '√'
      }]
    },
    {
      id: 4,
      valueKey: '004',
      label: '抽血检测',
      price: '34',
      size: '√'
    }, {
      id: 5,
      valueKey: '005',
      label: '核算检测',
      price: '99',
      size: '√'
    }];
    return {
      value: [{
        id: 2,
        label: '胸透'
      }, {
        id: 9,
        label: '酒精检测'
      }],
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'data',
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 150
      },
      {
        label: '位置',
        prop: 'position',
        width: 150
      },
      {
        label: '价格',
        prop: 'price',
        width: 150
      },
      {
        label: '是否',
        prop: 'size',
        width: 150
      }]
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>

```
:::


### Attributes
| 参数                  | 说明                                               | 类型                        | 可选值  | 默认值   |
| --------------------- | ---------------------------------------- | --------------------------- | ---- | ----- |
| data             | treeTable 数据源	                                   | array            | —    | - |
| value             | 默认勾选中的节点的值                                   | string/number/object/array	            | —    | - |
| column             | 展示数据                                   | array	            | —    | - |
| value-type             | value 的类型，设置为 id 时 value 的值需要设置为选中节点的 id，设置为 data 时 value 的值需要设置为选中节点的 data		                                   | string	            | —    | - |
| multiple             | 是否开启多选，开启多选时，value 必须配置为数组，数组里的每一项的类型依旧遵循 valueType 的规则	                                   |  boolean            | —    | false |
| check-strictly             | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false，默认开启父子关联			                                   | boolean	            | —    | false |
| default-expand             | tree是否默认展开	                                   | boolean            | —    | true |
| expand-on-click-node             | 是否在点击节点的时候展开或者收缩节点，在 tree-select 组件中，应该永远将该项设为 false，只有点箭头图标的时候才会展开或者收缩节点。	                                   | boolean            | —    | true |
| tree-props             | 同df-tree	                                   | object            |   —  | {id: 'id', label: 'label', children: 'children', disabled: 'disabled', isLeaf: 'isLeaf'} |
| filter-node-method             | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏	                                   | Function(value, data, node)            | —    | - |
| click-outside-to-submit             | 点击弹出层的外部时，是否要直接确定操作                                   | boolean            | —    | false |
| node-disabled-func | 通过回调函数的形式控制某些节点的禁用状态 | function          | — | — |
| disabled | 控制组件的禁用状态 |  boolean | — | false |

### Column
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| label    | 显示列对应表头信息 | string | —    | —    |
| prop | 显示对应列的属性名 | string | —    | —    |
| width | 表头宽度 | string/number | —    | —    |

### props
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| label    | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | —    | —    |
| children | 指定子树为节点对象的某个属性值 | string | —    | —    |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | boolean, function(data, node) | —    | —    |
| isLeaf | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | —    | —    |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值（和 Attributes 中的 value 数据类型一致，根据 valueType 的类型进行判断） |
| clear | 可清空的模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |
