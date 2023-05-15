(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212b68"],{aa1c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t._self._c;return n("section",{staticClass:"content df-doc"},[t._m(0),n("p",[t._v("用于选择一个 UI 库中的图标。")]),t._m(1),n("demo-block",[n("div",[n("p",[t._v("打开选择器, 选择一个图标, 点击确定后会外派事件"),n("code",[t._v("confirm")]),t._v(", 监听此事件来获取选中的图标对应的类名。")])]),n("template",{slot:"source"},[n("df-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <df-icon-picker @confirm=\"onConfirm\" />\n</template>\n<script>\nexport default {\n  methods: {\n    onConfirm (classString) {\n      this.$confirm(classString, '选中的图标对应的类名是:')\n    }\n  }\n}\n<\/script>\n")])])])],2),t._m(2),n("demo-block",[n("div",[n("p",[t._v("打开选择器的触发区域可以使用插槽来自定义。")])]),n("template",{slot:"source"},[n("df-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-icon-picker @confirm="onConfirm">\n    <df-link type="primary">使用插槽触发选择</df-link>\n  </df-icon-picker>\n</template>\n<script>\nexport default {\n  methods: {\n    onConfirm (classString) {\n      this.$confirm(classString, \'选中的图标对应的类名是:\')\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(3),n("demo-block",[n("div",[n("p",[t._v("选择器关闭后, 默认将会清除已选中的图标, 除非设置"),n("code",[t._v("clear-chosen-on-close")]),t._v("属性为"),n("code",[t._v("false")]),t._v("。")])]),n("template",{slot:"source"},[n("df-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-icon-picker :clear-chosen-on-close="false" @confirm="onConfirm">\n    <df-link type="primary">选择器关闭后不要清除已选中的图标</df-link>\n  </df-icon-picker>\n</template>\n<script>\nexport default {\n  methods: {\n    onConfirm (classString) {\n      this.$confirm(classString, \'选中的图标对应的类名是:\')\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)],1)},i=[function(){var t=this,n=t._self._c;return n("h2",{attrs:{id:"iconpicker-tu-biao-xuan-ze-qi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iconpicker-tu-biao-xuan-ze-qi"}},[t._v("¶")]),t._v(" IconPicker 图标选择器")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"shi-yong-cha-cao-chu-fa-xuan-ze"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-cha-cao-chu-fa-xuan-ze"}},[t._v("¶")]),t._v(" 使用插槽触发选择")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"xuan-ze-qi-guan-bi-hou-bu-qing-chu-yi-xuan-zhong-de-tu-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-qi-guan-bi-hou-bu-qing-chu-yi-xuan-zhong-de-tu-biao"}},[t._v("¶")]),t._v(" 选择器关闭后不清除已选中的图标")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("clear-chosen-on-close")]),n("td",[t._v("是否在选择器关闭后清除已选中的图标")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])])])])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),n("th",[t._v("说明")]),n("th",[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("confirm")]),n("td",[t._v("选中一个图标并点击确定时")]),n("td",[t._v("当前选中图标对应的类名")])])])])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("¶")]),t._v(" Slot")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("—")]),n("td",[t._v("打开选择器的触发区域")])])])])}],o=e("5530"),a={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("df-icon-picker",{on:{confirm:t.onConfirm}})]],2)},n=[],e={methods:{onConfirm:function(t){this.$confirm(t,"选中的图标对应的类名是:")}}};return Object(o["a"])({render:t,staticRenderFns:n},e)}(),"df-demo1":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("df-icon-picker",{on:{confirm:t.onConfirm}},[e("df-link",{attrs:{type:"primary"}},[t._v("使用插槽触发选择")])],1)]],2)},n=[],e={methods:{onConfirm:function(t){this.$confirm(t,"选中的图标对应的类名是:")}}};return Object(o["a"])({render:t,staticRenderFns:n},e)}(),"df-demo2":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("df-icon-picker",{attrs:{"clear-chosen-on-close":!1},on:{confirm:t.onConfirm}},[e("df-link",{attrs:{type:"primary"}},[t._v("选择器关闭后不要清除已选中的图标")])],1)]],2)},n=[],e={methods:{onConfirm:function(t){this.$confirm(t,"选中的图标对应的类名是:")}}};return Object(o["a"])({render:t,staticRenderFns:n},e)}()}},c=a,s=e("2877"),f=Object(s["a"])(c,r,i,!1,null,null,null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d212b68.82d4e38b.js.map