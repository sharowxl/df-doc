<!-- @format -->

### FuHeYiZhuSouSuo 复合医嘱搜索

#### 基础用法

:::demo

```html
<template>
  <df-fu-he-yi-zhu-sou-suo
    v-model="value"
    :dynamicParam="dynamicParam"
    :props="props"
    :disabled="true"
    @tabChange="handleTabChange"
    @selectChange="handleSelect"
    :style="{
      width: '300px'
    }"
  >
  </df-fu-he-yi-zhu-sou-suo>
</template>
<script>
  export default {
    name: 'demo1',
    data() {
      return {
        value: {
          YIZHUXMID: '1234',
          YIZHUXMMC: '测试传值',
        },
        props: {
          key: 'YIZHUXMID',
          value: 'YIZHUXMMC',
        },
        dynamicParam: {
          peiZhiId: '基础公用_住院医嘱开立',
          fuWuTjMc: '住院医嘱开立',
          dangQianYe: 1,
          meiYeTs: 100,
          shiFouFy: 1,
          chaXunCs: {
            SHURUMLX: 'ShuRuMa1',
            SHURUMA: '',
            ZHIGONGID: 'DBA',
            KESHIID: '6626',
            YUANQUID: '1',
            YIZHUSYDX: '1',

            XIYAOYYID: '050105',
            CHENGYAOYYID: '050104',
            CAOYAOYYID: '050102',
            WEICAIYYID: null,

            XIYAOYYIDS: '050105',
            CHENGYAOYYIDS: '050104',
            CAOYAOYYIDS: '050102',
            WEICAIYYIDS: null,

            YAOPINLX1: '1',
            YAOPINLX2: '2',
            YAOPINLX3: '0',
            YAOPINLX4: '0',
          },
        },
      };
    },
    methods: {
      handleSelect(val) {
        console.log('handleSelect', val);
        this.value = val;
      },
      handleTabChange(e) {
        console.log('handleTabChange', e);
      },
    },
    created() {},
  };
</script>
```

:::

#### 自定义 tabs

自定义搜索后 tab 的显示项配置及顺序

:::demo

```html
<template>
  <df-form inline>
    <df-form-item label="自定义tab">
      <df-switch
        v-model="changYong"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </df-switch>
    </df-form-item>
    <span>｜</span>
    <df-form-item label="仅显示指定类型：">
      <df-switch
        v-model="onlyShowExist"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </df-switch>
    </df-form-item>
    <span>｜</span>
    <df-form-item label="显示类型：">
      <df-checkbox-group v-model="tabsOptions">
        <df-checkbox v-for="item in options" :label="item" :key="item"
          >{{item}}</df-checkbox
        >
      </df-checkbox-group>
    </df-form-item>
    <span>｜</span>
    <df-button @click="handleReorder"> 重新排序 </df-button>
  </df-form>
  <df-fu-he-yi-zhu-sou-suo
    v-model="value"
    :dynamicParam="dynamicParam"
    :popperWidth="1020"
    :props="props"
    :tabsOptions="tabsOptions"
    :onlyShowExist="onlyShowExist"
    :customerTabs="changYong ? customerTabs : []"
    :style="{
      width: '300px'
    }"
  >
  </df-fu-he-yi-zhu-sou-suo>
</template>
<script>
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  export default {
    name: 'CustomerTabs',
    data() {
      return {
        value: {
          YIZHUXMID: '',
          YIZHUXMMC: '',
        },
        props: {
          key: 'YIZHUXMID',
          value: 'YIZHUXMMC',
        },
        options: ['药品', '诊疗', '组套', '检查', '检验'],
        tabsOptions: ['药品', '组套'],
        onlyShowExist: false,
        changYong: false,
        customerTabs: [
          {
            tabName: '单位为【支】的',
            /**
             * @param {Object} dataItem
             * @param {String} tabName
             * @return {Boolean}
             */
            filter: function(dataItem, tabName) {
              console.log({ dataItem, tabName });
              return dataItem.BAOZHUANGDW === '支';
            },
          },
        ],
        dynamicParam: {
          peiZhiId: '基础公用_住院医嘱开立',
          fuWuTjMc: '住院医嘱开立',
          dangQianYe: 1,
          meiYeTs: 100,
          shiFouFy: 1,
          chaXunCs: {
            SHURUMLX: 'ShuRuMa1',
            SHURUMA: '',
            ZHIGONGID: 'DBA',
            KESHIID: '6626',
            YUANQUID: '1',
            YIZHUSYDX: '1',

            XIYAOYYID: '050105',
            CHENGYAOYYID: '050104',
            CAOYAOYYID: '050102',
            WEICAIYYID: null,

            XIYAOYYIDS: '050105',
            CHENGYAOYYIDS: '050104',
            CAOYAOYYIDS: '050102',
            WEICAIYYIDS: null,

            YAOPINLX1: '1',
            YAOPINLX2: '2',
            YAOPINLX3: '0',
            YAOPINLX4: '0',
          },
        },
      };
    },
    methods: {
      handleReorder() {
        this.options = shuffleArray([...this.options]);
        this.tabsOptions = [];
      },
    },
    created() {},
  };
</script>
```

