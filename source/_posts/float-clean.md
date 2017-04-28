---
title: 前端学习笔记系列-1.浮动清除
author: CitrixWu
date: 2016-7-28
tags: [CSS,浮动清除]
categories: 前端学习笔记系列
---

### 清除浮动，什么时候需要清除浮动，清除浮动都有哪些方法？
> 因为浮动会使当前标签产生向上浮的效果，同时会影响到前后标签、父级标签的位置及 width height 属性。
而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。

<!--more-->
### 推荐的方法
#### 方法1：结尾处加空div标签clear:both
原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度
优点：简单，代码少，浏览器支持好，不容易出现怪问题
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不爽
建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法
评分：★★★☆☆ 

``` stylus
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat{clear:both}
</style> 
    <div class="div1"> 
    <div class="left">Left</div> 
    <div class="right">Right</div>
    <div class="clearfloat"></div>
    </div>
    <div class="div2">
       div2
    </div>
```


#### 方法2：父级div定义伪类:after和zoom
原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题
优点：浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
缺点：代码多，不少初学者不理解原理，要两句代码结合使用，才能让主流浏览器都支持
建议：推荐使用，建议定义公共类，以减少CSS代码
评分：★★★★☆ 

``` stylus
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
   </style> 
<div class="div1 clearfloat"> 
<div class="left">Left</div> 
<div class="right">Right</div> 
</div>
<div class="div2">
   div2
</div>
```


#### 方法3：父级div定义overflow:hidden
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度
优点：简单，代码少，浏览器支持好
缺点：不能和position配合使用，因为超出的尺寸的会被隐藏
建议：只推荐没有使用position或对overflow:hidden理解比较深的朋友使用
评分：★★★☆☆ 

``` stylus
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:hidden}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
</div>
```
