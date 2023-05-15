(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7bc5"],{"77a0":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n._self._c;return t("section",{staticClass:"content df-doc"},[n._m(0),n._m(1),t("demo-block",[t("template",{slot:"source"},[t("df-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <df-fu-he-yi-zhu-sou-suo\n    v-model=\"value\"\n    :dynamicParam=\"dynamicParam\"\n    :props=\"props\"\n    :disabled=\"true\"\n    @tabChange=\"handleTabChange\"\n    @selectChange=\"handleSelect\"\n    :style=\"{\n      width: '300px'\n    }\"\n  >\n  </df-fu-he-yi-zhu-sou-suo>\n</template>\n<script>\n  export default {\n    name: 'demo1',\n    data() {\n      return {\n        value: {\n          YIZHUXMID: '1234',\n          YIZHUXMMC: '测试传值',\n        },\n        props: {\n          key: 'YIZHUXMID',\n          value: 'YIZHUXMMC',\n        },\n        dynamicParam: {\n          peiZhiId: '基础公用_住院医嘱开立',\n          fuWuTjMc: '住院医嘱开立',\n          dangQianYe: 1,\n          meiYeTs: 100,\n          shiFouFy: 1,\n          chaXunCs: {\n            SHURUMLX: 'ShuRuMa1',\n            SHURUMA: '',\n            ZHIGONGID: 'DBA',\n            KESHIID: '6626',\n            YUANQUID: '1',\n            YIZHUSYDX: '1',\n\n            XIYAOYYID: '050105',\n            CHENGYAOYYID: '050104',\n            CAOYAOYYID: '050102',\n            WEICAIYYID: null,\n\n            XIYAOYYIDS: '050105',\n            CHENGYAOYYIDS: '050104',\n            CAOYAOYYIDS: '050102',\n            WEICAIYYIDS: null,\n\n            YAOPINLX1: '1',\n            YAOPINLX2: '2',\n            YAOPINLX3: '0',\n            YAOPINLX4: '0',\n          },\n        },\n      };\n    },\n    methods: {\n      handleSelect(val) {\n        console.log('handleSelect', val);\n        this.value = val;\n      },\n      handleTabChange(e) {\n        console.log('handleTabChange', e);\n      },\n    },\n    created() {},\n  };\n<\/script>\n")])])])],2),n._m(2),t("p",[n._v("自定义搜索后 tab 的显示项配置及顺序")]),t("demo-block",[t("template",{slot:"source"},[t("df-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <df-form inline>\n    <df-form-item label=\"自定义tab\">\n      <df-switch\n        v-model=\"changYong\"\n        active-color=\"#13ce66\"\n        inactive-color=\"#ff4949\"\n      >\n      </df-switch>\n    </df-form-item>\n    <span>｜</span>\n    <df-form-item label=\"仅显示指定类型：\">\n      <df-switch\n        v-model=\"onlyShowExist\"\n        active-color=\"#13ce66\"\n        inactive-color=\"#ff4949\"\n      >\n      </df-switch>\n    </df-form-item>\n    <span>｜</span>\n    <df-form-item label=\"显示类型：\">\n      <df-checkbox-group v-model=\"tabsOptions\">\n        <df-checkbox v-for=\"item in options\" :label=\"item\" :key=\"item\"\n          >{{item}}</df-checkbox\n        >\n      </df-checkbox-group>\n    </df-form-item>\n    <span>｜</span>\n    <df-button @click=\"handleReorder\"> 重新排序 </df-button>\n  </df-form>\n  <df-fu-he-yi-zhu-sou-suo\n    v-model=\"value\"\n    :dynamicParam=\"dynamicParam\"\n    :popperWidth=\"1020\"\n    :props=\"props\"\n    :tabsOptions=\"tabsOptions\"\n    :onlyShowExist=\"onlyShowExist\"\n    :customerTabs=\"changYong ? customerTabs : []\"\n    :style=\"{\n      width: '300px'\n    }\"\n  >\n  </df-fu-he-yi-zhu-sou-suo>\n</template>\n<script>\n  const shuffleArray = (arr) => {\n    for (let i = arr.length - 1; i > 0; i--) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n    }\n    return arr;\n  };\n  export default {\n    name: 'CustomerTabs',\n    data() {\n      return {\n        value: {\n          YIZHUXMID: '',\n          YIZHUXMMC: '',\n        },\n        props: {\n          key: 'YIZHUXMID',\n          value: 'YIZHUXMMC',\n        },\n        options: ['药品', '诊疗', '组套', '检查', '检验'],\n        tabsOptions: ['药品', '组套'],\n        onlyShowExist: false,\n        changYong: false,\n        customerTabs: [\n          {\n            tabName: '单位为【支】的',\n            /**\n             * @param {Object} dataItem\n             * @param {String} tabName\n             * @return {Boolean}\n             */\n            filter: function(dataItem, tabName) {\n              console.log({ dataItem, tabName });\n              return dataItem.BAOZHUANGDW === '支';\n            },\n          },\n        ],\n        dynamicParam: {\n          peiZhiId: '基础公用_住院医嘱开立',\n          fuWuTjMc: '住院医嘱开立',\n          dangQianYe: 1,\n          meiYeTs: 100,\n          shiFouFy: 1,\n          chaXunCs: {\n            SHURUMLX: 'ShuRuMa1',\n            SHURUMA: '',\n            ZHIGONGID: 'DBA',\n            KESHIID: '6626',\n            YUANQUID: '1',\n            YIZHUSYDX: '1',\n\n            XIYAOYYID: '050105',\n            CHENGYAOYYID: '050104',\n            CAOYAOYYID: '050102',\n            WEICAIYYID: null,\n\n            XIYAOYYIDS: '050105',\n            CHENGYAOYYIDS: '050104',\n            CAOYAOYYIDS: '050102',\n            WEICAIYYIDS: null,\n\n            YAOPINLX1: '1',\n            YAOPINLX2: '2',\n            YAOPINLX3: '0',\n            YAOPINLX4: '0',\n          },\n        },\n      };\n    },\n    methods: {\n      handleReorder() {\n        this.options = shuffleArray([...this.options]);\n        this.tabsOptions = [];\n      },\n    },\n    created() {},\n  };\n<\/script>\n")])])])],2),n._m(3),n._m(4),t("demo-block",[t("template",{slot:"source"},[t("df-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <df-fu-he-yi-zhu-sou-suo\n    v-model=\"value\"\n    :dynamicParam=\"dynamicParam\"\n    :props=\"props\"\n    :placeholder=\"placeholder\"\n    :special-char=\"specialChar\"\n    :all-special-chars=\"specialChars\"\n    @change-to-special=\"changeToSpecial\"\n    :style=\"{\n      width: '300px'\n    }\"\n  >\n  </df-fu-he-yi-zhu-sou-suo>\n</template>\n<script>\n  export default {\n    name: 'mutilPlan',\n    data() {\n      return {\n        specialChar: '-',\n        specialChars: ['-', '/'],\n        value: {\n          YIZHUXMID: '',\n          YIZHUXMMC: '',\n        },\n        props: {\n          key: 'YIZHUXMID',\n          value: 'YIZHUXMMC',\n        },\n        dynamicParam: {\n          peiZhiId: '基础公用_住院医嘱开立',\n          fuWuTjMc: '住院医嘱开立',\n          dangQianYe: 1,\n          meiYeTs: 100,\n          shiFouFy: 1,\n          chaXunCs: {\n            SHURUMLX: 'ShuRuMa1',\n            SHURUMA: '',\n            ZHIGONGID: 'DBA',\n            KESHIID: '6626',\n            YUANQUID: '1',\n            YIZHUSYDX: '1',\n\n            XIYAOYYID: '050105',\n            CHENGYAOYYID: '050104',\n            CAOYAOYYID: '050102',\n            WEICAIYYID: null,\n\n            XIYAOYYIDS: '050105',\n            CHENGYAOYYIDS: '050104',\n            CAOYAOYYIDS: '050102',\n            WEICAIYYIDS: null,\n\n            YAOPINLX1: '1',\n            YAOPINLX2: '2',\n            YAOPINLX3: '0',\n            YAOPINLX4: '0',\n          },\n        },\n      };\n    },\n    computed: {\n      placeholder() {\n        if (this.specialChar === '-') {\n          return `输入/切换到模式二`;\n        } else {\n          return `输入-切换到模式一`;\n        }\n      },\n    },\n    methods: {\n      changeToSpecial(char) {\n        // 切换至特殊字符方案\n        console.log('changeToSpecial', [char]);\n        this.specialChar = char;\n      },\n    },\n    created() {},\n  };\n<\/script>\n")])])])],2),n._m(5),n._m(6),n._m(7),n._m(8),n._m(9),t("p",[n._v("slot-scope 带出来值有")]),n._m(10),t("demo-block",[t("template",{slot:"source"},[t("df-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <df-fu-he-yi-zhu-sou-suo\n    v-model=\"value\"\n    :dynamicParam=\"dynamicParam\"\n    :props=\"props\"\n    :style=\"{\n      width: '300px'\n    }\"\n  >\n    <template slot-scope=\"scope\" v-if=\"scope.prop === 'GUIGE'\">\n      {{scope.row.XIANGMULX + '--' + scope.index}}\n    </template>\n  </df-fu-he-yi-zhu-sou-suo>\n</template>\n<script>\n  export default {\n    name: 'demo2',\n    data() {\n      return {\n        value: {\n          YIZHUXMID: '1234',\n          YIZHUXMMC: '测试传值',\n        },\n        props: {\n          key: 'YIZHUXMID',\n          value: 'YIZHUXMMC',\n        },\n        dynamicParam: {\n          peiZhiId: '基础公用_住院医嘱开立',\n          fuWuTjMc: '住院医嘱开立',\n          dangQianYe: 1,\n          meiYeTs: 100,\n          shiFouFy: 1,\n          chaXunCs: {\n            SHURUMLX: 'ShuRuMa1',\n            SHURUMA: '',\n            ZHIGONGID: 'DBA',\n            KESHIID: '6626',\n            YUANQUID: '1',\n            YIZHUSYDX: '1',\n\n            XIYAOYYID: '050105',\n            CHENGYAOYYID: '050104',\n            CAOYAOYYID: '050102',\n            WEICAIYYID: null,\n\n            XIYAOYYIDS: '050105',\n            CHENGYAOYYIDS: '050104',\n            CAOYAOYYIDS: '050102',\n            WEICAIYYIDS: null,\n\n            YAOPINLX1: '1',\n            YAOPINLX2: '2',\n            YAOPINLX3: '0',\n            YAOPINLX4: '0',\n          },\n        },\n      };\n    },\n  };\n<\/script>\n")])])])],2),n._m(11),n._m(12),t("p",[n._v("因为各项目类型显示列的配置来自接口，自定义的 tab 项无配置列，目前使用【全部】分类的显示列配置")]),n._m(13),n._m(14),n._m(15),n._m(16),n._m(17),n._m(18)],1)},r=[function(){var n=this,t=n._self._c;return t("h3",{attrs:{id:"fuheyizhusousuo-fu-he-yi-zhu-sou-suo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fuheyizhusousuo-fu-he-yi-zhu-sou-suo"}},[n._v("¶")]),n._v(" FuHeYiZhuSouSuo 复合医嘱搜索")])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[n._v("¶")]),n._v(" 基础用法")])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"zi-ding-yi-tabs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-tabs"}},[n._v("¶")]),n._v(" 自定义 tabs")])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"duo-fang-an-qie-huan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-fang-an-qie-huan"}},[n._v("¶")]),n._v(" 多方案切换")])},function(){var n=this,t=n._self._c;return t("p",[n._v("同 "),t("a",{attrs:{href:"/#/professional/pageDynamic/"}},[n._v("page-dynamic")]),n._v(" 组件使用方式")])},function(){var n=this,t=n._self._c;return t("h3",{attrs:{id:"shu-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing"}},[n._v("¶")]),n._v(" 属性")])},function(){var n=this,t=n._self._c;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("默认值")]),t("th",[n._v("必填")])])]),t("tbody",[t("tr",[t("td",[n._v("v-model")]),t("td",[n._v("绑定的值")]),t("td",[n._v("Object/String")]),t("td",[n._v("/")]),t("td",[n._v("√")])]),t("tr",[t("td",[n._v("dynamicParam")]),t("td",[n._v("接口参数，参考基础用法中的实例值")]),t("td",[n._v("Object")]),t("td"),t("td",[n._v("√")])]),t("tr",[t("td",[n._v("customStyle")]),t("td",[n._v("自定义样式")]),t("td",[n._v("Object")]),t("td",[n._v("{}")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("popperWidth")]),t("td",[n._v("弹出层宽度(设置宽度会自动设置 popper-append-to-body 为 false，因为用到原生 css 变量，挂到 body 拿不到变量了)")]),t("td",[n._v("String/Number")]),t("td",[n._v("1000px")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("placeholder")]),t("td",[n._v("输入框占位符")]),t("td",[n._v("String/Function")]),t("td",[n._v("/")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("props")]),t("td",[n._v("字段对照关系")]),t("td",[n._v("Object")]),t("td",[n._v("{key: 'key',value: 'value'}")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("special-chars")]),t("td",[n._v("在动态方案需要切换时，指定所有的特殊字符都是什么")]),t("td",[n._v("Array")]),t("td",[n._v("-")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("special-char")]),t("td",[n._v("在动态方案切换时，用这个属性指定当前方案的特殊字符是什么")]),t("td",[n._v("String")]),t("td",[n._v("-")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("tabsOptions")]),t("td",[n._v("指定显示的类型")]),t("td",[n._v("Array<String>")]),t("td",[n._v("[]")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("onlyShowExist")]),t("td",[n._v("仅显示指定的类型")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("customerTabs")]),t("td",[n._v("自定义显示列和数据筛选方法，"),t("a",{attrs:{href:"#customertabs-can-shu-shuo-ming"}},[n._v("详情")])]),t("td",[n._v("Array<Objcet>")]),t("td",[n._v("[]")]),t("td",[n._v("x")])]),t("tr",[t("td",[n._v("其他")]),t("td",[n._v("其他参数参考 select 组件，此处不再赘述")]),t("td",[n._v("/")]),t("td",[n._v("/")]),t("td",[n._v("/")])])])])},function(){var n=this,t=n._self._c;return t("h3",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[n._v("¶")]),n._v(" Events")])},function(){var n=this,t=n._self._c;return t("table",[t("thead",[t("tr",[t("th",[n._v("方法名")]),t("th",[n._v("说明")]),t("th",[n._v("参数")]),t("th",[n._v("类型")])])]),t("tbody",[t("tr",[t("td",[n._v("tabChange")]),t("td",[n._v("当前 tab 页发生变化")]),t("td",[n._v("{tab: String,index: Number}")]),t("td",[n._v("Object")])]),t("tr",[t("td",[n._v("pageChange")]),t("td",[n._v("当前分类页码发生变化")]),t("td",[n._v("value")]),t("td",[n._v("Number")])]),t("tr",[t("td",[n._v("selectChange")]),t("td",[n._v("选项发生变化")]),t("td",[n._v("value")]),t("td",[n._v("同 v-model 值类型")])]),t("tr",[t("td",[n._v("change-to-special")]),t("td",[n._v("在动态方案需要切换时，输入指定的字符，会派出事件"),t("code",[n._v("change-to-special")]),n._v("，附带一个参数，把这个参数传给组件，用于指定当前方案的特殊字符是什么")]),t("td"),t("td",[n._v("String")])])])])},function(){var n=this,t=n._self._c;return t("h3",{attrs:{id:"cha-cao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cha-cao"}},[n._v("¶")]),n._v(" 插槽")])},function(){var n=this,t=n._self._c;return t("table",[t("thead",[t("tr",[t("th",[n._v("键名")]),t("th",[n._v("类型")]),t("th",[n._v("说明")])])]),t("tbody",[t("tr",[t("td",[n._v("row")]),t("td",[n._v("Object")]),t("td",[n._v("当前行数据")])]),t("tr",[t("td",[n._v("prop")]),t("td",[n._v("String")]),t("td",[n._v("当前列对应的字段名")])]),t("tr",[t("td",[n._v("index")]),t("td",[n._v("Number")]),t("td",[n._v("当前索引")])])])])},function(){var n=this,t=n._self._c;return t("h3",{attrs:{id:"qi-ta-shuo-ming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-shuo-ming"}},[n._v("¶")]),n._v(" 其他说明")])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"customertabs-can-shu-shuo-ming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customertabs-can-shu-shuo-ming"}},[n._v("¶")]),n._v(" customerTabs 参数说明")])},function(){var n=this,t=n._self._c;return t("pre",[t("code",{staticClass:"language-typescript"},[n._v("customerTabs = [\n  {\n    tabName: string,\n    filter: <boolean>(dataItem: object, tabName: string) => {},\n  },\n];\n\n/* 示例 */\ncustomerTabs: [\n  // 此列仅显示常用项目\n  {\n    tabName: '常用',\n    filter: (data) => data.CHANGYONGBZ === 1,\n  },\n  // 此列仅显示包装单位为‘支’的\n  {\n    tabName: '单位为\"支\"',\n    filter: (data) => data.BAOZHUANGDW === '支',\n  },\n];\n")])])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"quan-jian-pan-cao-zuo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quan-jian-pan-cao-zuo"}},[n._v("¶")]),n._v(" 全键盘操作")])},function(){var n=this,t=n._self._c;return t("table",[t("thead",[t("tr",[t("th",[n._v("功能")]),t("th",[n._v("操作键")]),t("th",[n._v("键盘码")])])]),t("tbody",[t("tr",[t("td",[n._v("向右切换"),t("code",[n._v("tab")]),n._v("页")]),t("td",[t("kbd",[n._v("Tab")])]),t("td",[n._v("9")])]),t("tr",[t("td",[n._v("向左切换"),t("code",[n._v("tab")]),n._v("页")]),t("td",[t("kbd",[n._v("Shift")]),n._v("+"),t("kbd",[n._v("Tab")])]),t("td",[n._v("16 + 9")])]),t("tr",[t("td",[n._v("左右切换分页 1")]),t("td",[t("kbd",[n._v("Left Arrow")]),n._v("/"),t("kbd",[n._v("Right Arrow")])]),t("td",[n._v("37 / 39")])]),t("tr",[t("td",[n._v("左右切换分页 2")]),t("td",[t("kbd",[n._v("Page Up")]),n._v("/"),t("kbd",[n._v("Page Down")])]),t("td",[n._v("33 / 34")])])])])},function(){var n=this,t=n._self._c;return t("h4",{attrs:{id:"zhu-yi-shi-xiang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhu-yi-shi-xiang"}},[n._v("¶")]),n._v(" 注意事项 ⚠️")])},function(){var n=this,t=n._self._c;return t("p",[n._v("1、此组件的分页取决于"),t("code",[n._v("dynamicParam")]),n._v("参数中的"),t("code",[n._v("dangQianYe")]),n._v("和"),t("code",[n._v("meiYeTs")]),n._v("，搜索完成后暂不支持搜索下一页，如有需求，在"),t("code",[n._v("dynamicParam")]),n._v("中修改分页参数；")])},function(){var n=this,t=n._self._c;return t("p",[n._v("2、搜索结果展示的"),t("code",[n._v("Popper")]),n._v("中展示的分页只针对当前条件下的搜索结果，并按每页 10 条数据进行的前端分页，并随着"),t("code",[n._v("tab")]),n._v("切换动态计算当前"),t("code",[n._v("tab")]),n._v("下数据量及分页展示；")])}],s=e("2909"),o=e("5530"),i={name:"component-doc",components:{"df-demo0":function(){var n=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("df-fu-he-yi-zhu-sou-suo",{style:{width:"300px"},attrs:{dynamicParam:n.dynamicParam,props:n.props,disabled:!0},on:{tabChange:n.handleTabChange,selectChange:n.handleSelect},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})]],2)},t=[],e={name:"demo1",data:function(){return{value:{YIZHUXMID:"1234",YIZHUXMMC:"测试传值"},props:{key:"YIZHUXMID",value:"YIZHUXMMC"},dynamicParam:{peiZhiId:"基础公用_住院医嘱开立",fuWuTjMc:"住院医嘱开立",dangQianYe:1,meiYeTs:100,shiFouFy:1,chaXunCs:{SHURUMLX:"ShuRuMa1",SHURUMA:"",ZHIGONGID:"DBA",KESHIID:"6626",YUANQUID:"1",YIZHUSYDX:"1",XIYAOYYID:"050105",CHENGYAOYYID:"050104",CAOYAOYYID:"050102",WEICAIYYID:null,XIYAOYYIDS:"050105",CHENGYAOYYIDS:"050104",CAOYAOYYIDS:"050102",WEICAIYYIDS:null,YAOPINLX1:"1",YAOPINLX2:"2",YAOPINLX3:"0",YAOPINLX4:"0"}}}},methods:{handleSelect:function(n){console.log("handleSelect",n),this.value=n},handleTabChange:function(n){console.log("handleTabChange",n)}},created:function(){}};return Object(o["a"])({render:n,staticRenderFns:t},e)}(),"df-demo1":function(){var n=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("df-form",{attrs:{inline:""}},[e("df-form-item",{attrs:{label:"自定义tab"}},[e("df-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:n.changYong,callback:function(t){n.changYong=t},expression:"changYong"}})],1),n._v(" "),e("span",[n._v("｜")]),n._v(" "),e("df-form-item",{attrs:{label:"仅显示指定类型："}},[e("df-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:n.onlyShowExist,callback:function(t){n.onlyShowExist=t},expression:"onlyShowExist"}})],1),n._v(" "),e("span",[n._v("｜")]),n._v(" "),e("df-form-item",{attrs:{label:"显示类型："}},[e("df-checkbox-group",{model:{value:n.tabsOptions,callback:function(t){n.tabsOptions=t},expression:"tabsOptions"}},n._l(n.options,(function(t){return e("df-checkbox",{key:t,attrs:{label:t}},[n._v(n._s(t))])})),1)],1),n._v(" "),e("span",[n._v("｜")]),n._v(" "),e("df-button",{on:{click:n.handleReorder}},[n._v(" 重新排序 ")])],1),n._v(" "),e("df-fu-he-yi-zhu-sou-suo",{style:{width:"300px"},attrs:{dynamicParam:n.dynamicParam,popperWidth:1020,props:n.props,tabsOptions:n.tabsOptions,onlyShowExist:n.onlyShowExist,customerTabs:n.changYong?n.customerTabs:[]},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})]],2)},t=[],e=function(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),a=[n[e],n[t]];n[t]=a[0],n[e]=a[1]}return n},a={name:"CustomerTabs",data:function(){return{value:{YIZHUXMID:"",YIZHUXMMC:""},props:{key:"YIZHUXMID",value:"YIZHUXMMC"},options:["药品","诊疗","组套","检查","检验"],tabsOptions:["药品","组套"],onlyShowExist:!1,changYong:!1,customerTabs:[{tabName:"单位为【支】的",filter:function(n,t){return console.log({dataItem:n,tabName:t}),"支"===n.BAOZHUANGDW}}],dynamicParam:{peiZhiId:"基础公用_住院医嘱开立",fuWuTjMc:"住院医嘱开立",dangQianYe:1,meiYeTs:100,shiFouFy:1,chaXunCs:{SHURUMLX:"ShuRuMa1",SHURUMA:"",ZHIGONGID:"DBA",KESHIID:"6626",YUANQUID:"1",YIZHUSYDX:"1",XIYAOYYID:"050105",CHENGYAOYYID:"050104",CAOYAOYYID:"050102",WEICAIYYID:null,XIYAOYYIDS:"050105",CHENGYAOYYIDS:"050104",CAOYAOYYIDS:"050102",WEICAIYYIDS:null,YAOPINLX1:"1",YAOPINLX2:"2",YAOPINLX3:"0",YAOPINLX4:"0"}}}},methods:{handleReorder:function(){this.options=e(Object(s["a"])(this.options)),this.tabsOptions=[]}},created:function(){}};return Object(o["a"])({render:n,staticRenderFns:t},a)}(),"df-demo2":function(){var n=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("df-fu-he-yi-zhu-sou-suo",{style:{width:"300px"},attrs:{dynamicParam:n.dynamicParam,props:n.props,placeholder:n.placeholder,"special-char":n.specialChar,"all-special-chars":n.specialChars},on:{"change-to-special":n.changeToSpecial},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})]],2)},t=[],e={name:"mutilPlan",data:function(){return{specialChar:"-",specialChars:["-","/"],value:{YIZHUXMID:"",YIZHUXMMC:""},props:{key:"YIZHUXMID",value:"YIZHUXMMC"},dynamicParam:{peiZhiId:"基础公用_住院医嘱开立",fuWuTjMc:"住院医嘱开立",dangQianYe:1,meiYeTs:100,shiFouFy:1,chaXunCs:{SHURUMLX:"ShuRuMa1",SHURUMA:"",ZHIGONGID:"DBA",KESHIID:"6626",YUANQUID:"1",YIZHUSYDX:"1",XIYAOYYID:"050105",CHENGYAOYYID:"050104",CAOYAOYYID:"050102",WEICAIYYID:null,XIYAOYYIDS:"050105",CHENGYAOYYIDS:"050104",CAOYAOYYIDS:"050102",WEICAIYYIDS:null,YAOPINLX1:"1",YAOPINLX2:"2",YAOPINLX3:"0",YAOPINLX4:"0"}}}},computed:{placeholder:function(){return"-"===this.specialChar?"输入/切换到模式二":"输入-切换到模式一"}},methods:{changeToSpecial:function(n){console.log("changeToSpecial",[n]),this.specialChar=n}},created:function(){}};return Object(o["a"])({render:n,staticRenderFns:t},e)}(),"df-demo3":function(){var n=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("df-fu-he-yi-zhu-sou-suo",{style:{width:"300px"},attrs:{dynamicParam:n.dynamicParam,props:n.props},scopedSlots:n._u([{key:"default",fn:function(t){return"GUIGE"===t.prop?[n._v("\n      "+n._s(t.row.XIANGMULX+"--"+t.index)+"\n    ")]:void 0}}],null,!0),model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})]],2)},t=[],e={name:"demo2",data:function(){return{value:{YIZHUXMID:"1234",YIZHUXMMC:"测试传值"},props:{key:"YIZHUXMID",value:"YIZHUXMMC"},dynamicParam:{peiZhiId:"基础公用_住院医嘱开立",fuWuTjMc:"住院医嘱开立",dangQianYe:1,meiYeTs:100,shiFouFy:1,chaXunCs:{SHURUMLX:"ShuRuMa1",SHURUMA:"",ZHIGONGID:"DBA",KESHIID:"6626",YUANQUID:"1",YIZHUSYDX:"1",XIYAOYYID:"050105",CHENGYAOYYID:"050104",CAOYAOYYID:"050102",WEICAIYYID:null,XIYAOYYIDS:"050105",CHENGYAOYYIDS:"050104",CAOYAOYYIDS:"050102",WEICAIYYIDS:null,YAOPINLX1:"1",YAOPINLX2:"2",YAOPINLX3:"0",YAOPINLX4:"0"}}}}};return Object(o["a"])({render:n,staticRenderFns:t},e)}()}},c=i,d=e("2877"),l=Object(d["a"])(c,a,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d7bc5.84d75a2f.js.map