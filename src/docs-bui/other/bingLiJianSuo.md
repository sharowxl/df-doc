
### BingLiJianSuo 病历检索

:::demo

```html
<template>
  <div>
    <df-button type="text" @click='open(true)'>门诊</df-button>
    <df-button type="text" @click='open(false)'>住院</df-button>
    <df-bing-li-jian-suo
      v-if="visible"
      v-model="visible"
      :men-zhen-bz="menZhenBz"
      :cha-xun-qx="chaXunQx"
      @handleConfirm="handleConfirm"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      menZhenBz: true, // 门诊标志：true门诊，false住院
      chaXunQx: '0' // 查询权限：0=全院，1=科室，2=个人
    }
  },
  methods: {
    open (menZhenBz) {
      this.menZhenBz = menZhenBz
      this.visible = true
    },
    handleConfirm () {
    }
  }
}
</script>

```
:::

### BingLiJianSuo Attributes

BingLiJianSuo 基础属性
| 参数 |   说明          | 类型       | Attributes 默认值 |
|---- |------ |------ |-----------------------  |
| value | 绑定值 | boolean | - |  
| menZhenBz | 门诊住院标志(true门诊，false住院) | boolean | true |
| chaXunQx | 查询权限(0=全院，1=科室，2=个人) | string | 0 |

### BingLiJianSuo Events

| 方法 |   说明          | 类型       | 回调参数 |
|---- |------ |------ |-----------------------  |
| handleConfirm | 点击确定后返回事件 | function | - |
