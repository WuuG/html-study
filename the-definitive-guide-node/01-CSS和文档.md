- [元素](#元素)
	- [置换元素和非置换元素](#置换元素和非置换元素)
	- [元素显示方式](#元素显示方式)
- [把CSS应用到HTML上](#把css应用到html上)
	- [link标签](#link标签)
		- [属性](#属性)
		- [候选样式表](#候选样式表)
	- [style元素](#style元素)
	- [@import指令](#import指令)
	- [Http 链接](#http-链接)
	- [行内样式表](#行内样式表)
- [样式表中的内容](#样式表中的内容)
	- [标记](#标记)
	- [规则的结构](#规则的结构)
	- [处理空白](#处理空白)
	- [CSS注释](#css注释)
- [媒体查询](#媒体查询)
	- [用法](#用法)
	- [简单的媒体查询](#简单的媒体查询)
	- [媒体类型](#媒体类型)
	- [媒体描述符](#媒体描述符)
	- [媒体特性描述符和值的类型](#媒体特性描述符和值的类型)
- [特性查询](#特性查询)
# 元素
## 置换元素和非置换元素
+ 置换元素：用来置换元素内容的部分不由文档内容直接表示。如IMG
+ 非置换元素：HTML大部分元素都是非置换元素，元素的内容由用户代理(通常是浏览器)在元素自身生成的框内显示。
## 元素显示方式
CSS将元素分为块级和行内两种基本类型。

根据HTML规范，行内元素可以放在块级元素中，反之则不行（但是还是可以显示,虽然不符合规范）,但是CSS规则没有这个限制(可以让一个块级元素在行内元素内)。
# 把CSS应用到HTML上
## link标签
link的作用是将其他文档与当前文档关联起来。若是通过link连接的样式表，就称为外部样式表。

为了正确加载外部样式表，link标签必须放在head元素中。
在Style标签内通过@import也可以引入外部样式表，但必须将其放在所在样式表的开头。
``` js
<link rel="stylesheet" type="text/css" href="sheet1.css" media="all" />
<style type="text/css">
@import url(sheet2.css);
/* These are my styles! Yay! */
</style>
```
### 属性
+ ref：relation，表明关系。上例中为stylesheet，说明为样式表。
+ type: 说明通过link标签加载的数据类型。
+ href: 其值为样式表的URL。
+ media: 其值为一个或多个媒体描述符。
+ title: 设置标题，用于分组,使用不好有副作用
### 候选样式表
通过将属性ref设置为alternate stylesheet,将样式表设置为候选样式表。可以给用用户选择。但现代浏览器基本上都不支持候选样式表。

通过给样式表设定title可以对样式表进行分组。

若是给多个首选样式表设置title，则只会选择一个其中一个样式表。其他的会被忽略。

如果不为样式表设置标题，那么它就是永久样式表,始终用于显示。
## style元素
+ style元素可以引入的样式表称为文档样式表(document stylesheet)或嵌入式样式表(embeded stylesheet)。
+ style元素应该始终设定type属性。对CSS文档来说，正确的值是"text/css"<--实际使用时，不加也能够显示
+ style元素也支持media属性
## @import指令
与link相同的作用，二者之间唯一的主要区别在于句法和指令的位置。

@import导入的样式也可以显示导入的样式表应用于何种媒体。
``` js
		@import url(./02-sheet.css) all;
		@import url(./03-sheet2.css) screen;
```
如前文所提@import需要放在开头，若不是符合规范的用户代理会忽略规则后的@import
> 旧版IE不会忽略
## Http 链接
也可以通过HTTP首部为文档关联CSS。
## 行内样式表
+ 通过元素的style属性可以添加行内样式表。行内样式表不支持@import
+ 不建议使用style属性，因为复用性和集中管理等优点就无法用上了。
# 样式表中的内容
## 标记
样式表中不能有标记，除了HTML注解标记（节点？）
## 规则的结构
+ 选择符: 定义文档中哪部分受影响。
+ 声明块：由多个键值对构成。
## 处理空白
与处理HTML类似，多个空白连续合成一个空白(空格、制表符、换行符)
## CSS注释
在CSS中只能用/* */进行注释的书写。对CSS解析器来说CSS注释相当于没出现过。因此不算空白，甚至可以放在声明内部
# 媒体查询
媒体查询定义浏览器在何种媒体环境中使用指定的样式表。
## 用法
+ link元素的media
+ style元素的media
+ @import声明的媒体描述部分
+ @media 声明的媒体描述部分
## 简单的媒体查询
当需要在投影环境下使用不同的样式时，可以如下例
``` css
@media projection {
	body { background-color: yellow;}
}
```
一个样式表可以由任意多个@media块构成。
## 媒体类型
媒体查询时最基本的形式媒体类型，由CSS2引入。媒体类型就是指明不同媒体的标注。
+ all: 用于所有展示媒体
+ print: 为有实例的用户打印文档时使用，也在预览打印效果时使用。
+ screen: 在屏幕媒体上展示文档时使用。

通过逗号分割多个媒体类型
``` html
<link rel="stylesheet" href="./03-sheet2.css" media="print,projection">
```
## 媒体描述符
能够使用媒体类型的地方都可以使用媒体查询,以下是一个彩打的例子
``` css
@media print and (color) {
	body {
		background-color: skyblue;
	}
}
```
一般情况下媒体特征描述符格式类似于CSS中的一堆属性和值。二者最大的区别是，特性描述符可以不指定值。如(color)就是在做判断，这个媒体是否是彩色的。

媒体查询中的逻辑关键字
+ and: &&
+ not:对整个查询取反

> not关键字只能在媒体查询开头使用

媒体查询不支持OR关键字。分割多个媒体查询的逗号相当于OR

此外还有一个关键字only,专门用于保证向后兼容。其可以在不支持的媒体查询的就浏览器中隐藏样式表。同样的only关键字只能用在媒体查询开头。
``` css
@import url(newcss) only all /* 在不支持媒体查询浏览器中 媒体类型为only all，而这无效，所以不会应用样式表*/
```
## 媒体特性描述符和值的类型
以下列出了列出了截至2017年的所有可用的描述符
+ width
+ min-width
+ max-width
+ device-width
+ min-device-width
+ max-device-width
+ height
+ min-height
+ max-height
+ device-height
+ min-device-height
+ max-device-height
+ aspect-ratio
+ min-aspect-ratio
+ max-aspect-ratio
+ device-aspect-ratio
+ min-device-aspect-ratio
+ max-device-aspect-ratio
+ color
+ min-color
+ max-color
+ color-index
+ min-color-index
+ max-color-index
+ monochrome
+ min-monochrome
+ max-monochrome
+ resolution
+ min-resolution
+ max-resolution
+ orientation
+ scan
+ grid

另外还加入了两个新的值类型
+ \<ratio>
+ \<resolution>
# 特性查询
根据用户代理是否支持特定的CSS属性及其值来应用一段样式。
``` css
@supports(color:grey) {
	body {
		color: gray;
	}
}
```
特性查询是渐进式增强样式的完美方式。比如想在浮动布局之外添加栅格布局，可以保留现在的布局方式，就在样式表中添加下面的样式
``` css
@supports(display: grid){
	section#main {
		display: grid;
	}
	/* 去掉久布局的样式 */
	/* 添加新布局的样式 */
}
```
特性查询可以嵌套，也可以嵌套在媒体查询中，反过来也是可以的。
``` css
@supports(display: flex){
 @media screen {
	 /* 针对屏幕设备的弹性盒样式 */
 }
 @media print {
	 /* 针对打印设备的弹性盒样式 */
 }
}
```
特性查询也支持使用逻辑运算符。and not or
``` css
@supports(display: grid )and (shape-outside: circle()){
	/* 栅格和形状样式 */
}
```
特性查询中可以使用多个逻辑运算符，但是为了保证条例清晰，要使用括号
``` css
@supports (color: black) and (display: flex) or (display: grid) { /*失效,一般而言编辑器插件会报错*/
	body {
		background-color: red;
	}
}

@supports (color: black) and ((display: flex) or (display: grid)) { /* 添加括号后正常 */
	body {
		background-color: skyblue;
	}
}
```
