(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ccf49"],{"4fab":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("点击元素，弹出气泡确认框。")]),t._m(1),e("p",[t._v("Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。")]),e("demo-block",[e("div",[e("p",[t._v("在 Popconfirm 中，只有 "),e("code",[t._v("title")]),t._v(" 属性可用，"),e("code",[t._v("content")]),t._v(" 属性不会被展示。")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-popconfirm\n    title="这是一段内容确定删除吗？"\n  >\n    <df-button slot="reference">删除</df-button>\n  </df-popconfirm>\n</template>\n')])])])],2),t._m(2),e("p",[t._v("可以在 Popconfirm 中自定义内容。")]),e("demo-block",[e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-popconfirm\n    confirm-button-text=\'好的\'\n    cancel-button-text=\'不用了\'\n    icon="df-icon-info"\n    icon-color="red"\n    title="这是一段内容确定删除吗？"\n  >\n    <df-button slot="reference">删除</df-button>\n  </df-popconfirm>\n</template>\n')])])])],2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8)],1)},o=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"popconfirm-qi-pao-que-ren-kuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#popconfirm-qi-pao-que-ren-kuang"}},[t._v("¶")]),t._v(" Popconfirm 气泡确认框")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zi-ding-yi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi"}},[t._v("¶")]),t._v(" 自定义")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("confirm-button-text")]),e("td",[t._v("确认按钮文字")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("cancel-button-text")]),e("td",[t._v("取消按钮文字")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("confirm-button-type")]),e("td",[t._v("确认按钮类型")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("Primary")])]),e("tr",[e("td",[t._v("cancel-button-type")]),e("td",[t._v("取消按钮类型")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("Text")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("Icon")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("df-icon-question")])]),e("tr",[e("td",[t._v("icon-color")]),e("td",[t._v("Icon 颜色")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("#f90")])]),e("tr",[e("td",[t._v("hide-icon")]),e("td",[t._v("是否隐藏 Icon")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("¶")]),t._v(" Slot")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("reference")]),e("td",[t._v("触发 Popconfirm 显示的 HTML 元素")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("confirm")]),e("td",[t._v("点击确认按钮时触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("cancel")]),e("td",[t._v("点击取消按钮时触发")]),e("td",[t._v("—")])])])])}],c=n("5530"),_={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"}},[n("df-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("删除")])],1)]],2)},e=[],n={};return Object(c["a"])({render:t,staticRenderFns:e},n)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-popconfirm",{attrs:{"confirm-button-text":"好的","cancel-button-text":"不用了",icon:"df-icon-info","icon-color":"red",title:"这是一段内容确定删除吗？"}},[n("df-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("删除")])],1)]],2)},e=[],n={};return Object(c["a"])({render:t,staticRenderFns:e},n)}()}},d=_,i=n("2877"),a=Object(i["a"])(d,r,o,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0ccf49.b0a44ecf.js.map