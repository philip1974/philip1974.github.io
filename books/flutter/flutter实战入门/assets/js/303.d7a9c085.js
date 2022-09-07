(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1003:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用intl包实现国际化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用intl包实现国际化"}},[t._v("#")]),t._v(" 使用Intl包实现国际化")]),t._v(" "),s("p",[s("strong",[t._v("Intl")]),t._v(" 官方出品，包含用于处理国际化/本地化消息，日期和数字格式和解析，双向文本以及其他国际化问题。")]),t._v(" "),s("blockquote",[s("p",[t._v("pub地址："),s("a",{attrs:{href:"https://pub.dev/packages/intl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pub.dev/packages/intl"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Github地址："),s("a",{attrs:{href:"https://github.com/dart-lang/intl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dart-lang/intl"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Android Studio 和 VS Code 都有 Flutter Intl 插件，方便接入。")]),t._v(" "),s("h3",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),s("p",[t._v("并不是一定要使用插件，也可以通过命令行，当然 Flutter Intl 插件简化操作， Android Studio -> File -> Setting -> Plugins -> 搜索Flutter Intl：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213151.png",alt:""}})]),t._v(" "),s("p",[t._v("安装重启即可。")]),t._v(" "),s("p",[t._v("VS Code 的 Flutter Intl 插件："),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=localizely.flutter-intl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://marketplace.visualstudio.com/items?itemName=localizely.flutter-intl"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"添加依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),s("p",[t._v("在项目的 "),s("code",[t._v("pubspec.yaml")]),t._v(" 文件中添加依赖：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("dev_dependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  flutter_localizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("执行命令：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("flutter pub "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Tool->Flutter Intl ->Initalize for the project：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213159.png",alt:""}})]),t._v(" "),s("p",[t._v("成功后，在 pubspec.yaml末尾增加：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("flutter_intl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("在lib下生成"),s("strong",[t._v("generated 和 l10n")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213214.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("generated包下的intl目录默认生成 "),s("strong",[t._v("messages_all.dart")]),t._v(" 和 "),s("strong",[t._v("messages_en.dart")]),t._v(" 文件，messages开头的文件无需手动修改，是自动生成的。")]),t._v(" "),s("li",[t._v("generated包下的 "),s("strong",[t._v("I10n.dart")]),t._v(" 是Localizations和Delegate的实现，无需手动修改，是自动生成的。")]),t._v(" "),s("li",[t._v("l10n包下存在一个intl_en.arb文件，文案存放在此处。")])]),t._v(" "),s("h3",{attrs:{id:"添加语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加语言"}},[t._v("#")]),t._v(" 添加语言")]),t._v(" "),s("p",[t._v("Tool->Flutter Intl -> Add Locale：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213219.png",alt:""}})]),t._v(" "),s("p",[t._v("添加中文支持：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213227.png",alt:""}})]),t._v(" "),s("p",[t._v("自动生成相关文件：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213233.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"添加系统国际化支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加系统国际化支持"}},[t._v("#")]),t._v(" 添加系统国际化支持")]),t._v(" "),s("p",[t._v("在pubspec.yaml文件中添加包依赖：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  flutter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\n  flutter_localizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("MaterialApp 修改如下：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MaterialApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  localizationsDelegates"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GlobalMaterialLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GlobalWidgetsLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GlobalCupertinoLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  supportedLocales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supportedLocales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"在-intl-en-arb-和-intl-zh-arb下添加文案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-intl-en-arb-和-intl-zh-arb下添加文案"}},[t._v("#")]),t._v(" 在 intl_en.arb 和 intl_zh.arb下添加文案")]),t._v(" "),s("p",[t._v("添加一个 "),s("strong",[t._v("title")]),t._v(" 文案，intl_en.arb：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello word"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("intl_zh.arb：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("按 "),s("strong",[t._v("command + s")]),t._v(" 保存，generated 目录下相关文件将会重新生成。")]),t._v(" "),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalizationDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scaffold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${S.of(context).title}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://img.laomengit.com/20201012213239.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("Intl")]),t._v(" 还可以进行日期和数字格式化等， 具体功能可参考官方文档："),s("a",{attrs:{href:"https://github.com/dart-lang/intl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dart-lang/intl"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);