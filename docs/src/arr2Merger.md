## getIntersection(arr1, arr2)
<p>得到两个数组的交集, 两个数组的元素为数值或字符串
获取公共值</p>


| Param | Type |
| --- | --- |
| arr1 | <code>Array</code> | 
| arr2 | <code>Array</code> | 

## getUnion(arr1, arr2)
<p>合并两个数组并去重
排除重复值并合并</p>


| Param | Type |
| --- | --- |
| arr1 | <code>Array</code> | 
| arr2 | <code>Array</code> | 

## arr2Merger(arr1, arr2, iscom) ⇒ <code>Array</code>
<p>两个简单数组合并</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> |  |
| arr2 | <code>Array</code> |  |
| iscom | <code>Boolean</code> | <p>是否获取并集</p> |

**Example**  
```javascript
console.log(arr2Merger([1,2,4,[2,5]],[2,5,[3,4]],true)); //[2, 5, 4]
console.log(arr2Merger([1,2,4,[2,5]],[2,5,[3,4]])); //[1, 2, 4, 5, 3]
```
