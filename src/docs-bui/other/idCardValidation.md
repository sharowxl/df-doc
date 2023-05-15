
### IdCardValidation 身份证工具类

#### 基础用法

:::demo

```html
<template>
  <div class="df-flex-between">
    <df-input class="df-mr8" v-model="input" placeholder="请输入身份证"></df-input>
    <df-button type="primary" @click="checkIDCard">校验</df-button>
  </div>
</template>

<script>
// 单文件引入
// import IdCardValidation from '@df_scope/df-bui/lib/id-card-validation'
// 全局引入 main.js
// import IdCardValidation from '@df_scope/df-bui/lib/id-card-validation'
// Vue.prototype.$IdCardValidation = IdCardValidation
export default {
    data () {
      return {
        input: '11010120220606381X'
      }
    },
  methods: {
   checkIDCard(){
    //   let {isValid,birth,xingbie,message} = IdCardValidation.checkIDCard(this.input)  // 单文件调用
      let {isValid,birth,xingbie,message} = this.$IdCardValidation.checkIDCard(this.input)  // 全局调用
      const success = `${'生日：' + birth + ',性别：' }`+ (xingbie === '1'?'男':'女')
      const alertMsg =  `身份证号码校验${isValid?'【通过】':"【失败】"},${isValid?success :"失败信息："+ message}`
      this.$alert(alertMsg, '校验结果', {
          showLink: true,
          confirmButtonText: '确定',
          callback: action => {
            console.log(action)
          }
        });
   }
  }
}
</script>

```

:::

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| checkIDCard | 验证身份证号码的合理性 以及返回出生日期 性别 | (id: string): object |id:身份证号15位或18位；object: {isValid: boolean,birth: sting,xingbie: string('1':男,'2':女),message: string}|

### IdentityCard 身份证信息

#### 基础用法

:::demo

```html
<template>
  <div class="df-flex-between">
    <df-input class="df-mr8" v-model="input" placeholder="请输入身份证"></df-input>
    <df-button type="primary" @click="checkIDCard">城市信息</df-button>
  </div>
</template>

<script>
// 单文件引入
// import IdentityCard from '@df_scope/df-bui/lib/identity-card'
// 全局引入 main.js
// import IdentityCard from '@df_scope/df-bui/lib/identity-card'
// Vue.prototype.$IdentityCard = IdentityCard
export default {
    data () {
      return {
        input: '11010120220606381X'
      }
    },
  methods: {
   async checkIDCard(){
    // let [shengId, shengMc, shiId, shiMc, xianId, xianMc] = await IdentityCard.getIdCardInfo(this.input)  // 单文件调用
      let [shengId, shengMc, shiId, shiMc, xianId, xianMc] = await this.$IdentityCard.getIdCardInfo(this.input)  // 全局调用
      const alertMsg =  `省份名称：${shengMc} 省份ID：${shengId} 市名称：${shiMc} 市ID：${shiId} 县名称：${xianMc} 县ID：${xianId}`
      this.$alert(alertMsg, '获取结果', {
          showLink: true,
          confirmButtonText: '确定',
          callback: action => {
            console.log(action)
          }
        });
   }
  }
}
</script>

```

:::

### Methods

| 方法名 | 说明 | 参数 | 参数说明|
| ---- | ---- | ---- |----|
| getIdCardInfo | 根据身份证号获取省市县信息 | (id: string): array\<string> |id:身份证号15位或18位；array:[ shengId, shengMc, shiId, shiMc, xianId, xianMc]|
