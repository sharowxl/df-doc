## 业务组件方法

### 获取输入码
getShuRuMa(input, obj, vm, arr) 根据输入值和 vue 数据，自动设置输入码
参数： input, obj, vm, arr

`{input} [传入的值]` 

`{obj} [待设置输入码的数据对象]` 

`{vm} [当前的 vue 的 this 对象]` 

`{arr} [输入码字段的key，默认是 'shuRuMa1', 'shuRuMa2', 'shuRuMa3' ]`

**使用方式**

***tempalte 部分***
```html
<df-input
  v-model="formData.inputValue"
  @input="onInput"
/>
```

***js 部分***
```js
import { getShuRuMa } from '@df_scope/df-bui/lib/method-api'
export default {
  data () {
    return {
      formData: {
        inputValue: '',
        shuRuMa1: '',
        shuRuMa2: '',
        shuRuMa3: ''
      }
    }
  },
  methods: {
    getShuRuMa,
    onInput (val) {
      this.getShuRuMa(val, this.formData, this)
    }
  }
}
```

### 获取权限按钮组
getRightButtons(buttons, vm) 根据按钮组和 vue 数据，筛选出有权限的按钮组
参数： buttons, vm

`{buttons} [传入的按钮组]` 
格式： [{ name: '按钮名称', rightKey: '权限值(没有可不传)' }]

`{vm} [当前的 vue 的 this 对象]` 

**使用方式**

***tempalte 部分***
```html
<df-table-column
  fixed="right"
  width="110"
  type="buttons"
  button-type="text"
  :display-buttons-length="1"
  :set-buttons="(row,rowIndex)=>{
    const buttons = row.danJuZt === '1'
      ? [{ name: '编辑', rightKey: 'bianJi' }, { name: '删除' }]
      : [{ name: '查看' }, { name: '打印' }, { name: '冲红' }]
    return getRightButtons(buttons, this)
  }"
/>
```

***js 部分***
```js
import { getRightButtons } from '@df_scope/df-bui/lib/method-api'
export default {
  methods: {
    getRightButtons
  }
}
```


### 获取药品参数
getYaoPinParmas(options, vm)
参数： options, vm

`{Object} options`

`{Object} vm [当前的 vue 的 this 对象]`

`{Number} {options.linChuangSyBz} [临床使用标志]`

`{Number} {options.kuCunPbBz} [库存标志]`

`{Number} {options.daGuiGBz} [大规格标志]`

`{Number} {options.xiaoGuiGBz} [小规格标志]`

`{Number} {options.caoYaoXggBz} [草药小规格标志]`

`{Number} {options.keShiYpSzFs} [科室药品设置方式]`

`{Number} {options.yaoFangSyBz }- 药房使用标志]`

`{Number} {options.shiYongBz} [使用标志]`

`{Number} {options.tingYongBz} [停用标志]`

`{Number} {options.feiYongLlBz} [费用ll标志]`

`{Number} {options.xianZhiSyBz} [限制使用标志]`

`{Number} {options.feiLingChaJjYp} [非零差加价药品]`

`{Number} {options.jiZhenYyBz} [急诊用药标志]`

`{Number} {options.OTCBZ} [OTC标志]`

`{Number} {options.puTongYpBz} [普通药品标志]`

`{Number} {options.chuFangXz} [处方性质]`

`{Number} {options.yunYiYSyBz} [云医院使用标志]`

`{Number} {options.duLiFl} [毒理分类]`

`{Number} {options.yingYongId} [应用id]`

`{Number} {options.xiYaoYyId} [西药应用id]`

`{Number} {options.chengYaoYyId} [成药应用id]`

`{Number} {options.caoYaoYyId} [草药应用id]`

`{Number} {options.weiCaiYyId} [卫材应用id]`

`{Number} {options.kuCunGlLx} [库存管理类型]`

`{Number} {options.keShiId} [库存管理类型]`

**使用方式**
```js
import { getYaoPinParmas } from '@df_scope/df-bui/lib/method-api'
```

### 获取药品产地价格
getYaoPinCdJg(options, vm)
参数： options, vm  
返回值：`options.chengZuYzBz` 参数值有值时，返回数组`[]`格式，否则对象`{}`格式

`{Object} options`

`{Object} vm [当前的 vue 的 this 对象]`

`{Number} {options.linChuangSyBz} [临床使用标志]`

`{Number} {options.kuCunPbBz} [库存标志]`

`{Number} {options.daGuiGBz} [大规格标志]`

`{Number} {options.xiaoGuiGBz} [小规格标志]`

`{Number} {options.caoYaoXggBz} [草药小规格标志]`

`{Number} {options.keShiYpSzFs} [科室药品设置方式]`

`{Number} {options.yaoFangSyBz} [药房使用标志]`

`{Number} {options.shiYongBz} [使用标志]`

`{Number} {options.tingYongBz} [停用标志]`

`{Number} {options.feiYongLlBz} [费用ll标志]`

`{Number} {options.xianZhiSyBz} [限制使用标志]`

`{Number} {options.feiLingChaJjYp} [非零差加价药品]`

`{Number} {options.jiZhenYyBz} [急诊用药标志]`

`{Number} {options.OTCBZ} [OTC标志]`

`{Number} {options.puTongYpBz} [普通药品标志]`

`{Number} {options.chuFangXz} [处方性质]`

`{Number} {options.yunYiYSyBz} [云医院使用标志]`

`{Number} {options.duLiFl} [毒理分类]`

`{Number} {options.yingYongId} [应用id]`

`{Number} {options.xiYaoYyId} [西药应用id]`

`{Number} {options.chengYaoYyId} [成药应用id]`

`{Number} {options.caoYaoYyId} [草药应用id]`

`{Number} {options.weiCaiYyId} [卫材应用id]`

`{Number} {options.kuCunGlLx} [库存管理类型]`

`{Number} {options.keShiId} [库存管理类型]`

`{Number} {options.waiPeiBz} [外配标志]`

`{Number} {options.caiGouDz} [采购对照标志]`

`{Number} {options.jiaGeTx} [价格体系]`

`{Array} {options.zhangBuLbList} [账簿类别]`

`{String} {options.xingZhiSyBz} [限制使用标志]`

`{String} {options.feiYongXz} [费用性质]`

`{String} {options.zhiGongId} [职工ID]`

`{String} {options.keShiId_Input} [传入科室ID]`

`{String} {options.caoYaoKljYyId} [草药颗粒剂应用ID]`

`{String} {options.chengZuYzBz} [成组医嘱标志]`

`{String} {options.yiShengId} [医生id]`

`{String} {options.yiLiaoZId} [医疗组id]`

`{String} {options.bingQuId} [病区id]`

`{String} {options.menZhenZyBz} [门诊住院标志]`

**使用方式**
```js
import { getYaoPinCdJg } from '@df_scope/df-bui/lib/method-api'
```