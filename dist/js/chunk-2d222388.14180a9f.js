(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222388"],{ce4d:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("用于空数据展示。")]),t._m(1),t._m(2),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("text")]),t._v("属性可以更改提示的文字。")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="empty-demo-base">\n    <div class="block">\n      <df-empty />\n    </div>\n\n    <div class="block">\n      <df-empty text="自定义提示文字" />\n    </div>\n  </div>\n</template>\n')])])])],2),t._m(3),e("p",[t._v("Empty 组件提供了除了默认类型以外的六种图片，可以在不同场景下选择合适的图片类型。")]),e("demo-block",[e("div",[e("p",[t._v("额外的类型："),e("code",[t._v("noRecord")]),t._v("、"),e("code",[t._v("noPatient")]),t._v("、"),e("code",[t._v("noAdmitting")]),t._v("、"),e("code",[t._v("noNet")]),t._v("、"),e("code",[t._v("noServer")]),t._v("、"),e("code",[t._v("noPage")]),t._v("，通过设置"),e("code",[t._v("type")]),t._v("属性来配置它们。")])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <div class="empty-demo-base">\n      <div class="block">\n        <df-empty text="暂无记录" type="noRecord"/>\n      </div>\n      <div class="block">\n        <df-empty text="目前无患者" type="noPatient"/>\n      </div>\n    </div>\n\n    <div class="empty-demo-base">\n      <div class="block">\n        <df-empty text="暂无待入科患者" type="noAdmitting"/>\n      </div>\n      <div class="block">\n        <df-empty text="当前暂无连接，请检查网络" type="noNet"/>\n      </div>\n    </div>\n\n    <div class="empty-demo-base">\n      <div class="block">\n        <df-empty text="当前页面丢失，请检查服务器" type="noServer"/>\n      </div>\n      <div class="block">\n        <df-empty text="404：服务器遇到故障" type="noPage"/>\n      </div>\n    </div>\n  </div>\n</template>\n')])])])],2),t._m(4),t._m(5)],1)},a=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"empty-kong-shu-ju-zhan-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#empty-kong-shu-ju-zhan-shi"}},[t._v("¶")]),t._v(" Empty 空数据展示")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("p",[t._v("默认的提示文字是 “暂无数据”，可以通过"),e("code",[t._v("text")]),t._v("属性更改，参见第二个例子。")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"bu-tong-lei-xing-tu-pian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-lei-xing-tu-pian"}},[t._v("¶")]),t._v(" 不同类型图片")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("自定义提示文字")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("暂无数据")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("图片类型")]),e("td",[t._v("string")]),e("td",[t._v("noData/noRecord/noPatient/noAdmitting/noNet/noServer/noPage")]),e("td",[t._v("noData")])])])])}],d=n("5530"),i={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticClass:"empty-demo-base"},[n("div",{staticClass:"block"},[n("df-empty")],1),t._v(" "),n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"自定义提示文字"}})],1)])]],2)},e=[],n={};return Object(d["a"])({render:t,staticRenderFns:e},n)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticClass:"empty-demo-base"},[n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"暂无记录",type:"noRecord"}})],1),t._v(" "),n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"目前无患者",type:"noPatient"}})],1)]),t._v(" "),n("div",{staticClass:"empty-demo-base"},[n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"暂无待入科患者",type:"noAdmitting"}})],1),t._v(" "),n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"当前暂无连接，请检查网络",type:"noNet"}})],1)]),t._v(" "),n("div",{staticClass:"empty-demo-base"},[n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"当前页面丢失，请检查服务器",type:"noServer"}})],1),t._v(" "),n("div",{staticClass:"block"},[n("df-empty",{attrs:{text:"404：服务器遇到故障",type:"noPage"}})],1)])])]],2)},e=[],n={};return Object(d["a"])({render:t,staticRenderFns:e},n)}()}},o=i,v=n("2877"),c=Object(v["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d222388.14180a9f.js.map