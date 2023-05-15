
### 多列展示 设置页数（默认值）

适用于多列数据展示，做数据回填的操作。

:::demo在很多业务场景会有需要回填赋默认值，直接传入带有与数据分页下拉数据源相同
```html
<template>
  <df-page-dynamic
    :parameter="parameter"
    v-model="value"
    :props="props"
    @change="change">
  </df-page-dynamic>
</template>
<script>
const params = {
  'peiZhiId': '药库房字典_药品名称',
  'fuWuTjMc': '药品ID',
  'dangQianYe': 1,
  'shiFouFy': 1,
  'meiYeTs': null,
  'chaXunCs': {
    'KUCUNGLLX': '1100',
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': ''
  }
}
export default {
  data () {
    return {
      parameter: params,
      value: {YAOPINMC: '这是默认值', YAOPINID: 88},
      props: {
        key: 'YAOPINID',
        value: 'YAOPINMC'
      }
    }
  },
  methods: {
    change (val) {
      console.log(this.value, val)
    }
  }
}
</script>
```
:::


### 多列展示 默认页数（占位符）

:::demo
```html
<template>
  <df-page-dynamic
    :parameter="parameter"
    v-model="value"
    :props="props"
    @change="change"
    placeholder="我是占位符"
    width="250">
  </df-page-dynamic>
</template>

<script>
const params = {
  'peiZhiId': '药库房字典_药品规格单表',
  'fuWuTjMc': '规格名称跟类型按输入码和院区|只取大规格',
  'dangQianYe': 1,
  'meiYeTs': 20,
  'shiFouFy': 1,
  'chaXunCs': {
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': '',
    'KUCUNGLLX': '1100',
    'YUANQUID': '1'
  }
}

export default {
  data () {
    return {
      parameter: params,
      value: {BIEMINGMC: '这是默认值', GUIGEID: 88},
      props: {
        key: 'GUIGEID',
        value: 'BIEMINGMC'
      }
    }
  },
  methods: {
    change (val) {
      console.log(this.value, val)
    }
  }
}
</script>
```
:::

### 多列显示（无默认值）

:::demo
```html
<template>
  <df-page-dynamic
    :parameter="parameter"
    v-model="value"
    :props="props"
    @change="change"
    width="300"
    isShow>
  </df-page-dynamic>
</template>

<script>
const params = {
  "chaXunCs": {
    "SHURUMLX": "ShuRuMa1",
    "XIYAOYYID": "060101",
    "CHENGYAOYYID": "060101",
    "CAOYAOYYID": "060101",
    "WEICAIYYID": "060101",
    "KUCUNGLLX": "1101",
    "KESHIID": "",
    "KESHIYAOPINPZFS": "",
    "MENZHENJGTX": 1,
    "ZHANGBULB": "",
    "ISZHONGYAOPFKLDZ": null,
    "XITONGID": "06",
    "USERID": "DBA",
    "MENZHENZYBZ": null,
    "YUANQUID": "1",
    "FEIYONGXZ": "",
    "XIANZHISYBZ": "",
    "QUANXIANKZMS": null,
    "FENLEILB": "1",
    "SHURUMA": "W"
  },
  "peiZhiId": "公用药品产地价格",
  "fuWuTjMc": "取通用名_别名跟产地|药品类型|按分类类别|不要求有库存数量|不取暂停药品|本院区使用",
  "dangQianYe": 1,
  "shiFouFy": 1,
  "meiYeTs": 20
}

export default {
  data () {
    return {
      parameter: params,
      value: {},
      props: {
        key: 'BIEMINGID',
        value: 'BIEMINGMC'
      }
    }
  },
  methods: {
    change (val) {
      console.log(this.value, val)
    }
  }
}
</script>
```
:::

### 方案切换

模拟 winform 中在动态查询中输入指定的特殊字符，切换至不同的查询方案。

:::demo 传入所有的特殊字符`all-special-chars`，并配合组件的外派事件`change-to-special`附带的参数，作为新的参数`special-char`返回给组件，让组件知道现在用的是哪个方案即可，注意现在`parameter`、`props`都不再是固定的了，需要根据`change-to-special`附带的参数`special-char`来做一个判断。

```html
<template>
  <div>
    <df-page-dynamic
      :parameter="parameter"
      v-model="value"
      :props="props"
      :special-char="specialChar"
      :all-special-chars="['/']"
      @change-to-special="changeToSpecial"
    />
  </div>
</template>

<script>
const paramsNormal = {
  'peiZhiId': '药库房字典_药品名称',
  'fuWuTjMc': '药品ID',
  'dangQianYe': 1,
  'shiFouFy': 1,
  'meiYeTs': 5,
  'chaXunCs': {
    'KUCUNGLLX': '1100',
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': ''
  }
}
const paramsSpecial = {
  'peiZhiId': '药库房字典_药品规格单表',
  'fuWuTjMc': '规格名称跟类型按输入码和院区|只取大规格',
  'dangQianYe': 1,
  'meiYeTs': 20,
  'shiFouFy': 1,
  'chaXunCs': {
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': '',
    'KUCUNGLLX': '1100',
    'YUANQUID': '1'
  }
}

export default {
  data () {
    return {
      specialChar: '',
      value: {},
      // 正常方案
      paramsNormal: paramsNormal,
      propsNormal: {
        key: 'YAOPINID',
        value: 'YAOPINMC'
      },
      // 特殊方案
      paramsSpecial: paramsSpecial,
      propsSpecial: {
        key: 'GUIGEID',
        value: 'BIEMINGMC'
      }
    }
  },
  computed: {
    parameter () {
      if (this.specialChar === '/') return this.paramsSpecial
      else return this.paramsNormal
    },
    props () {
      if (this.specialChar === '/') return this.propsSpecial
      else return this.propsNormal
    }
  },
  methods: {
    changeToSpecial (char) { // 切换至特殊字符方案
      console.log('changeToSpecial', [char])
      this.specialChar = char
    }
  }
}
</script>
```
:::

