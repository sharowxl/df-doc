## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
  <div>
    <df-radio v-model="radio" reset-value="" label="1">备选项</df-radio>
    <df-radio v-model="radio" reset-value="" label="2">备选项</df-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`df-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<template>
  <div>
    <df-radio disabled v-model="radio" label="禁用">备选项</df-radio>
    <df-radio disabled v-model="radio" label="选中且禁用">备选项</df-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```
:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`df-radio-group`元素和子元素`df-radio`可以实现单选组，在`df-radio-group`中绑定`v-model`，在`df-radio`中设置好`label`即可，无需再给每一个`df-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
  <df-radio-group v-model="radio"  reset-value="">
    <df-radio :label="3">备选项</df-radio>
    <df-radio :label="6">备选项</df-radio>
    <df-radio :label="9">备选项</df-radio>
  </df-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### 按钮样式

按钮样式的单选组合。

:::demo 只需要把`df-radio`元素换成`df-radio-button`元素即可，此外，DfUI 还提供了`size`属性。如果需要设置组件为圆形边框，那么添加属性`circle-border`即可。
```html
<template>
  <div>
    <div>
      <df-radio-group v-model="radio1"  reset-value="" >
        <df-radio-button label="上海"></df-radio-button>
        <df-radio-button label="北京"></df-radio-button>
        <df-radio-button label="广州"></df-radio-button>
        <df-radio-button label="深圳"></df-radio-button>
      </df-radio-group>
    </div>
    <div style="margin-top: 20px">
      <df-radio-group v-model="radio2" size="medium" circle-border>
        <df-radio-button label="上海" ></df-radio-button>
        <df-radio-button label="北京"></df-radio-button>
        <df-radio-button label="广州"></df-radio-button>
        <df-radio-button label="深圳"></df-radio-button>
      </df-radio-group>
    </div>
    <div style="margin-top: 20px">
      <df-radio-group v-model="radio3" size="small">
        <df-radio-button label="上海"></df-radio-button>
        <df-radio-button label="北京" disabled ></df-radio-button>
        <df-radio-button label="广州"></df-radio-button>
        <df-radio-button label="深圳"></df-radio-button>
      </df-radio-group>
    </div>
    <div style="margin-top: 20px">
      <df-radio-group v-model="radio4" disabled size="mini">
        <df-radio-button label="上海"></df-radio-button>
        <df-radio-button label="北京"></df-radio-button>
        <df-radio-button label="广州"></df-radio-button>
        <df-radio-button label="深圳"></df-radio-button>
      </df-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>
```
:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的单选框。
```html
<template>
  <div>
    <div>
      <df-radio v-model="radio1" label="1" border>备选项1</df-radio>
      <df-radio v-model="radio1" label="2" border>备选项2</df-radio>
    </div>
    <div style="margin-top: 20px">
      <df-radio v-model="radio2" label="1" border size="medium">备选项1</df-radio>
      <df-radio v-model="radio2" label="2" border size="medium">备选项2</df-radio>
    </div>
    <div style="margin-top: 20px">
      <df-radio-group v-model="radio3" size="small">
        <df-radio label="1" border>备选项1</df-radio>
        <df-radio label="2" border disabled>备选项2</df-radio>
      </df-radio-group>
    </div>
    <div style="margin-top: 20px">
      <df-radio-group v-model="radio4" size="mini" disabled>
        <df-radio label="1" border>备选项1</df-radio>
        <df-radio label="2" border>备选项2</df-radio>
      </df-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| reset-value | 重置值, 如果传入此值, 那么当 radio 被选中时, 如果再次点击 radio, 将会把 radio 绑定的值重置为此值  | string / number / boolean    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |
| reset-value | 重置值, 如果传入此值, 那么当 radio 被选中时, 如果再次点击 radio, 将会把 radio-group 绑定的值重置为此值  | string / number / boolean    |      —         |     —    |
| use-flex  | /*新增*/ 让 Radio-group 下的子元素按照 flex 布局排列    | boolean   | — | false  |
| circle-border  | /*新增*/ 将 Radio-group 下的边框设置为圆角 | boolean | — | false  |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
