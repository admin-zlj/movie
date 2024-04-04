# 题目

![image.png](https://github.com/admin-zlj/myProject/blob/main/%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%8E%92%E7%89%88/images/1.png)

# 答案

## 一、有穷 36 种

首先不考虑顺序，先考虑有多少模版数，总数 = 模版数 x 每种模版的全排列数

> 1. 每一种模版经过排序后都会有`3!`种情况，也就是 6 种。
> 2. 模版数 6 种
> 3. 一共 36 种

![image.png](https://github.com/admin-zlj/myProject/blob/main/%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%8E%92%E7%89%88/images/1.png)

## 二、数据结构

我可以发现这个排版用`grid`布局可以很轻松的实现，我们可以参考`grid`布局的属性`grid-template-areas`。用下面这种结构来表示：

![image.png](https://github.com/admin-zlj/myProject/blob/main/%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%8E%92%E7%89%88/images/2.png)

```js
//与后端约定数据格式为json或者Object
//列如：
{
  temp: ['image', 'list', 'text'], //数组记录位置
  image: {}, //image 信息
  list: [], //list 信息
  text: {}, //text 信息
};
```

## 三、使用 grid 布局(请看下面的 gif 图)

这样的话就可以通过`grid-template-areas`这一个属性进行控制排版，而且还可以对每一个`item`进行设置`gap`、`width`、`height`、等属性来控制内部的样式

![gif.gif](https://github.com/admin-zlj/myProject/blob/main/%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%8E%92%E7%89%88/images/gif.gif)

# Last

1. 即使后端不按照我们想要的结构给我们数据，也可以写一个工具函数转化成这种方便我们前端控制的结构；

2. 我们只需要把这些封装进一个组件，入参就是答案二的数据，这么做后续的扩展性也是很不错的。

## 水平有限，若有不对的地方或者更优的方案还望指正
