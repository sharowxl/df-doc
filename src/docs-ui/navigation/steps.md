## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

简单的步骤条。

:::demo 设置`active`属性，接受一个`Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置`space`属性即可，它接受`Number`，单位为`px`，如果不设置，则为自适应。设置`finish-status`属性可以改变已经完成的步骤的状态。
```html
<template>
  <div>
    <df-steps :active="active" finish-status="success">
      <df-step title="步骤 1"></df-step>
      <df-step title="步骤 2"></df-step>
      <df-step title="步骤 3"></df-step>
    </df-steps>

    <df-button style="margin-top: 12px;" @click="next">下一步</df-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### 含状态步骤条

每一步骤显示出该步骤的状态。

:::demo 也可以使用`title`具名分发，可以用`slot`的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。
```html
<template>
  <df-steps :space="200" :active="1" finish-status="success">
    <df-step title="已完成"></df-step>
    <df-step title="进行中"></df-step>
    <df-step title="步骤 3"></df-step>
  </df-steps>
</template>
```
:::

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

:::demo
```html
<template>
  <df-steps :active="1">
    <df-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></df-step>
    <df-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></df-step>
    <df-step title="步骤 3" description="这段就没那么长了"></df-step>
  </df-steps>
</template>
```
:::

### 居中的步骤条

标题和描述都将居中。

:::demo
```html
<template>
  <df-steps :active="2" align-center>
    <df-step title="步骤1" description="这是一段很长很长很长的描述性文字"></df-step>
    <df-step title="步骤2" description="这是一段很长很长很长的描述性文字"></df-step>
    <df-step title="步骤3" description="这是一段很长很长很长的描述性文字"></df-step>
    <df-step title="步骤4" description="这是一段很长很长很长的描述性文字"></df-step>
  </df-steps>
</template>
```
:::

### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo 通过`icon`属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。
```html

<template>
  <df-steps :active="1">
    <df-step title="步骤 1" icon="df-icon-edit"></df-step>
    <df-step title="步骤 2" icon="df-icon-upload"></df-step>
    <df-step title="步骤 3" icon="df-icon-image"></df-step>
  </df-steps>
</template>
```
:::

### 竖式步骤条

竖直方向的步骤条。

:::demo 只需要在`df-steps`元素中设置`direction`属性为`vertical`即可。
```html
<template>
  <div style="height: 300px;">
    <df-steps direction="vertical" :active="1">
      <df-step title="步骤 1"></df-step>
      <df-step title="步骤 2"></df-step>
      <df-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></df-step>
    </df-steps>
  </div>
</template>
```
:::

### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<template>
  <div>
    <df-steps :active="1" simple>
      <df-step title="步骤 1" icon="df-icon-edit"></df-step>
      <df-step title="步骤 2" icon="df-icon-upload"></df-step>
      <df-step title="步骤 3" icon="df-icon-image"></df-step>
    </df-steps>

    <df-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <df-step title="步骤 1" ></df-step>
      <df-step title="步骤 2" ></df-step>
      <df-step title="步骤 3" ></df-step>
    </df-steps>
  </div>
</template>
```
:::

### 小圆点步骤条
设置 `small-circle` 可应用小圆点风格，该条件下无法使用icon图标。

:::demo 通过`step-name`属性来设置步骤名称，或使用`head`插槽来自定义头部内容。
```html

<template>
  <div>
    <df-steps
      deactive-color="#A3A5A8"
      :active="active"
      :line-style="{borderColor: '#DADEE6'}"
      align-center
      small-circle
    >
      <df-step step-name="步骤1" active-color="#52B521">
        <div slot="description">
          <p class="desc">2022-01-08 12:49</p>
          <p class="desc">操作人：DBA</p>
        </div>
      </df-step>
      <df-step step-name="步骤2" active-color="#6021B5">
        <div slot="description">
          <p class="desc">2022-01-08 12:49</p>
          <p class="desc">操作人：DBA</p>
        </div>
      </df-step>
      <df-step step-name="步骤3" active-color="#59B1FF">
        <div slot="description">
          <p class="desc">2022-01-08 12:49</p>
          <p class="desc">操作人：DBA</p>
        </div>
      </df-step>
      <df-step step-name="步骤4" active-color="#FFAE43">
        <div slot="description">
          <p class="desc">2022-01-08 12:49</p>
          <p class="desc">操作人：DBA</p>
        </div>
      </df-step>
    </df-steps>
    <df-button @click="next">next</df-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 3) this.active = 0
    }
  }
}
</script>
```
:::

### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |
| line-style | 设置线条样式 | object | - | - |
| small-circle | 是否应用小圆点风格 | boolean | - | false |
| deactive-color | 设置未激活样式 | string | - | - |

### Step Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| step-name | 步骤名称 | string | — | — |
| active-color | 设置激活颜色 | string | — | — |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | - |

### Step Slot
| name | 说明  |
|----|----|
| head | 自定义头部 |
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |
