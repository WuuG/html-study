# HTML
+ 元素 = 开始标记 + 内容 + 结束标记
+ q标签,会在内部内容上加上”“,短引用,inline --> 对SEO优化，样式设计等有所帮助
+ blockquoto标签，长引用,block
+ void元素：没有实际内容的元素，可以进行简写。 如下面二者
   ``` html
   <br></br>
   <br>
   ```
+ order list -> ol, unorder list -> ul, list item -> li
+ jpeg,png,git
+ DOCTYPE --> 为浏览器指定这个页面的文档类型
+ \<meta> --> 告诉浏览器关于页面的一些信息
   ``` html
   <meta charset="utf-8">
   ```
# CSS
+ 继承：一般来说，文本样式能继承，其他样式继承。
+ 若是选择器的优先级相同，则在CSS文件中靠后的样式获胜。**所以样式表引入的顺序很重要**
+ text-decoration，可以添加多个哦。可以添加条线 �
## font
+ font-family: 通常是包含一个字体列表，它们都来自一个字体系列，最后总是放一个通用的字体系列。
+ woff: web open font format(web开放字体格式)
+ @font-face
    ``` css
    @font-face {
      font-family: "icomoon";
      src: url("./icomoon.woff");
    }
    body {
      font-family: icomoon;
    }
    ```
+ font-size --> 单位 px em % 或者直接使用关键字(small larger...)
    ``` css
    h1 {
    /* 是父元素的两倍 */
      font-size: 2em;
    }
    ```
### 指定字体大小的一个小秘诀
这样设置后，通过修改body的字体大小，整个页面的字体都会进行缩放了。
``` css
body {
  font-size: 14px;
}
h1 {
  /* 是父元素的两倍 */
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
``` 
### font-style
斜体：衬线和弯曲。  倾斜风格：普通文字向右倾斜
``` css
blockquote {
  /* 很多时候二者毫无区别 */
  font-style: italic;
  font-style: oblique; 
}
```
## Color
+ color属性会控制文本和边框颜色 --> 前景色？
### 颜色表示的三种方法
1. 关键字
2. rgb() --> 参数可以是百分比，也可以是0-255的数字
3. 十六进制 #cc6600  红绿蓝各两位，也是0-255的数字,两位相同可缩写。
## 盒模型 
### background-repeat
``` css
{
  background-repeat: no-repeat;
  background-repeat: repeat-x;
  background-repeat: repeat-y;
  background-repeat: inherit;
}
```
### border
+ 八种样式
## Id 和 类
+ Id唯一标识，类重用
+ Id选择器，只与页面中的一个元素匹配
## 媒体查询
用在html上
``` html
  <link rel="stylesheet" href="./lounge-mobile.css" media="screen and (max-width:480px)">
  <link rel="stylesheet" href="./lounge-print.css" media="print">
```
用在css上
``` css
@media screen and (min-device-width: 481px) {
 #guarantee {
   margin-right:250px
 }
}
```
## line-height
``` css
{
  /* 标识根据自身字体大小调整行高 */
  line-height:1 
}
```
## 缩写
### font
``` css
{
  /* font: font-style font-variant font-weight font-size/line-height font-family */
  font: 14px/1.6em verdana, Helvetica, Arial, sans-serif;
}
```
## 流式布局
+ 并排放置内联元素时，如所期望那样，两个元素外边距均有效
+ 当上下放置两个块级元素时，则会将二者共同的外边距折叠在一起，所以外边距为较大的外边距的高度
+ 嵌套时也可能存在外边距折叠的问题 --> 外边距塌陷
### 浮动
+ 块级元素则会无视浮动元素。
+ 内联定位时，会在浮动元素边缘围绕。
+ 浮动的优点，就是会让文字环绕身边，实现适应性拉伸和收缩。
+ clear属性：让某个元素的左边右边或者两边不允许有浮动内容。
+ 缺点：顺序无法放映内容的相对重要性，且列的高度不同。
   ``` css
   {
    clear: right;
   }
   ```
## CSS表格显示 
新的布局方式，表格显示。
``` html
  <div id="tableContainer">
    <div id="tableRow">
      <div id="main"></div>
    </div>
  </div>
```
``` css
#tableContainer {
  display: table;
  border-spacing: 10px;
}
#tableRow {
  display: table-row;
}
#mina {
  display:table-cell;
}
```
# HTML HTML5
+ HTML5 --> 活的标准，向后兼容。
+ time --> datetime属性
+ article
+ section
+ header
+ footer
## video
``` html
<video controls autoplay width="512" height="288" src="video/tweetsip.mp4" poster="...png" loop></video>
controls 控制组件
autoplay 自动播放
poster  未播放时显示的图像
preload 细粒度控制视频加载  none metadata auto
loop 循环
```
还可以设置多种格式，也可以设置具体的编码解码器
``` html
<video controls autoplay width="512" height="288" loop>
	<source src="./video/tweetsip.mp4" type="video/mp4; codecs='avc1.42E01E, mo4a.40.2'">
	<source src="./video/tweetsip.ogv">
	<source src="./video/tweetsip.webm">
	<object >...</object>  若不认识video就会使用这个标签
	<p>Sorry,your browser doesn't support the video element</p>
</video>
```
## 其他标签
``` html
<!-- 类似mark笔的效果 -->
<mark>Here at Starbuzz we're </mark> 
<!-- 进度条 -->
<progress></progress>
<!-- 显示JavaScript绘制的图像和动画 -->
<canvas></canvas>
<!-- 显示某个范围的度量 -->
<meter></meter>
```
## Table
+ table
+ tr --> table row
+ th --> table head
+ td --> table data
+ caption --> 表格标题
+ border-spacing --> 边框间距,相当于表格单元格的外边距,这个tables定义在table上
+ border-collapse --> 折叠边框
### rwospan
单元格合并
``` html
<tr>
  <td rowspan="2">Truth of City, ID</td>
  <td >June 25th</td>
  <td >74</td>
  <td rowspan="2">5,312 ft</td>
  <td rowspan="2">50</td>
  <td >3/5</td>
</tr>
<tr>
  <td >June 25th</td>
  <td >74</td>
  <td >3/5</td>
</tr>
```
### colspan
跨多列
## list-style-image
``` css
li {
  list-style-image: url(./images/backpack.gif);
  padding-top: 5px;
  margin-left: 20px;
}
```