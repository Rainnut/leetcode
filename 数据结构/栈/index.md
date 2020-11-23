
# 栈

> 最近相关性
> 后进先出（LIFO）

## 基本思想

(使用链表模拟栈操作，在js中是否有必要)

* 只关心上一次操作
* 处理完上一次操作后，能够O(1)时间内查找到更前一次操作

## 题型

### 有效括号(20)

```javascript
var isValid = function(s) {
    var stack = []
    for(var ch of s){
        if (ch == '(') {
            stack.push(')')
        } else if (ch == '{') {
            stack.push('}')
        } else if (ch == '[') {
            stack.push(']')
        } else if (stack.length == 0 || ch != stack.pop()) {
            return false
        }  
    }
    return stack.length == 0
};
```

### 每日温度(739)

```javascript
var dailyTemperatures = function(T) {
  const stack = []
  const res = []
  for(let i = 0; i < T.length; i++) {
    res[i] = 0
    while(i > 0 && T[stack[stack.length - 1]] < T[i]) {
      let index = stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }
  return res
}
```
