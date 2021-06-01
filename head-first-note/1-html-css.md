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
# HTML HTML5
+ HTML5 --> 活的标准，向后兼容。
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