:::

#### 多方案切换

同 [page-dynamic](/#/professional/pageDynamic/) 组件使用方式

:::demo

```html
<template>
  <df-fu-he-yi-zhu-sou-suo
    v-model="value"
    :dynamicParam="dynamicParam"
    :props="props"
    :placeholder="placeholder"
    :special-char="specialChar"
    :all-special-chars="specialChars"
    @change-to-special="changeToSpecial"
    :style="{
      width: '300px'
    }"
  >
  </df-fu-he-yi-zhu-sou-suo>
</template>
<script>
  export default {
    name: 'mutilPlan',
    data() {
      return {
        specialChar: '-',
        specialChars: ['-', '/'],
        value: {
          YIZHUXMID: '',
          YIZHUXMMC: '',
        },
        props: {
          key: 'YIZHUXMID',
          value: 'YIZHUXMMC',
        },
        dynamicParam: {
          peiZhiId: '基础公用_住院医嘱开立',
          fuWuTjMc: '住院医嘱开立',
          dangQianYe: 1,
          meiYeTs: 100,
          shiFouFy: 1,
          chaXunCs: {
            SHURUMLX: 'ShuRuMa1',
            SHURUMA: '',
            ZHIGONGID: 'DBA',
            KESHIID: '6626',
            YUANQUID: '1',
            YIZHUSYDX: '1',

            XIYAOYYID: '050105',
            CHENGYAOYYID: '050104',
            CAOYAOYYID: '050102',
            WEICAIYYID: null,

            XIYAOYYIDS: '050105',
            CHENGYAOYYIDS: '050104',
            CAOYAOYYIDS: '050102',
            WEICAIYYIDS: null,

            YAOPINLX1: '1',
            YAOPINLX2: '2',
            YAOPINLX3: '0',
            YAOPINLX4: '0',
          },
        },
      };
    },
    computed: {
      placeholder() {
        if (this.specialChar === '-') {
          return `输入/切换到模式二`;
        } else {
          return `输入-切换到模式一`;
        }
      },
    },
    methods: {
      changeToSpecial(char) {
        // 切换至特殊字符方案
        console.log('changeToSpecial', [char]);
        this.specialChar = char;
      },
    },
    created() {},
  };
</script>
```

:::

### 属性

| 参数名        | 说明                                                                                                         | 类型            | 默认值                      | 必填 |
| ------------- | ------------------------------------------------------------------------------------------------------------ | --------------- | --------------------------- | ---- |
| v-model       | 绑定的值                                                                                                     | Object/String   | /                           | √    |
| dynamicParam  | 接口参数，参考基础用法中的实例值                                                                             | Object          |                             | √    |
| customStyle   | 自定义样式                                                                                                   | Object          | {}                          | x    |
| popperWidth   | 弹出层宽度(设置宽度会自动设置 popper-append-to-body 为 false，因为用到原生 css 变量，挂到 body 拿不到变量了) | String/Number   | 1000px                      | x    |
| placeholder   | 输入框占位符                                                                                                 | String/Function | /                           | x    |
| props         | 字段对照关系                                                                                                 | Object          | {key: 'key',value: 'value'} | x    |
| special-chars | 在动态方案需要切换时，指定所有的特殊字符都是什么                                                             | Array           | -                           | x    |
| special-char  | 在动态方案切换时，用这个属性指定当前方案的特殊字符是什么                                                     | String          | -                           | x    |
| tabsOptions   | 指定显示的类型                                                                                               | Array\<String\> | []                          | x    |
| onlyShowExist | 仅显示指定的类型                                                                                             | Boolean         | false                       | x    |
| customerTabs  | 自定义显示列和数据筛选方法，[详情](#customertabs-can-shu-shuo-ming)                                          | Array\<Objcet\> | []                          | x    |
| 其他          | 其他参数参考 select 组件，此处不再赘述                                                                       | /               | /                           | /    |

### Events

| 方法名            | 说明                                                                                                                                    | 参数                        | 类型              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------- |
| tabChange         | 当前 tab 页发生变化                                                                                                                     | {tab: String,index: Number} | Object            |
| pageChange        | 当前分类页码发生变化                                                                                                                    | value                       | Number            |
| selectChange      | 选项发生变化                                                                                                                            | value                       | 同 v-model 值类型 |
| change-to-special | 在动态方案需要切换时，输入指定的字符，会派出事件`change-to-special`，附带一个参数，把这个参数传给组件，用于指定当前方案的特殊字符是什么 |                             | String            |

### 插槽

slot-scope 带出来值有

| 键名  | 类型   | 说明               |
| ----- | ------ | ------------------ |
| row   | Object | 当前行数据         |
| prop  | String | 当前列对应的字段名 |
| index | Number | 当前索引           |

:::demo

```html
<template>
  <df-fu-he-yi-zhu-sou-suo
    v-model="value"
    :dynamicParam="dynamicParam"
    :props="props"
    :style="{
      width: '300px'
    }"
  >
    <template slot-scope="scope" v-if="scope.prop === 'GUIGE'">
      {{scope.row.XIANGMULX + '--' + scope.index}}
    </template>
  </df-fu-he-yi-zhu-sou-suo>
</template>
<script>
  export default {
    name: 'demo2',
    data() {
      return {
        value: {
          YIZHUXMID: '1234',
          YIZHUXMMC: '测试传值',
        },
        props: {
          key: 'YIZHUXMID',
          value: 'YIZHUXMMC',
        },
        dynamicParam: {
          peiZhiId: '基础公用_住院医嘱开立',
          fuWuTjMc: '住院医嘱开立',
          dangQianYe: 1,
          meiYeTs: 100,
          shiFouFy: 1,
          chaXunCs: {
            SHURUMLX: 'ShuRuMa1',
            SHURUMA: '',
            ZHIGONGID: 'DBA',
            KESHIID: '6626',
            YUANQUID: '1',
            YIZHUSYDX: '1',

            XIYAOYYID: '050105',
            CHENGYAOYYID: '050104',
            CAOYAOYYID: '050102',
            WEICAIYYID: null,

            XIYAOYYIDS: '050105',
            CHENGYAOYYIDS: '050104',
            CAOYAOYYIDS: '050102',
            WEICAIYYIDS: null,

            YAOPINLX1: '1',
            YAOPINLX2: '2',
            YAOPINLX3: '0',
            YAOPINLX4: '0',
          },
        },
      };
    },
  };
</script>
```

:::

### 其他说明

#### customerTabs 参数说明

因为各项目类型显示列的配置来自接口，自定义的 tab 项无配置列，目前使用【全部】分类的显示列配置

```typescript
customerTabs = [
  {
    tabName: string,
    filter: <boolean>(dataItem: object, tabName: string) => {},
  },
];

/* 示例 */
customerTabs: [
  // 此列仅显示常用项目
  {
    tabName: '常用',
    filter: (data) => data.CHANGYONGBZ === 1,
  },
  // 此列仅显示包装单位为‘支’的
  {
    tabName: '单位为"支"',
    filter: (data) => data.BAOZHUANGDW === '支',
  },
];
```

#### 全键盘操作

| 功能            | 操作键                                       | 键盘码  |
| --------------- | -------------------------------------------- | ------- |
| 向右切换`tab`页 | <kbd>Tab</kbd>                               | 9       |
| 向左切换`tab`页 | <kbd>Shift</kbd>+<kbd>Tab</kbd>              | 16 + 9  |
| 左右切换分页 1  | <kbd>Left Arrow</kbd>/<kbd>Right Arrow</kbd> | 37 / 39 |
| 左右切换分页 2  | <kbd>Page Up</kbd>/<kbd>Page Down</kbd>      | 33 / 34 |

#### 注意事项 ⚠️

1、此组件的分页取决于`dynamicParam`参数中的`dangQianYe`和`meiYeTs`，搜索完成后暂不支持搜索下一页，如有需求，在`dynamicParam`中修改分页参数；

2、搜索结果展示的`Popper`中展示的分页只针对当前条件下的搜索结果，并按每页 10 条数据进行的前端分页，并随着`tab`切换动态计算当前`tab`下数据量及分页展示；
