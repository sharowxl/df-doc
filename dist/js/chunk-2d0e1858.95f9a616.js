(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1858"],{"7b90":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),t._m(1),e("p",[t._v("地址选择器的value类型为数组，选中节点后回填对应节点的路径ID数组； 当不传入headerValue时，将会自动取当前院区所在地址作为头部值；")]),e("demo-block",[e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <df-city-area-select\n    ref=\"citySelect\"\n    v-model=\"value\"\n    :headerValue=\"headerValue\"\n    @change=\"change\"\n  />\n</template>\n<script>\nexport default {\n  name: 'demo1',\n  data () {\n    return {\n      value: null,\n      headerValue: []\n    }\n  },\n  methods: {\n    change (val) {\n      console.log('change', val)\n    },\n    setHeaderValue () {\n      setTimeout(() => {\n        this.$set(this, 'headerValue', ['210000', '210700', '210702'])\n      }, 300)\n    }\n  },\n  created () {\n    this.setHeaderValue()\n  }\n}\n<\/script>\n")])])])],2),t._m(2),e("p",[t._v("在选中地址后，可以通过getCheckedNodes方法获取选中节点信息，返回的是一个节点数组，其中包含节点当前信息、父级信息、节点路径信息")]),e("demo-block",[e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <div>\n    <df-button style=\"margin-bottom: 8px;\" @click=\"handleFocus\">聚焦1s后失焦</df-button>\n    <df-city-area-select\n      ref=\"citySelect\"\n      v-model=\"value\"\n      :headerValue=\"headerValue\"\n      headerClickCloseDropDown\n      @change=\"change\"\n    />\n  </div>\n</template>\n<script>\nexport default {\n  name: 'demo2',\n  data () {\n    return {\n      value: null,\n      headerValue: ['210000', '210700', '210702'],\n      selectedData: ''\n    }\n  },\n  methods: {\n    change (val) {\n      console.log('change', val)\n      if (val && val.length) {\n        this.$nextTick(() => {\n          const selectedData = this.$refs.citySelect.getCheckedNodes()\n          console.log('node', selectedData[0])\n        })\n      }\n    },\n    handleFocus () {\n      this.$refs.citySelect.focus()\n      setTimeout(() => {\n        this.$refs.citySelect.blur()\n      }, 1000)\n    }\n  }\n}\n<\/script>\n")])])])],2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)],1)},d=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"di-zhi-xuan-ze-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#di-zhi-xuan-ze-qi"}},[t._v("¶")]),t._v(" 地址选择器")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"huo-qu-xuan-zhong-jie-dian-xin-xi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#huo-qu-xuan-zhong-jie-dian-xin-xi"}},[t._v("¶")]),t._v(" 获取选中节点信息")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"shu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing"}},[t._v("¶")]),t._v(" 属性")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("选中项绑定值")]),e("td",[t._v("-")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸")]),e("td",[t._v("string")]),e("td",[t._v("medium/small/mini")]),e("td",[t._v("mini")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("输入框占位文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("请选择")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("是否支持清空选项")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-all-levels")]),e("td",[t._v("输入框中是否显示选中值的完整路径")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("separator")]),e("td",[t._v("选项分隔符")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("''")])]),e("tr",[e("td",[t._v("filterable")]),e("td",[t._v("是否可搜索选项")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("debounce")]),e("td",[t._v("搜索关键词输入的去抖延迟，毫秒")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("300")])]),e("tr",[e("td",[t._v("headerValue")]),e("td",[t._v("下拉面板-头部的默认值")]),e("td",[t._v("array")]),e("td",[t._v("—")]),e("td",[t._v("[]")])]),e("tr",[e("td",[t._v("showHeader")]),e("td",[t._v("下拉面板-是否显示头部")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("expandTrigger")]),e("td",[t._v("下拉面板-次级菜单的展开方式")]),e("td",[t._v("string")]),e("td",[t._v("click / hover")]),e("td",[t._v("'click'")])]),e("tr",[e("td",[t._v("checkStrictly")]),e("td",[t._v("下拉面板-是否严格的遵守父子节点不互相关联，父级节点可以选中")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("headerTitle")]),e("td",[t._v("下拉面板-头部小标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("常用城市")])]),e("tr",[e("td",[t._v("headerClickCloseDropDown")]),e("td",[t._v("下拉面板-头部按钮点击后是否关闭下拉面板")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("userInfo")]),e("td",[t._v("当前登录人信息，在取不到缓存里的用户信息时使用")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td",[t._v("{shuRuMa: 'ShuRuMa1'}")])]),e("tr",[e("td",[t._v("filterFirstLevelValue")]),e("td",[t._v("需要过滤掉的一级选项，过滤后，下面的二级第一个选项将会提升至一级；默认过滤北京、天津、上海、重庆")]),e("td",[t._v("array")]),e("td",[t._v("—")]),e("td",[t._v("['110000', '120000', '310000', '500000']")])]),e("tr",[e("td",[t._v("valueKey")]),e("td",[t._v("下拉面板绑定字段")]),e("td",[t._v("string")]),e("td",[t._v("code/id")]),e("td",[t._v("code")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("¶")]),t._v(" Slots")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("empty")]),e("td",[t._v("无匹配选项时的内容")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("当选中option值发生改变时")]),e("td",[t._v("value")])]),e("tr",[e("td",[t._v("visible-change")]),e("td",[t._v("当下拉面板显隐状态改变时")]),e("td",[t._v("true/false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("¶")]),t._v(" Methods")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("closeDropDown")]),e("td",[t._v("关闭下拉面板")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("手动聚焦")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("手动失焦")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("getCheckedNodes")]),e("td",[t._v("获取选中的节点数组")]),e("td",[t._v("(leafOnly) 是否只是叶子节点，默认值为 "),e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("clearCheckedNodes")]),e("td",[t._v("清空选中的节点")]),e("td",[t._v("-")])])])])}],r=n("5530"),v={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-city-area-select",{ref:"citySelect",attrs:{headerValue:t.headerValue},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]],2)},e=[],n={name:"demo1",data:function(){return{value:null,headerValue:[]}},methods:{change:function(t){console.log("change",t)},setHeaderValue:function(){var t=this;setTimeout((function(){t.$set(t,"headerValue",["210000","210700","210702"])}),300)}},created:function(){this.setHeaderValue()}};return Object(r["a"])({render:t,staticRenderFns:e},n)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("df-button",{staticStyle:{"margin-bottom":"8px"},on:{click:t.handleFocus}},[t._v("聚焦1s后失焦")]),t._v(" "),n("df-city-area-select",{ref:"citySelect",attrs:{headerValue:t.headerValue,headerClickCloseDropDown:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],n={name:"demo2",data:function(){return{value:null,headerValue:["210000","210700","210702"],selectedData:""}},methods:{change:function(t){var e=this;console.log("change",t),t&&t.length&&this.$nextTick((function(){var t=e.$refs.citySelect.getCheckedNodes();console.log("node",t[0])}))},handleFocus:function(){var t=this;this.$refs.citySelect.focus(),setTimeout((function(){t.$refs.citySelect.blur()}),1e3)}}};return Object(r["a"])({render:t,staticRenderFns:e},n)}()}},l=v,s=n("2877"),c=Object(s["a"])(l,a,d,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e1858.95f9a616.js.map