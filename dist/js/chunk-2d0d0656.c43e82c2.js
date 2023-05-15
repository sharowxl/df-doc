(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0656"],{6897:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("用于颜色选择，支持多种格式。")]),t._m(1),e("demo-block",[e("div",[e("p",[t._v("使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <div class="block">\n      <span class="demonstration">有默认值</span>\n      <df-color-picker v-model="color1"></df-color-picker>\n    </div>\n    <div class="block">\n      <span class="demonstration">无默认值</span>\n      <df-color-picker v-model="color2"></df-color-picker>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        color1: \'#409EFF\',\n        color2: null\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(2),e("demo-block",[e("div",[e("p",[t._v("ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过"),e("code",[t._v("show-alpha")]),t._v("属性即可控制是否支持透明度的选择。")])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <df-color-picker v-model=\"color\" show-alpha></df-color-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(19, 206, 102, 0.8)'\n      }\n    }\n  };\n<\/script>\n")])])])],2),t._m(3),e("demo-block",[e("div",[e("p",[t._v("ColorPicker 支持预定义颜色")])]),e("template",{slot:"source"},[e("df-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <df-color-picker\n    v-model=\"color\"\n    show-alpha\n    :predefine=\"predefineColors\">\n  </df-color-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(255, 69, 0, 0.68)',\n        predefineColors: [\n          '#ff4500',\n          '#ff8c00',\n          '#ffd700',\n          '#90ee90',\n          '#00ced1',\n          '#1e90ff',\n          '#c71585',\n          'rgba(255, 69, 0, 0.68)',\n          'rgb(255, 120, 0)',\n          'hsv(51, 100, 98)',\n          'hsva(120, 40, 94, 0.5)',\n          'hsl(181, 100%, 37%)',\n          'hsla(209, 100%, 56%, 0.73)',\n          '#c7158577'\n        ]\n      }\n    }\n  };\n<\/script>\n")])])])],2),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("df-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-color-picker v-model="color"></df-color-picker>\n    <df-color-picker v-model="color" size="medium"></df-color-picker>\n    <df-color-picker v-model="color" size="small"></df-color-picker>\n    <df-color-picker v-model="color" size="mini"></df-color-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: \'#409EFF\'\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8)],1)},n=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"colorpicker-yan-se-xuan-ze-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#colorpicker-yan-se-xuan-ze-qi"}},[t._v("¶")]),t._v(" ColorPicker 颜色选择器")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"xuan-ze-tou-ming-du"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-tou-ming-du"}},[t._v("¶")]),t._v(" 选择透明度")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"yu-ding-yi-yan-se"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yu-ding-yi-yan-se"}},[t._v("¶")]),t._v(" 预定义颜色")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"bu-tong-chi-cun"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun"}},[t._v("¶")]),t._v(" 不同尺寸")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸")]),e("td",[t._v("string")]),e("td",[t._v("medium / small / mini")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("show-alpha")]),e("td",[t._v("是否支持透明度选择")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("color-format")]),e("td",[t._v("写入 v-model 的颜色的格式")]),e("td",[t._v("string")]),e("td",[t._v("hsl / hsv / hex / rgb")]),e("td",[t._v("hex（show-alpha 为 false）/ rgb（show-alpha 为 true）")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("ColorPicker 下拉框的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("predefine")]),e("td",[t._v("预定义颜色")]),e("td",[t._v("array")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("当绑定值变化时触发")]),e("td",[t._v("当前值")])]),e("tr",[e("td",[t._v("active-change")]),e("td",[t._v("面板中当前显示的颜色发生改变时触发")]),e("td",[t._v("当前显示的颜色值")])])])])}],c=r("5530"),l={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("div",[r("div",{staticClass:"block"},[r("span",{staticClass:"demonstration"},[t._v("有默认值")]),t._v(" "),r("df-color-picker",{model:{value:t.color1,callback:function(e){t.color1=e},expression:"color1"}})],1),t._v(" "),r("div",{staticClass:"block"},[r("span",{staticClass:"demonstration"},[t._v("无默认值")]),t._v(" "),r("df-color-picker",{model:{value:t.color2,callback:function(e){t.color2=e},expression:"color2"}})],1)])]],2)},e=[],r={data:function(){return{color1:"#409EFF",color2:null}}};return Object(c["a"])({render:t,staticRenderFns:e},r)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("df-color-picker",{attrs:{"show-alpha":""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})]],2)},e=[],r={data:function(){return{color:"rgba(19, 206, 102, 0.8)"}}};return Object(c["a"])({render:t,staticRenderFns:e},r)}(),"df-demo2":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("df-color-picker",{attrs:{"show-alpha":"",predefine:t.predefineColors},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})]],2)},e=[],r={data:function(){return{color:"rgba(255, 69, 0, 0.68)",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]}}};return Object(c["a"])({render:t,staticRenderFns:e},r)}(),"df-demo3":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("div",[r("df-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),r("df-color-picker",{attrs:{size:"medium"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),r("df-color-picker",{attrs:{size:"small"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),r("df-color-picker",{attrs:{size:"mini"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)]],2)},e=[],r={data:function(){return{color:"#409EFF"}}};return Object(c["a"])({render:t,staticRenderFns:e},r)}()}},a=l,s=r("2877"),d=Object(s["a"])(a,o,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d0656.c43e82c2.js.map