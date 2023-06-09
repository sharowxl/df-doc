## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<template>
  <div>
    <df-row>
      <df-button>默认按钮</df-button>
      <df-button type="primary">主要</df-button>
      <df-button type="success">成功</df-button>
      <df-button type="info">信息</df-button>
      <df-button type="warning">警告</df-button>
      <df-button type="danger">危险</df-button>
    </df-row>

    <df-row>
      <df-button plain>朴素按钮</df-button>
      <df-button type="primary" plain>主要</df-button>
      <df-button type="success" plain>成功</df-button>
      <df-button type="info" plain>信息</df-button>
      <df-button type="warning" plain>警告</df-button>
      <df-button type="danger" plain>危险</df-button>
    </df-row>

    <df-row>
      <df-button round>圆角按钮</df-button>
      <df-button type="primary" round>主要</df-button>
      <df-button type="success" round>成功</df-button>
      <df-button type="info" round>信息</df-button>
      <df-button type="warning" round>警告</df-button>
      <df-button type="danger" round>危险</df-button>
    </df-row>

    <df-row>
      <df-button icon="df-icon-search" circle></df-button>
      <df-button type="primary" icon="df-icon-edit" circle></df-button>
      <df-button type="success" icon="df-icon-success" circle></df-button>
      <df-button type="info" icon="df-icon-message" circle></df-button>
      <df-button type="warning" icon="df-icon-warning" circle></df-button>
      <df-button type="danger" icon="df-icon-delete" circle></df-button>
    </df-row>
  </div>
</template>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<template>
  <div>
    <df-row>
      <df-button disabled>默认按钮</df-button>
      <df-button type="primary" disabled>主要</df-button>
      <df-button type="success" disabled>成功</df-button>
      <df-button type="info" disabled>信息</df-button>
      <df-button type="warning" disabled>警告</df-button>
      <df-button type="danger" disabled>危险</df-button>
    </df-row>

    <df-row>
      <df-button plain disabled>朴素按钮</df-button>
      <df-button type="primary" plain disabled>主要</df-button>
      <df-button type="success" plain disabled>成功</df-button>
      <df-button type="info" plain disabled>信息</df-button>
      <df-button type="warning" plain disabled>警告</df-button>
      <df-button type="danger" plain disabled>危险</df-button>
    </df-row>
  </div>
</template>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo
```html
<template>
  <div>
    <df-button type="text">文字按钮</df-button>
    <df-button type="text" disabled>文字按钮</df-button>
  </div>
</template>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 DfUI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<template>
  <div>
    <df-button type="primary" icon="df-icon-edit"></df-button>
    <df-button type="primary" icon="df-icon-user-group"></df-button>
    <df-button type="primary" icon="df-icon-delete"></df-button>
    <df-button type="primary" icon="df-icon-search">搜索</df-button>
    <df-button type="primary">上传<i class="df-icon-upload df-icon--right"></i></df-button>
  </div>
</template>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<df-button-group>`标签来嵌套你的按钮。

```html
<template>
  <div>
    <df-button-group>
      <df-button type="primary" icon="df-icon-arrow-left">上一页</df-button>
      <df-button type="primary">下一页<i class="df-icon-arrow-right df-icon--right"></i></df-button>
    </df-button-group>
    <df-button-group>
      <df-button type="primary" icon="df-icon-edit"></df-button>
      <df-button type="primary" icon="df-icon-user-group"></df-button>
      <df-button type="primary" icon="df-icon-delete"></df-button>
    </df-button-group>
  </div>
</template>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<template>
  <df-button type="primary" :loading="true">加载中</df-button>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
  <div>
    <df-row>
      <df-button size="mini">小型</df-button>
      <df-button>默认</df-button>
      <df-button size="medium">中等</df-button>
    </df-row>
    <df-row>
      <df-button size="mini" round>小型</df-button>
      <df-button round>默认</df-button>
      <df-button size="medium" round>中等</df-button>
    </df-row>
  </div>
</template>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 聚焦至按钮, 当按钮被聚焦时, 按下 enter 键会触发按钮的 click 事件 |
