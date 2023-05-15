## 诊断表单

### 以表格形式显示

:::demo
```html
<template>
  <div style="height: 500px;">
    <df-zhen-duan-form
      v-model="value"
      renderType="table"
      zhenDuanLx="0"
      zhenDuanDl="190"
      :bingRenId="74722"
      bingRenZyId="18887"
      :exclude-columns="['zhuanGuiQk']"
      @change="change"
    >
      <span slot="header-left">插槽</span>
    </df-zhen-duan-form>
  </div>
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      value: [],
      headerValue: []
    }
  },
  methods: {
    change (val, del) {
      console.log('change1', val, del)
    }
  },
  created () {
  }
}
</script>
```
:::

### 以表格形式显示,挂载后自动加载病人当前对应的诊断数据
:::demo
```html
<template>
  <div style="height: 500px;">
    <df-zhen-duan-form
      v-model="value"
      renderType="table"
      zhenDuanLx="0"
      zhenDuanDl="190"
      :bingRenId="74722"
      bingRenZyId="18887"
      getDataAtOnce
      @change="change"
    />
  </div>
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      value: [],
      headerValue: []
    }
  },
  methods: {
    change (val, del) {
      console.log('change2', val, del)
    }
  },
  created () {
  }
}
</script>
```
:::

### 以输入框形式显示
:::demo
```html
<template>
  <df-zhen-duan-form
    v-model="value"
    renderType="form"
    zhenDuanLx="0"
    zhenDuanDl="190"
    :bingRenId="74722"
    bingRenZyId="18887"
    @change="change"
  />
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      value: [],
      headerValue: []
    }
  },
  methods: {
    change (val, del) {
      console.log('change3', val, del)
    }
  },
  created () {
  }
}
</script>
```
:::

### 以输入框形式显示,挂载后自动加载病人当前对应的诊断数据
:::demo
```html
<template>
  <df-zhen-duan-form
    v-model="value"
    renderType="form"
    zhenDuanLx="0"
    zhenDuanDl="190"
    :bingRenId="74722"
    bingRenZyId="18887"
    getDataAtOnce
    @change="change"
  />
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      value: [],
      headerValue: []
    }
  },
  methods: {
    change (val, del) {
      console.log('change4', val, del)
    }
  },
  created () {
  }
}
</script>
```
:::


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | array | — | — |
| renderType | 显示类型 | string | from/table | form |
| initRow | 当需要新增行,增加额外的数据时可用 | object | — | {} |
| zhenDuanLx | 诊断类型 | string | 0不区分 1西医 2中医 | 0 |
| zhenDuanDl | 诊断大类(必传) | string | 可选值见</br>"主数据-基础字典-搜索'诊断类型'-ID以0结尾的那些" | - |
| showZhenDuanYy | 是否显示诊断引用 | boolean | — | true |
| bingRenId | 病人ID | string/number | — | - |
| bingRenZyId | 病人住院ID | string/number | — | - |
| getDataAtOnce | 是否在挂载后立刻请求该病人的该类型的诊断数据 | boolean | — | false |
| excludeColumns | 需要排除的不显示的列 | array | ['zhenDuanLb','zhenDuanJc','zhenDuanQz',</br>'zhenDuanMc','zhenDuanHz','zhuanGuiQk',</br>'ruYuanQk','icdBm','yiShengXm'] | [] |
| disabled | 是否只读 | boolean | — | false |
| dialogTitle | renderType为form时有效, 为点击编辑按钮显示的弹窗的标题 | string | — | 诊断 |

### Slots
| 名称     | 说明 |
|---------|-------------|
| header-left  | 诊断表格头部左侧插槽 |

### Events
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 当诊断数据发生增删变化时触发 | 当前值([]), 已删除值([]) |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getZhenDuanData | 内置的获取诊断数据接口 |  |
| validateCell | 单元格校验 (转归和入院病情的必填校验)|  |
| validateRow | 行校验 (转归和入院病情的必填校验) |  |
| validateAll | 校验所有 (转归和入院病情的必填校验) |  |
             