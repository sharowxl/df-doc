## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `df-icon-iconName` 来使用即可。例如：

:::demo
```html
<template>
  <div>
    <i class="df-icon-add" style="font-size: 20px;"></i>
    <i class="df-icon-reduce" style="font-size: 20px;"></i>
    <i class="df-icon-success" style="font-size: 20px;"></i>
    <df-button type="primary" icon="df-icon-search">搜索</df-button>
  </div>
</template>

```
:::

### 图标集合

<template>
  <ul class="icon-list">
    <li v-for="name in $DfIcon" :key="name">
      <span>
        <i :class="'df-icon-' + name"></i>
        <span class="icon-name">{{'df-icon-' + name}}</span>
      </span>
    </li>
  </ul>
</template>

### 多色图标

多色图标需要使用 SVG 实现，为 SVG 标签设置类名`df-svg`，并为内部的 use 标签配置类名为`df-icon-iconName`来使用即可。以下是目前图标库中的所有多色图标：

:::demo
```html
<template>
  <div class="df-svg-wrapper">
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-file"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-folder"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-folder-open"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-folder-reduce"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-folder-add"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-avoid-light-w"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-avoid-light-b"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-0"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-2"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-4"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-6"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-8"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pain-10"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-no-docter"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-caution"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-stack"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-imaging"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-medical-record-history"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-medical-record"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-bihuan"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-bihuan-weijizhi"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-pinggu"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-shuomingshu"></use>
    </svg>
    <svg class="df-svg" aria-hidden="true">
      <use xlink:href="#df-icon-shuomingshubeifen"></use>
    </svg>
  </div>
</template>
```
:::