### 方案切换（超过 2 种方案时）

当方案切换超过 2 种时，需要稍微拓展一下组件传入的数据。

:::demo 方案超过 2 种时，使用方式没有变化，注意`parameter`、`props`需要多处理一些情况即可。

```html
<template>
  <div>
    <df-page-dynamic
      :parameter="parameter"
      v-model="value"
      :props="props"
      :special-char="specialChar"
      :all-special-chars="['/', '-']"
      @change-to-special="changeToSpecial">
    </df-page-dynamic>
  </div>
</template>

<script>
const paramsNormal = {
  'peiZhiId': '药库房字典_药品名称',
  'fuWuTjMc': '药品ID',
  'dangQianYe': 1,
  'shiFouFy': 1,
  'meiYeTs': 5,
  'chaXunCs': {
    'KUCUNGLLX': '1100',
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': ''
  }
}
const paramsSpecial1 = {
  'peiZhiId': '药库房字典_药品规格单表',
  'fuWuTjMc': '规格名称跟类型按输入码和院区|只取大规格',
  'dangQianYe': 1,
  'meiYeTs': 20,
  'shiFouFy': 1,
  'chaXunCs': {
    'SHURUMLX': 'ShuRuMa1',
    'SHURUMA': '',
    'KUCUNGLLX': '1100',
    'YUANQUID': '1'
  }
}
const paramsSpecial2 = {
  'chaXunCs': {
    'SHURUMLX': 'ShuRuMa1',
    'XIYAOYYID': '060101',
    'CHENGYAOYYID': '060101',
    'CAOYAOYYID': '060101',
    'WEICAIYYID': '060101',
    'KUCUNGLLX': '1101',
    'KESHIID': '',
    'KESHIYAOPINPZFS': '',
    'MENZHENJGTX': 1,
    'ZHANGBULB': '',
    'ISZHONGYAOPFKLDZ': null,
    'XITONGID': '06',
    'USERID': 'DBA',
    'MENZHENZYBZ': null,
    'YUANQUID': '1',
    'FEIYONGXZ': '',
    'XIANZHISYBZ': '',
    'QUANXIANKZMS': null,
    'FENLEILB': '1',
    'SHURUMA': 'W'
  },
  'peiZhiId': '公用药品产地价格',
  'fuWuTjMc': '取通用名_别名跟产地|药品类型|按分类类别|不要求有库存数量|不取暂停药品|本院区使用',
  'dangQianYe': 1,
  'shiFouFy': 1,
  'meiYeTs': 20
}

export default {
  data () {
    return {
      specialChar: '',
      value: {},
      // 正常的动态方案
      paramsNormal: paramsNormal,
      propsNormal: {
        key: 'YAOPINID',
        value: 'YAOPINMC'
      },
      // 特殊字符动态方案一
      paramsSpecial1: paramsSpecial1,
      propsSpecial1: {
        key: 'GUIGEID',
        value: 'BIEMINGMC'
      },
      // 特殊字符动态方案二
      paramsSpecial2: paramsSpecial2,
      propsSpecial2: {
        key: 'BIEMINGID',
        value: 'BIEMINGMC'
      }
    }
  },
  computed: {
    parameter () {
      if (this.specialChar === '/') return this.paramsSpecial1
      else if (this.specialChar === '-') return this.paramsSpecial2
      else return this.paramsNormal
    },
    props () {
      if (this.specialChar === '/') return this.propsSpecial1
      else if (this.specialChar === '-') return this.propsSpecial2
      else return this.propsNormal
    }
  },
  methods: {
    changeToSpecial (char) { // 切换至特殊字符方案
      console.log('changeToSpecial', [char])
      this.specialChar = char
    }
  }
}
</script>
```
:::

### pageDynamic 属性
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 选中项 | - | - |
| placeholder | 占位符设置| - | - |
| parameter | 请求参数提 | - | -  |
| props | {key,value} key是数据中的唯一标识 value是想要获取的label数据| Object | - |
| width | 组件dynamic的宽度 | String | - |
| isShow | 组件销毁数据清空 | Boolean | true |
| disabled| 组件是否开启禁用状态| Boolean | - |
| close-dropdown-when-empty | /*新增*/ 当输入框聚焦时，如果输入值为空，是否要禁止下拉框的展开 | boolean | true |
| special-chars | /*新增*/ 在动态方案需要切换时，指定所有的特殊字符都是什么 | array | - |
| special-char | /*新增*/ 在动态方案切换时，用这个属性指定当前方案的特殊字符是什么 | string | - |

### pageDynamic Events
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | event |
| blur | 使 input 失去焦点，并隐藏下拉框 | event |
| change | 当选中option值发生改变时 | value |
| change-to-special | 在动态方案需要切换时，输入指定的字符，会派出事件`change-to-special`，附带一个参数，把这个参数传给组件，用于指定当前方案的特殊字符是什么 | specialChar |

### pageDynamic Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearDataList | 清空表头list | - |
| getRefPageDynamic | 获取pageSelect组件的ref | - |
| focus | 使select获取焦点| - |
| blur | 使select失去焦点| - |
| switchToSpecialChar | 使select主动切换至某个特殊字符 | 要切换到的特殊字符(string) |
             