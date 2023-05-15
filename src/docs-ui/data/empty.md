## Empty 空数据展示

用于空数据展示。

### 基础用法

默认的提示文字是 “暂无数据”，可以通过`text`属性更改，参见第二个例子。

:::demo 通过`text`属性可以更改提示的文字。

```html
<template>
  <div class="empty-demo-base">
    <div class="block">
      <df-empty />
    </div>

    <div class="block">
      <df-empty text="自定义提示文字" />
    </div>
  </div>
</template>
```
:::

### 不同类型图片

Empty 组件提供了除了默认类型以外的六种图片，可以在不同场景下选择合适的图片类型。

:::demo 额外的类型：`noRecord`、`noPatient`、`noAdmitting`、`noNet`、`noServer`、`noPage`，通过设置`type`属性来配置它们。

```html
<template>
  <div>
    <div class="empty-demo-base">
      <div class="block">
        <df-empty text="暂无记录" type="noRecord"/>
      </div>
      <div class="block">
        <df-empty text="目前无患者" type="noPatient"/>
      </div>
    </div>

    <div class="empty-demo-base">
      <div class="block">
        <df-empty text="暂无待入科患者" type="noAdmitting"/>
      </div>
      <div class="block">
        <df-empty text="当前暂无连接，请检查网络" type="noNet"/>
      </div>
    </div>

    <div class="empty-demo-base">
      <div class="block">
        <df-empty text="当前页面丢失，请检查服务器" type="noServer"/>
      </div>
      <div class="block">
        <df-empty text="404：服务器遇到故障" type="noPage"/>
      </div>
    </div>
  </div>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 自定义提示文字 | string | — | 暂无数据 |
| type | 图片类型 | string | noData/noRecord/noPatient/noAdmitting/noNet/noServer/noPage | noData |
