
### PiaoJuHelper 票据工具类

#### 基础用法


:::demo

```html
<template>
  <div>
    <df-button type="text" @click="getPiaoJuLyByGlobal">获取票据领用</df-button>
  </div>
</template>

<script>
// 单文件引入
// import { PiaoJuHelper } from '@df_scope/df-bui';
// const piaoJuHelper = new PiaoJuHelper()
export default {
  methods: {
    getPiaoJuLyByGlobal() {
      this.$DfPiaoJuHelper.getPiaoJuLy('4',null,'932734362392567808').then(res=>{
         this.$alert(res, '票据领用信息', {
          showLink: true,
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      console.log(res)
      })
    },
    getPiaoJuLyBySingle(){
      piaoJuHelper.getPiaoJuLy('2',null,'932734362392567808').then(res=>{
        console.log(res)
      })
    }
  }
}
// 全局引入 mian.js 文件
// import { PiaoJuHelper } from '@df_scope/df-bui';
// Vue.prototype.$PiaoJuHelper = new PiaoJuHelper();

</script>

```

:::

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| getPiaoJuLy | 获取票据领用 | (piaoJuLx: string, shiYongZu: string, gongZuoZId: string): Promise |piaoJuLx: 票据类型, shiYongZu: 使用组, gongZuoZId: 工作站ID|
| setPiaoJuLy | 设置票据领用 | (piaoJuLx: string, shiYongZu: string, gongZuoZId: string): Promise |piaoJuLx: 票据类型, shiYongZu: 使用组, gongZuoZId: 工作站ID|