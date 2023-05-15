## PageSelect 下拉分页 

在 df-select 基础上进行的改造，将下拉选项改为分页展示。

### 基础用法不显示表头

适用广泛的基础用法。

:::demo 动态下拉组件`v-model`属性可以获取当前选中的值，通过传入参数完成下拉的基础用法详情见demo。

```html
<template>
  <df-page-select
    v-model="value"
    selectLabel="label"
    valueKey="valueKey"
    @change="change"
    @focus="focus"
    @blur="blur"
    :pageSize="pageSize"
    :querySelectList="querySelectList"
    currentPlaceholder="点击开启选择"
  >
    <template v-slot="scope">
      <df-option
        v-for="item in scope.list"
        :key="item.valueKey"
        :value="item"
        :label="item.label"
      />
    </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {},
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          label: '胸部左侧X光',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          label: '胸透',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          label: '胸部右侧X光',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          label: '抽血检测',
          price: '34',
          size: '√'
        }
      ],
      column: [
        {width: 20, label: '收费名称', prop: 'label'},
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```
:::

### 多页下拉

适用于大量数据数据查看摘用信息的时候可以进行使用。

:::demo 详情见demo

```html
<template>
  <df-page-select
    v-model='value'
    :pageSize="pageSize"
    valueKey="valueKey"
    selectLabel="label"
    @change="change"
    @focus="focus"
    @blur="blur"
    :querySelectList="querySelectList" >
      <template v-slot="scope">
        <df-option
          v-for="item in scope.list"
          :key="item.valueKey"
          :value="item"
          :label="item.label"
        />
      </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {},
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          label: '胸部左侧X光',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          label: '胸透',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          label: '胸部右侧X光',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          label: '抽血检测',
          price: '34',
          size: '√'
        }, {
          valueKey: '005',
          label: '核算检测',
          price: '99',
          size: '√'
        },
        {
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        },
        {
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        },
        {
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√'
        },
        {
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }
      ],
      column: [
        {width: 20, label: '收费名称', prop: 'label'},
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```


:::


### 显示表头column（带默认值）

适用于多列数据展示。

:::demo 需要在插槽内部插入df-select-column列组件 传入`optionIndex` `width` `label` `key` `prop`来渲染出表头header

```html
<template>
  <df-page-select
    v-model='value'
    table
    :pageSize="pageSize"
    selectLabel="label"
    @change="change"
    @focus="focus"
    @blur="blur"
    valueKey="valueKey"
    :querySelectList="querySelectList" >
      <template v-slot="scope">
        <df-option
          v-for="(item, index) in scope.list"
          :key="item.valueKey"
          :value="item"
          :label="item.label"
        >
          <df-select-column
            :optionIndex="index"
            :width="col.width * 6"
            v-for="col in scope.column"
            :label="col.label"
            :key="col.prop"
            :prop="col.prop"
          />
        </df-option>
      </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {
        valueKey: '024',
        label: '酒精检测'
      },
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          label: '胸部左侧X光',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          label: '胸透',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          label: '胸部右侧X光',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          label: '抽血检测',
          price: '34',
          size: '√'
        }, {
          valueKey: '005',
          label: '核算检测',
          price: '99',
          size: '√'
        },
        {
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        },
        {
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        },
        {
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√'
        },
        {
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }
      ],
      column: [
        {width: 20, label: '收费名称', prop: 'label'},
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```


:::


### 自定义宽度（带默认值）

适用于多列数据展示。

:::demo 提供了width属性 可以直接控制 `input` 宽度

