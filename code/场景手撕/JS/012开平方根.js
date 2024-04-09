//题目: 实现sqrt函数, 计算一个数的平方根

//例如: sqrt(9) === 3
function sqrt(num) {
    if (num < 0) {
        return NaN;
    }

    if (num === 0 || num === 1) {
        return num;
    }

    let precision = 0.00001;
    let start = 0;
    let end = num;
    if (num < 1) {
        end = 1;
    }

    while (end - start > precision) {
        let mid = (start + end) / 2;
        if (mid * mid === num) {
            return mid;
        } else if (mid * mid < num) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return (start + end) / 2;
}


// 测试
console.log(sqrt(16)); // 输出 4
console.log(sqrt(2)); // 输出 1.41421
console.log(sqrt(0)); // 输出 0
console.log(sqrt(9)); // 输出 NaN
