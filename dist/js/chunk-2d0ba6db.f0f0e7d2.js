(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba6db"],{"36bd":function(t,e,n){"use strict";n.r(e);var d=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("用于布局的容器组件，方便快速搭建页面的基本结构：")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),e("demo-block",[e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-container>\n      <df-header>Header</df-header>\n      <df-main>Main</df-main>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-header>Header</df-header>\n      <df-main>Main</df-main>\n      <df-footer>Footer</df-footer>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-aside width="200px">Aside</df-aside>\n      <df-main>Main</df-main>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-header>Header</df-header>\n      <df-container>\n        <df-aside width="200px">Aside</df-aside>\n        <df-main>Main</df-main>\n      </df-container>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-header>Header</df-header>\n      <df-container>\n        <df-aside width="200px">Aside</df-aside>\n        <df-container>\n          <df-main>Main</df-main>\n          <df-footer>Footer</df-footer>\n        </df-container>\n      </df-container>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-aside width="200px">Aside</df-aside>\n      <df-container>\n        <df-header>Header</df-header>\n        <df-main>Main</df-main>\n      </df-container>\n    </df-container>\n    <br/>\n    <df-container>\n      <df-aside width="200px">Aside</df-aside>\n      <df-container>\n        <df-header>Header</df-header>\n        <df-main>Main</df-main>\n        <df-footer>Footer</df-footer>\n      </df-container>\n    </df-container>\n  </div>\n</template>\n\n<style>\n  .df-header, .df-footer {\n    background-color: #B3C0D1;\n    color: #333;\n    text-align: center;\n    line-height: 60px;\n  }\n  \n  .df-aside {\n    background-color: #D3DCE6;\n    color: #333;\n    text-align: center;\n    line-height: 200px;\n  }\n  \n  .df-main {\n    background-color: #E9EEF3;\n    color: #333;\n    text-align: center;\n    line-height: 160px;\n  }\n  \n  body > .df-container {\n    margin-bottom: 40px;\n  }\n  \n  .df-container:nth-child(5) .df-aside,\n  .df-container:nth-child(6) .df-aside {\n    line-height: 260px;\n  }\n  \n  .df-container:nth-child(7) .df-aside {\n    line-height: 320px;\n  }\n</style>\n')])])])],2),t._m(8),e("demo-block",[e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-container style="height: 500px; border: 1px solid #eee">\n    <df-aside width="200px" style="background-color: rgb(238, 241, 246)">\n      <df-menu :default-openeds="[\'1\', \'3\']">\n        <df-submenu index="1">\n          <template slot="title"><i class="df-icon-mail-o"></i>导航一</template>\n          <df-menu-item-group>\n            <template slot="title">分组一</template>\n            <df-menu-item index="1-1">选项1</df-menu-item>\n            <df-menu-item index="1-2">选项2</df-menu-item>\n          </df-menu-item-group>\n          <df-menu-item-group title="分组2">\n            <df-menu-item index="1-3">选项3</df-menu-item>\n          </df-menu-item-group>\n          <df-submenu index="1-4">\n            <template slot="title">选项4</template>\n            <df-menu-item index="1-4-1">选项4-1</df-menu-item>\n          </df-submenu>\n        </df-submenu>\n        <df-submenu index="2">\n          <template slot="title"><i class="df-icon-4square"></i>导航二</template>\n          <df-menu-item-group>\n            <template slot="title">分组一</template>\n            <df-menu-item index="2-1">选项1</df-menu-item>\n            <df-menu-item index="2-2">选项2</df-menu-item>\n          </df-menu-item-group>\n          <df-menu-item-group title="分组2">\n            <df-menu-item index="2-3">选项3</df-menu-item>\n          </df-menu-item-group>\n          <df-submenu index="2-4">\n            <template slot="title">选项4</template>\n            <df-menu-item index="2-4-1">选项4-1</df-menu-item>\n          </df-submenu>\n        </df-submenu>\n        <df-submenu index="3">\n          <template slot="title"><i class="df-icon-settings"></i>导航三</template>\n          <df-menu-item-group>\n            <template slot="title">分组一</template>\n            <df-menu-item index="3-1">选项1</df-menu-item>\n            <df-menu-item index="3-2">选项2</df-menu-item>\n          </df-menu-item-group>\n          <df-menu-item-group title="分组2">\n            <df-menu-item index="3-3">选项3</df-menu-item>\n          </df-menu-item-group>\n          <df-submenu index="3-4">\n            <template slot="title">选项4</template>\n            <df-menu-item index="3-4-1">选项4-1</df-menu-item>\n          </df-submenu>\n        </df-submenu>\n      </df-menu>\n    </df-aside>\n    \n    <df-container>\n      <df-header style="text-align: right; font-size: 12px">\n        <df-dropdown>\n          <i class="df-icon-settings" style="margin-right: 15px"></i>\n          <df-dropdown-menu slot="dropdown">\n            <df-dropdown-item>查看</df-dropdown-item>\n            <df-dropdown-item>新增</df-dropdown-item>\n            <df-dropdown-item>删除</df-dropdown-item>\n          </df-dropdown-menu>\n        </df-dropdown>\n        <span>王小虎</span>\n      </df-header>\n      \n      <df-main>\n        <df-table :data="tableData">\n          <df-table-column prop="date" label="日期" width="140">\n          </df-table-column>\n          <df-table-column prop="name" label="姓名" width="120">\n          </df-table-column>\n          <df-table-column prop="address" label="地址">\n          </df-table-column>\n        </df-table>\n      </df-main>\n    </df-container>\n  </df-container>\n</template>\n\n<style>\n  .df-header {\n    background-color: #B3C0D1;\n    color: #333;\n    line-height: 60px;\n  }\n  \n  .df-aside {\n    color: #333;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const item = {\n        date: \'2016-05-02\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\'\n      };\n      return {\n        tableData: Array(20).fill(item)\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16)],1)},i=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"container-bu-ju-rong-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-bu-ju-rong-qi"}},[t._v("¶")]),t._v(" Container 布局容器")])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("<df-container>")]),t._v("：外层容器。当子元素中包含 "),e("code",[t._v("<df-header>")]),t._v(" 或 "),e("code",[t._v("<df-footer>")]),t._v(" 时，全部子元素会垂直上下排列，否则会水平左右排列。")])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("<df-header>")]),t._v("：顶栏容器。")])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("<df-aside>")]),t._v("：侧边栏容器。")])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("<df-main>")]),t._v("：主要区域容器。")])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("<df-footer>")]),t._v("：底栏容器。")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tip"},[e("p",[t._v("以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，"),e("code",[t._v("<df-container>")]),t._v(" 的子元素只能是后四者，后四者的父元素也只能是 "),e("code",[t._v("<df-container>")]),t._v("。")])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"chang-jian-ye-mian-bu-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chang-jian-ye-mian-bu-ju"}},[t._v("¶")]),t._v(" 常见页面布局")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-li"}},[t._v("¶")]),t._v(" 实例")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"container-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-attributes"}},[t._v("¶")]),t._v(" Container Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("direction")]),e("td",[t._v("子元素的排列方向")]),e("td",[t._v("string")]),e("td",[t._v("horizontal / vertical")]),e("td",[t._v("子元素中有 "),e("code",[t._v("df-header")]),t._v(" 或 "),e("code",[t._v("df-footer")]),t._v(" 时为 vertical，否则为 horizontal")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"header-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header-attributes"}},[t._v("¶")]),t._v(" Header Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("height")]),e("td",[t._v("顶栏高度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("60px")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"aside-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aside-attributes"}},[t._v("¶")]),t._v(" Aside Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("width")]),e("td",[t._v("侧边栏宽度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("300px")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"footer-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer-attributes"}},[t._v("¶")]),t._v(" Footer Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("height")]),e("td",[t._v("底栏高度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("60px")])])])])}],a=n("5530"),r=(n("cb29"),{name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-main",[t._v("Main")])],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-main",[t._v("Main")]),t._v(" "),n("df-footer",[t._v("Footer")])],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),n("df-main",[t._v("Main")])],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-container",[n("df-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),n("df-main",[t._v("Main")])],1)],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-container",[n("df-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),n("df-container",[n("df-main",[t._v("Main")]),t._v(" "),n("df-footer",[t._v("Footer")])],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-main",[t._v("Main")])],1)],1),t._v(" "),n("br"),t._v(" "),n("df-container",[n("df-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),n("df-container",[n("df-header",[t._v("Header")]),t._v(" "),n("df-main",[t._v("Main")]),t._v(" "),n("df-footer",[t._v("Footer")])],1)],1)],1)]],2)},e=[],n={};return Object(a["a"])({render:t,staticRenderFns:e},n)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[n("df-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("df-menu",{attrs:{"default-openeds":["1","3"]}},[n("df-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-mail-o"}),t._v("导航一")]),t._v(" "),n("df-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项4-1")])],2)],2),t._v(" "),n("df-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-4square"}),t._v("导航二")]),t._v(" "),n("df-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")])],2),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项4-1")])],2)],2),t._v(" "),n("df-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-settings"}),t._v("导航三")]),t._v(" "),n("df-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"3-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"3-2"}},[t._v("选项2")])],2),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"3-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"3-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"3-4-1"}},[t._v("选项4-1")])],2)],2)],1)],1),t._v(" "),n("df-container",[n("df-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("df-dropdown",[n("i",{staticClass:"df-icon-settings",staticStyle:{"margin-right":"15px"}}),t._v(" "),n("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("df-dropdown-item",[t._v("查看")]),t._v(" "),n("df-dropdown-item",[t._v("新增")]),t._v(" "),n("df-dropdown-item",[t._v("删除")])],1)],1),t._v(" "),n("span",[t._v("王小虎")])],1),t._v(" "),n("df-main",[n("df-table",{attrs:{data:t.tableData}},[n("df-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),t._v(" "),n("df-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),n("df-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)],1)]],2)},e=[],n={data:function(){var t={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(t)}}};return Object(a["a"])({render:t,staticRenderFns:e},n)}()}}),f=r,o=n("2877"),s=Object(o["a"])(f,d,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0ba6db.f0f0e7d2.js.map