```html
<template>
  <df-page-select
    width="300px"
    v-model='value'
    table
    :pageSize="pageSize"
    selectLabel="label"
    @change="change"
    @focus="focus"
    @blur="blur"
    :isShow="true"
    valueKey="valueKey"
    :querySelectList="querySelectList" >
      <template v-slot="scope">
        <df-option
          v-for="(item, index) in scope.list"
          :key="item.valueKey"
          :value="item"
          :label="item.label"
        >
          <df-select-column
            :optionIndex="index"
            :width="col.width*5"
            v-for="col in scope.column"
            :label="col.label"
            :key="col.prop"
            :prop="col.prop"
          />
        </df-option>
      </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {
        valueKey: '024',
        label: '1111'
      },
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          label: '胸部左侧X光',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          label: '胸透',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          label: '胸部右侧X光',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          label: '抽血检测',
          price: '34',
          size: '√'
        }, {
          valueKey: '005',
          label: '核算检测',
          price: '99',
          size: '√'
        },
        {
          valueKey: '021',
          label: '头部检测',
          price: '25',
          size: '√'
        },
        {
          valueKey: '022',
          label: '核酸检测',
          position: '西湖区',
          price: '22',
          size: '√'
        },
        {
          valueKey: '023',
          label: '血液检测',
          price: '21',
          size: '√'
        },
        {
          valueKey: '024',
          label: '酒精检测',
          price: '29',
          size: '√'
        }
      ],
      column: [
        {width: 20, label: '收费名称', prop: 'label'},
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```
:::


### 支持添加背景色和图标

可以指定列的背景色和图标展示。

:::demo 按照如下例子中所示, 给 column 配置中添加属性 backgroundColor 和 icons 属性即可, backgroundColor 会直接根据字段来判断需要什么背景色, icons 会将字段用逗号分成数组, 按照下标的值是否为 '1' 来判断需要展示哪些图标, 图标的配置中, key 表示图标的汉字, value 表示图标的颜色

```html
<template>
  <df-page-select
    width="300px"
    v-model='value'
    table
    :pageSize="pageSize"
    selectLabel="label"
    @change="change"
    @focus="focus"
    @blur="blur"
    :isShow="true"
    valueKey="valueKey"
    :querySelectList="querySelectList" >
      <template v-slot="scope">
        <df-option
          v-for="(item, index) in scope.list"
          :key="item.valueKey"
          :value="item"
          :label="item.label"
        >
          <df-select-column
            :optionIndex="index"
            :width="col.width*5"
            v-for="col in scope.column"
            :label="col.label"
            :key="col.prop"
            :prop="col.prop"
            :backgroundColor="col.backgroundColor"
            :icons="col.icons"
          />
        </df-option>
      </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {},
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          XIANSHILX: '西',
          label: '胸部左侧X光',
          TUBIAO: '1,0,0,0,1,1',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          XIANSHILX: '草',
          label: '胸透',
          TUBIAO: '0,0,0,0,1,0',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          XIANSHILX: '成',
          label: '胸部右侧X光',
          TUBIAO: '0,1,0,0,0,1',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          XIANSHILX: '西',
          label: '抽血检测',
          TUBIAO: '0,0,1,0,0,0',
          price: '34',
          size: '√'
        }, {
          valueKey: '005',
          XIANSHILX: '草',
          label: '核算检测',
          TUBIAO: '0,0,0,0,0,0',
          price: '99',
          size: '√'
        },
        {
          valueKey: '021',
          XIANSHILX: '成',
          label: '头部检测',
          TUBIAO: '0,0,0,1,0,0',
          price: '25',
          size: '√'
        },
        {
          valueKey: '022',
          XIANSHILX: '西',
          label: '核酸检测',
          TUBIAO: '0,0,0,0,0,0',
          position: '西湖区',
          price: '22',
          size: '√'
        },
        {
          valueKey: '023',
          XIANSHILX: '草',
          label: '血液检测',
          TUBIAO: '0,1,1,0,0,0',
          price: '21',
          size: '√'
        },
        {
          valueKey: '024',
          XIANSHILX: '成',
          label: '酒精检测',
          TUBIAO: '0,0,1,0,0,0',
          price: '29',
          size: '√'
        }
      ],
      column: [
        {
          width: 8,
          label: '分类',
          prop: 'XIANSHILX',
          backgroundColor: [{
            key: '西',
            value: '#fdf2d1'
          }, {
            key: '成',
            value: '#fbe6dc'
          }, {
            key: '草',
            value: '#e0eed5'
          }]
        },
        {width: 20, label: '收费名称', prop: 'label'},
        {
          width: 20,
          label: '图标',
          prop: 'TUBIAO',
          icons: [{
            key: '毒',
            value: '#af90f8'
          }, {
            key: '麻',
            value: '#af90f8'
          }, {
            key: '精I',
            value: '#af90f8'
          }, {
            key: '精II',
            value: '#af90f8'
          }, {
            key: '跌',
            value: '#f2a25c'
          }, {
            key: '危',
            value: '#ed6a66'
          }]
        },
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```
:::
### 支持添加纯图标

