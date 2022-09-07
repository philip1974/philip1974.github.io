(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{793:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"colorfiltered"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#colorfiltered"}},[t._v("#")]),t._v(" ColorFiltered")]),t._v(" "),n("p",[t._v("Flutter中大部分多组件都有"),n("code",[t._v("color")]),t._v("属性，可以方便的改变颜色，但如果想改变图片颜色就不是那么容易了，虽然Image组件也有color属性，但设置的"),n("code",[t._v("color")]),t._v("属性会覆盖整个组件，这并不是我们想要的，而ColorFiltered组件可以帮我们解决这个问题。")]),t._v(" "),n("p",[t._v("假设我们有这么一种图片，图片只有一段文字，其他地方透明：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/content.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303122720467.png",alt:""}})]),t._v(" "),n("p",[t._v("由于字体是白色的，所以将背景设置为灰色，这时来了一个需求根据系统样式改变字体颜色，大部分人第一个想法就是让UI切处所有颜色的图片，虽然效果可以实现，但问题太大了，第一：样式比较多的话必然会有大量的图片，导致App的体积较大。第二：如果允许用户自定义主题颜色，按照上面的方式基本无法实现。")]),t._v(" "),n("p",[t._v("我们可以使用ColorFiltered来实现上面的效果：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ColorFiltered")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          colorFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ColorFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlendMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modulate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/content.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303122838265.png",alt:""}})]),t._v(" "),n("p",[t._v("想要什么颜色直接改变颜色值即可。")]),t._v(" "),n("p",[t._v("ColorFiltered还可以实现类似“滤镜”效果，让一张图片和color进行融合：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Row")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Expanded")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/1.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Expanded")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ColorFiltered")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          colorFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ColorFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlendMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modulate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/1.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("原始图片和融合后图片效果对比：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303123443146.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdrczE5ODc=,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),n("p",[t._v("可以作用于任何组件，如果想让某一个区域变为灰色，用法如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ColorFiltered(\n          colorFilter: ColorFilter.mode(Colors.grey, BlendMode.saturation),\n          child: Container(\n            height: 100,\n            width: 200,\n            color: Colors.blue,\n          ),\n        )\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("对比效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303124003560.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdrczE5ODc=,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),n("p",[t._v("ColorFiltered用法比较简单，其中的"),n("code",[t._v("blendMode")]),t._v("非常重要，系统为我们提供了非常多的融合模式，关于"),n("code",[t._v("blendMode")]),t._v("可以查看如下文章：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.flutter.io/flutter/dart-ui/BlendMode-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文官方介绍"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/chenlove1/article/details/84574237",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文 不错的翻译"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);