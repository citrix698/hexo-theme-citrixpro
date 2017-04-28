---
title: 前端学习笔记系列-2.JavaScript中call()与apply()区别
author: CitrixWu
date: 2016-8-8
tags: [JavaScript1,apply,call]
categories: blog
---

> 转自http://my.oschina.net/warmcafe/blog/74973

今天读《JavaScript权威指南》时发现其中有段代码用到了apply方法用于递归实现数组的展开。可是我不懂这个函数的用法，因此查了一下，将资料整理如下。 

Javascript的每个Function对象中有一个apply方法： 
> function.apply([thisObj[,argArray]])

还有一个类似功能的call方法： 
> function.call([thisObj[,arg1[, arg2[, [,.argN]]]]])

### 它们各自的定义： 

- apply：应用某一对象的一个方法，用另一个对象替换当前对象。 
- call：调用一个对象的一个方法，以另一个对象替换当前对象。 

#### 它们的共同之处： 
- 都“可以用来代替另一个对象调用一个方法，将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。”——摘自JScript5.5 .chm 

#### 它们的不同之处： 
- apply：最多只能有两个参数——新this对象和一个数组 argArray。如果给该方法传递多个参数，则把参数都写进这个数组里面，当然，即使只有一个参数，也要写进数组里面。如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。 
- call：则是直接的参数列表，主要用在js对象各方法互相调用的时候，使当前this实例指针保持一致,或在特殊情况下需要改变this指针。如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。  
- 更简单地说，apply和call功能一样，只是传入的参数列表形式不同：如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 

示例代码（注：注释中是call的用法，与上面apply的实现效果相同）： 

（1）基本用法： 
```
function add(a,b)
{
    alert(a+b);
}
function sub(a,b)
{
    alert(a-b);
}

add.apply(sub,[3,1]);
//add.call(sub,3,1);
```
（2）实现继承： 
```
function Animal(name){    
    this.name = name;    
    this.showName = function(){    
        alert(this.name);    
    }    
}    
   
function Cat(name){  
    Animal.apply(this, [name]);
    //Animal.call(this, name);  
}    
var cat = new Cat("Black Cat");   
cat.showName();
```
（3）多重继承： 
```
function Class10()
{
    this.showSub = function(a,b)
    {
        alert(a-b);
    }
}

function Class11()
{
    this.showAdd = function(a,b)
    {
        alert(a+b);
    }
}

function Class2()
{
    Class10.apply(this);
    Class11.apply(this);
    //Class10.call(this);
    //Class11.call(this);
}

var c2=new Class2();
c2.showSub(3,1);
c2.showAdd(3,1);
```
> apply的其他巧妙用法： 

看到这里，我就会觉得既然apply和call的用法差不多，那么为什么还同时存在这两种方法呢？完全可以丢掉一个呀。后来才发现一篇文章中讲到apply因为它所传参数为数组这一特点还有许多其他的妙用。 

a) Math.max 可以实现得到数组中最大的一项： 

因为Math.max 参数里面不支持Math.max([param1,param2]) 也就是数组，但是它支持Math.max(param1,param2,param3…)，所以可以根据apply的特点来解决 var max=Math.max.apply(null,array)，这样轻易的可以得到一个数组中最大的一项。(apply会将一个数组转换为一个参数接一个参数的传递给方法) 

这块在调用的时候第一个参数给了一个null，这个是因为没有对象去调用这个方法，只需要用这个方法帮助运算，得到返回的结果就行，所以直接传递了一个null过去。 

b) Math.min  可以实现得到数组中最小的一项： 

同样和 max是一个思想 var min=Math.min.apply(null,array)。 

c) Array.prototype.push 可以实现两个数组合并： 

同样push方法没有提供push一个数组，但是它提供了push(param1,param,…paramN) 所以同样也可以通过apply来转换一下这个数组，即: 

var arr1=new Array("1","2","3"); 

var arr2=new Array("4","5","6"); 

Array.prototype.push.apply(arr1,arr2);  

也可以这样理解，arr1调用了push方法，参数是通过apply将数组装换为参数列表的集合。 

d) 小结：通常在什么情况下,可以使用apply类似Math.min等之类的特殊用法: 

一般在目标函数只需要n个参数列表,而不接收一个数组的形式（[param1[,param2[,…[,paramN]]]]），可以通过apply的方式巧妙地解决这个问题。 

  

> 参考资源： 

（1）[JavaScript]Call和Apply方法 

（2）JS中的call()和apply()方法 

（3）Js apply方法详解 




> 补充资料： 

（1）javascript中apply方法和call方法的作用以及prototype.js中的应用 

（2）js中apply方法的使用 

（3）js中apply方法的使用(2) 