可以指定列的展示一个纯图标。

:::demo 和上面给 column 配置中添加属性 icons 属性的使用但是类似, 在这里使用 pureIcons来标识纯图标, 每一项的 key 标识图标的类名, value 表示图标的颜色 , backgroundColor 会直接根据字段来判断需要什么背景色, icons 会将字段用逗号分成数组, 按照下标的值是否为 '1' 来判断需要展示哪些图标

```html
<template>
  <df-page-select
    width="300px"
    v-model='value'
    table
    :pageSize="pageSize"
    selectLabel="label"
    @change="change"
    @focus="focus"
    @blur="blur"
    :isShow="true"
    valueKey="valueKey"
    :querySelectList="querySelectList" >
      <template v-slot="scope">
        <df-option
          v-for="(item, index) in scope.list"
          :key="item.valueKey"
          :value="item"
          :label="item.label"
        >
          <df-select-column
            :optionIndex="index"
            :width="col.width*5"
            v-for="col in scope.column"
            :label="col.label"
            :key="col.prop"
            :prop="col.prop"
            :pureIcons="col.pureIcons"
          />
        </df-option>
      </template>
  </df-page-select>
</template>

<script>
export default {
  data () {
    return {
      value: {},
      pageSize: 5,
      list: [
        {
          valueKey: '001',
          XIANSHILX: '西',
          label: '胸部左侧X光',
          CHUNTUBIAO: '1,0,0,0,1,1',
          price: '38',
          size: '√'
        },
        {
          valueKey: '002',
          XIANSHILX: '草',
          label: '胸透',
          CHUNTUBIAO: '0,0,0,0,1,0',
          price: '36',
          size: '√'
        },
        {
          valueKey: '003',
          XIANSHILX: '成',
          label: '胸部右侧X光',
          CHUNTUBIAO: '0,1,0,0,0,1',
          price: '35',
          size: '√'
        },
        {
          valueKey: '004',
          XIANSHILX: '西',
          label: '抽血检测',
          CHUNTUBIAO: '0,0,1,0,0,0',
          price: '34',
          size: '√'
        }, {
          valueKey: '005',
          XIANSHILX: '草',
          label: '核算检测',
          CHUNTUBIAO: '0,0,0,0,0,0',
          price: '99',
          size: '√'
        },
        {
          valueKey: '021',
          XIANSHILX: '成',
          label: '头部检测',
          CHUNTUBIAO: '0,0,0,1,0,0',
          price: '25',
          size: '√'
        },
        {
          valueKey: '022',
          XIANSHILX: '西',
          label: '核酸检测',
          CHUNTUBIAO: '0,0,0,0,0,0',
          position: '西湖区',
          price: '22',
          size: '√'
        },
        {
          valueKey: '023',
          XIANSHILX: '草',
          label: '血液检测',
          CHUNTUBIAO: '0,1,1,0,0,0',
          price: '21',
          size: '√'
        },
        {
          valueKey: '024',
          XIANSHILX: '成',
          label: '酒精检测',
          CHUNTUBIAO: '0,0,1,0,0,0',
          price: '29',
          size: '√'
        }
      ],
      column: [
        {
          width: 8,
          label: '分类',
          prop: 'XIANSHILX'
        },
        {width: 20, label: '收费名称', prop: 'label'},
        {
          width: 20,
          label: '纯图标',
          prop: 'CHUNTUBIAO',
          pureIcons: [{
            key: 'correct',
            value: '#af90f8'
          }, {
            key: 'download',
            value: '#af90f8'
          }, {
            key: 'setting-line',
            value: '#af90f8'
          }, {
            key: 'print',
            value: '#af90f8'
          }, {
            key: 'history-linear',
            value: '#f2a25c'
          }, {
            key: 'top-circle',
            value: '#ed6a66'
          }]
        },
        {width: 20, label: '位置', prop: 'position'},
        {width: 20, label: '价格', prop: 'price'},
        {width: 20, label: '是否', prop: 'size'}
      ]
    }
  },
  methods: {
    querySelectList ({page, pagesize, keyword}) {
      // page: 当前页, pagesize: 每页条数, keyword: 输入框内的搜索关键字
      console.log(page, pagesize, keyword)
      // 首先根据输入框内的搜索关键字筛选出符合条件的项
      const filterList = this.list.filter(item => item.label.includes(keyword))
      // 然后根据当前页和每页条数, 计算出这一页的结果
      const currentPageList = filterList.slice((page - 1) * pagesize, page * pagesize)
      return new Promise((resolve, reject) => {
        resolve({
          list: currentPageList,
          total: filterList.length,
          column: this.column
        })
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      console.log(val)
    },
    focus (event) {
      console.log('获取焦点')
    },
    blur (event) {
      console.log('失去焦点')
    }
  }
}
</script>
```
:::

