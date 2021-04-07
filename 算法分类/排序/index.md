<https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/README.md>

排序算法可以分为内部排序和外部排序，内部排序是数据记录在内存中进行排序，而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。常见的内部排序算法有：**插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序**等。用一张图概括：

![十大经典排序算法 概览截图](./assets/排序复杂度.png)

**关于时间复杂度**：

1. 平方阶 (O(n2)) 排序
 各类简单排序：直接插入、直接选择和冒泡排序。
2. 线性对数阶 (O(nlog2n)) 排序
 快速排序、堆排序和归并排序；
3. O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。
    希尔排序
4. 线性阶 (O(n)) 排序
 基数排序，此外还有桶、箱排序。
5. V8中的sort方法：数组长度小于等于10的时候，采用插入排序（稳定，O(n2)），大于10的时候，采用快排（不稳定，O(nlog2n)）。

**关于稳定性**：

稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序。

不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序。

**名词解释**：

**n**：数据规模

**k**：“桶”的个数

**In-place**：占用常数内存，不占用额外内存

**Out-place**：占用额外内存

**稳定性**：排序后 2 个相等键值的顺序和排序之前它们的顺序相同

----

### 稳定性

如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变。
比如我们有一组数据 2，9，3，4，8，3，按照大小排序之后就是 2，3，3，4，8，9。这组数据里有两个 3。经过某种排序算法排序之后，如果两个 3 的前后顺序没有改变，那我们就把这种排序算法叫作稳定的排序算法；如果前后顺序发生变化，那对应的排序算法就叫作不稳定的排序算法。

### 原地排序（Sorted in place）

原地排序算法，就是特指空间复杂度是 O(1) 的排序算法。我们今天讲的三种排序算法，都是原地排序算法。

## 冒泡排序

* 原地排序空间复杂度O(1)，稳定排序
* 最好O(n),最坏O(n^2),平均O(n^2)

```javascript
function BubbleSort(list){
    let len = list.length
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len-i; j++){
            if(list[j-1]>list[j]){
                [list[j-1],list[j]] = [list[j],list[j-1]]
            }
        }
    }
}
// 优化，当某次循环不需要交换值说明排序已完成
function BubbleSort(list){
    let len = list.length
    for(let i = 0; i < len; i++){
        let flag = false
        for(let j = 1; j < len-i; j++){
            if(list[j-1]>list[j]){
                flag = true
                [list[j-1],list[j]] = [list[j],list[j-1]]
            }
        }
        if(!flag) break
    }
    return list
}
```

## 插入排序

<https://visualgo.net/zh/sorting>

* 分为已排序和未排序，依次将未排序元素插入到已排序数组中
* 原地排序空间复杂度O(1)，稳定排序
* 最好O(n),最坏O(n^2),平均O(n^2)

```javascript
function InsertSort(list){
    if(!list || list.length <= 1) return
    let len =list.length

    for(let i = 1; i < len; i++){
        let j, value = list[i]
        for(j = i - 1; j >= 0; j--){
            // value为需要插入的元素
            if(list[j] > value){
                list[j+1] = list[j]
            }else{
                // 前面为已排序元素，不用再比较
                break
            }
        }
        // 跳出循环或者循环完毕，j都为上一轮判断的下标 - 1
        list[j+1] = value
    }
    return list
}
```

## 选择排序

* 分为已排序数组和未排序数组
* 每次选出最小的放入已排序数组

```javascript
function SelectionSort(list){
    let len = list.length
    for(let i = 0; i < len; i++){
        let minIndex = i
        for(let j = i+1; j < len; j ++){
            if(list[minIndex] > list[j]) minIndex = j
        }
        if(minIndex != i){
            [list[i], list[minIndex]] = [list[minIndex], list[i]]
        }
    }
    return list
}
```
