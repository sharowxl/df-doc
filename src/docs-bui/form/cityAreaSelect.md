## 地址选择器

### 基础用法

地址选择器的value类型为数组，选中节点后回填对应节点的路径ID数组；
当不传入headerValue时，将会自动取当前院区所在地址作为头部值；

:::demo
```html
<template>
  <df-city-area-select
    ref="citySelect"
    v-model="value"
    :headerValue="headerValue"
    @change="change"
  />
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      value: null,
      headerValue: []
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    },
    setHeaderValue () {
      setTimeout(() => {
        this.$set(this, 'headerValue', ['210000', '210700', '210702'])
      }, 300)
    }
  },
  created () {
    this.setHeaderValue()
  }
}
</script>
```
:::

### 获取选中节点信息

在选中地址后，可以通过getCheckedNodes方法获取选中节点信息，返回的是一个节点数组，其中包含节点当前信息、父级信息、节点路径信息

:::demo
```html
<template>
  <div>
    <df-button style="margin-bottom: 8px;" @click="handleFocus">聚焦1s后失焦</df-button>
    <df-city-area-select
      ref="citySelect"
      v-model="value"
      :headerValue="headerValue"
      headerClickCloseDropDown
      @change="change"
    />
  </div>
</template>
<script>
export default {
  name: 'demo2',
  data () {
    return {
      value: null,
      headerValue: ['210000', '210700', '210702'],
      selectedData: ''
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
      if (val && val.length) {
        this.$nextTick(() => {
          const selectedData = this.$refs.citySelect.getCheckedNodes()
          console.log('node', selectedData[0])
        })
      }
    },
    handleFocus () {
      this.$refs.citySelect.focus()
      setTimeout(() => {
        this.$refs.citySelect.blur()
      }, 1000)
    }
  }
}
</script>
```
:::


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | - | — | — |
| size | 尺寸 | string | medium/small/mini | mini |
| placeholder | 输入框占位文本 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空选项 | boolean | — | true |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | — | true |
| separator | 选项分隔符 | string | — | '' |
| filterable | 是否可搜索选项 | boolean | — | — |
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | — | 300 |
| headerValue | 下拉面板-头部的默认值 | array | — | [] |
| showHeader | 下拉面板-是否显示头部 | boolean | — | true |
| expandTrigger | 下拉面板-次级菜单的展开方式 | string | click / hover | 'click' |
| checkStrictly | 下拉面板-是否严格的遵守父子节点不互相关联，父级节点可以选中 | boolean | — | true |
| headerTitle | 下拉面板-头部小标题  | string | —  | 常用城市 |
| headerClickCloseDropDown | 下拉面板-头部按钮点击后是否关闭下拉面板 | boolean | — | false |
| userInfo | 当前登录人信息，在取不到缓存里的用户信息时使用 | object | — | {shuRuMa: 'ShuRuMa1'} |
| filterFirstLevelValue | 需要过滤掉的一级选项，过滤后，下面的二级第一个选项将会提升至一级；默认过滤北京、天津、上海、重庆 | array | — | ['110000', '120000', '310000', '500000'] |
| valueKey | 下拉面板绑定字段 | string | code/id | code |

### Slots
| 名称     | 说明 |
|---------|-------------|
| empty  | 无匹配选项时的内容 |

### Events
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 当选中option值发生改变时 | value |
| visible-change | 当下拉面板显隐状态改变时 | true/false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| closeDropDown | 关闭下拉面板 | - |
| focus | 手动聚焦| - |
| blur | 手动失焦| - |
| getCheckedNodes | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 `false` |
| clearCheckedNodes | 清空选中的节点 | - |
             