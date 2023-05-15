(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4c47"],{"3bdf":function(t,n,d){"use strict";d.r(n);var e=function(){var t=this,n=t._self._c;return n("section",{staticClass:"content df-doc"},[t._m(0),n("p",[t._v("常用的操作按钮。")]),t._m(1),n("p",[t._v("基础的按钮用法。")]),n("demo-block",[n("div",[n("p",[t._v("使用"),n("code",[t._v("type")]),t._v("、"),n("code",[t._v("plain")]),t._v("、"),n("code",[t._v("round")]),t._v("和"),n("code",[t._v("circle")]),t._v("属性来定义 Button 的样式。")])]),n("template",{slot:"source"},[n("df-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-row>\n      <df-button>默认按钮</df-button>\n      <df-button type="primary">主要</df-button>\n      <df-button type="success">成功</df-button>\n      <df-button type="info">信息</df-button>\n      <df-button type="warning">警告</df-button>\n      <df-button type="danger">危险</df-button>\n    </df-row>\n\n    <df-row>\n      <df-button plain>朴素按钮</df-button>\n      <df-button type="primary" plain>主要</df-button>\n      <df-button type="success" plain>成功</df-button>\n      <df-button type="info" plain>信息</df-button>\n      <df-button type="warning" plain>警告</df-button>\n      <df-button type="danger" plain>危险</df-button>\n    </df-row>\n\n    <df-row>\n      <df-button round>圆角按钮</df-button>\n      <df-button type="primary" round>主要</df-button>\n      <df-button type="success" round>成功</df-button>\n      <df-button type="info" round>信息</df-button>\n      <df-button type="warning" round>警告</df-button>\n      <df-button type="danger" round>危险</df-button>\n    </df-row>\n\n    <df-row>\n      <df-button icon="df-icon-search" circle></df-button>\n      <df-button type="primary" icon="df-icon-edit" circle></df-button>\n      <df-button type="success" icon="df-icon-success" circle></df-button>\n      <df-button type="info" icon="df-icon-message" circle></df-button>\n      <df-button type="warning" icon="df-icon-warning" circle></df-button>\n      <df-button type="danger" icon="df-icon-delete" circle></df-button>\n    </df-row>\n  </div>\n</template>\n')])])])],2),t._m(2),n("p",[t._v("按钮不可用状态。")]),n("demo-block",[n("div",[n("p",[t._v("你可以使用"),n("code",[t._v("disabled")]),t._v("属性来定义按钮是否可用，它接受一个"),n("code",[t._v("Boolean")]),t._v("值。")])]),n("template",{slot:"source"},[n("df-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-row>\n      <df-button disabled>默认按钮</df-button>\n      <df-button type="primary" disabled>主要</df-button>\n      <df-button type="success" disabled>成功</df-button>\n      <df-button type="info" disabled>信息</df-button>\n      <df-button type="warning" disabled>警告</df-button>\n      <df-button type="danger" disabled>危险</df-button>\n    </df-row>\n\n    <df-row>\n      <df-button plain disabled>朴素按钮</df-button>\n      <df-button type="primary" plain disabled>主要</df-button>\n      <df-button type="success" plain disabled>成功</df-button>\n      <df-button type="info" plain disabled>信息</df-button>\n      <df-button type="warning" plain disabled>警告</df-button>\n      <df-button type="danger" plain disabled>危险</df-button>\n    </df-row>\n  </div>\n</template>\n')])])])],2),t._m(3),n("p",[t._v("没有边框和背景色的按钮。")]),n("demo-block",[n("template",{slot:"source"},[n("df-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-button type="text">文字按钮</df-button>\n    <df-button type="text" disabled>文字按钮</df-button>\n  </div>\n</template>\n')])])])],2),t._m(4),n("p",[t._v("带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。")]),n("demo-block",[n("div",[n("p",[t._v("设置"),n("code",[t._v("icon")]),t._v("属性即可，icon 的列表可以参考 DfUI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用"),n("code",[t._v("i")]),t._v("标签即可，可以使用自定义图标。")])]),n("template",{slot:"source"},[n("df-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-button type="primary" icon="df-icon-edit"></df-button>\n    <df-button type="primary" icon="df-icon-user-group"></df-button>\n    <df-button type="primary" icon="df-icon-delete"></df-button>\n    <df-button type="primary" icon="df-icon-search">搜索</df-button>\n    <df-button type="primary">上传<i class="df-icon-upload df-icon--right"></i></df-button>\n  </div>\n</template>\n')])])])],2),t._m(5),n("p",[t._v("以按钮组的方式出现，常用于多项类似操作。")]),n("demo-block",[n("div",[n("p",[t._v("使用"),n("code",[t._v("<df-button-group>")]),t._v("标签来嵌套你的按钮。")])]),n("template",{slot:"source"},[n("df-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-button-group>\n      <df-button type="primary" icon="df-icon-arrow-left">上一页</df-button>\n      <df-button type="primary">下一页<i class="df-icon-arrow-right df-icon--right"></i></df-button>\n    </df-button-group>\n    <df-button-group>\n      <df-button type="primary" icon="df-icon-edit"></df-button>\n      <df-button type="primary" icon="df-icon-user-group"></df-button>\n      <df-button type="primary" icon="df-icon-delete"></df-button>\n    </df-button-group>\n  </div>\n</template>\n')])])])],2),t._m(6),n("p",[t._v("点击按钮后进行数据加载操作，在按钮上显示加载状态。")]),n("demo-block",[n("div",[n("p",[t._v("要设置为 loading 状态，只要设置"),n("code",[t._v("loading")]),t._v("属性为"),n("code",[t._v("true")]),t._v("即可。")])]),n("template",{slot:"source"},[n("df-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-button type="primary" :loading="true">加载中</df-button>\n</template>\n')])])])],2),t._m(7),n("p",[t._v("Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。")]),n("demo-block",[n("div",[n("p",[t._v("额外的尺寸："),n("code",[t._v("medium")]),t._v("、"),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("mini")]),t._v("，通过设置"),n("code",[t._v("size")]),t._v("属性来配置它们。")])]),n("template",{slot:"source"},[n("df-demo6")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-row>\n      <df-button size="mini">小型</df-button>\n      <df-button>默认</df-button>\n      <df-button size="medium">中等</df-button>\n    </df-row>\n    <df-row>\n      <df-button size="mini" round>小型</df-button>\n      <df-button round>默认</df-button>\n      <df-button size="medium" round>中等</df-button>\n    </df-row>\n  </div>\n</template>\n')])])])],2),t._m(8),t._m(9),t._m(10),t._m(11)],1)},o=[function(){var t=this,n=t._self._c;return n("h2",{attrs:{id:"button-an-niu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#button-an-niu"}},[t._v("¶")]),t._v(" Button 按钮")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai"}},[t._v("¶")]),t._v(" 禁用状态")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"wen-zi-an-niu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-an-niu"}},[t._v("¶")]),t._v(" 文字按钮")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"tu-biao-an-niu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-an-niu"}},[t._v("¶")]),t._v(" 图标按钮")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"an-niu-zu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-niu-zu"}},[t._v("¶")]),t._v(" 按钮组")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"jia-zai-zhong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jia-zai-zhong"}},[t._v("¶")]),t._v(" 加载中")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"bu-tong-chi-cun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun"}},[t._v("¶")]),t._v(" 不同尺寸")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("size")]),n("td",[t._v("尺寸")]),n("td",[t._v("string")]),n("td",[t._v("medium / small / mini")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("type")]),n("td",[t._v("类型")]),n("td",[t._v("string")]),n("td",[t._v("primary / success / warning / danger / info / text")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("plain")]),n("td",[t._v("是否朴素按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("round")]),n("td",[t._v("是否圆角按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("circle")]),n("td",[t._v("是否圆形按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("loading")]),n("td",[t._v("是否加载中状态")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("是否禁用状态")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("图标类名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("autofocus")]),n("td",[t._v("是否默认聚焦")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("native-type")]),n("td",[t._v("原生 type 属性")]),n("td",[t._v("string")]),n("td",[t._v("button / submit / reset")]),n("td",[t._v("button")])])])])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("¶")]),t._v(" Methods")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("focus")]),n("td",[t._v("聚焦至按钮, 当按钮被聚焦时, 按下 enter 键会触发按钮的 click 事件")]),n("td")])])])}],r=d("5530"),i={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-row",[d("df-button",[t._v("默认按钮")]),t._v(" "),d("df-button",{attrs:{type:"primary"}},[t._v("主要")]),t._v(" "),d("df-button",{attrs:{type:"success"}},[t._v("成功")]),t._v(" "),d("df-button",{attrs:{type:"info"}},[t._v("信息")]),t._v(" "),d("df-button",{attrs:{type:"warning"}},[t._v("警告")]),t._v(" "),d("df-button",{attrs:{type:"danger"}},[t._v("危险")])],1),t._v(" "),d("df-row",[d("df-button",{attrs:{plain:""}},[t._v("朴素按钮")]),t._v(" "),d("df-button",{attrs:{type:"primary",plain:""}},[t._v("主要")]),t._v(" "),d("df-button",{attrs:{type:"success",plain:""}},[t._v("成功")]),t._v(" "),d("df-button",{attrs:{type:"info",plain:""}},[t._v("信息")]),t._v(" "),d("df-button",{attrs:{type:"warning",plain:""}},[t._v("警告")]),t._v(" "),d("df-button",{attrs:{type:"danger",plain:""}},[t._v("危险")])],1),t._v(" "),d("df-row",[d("df-button",{attrs:{round:""}},[t._v("圆角按钮")]),t._v(" "),d("df-button",{attrs:{type:"primary",round:""}},[t._v("主要")]),t._v(" "),d("df-button",{attrs:{type:"success",round:""}},[t._v("成功")]),t._v(" "),d("df-button",{attrs:{type:"info",round:""}},[t._v("信息")]),t._v(" "),d("df-button",{attrs:{type:"warning",round:""}},[t._v("警告")]),t._v(" "),d("df-button",{attrs:{type:"danger",round:""}},[t._v("危险")])],1),t._v(" "),d("df-row",[d("df-button",{attrs:{icon:"df-icon-search",circle:""}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-edit",circle:""}}),t._v(" "),d("df-button",{attrs:{type:"success",icon:"df-icon-success",circle:""}}),t._v(" "),d("df-button",{attrs:{type:"info",icon:"df-icon-message",circle:""}}),t._v(" "),d("df-button",{attrs:{type:"warning",icon:"df-icon-warning",circle:""}}),t._v(" "),d("df-button",{attrs:{type:"danger",icon:"df-icon-delete",circle:""}})],1)],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo1":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-row",[d("df-button",{attrs:{disabled:""}},[t._v("默认按钮")]),t._v(" "),d("df-button",{attrs:{type:"primary",disabled:""}},[t._v("主要")]),t._v(" "),d("df-button",{attrs:{type:"success",disabled:""}},[t._v("成功")]),t._v(" "),d("df-button",{attrs:{type:"info",disabled:""}},[t._v("信息")]),t._v(" "),d("df-button",{attrs:{type:"warning",disabled:""}},[t._v("警告")]),t._v(" "),d("df-button",{attrs:{type:"danger",disabled:""}},[t._v("危险")])],1),t._v(" "),d("df-row",[d("df-button",{attrs:{plain:"",disabled:""}},[t._v("朴素按钮")]),t._v(" "),d("df-button",{attrs:{type:"primary",plain:"",disabled:""}},[t._v("主要")]),t._v(" "),d("df-button",{attrs:{type:"success",plain:"",disabled:""}},[t._v("成功")]),t._v(" "),d("df-button",{attrs:{type:"info",plain:"",disabled:""}},[t._v("信息")]),t._v(" "),d("df-button",{attrs:{type:"warning",plain:"",disabled:""}},[t._v("警告")]),t._v(" "),d("df-button",{attrs:{type:"danger",plain:"",disabled:""}},[t._v("危险")])],1)],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo2":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-button",{attrs:{type:"text"}},[t._v("文字按钮")]),t._v(" "),d("df-button",{attrs:{type:"text",disabled:""}},[t._v("文字按钮")])],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo3":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-button",{attrs:{type:"primary",icon:"df-icon-edit"}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-user-group"}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-delete"}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-search"}},[t._v("搜索")]),t._v(" "),d("df-button",{attrs:{type:"primary"}},[t._v("上传"),d("i",{staticClass:"df-icon-upload df-icon--right"})])],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo4":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-button-group",[d("df-button",{attrs:{type:"primary",icon:"df-icon-arrow-left"}},[t._v("上一页")]),t._v(" "),d("df-button",{attrs:{type:"primary"}},[t._v("下一页"),d("i",{staticClass:"df-icon-arrow-right df-icon--right"})])],1),t._v(" "),d("df-button-group",[d("df-button",{attrs:{type:"primary",icon:"df-icon-edit"}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-user-group"}}),t._v(" "),d("df-button",{attrs:{type:"primary",icon:"df-icon-delete"}})],1)],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo5":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("df-button",{attrs:{type:"primary",loading:!0}},[t._v("加载中")])]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}(),"df-demo6":function(){var t=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("div",[[d("div",[d("df-row",[d("df-button",{attrs:{size:"mini"}},[t._v("小型")]),t._v(" "),d("df-button",[t._v("默认")]),t._v(" "),d("df-button",{attrs:{size:"medium"}},[t._v("中等")])],1),t._v(" "),d("df-row",[d("df-button",{attrs:{size:"mini",round:""}},[t._v("小型")]),t._v(" "),d("df-button",{attrs:{round:""}},[t._v("默认")]),t._v(" "),d("df-button",{attrs:{size:"medium",round:""}},[t._v("中等")])],1)],1)]],2)},n=[],d={};return Object(r["a"])({render:t,staticRenderFns:n},d)}()}},a=i,s=d("2877"),u=Object(s["a"])(a,e,o,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c4c47.c0a12767.js.map