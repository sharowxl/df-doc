### 结算页面相关展示患者信息 （ jieSuan ）

卡片形式展示患者信息

:::demo 将类型（type）绑定为 jieSuan 即可使用，提供 Change 事件在进行医保转换 诊断补录时触发

```html
<template>
  <div
    :style="{width:'100%', height:'100%',background:'#EBEAE8',padding:'10px'}"
  >
    <div :style="{width:'346px', height:'755px',background:'#EBEAE8'}">
      <div :style="{padding:'8px 0px 8px 0px',}">
        <df-card-reader v-model="cardNo" @change="handleChange" />
      </div>
      <div :style="{width:'346px', height:'655px',background:'#EBEAE8'}">
        <df-bing-ren-xx
          ref="jieSuan"
          :showZhenDuan="false"
          :patientInfo="patientInfo"
          @guanLiClick="guanLiClick"
          @change="change"
          @zhenDuanBlChange="zhenDuanBlChange"
          type="jieSuan"
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cardNo: '', // 卡号
        patientInfo: {},
      }
    },
    watch: {},
    methods: {
      change(patientInfo) {
        this.patientInfo = JSON.parse(JSON.stringify(patientInfo))
        console.log(this.$refs.jieSuan.getPatientInfo(), '通过ref获取')
        console.log(this.patientInfo, '出参返回')
      },
      // 档案管理
      guanLiClick(patientInfo) {
        console.log(patientInfo, '档案管理')
      },
      // 读卡
      handleChange(val) {
        if (val.caoZuoZt === 1 && val.dto_GY_BingRenXx) {
          this.patientInfo = val.dto_GY_BingRenXx
        }
      },
      //诊断补录change
      zhenDuanBlChange(patientInfo) {
        console.log(patientInfo, '全部信息')
        console.log(patientInfo.linChuangZd, '补录诊断')
      },
    },
  }
</script>
<style></style>
```

:::

### 挂号页面建档编辑 80% 基本信息 （ guaHao ）

建档编辑患者 80%的个人信息

:::demo 将类型（type）绑定为 guaHao 即可使用，提供 Change 事件在进行医保转换 保存时触发

```html
<template>
  <div
    :style="{width:'100%', height:'100%',background:'#EBEAE8',padding:'10px'}"
  >
    <div :style="{width:'346px', height:'755px',background:'#EBEAE8'}">
      <div :style="{padding:'8px 0px 8px 0px',}">
        <df-card-reader v-model="cardNo" @change="handleChange" />
      </div>
      <div :style="{width:'346px', height:'655px',background:'#EBEAE8'}">
        <df-bing-ren-xx
          ref="guaHao"
          :patientInfo="patientInfo"
          type="guaHao"
          @guanLiClick="guanLiClick"
          @change="change"
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cardNo: '', // 卡号
        patientInfo: {},
      }
    },
    watch: {},
    methods: {
      change(patientInfo) {
        this.patientInfo = patientInfo
        this.cardNo = this.patientInfo.jiuZhenKh
        console.log(this.$refs.guaHao.getPatientInfo(), '通过ref获取')
        console.log(patientInfo, '出参返回')
      },
      // 档案管理
      guanLiClick(patientInfo) {
        console.log(patientInfo, '档案管理')
      },
      // 读卡
      handleChange(val) {
        if (val.caoZuoZt === 1 && val.dto_GY_BingRenXx) {
          this.patientInfo = val.dto_GY_BingRenXx
        }
      },
    },
  }
</script>
<style></style>
```

:::

### 住院页面相关展示患者信息 zhuYuan ）

查看个人信息住院

:::demo 将类型（type）绑定为 zhuYuan 即可使用

