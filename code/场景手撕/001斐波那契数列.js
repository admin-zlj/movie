/** 
实现斐波那契数列
斐波那契（Fibonacci）数列，又称黄金分割数列，因数学家列昂纳多·斐波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：

1、1、2、3、5、8、13、21、34……
**/

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
