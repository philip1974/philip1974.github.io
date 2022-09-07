(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{932:function(e,s,n){"use strict";n.r(s);var t=n(44),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"sliverappbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sliverappbar"}},[e._v("#")]),e._v(" SliverAppBar")]),e._v(" "),n("p",[e._v("SliverAppBar控件可以实现页面头部区域展开、折叠的效果，类似于Android中的CollapsingToolbarLayout。\n先看下SliverAppBar实现的效果，效果图如下：")]),e._v(" "),n("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img-blog.csdnimg.cn/20200118165659606.gif"}}),e._v(" "),n("p",[e._v("SliverAppBar控件需要和CustomScrollView搭配使用,SliverAppBar要通常放在slivers的第一位，后面接其他sliver控件。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("CustomScrollView(\n      slivers: <Widget>[\n        SliverAppBar(\n          \n        ),\n        //其他sliver控件\n      ],\n    )\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("SliverAppBar和其他slivers控件的结构如下：")]),e._v(" "),n("p",[e._v("SliverAppBar中有一个非常重要的参数flexibleSpace，flexibleSpace是SliverAppBar中展开和折叠区域，flexibleSpace与expandedHeight一起使用，\nexpandedHeight表示flexibleSpace的高度，")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("SliverAppBar(\n          expandedHeight: 200.0,\n          flexibleSpace: FlexibleSpaceBar(\n          \n          ),\n        ),\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("SliverAppBar其他常用属性说明如下：")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("leading")]),e._v(" "),n("td",[e._v('左侧控件，通常情况下为"返回"图标')])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("标题，通常为Text控件")])]),e._v(" "),n("tr",[n("td",[e._v("actions")]),e._v(" "),n("td",[e._v("右侧控件")])]),e._v(" "),n("tr",[n("td",[e._v("flexibleSpace")]),e._v(" "),n("td",[e._v("展开和折叠区域")])]),e._v(" "),n("tr",[n("td",[e._v("bottom")]),e._v(" "),n("td",[e._v("底部控件")])]),e._v(" "),n("tr",[n("td",[e._v("elevation")]),e._v(" "),n("td",[e._v("阴影")])]),e._v(" "),n("tr",[n("td",[e._v("backgroundColor")]),e._v(" "),n("td",[e._v("背景颜色")])]),e._v(" "),n("tr",[n("td",[e._v("expandedHeight")]),e._v(" "),n("td",[e._v("展开区域的高度")])]),e._v(" "),n("tr",[n("td",[e._v("floating")]),e._v(" "),n("td",[e._v("设置为true时，向下滑动时，即使当前CustomScrollView不在顶部，SliverAppBar也会跟着一起向下出现")])]),e._v(" "),n("tr",[n("td",[e._v("pinned")]),e._v(" "),n("td",[e._v("设置为true时，当SliverAppBar内容滑出屏幕时，将始终渲染一个固定在顶部的收起状态")])]),e._v(" "),n("tr",[n("td",[e._v("snap")]),e._v(" "),n("td",[e._v("设置为true时，当手指放开时，SliverAppBar会根据当前的位置进行调整，始终保持展开或收起的状态，此效果在floating=true时生效")])])])]),e._v(" "),n("p",[e._v("实现文章开头效果的整体代码如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class SliverAppBarDemo extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return CustomScrollView(\n      slivers: <Widget>[\n        SliverAppBar(\n          pinned: true,\n          expandedHeight: 200.0,\n          flexibleSpace: FlexibleSpaceBar(\n            title: Text('复仇者联盟'),\n            background: Image.network(\n              'http://img.haote.com/upload/20180918/2018091815372344164.jpg',\n              fit: BoxFit.fitHeight,\n            ),\n          ),\n        ),\n        SliverFixedExtentList(\n          itemExtent: 80.0,\n          delegate: SliverChildBuilderDelegate(\n            (BuildContext context, int index) {\n              return Card(\n                child: Container(\n                  alignment: Alignment.center,\n                  color: Colors.primaries[(index % 18)],\n                  child: Text(''),\n                ),\n              );\n            },\n          ),\n        ),\n      ],\n    );\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);