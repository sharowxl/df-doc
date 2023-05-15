
### JiBingXz 疾病选择

:::demo

```html
<template>
  <div>
    <df-button type="text" @click='open'>疾病选择</df-button>
    <df-ji-bing-xz 
      v-if="visible"
      v-model="visible"
      :ji-bing-bm="'327003'"
      @handleConfirm="handleConfirm" />
  </div>
</template>
<script>
export default {
  // 代码表daimalb=10328(疾病编码类别)
  // 327001 ICD10-疾病编码    327002 肿瘤形态学编码
  // 327003 损伤中毒外部原因  327004 中医疾病编码
  // 327005 中医证候编码      327006 ICD9-CM3手术编码
  // 327007 中医治法治则  
  
  data () {
    return {
      visible: false
    }
  },
  methods: {
    open(){
      this.visible = true
    },
    handleConfirm () {

    }
  }
}
</script>

```
:::

### JiBingXz Attributes

JiBingXz 基础属性
| 参数 |   说明          | 类型       | Attributes 默认值 |
|---- |------ |------ |-----------------------  |
| value | 绑定值 | boolean | - |  
| jiBingBm | 传入的疾病编码(具体请看代码表daimalb=10328) | string | - |

### JiBingXz Events

| 方法 |   说明          | 类型       | 回调参数 |
|---- |------ |------ |-----------------------  |
| handleConfirm | 点击确定后返回事件 | function | - |