```html
<template>
  <div
    :style="{width:'100%', height:'100%',background:'#EBEAE8',padding:'10px'}"
  >
    <div :style="{width:'346px', height:'755px',background:'#EBEAE8'}">
      <div :style="{padding:'8px 0px 8px 0px',}">
        <df-zhu-yuan-bing-ren-xz
          v-model="value"
          ref="zhuYuanBingRenXz"
          @change="changeInfo"
          :dataInfo="dataInfo"
          :zhuYuanShow="zhuYuanShow"
          :huLiJbShow="huLiJbShow"
          :contentWith="contentWith"
          placeholder="请输入姓名/床号/健康号/住院号"
        >
        </df-zhu-yuan-bing-ren-xz>
      </div>
      <div :style="{width:'346px', height:'655px',background:'#EBEAE8'}">
        <df-bing-ren-xx
          ref="zhuYuan"
          :patientInfo="patientInfo"
          type="zhuYuan"
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: {},
        dataInfo: {
          zaiYuanZt: '100',
          queryString: '',
          pageIndex: 1,
          pageSize: 10,
          yuJieSuanLx: '1', // zhuYuanShow为true 必填
          jieSuanFs: '0', // zhuYuanShow为true 必填
          chongSuanFw: '1', // zhuYuanShow为true 必填
          shangChuangBz: '1',// 非必填
          chongSuanBz: '1',// 非必填
          yiBaoJcBz: '1',// 非必填
          zhangHuBz: 0 // 非必填
        },
        zhuYuanShow: true,
        huLiJbShow: true,
        contentWith: 240,
        patientInfo: {},
      }
    },
    methods: {
      changeInfo(val) {
        console.log(val,'val')
        if(this.zhuYuanShow &&(!val.jieSuan1 || (val.jieSuan1 && JSON.stringify(val.jieSuan1) === '{}'))){
          if(!val.clearBz && JSON.stringify(val.jieSuan1) === '{}'){
            this.value = {}
            this.patientInfo ={}
            this.$refs.zhuYuanBingRenXz.clear()
          }
          return
        } 
        if (!val) {
          this.patientInfo = {}
        } else {
          this.patientInfo = val
        }
      },
    },
  }
</script>
<style></style>
```

:::

### 临床页面相关展示患者信息 （ linChuang ）

卡片形式展示患者信息

:::demo 将类型（type）绑定为 linChuang 即可使用，提供 Change 事件在进行医保转换

```html
<template>
  <div
    :style="{width:'100%', height:'100%',background:'#EBEAE8',padding:'10px'}"
  >
    <div :style="{width:'346px', height:'755px',background:'#EBEAE8'}">
      <div :style="{padding:'8px 0px 8px 0px',}">
        <df-card-reader v-model="cardNo" @change="handleChange" />
      </div>
      <div :style="{width:'346px', height:'655px',background:'#EBEAE8'}">
        <df-bing-ren-xx
          ref="linChuang"
          :patientInfo="patientInfo"
          :jiuZhenXx='jiuZhenXx'
          type="linChuang"
          @change="change"
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cardNo: '', // 卡号
        patientInfo: {},
        jiuZhenXx:{
          // jiuZhenRq:'', // 临床需外部传入 就诊日期
          // jiuZhenKsMc:'', // 临床需外部传入 就诊科室
          // jiuZhenYsXm:'', // 临床需外部传入 就诊医生
          // linChuangZd:'', // 临床需外部传入 门诊诊断
        }
      }
    },
    watch: {},
    methods: {
      change(patientInfo) {
        this.patientInfo = JSON.parse(JSON.stringify(patientInfo))
        console.log(this.$refs.linChuang.getPatientInfo(), '通过ref获取')
        console.log(this.patientInfo, '出参返回')
      },
      // 读卡
      handleChange(val) {
        if (val.caoZuoZt === 1 && val.dto_GY_BingRenXx) {
          this.patientInfo = val.dto_GY_BingRenXx
        }
      },
    },
  }
</script>
<style></style>
```

:::

### bingRenXx 属性

| 参数          | 说明                                                    | 类型    | 默认值  | 可选值                         |
| ------------- | ------------------------------------------------------- | ------- | ------- | ------------------------------ |
| patientInfo   | 患者信息                                                | Object  | -       | 
| jiuZhenXx   | 就诊信息                                                | Object  | -       | -----                          |
| type          | linChuang(门诊) zhuYuan（住院） guaHao(挂号)jieSuan(结算) | String  | jieSuan | linChuang/zhuYuan/guaHao/jieSuan |
| showDanBao    | 是否显示担保按钮                                        | Boolean | true    | true/false                     |
| showZhuanHuan | 是否显示转换                                            | Boolean | true    | true/false                     |
| showZhenDuan | 是否显示诊断                                            | Boolean | true    | true/false                     |

### bingRenXx Events

| 方法名           | 说明                                               | 参数             |
| ---------------- | -------------------------------------------------- | ---------------- |
| guanLiClick      | 点击档案管理触发                                   | 患者信息(Object) |
| change           | 保存建档、医保转换、患者信息发生改变时返回患者信息 | 患者信息(Object) |
| zhenDuanBlChange | 诊断补录 change 时候触发                           | 患者信息(Object) |

### bingRenXx methods

| 方法名         | 说明                     | 参数             |
| -------------- | ------------------------ | ---------------- |
| getPatientInfo | 用于外部主动获取患者信息 | 患者信息(Object) |
| bingRenXxFocus | 病人信息控件获取焦点     |                  |
