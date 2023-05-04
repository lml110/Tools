## \_swapArray(list, oldI, newI, type) ⇒ <code>Array</code>
<p>复杂数组数据交换</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> |  |
| oldI | <code>Number</code> | <p>老位置</p> |
| newI | <code>Number</code> | <p>新位置</p> |
| type | <code>Number</code> | <p>1:拖动类型，默认交换</p> |

**Example**  
```javascript
//拖动: 拖动到新位置，其他元素按顺序递增或递减
//交换：其他元素不变，只交换要改变的位置
let arr = Array.from({length:10},(_,i)=>(i+1))
console.log(arr);
console.log(_swapArray(arr,2,7)); //[1, 2, 8, 4, 5, 6, 7, 3, 9, 10]
console.log(_swapArray(arr,2,7,1)); //[1, 2, 4, 5, 6, 7, 8, 3, 9, 10]
```
