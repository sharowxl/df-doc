## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

在拖动滑块时，显示当前值

:::demo 通过设置绑定值自定义滑块的初始值
```html
<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <df-slider v-model="value1"></df-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <df-slider v-model="value2"></df-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <df-slider v-model="value3" :show-tooltip="false"></df-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <df-slider v-model="value4" :format-tooltip="formatTooltip"></df-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <df-slider v-model="value5" disabled></df-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### 只读模式

支持设置只读模式, 此模式下, 无法对进度条进行拖拽操作

:::demo 设置`read-only`属性即可
```html
<template>
  <div class="block">
    <df-slider v-model="value1" read-only></df-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 20
      }
    }
  }
</script>
```
:::

### 离散值

选项可以是离散的

:::demo 改变`step`的值可以改变步长，通过设置`show-stops`属性可以显示间断点
```html
<template>
  <div>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <df-slider
        v-model="value1"
        :step="10">
      </df-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <df-slider
        v-model="value2"
        :step="10"
        show-stops>
      </df-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```
:::

### 带有输入框

通过输入框设置精确数值

:::demo 设置`show-input`属性会在右侧显示一个输入框
```html
<template>
  <div class="block">
    <df-slider
      v-model="value"
      show-input>
    </df-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### 范围选择

支持选择某一数值范围

:::demo 设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值
```html
<template>
  <div class="block">
    <df-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </df-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```
:::

### 竖向模式

:::demo 设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性
```html
<template>
  <div class="block">
    <df-slider
      v-model="value"
      vertical
      height="200px">
    </df-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### 展示标记

:::demo 设置 `marks` 属性可以展示标记
```html
<template>
  <div class="block">
    <df-slider
      v-model="value"
      range
      :marks="marks">
    </df-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | number | — | 0 |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框，仅在非范围选择时有效 | boolean | — | false |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮 | boolean | — | true |
| input-size | 输入框的尺寸 | string | large / medium / small / mini | small |
| show-stops | 是否显示间断点 | boolean | — | false |
| show-tooltip | 是否显示 tooltip | boolean | — | true |
| format-tooltip | 格式化 tooltip message | function(value) | — | — |
| range | 是否为范围选择 | boolean | — | false |
| vertical | 是否竖向模式 | boolean | — | false |
| height | Slider 高度，竖向模式时必填 | string | — | — |
| label | 屏幕阅读器标签 | string | — | — |
| debounce | 输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效 | number | — | 300 |
| tooltip-class | tooltip 的自定义类名 | string | — | — |
| marks | 标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式 | object | — | — |
| read-only | /*新增*/ 设置只读模式, 此模式下, 无法对进度条进行拖拽操作| boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值 |
| input | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | 改变后的值 |