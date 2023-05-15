
### PiaoJuHeDui 票据核对



:::demo

```html
<template>
  <div>
    <df-button type="text" @click="visible = true">票据核对</df-button>
    <df-piao-ju-he-dui v-model="visible" :piao-ju-lx="piaoJuLx" :gong-zuo-z-id="gongZuoZId" :kuCun="kuCun"  @piaoJuLYSy="piaoJuLYSy"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      piaoJuLx:'1',
      gongZuoZId: '932734362392567808',
      kuCun:{},
      patientInfo:{}
    }
  },
  methods: {
    piaoJuLYSy(val) {
      console.log(val)
    }
  }
}
</script>

```

:::

### PiaoJuHeDui属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| value / v-model | 绑定值  | boolean |  — |
| data | 显示的票据领用数据  | array |  — |
| piao-ju-lx | 票据类型 | string |  - |
| shi-yong-zu | 使用组 | string |  - |
| gong-zuo-z-id | 工作站 | string |  true |

### Events

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| piaoJuLYSy | 当前票据领用使用信息 | (value:object) |
