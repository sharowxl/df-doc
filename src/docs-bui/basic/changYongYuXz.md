
### ChangYongYuXz 常用语选择

:::demo

```html
<template>
  <div>
    <df-chang-yong-yu-xz
      changYongYuLx="30"
      changYongYuMc="用血备注"
      ref='changYongYuXz'
    />
    <df-button type="text" @click='open'>弹窗模式</df-button>
    <df-chang-yong-yu-xz 
      v-if="visible"
      v-model="visible"
      :dialogMoShi="true"
      dialogTitle="病历退回"
      confirmButton="退回"
      changYongYuLx="40"
      changYongYuMc="病历退回原因"
      @handleConfirm="handleConfirm"
    />
  </div>
</template>

<script>
export default {
  // 代码表daimalb=10323(常用语类型)
  // 10 医生嘱托  20 药品超量  30 用血备注
  // 40 病历退回原因  50 首页退回原因  

  data () {
    return {
      visible: false
    }
  },
  methods: {
    open(){
      this.visible = true
    },
    handleConfirm (val) {
      console.log(val, this.$refs.changYongYuXz.getChangYongYu())
    }
  }
}
</script>

```
:::

### ChangYongYuXz Attributes

ChangYongYuXz 基础属性
| 参数 |   说明          | 类型       | Attributes 默认值 |
|---- |------ |------ |-----------------------  |
| value | 绑定值 | boolean | - |  
| dialogMoShi | 弹窗模式(false表示表单模式) | boolean | false |  
| dialogTitle | 弹窗模式弹窗的标题 | string | 常用语维护 |
| confirmButton | 弹窗模式确定按钮文字 | string | 确定 |
| changYongYuLx | 传入的常用语类型(具体请看代码表daimalb=10323) | string | - |
| changYongYuMc | 表单的文字(自动输入) | string | - |

### ChangYongYuXz Events

| 方法 |   说明          | 类型       | 回调参数 |
|---- |------ |------ |-----------------------  |
| handleConfirm | 弹窗模式点击确定回调事件 | function | - |
