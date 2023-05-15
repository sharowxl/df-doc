## 住院病人列表

### 基础用法

#### 住院病人列表

:::demo
```html
<template>
  <df-row style="height:700px;">
    <df-col class="df-full-height" :gutter="8" :span="8">
      <df-zhu-yuan-bing-ren-list
        ref="bingRenLb"
        yuanQuId="1"
        bingQuId="6403"
        yingYongId="120101"
        zaiYuanZt="100"
        v-model="selectBingRen"
      />
    </df-col>
    <df-col :span="16" style="height: 100%; overflow: auto">
      <pre>{{selectBingRen}}</pre>
      <df-button @click="editXinYz">修改新医嘱</df-button>

    </df-col>
  </df-row>
</template>
<script>
export default {
  name: 'ZhuYuanBingRenList',
  data () {
    return {
      selectBingRen:[],
      isXinYz: false
    }
  },
  methods: {
    clearSelect() {
      this.clearSelection()
    },
    editXinYz() {
      this.$refs.bingRenLb.changeNewAdvice('55027', true)
    }
  },
  mounted () {
  }
}
</script>
```
:::

### 自定义数据处理
:::demo
```html
<template>
  <df-row style="height:700px;">
    <df-col class="df-full-height" :gutter="8" :span="8">
      <df-zhu-yuan-bing-ren-list
        ref="bingRenLb"
        yuanQuId="1"
        bingQuId="6403"
        yingYongId="120101"
        zaiYuanZt="100"
        :formartData="formartData"
        v-model="selectBingRen"
      />
    </df-col>  
    <df-col :span="16" style="height: 100%; overflow: auto">
      <pre>{{selectBingRen}}</pre>
    </df-col>
  </df-row>
</template>
<script>
export default {
  name: 'ZhuYuanBingRenList',
  data () {
    return {
      selectBingRen:[]
    }
  },
  methods: {
    clearSelect() {
      this.clearSelection()
    },
    formartData(res) {
      return new Promise((resolve, reject) =>{
        resolve(
          res.filter(item=>{
            return item.dongJieBz !=='1'
          })
        )
      })
    }
  },
  mounted () {
  }
}
</script>
```
:::
#### 展开收起列表

:::demo
```html
<template>
  <df-row style="height:700px;">
    <df-layout 
      :mini-left="3"
      :left="8"
      @changed-to-mini-left="changeToMiniLeft"
      @restored-to-normal-left="resotredToNormalLeft"
    >
      <div slot='left' class='layout-left df-full-box'>
        <df-zhu-yuan-bing-ren-list
        ref="bingRenLb"
        yuanQuId="1"
        bingQuId="6403"
        yingYongId="120101"
        zaiYuanZt="100"
        :isMinLeft="isMinLeft"
        v-model="selectBingRen"
      />
      </div>
      <div class='layout-middle' style="height: 100%; overflow: auto">
        <pre>{{selectBingRen}}</pre>
      </div>
    </df-layout>
  </df-row>
</template>
<script>
export default {
  name: 'ZhuYuanBingRenList',
  data () {
    return {
      selectBingRen:[],
      isMinLeft: false
    }
  },
  methods: {
    clearSelect() {
      this.clearSelection()
    },
    changeToMiniLeft() {
      this.isMinLeft =  true
      console.log('this.isMinLeft', this.isMinLeft)
    },
    resotredToNormalLeft() {
      this.isMinLeft = false
    }
  },
  mounted () {
  }
}
</script>
```
:::

### 参数
| 参数      | 说明    | 值      |
|---------- |-------- |---------- |
|住院病人列表_是否全部选中 |1 全选 0 不全选|
|住院病人列表_列显示 | 表格列 | 床位/姓名
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| createdLoad | 是否一创建就加载数据 | boolean | true |
| value | 被选中的病人列表 | Array/object | - | - |
| multiple | 是否多选 | boolean | true/false | true |
| yuanQuId | 院区ID | string | — | - |
| yingYongId | 应用ID | string | — | - |
| bingQuId | 病区id根据病区id加载病人列表数据,若为空可自己选择某个病区进行数据查询 | string | — | - |
| loadClear | 【未实现】加载时是否清除选中状态 | boolean | true/false | true |
| zaiYuanZt | 在院状态/第一位在院/第二位预出院/第三位出院 | string | - | 100 |
| xuanZhongKzMs | 选中控制模式 | string | 1根据参数控制 0不根据参数控制不全选 2不根据参数控制全选 | 1 |
| formartData | 处理列表数据,需返回promise处理后的数据 | function | - | - |
| hasZhuYuanZt | 是否需要展示选择出住院，出院时间 | boolean | true/false | false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| loadList | 手动加载病人列表 | cb加载完成回调，可不传通过.then调用效果一致 |
| clearSelection | 清空表格选择 | - |

### Events
| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 选中病人发生变化触发 | list/bingRenXx根据单选多选返回不同 |
