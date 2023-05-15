(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efd4d"],{"9a7f":function(e,n,l){"use strict";l.r(n);var a=function(){var e=this,n=e._self._c;return n("section",{staticClass:"content df-doc"},[e._m(0),n("p",[e._v("用清晰的层级结构展示信息，可展开或折叠。")]),e._m(1),n("p",[e._v("基础的树形结构展示。")]),n("demo-block",[n("template",{slot:"source"},[n("df-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <df-tree-table :data=\"data\" :column=\"column\" :props=\"defaultProps\" @node-click=\"handleNodeClick\"></df-tree-table>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      data: [{\n        valueKey: '001',\n        label: '胸部左侧X光',\n        price: '38',\n        size: '√',\n        children: [{\n          valueKey: '021',\n          label: '头部检测',\n          price: '25',\n          size: '√'\n        }, {\n          valueKey: '022',\n          label: '核酸检测',\n          position: '西湖区',\n          price: '22',\n          size: '√'\n        }]\n      }, {\n        valueKey: '002',\n        label: '胸透',\n        price: '36',\n        size: '√',\n        children: [{\n          valueKey: '023',\n          label: '血液检测',\n          price: '21',\n          size: '√'\n        }]\n      }, {\n        valueKey: '003',\n        label: '胸部右侧X光',\n        price: '35',\n        size: '√',\n        children: [{\n          valueKey: '024',\n          label: '酒精检测',\n          price: '29',\n          size: '√'\n        }]\n      }, {\n        valueKey: '004',\n        label: '抽血检测',\n        price: '34',\n        size: '√'\n      }, {\n        valueKey: '005',\n        label: '核算检测',\n        price: '99',\n        size: '√'\n      }],\n      defaultProps: {\n        children: 'children',\n        label: 'label'\n      },\n      column: [{\n        label: '收费名称',\n        prop: 'label',\n        width: 200\n      }, {\n        label: '位置',\n        prop: 'position',\n        width: 200\n      }, {\n        label: '价格',\n        prop: 'price',\n        width: 200\n      }, {\n        label: '是否',\n        prop: 'size',\n        width: 200\n      }]\n    }\n  },\n  methods: {\n    handleNodeClick (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(2),n("p",[e._v("适用于需要选择层级时使用。")]),n("demo-block",[n("template",{slot:"source"},[n("df-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <df-tree-table\n    :props=\"defaultProps\"\n    :data=\"data\"\n    :column=\"column\"\n    show-checkbox\n    @check-change=\"handleCheckChange\">\n  </df-tree-table>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      data: [{\n        valueKey: '001',\n        label: '胸部左侧X光',\n        price: '38',\n        size: '√',\n        children: [{\n          valueKey: '021',\n          label: '头部检测',\n          price: '25',\n          size: '√'\n        }, {\n          valueKey: '022',\n          label: '核酸检测',\n          position: '西湖区',\n          price: '22',\n          size: '√'\n        }]\n      }, {\n        valueKey: '002',\n        label: '胸透',\n        price: '36',\n        size: '√',\n        children: [{\n          valueKey: '023',\n          label: '血液检测',\n          price: '21',\n          size: '√'\n        }]\n      }, {\n        valueKey: '003',\n        label: '胸部右侧X光',\n        price: '35',\n        size: '√',\n        children: [{\n          valueKey: '024',\n          label: '酒精检测',\n          price: '29',\n          size: '√'\n        }]\n      }, {\n        valueKey: '004',\n        label: '抽血检测',\n        price: '34',\n        size: '√'\n      }, {\n        valueKey: '005',\n        label: '核算检测',\n        price: '99',\n        size: '√'\n      }],\n      defaultProps: {\n        children: 'children',\n        label: 'label'\n      },\n      column: [{\n        label: '收费名称',\n        prop: 'label',\n        width: 200\n      }, {\n        label: '位置',\n        prop: 'position',\n        width: 200\n      }, {\n        label: '价格',\n        prop: 'price',\n        width: 200\n      }, {\n        label: '是否',\n        prop: 'size',\n        width: 200\n      }]\n    }\n  },\n  methods: {\n    handleCheckChange (data, checked, indeterminate) {\n      console.log(data, checked, indeterminate)\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(3),n("p",[e._v("可将 TreeTable 的某些节点设置为禁用状态")]),n("demo-block",[n("div",[n("p",[e._v("通过"),n("code",[e._v("disabled")]),e._v("设置禁用状态。")])]),n("template",{slot:"source"},[n("df-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <df-tree-table\n    :data=\"data\"\n    :column=\"column\"\n    show-checkbox\n    node-key=\"id\"\n    :default-expanded-keys=\"[2, 3]\"\n    :default-checked-keys=\"[5]\">\n  </df-tree-table>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      data: [{\n        id: 1,\n        valueKey: '001',\n        label: '胸部左侧X光',\n        price: '38',\n        size: '√',\n        children: [{\n          id: 21,\n          valueKey: '021',\n          label: '头部检测',\n          price: '25',\n          size: '√'\n        }, {\n          id: 22,\n          valueKey: '022',\n          label: '核酸检测',\n          position: '西湖区',\n          price: '22',\n          size: '√'\n        }]\n      }, {\n        id: 2,\n        valueKey: '002',\n        label: '胸透',\n        price: '36',\n        size: '√',\n        children: [{\n          id: 23,\n          valueKey: '023',\n          label: '血液检测',\n          price: '21',\n          size: '√',\n          disabled: true\n        }]\n      }, {\n        id: 3,\n        valueKey: '003',\n        label: '胸部右侧X光',\n        price: '35',\n        size: '√',\n        children: [{\n          id: 24,\n          valueKey: '024',\n          label: '酒精检测',\n          price: '29',\n          size: '√'\n        }]\n      }, {\n        id: 4,\n        valueKey: '004',\n        label: '抽血检测',\n        price: '34',\n        size: '√'\n      }, {\n        id: 5,\n        valueKey: '005',\n        label: '核算检测',\n        price: '99',\n        size: '√',\n        disabled: true\n      }],\n      defaultProps: {\n        children: 'children',\n        label: 'label'\n      },\n      column: [{\n        label: '收费名称',\n        prop: 'label',\n        width: 200\n      },\n      {\n        label: '位置',\n        prop: 'position',\n        width: 200\n      },\n      {\n        label: '价格',\n        prop: 'price',\n        width: 200\n      },\n      {\n        label: '是否',\n        prop: 'size',\n        width: 200\n      }]\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(4),n("p",[e._v("可以通过回调函数的形式设置某些节点设置为禁用状态")]),n("demo-block",[n("div",[n("p",[e._v("给 tree-table 传递函数"),n("code",[e._v("node-disabled-func")]),e._v(", 该函数自带两个参数, 节点的 node 和 data, 通过对节点数据的判断, 返回是否禁用, 与节点数据中的"),n("code",[e._v("disabled")]),e._v("同时生效。")])]),n("template",{slot:"source"},[n("df-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <df-tree-table\n    :data=\"data\"\n    :column=\"column\"\n    show-checkbox\n    node-key=\"id\"\n    :default-expanded-keys=\"[2, 3]\"\n    :default-checked-keys=\"[5]\"\n    :node-disabled-func=\"nodeDisabledFunc\">\n  </df-tree-table>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      data: [{\n        id: 1,\n        valueKey: '001',\n        label: '胸部左侧X光',\n        price: '38',\n        size: 'x',\n        children: [{\n          id: 21,\n          valueKey: '021',\n          label: '头部检测',\n          price: '25',\n          size: '√'\n        }, {\n          id: 22,\n          valueKey: '022',\n          label: '核酸检测',\n          position: '西湖区',\n          price: '22',\n          size: '√'\n        }]\n      }, {\n        id: 2,\n        valueKey: '002',\n        label: '胸透',\n        price: '36',\n        size: '√',\n        children: [{\n          id: 23,\n          valueKey: '023',\n          label: '血液检测',\n          price: '21',\n          size: '√',\n          disabled: true\n        }]\n      }, {\n        id: 3,\n        valueKey: '003',\n        label: '胸部右侧X光',\n        price: '35',\n        size: '√',\n        children: [{\n          id: 24,\n          valueKey: '024',\n          label: '酒精检测',\n          price: '29',\n          size: 'x'\n        }]\n      }, {\n        id: 4,\n        valueKey: '004',\n        label: '抽血检测',\n        price: '34',\n        size: '√'\n      }, {\n        id: 5,\n        valueKey: '005',\n        label: '核算检测',\n        price: '99',\n        size: '√',\n        disabled: true\n      }],\n      defaultProps: {\n        children: 'children',\n        label: 'label'\n      },\n      column: [{\n        label: '收费名称',\n        prop: 'label',\n        width: 200\n      },\n      {\n        label: '位置',\n        prop: 'position',\n        width: 200\n      },\n      {\n        label: '价格',\n        prop: 'price',\n        width: 200\n      },\n      {\n        label: '是否',\n        prop: 'size',\n        width: 200\n      }]\n    }\n  },\n  methods: {\n    nodeDisabledFunc (node, data) {\n      return data.size !== '√'\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13)],1)},t=[function(){var e=this,n=e._self._c;return n("h2",{attrs:{id:"treetable-shu-xing-biao-ge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#treetable-shu-xing-biao-ge"}},[e._v("¶")]),e._v(" TreeTable 树形表格")])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[e._v("¶")]),e._v(" 基础用法")])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"ke-xuan-ze"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ke-xuan-ze"}},[e._v("¶")]),e._v(" 可选择")])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai"}},[e._v("¶")]),e._v(" 禁用状态")])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"jin-yong-zhuang-tai-tong-guo-hui-diao-han-shu-dong-tai-she-zhi-jie-dian-de-jin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai-tong-guo-hui-diao-han-shu-dong-tai-she-zhi-jie-dian-de-jin-yong"}},[e._v("¶")]),e._v(" 禁用状态（通过回调函数动态设置节点的禁用）")])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[e._v("¶")]),e._v(" Attributes")])},function(){var e=this,n=e._self._c;return n("p",[e._v("其他配置项参考 "),n("a",{attrs:{href:"#/component/tree#attributes"}},[e._v("tree")])])},function(){var e=this,n=e._self._c;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("column")]),n("td",[e._v("展示数据")]),n("td",[e._v("array")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("show-header")]),n("td",[e._v("是否显示表头")]),n("td",[e._v("boolean")]),n("td",[e._v("—")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("node-disabled-func")]),n("td",[e._v("通过回调函数的形式控制某些节点的禁用状态")]),n("td",[e._v("function")]),n("td",[e._v("—")]),n("td",[e._v("—")])])])])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"column"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column"}},[e._v("¶")]),e._v(" Column")])},function(){var e=this,n=e._self._c;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("label")]),n("td",[e._v("显示列对应表头信息")]),n("td",[e._v("string")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("prop")]),n("td",[e._v("显示对应列的属性名")]),n("td",[e._v("string")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("width")]),n("td",[e._v("表头宽度")]),n("td",[e._v("string/number")]),n("td",[e._v("—")]),n("td",[e._v("—")])])])])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"fang-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fang-fa"}},[e._v("¶")]),e._v(" 方法")])},function(){var e=this,n=e._self._c;return n("p",[e._v("参考 "),n("a",{attrs:{href:"#/component/tree#fang-fa"}},[e._v("tree")])])},function(){var e=this,n=e._self._c;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("¶")]),e._v(" Events")])},function(){var e=this,n=e._self._c;return n("p",[e._v("参考 "),n("a",{attrs:{href:"#/component/tree#events"}},[e._v("tree")])])}],i=l("5530"),r={name:"component-doc",components:{"df-demo0":function(){var e=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[[l("df-tree-table",{attrs:{data:e.data,column:e.column,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})]],2)},n=[],l={data:function(){return{data:[{valueKey:"001",label:"胸部左侧X光",price:"38",size:"√",children:[{valueKey:"021",label:"头部检测",price:"25",size:"√"},{valueKey:"022",label:"核酸检测",position:"西湖区",price:"22",size:"√"}]},{valueKey:"002",label:"胸透",price:"36",size:"√",children:[{valueKey:"023",label:"血液检测",price:"21",size:"√"}]},{valueKey:"003",label:"胸部右侧X光",price:"35",size:"√",children:[{valueKey:"024",label:"酒精检测",price:"29",size:"√"}]},{valueKey:"004",label:"抽血检测",price:"34",size:"√"},{valueKey:"005",label:"核算检测",price:"99",size:"√"}],defaultProps:{children:"children",label:"label"},column:[{label:"收费名称",prop:"label",width:200},{label:"位置",prop:"position",width:200},{label:"价格",prop:"price",width:200},{label:"是否",prop:"size",width:200}]}},methods:{handleNodeClick:function(e){console.log(e)}}};return Object(i["a"])({render:e,staticRenderFns:n},l)}(),"df-demo1":function(){var e=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[[l("df-tree-table",{attrs:{props:e.defaultProps,data:e.data,column:e.column,"show-checkbox":""},on:{"check-change":e.handleCheckChange}})]],2)},n=[],l={data:function(){return{data:[{valueKey:"001",label:"胸部左侧X光",price:"38",size:"√",children:[{valueKey:"021",label:"头部检测",price:"25",size:"√"},{valueKey:"022",label:"核酸检测",position:"西湖区",price:"22",size:"√"}]},{valueKey:"002",label:"胸透",price:"36",size:"√",children:[{valueKey:"023",label:"血液检测",price:"21",size:"√"}]},{valueKey:"003",label:"胸部右侧X光",price:"35",size:"√",children:[{valueKey:"024",label:"酒精检测",price:"29",size:"√"}]},{valueKey:"004",label:"抽血检测",price:"34",size:"√"},{valueKey:"005",label:"核算检测",price:"99",size:"√"}],defaultProps:{children:"children",label:"label"},column:[{label:"收费名称",prop:"label",width:200},{label:"位置",prop:"position",width:200},{label:"价格",prop:"price",width:200},{label:"是否",prop:"size",width:200}]}},methods:{handleCheckChange:function(e,n,l){console.log(e,n,l)}}};return Object(i["a"])({render:e,staticRenderFns:n},l)}(),"df-demo2":function(){var e=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[[l("df-tree-table",{attrs:{data:e.data,column:e.column,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]}})]],2)},n=[],l={data:function(){return{data:[{id:1,valueKey:"001",label:"胸部左侧X光",price:"38",size:"√",children:[{id:21,valueKey:"021",label:"头部检测",price:"25",size:"√"},{id:22,valueKey:"022",label:"核酸检测",position:"西湖区",price:"22",size:"√"}]},{id:2,valueKey:"002",label:"胸透",price:"36",size:"√",children:[{id:23,valueKey:"023",label:"血液检测",price:"21",size:"√",disabled:!0}]},{id:3,valueKey:"003",label:"胸部右侧X光",price:"35",size:"√",children:[{id:24,valueKey:"024",label:"酒精检测",price:"29",size:"√"}]},{id:4,valueKey:"004",label:"抽血检测",price:"34",size:"√"},{id:5,valueKey:"005",label:"核算检测",price:"99",size:"√",disabled:!0}],defaultProps:{children:"children",label:"label"},column:[{label:"收费名称",prop:"label",width:200},{label:"位置",prop:"position",width:200},{label:"价格",prop:"price",width:200},{label:"是否",prop:"size",width:200}]}}};return Object(i["a"])({render:e,staticRenderFns:n},l)}(),"df-demo3":function(){var e=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[[l("df-tree-table",{attrs:{data:e.data,column:e.column,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],"node-disabled-func":e.nodeDisabledFunc}})]],2)},n=[],l={data:function(){return{data:[{id:1,valueKey:"001",label:"胸部左侧X光",price:"38",size:"x",children:[{id:21,valueKey:"021",label:"头部检测",price:"25",size:"√"},{id:22,valueKey:"022",label:"核酸检测",position:"西湖区",price:"22",size:"√"}]},{id:2,valueKey:"002",label:"胸透",price:"36",size:"√",children:[{id:23,valueKey:"023",label:"血液检测",price:"21",size:"√",disabled:!0}]},{id:3,valueKey:"003",label:"胸部右侧X光",price:"35",size:"√",children:[{id:24,valueKey:"024",label:"酒精检测",price:"29",size:"x"}]},{id:4,valueKey:"004",label:"抽血检测",price:"34",size:"√"},{id:5,valueKey:"005",label:"核算检测",price:"99",size:"√",disabled:!0}],defaultProps:{children:"children",label:"label"},column:[{label:"收费名称",prop:"label",width:200},{label:"位置",prop:"position",width:200},{label:"价格",prop:"price",width:200},{label:"是否",prop:"size",width:200}]}},methods:{nodeDisabledFunc:function(e,n){return"√"!==n.size}}};return Object(i["a"])({render:e,staticRenderFns:n},l)}()}},d=r,c=l("2877"),s=Object(c["a"])(d,a,t,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0efd4d.f68d272b.js.map