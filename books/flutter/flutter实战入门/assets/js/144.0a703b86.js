(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{844:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flutterlogo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutterlogo"}},[t._v("#")]),t._v(" FlutterLogo")]),t._v(" "),n("p",[t._v("FlutterLogo是一个显示Flutter Logo的控件，虽然FlutterLogo使用起来比较简单，但其实现并不简单，首先FlutterLogo是一个动画控件（AnimatedContainer实现），其次FlutterLogo是通过Painter绘制出来。")]),t._v(" "),n("p",[t._v("用法如下：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlutterLogo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.laomengit.com/image-20200509140009597.png",alt:""}})]),t._v(" "),n("p",[t._v("显示Flutter文字标识，代码如下：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlutterLogo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FlutterLogoStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  textColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.laomengit.com/image-20200509140135484.png",alt:""}})]),t._v(" "),n("p",[n("code",[t._v("style")]),t._v("属性有3个值：")]),t._v(" "),n("ul",[n("li",[t._v("markOnly：只显示logo")]),t._v(" "),n("li",[t._v("horizontal：flutter文字显示在logo右面")]),t._v(" "),n("li",[t._v("stacked：flutter文字显示在logo下面")])]),t._v(" "),n("p",[t._v("设置动画：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FlutterLogoStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Column")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FlutterLogo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      textColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      curve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Curves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RaisedButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      onPressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FlutterLogoStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stacked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[t._v("效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.laomengit.com/FlutterLogo.gif",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);