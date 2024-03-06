---
theme: fancy
highlight: atelier-plateau-dark
---
# 题目

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c8836a453be4cd39041ba15b1694f0b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1032&h=621&s=240066&e=png&b=f9f9f9)

# 答案

## 一、有穷  36种
首先不考虑顺序，先考虑有多少模版数，总数 = 模版数 x 每种模版的全排列数
> 1. 每一种模版经过排序后都会有`3!`种情况，也就是6种。
> 2. 模版数6种
>  3. 一共 36种


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a802030c0604ae5856a15a455ae7268~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=580&h=699&s=3807&e=png&b=ffffff)

## 二、数据结构
我可以发现这个排版用`grid`布局可以很轻松的实现，我们可以参考`grid`布局的属性`grid-template-areas`。用下面这种结构来表示：


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66e900db67314a19b67826029d1dfdb2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=871&h=741&s=8784&e=png&b=ffffff)
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

## 三、使用grid布局
这样的话就可以通过`grid-template-areas`这一个属性进行控制排版，而且还可以对每一个`item`进行设置`gap`、`width`、`height`、等属性来控制内部的样式

![动画.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9788ff5569104c6d9f5ddff0d7225344~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1902&h=1002&s=333358&e=gif&f=115&b=292c34)


# Last
1. 即使后端不按照我们想要的结构给我们数据，也可以写一个工具函数转化成这种方便我们前端控制的结构；

2. 我们只需要把这些封装进一个组件，入参就是答案二的数据，这么做后续的扩展性也是很不错的。