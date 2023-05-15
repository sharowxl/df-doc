## TreeTable 树形表格

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

基础的树形结构展示。

:::demo
```html
<template>
  <df-tree-table :data="data" :column="column" :props="defaultProps" @node-click="handleNodeClick"></df-tree-table>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        valueKey: '001',
        label: '胸部左侧X光',
        price: '38',
        size: '√',
        children: [{
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        }, {
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        }]
      }, {
        valueKey: '002',
        label: '胸透',
        price: '36',
        size: '√',
        children: [{
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√'
        }]
      }, {
        valueKey: '003',
        label: '胸部右侧X光',
        price: '35',
        size: '√',
        children: [{
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }]
      }, {
        valueKey: '004',
        label: '抽血检测',
        price: '34',
        size: '√'
      }, {
        valueKey: '005',
        label: '核算检测',
        price: '99',
        size: '√'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200
      }, {
        label: '位置',
        prop: 'position',
        width: 200
      }, {
        label: '价格',
        prop: 'price',
        width: 200
      }, {
        label: '是否',
        prop: 'size',
        width: 200
      }]
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
```
:::

### 可选择

适用于需要选择层级时使用。

:::demo 
```html
<template>
  <df-tree-table
    :props="defaultProps"
    :data="data"
    :column="column"
    show-checkbox
    @check-change="handleCheckChange">
  </df-tree-table>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        valueKey: '001',
        label: '胸部左侧X光',
        price: '38',
        size: '√',
        children: [{
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        }, {
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        }]
      }, {
        valueKey: '002',
        label: '胸透',
        price: '36',
        size: '√',
        children: [{
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√'
        }]
      }, {
        valueKey: '003',
        label: '胸部右侧X光',
        price: '35',
        size: '√',
        children: [{
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }]
      }, {
        valueKey: '004',
        label: '抽血检测',
        price: '34',
        size: '√'
      }, {
        valueKey: '005',
        label: '核算检测',
        price: '99',
        size: '√'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200
      }, {
        label: '位置',
        prop: 'position',
        width: 200
      }, {
        label: '价格',
        prop: 'price',
        width: 200
      }, {
        label: '是否',
        prop: 'size',
        width: 200
      }]
    }
  },
  methods: {
    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  }
}
</script>
```
:::

### 禁用状态
可将 TreeTable 的某些节点设置为禁用状态

:::demo 通过`disabled`设置禁用状态。
```html
<template>
  <df-tree-table
    :data="data"
    :column="column"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]">
  </df-tree-table>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        valueKey: '001',
        label: '胸部左侧X光',
        price: '38',
        size: '√',
        children: [{
          id: 21,
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        }, {
          id: 22,
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        }]
      }, {
        id: 2,
        valueKey: '002',
        label: '胸透',
        price: '36',
        size: '√',
        children: [{
          id: 23,
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√',
          disabled: true
        }]
      }, {
        id: 3,
        valueKey: '003',
        label: '胸部右侧X光',
        price: '35',
        size: '√',
        children: [{
          id: 24,
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }]
      }, {
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
        size: '√',
        disabled: true
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200
      },
      {
        label: '位置',
        prop: 'position',
        width: 200
      },
      {
        label: '价格',
        prop: 'price',
        width: 200
      },
      {
        label: '是否',
        prop: 'size',
        width: 200
      }]
    }
  }
}
</script>
```
:::

### 禁用状态（通过回调函数动态设置节点的禁用）
可以通过回调函数的形式设置某些节点设置为禁用状态

:::demo 给 tree-table 传递函数`node-disabled-func`, 该函数自带两个参数, 节点的 node 和 data, 通过对节点数据的判断, 返回是否禁用, 与节点数据中的`disabled`同时生效。
```html
<template>
  <df-tree-table
    :data="data"
    :column="column"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :node-disabled-func="nodeDisabledFunc">
  </df-tree-table>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        valueKey: '001',
        label: '胸部左侧X光',
        price: '38',
        size: 'x',
        children: [{
          id: 21,
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        }, {
          id: 22,
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        }]
      }, {
        id: 2,
        valueKey: '002',
        label: '胸透',
        price: '36',
        size: '√',
        children: [{
          id: 23,
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√',
          disabled: true
        }]
      }, {
        id: 3,
        valueKey: '003',
        label: '胸部右侧X光',
        price: '35',
        size: '√',
        children: [{
          id: 24,
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: 'x'
        }]
      }, {
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
        size: '√',
        disabled: true
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      column: [{
        label: '收费名称',
        prop: 'label',
        width: 200
      },
      {
        label: '位置',
        prop: 'position',
        width: 200
      },
      {
        label: '价格',
        prop: 'price',
        width: 200
      },
      {
        label: '是否',
        prop: 'size',
        width: 200
      }]
    }
  },
  methods: {
    nodeDisabledFunc (node, data) {
      return data.size !== '√'
    }
  }
}
</script>
```
:::

### Attributes

其他配置项参考 [tree](#/component/tree#attributes)

| 参数                  | 说明                                               | 类型                        | 可选值  | 默认值   |
| --------------------- | ---------------------------------------- | --------------------------- | ---- | ----- |
| column                | 展示数据                                           | array                       | —    | —     |
| show-header           | 是否显示表头                           | boolean                      | —    | true     |
| node-disabled-func | 通过回调函数的形式控制某些节点的禁用状态 | function          | — | — |

### Column
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| label    | 显示列对应表头信息 | string | —    | —    |
| prop | 显示对应列的属性名 | string | —    | —    |
| width | 表头宽度 | string/number | —    | —    |

### 方法
参考 [tree](#/component/tree#fang-fa)

### Events
参考 [tree](#/component/tree#events)

