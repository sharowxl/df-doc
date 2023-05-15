(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213329"],{ac3d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("表示两种相互对立的状态间的切换，多用于触发「开/关」。")]),t._m(1),e("demo-block",[e("div",[e("p",[t._v("绑定"),e("code",[t._v("v-model")]),t._v("到一个"),e("code",[t._v("Boolean")]),t._v("类型的变量。可以使用"),e("code",[t._v("active-color")]),t._v("属性与"),e("code",[t._v("inactive-color")]),t._v("属性来设置开关的背景色。")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-switch\n    v-model="value"\n    active-color="#13ce66"\n    inactive-color="#ff4949">\n  </df-switch>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: true\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(2),e("demo-block",[e("div",[e("p",[t._v("使用"),e("code",[t._v("active-text")]),t._v("属性与"),e("code",[t._v("inactive-text")]),t._v("属性来设置开关的文字描述。")])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-switch\n      v-model="value1"\n      active-text="按月付费"\n      inactive-text="按年付费">\n    </df-switch>\n    <div style=\'height: 20px\'></div>\n    <df-switch\n      style="display: block"\n      v-model="value2"\n      active-text="按月付费"\n      inactive-text="按年付费">\n    </df-switch>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(3),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("active-value")]),t._v("和"),e("code",[t._v("inactive-value")]),t._v("属性，接受"),e("code",[t._v("Boolean")]),t._v(", "),e("code",[t._v("String")]),t._v("或"),e("code",[t._v("Number")]),t._v("类型的值。")])]),e("template",{slot:"source"},[e("df-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-tooltip :content="\'Switch value: \' + value" placement="top">\n    <df-switch\n      v-model="value"\n      active-color="#13ce66"\n      inactive-color="#ff4949"\n      active-value="100"\n      inactive-value="0">\n    </df-switch>\n  </df-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: \'100\'\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(4),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("disabled")]),t._v("属性，接受一个"),e("code",[t._v("Boolean")]),t._v("，设置"),e("code",[t._v("true")]),t._v("即可禁用。")])]),e("template",{slot:"source"},[e("df-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-switch\n      v-model="value1"\n      disabled>\n    </df-switch>\n    <df-switch\n      v-model="value2"\n      disabled>\n    </df-switch>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)],1)},v=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"switch-kai-guan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-kai-guan"}},[t._v("¶")]),t._v(" Switch 开关")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-ben-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"wen-zi-miao-shu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-miao-shu"}},[t._v("¶")]),t._v(" 文字描述")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"kuo-zhan-de-value-lei-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kuo-zhan-de-value-lei-xing"}},[t._v("¶")]),t._v(" 扩展的 value 类型")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai"}},[t._v("¶")]),t._v(" 禁用状态")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("switch 的宽度（像素）")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("40")])]),e("tr",[e("td",[t._v("active-icon-class")]),e("td",[t._v("switch 打开时所显示图标的类名，设置此项会忽略 "),e("code",[t._v("active-text")])]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("inactive-icon-class")]),e("td",[t._v("switch 关闭时所显示图标的类名，设置此项会忽略 "),e("code",[t._v("inactive-text")])]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("active-text")]),e("td",[t._v("switch 打开时的文字描述")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("inactive-text")]),e("td",[t._v("switch 关闭时的文字描述")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("active-value")]),e("td",[t._v("switch 打开时的值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("inactive-value")]),e("td",[t._v("switch 关闭时的值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("active-color")]),e("td",[t._v("switch 打开时的背景色")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#409EFF")])]),e("tr",[e("td",[t._v("inactive-color")]),e("td",[t._v("switch 关闭时的背景色")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#C0CCDA")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("switch 对应的 name 属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("validate-event")]),e("td",[t._v("改变 switch 状态时是否触发表单的校验")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("switch 状态发生变化时的回调函数")]),e("td",[t._v("新状态的值")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("¶")]),t._v(" Methods")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 Switch 获取焦点")]),e("td",[t._v("-")])])])])}],i=a("5530"),c={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("df-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]],2)},e=[],a={data:function(){return{value:!0}}};return Object(i["a"])({render:t,staticRenderFns:e},a)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",[a("df-switch",{attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),a("div",{staticStyle:{height:"20px"}}),t._v(" "),a("df-switch",{staticStyle:{display:"block"},attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)]],2)},e=[],a={data:function(){return{value1:!0,value2:!1}}};return Object(i["a"])({render:t,staticRenderFns:e},a)}(),"df-demo2":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("df-tooltip",{attrs:{content:"Switch value: "+t.value,placement:"top"}},[a("df-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"100","inactive-value":"0"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],a={data:function(){return{value:"100"}}};return Object(i["a"])({render:t,staticRenderFns:e},a)}(),"df-demo3":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",[a("df-switch",{attrs:{disabled:""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),a("df-switch",{attrs:{disabled:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)]],2)},e=[],a={data:function(){return{value1:!0,value2:!1}}};return Object(i["a"])({render:t,staticRenderFns:e},a)}()}},r=c,d=a("2877"),s=Object(d["a"])(r,n,v,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d213329.ecb12428.js.map