### DfSelectPage Attributes
| 参数           | 说明                                                                                           | 类型          | 默认值 |  
| -------------- | ---------------------------------------------------------------------------------------------- | ------------- | ------ |
| v-model/value  | 当前value值                                                                               | -             | -      |
| width      | 可以控制PageSelect组件的宽度                                                                      | String |     |
| table          | 是否显示表头                                                                                   | boolean       | false  |
| pageSize | 每页条数                                                                                       | number        | 20     |
| querySelectList  | 处理请求相应体，入参:(请求返回的数据){list,column,total}，出参：object {page,pagesize,keyword} | function      | -      |
| valueKey       | 获取每一项option的唯一标识                                                                     | String/Number | -      |
| selectLabel       | 选中项lable的key值(必填项)                                                                     | String | - 必填    |
| isShow       | 组件销毁清空list colunm                                                                     | Boolean |     |
| inner-input-inject-style | /*新增*/ 内层输入框的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制内层输入框的样式 | object | - | - |
| close-dropdown-when-empty | /*新增*/ 当输入框聚焦时，如果输入值为空，是否要禁止下拉框的展开 | boolean | false |


### DfSelectColumn Attributes
| 参数           | 说明                                                                                           | 类型          | 默认值 |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------- | ------ |
| optionIndex  | option组件当前下标                                                                                  | String/Number     |       |
| width          | 表头宽度                                                                                   | String/Number       |   |
| label|显示列对应表头信息 |  | |
| prop  | 显示对应列的属性名 |      | -      |
| backgroundColor  | 根据对应列的属性值来判断用什么背景颜色 |      | -      |
| icons  | 根据对应列的属性值按照逗号分割后的数组来判断用哪些图标 |      | -      |
### DfOption Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### pageSelect Events
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | event |
| blur | 使 input 失去焦点，并隐藏下拉框 | event |                                                                            
| change | 当optionValue发生改变触发 | value  |

### pageSelect Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearDataList |  |  |
| focus|使select获取焦点| |
| blur|使select失去焦点| |
