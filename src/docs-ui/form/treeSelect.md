## TreeSelect 树形下拉选

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
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false,
      valueType: 'id'
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
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false,
      valueType: 'id'
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

### 默认选择·单选

使用`value`和`valueType`来设置单选情况下的选择下拉树的默认选择项。  
*`valueType`为`id`*

:::demo 单选模式下，如果`valueType`为`id`，则`value`需要配置为`String`类型或者让`Number`类型，对应`data`中的某一项的`id`。
```html
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: 2,
      valueType: 'id',
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false
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
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: {
        id: 2,
        label: '一级 2'
      },
      valueType: 'data',
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false
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
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: [10, 7],
      valueType: 'id',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false
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
      <p>使用 tree-select</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
        ref="treeSelect"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: [{
        id: 10,
        label: '三级 1-1-2'
      }, {
        id: 7,
        label: '二级 3-1'
      }],
      valueType: 'data',
      data: JSON.parse(JSON.stringify(data)),
      multiple: true,
      defaultExpand: false
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
| data             | tree 数据源	                                   | array            | —    | - |
| value             | 默认勾选中的节点的值                                   | string/number/object/array	            | —    | - |
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

### Tree 的方法
`Tree` 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。`Tree` 组件是 `Select-Tree` 组件的子组件，若要获取 `Tree` 组件，通过这种方式即可：this.$refs[SelectTreeName].getRefTree()。  
`Tree` 拥有如下方法：

| 方法名             | 说明                                       | 参数                                       |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter          | 对树节点进行筛选操作                               | 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数 |
| updateKeyChildren | 通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性 | (key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组 |
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false` |
| setCheckedNodes | 设置目前勾选的节点，使用此方法必须设置 node-key 属性          | (nodes) 接收勾选节点数据的数组                      |
| getCheckedKeys  | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `false` |
| setCheckedKeys  | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性  | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
| setChecked      | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false |
| getHalfCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点所组成的数组  | - |
| getHalfCheckedKeys | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组 | - |
| getCurrentKey   | 获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null | — |
| getCurrentNode  | 获取当前被选中节点的 data，若没有节点被选中则返回 null | — |
| setCurrentKey   | 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 | (key) 待被选节点的 key，若为 null 则取消当前高亮的节点 |
| setCurrentNode  | 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 | (node) 待被选节点的 node |
| getNode         | 根据 data 或者 key 拿到 Tree 组件中的 node | (data) 要获得 node 的 key 或者 data |
| remove          | 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性  | (data) 要删除的节点的 data 或者 node |
| append          | 为 Tree 中的一个节点追加一个子节点 | (data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node |
| insertBefore    | 为 Tree 的一个节点的前面增加一个节点  | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node |
| insertAfter     | 为 Tree 的一个节点的后面增加一个节点  | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node |

### Select 的方法
`Select` 组件是 `Select-Tree` 组件的子组件，若要获取 `Select` 组件，通过这种方式即可：this.$refs[SelectTreeName].getRefSelect()。  
`Select` 拥有如下方法：
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |
