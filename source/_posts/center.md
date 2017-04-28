---
title: 前端学习笔记系列-3.如何保持浮层水平垂直居中
author: CitrixWu
date: 2016-8-9
tags: [CSS,居中]
categories: blog
header-img: "post-bg-ios9-web.jpg"
catalog: true
---
> 方法一：给出父元素确定的height，然后margin:0 auto;

> 方法二：position：absolute，top:50%,left:50%,margin-top:-窗体height一半;margin-left:-窗体width一半；

<!-- more -->

> 方法三（推荐）：使用transform的平移代替margin，无需固定窗体宽高度。（需要IE9以上才支持）
```
.element {
    width: 600px; height: 400px;
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
}
```

> 方法四（有点奇葩）：上下左右均0位置定位；margin: auto于是，就居中了（别忘记给父类定位{position:relative;}。）

> 方法五：**还有一种办法是父级display:table;子级display:table-cell; vertical-align:center;
